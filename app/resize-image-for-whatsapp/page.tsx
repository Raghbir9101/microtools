import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-for-whatsapp'];

export const metadata: Metadata = {
  title: 'Resize Image for WhatsApp — Compress Photo Under 5MB Free',
  description:
    'Compress and resize images for WhatsApp sharing. Reduce photo size without losing quality for WhatsApp status, profile picture, and chat. Free, browser-based.',
  keywords:
    'resize image for whatsapp, compress image whatsapp, whatsapp photo size limit, whatsapp image compressor, reduce image size whatsapp',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-whatsapp',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-whatsapp' },
  },
  openGraph: {
    title: 'Resize Image for WhatsApp — Compress Photo Under 5MB Free',
    description:
      'Compress photos for WhatsApp sharing — profile picture, status, and chat. Reduce image size without visible quality loss.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the maximum image size for WhatsApp?',
    answer:
      'WhatsApp allows images up to 16MB for sending in chat. However, WhatsApp automatically compresses images above ~100KB when sent, which reduces quality. For best results, send images under 200KB or use "Document" mode to send without compression.',
  },
  {
    question: 'What is the ideal WhatsApp profile picture size?',
    answer:
      'WhatsApp profile pictures are displayed at 200×200 pixels, cropped to a circle. The ideal size is 640×640 pixels JPEG under 100KB. Our tool compresses to 100KB which is perfect for profile photos.',
  },
  {
    question: 'Why does WhatsApp compress my photos and reduce quality?',
    answer:
      'WhatsApp automatically compresses images sent in regular chat to save data. If you send an image as a "Document" (tap the attach icon → Document), it will be sent without compression in its original quality.',
  },
  {
    question: 'What size should I use for WhatsApp Status?',
    answer:
      'WhatsApp Status images should be 1080×1920 pixels (9:16 portrait aspect ratio). File size should be under 16MB. For mobile upload without quality loss, keep it under 1MB.',
  },
  {
    question: 'How do I send a photo on WhatsApp without losing quality?',
    answer:
      'To send without compression: open WhatsApp chat → tap attachment icon → choose "Document" → select your photo. This sends the original file without any WhatsApp compression.',
  },
  {
    question: 'Does this tool work for WhatsApp Business?',
    answer:
      'Yes. WhatsApp Business uses the same image size and quality requirements as regular WhatsApp. Use this tool to compress catalogue product images, profile pictures, and status images for WhatsApp Business.',
  },
];

export default function PageWhatsApp() {
  const relatedTools = getRelatedTools(TOOL?.relatedSlugs ?? ['resize-image-100kb-railway', 'resize-image-50kb-upsc', 'instagram-image-resizer', 'image-crop']);

  return (
    <ToolLayout
      h1="Resize Image for WhatsApp"
      intro="Compress your photos to the ideal size for WhatsApp sharing — profile pictures, status updates, and chat images. WhatsApp automatically compresses large images, reducing quality visibly. By pre-compressing your photo to 100KB–200KB with our tool, you control the quality and get a smaller, sharper result. Everything runs in your browser — no uploads, no account, fully private."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image for WhatsApp"
        description="Resize your photo for WhatsApp. Choose 100KB for profile pictures, 200KB for chat sharing, or 500KB to retain quality while staying small."
        options={[
          { size: 100, label: 'Profile Picture — 100KB', description: 'Perfect for WhatsApp profile photo' },
          { size: 200, label: 'Chat Share — 200KB', description: 'Good quality for sending in chat' },
          { size: 500, label: 'High Quality — 500KB', description: 'Best quality, still compressed' },
        ]}
      />
    </ToolLayout>
  );
}
