'use client';

import { useState, useRef, useCallback } from 'react';

const RATIOS = [
  { label: '1:1 Square', w: 1, h: 1, desc: 'Instagram post, profile photo' },
  { label: '4:3', w: 4, h: 3, desc: 'Standard photo, presentation' },
  { label: '16:9', w: 16, h: 9, desc: 'YouTube thumbnail, wallpaper' },
  { label: '9:16', w: 9, h: 16, desc: 'Instagram story, mobile' },
  { label: '3:4 Portrait', w: 3, h: 4, desc: 'Portrait photo' },
  { label: 'Free', w: 0, h: 0, desc: 'Custom crop' },
];

export default function ImageCropTool() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [ratioIdx, setRatioIdx] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [imgDims, setImgDims] = useState<{ w: number; h: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const crop = useCallback(async (f: File, idx: number) => {
    setProcessing(true);
    setResultUrl('');
    const ratio = RATIOS[idx];
    try {
      const img = new Image();
      const url = URL.createObjectURL(f);
      img.src = url;
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });

      let cropW = img.width, cropH = img.height;
      if (ratio.w > 0 && ratio.h > 0) {
        const targetRatio = ratio.w / ratio.h;
        const imgRatio = img.width / img.height;
        if (imgRatio > targetRatio) {
          // Image is wider — crop width
          cropW = img.height * targetRatio;
          cropH = img.height;
        } else {
          // Image is taller — crop height
          cropW = img.width;
          cropH = img.width / targetRatio;
        }
      }

      const sx = (img.width - cropW) / 2;
      const sy = (img.height - cropH) / 2;

      const canvas = document.createElement('canvas');
      canvas.width = cropW;
      canvas.height = cropH;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, sx, sy, cropW, cropH, 0, 0, cropW, cropH);
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
    const url = URL.createObjectURL(f);
    setPreview(url);
    setResultUrl('');
    const img = new Image();
    img.onload = () => {
      setImgDims({ w: img.width, h: img.height });
      crop(f, ratioIdx);
    };
    img.src = url;
  };

  const download = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    const label = RATIOS[ratioIdx].label.replace(/[: ]/g, '');
    a.download = file.name.replace(/\.[^/.]+$/, '') + `_cropped_${label}.jpg`;
    a.click();
  };

  return (
    <div className="space-y-5">
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="text-4xl mb-3">✂️</div>
        <p className="font-semibold text-sm text-foreground">Click to upload image</p>
        <p className="text-xs text-muted-foreground mt-1">Crop to square, landscape, portrait, or story format</p>
      </div>

      {file && (
        <>
          <div>
            <p className="text-xs font-semibold text-foreground mb-2">Crop Ratio</p>
            <div className="grid grid-cols-3 gap-2">
              {RATIOS.map((r, i) => (
                <button key={r.label} onClick={() => { setRatioIdx(i); if (file) crop(file, i); }}
                  className={`p-2.5 rounded-lg border text-center transition-all ${ratioIdx === i ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'}`}>
                  <p className={`text-xs font-bold ${ratioIdx === i ? 'text-primary' : 'text-foreground'}`}>{r.label}</p>
                  <p className="text-xs text-muted-foreground truncate">{r.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {imgDims && (
            <p className="text-xs text-muted-foreground">Original: {imgDims.w}×{imgDims.h}px</p>
          )}
        </>
      )}

      {processing && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-sm text-primary">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Cropping image…
        </div>
      )}

      {preview && resultUrl && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Original</p>
            <img src={preview} alt="Original" className="w-full h-48 object-cover rounded-xl border border-border" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">Cropped {RATIOS[ratioIdx].label}</p>
            <img src={resultUrl} alt="Cropped" className="w-full h-48 object-contain rounded-xl border border-primary/30 bg-muted/20" />
          </div>
        </div>
      )}

      {resultUrl && (
        <div className="grid grid-cols-2 gap-3">
          <button onClick={download}
            className="py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-md">
            ⬇ Download Cropped
          </button>
          <button onClick={() => { setFile(null); setPreview(''); setResultUrl(''); }}
            className="py-3.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
            Crop another
          </button>
        </div>
      )}
    </div>
  );
}
