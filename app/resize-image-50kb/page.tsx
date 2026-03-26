import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-50kb-upsc'];

export const metadata: Metadata = {
  title: 'Resize Image to 50KB Online — Free Photo Compressor',
  description:
    'Free online tool to compress any image to exactly 50KB. Ideal for UPSC forms, banking exams, and government portals. 100% browser-based, instant, no upload required.',
  keywords:
    'resize image to 50kb, compress photo 50kb, 50kb image online, reduce image 50kb, UPSC photo 50kb, bank exam photo 50kb',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-50kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-50kb' },
  },
  openGraph: {
    title: 'Resize Image to 50KB Online — Free Photo Compressor',
    description:
      'Compress any photo to exactly 50KB for UPSC forms, bank exams, and govt portals. Free, instant, browser-based.',
    type: 'website',
    url: 'https://tools.draftly.co.in/resize-image-50kb',
  },
};

const faqs = [
  {
    question: 'How do I resize an image to exactly 50KB?',
    answer:
      'Upload your JPG or PNG using the tool above and click "Compress to 50KB". Our Canvas API binary search algorithm adjusts JPEG quality iteratively until the output file is exactly 50KB (±2KB). Download the result instantly.',
  },
  {
    question: 'Which exams need a 50KB photo?',
    answer:
      'UPSC Civil Services (IAS/IPS/IFS), UPSC CMS, UPSC ESE, GATE, IES, IBPS RRB, NABARD, and many banking exams require photos within 50KB. Check your exam notification for the exact size limit.',
  },
  {
    question: 'Is the photo quality acceptable at 50KB?',
    answer:
      'Yes — 50KB is a comfortable file size for a JPEG photograph. Facial clarity, skin tone, and background details are well preserved, making compressed photos fully suitable for official government identification.',
  },
  {
    question: 'Can I use a PNG image?',
    answer:
      'Yes, you can upload PNG images. The output is converted to JPEG format for optimal compression. JPEG achieves target sizes much more efficiently than PNG at small file sizes.',
  },
  {
    question: 'How is this different from the UPSC-specific 50KB page?',
    answer:
      'The compression logic is the same. This page provides general guidance for any exam requiring 50KB, while the UPSC-specific page includes UPSC exam lists and UPSC-specific tips.',
  },
  {
    question: 'What is the tolerance on the 50KB compression?',
    answer:
      'We target 50KB with a ±2KB tolerance — meaning your output will be between 48KB and 52KB. This range is accepted by all major government exam portals.',
  },
];

export default function ResizeImage50KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);

  return (
    <ToolLayout
      h1="Resize Image to 50KB Online — Free Compressor"
      intro="Compress your photo to exactly 50KB for UPSC applications, banking exam portals, or any site with a 50KB photo limit. This free browser-based tool uses Canvas API binary search compression to reach the 50KB target within ±2KB — fast, accurate, and fully private. Upload a JPG or PNG, compress, and download in seconds. No server, no signup, no data sharing. Compatible with UPSC, GATE, IES, IBPS RRB, NABARD, and all major competitive exam portals in India."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 50KB"
        description="Upload your photo and compress it to exactly 50KB for UPSC forms, bank exam portals, or any application requiring a 50KB image."
        options={[{ size: 50, label: 'UPSC / Bank — 50KB', description: 'Standard UPSC & banking exam requirement' }]}
      />
    </ToolLayout>
  );
}
