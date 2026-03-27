import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['passport-photo-resize'];

export const metadata: Metadata = {
  title: 'Passport Photo Resizer Online Free — Indian Passport Size (35×45mm)',
  description: 'Resize and compress your passport photo to the correct Indian passport size online free. Compress to 35×45mm, right KB for Passport Seva portal. No uploads, instant.',
  keywords: 'passport photo resize online, Indian passport photo size online, compress passport photo free, passport seva photo size, passport photo 35x45mm online',
  alternates: {
    canonical: 'https://tools.draftly.co.in/passport-photo-resize',
    languages: { 'en-IN': 'https://tools.draftly.co.in/passport-photo-resize' },
  },
  openGraph: {
    title: 'Passport Photo Resizer Online — Indian Passport (35×45mm)',
    description: 'Resize passport photo to correct size for Indian passport applications. Free, browser-based.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What size should a passport photo be for Indian passport?',
    answer: 'Indian passport photos must be 35mm × 45mm in physical dimensions (portrait orientation). Digitally, this translates to 413×531 pixels at 300 DPI. The Passport Seva online upload portal accepts files from 10KB to 500KB in JPG format.',
  },
  {
    question: 'How do I resize a photo for Passport Seva portal?',
    answer: 'Use this tool to compress your photo to under 500KB (we recommend 50–100KB for good quality). For pixel dimensions, use our Passport Photo Maker or Image Dimension Resizer. Then upload to the Passport Seva portal under the photo section.',
  },
  {
    question: 'What background colour is required for Indian passport photo?',
    answer: 'White or off-white background is mandatory. No coloured or dark backgrounds. If your photo has a different background, use our Background Remover tool to replace it with white before compressing.',
  },
  {
    question: 'Can I use the same photo for visa and passport?',
    answer: 'Generally yes, if the photo meets both requirements. Visa photo requirements may differ by country. For Indian e-Visa, the photo is 2 inches × 2 inches (instead of 35×45mm). Check the specific visa portal for exact size.',
  },
  {
    question: 'What is the file size limit for Passport Seva photo upload?',
    answer: 'The Passport Seva portal accepts photos between 10KB and 500KB. We recommend compressing to 50KB for a good balance of quality and file size that is reliably accepted by the portal.',
  },
];

export default function PassportPhotoResizePage() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Passport Photo Resizer Online — Indian Passport Size (35×45mm)"
      intro="Resize and compress your passport photo for the Indian Passport Seva portal or any visa application for free. Indian passport photos must be 35×45mm in size (413×531 pixels at 300 DPI) with a white or off-white background. The Passport Seva online portal accepts JPG files from 10KB to 500KB. This free browser-based tool compresses your photo to the right file size while keeping it sharp and clear. No server uploads, no registration, no watermarks. Your photo never leaves your browser — completely private and instant."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Resize Passport Photo"
        description="Upload your passport photo and compress it to the correct file size for Indian Passport Seva portal. Recommended 50KB for best quality and compatibility."
        options={[
          { size: 50, label: 'Passport Upload — 50KB', description: 'Recommended for Passport Seva portal' },
          { size: 100, label: 'High Quality — 100KB', description: 'For portals allowing up to 500KB' },
        ]}
      />
    </ToolLayout>
  );
}
