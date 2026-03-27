'use client';

import { useState, useRef, useCallback } from 'react';

const IG_FORMATS = [
  { label: 'Square Post', w: 1080, h: 1080, desc: '1:1 — Feed post, profile', icon: '⬛' },
  { label: 'Portrait Post', w: 1080, h: 1350, desc: '4:5 — Preferred portrait', icon: '📱' },
  { label: 'Landscape Post', w: 1080, h: 566, desc: '1.91:1 — Wide photo', icon: '🖥️' },
  { label: 'Story / Reel', w: 1080, h: 1920, desc: '9:16 — Full screen', icon: '🎬' },
];

export default function InstagramResizerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [fmtIdx, setFmtIdx] = useState(0);
  const [processing, setProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const resize = useCallback(async (f: File, idx: number) => {
    setProcessing(true);
    setResultUrl('');
    const fmt = IG_FORMATS[idx];
    try {
      const img = new Image();
      const url = URL.createObjectURL(f);
      img.src = url;
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });

      const scale = Math.max(fmt.w / img.width, fmt.h / img.height);
      const sw = img.width * scale;
      const sh = img.height * scale;
      const ox = (fmt.w - sw) / 2;
      const oy = (fmt.h - sh) / 2;

      const canvas = document.createElement('canvas');
      canvas.width = fmt.w; canvas.height = fmt.h;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, fmt.w, fmt.h);
      ctx.drawImage(img, ox, oy, sw, sh);
      URL.revokeObjectURL(url);

      canvas.toBlob((blob) => {
        if (!blob) { setProcessing(false); return; }
        setResultUrl(URL.createObjectURL(blob));
        setProcessing(false);
      }, 'image/jpeg', 0.92);
    } catch { setProcessing(false); }
  }, []);

  const handleFile = (f: File) => {
    setFile(f); setPreview(URL.createObjectURL(f)); setResultUrl('');
    resize(f, fmtIdx);
  };

  const download = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    const label = IG_FORMATS[fmtIdx].label.replace(/ /g, '_');
    a.download = file.name.replace(/\.[^/.]+$/, '') + `_instagram_${label}.jpg`;
    a.click();
  };

  return (
    <div className="space-y-5">
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="text-4xl mb-3">📸</div>
        <p className="font-semibold text-sm text-foreground">Click to upload your photo</p>
        <p className="text-xs text-muted-foreground mt-1">Resize to the perfect Instagram format</p>
      </div>

      {file && (
        <div>
          <p className="text-xs font-semibold text-foreground mb-2">Instagram Format</p>
          <div className="grid grid-cols-2 gap-2">
            {IG_FORMATS.map((f, i) => (
              <button key={f.label} onClick={() => { setFmtIdx(i); if (file) resize(file, i); }}
                className={`p-3 rounded-xl border text-left transition-all ${fmtIdx === i ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'}`}>
                <span className="text-lg">{f.icon}</span>
                <p className={`text-xs font-bold mt-1 ${fmtIdx === i ? 'text-primary' : 'text-foreground'}`}>{f.label}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
                <p className="text-xs text-muted-foreground">{IG_FORMATS[i].w}×{IG_FORMATS[i].h}px</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {processing && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 text-sm text-pink-700 dark:text-pink-400">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Resizing for Instagram…
        </div>
      )}

      {resultUrl && (
        <div className="space-y-3">
          <img src={resultUrl} alt="Instagram resized" className="w-full max-h-64 object-contain rounded-xl border border-border" />
          <p className="text-xs text-center text-muted-foreground">{IG_FORMATS[fmtIdx].w}×{IG_FORMATS[fmtIdx].h}px — {IG_FORMATS[fmtIdx].label}</p>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={download}
              className="py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm hover:opacity-90 transition-all shadow-md">
              ⬇ Download for Instagram
            </button>
            <button onClick={() => { setFile(null); setPreview(''); setResultUrl(''); }}
              className="py-3.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resize another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
