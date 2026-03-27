import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import ImageFilterTool from '@/components/ImageFilterTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['photo-to-black-and-white'];
export const metadata: Metadata = {
  title: 'Photo to Black and White Online Free — Grayscale Converter',
  description: 'Convert any photo to black and white or grayscale online free. Required for many government exam forms and documents. Instant, browser-based, no uploads.',
  keywords: 'photo to black and white online, convert image to grayscale, black white photo converter, grayscale image online free, remove color from photo',
  alternates: { canonical: 'https://tools.draftly.co.in/photo-to-black-and-white' },
  openGraph: {
    title: 'Photo to Black & White Converter — Free Online Tool',
    description: 'Convert photos to black and white instantly. Required for govt forms, scanned docs, and official IDs.',
    type: 'website', url: 'https://tools.draftly.co.in/photo-to-black-and-white',
  },
};

const faqs = [
  {
    question: 'Why do government forms require black and white photos?',
    answer: 'Some older government portals, court documents, affidavit submissions, and domicile certificate applications require black and white (grayscale) photos to standardize appearance and reduce file size. This tool converts your color photo to grayscale in one click.',
  },
  {
    question: 'Does converting to black and white affect photo quality?',
    answer: 'No. Our tool applies grayscale conversion using the Canvas API without any compression degradation. The output is a JPEG with the same resolution as your original photo, just without color information.',
  },
  {
    question: 'Can I use this for passport photos that require B&W?',
    answer: 'Some older government IDs and verification documents ask for black and white photos. Convert your photo here, then use our Passport Photo Maker to resize it to the correct dimensions.',
  },
  {
    question: 'Is this different from removing colors in Photoshop?',
    answer: 'The result is identical to the grayscale conversion in Photoshop or Lightroom. We apply the standard RGB to luminance conversion (0.299R + 0.587G + 0.114B) which gives natural-looking black and white photos.',
  },
];

export default function PhotoToBlackAndWhite() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Photo to Black & White Converter — Grayscale Online Free"
      intro="Convert any color photo to black and white (grayscale) online instantly. Some government forms, court documents, and official applications specifically request black and white photographs. This free browser-based tool applies professional grayscale conversion using the HTML Canvas API — no color distortion, no server uploads, completely private. Works for JPEG, PNG, and WebP images. Download your black and white photo ready for submission in seconds."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <ImageFilterTool mode="grayscale" title="Black & White" />
    </ToolLayout>
  );
}
