'use client';

import { useState } from 'react';

const RESOLUTIONS: { [key: string]: { width: number; height: number; label: string; desc: string } } = {
  maxres: { width: 1280, height: 720, label: 'HD (1280×720)', desc: 'Best quality' },
  hqdefault: { width: 480, height: 360, label: 'HQ (480×360)', desc: 'Good quality' },
  mqdefault: { width: 320, height: 180, label: 'MQ (320×180)', desc: 'Medium quality' },
  default: { width: 120, height: 90, label: 'SD (120×90)', desc: 'Small' },
};

function extractVideoId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

export default function YoutubeThumbnailTool() {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [resolution, setResolution] = useState<keyof typeof RESOLUTIONS>('maxres');
  const [error, setError] = useState('');

  const handleFetch = () => {
    setError('');
    const id = extractVideoId(url.trim());
    if (!id) { setError('Invalid YouTube URL. Please paste a valid YouTube video link.'); return; }
    setVideoId(id);
  };

  const thumbUrl = videoId ? `https://img.youtube.com/vi/${videoId}/${resolution}.jpg` : '';

  const handleDownload = async () => {
    if (!thumbUrl) return;
    try {
      const res = await fetch(thumbUrl);
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `youtube-thumbnail-${videoId}-${resolution}.jpg`;
      a.click();
    } catch {
      // Fallback: open in new tab
      window.open(thumbUrl, '_blank');
    }
  };

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground">Paste YouTube Video URL</label>
        <div className="flex gap-2">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleFetch()}
            placeholder="https://www.youtube.com/watch?v=..."
            className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button onClick={handleFetch}
            className="px-4 py-2.5 rounded-lg bg-rose-500 text-white font-bold text-sm hover:bg-rose-600 transition-colors flex-shrink-0">
            Get Thumb
          </button>
        </div>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>

      {videoId && (
        <>
          {/* Resolution selector */}
          <div>
            <p className="text-xs font-semibold text-foreground mb-2">Resolution</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(RESOLUTIONS).map(([key, val]) => (
                <button key={key} onClick={() => setResolution(key as keyof typeof RESOLUTIONS)}
                  className={`p-2.5 rounded-lg border text-left text-xs transition-all ${resolution === key ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'}`}>
                  <span className="font-bold text-foreground">{val.label}</span>
                  <span className="text-muted-foreground ml-1">— {val.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Thumbnail preview */}
          <div className="space-y-3">
            <img
              src={thumbUrl}
              alt="YouTube thumbnail"
              className="w-full rounded-xl border border-border shadow-sm"
              onError={(e) => {
                // Fallback to hqdefault if maxres not available
                if (resolution === 'maxres') {
                  setResolution('hqdefault');
                } else {
                  (e.target as HTMLImageElement).style.display = 'none';
                }
              }}
            />
            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleDownload}
                className="py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold text-sm hover:opacity-90 transition-all shadow-md">
                ⬇ Download Thumbnail
              </button>
              <button onClick={() => { setVideoId(''); setUrl(''); }}
                className="py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
                Get another
              </button>
            </div>
          </div>
        </>
      )}

      <div className="p-3 rounded-lg bg-muted/30 border border-border">
        <p className="text-xs text-muted-foreground">ℹ️ YouTube thumbnails are public images. This tool simply fetches the standard thumbnail URL from YouTube&apos;s CDN. No login required.</p>
      </div>
    </div>
  );
}
