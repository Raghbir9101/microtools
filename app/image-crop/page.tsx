import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageCropTool from '@/components/ImageCropTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['image-crop'];
export const metadata: Metadata = {
  title: 'Crop Image Online Free — Square, 16:9, Instagram, Portrait Ratios',
  description: 'Crop images online free. Choose from 1:1 square, 16:9 landscape, 9:16 story, 4:3, portrait, or custom. Browser-based, no uploads, instant image cropper.',
  keywords: 'crop image online free, image crop tool, crop photo online, crop image to square, crop image 16:9, instagram crop tool, image cropper online',
  alternates: { canonical: 'https://tools.draftly.co.in/image-crop' },
  openGraph: { title: 'Image Crop Tool — Free Online, All Ratios', description: 'Crop images to any ratio — square, widescreen, story, portrait. No uploads.', type: 'website', url: 'https://tools.draftly.co.in/image-crop' },
};

const faqs = [
  { question: 'What aspect ratios can I crop to?', answer: '1:1 square (perfect for profile photos and Instagram posts), 4:3 standard, 16:9 widescreen, 9:16 portrait (Instagram/WhatsApp story), and 3:4 portrait. You can also use Free mode which keeps your exact image dimensions.' },
  { question: 'Does cropping reduce image quality?', answer: 'No. Cropping simply removes pixels from the edges — it does not compress or degrade the remaining pixels. The cropped area retains the full quality of your original image.' },
  { question: 'How does the cropping work?', answer: 'We center-crop your image to the selected ratio. For example, selecting 1:1 on a landscape photo will take a square from the center of the photo. The tool shows you a preview before you download.' },
];

export default function ImageCrop() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Image Crop Tool — Free Online Cropper for Any Ratio"
      intro="Crop any image to popular aspect ratios instantly in your browser. Choose 1:1 square for profile photos, 16:9 for YouTube thumbnails and banners, 9:16 for Instagram and WhatsApp stories, or any other standard ratio. Our tool center-crops your image automatically — no complex drag-and-drop interface, just instant results. Perfect for social media, government forms, and profile photos. No uploads, completely private."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageCropTool />
    </ToolLayout>
  );
}
