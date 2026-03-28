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
  portalContext?: 'ssc' | 'ibps' | 'railway' | 'signature' | 'upsc' | 'generic';
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
  portalContext = 'generic',
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
  const isGenuinelyUnder = compressedSize <= targetSizeKB * 1024;

  // Portal-specific acceptance copy
  const PORTAL_LABELS: Record<string, { name: string; requirement: string }> = {
    ssc:       { name: 'SSC Portal',          requirement: `Max ${targetSizeKB}KB · JPEG · White background` },
    ibps:      { name: 'IBPS / SBI Portal',   requirement: `Max ${targetSizeKB}KB · JPEG format` },
    railway:   { name: 'RRB / Railway Portal', requirement: `Max ${targetSizeKB}KB · JPEG format` },
    signature: { name: 'Exam Portal Signature', requirement: `Max ${targetSizeKB}KB · JPEG · 140×60px` },
    upsc:      { name: 'UPSC Portal',         requirement: `Max ${targetSizeKB}KB · JPEG format` },
    generic:   { name: 'Portal Upload',       requirement: `Max ${targetSizeKB}KB · JPEG format` },
  };
  const portal = PORTAL_LABELS[portalContext] ?? PORTAL_LABELS.generic;

  type ConfidenceTier = 'pass' | 'borderline' | 'fail';
  const getConfidence = (): ConfidenceTier => {
    if (!success && !isWithinTolerance) return 'fail';
    if (isGenuinelyUnder) return 'pass';
    return 'borderline';
  };
  const confidence = getConfidence();

  const confidenceConfig = {
    pass: {
      icon: '✅',
      label: `Accepted — Safe for ${portal.name}`,
      sub: portal.requirement,
      bg: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700',
      tc: 'text-emerald-700 dark:text-emerald-300',
      sc: 'text-emerald-600 dark:text-emerald-400',
    },
    borderline: {
      icon: '⚠️',
      label: 'Borderline — Likely accepted, verify manually',
      sub: `File is ${(compressedSize / 1024).toFixed(1)}KB — within ±2KB of target. Most portals accept this range.`,
      bg: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-300 dark:border-yellow-700',
      tc: 'text-yellow-700 dark:text-yellow-300',
      sc: 'text-yellow-600 dark:text-yellow-400',
    },
    fail: {
      icon: '❌',
      label: 'Will likely be rejected by portal',
      sub: `Could not reach ${targetSizeKB}KB. Try a lower target or use a higher-resolution original photo.`,
      bg: 'bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-700',
      tc: 'text-red-700 dark:text-red-300',
      sc: 'text-red-600 dark:text-red-400',
    },
  } as const;
  const conf = confidenceConfig[confidence];

  return (
    <div className="space-y-5 animate-fade-in-up">

      {/* ─── CONFIDENCE LAYER ─── */}
      {compressedSize > 0 && (
        <div className={`flex items-start gap-3 p-4 rounded-2xl border-2 ${conf.bg}`}>
          <span className="text-2xl flex-shrink-0 mt-0.5">{conf.icon}</span>
          <div className="min-w-0 flex-1">
            <p className={`font-bold text-sm leading-snug ${conf.tc}`}>{conf.label}</p>
            <p className={`text-xs mt-0.5 leading-snug ${conf.sc}`}>{conf.sub}</p>
            {confidence === 'pass' && (
              <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-2 flex-wrap">
                <span>Size: <strong className="text-emerald-600 dark:text-emerald-400">{(compressedSize / 1024).toFixed(1)}KB</strong></span>
                <span className="text-border">·</span>
                <span>Reduced by <strong>{compressionPercentage.toFixed(1)}%</strong></span>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Ready to upload
                </span>
              </p>
            )}
          </div>
        </div>
      )}

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
      {/* ─── Post-Result Funnel ─── */}
      {success && (
        <div className="mt-6 pt-5 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">What&apos;s next?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {/* Try another size */}
            <a
              href="/resize-image-20kb"
              className="group flex items-center gap-2.5 p-3 rounded-xl border border-border bg-muted/20 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-all"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold">20</span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">Need 20KB?</p>
                <p className="text-[10px] text-muted-foreground truncate">SSC, Aadhar portals</p>
              </div>
            </a>
            {/* Fix upload errors */}
            <a
              href="/photo-upload-failed-ssc-fix"
              className="group flex items-center gap-2.5 p-3 rounded-xl border border-border bg-muted/20 hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm">🛠</span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">Still rejected?</p>
                <p className="text-[10px] text-muted-foreground truncate">Fix portal upload errors</p>
              </div>
            </a>
            {/* Convert format */}
            <a
              href="/png-to-jpg"
              className="group flex items-center gap-2.5 p-3 rounded-xl border border-border bg-muted/20 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">PNG</span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">Convert PNG → JPG</p>
                <p className="text-[10px] text-muted-foreground truncate">Portal only accepts JPG?</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
