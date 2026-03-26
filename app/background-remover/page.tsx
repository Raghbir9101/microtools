import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import BackgroundRemoverTool from '@/components/BackgroundRemoverTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['background-remover'];

const PAGE_URL = 'https://tools.draftly.co.in/background-remover';

export const metadata: Metadata = {
  title: 'Background Remover — Free AI Tool | Remove Image Background Online',
  description:
    'Remove image backgrounds instantly with AI. Free, no sign-up. Perfect for Indian passport photos, UPSC/SSC/Railway govt ID cards, and profile pictures. Supports JPG, PNG, and HEIC (iPhone). Download as transparent PNG or white-background JPG.',
  keywords:
    'background remover online free, remove background from photo, passport photo background remove, govt id photo background, UPSC photo background remove, SSC photo background, transparent background PNG, remove background AI India, HEIC background remover, proof size photo background white',
  alternates: {
    canonical: PAGE_URL,
    languages: { 'en-IN': PAGE_URL },
  },
  openGraph: {
    title: 'Background Remover — Free AI Tool | Microtools',
    description:
      'Remove backgrounds from passport photos, govt ID cards, and profile pictures using AI. Free, no sign-up. Supports JPG, PNG, HEIC. Download transparent PNG or white-background JPG.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Microtools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Background Remover — Free AI Tool',
    description:
      'Remove image backgrounds for passport photos and govt ID cards. Free, AI-powered, no sign-up. JPG, PNG, HEIC supported.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Background Remover — Microtools',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Web',
  url: PAGE_URL,
  description:
    'AI-powered background removal tool for passport photos, government ID card photos, and profile pictures. Supports JPG, PNG, and HEIC (iPhone photos). Free with no sign-up required.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  featureList: [
    'AI background removal',
    'Transparent PNG download',
    'White background JPG for passport photos',
    'Custom background colour',
    'HEIC / iPhone photo support',
    'No sign-up required',
    'Free unlimited use',
  ],
};

const faqs = [
  {
    question: 'How does the background remover work?',
    answer:
      'Your photo is securely sent to our server where an AI segmentation model (withoutBG Focus) detects the subject and removes the background. The processed image is returned to you as a transparent PNG. Your photo is deleted from the server immediately after processing.',
  },
  {
    question: 'Is my photo safe? Do you store images?',
    answer:
      'Yes, completely safe. Your image is sent to our private server only for processing and is deleted immediately after. We do not store, share, or use your photos for any other purpose.',
  },
  {
    question: 'Will it work for Indian passport-size photos?',
    answer:
      'Yes. The tool works great for portrait photos — the standard format for Indian passport photos (35×45mm). After removing the background you can download a white-background JPG, which is exactly what government portals like DigiLocker, UPSC, SSC, and Railway require.',
  },
  {
    question: 'What image formats are supported?',
    answer:
      'You can upload JPG, JPEG, PNG, and HEIC (iPhone) images up to 10MB. HEIC photos from iPhones are automatically converted. The output can be downloaded as a transparent PNG or a white-background JPG.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Background removal typically takes 5–15 seconds depending on image size. The AI model runs on our server so no large downloads are needed on your side.',
  },
  {
    question: 'Can I use the output for government form submissions?',
    answer:
      'Yes. After removing the background, select "White BG JPG" to get a passport-style photo with a clean white background. Then use our image compressor tools (20KB, 50KB, 100KB) to meet the file-size requirements of SSC, UPSC, Railway, or other government portals.',
  },
  {
    question: 'Can I add a custom background colour?',
    answer:
      'Yes. After processing, select "Custom Color" in the download options and pick any colour using the colour picker. The preview updates in real time before you download.',
  },
];

export default function BackgroundRemoverPage() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout
        h1="Background Remover — Free AI Tool"
        intro="Remove the background from any photo instantly using AI. Perfect for Indian passport photos, government ID cards, UPSC/SSC/Railway profile pictures, and professional headshots. Supports JPG, PNG, and HEIC (iPhone photos). Download as a transparent PNG or a white-background JPG ready for official form submissions. Pair with our image compressor tools to meet any file-size requirement."
        faqs={faqs}
        relatedTools={relatedTools}
      >
        <BackgroundRemoverTool />
      </ToolLayout>
    </>
  );
}
