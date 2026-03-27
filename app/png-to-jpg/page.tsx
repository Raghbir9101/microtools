import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageConverterTool from '@/components/ImageConverterTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['png-to-jpg'];
export const metadata: Metadata = {
  title: 'PNG to JPG Converter Online Free — Reduce File Size Instantly',
  description: 'Convert PNG to JPG online free. Reduce file size significantly while keeping great quality. No uploads, browser-based, instant PNG to JPEG conversion.',
  keywords: 'png to jpg converter, convert png to jpg online free, png to jpeg, png jpg converter, change png to jpg',
  alternates: { canonical: 'https://tools.draftly.co.in/png-to-jpg' },
  openGraph: { title: 'PNG to JPG Converter Free Online', description: 'Convert PNG to JPG instantly. Smaller files, great quality.', type: 'website', url: 'https://tools.draftly.co.in/png-to-jpg' },
};

const faqs = [
  { question: 'Why convert PNG to JPG?', answer: 'JPG files are much smaller than PNG for photographs. Government portals and online forms often only accept JPG/JPEG format. Converting PNG to JPG makes files compatible with more upload portals.' },
  { question: 'What happens to transparent areas in PNG?', answer: 'PNG transparency is replaced with a white background when converting to JPG, since JPG does not support transparency. This is correct for government form photos which require white backgrounds.' },
  { question: 'How much smaller will my JPG be vs the original PNG?', answer: 'For photographic images, JPG can be 5-10x smaller than PNG with minimal visible quality difference. For graphics and logos, the reduction is less dramatic.' },
];

export default function PngToJpg() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="PNG to JPG Converter — Free Online, Instant, No Uploads"
      intro="Convert PNG images to JPG/JPEG format instantly in your browser. JPG is required by most government portals, bank applications, and online forms. This tool converts your PNG with a white background (replacing any transparent areas) and outputs a high-quality JPEG file significantly smaller than the original PNG — perfect for uploading to restricted portals."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageConverterTool fromFormat="PNG" toFormat="JPG" outputMime="image/jpeg" outputExt="jpg"
        description="Transparent areas are replaced with white background" />
    </ToolLayout>
  );
}
