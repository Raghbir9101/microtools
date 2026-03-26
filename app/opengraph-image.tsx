import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Microtools — Free Online Tools for Govt Forms & Creators';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #faf5ff 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(99,102,241,0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(139,92,246,0.08)',
          }}
        />

        {/* Logo + site name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              background: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(99,102,241,0.4)',
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <circle cx="7" cy="7" r="1.5" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e1b4b',
              letterSpacing: '-0.5px',
            }}
          >
            Microtools
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: '52px',
            fontWeight: '800',
            color: '#111827',
            textAlign: 'center',
            margin: '0 0 16px 0',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          Free Online Tools for{' '}
          <span style={{ color: '#6366f1' }}>Govt Forms</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: '22px',
            color: '#6b7280',
            textAlign: 'center',
            margin: '0 0 40px 0',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          Compress images to 10KB, 20KB, 50KB, 100KB for SSC, UPSC, Railway forms — instantly, free, and browser-based.
        </p>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: '10KB', color: '#dbeafe', text: '#1d4ed8' },
            { label: 'SSC 20KB', color: '#dcfce7', text: '#15803d' },
            { label: 'UPSC 50KB', color: '#ede9fe', text: '#7c3aed' },
            { label: 'Railway 100KB', color: '#ffedd5', text: '#c2410c' },
          ].map((b) => (
            <div
              key={b.label}
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                background: b.color,
                color: b.text,
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              {b.label}
            </div>
          ))}
        </div>

        {/* URL */}
        <p
          style={{
            position: 'absolute',
            bottom: '24px',
            fontSize: '16px',
            color: '#9ca3af',
            fontWeight: '500',
          }}
        >
          tools.draftly.co.in
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
