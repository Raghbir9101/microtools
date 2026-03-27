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
}

export default nextConfig
