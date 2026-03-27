import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageConverterTool from '@/components/ImageConverterTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['jpg-to-webp'];
export const metadata: Metadata = {
  title: 'JPG to WebP Converter Online Free — Smaller Files, Same Quality',
  description: 'Convert JPG or PNG to WebP format for 25-35% smaller file sizes. Free, browser-based, instant JPG to WebP conversion, no uploads needed.',
  keywords: 'jpg to webp converter, convert jpg to webp online free, png to webp, image to webp, webp converter free',
  alternates: { canonical: 'https://tools.draftly.co.in/jpg-to-webp' },
  openGraph: { title: 'JPG to WebP Converter — Smaller Files Free Online', description: 'Convert JPG to WebP for 30% smaller file sizes with same visual quality.', type: 'website', url: 'https://tools.draftly.co.in/jpg-to-webp' },
};

const faqs = [
  { question: 'How much smaller is WebP compared to JPG?', answer: 'WebP images are typically 25-35% smaller than equivalent JPG images at the same visual quality. This makes your website faster and saves bandwidth.' },
  { question: 'Do all browsers support WebP?', answer: 'Yes — Chrome, Firefox, Safari (v14+), Edge, and Opera all support WebP. For maximum compatibility with older browsers and apps, use JPG.' },
];

export default function JpgToWebp() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="JPG to WebP Converter — 30% Smaller Files, Same Quality Free"
      intro="Convert JPG or PNG images to WebP format for significantly smaller file sizes with identical visual quality. WebP is the modern image format recommended by Google for web performance — websites load faster when images are in WebP format. Convert your images here for free, directly in your browser. Perfect for web developers, bloggers, and anyone looking to optimize images."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageConverterTool fromFormat="JPG/PNG" toFormat="WebP" outputMime="image/webp" outputExt="webp"
        description="WebP files are 25-35% smaller than JPG with same visual quality" />
    </ToolLayout>
  );
}
