import { NextResponse } from 'next/server';

const BASE_URL = 'https://tools.draftly.co.in';

const urls = [
  // Homepage
  { loc: BASE_URL, changefreq: 'weekly', priority: '1.0' },

  // Image Compressors
  { loc: `${BASE_URL}/resize-image-10kb`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${BASE_URL}/resize-image-20kb`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${BASE_URL}/resize-image-20kb-ssc`, changefreq: 'monthly', priority: '0.95' },
  { loc: `${BASE_URL}/resize-image-50kb`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${BASE_URL}/resize-image-50kb-upsc`, changefreq: 'monthly', priority: '0.95' },
  { loc: `${BASE_URL}/resize-image-100kb`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${BASE_URL}/resize-image-100kb-railway`, changefreq: 'monthly', priority: '0.95' },

  // Background Remover
  { loc: `${BASE_URL}/background-remover`, changefreq: 'weekly', priority: '0.95' },

  // Signature Resizer
  { loc: `${BASE_URL}/resize-signature`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${BASE_URL}/resize-signature-ssc`, changefreq: 'monthly', priority: '0.88' },
  { loc: `${BASE_URL}/resize-signature-10kb`, changefreq: 'monthly', priority: '0.85' },

  // Passport Photo
  { loc: `${BASE_URL}/passport-photo-maker`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${BASE_URL}/passport-size-photo-online`, changefreq: 'monthly', priority: '0.88' },

  // Dimension Resizer
  { loc: `${BASE_URL}/resize-image-dimensions`, changefreq: 'monthly', priority: '0.88' },

  // B&W / Grayscale
  { loc: `${BASE_URL}/photo-to-black-and-white`, changefreq: 'monthly', priority: '0.85' },
  { loc: `${BASE_URL}/image-grayscale-converter`, changefreq: 'monthly', priority: '0.82' },

  // DPI Converter
  { loc: `${BASE_URL}/photo-dpi-converter`, changefreq: 'monthly', priority: '0.85' },

  // Image Format Converters
  { loc: `${BASE_URL}/jpg-to-png`, changefreq: 'monthly', priority: '0.88' },
  { loc: `${BASE_URL}/png-to-jpg`, changefreq: 'monthly', priority: '0.88' },
  { loc: `${BASE_URL}/webp-to-jpg`, changefreq: 'monthly', priority: '0.88' },
  { loc: `${BASE_URL}/jpg-to-webp`, changefreq: 'monthly', priority: '0.85' },

  // Image Crop
  { loc: `${BASE_URL}/image-crop`, changefreq: 'monthly', priority: '0.85' },

  // Utility Tools
  { loc: `${BASE_URL}/image-size-checker`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${BASE_URL}/image-blur`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${BASE_URL}/add-watermark`, changefreq: 'monthly', priority: '0.8' },

  // Social Media Tools
  { loc: `${BASE_URL}/youtube-thumbnail-downloader`, changefreq: 'monthly', priority: '0.85' },
  { loc: `${BASE_URL}/instagram-image-resizer`, changefreq: 'monthly', priority: '0.85' },

  // PDF Tools
  { loc: `${BASE_URL}/merge-pdf`, changefreq: 'monthly', priority: '0.88' },
  { loc: `${BASE_URL}/jpg-to-pdf`, changefreq: 'monthly', priority: '0.88' },

  // Legal Pages
  { loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.5' },
  { loc: `${BASE_URL}/privacy-policy`, changefreq: 'yearly', priority: '0.4' },
  { loc: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.4' },
];

const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

function buildSitemap(): string {
  const urlEntries = urls
    .map(
      ({ loc, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export async function GET() {
  const xml = buildSitemap();

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
