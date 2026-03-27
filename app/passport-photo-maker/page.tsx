import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import PassportPhotoTool from '@/components/PassportPhotoTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['passport-photo-maker'];

export const metadata: Metadata = {
  title: 'Passport Photo Maker Online Free — Indian Standard 3.5×4.5cm',
  description: 'Create a standard Indian passport-size photo (35×45mm) with white background online free. Auto-crop, resize for passport, visa, and government ID applications.',
  keywords: 'passport photo maker online india, passport size photo online, indian passport photo, passport photo creator, 35x45mm photo online, visa photo maker',
  alternates: { canonical: 'https://tools.draftly.co.in/passport-photo-maker' },
  openGraph: {
    title: 'Passport Photo Maker Online Free — Indian Standard',
    description: 'Make Indian standard passport photos online. White background, 35×45mm, instant download.',
    type: 'website', url: 'https://tools.draftly.co.in/passport-photo-maker',
  },
};

const faqs = [
  {
    question: 'What is the standard Indian passport photo size?',
    answer: 'The official Indian passport photo size is 35mm × 45mm (3.5cm × 4.5cm). In pixels, this is approximately 413×531 pixels at 300 DPI. The background must be plain white, the face should occupy 70-80% of the photo, and eyes must be clearly visible.',
  },
  {
    question: 'Can I use this tool for passport renewal?',
    answer: 'Yes. This tool creates photos meeting MEA (Ministry of External Affairs) specifications — 35×45mm with white background. However, always verify requirements at the official Passport Seva portal (passportindia.gov.in) before submission.',
  },
  {
    question: 'What are the guidelines for Indian passport photos?',
    answer: 'Plain white background, face centered and looking straight, no glasses, mouth closed, no headgear (except for religious reasons), recent photo (within 6 months), printed on matte or glossy photo paper.',
  },
  {
    question: 'How do I get the best result from this tool?',
    answer: 'Use a photo taken against a plain light-colored wall in good natural lighting. For even better results, use our Background Remover tool first to get a clean white background, then use the Passport Photo Maker.',
  },
  {
    question: 'What size should I compress the passport photo to?',
    answer: 'For physical passport applications, print at 3.5×4.5cm. For online submissions, most portals accept under 50KB JPEG. Use our Image Compressor to reduce to the required KB size after creating the passport photo.',
  },
];

export default function PassportPhotoMaker() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Passport Photo Maker — Indian Standard 35×45mm Online Free"
      intro="Create a standard Indian passport-size photo online in seconds. This free browser-based tool automatically crops and resizes your photo to the official 35mm×45mm (413×531px) format with a clean white background — meeting Ministry of External Affairs requirements for Indian passport and visa applications. No registration, no uploads to external servers, completely private. Works for Indian passport, Tatkal passport, visa applications, PAN card, Aadhaar update, and other government ID photos. For best results, combine with our AI Background Remover."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <PassportPhotoTool />
    </ToolLayout>
  );
}
