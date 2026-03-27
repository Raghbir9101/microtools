import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageFilterTool from '@/components/ImageFilterTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['image-blur'];
export const metadata: Metadata = {
  title: 'Blur Image Online Free — Gaussian Blur Photo Tool',
  description: 'Blur any image online free. Apply Gaussian blur to photos for privacy, artistic effects, or background blur. Instant, browser-based, no uploads needed.',
  keywords: 'blur image online, blur photo online free, gaussian blur online, blur background free, image blur tool, blur face in photo',
  alternates: { canonical: 'https://tools.draftly.co.in/image-blur' },
  openGraph: { title: 'Image Blur Tool — Blur Photos Free Online', description: 'Blur images instantly. Control blur intensity. No uploads, browser-based.', type: 'website', url: 'https://tools.draftly.co.in/image-blur' },
};

const faqs = [
  { question: 'Can I blur just a part of an image?', answer: 'Currently this tool applies blur to the entire image for simplicity. For partial blur (hide sensitive information in one corner), you can crop that section first, blur it, and then combine manually.' },
  { question: 'What is Gaussian blur used for?', answer: 'Gaussian blur is commonly used to: hide sensitive information (faces, ID numbers, addresses), create artistic soft-focus effects, simulate depth of field (background blur), and reduce image noise.' },
  { question: 'How much blur should I apply?', answer: 'For light softening: 2-5px. For background blur effect: 8-15px. For heavy privacy protection: 20-30px. Use the intensity slider to preview different levels before downloading.' },
];

export default function ImageBlur() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Image Blur Tool — Blur Photos Online Free"
      intro="Blur any image online instantly with adjustable intensity. Perfect for protecting privacy by hiding faces, ID numbers, or sensitive information in photos. Also great for creating artistic soft-focus effects and background blur. Control blur strength from subtle (2px) to heavy (30px) using the slider. All processing happens in your browser — your images are never uploaded anywhere."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageFilterTool mode="blur" title="Gaussian Blur" blurRadius={8} />
    </ToolLayout>
  );
}
