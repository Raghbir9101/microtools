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
}

export default nextConfig
