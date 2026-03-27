import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import WatermarkTool from '@/components/WatermarkTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['add-watermark'];
export const metadata: Metadata = {
  title: 'Add Watermark to Image Online Free — Text Watermark Maker',
  description: 'Add text watermark to images online free. Customize text, font size, opacity, color, and position. Protect your photos from copyright theft. Instant, browser-based.',
  keywords: 'add watermark to image online free, text watermark maker, photo watermark online, watermark image free, add copyright to photo, watermark creator online',
  alternates: { canonical: 'https://tools.draftly.co.in/add-watermark' },
  openGraph: { title: 'Add Watermark to Image — Free Online Tool', description: 'Protect your photos with custom text watermarks. Adjust text, opacity, and position.', type: 'website', url: 'https://tools.draftly.co.in/add-watermark' },
};

const faqs = [
  { question: 'Can I customize the watermark text?', answer: 'Yes — enter any text: your name, website URL, copyright notice, or any custom message. Adjust font size (10-80% of image), opacity (10-100%), color, and position (5 corner/center options).' },
  { question: 'What opacity should I use for watermarks?', answer: 'For professional photos: 30-50% opacity is standard — visible enough to deter theft but not distracting. For stronger protection: 70-80% opacity. For subtle branding: 20-30%.' },
  { question: 'Is my photo uploaded to any server?', answer: 'No. The watermark is applied entirely in your browser using the Canvas API. Your photos never leave your device.' },
  { question: 'Can I add image watermarks (logos)?', answer: 'Currently this tool adds text watermarks. Image/logo watermarks and multi-watermark support are planned for a future update.' },
];

export default function AddWatermark() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Add Watermark to Image — Free Online Text Watermark Maker"
      intro="Protect your photos from unauthorized use by adding a custom text watermark. This free browser-based tool lets you add your name, copyright notice, or website URL to any image with full control over text size, color, opacity, and position. Choose from 5 placement options: top-left, top-right, center, bottom-left, or bottom-right. Your photos are processed entirely in your browser — never uploaded to any server."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <WatermarkTool />
    </ToolLayout>
  );
}
