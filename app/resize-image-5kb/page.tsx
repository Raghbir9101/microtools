import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-5kb'];

export const metadata: Metadata = {
  title: 'Resize Image to 5KB Online Free — Ultra-Small Photo Compressor',
  description: 'Compress any image to exactly 5KB for portals with very strict file size limits. Fast, free, browser-based. No uploads, instant results.',
  keywords: 'resize image 5kb, compress image 5kb online, 5kb photo compressor, ultra small image compress',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-5kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-5kb' },
  },
  openGraph: {
    title: 'Resize Image to 5KB — Free Online Compressor',
    description: 'Compress your photo to exactly 5KB for ultra-strict file size portals. Browser-based, no uploads.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Which portals require 5KB images?',
    answer: 'Some older Indian government portals, certain state exam boards, and legacy corporate portals set very strict limits of 5KB for profile photos or thumbnails. You should always verify the exact requirement from the official portal notice.',
  },
  {
    question: 'Will a 5KB image be too blurry or unclear?',
    answer: 'At 5KB, image quality will be visibly reduced compared to 20KB or 50KB. However, for official identification purposes in form submissions, the face is still clearly recognisable. Use a high-resolution original photo (at least 500KB) for best results.',
  },
  {
    question: 'What formats are supported?',
    answer: 'JPG, JPEG, and PNG images are supported for upload. The compressed output is saved as JPEG, which gives the best compression at very small sizes.',
  },
  {
    question: 'Is my file private?',
    answer: 'Yes. All compression happens locally in your browser using the Canvas API. We never upload or store your photo.',
  },
];

export default function Page5KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Resize Image to 5KB — Free Online Compressor"
      intro="Compress your image to exactly 5KB for portals with ultra-strict file size requirements. Some state government websites, legacy exam portals, and older online forms set a hard limit of 5KB for photo uploads. Our free browser-based tool uses a precise binary-search compression algorithm to hit the 5KB target within ±1KB tolerance. Works with JPG and PNG. No uploads, no registration — processing happens entirely in your browser. For best quality, start with a high-resolution original (at least 1MB) before compressing to 5KB."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 5KB"
        description="Upload your image and compress it to exactly 5KB. Ideal for older portals with ultra-strict file size limits."
        options={[{ size: 5, label: '5 KB', description: 'Ultra-small target (±1KB tolerance)' }]}
      />
    </ToolLayout>
  );
}
