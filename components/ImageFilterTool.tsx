'use client';

import { useState, useRef, useCallback } from 'react';

type FilterMode = 'grayscale' | 'blur' | 'sepia';

interface ImageFilterToolProps {
  mode: FilterMode;
  title: string;
  /** For blur: default radius in px */
  blurRadius?: number;
}

export default function ImageFilterTool({ mode, title, blurRadius = 8 }: ImageFilterToolProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [radius, setRadius] = useState(blurRadius);
  const inputRef = useRef<HTMLInputElement>(null);

  const apply = useCallback(async (f: File, r?: number) => {
    setProcessing(true);
    setResultUrl('');
    try {
      const img = new Image();
      const url = URL.createObjectURL(f);
      img.src = url;
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      if (mode === 'grayscale') {
        ctx.filter = 'grayscale(100%)';
      } else if (mode === 'blur') {
        ctx.filter = `blur(${r ?? radius}px)`;
      } else if (mode === 'sepia') {
        ctx.filter = 'sepia(100%)';
      }
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (!blob) { setProcessing(false); return; }
        setResultUrl(URL.createObjectURL(blob));
        setProcessing(false);
      }, 'image/jpeg', 0.93);
    } catch { setProcessing(false); }
  }, [mode, radius]);

  const handleFile = (f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResultUrl('');
    apply(f);
  };

  const download = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = file.name.replace(/\.[^/.]+$/, '') + `_${mode}.jpg`;
    a.click();
  };

  return (
    <div className="space-y-5">
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="text-4xl mb-3">{mode === 'grayscale' ? '⬛' : mode === 'blur' ? '🌫️' : '🎨'}</div>
        <p className="font-semibold text-sm text-foreground">Click to upload image</p>
        <p className="text-xs text-muted-foreground mt-1">{title} applied instantly in your browser</p>
      </div>

      {mode === 'blur' && file && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-foreground">Blur Strength: {radius}px</label>
          </div>
          <input type="range" min={1} max={30} value={radius}
            onChange={(e) => { const v = +e.target.value; setRadius(v); if (file) apply(file, v); }}
            className="w-full accent-primary" />
        </div>
      )}

      {processing && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <svg className="w-4 h-4 animate-spin text-primary" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm text-primary">Applying {title}…</span>
        </div>
      )}

      {preview && resultUrl && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Original</p>
            <img src={preview} alt="Original" className="w-full h-48 object-contain rounded-xl border border-border" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">{title}</p>
            <img src={resultUrl} alt="Result" className="w-full h-48 object-contain rounded-xl border border-primary/30" />
          </div>
        </div>
      )}

      {resultUrl && (
        <div className="grid grid-cols-2 gap-3">
          <button onClick={download}
            className="py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-md">
            ⬇ Download
          </button>
          <button onClick={() => { setFile(null); setPreview(''); setResultUrl(''); }}
            className="py-3.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
            Try another
          </button>
        </div>
      )}
    </div>
  );
}
