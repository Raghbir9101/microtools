import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const SITE_URL = 'https://tools.draftly.co.in';
const SITE_NAME = 'Microtools';

export const metadata: Metadata = {
  // ── Base URL for resolving relative og:image / twitter:image paths ──────
  metadataBase: new URL(SITE_URL),

  // ── Title ─────────────────────────────────────────────────────────────────
  title: {
    default: 'Free Online Tools for Govt Forms & Creators — Microtools',
    template: '%s | Microtools',
  },

  // ── Description ───────────────────────────────────────────────────────────
  description:
    'Free browser-based tools for Indian users. Compress images to 10KB, 20KB (SSC), 50KB (UPSC), 100KB (Railway) for govt exam forms. No signup, no uploads — 100% private.',

  // ── Keywords ──────────────────────────────────────────────────────────────
  keywords: [
    'image compressor india',
    'compress image online free',
    'govt form photo size',
    'SSC photo compressor',
    'UPSC image resize',
    'railway form photo',
    'resize image 20kb',
    'resize image 50kb',
    'resize image 100kb',
    'compress photo for exam form',
    'government exam photo size',
    'microtools',
  ],

  // ── Indexing ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  // ── Canonical / Alternates ───────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
    },
  },

  // ── Authorship ────────────────────────────────────────────────────────────
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // ── Favicons / Icons ──────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)', sizes: '32x32' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)',  sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    shortcut: '/icon.svg',
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Free Online Tools for Govt Forms & Creators — Microtools',
    description:
      'Compress images to exact sizes for SSC, UPSC, and Railway exam forms. Free, instant, browser-based — no signup required.',
    images: [
      {
        url: '/opengraph-image',   // resolved via metadataBase → auto-generated Edge OG image
        width: 1200,
        height: 630,
        alt: 'Microtools — Free Online Tools for Govt Forms & Creators',
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@microtools_in',       // update when you have a Twitter handle
    creator: '@microtools_in',
    title: 'Free Online Tools for Govt Forms & Creators — Microtools',
    description:
      'Compress images to 10KB, 20KB, 50KB, 100KB for SSC, UPSC, Railway exam forms. Free, browser-based.',
    images: ['/opengraph-image'],
  },

  // ── Verification (add your real codes when ready) ─────────────────────────
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
    // yandex: 'REPLACE_WITH_YANDEX_CODE',
    // bing: 'REPLACE_WITH_BING_CODE',
  },

  // ── App manifest ─────────────────────────────────────────────────────────
  manifest: '/manifest.json',

  // ── Category ─────────────────────────────────────────────────────────────
  category: 'technology',

  // ── Google AdSense ───────────────────────────────────────────────────────
  other: {
    'google-adsense-account': 'ca-pub-5274802993197394',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6366f1' },
    { media: '(prefers-color-scheme: dark)',  color: '#4f46e5' },
  ],
};

// ── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        'Free browser-based utility tools for Indian users — image compressors for SSC, UPSC, and Railway exam forms.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.svg`,
        width: 512,
        height: 512,
      },
      sameAs: [],    // add social media URLs here when available
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        {/* JSON-LD: WebSite + Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
