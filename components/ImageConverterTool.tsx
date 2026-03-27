'use client';

import { useState, useRef, useCallback } from 'react';

type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

interface ImageConverterToolProps {
  fromFormat: string;   // e.g. "JPG"
  toFormat: string;     // e.g. "PNG"
  outputMime: OutputFormat;
  outputExt: string;    // e.g. "png"
  quality?: number;     // 0–1, for JPEG/WebP
  description?: string;
}

export default function ImageConverterTool({
  fromFormat,
  toFormat,
  outputMime,
  outputExt,
  quality = 0.92,
  description,
}: ImageConverterToolProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState<{ original: string; converted?: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef(false);

  const convert = useCallback(async (f: File) => {
    setConverting(true);
    setError('');
    setResultUrl('');
    setInfo({ original: `${(f.size / 1024).toFixed(1)} KB` });

    try {
      const img = new Image();
      const url = URL.createObjectURL(f);
      img.src = url;
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      // White bg for JPEG (no transparency)
      if (outputMime === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      canvas.toBlob((blob) => {
        if (!blob) { setError('Conversion failed. Please try another image.'); setConverting(false); return; }
        const out = URL.createObjectURL(blob);
        setResultUrl(out);
        setInfo({ original: `${(f.size / 1024).toFixed(1)} KB`, converted: `${(blob.size / 1024).toFixed(1)} KB` });
        setConverting(false);
      }, outputMime, quality);
    } catch {
      setError('Could not read image. Please try a different file.');
      setConverting(false);
    }
  }, [outputMime, quality]);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResultUrl('');
    convert(f);
  }, [convert]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragRef.current = false;
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith('image/')) handleFile(f);
  };

  const handleDownload = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = file.name.replace(/\.[^/.]+$/, '') + '.' + outputExt;
    a.click();
  };

  return (
    <div className="space-y-5">
      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); dragRef.current = true; }}
        onDragLeave={() => { dragRef.current = false; }}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/2 transition-all"
      >
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="text-4xl mb-3">🖼️</div>
        <p className="font-semibold text-foreground text-sm">Click or drag a {fromFormat} image here</p>
        <p className="text-xs text-muted-foreground mt-1">Any {fromFormat} file → converts to {toFormat} instantly</p>
        {description && <p className="text-xs text-muted-foreground mt-2 max-w-xs mx-auto">{description}</p>}
      </div>

      {/* Converting indicator */}
      {converting && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <svg className="w-5 h-5 animate-spin text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm text-primary font-medium">Converting {fromFormat} → {toFormat}…</span>
        </div>
      )}

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">{error}</div>
      )}

      {/* Before/After previews */}
      {preview && resultUrl && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Original {fromFormat}</p>
            <div className="rounded-xl overflow-hidden border border-border bg-muted/20">
              <img src={preview} alt="Original" className="w-full h-48 object-contain" />
            </div>
            {info && <p className="text-xs text-muted-foreground text-center">{info.original}</p>}
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">Converted {toFormat}</p>
            <div className="rounded-xl overflow-hidden border border-primary/30 bg-primary/3">
              <img src={resultUrl} alt="Converted" className="w-full h-48 object-contain" />
            </div>
            {info?.converted && <p className="text-xs text-muted-foreground text-center">{info.converted}</p>}
          </div>
        </div>
      )}

      {/* Download button */}
      {resultUrl && (
        <button
          onClick={handleDownload}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          ⬇ Download {toFormat} Image
        </button>
      )}

      {resultUrl && (
        <button
          onClick={() => { setFile(null); setPreview(''); setResultUrl(''); setInfo(null); }}
          className="w-full py-2 rounded-xl border border-border text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Convert another image
        </button>
      )}
    </div>
  );
}
