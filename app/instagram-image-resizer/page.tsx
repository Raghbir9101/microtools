import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import InstagramResizerTool from '@/components/InstagramResizerTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['instagram-image-resizer'];
export const metadata: Metadata = {
  title: 'Instagram Image Resizer Online Free — Post, Story, Reel Sizes',
  description: 'Resize images for Instagram online free. Perfect dimensions for square post (1080×1080), story/reel (1080×1920), landscape (1080×566). No app needed, instant.',
  keywords: 'instagram image resizer, resize image for instagram, instagram photo size, instagram post size, instagram story size, instagram resize tool',
  alternates: { canonical: 'https://tools.draftly.co.in/instagram-image-resizer' },
  openGraph: { title: 'Instagram Image Resizer — Free Online Tool', description: 'Resize photos for Instagram post, story, and reel formats. Instant, no app.', type: 'website', url: 'https://tools.draftly.co.in/instagram-image-resizer' },
};

const faqs = [
  { question: 'What is the best image size for Instagram posts?', answer: 'For square posts: 1080×1080px (1:1). For landscape posts: 1080×566px (1.91:1). For portrait posts: 1080×1350px (4:5 — Instagram\'s preferred portrait ratio). This tool creates all three formats.' },
  { question: 'What size should Instagram stories be?', answer: 'Instagram Stories and Reels should be 1080×1920px (9:16 aspect ratio). This is a full vertical phone screen format. Our Story preset creates exactly this size.' },
  { question: 'Will my image be cropped when resizing for Instagram?', answer: 'Yes — to fit the exact Instagram dimensions without distortion, we center-crop your image to the correct ratio. Choose the format that best matches your original photo\'s orientation to minimize cropping.' },
];

export default function InstagramImageResizer() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Instagram Image Resizer — Perfect Dimensions for Post, Story & Reel"
      intro="Resize your photos to the perfect dimensions for Instagram — square posts (1080×1080), landscape posts (1080×566), portrait posts (1080×1350), and stories/reels (1080×1920). Instagram uses specific aspect ratios to display content — uploading the wrong size causes unwanted cropping. This tool auto-crops your image to the exact Instagram format you choose, all in your browser without any app or account."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <InstagramResizerTool />
    </ToolLayout>
  );
}
