import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageInfoTool from '@/components/ImageInfoTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['image-size-checker'];
export const metadata: Metadata = {
  title: 'Image Size Checker Online Free — Check KB, Dimensions, Format',
  description: 'Check image file size in KB/MB, pixel dimensions, aspect ratio, and format online free. Instant, browser-based, no uploads. See if your photo meets govt form requirements.',
  keywords: 'image size checker, check image size online, image kb checker, photo size checker, check image dimensions online, image file size checker',
  alternates: { canonical: 'https://tools.draftly.co.in/image-size-checker' },
  openGraph: { title: 'Image Size Checker — Check KB, Dimensions Free', description: 'Instantly check image file size, dimensions, aspect ratio. No uploads.', type: 'website', url: 'https://tools.draftly.co.in/image-size-checker' },
};

const faqs = [
  { question: 'How do I check image file size without uploading?', answer: 'This tool reads image information directly from your browser — no upload to any server. Select your image file and immediately see its size in KB/MB, pixel dimensions, and format.' },
  { question: 'How do I know if my photo meets SSC/UPSC requirements?', answer: 'SSC requires photos under 20KB, UPSC under 50KB, and Railway under 100KB. This tool immediately tells you whether your photo is within the required size — and suggests which compressor to use if it is too large.' },
  { question: 'What file information does this tool show?', answer: 'File name, size (KB or MB), image format (JPG/PNG/WebP), pixel dimensions (width × height), aspect ratio, and file last-modified date.' },
];

export default function ImageSizeChecker() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Image Size Checker — Check KB, Dimensions & Format Free"
      intro="Check your image file size, pixel dimensions, aspect ratio, and format instantly — no upload to any server needed. This tool reads your image information directly in your browser using the File API. Useful for checking whether your photo meets government exam portal requirements (under 20KB for SSC, 50KB for UPSC, 100KB for Railway) before attempting to upload. Get instant confirmation and direct links to compress if needed."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageInfoTool />
    </ToolLayout>
  );
}
