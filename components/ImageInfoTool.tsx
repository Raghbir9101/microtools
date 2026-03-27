'use client';

import { useState, useRef } from 'react';

export default function ImageInfoTool() {
  const [info, setInfo] = useState<{
    name: string; size: string; sizeKB: number; type: string;
    width: number; height: number; preview: string;
    lastModified: string;
  } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      setInfo({
        name: f.name,
        size: f.size > 1024 * 1024
          ? `${(f.size / (1024 * 1024)).toFixed(2)} MB`
          : `${(f.size / 1024).toFixed(1)} KB`,
        sizeKB: +(f.size / 1024).toFixed(1),
        type: f.type || 'Unknown',
        width: img.width,
        height: img.height,
        preview: url,
        lastModified: new Date(f.lastModified).toLocaleDateString('en-IN'),
      });
    };
    img.src = url;
  };

  const fields = info ? [
    { label: 'File Name', value: info.name },
    { label: 'File Size', value: info.size, highlight: info.sizeKB > 100 ? 'red' : info.sizeKB > 50 ? 'amber' : 'green' },
    { label: 'Format', value: info.type.replace('image/', '').toUpperCase() },
    { label: 'Dimensions', value: `${info.width} × ${info.height} pixels` },
    { label: 'Aspect Ratio', value: (() => { const g = (a: number, b: number): number => b === 0 ? a : g(b, a % b); const d = g(info.width, info.height); return `${info.width/d}:${info.height/d}`; })() },
    { label: 'Last Modified', value: info.lastModified },
  ] : [];

  const getRecommendation = () => {
    if (!info) return null;
    if (info.sizeKB <= 10) return { text: '✅ Good for 10KB forms (signatures, small photos)', color: 'emerald' };
    if (info.sizeKB <= 20) return { text: '✅ Good for SSC forms (20KB requirement)', color: 'emerald' };
    if (info.sizeKB <= 50) return { text: '✅ Good for UPSC forms (50KB requirement)', color: 'emerald' };
    if (info.sizeKB <= 100) return { text: '✅ Good for Railway/RRB forms (100KB requirement)', color: 'emerald' };
    return { text: `⚠️ Too large for most govt forms — compress to 20KB, 50KB, or 100KB first`, color: 'amber' };
  };

  return (
    <div className="space-y-5">
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="text-4xl mb-3">🔍</div>
        <p className="font-semibold text-sm text-foreground">Click to check image info</p>
        <p className="text-xs text-muted-foreground mt-1">See size, dimensions, format — instantly, no upload</p>
      </div>

      {info && (
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
            <img src={info.preview} alt="preview" className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-sm truncate">{info.name}</p>
              <p className="text-3xl font-extrabold text-primary mt-1">{info.size}</p>
              <p className="text-xs text-muted-foreground">{info.width}×{info.height}px</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {fields.map((f) => (
              <div key={f.label} className="flex items-center justify-between px-4 py-3 rounded-lg bg-muted/30 border border-border">
                <span className="text-xs text-muted-foreground font-medium">{f.label}</span>
                <span className={`text-sm font-bold ${
                  f.highlight === 'green' ? 'text-emerald-600' :
                  f.highlight === 'amber' ? 'text-amber-600' :
                  f.highlight === 'red' ? 'text-rose-600' : 'text-foreground'
                }`}>{f.value}</span>
              </div>
            ))}
          </div>

          {(() => { const r = getRecommendation(); return r ? (
            <div className={`p-3 rounded-xl border text-sm font-medium ${
              r.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400' :
              'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400'
            }`}>{r.text}</div>
          ) : null; })()}

          <button onClick={() => { setInfo(null); }}
            className="w-full py-2.5 rounded-xl border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">
            Check another image
          </button>
        </div>
      )}
    </div>
  );
}
