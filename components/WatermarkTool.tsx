'use client';

import { useState, useRef, useCallback } from 'react';

type Position = 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';

export default function WatermarkTool() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [text, setText] = useState('© Your Name');
  const [fontSize, setFontSize] = useState(32);
  const [opacity, setOpacity] = useState(0.5);
  const [position, setPosition] = useState<Position>('bottom-right');
  const [color, setColor] = useState('#ffffff');
  const [processing, setProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const applyWatermark = useCallback(async (f: File, opts?: { text?: string; fontSize?: number; opacity?: number; position?: Position; color?: string }) => {
    setProcessing(true);
    const t = opts?.text ?? text;
    const fs = opts?.fontSize ?? fontSize;
    const op = opts?.opacity ?? opacity;
    const pos = opts?.position ?? position;
    const col = opts?.color ?? color;
    try {
      const img = new Image();
      const url = URL.createObjectURL(f);
      img.src = url;
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });
      const canvas = document.createElement('canvas');
      canvas.width = img.width; canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const scaledFs = Math.max(12, (fs / 100) * Math.min(img.width, img.height));
      ctx.font = `bold ${scaledFs}px Arial, sans-serif`;
      ctx.globalAlpha = op;
      ctx.fillStyle = col;

      const padding = scaledFs * 0.8;
      const metrics = ctx.measureText(t);
      const tw = metrics.width;
      const th = scaledFs;

      let x = 0, y = 0;
      if (pos === 'top-left')     { x = padding; y = th + padding; }
      if (pos === 'top-right')    { x = img.width - tw - padding; y = th + padding; }
      if (pos === 'center')       { x = (img.width - tw) / 2; y = (img.height + th) / 2; }
      if (pos === 'bottom-left')  { x = padding; y = img.height - padding; }
      if (pos === 'bottom-right') { x = img.width - tw - padding; y = img.height - padding; }

      ctx.fillText(t, x, y);
      canvas.toBlob((blob) => {
        if (!blob) { setProcessing(false); return; }
        setResultUrl(URL.createObjectURL(blob));
        setProcessing(false);
      }, 'image/jpeg', 0.93);
    } catch { setProcessing(false); }
  }, [text, fontSize, opacity, position, color]);

  const handleFile = (f: File) => {
    setFile(f); setPreview(URL.createObjectURL(f)); setResultUrl('');
    applyWatermark(f);
  };

  const reapply = () => { if (file) applyWatermark(file); };

  const download = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = file.name.replace(/\.[^/.]+$/, '') + '_watermarked.jpg';
    a.click();
  };

  const positions: { id: Position; label: string }[] = [
    { id: 'top-left', label: '↖ Top Left' },
    { id: 'top-right', label: '↗ Top Right' },
    { id: 'center', label: '⊕ Center' },
    { id: 'bottom-left', label: '↙ Bottom Left' },
    { id: 'bottom-right', label: '↘ Bottom Right' },
  ];

  return (
    <div className="space-y-5">
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="text-4xl mb-3">🔏</div>
        <p className="font-semibold text-sm text-foreground">Click to upload image</p>
        <p className="text-xs text-muted-foreground mt-1">Add text watermark to protect your photo</p>
      </div>

      {file && (
        <div className="space-y-4 p-4 rounded-xl border border-border bg-muted/20">
          <div>
            <label className="text-xs font-semibold text-foreground mb-1.5 block">Watermark Text</label>
            <input value={text} onChange={(e) => setText(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Size: {fontSize}%</label>
              <input type="range" min={10} max={80} value={fontSize}
                onChange={(e) => setFontSize(+e.target.value)} className="w-full accent-primary" />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Opacity: {Math.round(opacity * 100)}%</label>
              <input type="range" min={0.1} max={1} step={0.05} value={opacity}
                onChange={(e) => setOpacity(+e.target.value)} className="w-full accent-primary" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Text Color</label>
              <div className="flex items-center gap-2">
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)}
                  className="w-10 h-9 rounded border border-border cursor-pointer" />
                <span className="text-xs font-mono text-muted-foreground">{color.toUpperCase()}</span>
              </div>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground mb-2 block">Position</label>
            <div className="grid grid-cols-3 gap-1.5">
              {positions.map((p) => (
                <button key={p.id} onClick={() => setPosition(p.id)}
                  className={`text-xs py-1.5 px-2 rounded-lg border font-medium transition-all ${position === p.id ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:border-primary/40'}`}>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <button onClick={reapply} disabled={processing}
            className="w-full py-2.5 rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 disabled:opacity-50 transition-all">
            {processing ? 'Applying…' : '🔄 Preview Watermark'}
          </button>
        </div>
      )}

      {resultUrl && (
        <div className="space-y-3">
          <img src={resultUrl} alt="Watermarked" className="w-full max-h-64 object-contain rounded-xl border border-border" />
          <div className="grid grid-cols-2 gap-3">
            <button onClick={download}
              className="py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-md">
              ⬇ Download
            </button>
            <button onClick={() => { setFile(null); setPreview(''); setResultUrl(''); }}
              className="py-3.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              New image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
