import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import InstagramResizerTool from '@/components/InstagramResizerTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for Instagram Post — 1080×1080 Square Crop Free',
  description:
    'Resize and crop your photos to the perfect Instagram post size (1080×1080 square). Avoid Instagram compression and blurry uploads. Free, browser-based.',
  keywords:
    'resize image instagram post, instagram post size 1080x1080, crop image for instagram, instagram square photo resize, instagram image compressor, instagram photo dimensions',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-instagram-post',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-instagram-post' },
  },
  openGraph: {
    title: 'Resize Image for Instagram Post — 1080×1080 Free',
    description: 'Crop and resize photos to perfect Instagram post dimensions (1080×1080). Avoid blurry uploads and auto-compression.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the ideal size for an Instagram post in 2026?',
    answer:
      'Instagram post optimal sizes: Square (1:1 ratio) — 1080×1080 pixels. Landscape (1.91:1) — 1080×566 pixels. Portrait (4:5) — 1080×1350 pixels. File size under 8MB (but keep under 1MB to avoid Instagram\'s re-compression).',
  },
  {
    question: 'Why do my Instagram photos look blurry after uploading?',
    answer:
      'Instagram compresses images that are too large (above 1MB) or not at the exact required dimensions. To avoid this: upload exactly 1080×1080 JPEG for square posts, keep file size between 200KB–1MB, and use sRGB colour profile.',
  },
  {
    question: 'What aspect ratio is best for Instagram reach in 2026?',
    answer:
      'Portrait (4:5 ratio, 1080×1350px) takes up more screen space in the feed, resulting in more impressions. However, for profile grid aesthetics, many creators use square (1:1) images.',
  },
  {
    question: 'Should I post JPEG or PNG on Instagram?',
    answer:
      'JPEG is better for photos — Instagram re-compresses PNG files more aggressively. Use JPEG with high quality (85%+) for best results. PNG is only useful for graphics with text or transparent backgrounds.',
  },
  {
    question: 'How do I resize a photo to 1080×1080 without stretching?',
    answer:
      'Our Instagram Image Resizer crops to 1080×1080 either by auto-cropping centered, or you can select square crop mode with our Image Crop tool to manually choose which part of the photo to keep.',
  },
  {
    question: 'What is the maximum file size Instagram accepts for posts?',
    answer:
      'Instagram accepts photos up to 8MB. However, for best quality, keep your post images between 500KB–1MB. Larger files will be re-compressed by Instagram, reducing quality.',
  },
];

export default function PageInstagramPost() {
  const relatedTools = getRelatedTools([
    'instagram-image-resizer',
    'resize-image-for-instagram-story',
    'image-crop',
    'jpg-to-png',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for Instagram Post (1080×1080)"
      intro="Resize and crop your photos to the perfect dimensions for Instagram posts — 1080×1080 for square, 1080×1350 for portrait (4:5), or 1080×566 for landscape. Instagram automatically compresses images that aren't the right dimensions, causing visible quality loss. By resizing to exact specs before uploading, you control the quality completely. Everything in your browser — no accounts, no apps, no uploads."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <InstagramResizerTool />
    </ToolLayout>
  );
}
