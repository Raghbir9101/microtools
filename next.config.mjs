import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Prevent webpack from bundling native Node.js addons and ESM-only packages
  serverExternalPackages: [
    '@imgly/background-removal-node',
    '@huggingface/transformers',
    'sharp',
    'onnxruntime-node',
  ],
  experimental: {
    serverActions: {
      bodySizeLimit: '15mb',
    },
  },
  async headers() {
    return [
      {
        // Tell Cloudflare/CDNs not to re-encode (zstd) the sitemap.
        // Google's sitemap fetcher only supports gzip/br, not zstd.
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, no-transform',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ── SSC cluster → single strong page ──────────────────────────────────
      { source: '/resize-image-for-ssc-cgl',  destination: '/resize-image-20kb-ssc', permanent: true },
      { source: '/resize-image-for-ssc-chsl', destination: '/resize-image-20kb-ssc', permanent: true },
      { source: '/resize-image-for-ssc-mts',  destination: '/resize-image-20kb-ssc', permanent: true },
      { source: '/ssc-photo-resize',           destination: '/resize-image-20kb-ssc', permanent: true },

      // ── Size dupes → survivors ─────────────────────────────────────────────
      { source: '/resize-image-5kb',          destination: '/resize-image-20kb', permanent: true },
      { source: '/resize-image-10kb',         destination: '/resize-image-20kb', permanent: true },
      { source: '/resize-image-30kb',         destination: '/resize-image-20kb', permanent: true },
      { source: '/resize-image-200kb',        destination: '/resize-image-50kb', permanent: true },
      { source: '/resize-image-50kb-upsc',    destination: '/resize-image-50kb', permanent: true },
      { source: '/resize-image-100kb-railway',destination: '/resize-image-100kb', permanent: true },

      // ── Signature dupes → survivors ────────────────────────────────────────
      { source: '/resize-signature-10kb',     destination: '/resize-signature', permanent: true },
      { source: '/resize-signature-for-ibps', destination: '/resize-signature', permanent: true },
      { source: '/resize-signature-ssc',      destination: '/resize-signature-for-ssc', permanent: true },
      { source: '/signature-resize-20kb',     destination: '/resize-signature', permanent: true },

      // ── Thin exam variants → intent-matched size pages ────────────────────
      { source: '/resize-image-for-capf',         destination: '/resize-image-20kb', permanent: true },
      { source: '/resize-image-for-ias-exam',      destination: '/resize-image-50kb', permanent: true },
      { source: '/resize-image-for-rpf-constable', destination: '/resize-image-100kb', permanent: true },
      { source: '/resize-image-for-rrb-ntpc',      destination: '/resize-image-100kb', permanent: true },
      { source: '/resize-image-for-ibps',          destination: '/resize-image-50kb', permanent: true },
      { source: '/resize-image-for-jee',           destination: '/resize-image-for-exams', permanent: true },
      { source: '/resize-image-for-neet',          destination: '/resize-image-for-exams', permanent: true },

      // ── Passport cluster → single page ────────────────────────────────────
      { source: '/passport-size-photo-online', destination: '/passport-photo-maker', permanent: true },
      { source: '/passport-photo-resize',      destination: '/passport-photo-maker', permanent: true },
    ];
  },
}

export default nextConfig
