import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

// Inline DPI tool since it's a client component wrapper
import PhotoDpiTool from '@/components/PhotoDpiTool';

const TOOL = TOOL_BY_SLUG['photo-dpi-converter'];
export const metadata: Metadata = {
  title: 'Photo DPI Converter Online Free — Set Image to 300 DPI or 600 DPI',
  description: 'Change image DPI to 300 or 600 online free. Required for passport photos, official documents, and printing. Instant browser-based DPI converter, no uploads.',
  keywords: 'photo dpi converter, change image dpi online, convert image to 300 dpi, increase image dpi free, set dpi 300 online',
  alternates: { canonical: 'https://tools.draftly.co.in/photo-dpi-converter' },
  openGraph: {
    title: 'Photo DPI Converter — Set to 300 or 600 DPI Free Online',
    description: 'Change photo DPI to 300 or 600 for official documents and passport photos.',
    type: 'website', url: 'https://tools.draftly.co.in/photo-dpi-converter',
  },
};

const faqs = [
  {
    question: 'What is DPI and why does it matter for government documents?',
    answer: 'DPI (dots per inch) determines print quality. 300 DPI is the standard for high-quality photo prints — required by passport authorities and official document processors. A 300 DPI photo looks sharp when printed. Most digital devices capture photos at 72 DPI by default, which can appear blurry when printed.',
  },
  {
    question: 'What DPI is required for Indian passport photos?',
    answer: 'Indian passport photos should be at least 200 DPI, with 300 DPI being the recommended standard. For the Passport Seva Online portal, digital photos are uploaded and the DPI is less critical — physical printed photos for mail-in applications need 300 DPI.',
  },
  {
    question: 'Does changing DPI change the file size or image quality?',
    answer: 'DPI only changes the print scale metadata — it does not add or remove pixels. Your image quality remains identical. A 300 DPI image will print smaller but sharper than the same image at 72 DPI.',
  },
  {
    question: 'What DPI is required for printing on an exam hall ticket?',
    answer: 'Most exam hall tickets and ID cards print best at 300 DPI. If your image looks blurry when printing your admit card photo, increasing DPI using this tool can help.',
  },
];

export default function PhotoDpiConverter() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Photo DPI Converter — Change Image to 300 DPI or 600 DPI Free"
      intro="Need to change your photo's DPI to 300 or 600 for official documents, passport photos, or printing requirements? This free tool adjusts the DPI metadata of your image instantly in your browser. 300 DPI is the standard required by passport offices, government ID printing, and official document processors. No server upload, no registration — just upload, set your target DPI, and download."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <PhotoDpiTool />
    </ToolLayout>
  );
}
