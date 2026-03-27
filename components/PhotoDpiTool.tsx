'use client';

import { useState, useRef, useCallback } from 'react';

const DPI_OPTIONS = [72, 96, 150, 200, 300, 600];

export default function PhotoDpiTool() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [targetDpi, setTargetDpi] = useState(300);
  const [processing, setProcessing] = useState(false);
  const [origInfo, setOrigInfo] = useState<{ w: number; h: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const setDpi = useCallback(async (f: File, dpi: number) => {
    setProcessing(true);
    setResultUrl('');
    try {
      const img = new Image();
      const url = URL.createObjectURL(f);
      img.src = url;
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });
      setOrigInfo({ w: img.width, h: img.height });

      // We write DPI into the JPEG JFIF header via a manual approach
      // First get the raw JPEG bytes from canvas
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      canvas.toBlob(async (blob) => {
        if (!blob) { setProcessing(false); return; }
        const buf = await blob.arrayBuffer();
        const arr = new Uint8Array(buf);

        // Patch JFIF APP0 segment to set DPI
        // JFIF header starts at offset 0: FF D8 FF E0 [len][len] JFIF\0 [ver][ver] [units] [Xdpi][Xdpi] [Ydpi][Ydpi]
        // units=1 means DPI (dots per inch)
        if (arr[0] === 0xFF && arr[1] === 0xD8 && arr[2] === 0xFF && arr[3] === 0xE0) {
          // JFIF marker found
          arr[11] = 1; // units = DPI
          arr[12] = (dpi >> 8) & 0xFF;
          arr[13] = dpi & 0xFF;
          arr[14] = (dpi >> 8) & 0xFF;
          arr[15] = dpi & 0xFF;
        }

        const patched = new Blob([arr], { type: 'image/jpeg' });
        setResultUrl(URL.createObjectURL(patched));
        setProcessing(false);
      }, 'image/jpeg', 0.95);
    } catch { setProcessing(false); }
  }, []);

  const handleFile = (f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResultUrl('');
    setDpi(f, targetDpi);
  };

  const download = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = file.name.replace(/\.[^/.]+$/, '') + `_${targetDpi}dpi.jpg`;
    a.click();
  };

  return (
    <div className="space-y-5">
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="text-4xl mb-3">🔵</div>
        <p className="font-semibold text-sm text-foreground">Click to upload image</p>
        <p className="text-xs text-muted-foreground mt-1">JPG, PNG — DPI metadata changed instantly</p>
      </div>

      <div>
        <p className="text-xs font-semibold text-foreground mb-2">Target DPI</p>
        <div className="grid grid-cols-3 gap-2">
          {DPI_OPTIONS.map((d) => (
            <button key={d} onClick={() => { setTargetDpi(d); if (file) setDpi(file, d); }}
              className={`py-2.5 px-3 rounded-lg border text-sm font-bold transition-all ${targetDpi === d ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:border-primary/40'}`}>
              {d} DPI
              {d === 300 && <span className="ml-1 text-xs font-normal">(Recommended)</span>}
            </button>
          ))}
        </div>
      </div>

      {processing && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-sm text-primary">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Setting DPI to {targetDpi}…
        </div>
      )}

      {resultUrl && (
        <div className="space-y-3">
          {origInfo && (
            <div className="p-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
              ✅ DPI set to {targetDpi} — {origInfo.w}×{origInfo.h}px image unchanged
            </div>
          )}
          <img src={resultUrl} alt="DPI result" className="w-full max-h-48 object-contain rounded-xl border border-border" />
          <div className="grid grid-cols-2 gap-3">
            <button onClick={download}
              className="py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-md">
              ⬇ Download {targetDpi} DPI
            </button>
            <button onClick={() => { setFile(null); setPreview(''); setResultUrl(''); }}
              className="py-3.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              Convert another
            </button>
          </div>
        </div>
      )}

      <div className="p-3 rounded-lg bg-muted/30 border border-border text-xs text-muted-foreground">
        ℹ️ DPI is stored in the image metadata and affects print size only. It does not change the number of pixels or visual quality of your image.
      </div>
    </div>
  );
}
