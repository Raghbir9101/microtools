'use client';

import { useState } from 'react';
import ImageUploader from './ImageUploader';
import CompressionControls, { CompressionOption } from './CompressionControls';
import ResultPreview from './ResultPreview';
import {
  compressImageToSize,
  CompressionResult,
  formatFileSize,
} from '@/lib/imageCompression';

interface CompressorToolProps {
  options: CompressionOption[];
  title: string;
  description: string;
  /** When true, compresses automatically with options[0].size immediately after drop — no button click needed */
  autoCompress?: boolean;
  /** Controls the portal-specific acceptance badge shown in ResultPreview */
  portalContext?: 'ssc' | 'ibps' | 'railway' | 'signature' | 'upsc' | 'generic';
}

type Step = 'upload' | 'compress' | 'result';

const steps = [
  { id: 'upload', label: 'Upload', icon: '📤' },
  { id: 'compress', label: 'Compress', icon: '⚡' },
  { id: 'result', label: 'Download', icon: '✅' },
] as const;

export default function CompressorTool({
  options,
  title,
  description,
  autoCompress = false,
  portalContext = 'generic',
}: CompressorToolProps) {
  const [step, setStep] = useState<Step>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [result, setResult] = useState<CompressionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleImageSelect = (file: File, previewUrl: string) => {
    setSelectedFile(file);
    setPreview(previewUrl);
    setResult(null);

    if (autoCompress && options.length > 0) {
      // Skip the "compress" step — fire immediately with the default (first) option
      setStep('compress');
      handleCompressInternal(file, options[0].size);
    } else {
      setStep('compress');
    }
  };

  const handleCompressInternal = async (file: File, sizeKB: number) => {
    setIsLoading(true);
    setSelectedSize(sizeKB);
    try {
      const compressionResult = await compressImageToSize(file, sizeKB);
      setResult(compressionResult);
      setStep('result');
    } catch {
      setResult({
        blob: new Blob(),
        originalSize: file.size,
        compressedSize: 0,
        compressionPercentage: 0,
        quality: 0,
        success: false,
        error: 'An unexpected error occurred. Please try again with a different image.',
      });
      setStep('result');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompress = async (sizeKB: number) => {
    if (!selectedFile) return;
    await handleCompressInternal(selectedFile, sizeKB);
  };

  const handleReset = () => {
    setStep('upload');
    setSelectedFile(null);
    setPreview('');
    setResult(null);
    setSelectedSize(null);
  };

  const stepIndex = steps.findIndex((s) => s.id === step);

  return (
    <div className="space-y-4">
          {/* Step Indicator */}
          <div className="flex items-center gap-2">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-2 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      i < stepIndex
                        ? 'bg-emerald-500 text-white'
                        : i === stepIndex
                        ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {i < stepIndex ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span
                    className={`text-xs font-semibold hidden sm:inline ${
                      i === stepIndex ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-px transition-colors ${i < stepIndex ? 'bg-emerald-400' : 'bg-border'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Tool Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-1.5">{title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>

            {/* Upload Step */}
            {step === 'upload' && (
              <div className="animate-fade-in-up">
                <ImageUploader onImageSelect={handleImageSelect} />
              </div>
            )}

            {/* Compress Step */}
            {step === 'compress' && selectedFile && (
              <div className="space-y-5 animate-fade-in-up">
                {/* Preview + File Info */}
                <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-muted/30 border border-border">
                  <div className="w-full sm:w-32 h-24 rounded-lg overflow-hidden border border-border bg-white flex-shrink-0 flex items-center justify-center">
                    <img
                      src={preview}
                      alt="Selected image"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium text-foreground truncate">{selectedFile.name}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-muted text-muted-foreground">
                        {formatFileSize(selectedFile.size)}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-muted text-muted-foreground uppercase">
                        {selectedFile.type.split('/')[1]}
                      </span>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1 w-fit"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Remove & upload different image
                    </button>
                  </div>
                </div>

                <CompressionControls
                  options={options}
                  onCompress={handleCompress}
                  isLoading={isLoading}
                  activeSize={selectedSize}
                />
              </div>
            )}

            {/* Result Step */}
            {step === 'result' && result && (
              <ResultPreview
                preview={preview}
                originalSize={result.originalSize}
                compressedSize={result.compressedSize}
                compressionPercentage={result.compressionPercentage}
                quality={result.quality}
                blob={result.blob}
                targetSizeKB={selectedSize ?? 0}
                success={result.success}
                error={result.error}
                onReset={handleReset}
                portalContext={portalContext}
              />
            )}
          </div>
    </div>
  );
}
