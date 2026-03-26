import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-20kb-ssc'];

export const metadata: Metadata = {
  title: 'Resize Image to 20KB Online — Free Photo Compressor',
  description:
    'Free online tool to compress any image to exactly 20KB. Perfect for SSC forms, bank applications, and government portals. 100% browser-based, instant, no upload required.',
  keywords:
    'resize image to 20kb, compress photo 20kb, 20kb image online, reduce image size 20kb, SSC form photo 20kb',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-20kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-20kb' },
  },
  openGraph: {
    title: 'Resize Image to 20KB Online — Free Photo Compressor',
    description:
      'Compress any photo to exactly 20KB for SSC forms, bank exams, and govt portals. Free, instant, browser-based.',
    type: 'website',
    url: 'https://tools.draftly.co.in/resize-image-20kb',
  },
};

const faqs = [
  {
    question: 'Why do government portals require photos under 20KB?',
    answer:
      'Government recruitment portals like SSC, IBPS, and state PSC boards limit photo sizes to 20KB to minimise server storage and ensure fast page loads during high-traffic application periods. Our tool helps you meet this requirement reliably.',
  },
  {
    question: 'How do I compress an image to exactly 20KB?',
    answer:
      'Upload your JPG or PNG image using the tool above, then click "Compress to 20KB". Our Canvas API binary search algorithm adjusts JPEG quality iteratively — typically finding the right value in under 15 iterations, reaching exactly 20KB within ±2KB.',
  },
  {
    question: 'Which exams need a 20KB photo?',
    answer:
      'SSC CGL, SSC CHSL, SSC CPO, SSC MTS, SSC GD, IBPS PO, IBPS Clerk, SBI exams, and many state government job portals require photos within 20KB. Always verify with your specific exam notification.',
  },
  {
    question: 'Does photo quality remain acceptable at 20KB?',
    answer:
      'Yes. At 20KB, facial features, skin tone, and background details are preserved sufficiently for official identification. Quality is optimised using the highest JPEG quality setting that still meets the size target.',
  },
  {
    question: 'Is this tool different from the SSC-specific page?',
    answer:
      'The compression logic is identical. This page targets the general "20KB" keyword, while the SSC-specific page includes SSC exam-specific guidance and exam lists.',
  },
  {
    question: 'What are the supported file formats?',
    answer:
      'You can upload JPG, JPEG, or PNG images. The output is always saved as JPEG for best compression at small file sizes.',
  },
];

export default function ResizeImage20KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);

  return (
    <ToolLayout
      h1="Resize Image to 20KB Online — Free Compressor"
      intro="Need to compress your photo to exactly 20KB for an online form? This free browser-based tool uses the HTML Canvas API to reduce your image size to precisely 20KB within ±2KB tolerance. Upload a JPG or PNG, click compress, and download the result instantly. No server uploads, no account, completely private — your file never leaves your device. Works for SSC, IBPS, SBI, state PSC forms, and any portal with a 20KB photo limit."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 20KB"
        description="Upload your photo and compress it to exactly 20KB for government forms, bank exam portals, or any application requiring a 20KB image."
        options={[{ size: 20, label: 'SSC / Bank Form — 20KB', description: 'Standard govt exam requirement' }]}
      />
    </ToolLayout>
  );
}
