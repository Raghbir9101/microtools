import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageFilterTool from '@/components/ImageFilterTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['photo-to-black-and-white'];
export const metadata: Metadata = {
  title: 'Image Grayscale Converter Online Free — Remove Color from Photo',
  description: 'Convert image to grayscale online free. Remove all color from photos for documents, forms, and artistic effects. Browser-based, no uploads, instant.',
  keywords: 'image grayscale converter, convert image to grayscale online, remove color from image, grayscale photo maker, desaturate image online',
  alternates: { canonical: 'https://tools.draftly.co.in/photo-to-black-and-white' },
  openGraph: {
    title: 'Image Grayscale Converter Free Online',
    description: 'Convert any image to grayscale instantly. Remove color for documents and forms.',
    type: 'website', url: 'https://tools.draftly.co.in/image-grayscale-converter',
  },
};

const faqs = [
  {
    question: 'What is grayscale and how is it different from black and white?',
    answer: 'Grayscale contains shades from pure black to pure white including all grey tones. True "black and white" (1-bit) has only black and white pixels with no grey. Our tool converts to grayscale, which is the standard for photo ID purposes.',
  },
  {
    question: 'What file formats does the grayscale converter support?',
    answer: 'Upload any JPG, PNG, or WebP image. The output is a JPEG file. If you need a PNG output, convert the resulting JPEG using our JPG to PNG tool.',
  },
];

export default function ImageGrayscaleConverter() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Image Grayscale Converter — Remove Color From Any Photo Free"
      intro="Need to convert a color image to grayscale? Upload your photo and this tool will strip all color information, converting it to a professional grayscale image. Perfect for document photos, scanned certificates, academic ID photos, and any situation requiring a monochrome image. Completely browser-based using the Canvas API — your image never leaves your device."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageFilterTool mode="grayscale" title="Grayscale" />
    </ToolLayout>
  );
}
