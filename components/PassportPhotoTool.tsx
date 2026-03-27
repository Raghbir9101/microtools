'use client';

import { useState, useRef, useCallback } from 'react';

const PASSPORT_SIZES = [
  { label: 'India Passport (35×45mm)', w: 413, h: 531, bg: '#ffffff' },
  { label: 'USA Passport (2×2 inch)', w: 600, h: 600, bg: '#ffffff' },
  { label: 'UK Passport (35×45mm)', w: 413, h: 531, bg: '#ffffff' },
  { label: 'Visa Photo (35×45mm)', w: 413, h: 531, bg: '#ffffff' },
];

export default function PassportPhotoTool() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [sizeIdx, setSizeIdx] = useState(0);
  const [processing, setProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const process = useCallback(async (f: File, idx: number) => {
    setProcessing(true);
    setResultUrl('');
    const size = PASSPORT_SIZES[idx];
    try {
      const img = new Image();
      const url = URL.createObjectURL(f);
      img.src = url;
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });

      const canvas = document.createElement('canvas');
      canvas.width = size.w;
      canvas.height = size.h;
      const ctx = canvas.getContext('2d')!;

      // White background
      ctx.fillStyle = size.bg;
      ctx.fillRect(0, 0, size.w, size.h);

      // Scale to fill (cover) then center-crop
      const scale = Math.max(size.w / img.width, size.h / img.height);
      const sw = img.width * scale;
      const sh = img.height * scale;
      const ox = (size.w - sw) / 2;
      const oy = (size.h - sh) / 2;
      ctx.drawImage(img, ox, oy, sw, sh);
      URL.revokeObjectURL(url);

      canvas.toBlob((blob) => {
        if (!blob) { setProcessing(false); return; }
        setResultUrl(URL.createObjectURL(blob));
        setProcessing(false);
      }, 'image/jpeg', 0.95);
    } catch { setProcessing(false); }
  }, []);

  const handleFile = (f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResultUrl('');
    process(f, sizeIdx);
  };

  const download = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = file.name.replace(/\.[^/.]+$/, '') + '_passport.jpg';
    a.click();
  };

  return (
    <div className="space-y-5">
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="text-4xl mb-3">🪪</div>
        <p className="font-semibold text-sm text-foreground">Upload your photo</p>
        <p className="text-xs text-muted-foreground mt-1">Auto-cropped to passport size with white background</p>
      </div>

      {file && (
        <div>
          <p className="text-xs font-semibold text-foreground mb-2">Passport Size Standard</p>
          <div className="grid grid-cols-2 gap-2">
            {PASSPORT_SIZES.map((s, i) => (
              <button key={s.label} onClick={() => { setSizeIdx(i); if (file) process(file, i); }}
                className={`p-2.5 rounded-lg border text-xs text-left transition-all ${sizeIdx === i ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-border text-muted-foreground hover:border-primary/40'}`}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {processing && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
          <svg className="w-4 h-4 animate-spin text-primary" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm text-primary">Creating passport photo…</span>
        </div>
      )}

      {preview && resultUrl && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Original</p>
            <img src={preview} alt="Original" className="w-full h-48 object-cover rounded-xl border border-border" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">Passport Photo</p>
            <img src={resultUrl} alt="Passport" className="w-full h-48 object-cover rounded-xl border border-primary/30 bg-white" />
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
            New photo
          </button>
        </div>
      )}

      <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs">
        💡 <strong>Pro tip:</strong> For best results, use a photo with a plain background. Use our <a href="/background-remover" className="underline">Background Remover</a> first for a clean white background.
      </div>
    </div>
  );
}
