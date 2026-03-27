'use client';

import { useState, useRef, useCallback } from 'react';

interface Preset { label: string; w: number; h: number; }

const PRESETS: Preset[] = [
  { label: 'SSC Photo (200×230)', w: 200, h: 230 },
  { label: 'UPSC Photo (413×531)', w: 413, h: 531 },
  { label: 'Passport (413×531)', w: 413, h: 531 },
  { label: 'RRB (200×230)', w: 200, h: 230 },
  { label: 'Square (1:1)', w: 500, h: 500 },
  { label: 'Custom', w: 0, h: 0 },
];

export default function DimensionResizerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(230);
  const [preset, setPreset] = useState(0);
  const [keepAspect, setKeepAspect] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [origDims, setOrigDims] = useState<{ w: number; h: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
    setResultUrl('');
    const img = new Image();
    img.onload = () => setOrigDims({ w: img.width, h: img.height });
    img.src = url;
  };

  const applyPreset = (idx: number) => {
    setPreset(idx);
    if (PRESETS[idx].w > 0) { setWidth(PRESETS[idx].w); setHeight(PRESETS[idx].h); }
  };

  const resize = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setResultUrl('');
    try {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.src = url;
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      // Fit image within target dimensions
      const scale = Math.min(width / img.width, height / img.height);
      const sw = img.width * scale;
      const sh = img.height * scale;
      const ox = (width - sw) / 2;
      const oy = (height - sh) / 2;
      ctx.drawImage(img, ox, oy, sw, sh);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (!blob) { setProcessing(false); return; }
        setResultUrl(URL.createObjectURL(blob));
        setProcessing(false);
      }, 'image/jpeg', 0.95);
    } catch { setProcessing(false); }
  }, [file, width, height]);

  const download = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = file.name.replace(/\.[^/.]+$/, '') + `_${width}x${height}.jpg`;
    a.click();
  };

  return (
    <div className="space-y-5">
      {/* File input */}
      {!file ? (
        <div onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
          <input ref={inputRef} type="file" accept="image/*" className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
          <div className="text-4xl mb-3">📐</div>
          <p className="font-semibold text-sm text-foreground">Click to upload image</p>
          <p className="text-xs text-muted-foreground mt-1">JPG, PNG, WebP supported</p>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/30">
          <img src={preview} alt="preview" className="w-14 h-14 object-cover rounded-lg" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
            {origDims && <p className="text-xs text-muted-foreground">Original: {origDims.w}×{origDims.h}px</p>}
          </div>
          <button onClick={() => { setFile(null); setPreview(''); setResultUrl(''); }}
            className="text-xs text-muted-foreground hover:text-destructive px-2">Change</button>
        </div>
      )}

      {/* Presets */}
      <div>
        <p className="text-xs font-semibold text-foreground mb-2">Quick Presets</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, i) => (
            <button key={p.label} onClick={() => applyPreset(i)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${preset === i ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:border-primary/40'}`}>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom dimensions */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-foreground mb-1.5 block">Width (px)</label>
          <input type="number" min={1} max={5000} value={width}
            onChange={(e) => { setWidth(+e.target.value); setPreset(5); }}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div>
          <label className="text-xs font-medium text-foreground mb-1.5 block">Height (px)</label>
          <input type="number" min={1} max={5000} value={height}
            onChange={(e) => { setHeight(+e.target.value); setPreset(5); }}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
      </div>

      <button onClick={resize} disabled={!file || processing}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md">
        {processing ? 'Resizing…' : `Resize to ${width}×${height}px`}
      </button>

      {resultUrl && (
        <div className="space-y-3">
          <div className="rounded-xl overflow-hidden border border-primary/30">
            <img src={resultUrl} alt="Result" className="w-full max-h-64 object-contain" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={download}
              className="py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm hover:opacity-90 transition-all shadow-md">
              ⬇ Download {width}×{height}px
            </button>
            <button onClick={() => { setResultUrl(''); setFile(null); setPreview(''); }}
              className="py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resize another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
