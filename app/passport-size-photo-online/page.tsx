import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import PassportPhotoTool from '@/components/PassportPhotoTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['passport-photo-maker'];
export const metadata: Metadata = {
  title: 'Passport Size Photo Online Free India — Instant Download',
  description: 'Get your passport size photo instantly online. Indian standard 35×45mm, white background, ready for passport, visa and government form submission.',
  keywords: 'passport size photo online free india, paasport photo online, make passport size photo, passport photo creator india',
  alternates: { canonical: 'https://tools.draftly.co.in/passport-photo-maker' },
  openGraph: {
    title: 'Passport Size Photo Online India — Free',
    description: 'Create passport size photos online. Indian standard 35×45mm white background.',
    type: 'website', url: 'https://tools.draftly.co.in/passport-size-photo-online',
  },
};

const faqs = [
  {
    question: 'How do I make a passport size photo at home?',
    answer: "Take a selfie or ask someone to photograph you against a plain white or light wall. Make sure the room is well-lit. Upload the photo here and we'll automatically resize and crop it to the standard 35×45mm passport size with a white background.",
  },
  {
    question: 'Is my photo safe? Is it uploaded anywhere?',
    answer: 'Never. All processing happens in your browser using the HTML Canvas API. Your photo is never sent to any server. It stays entirely on your device.',
  },
  {
    question: 'Can I print the passport photo at home?',
    answer: 'Yes. Download the photo and print at 3.5×4.5cm on glossy photo paper for best results. Most photo editors (Windows Photos, Paint) let you print at exact sizes.',
  },
];

export default function PassportSizePhotoOnline() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Passport Size Photo Online Free — Make in Seconds"
      intro="Create your passport size photo online without any app or studio visit. Upload any photo and our tool instantly crops and formats it to the standard 35×45mm (3.5×4.5cm) Indian passport size with white background. Perfect for Indian passport applications, visa form submissions, UPSC DAF, NDA, CDS applications, and any government form requiring a passport-size photograph."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <PassportPhotoTool />
    </ToolLayout>
  );
}
