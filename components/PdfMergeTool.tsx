'use client';

import { useState, useRef } from 'react';

export default function PdfMergeTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [merging, setMerging] = useState(false);
  const [resultUrl, setResultUrl] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const pdfs = Array.from(newFiles).filter(f => f.type === 'application/pdf');
    setFiles(prev => [...prev, ...pdfs]);
    setResultUrl('');
  };

  const removeFile = (idx: number) => setFiles(prev => prev.filter((_, i) => i !== idx));

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    setFiles(prev => { const a = [...prev]; [a[idx-1], a[idx]] = [a[idx], a[idx-1]]; return a; });
  };

  const moveDown = (idx: number) => {
    if (idx === files.length - 1) return;
    setFiles(prev => { const a = [...prev]; [a[idx], a[idx+1]] = [a[idx+1], a[idx]]; return a; });
  };

  const merge = async () => {
    if (files.length < 2) { setError('Please add at least 2 PDF files to merge.'); return; }
    setError('');
    setMerging(true);
    try {
      const { PDFDocument } = await import('pdf-lib');
      const merged = await PDFDocument.create();
      for (const file of files) {
        const buf = await file.arrayBuffer();
        const doc = await PDFDocument.load(buf);
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach(p => merged.addPage(p));
      }
      const bytes = await merged.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      setResultUrl(URL.createObjectURL(blob));
    } catch (e) {
      setError(`Merge failed: ${e instanceof Error ? e.message : 'Unknown error'}. Make sure PDFs are not password-protected.`);
    }
    setMerging(false);
  };

  const download = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = 'merged.pdf';
    a.click();
  };

  return (
    <div className="space-y-5">
      <div onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="application/pdf" multiple className="hidden"
          onChange={(e) => addFiles(e.target.files)} />
        <div className="text-4xl mb-3">📄</div>
        <p className="font-semibold text-sm text-foreground">Click or drag PDF files here</p>
        <p className="text-xs text-muted-foreground mt-1">Add multiple PDFs to combine them in order</p>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-foreground">Files to merge ({files.length})</p>
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
              <span className="text-xl flex-shrink-0">📄</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{f.name}</p>
                <p className="text-xs text-muted-foreground">{(f.size / 1024).toFixed(0)} KB</p>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => moveUp(i)} className="p-1 text-muted-foreground hover:text-foreground" title="Move up">↑</button>
                <button onClick={() => moveDown(i)} className="p-1 text-muted-foreground hover:text-foreground" title="Move down">↓</button>
                <button onClick={() => removeFile(i)} className="p-1 text-muted-foreground hover:text-destructive" title="Remove">✕</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">{error}</div>}

      {files.length >= 2 && !resultUrl && (
        <button onClick={merge} disabled={merging}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 disabled:opacity-50 transition-all shadow-md">
          {merging ? '🔄 Merging PDFs…' : `📎 Merge ${files.length} PDFs into One`}
        </button>
      )}

      {resultUrl && (
        <div className="space-y-3">
          <div className="p-4 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-center">
            <p className="text-emerald-700 dark:text-emerald-400 font-bold">✅ PDFs merged successfully!</p>
            <p className="text-xs text-muted-foreground mt-1">{files.length} files combined into one PDF</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={download}
              className="py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm hover:opacity-90 transition-all shadow-md">
              ⬇ Download PDF
            </button>
            <button onClick={() => { setFiles([]); setResultUrl(''); }}
              className="py-3.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              Merge others
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
