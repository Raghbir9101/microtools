import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import { getRelatedTools } from '@/lib/tools';
import BackgroundRemoverTool from '@/components/BackgroundRemoverTool';

export const metadata: Metadata = {
  title: 'Remove Background from Passport Photo — Free Online Tool',
  description:
    'Remove background from passport photo and replace with white background instantly. Free AI-powered background remover — no upload, browser-based, for Indian passport applications.',
  keywords:
    'remove background passport photo, white background passport photo online free, change background passport photo, passport photo background remover, make background white passport photo india',
  alternates: {
    canonical: 'https://tools.draftly.co.in/remove-background-for-passport-photo',
    languages: { 'en-IN': 'https://tools.draftly.co.in/remove-background-for-passport-photo' },
  },
  openGraph: {
    title: 'Remove Background from Passport Photo — Free White BG Tool',
    description: 'Replace passport photo background with white instantly. AI-powered, free, browser-based for Indian passport applications.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Why does a passport photo need a white background?',
    answer:
      'Indian passport authorities (Passport Seva) require a clean white background for passport photos. This ensures facial features are clearly visible and the photo meets international ICAO biometric standards for travel documents.',
  },
  {
    question: 'Can I take my passport photo at home and change the background?',
    answer:
      'Yes! Take a selfie or portrait against any wall, use our AI Background Remover to remove the original background, then our Passport Photo Maker applies the correct white background and crops to 35×45mm. This saves the cost of a photo studio.',
  },
  {
    question: 'Will a home-made passport photo with white background be accepted?',
    answer:
      'Yes, provided it meets all requirements: white background, face clearly visible, no shadows, formal attire, no glasses, no headgear (except religious). Passport Seva accepts digital photos submitted through PSK portals.',
  },
  {
    question: 'What is the correct white background spec for Indian passport photos?',
    answer:
      'Pure white or slightly off-white (no grey, cream, or yellow tones). Face must fill 70–80% of the frame. No shadows on background or face. Uniform, even lighting across the background.',
  },
  {
    question: 'Can I replace the background with white for UPSC or SSC photos too?',
    answer:
      'Yes. Most government exam portals require white or off-white backgrounds. This tool works for UPSC, SSC, Railway, IBPS, and any other exam requiring a white background photo.',
  },
  {
    question: 'How accurate is the AI background removal?',
    answer:
      'The AI uses BiRefNet — a state-of-the-art segmentation model — which provides very accurate removal for portrait photos with clear facial silhouettes. For best results, use a photo with good contrast between you and the background.',
  },
];

export default function PageBGPassport() {
  const relatedTools = getRelatedTools([
    'passport-photo-maker',
    'resize-image-20kb-ssc',
    'resize-image-50kb-upsc',
    'photo-dpi-converter',
  ]);

  return (
    <ToolLayout
      h1="Remove Background from Passport Photo"
      intro="Replace your passport photo background with a clean white background instantly using AI. Indian passport regulations (Passport Seva), UPSC, SSC, and most government exam portals require white backgrounds in submitted photographs. Our AI-powered tool (BiRefNet model) removes even complex backgrounds in seconds — running directly in your browser. After background removal, compress to the required KB using our compressor tools linked below."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <BackgroundRemoverTool />
    </ToolLayout>
  );
}
