import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageConverterTool from '@/components/ImageConverterTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['webp-to-jpg'];
export const metadata: Metadata = {
  title: 'WebP to JPG Converter Online Free — Convert WebP Images Instantly',
  description: 'Convert WebP images to JPG online free. Works for Chrome screenshots and web downloads. Browser-based, no uploads, instant WebP to JPEG conversion.',
  keywords: 'webp to jpg converter, convert webp to jpg online, webp to jpeg, webp converter online, change webp to jpg free',
  alternates: { canonical: 'https://tools.draftly.co.in/webp-to-jpg' },
  openGraph: { title: 'WebP to JPG Converter — Free Online Tool', description: 'Convert WebP to JPG instantly. Works for Chrome screenshots and downloaded images.', type: 'website', url: 'https://tools.draftly.co.in/webp-to-jpg' },
};

const faqs = [
  { question: 'What is WebP and why do I need to convert it?', answer: 'WebP is a modern image format created by Google. Chrome and new browsers display it natively, but many older apps, government portals, and image editors do not accept WebP files. Converting to JPG makes your image universally compatible.' },
  { question: 'How do I get WebP files?', answer: 'When you right-click and save images from Google Chrome or modern websites, you often get WebP files. Screenshots on some Android phones are also saved as WebP.' },
  { question: 'Will the quality be maintained after conversion?', answer: 'Yes. WebP and JPG are both compressed formats, so the converted JPG will look virtually identical to the original WebP at the quality level we output (92% JPEG quality).' },
];

export default function WebpToJpg() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="WebP to JPG Converter — Free, Instant, No Uploads"
      intro="Downloaded a WebP image from Chrome and can't open or upload it? This free browser-based tool converts any WebP image to JPG/JPEG format instantly. WebP files from Google, Chrome screenshots, and modern websites are not accepted by most government portals or older applications. Convert to JPG here — no server upload, no signup, completely private."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageConverterTool fromFormat="WebP" toFormat="JPG" outputMime="image/jpeg" outputExt="jpg"
        description="Convert Chrome screenshots and WebP downloads to universal JPG" />
    </ToolLayout>
  );
}
