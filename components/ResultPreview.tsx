'use client';

import { useState, useEffect } from 'react';
import { formatFileSize, downloadFile } from '@/lib/imageCompression';

interface ResultPreviewProps {
  preview: string;
  originalSize: number;
  compressedSize: number;
  compressionPercentage: number;
  quality: number;
  blob: Blob;
  targetSizeKB: number;
  success: boolean;
  error?: string;
  onReset: () => void;
}

export default function ResultPreview({
  preview,
  originalSize,
  compressedSize,
  compressionPercentage,
  quality,
  blob,
  targetSizeKB,
  success,
  error,
  onReset,
}: ResultPreviewProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [compressedPreviewUrl, setCompressedPreviewUrl] = useState<string>('');

  // Generate a blob URL for the compressed image preview
  useEffect(() => {
    if (blob && blob.size > 0) {
      const url = URL.createObjectURL(blob);
      setCompressedPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [blob]);

  const handleDownload = () => {
    setIsDownloading(true);
    const ext = blob.type === 'image/png' ? 'png' : 'jpg';
    const filename = `compressed-${targetSizeKB}kb.${ext}`;
    downloadFile(blob, filename);
    setTimeout(() => setIsDownloading(false), 800);
  };

  const savingsBytes = originalSize - compressedSize;
  const isWithinTolerance = Math.abs(compressedSize - targetSizeKB * 1024) <= 2 * 1024;

  return (
    <div className="space-y-5 animate-fade-in-up">
      {/* Status Banner */}
      {!success && error ? (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/8 border border-destructive/20 text-destructive">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold text-sm">Compression Warning</p>
            <p className="text-sm mt-0.5 opacity-90">{error}</p>
          </div>
        </div>
      ) : success ? (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-semibold text-sm">
            Image compressed successfully! {isWithinTolerance ? `Achieved within ±2KB of ${targetSizeKB}KB target.` : `Closest result: ${(compressedSize / 1024).toFixed(1)}KB.`}
          </p>
        </div>
      ) : null}

      {/* Before / After preview */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Original
          </p>
          <div className="rounded-lg overflow-hidden border border-border bg-muted/20 aspect-video flex items-center justify-center">
            <img
              src={preview}
              alt="Original image"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1.5 text-center font-medium">
            {formatFileSize(originalSize)}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Compressed
          </p>
          <div className="rounded-lg overflow-hidden border border-primary/30 bg-muted/20 aspect-video flex items-center justify-center">
            {compressedPreviewUrl ? (
              <img
                src={compressedPreviewUrl}
                alt="Compressed image preview"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <div className="text-muted-foreground text-xs">Processing…</div>
            )}
          </div>
          <p className="text-xs text-primary mt-1.5 text-center font-semibold">
            {formatFileSize(compressedSize)}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl border border-border bg-card text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
            Original
          </p>
          <p className="text-xl font-bold text-foreground">{formatFileSize(originalSize)}</p>
        </div>

        <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
            Compressed
          </p>
          <p className="text-xl font-bold text-primary">{formatFileSize(compressedSize)}</p>
        </div>

        <div className="p-4 rounded-xl border border-border bg-card text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
            Saved
          </p>
          <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {savingsBytes > 0 ? formatFileSize(savingsBytes) : '—'}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-border bg-card text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
            Reduction
          </p>
          <p className="text-xl font-bold text-foreground">
            {compressionPercentage > 0 ? `${compressionPercentage.toFixed(1)}%` : '—'}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          id="download-compressed-btn"
          onClick={handleDownload}
          disabled={isDownloading || !blob.size}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98] shadow-md hover:shadow-lg"
        >
          {isDownloading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Downloading…
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Compressed Image
            </>
          )}
        </button>
        <button
          id="compress-another-btn"
          onClick={onReset}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-border text-foreground font-semibold text-sm hover:bg-muted hover:border-primary/40 transition-all active:scale-[0.98]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Compress Another
        </button>
      </div>
    </div>
  );
}
