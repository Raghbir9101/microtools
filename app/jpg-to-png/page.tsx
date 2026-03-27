import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageConverterTool from '@/components/ImageConverterTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['jpg-to-png'];
export const metadata: Metadata = {
  title: 'JPG to PNG Converter Online Free — No Quality Loss',
  description: 'Convert JPG images to PNG format online free. Keep full transparency and quality. Browser-based, no uploads, instant JPG to PNG conversion.',
  keywords: 'jpg to png converter, convert jpg to png online free, jpeg to png, jpg png converter, change jpg to png',
  alternates: { canonical: 'https://tools.draftly.co.in/jpg-to-png' },
  openGraph: { title: 'JPG to PNG Converter Free Online', description: 'Convert JPG to PNG in one click. No quality loss, no uploads.', type: 'website', url: 'https://tools.draftly.co.in/jpg-to-png' },
};

const faqs = [
  { question: 'Why convert JPG to PNG?', answer: 'PNG supports transparency (alpha channel) and lossless compression, making it better for logos, graphics, and images with text. Use PNG when you need a white or transparent background removed later.' },
  { question: 'Does converting JPG to PNG improve image quality?', answer: 'PNG is lossless so the converted file will not degrade further. However, any JPG compression artifacts already in the image cannot be reversed. PNG will preserve the current quality without adding new artifacts.' },
  { question: 'Will the file size increase?', answer: 'Yes — PNG files are typically larger than JPG for photographs. JPG uses lossy compression optimized for photos, while PNG uses lossless compression better for graphics and diagrams.' },
];

export default function JpgToPng() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="JPG to PNG Converter — Free, Instant, No Uploads"
      intro="Convert any JPG or JPEG image to PNG format instantly in your browser. PNG format supports transparency and lossless quality — ideal when you plan to further edit the image or need a transparent background. This tool uses the HTML Canvas API to convert your image entirely on your device. No server uploads, no account, completely private. Download your PNG in seconds."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageConverterTool fromFormat="JPG" toFormat="PNG" outputMime="image/png" outputExt="png"
        description="Converts to lossless PNG with full transparency support" />
    </ToolLayout>
  );
}
