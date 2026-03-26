'use client';

import { useState, useCallback } from 'react';
import ImageUploader from './ImageUploader';

type Step = 'upload' | 'processing' | 'result';

const steps = [
  { id: 'upload', label: 'Upload', icon: '📤' },
  { id: 'processing', label: 'Remove BG', icon: '✂️' },
  { id: 'result', label: 'Download', icon: '✅' },
] as const;

type BgColor = 'transparent' | 'white' | 'custom';


export default function BackgroundRemoverTool() {
  const [step, setStep] = useState<Step>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [resultPreview, setResultPreview] = useState('');
  const [progressMsg, setProgressMsg] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState<BgColor>('transparent');
  const [customColor, setCustomColor] = useState('#ffffff');
  const [showOriginal, setShowOriginal] = useState(false);


  const stepIndex = steps.findIndex((s) => s.id === step);

  const handleImageSelect = useCallback(async (file: File, preview: string) => {
    setSelectedFile(file);
    setOriginalPreview(preview);
    setResultBlob(null);
    setResultPreview('');
    setError(null);
    setProgressMsg('Uploading image to server…');
    setStep('processing');

    try {
      const formData = new FormData();
      formData.append('image', file);
      setProgressMsg('Removing background… typically takes 5–15 seconds');

      const response = await fetch('/api/remove-background', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? 'Server error');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setResultBlob(blob);
      setResultPreview(url);
      setStep('result');
    } catch (err: unknown) {
      console.error(err);
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(`Background removal failed: ${message}. Please try again.`);
      setStep('upload');
    }
  }, []);

  const handleReset = () => {
    setStep('upload');
    setSelectedFile(null);
    setOriginalPreview('');
    if (resultPreview) URL.revokeObjectURL(resultPreview);
    setResultBlob(null);
    setResultPreview('');
    setError(null);
    setShowOriginal(false);
  };

  const buildFinalBlob = useCallback(
    (color: BgColor, hex: string): Promise<Blob> => {
      return new Promise((resolve, reject) => {
        if (!resultBlob) return reject(new Error('No result'));
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d')!;
          if (color !== 'transparent') {
            ctx.fillStyle = color === 'custom' ? hex : '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          ctx.drawImage(img, 0, 0);
          const mime = color === 'transparent' ? 'image/png' : 'image/jpeg';
          canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Canvas error'))), mime, 0.95);
        };
        img.onerror = reject;
        img.src = resultPreview;
      });
    },
    [resultBlob, resultPreview]
  );

  const handleDownload = useCallback(
    async (color: BgColor) => {
      try {
        const hex = color === 'custom' ? customColor : '#ffffff';
        const blob = await buildFinalBlob(color, hex);
        const ext = color === 'transparent' ? 'png' : 'jpg';
        const baseName = selectedFile?.name.replace(/\.[^/.]+$/, '') ?? 'image';
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${baseName}-no-bg.${ext}`;
        a.click();
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error(err);
      }
    },
    [buildFinalBlob, customColor, selectedFile]
  );

  const checkerboard = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect width='8' height='8' fill='%23e5e7eb'/%3E%3Crect x='8' y='8' width='8' height='8' fill='%23e5e7eb'/%3E%3Crect x='8' y='0' width='8' height='8' fill='%23f9fafb'/%3E%3Crect x='0' y='8' width='8' height='8' fill='%23f9fafb'/%3E%3C/svg%3E")`;

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
              <span className={`text-xs font-semibold hidden sm:inline ${i === stepIndex ? 'text-foreground' : 'text-muted-foreground'}`}>
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
          <h2 className="text-2xl font-bold text-foreground mb-1.5">Remove Image Background</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Upload your photo and get a clean transparent or white background — perfect for passport photos, govt ID cards, and profile pictures.
          </p>
        </div>

        {/* Upload Step */}
        {step === 'upload' && (
          <div className="animate-fade-in-up space-y-4">
            <ImageUploader onImageSelect={handleImageSelect} />
            {error && (
              <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/8 border border-destructive/20 text-destructive text-sm">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}
            <p className="text-xs text-muted-foreground text-center">
              Powered by <strong>withoutBG Focus</strong> · runs on your server · no data shared
            </p>
          </div>
        )}

        {/* Processing Step */}
        {step === 'processing' && (
          <div className="animate-fade-in-up">
            {originalPreview && (
              <div className="mb-6 flex justify-center">
                <div className="relative w-48 h-48 rounded-xl overflow-hidden border border-border flex items-center justify-center bg-muted/30">
                  <img src={originalPreview} alt="Original" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-rose-500/10 animate-pulse" />
                </div>
              </div>
            )}
            <div className="space-y-4">
              <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500 animate-pulse" style={{ width: '100%' }} />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 animate-spin text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>{progressMsg}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                ✅ Your image is processed securely on the server and deleted immediately after.
              </p>
            </div>
          </div>
        )}

        {/* Result Step */}
        {step === 'result' && resultPreview && (
          <div className="animate-fade-in-up space-y-6">
            {/* Before / After toggle */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  {showOriginal ? 'Original' : '✨ Background Removed'}
                </p>
                <button
                  onClick={() => setShowOriginal((v) => !v)}
                  className="text-xs px-3 py-1.5 rounded-lg border border-border bg-muted hover:bg-muted/70 text-muted-foreground font-medium transition-colors"
                >
                  {showOriginal ? 'Show Result' : 'Compare Original'}
                </button>
              </div>
              <div className="flex justify-center rounded-xl overflow-hidden border border-border">
                <img
                  src={showOriginal ? originalPreview : resultPreview}
                  alt={showOriginal ? 'Original photo' : 'Background removed'}
                  className="max-h-96 max-w-full block"
                  style={
                    showOriginal
                      ? { background: '#f3f4f6' }
                      : bgColor === 'white'
                      ? { background: '#ffffff' }
                      : bgColor === 'custom'
                      ? { background: customColor }
                      : { background: checkerboard }
                  }
                />
              </div>
            </div>

            {/* Background colour selector */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Choose download format</p>
              <div className="grid grid-cols-3 gap-2">
                {(['transparent', 'white', 'custom'] as BgColor[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setBgColor(c)}
                    className={`p-3 rounded-xl border-2 text-xs font-semibold transition-all ${
                      bgColor === c
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border bg-card text-muted-foreground hover:border-primary/40'
                    }`}
                  >
                    {c === 'transparent' && (
                      <>
                        <div className="w-6 h-6 rounded mx-auto mb-1.5" style={{ background: checkerboard }} />
                        Transparent PNG
                      </>
                    )}
                    {c === 'white' && (
                      <>
                        <div className="w-6 h-6 rounded bg-white border border-gray-200 mx-auto mb-1.5" />
                        White BG JPG
                      </>
                    )}
                    {c === 'custom' && (
                      <>
                        <div className="w-6 h-6 rounded mx-auto mb-1.5 border border-gray-200" style={{ background: customColor }} />
                        Custom Color
                      </>
                    )}
                  </button>
                ))}
              </div>

              {bgColor === 'custom' && (
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/30">
                  <label htmlFor="custom-color" className="text-xs text-muted-foreground font-medium">Pick colour:</label>
                  <input
                    id="custom-color"
                    type="color"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="w-10 h-8 rounded cursor-pointer border-0 bg-transparent"
                  />
                  <span className="text-xs font-mono text-foreground">{customColor.toUpperCase()}</span>
                </div>
              )}
            </div>

            {/* Download button */}
            <button
              onClick={() => handleDownload(bgColor)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              ⬇ Download {bgColor === 'transparent' ? 'Transparent PNG' : bgColor === 'white' ? 'White BG JPG' : 'Custom BG JPG'}
            </button>

            <button
              onClick={handleReset}
              className="w-full py-2.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors font-medium"
            >
              ↩ Upload another image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
