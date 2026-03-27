import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import DimensionResizerTool from '@/components/DimensionResizerTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-dimensions'];
export const metadata: Metadata = {
  title: 'Resize Image to Specific Dimensions Online — 200x230, 413x531 & Custom',
  description: 'Resize any image to exact pixel dimensions for govt exam portals. Presets for SSC (200×230), UPSC (413×531), Railway, passport and custom pixel sizes. Free, instant.',
  keywords: 'resize image to specific dimensions, resize image to 200x230 pixels, resize image to 413x531, image dimension resizer, change image size pixels',
  alternates: { canonical: 'https://tools.draftly.co.in/resize-image-dimensions' },
  openGraph: {
    title: 'Resize Image to Specific Pixel Dimensions — Free Online Tool',
    description: 'Resize to 200×230, 413×531 or any custom pixel size. Presets for SSC, UPSC, Railway forms.',
    type: 'website', url: 'https://tools.draftly.co.in/resize-image-dimensions',
  },
};

const faqs = [
  {
    question: 'What pixel dimensions does SSC require for photos?',
    answer: 'SSC portals typically require photos at 200×230 pixels or similar dimensions. The exact requirement may vary by exam — always check the official SSC notification for "Photo Specifications" or "Image Dimensions".',
  },
  {
    question: 'What size does UPSC require for photos?',
    answer: 'UPSC (Civil Services DAF, NDA, CDS) typically requires photos at 300×380 or 413×531 pixels at 200 DPI. Check the specific notification for your UPSC exam for exact requirements.',
  },
  {
    question: 'Will the photo quality reduce when I resize to specific dimensions?',
    answer: 'Our tool uses high-quality image scaling algorithms (Lanczos-equivalent via canvas). If you increase dimensions beyond the original size, some quality loss is expected. For best results, always start with a high-resolution photo.',
  },
  {
    question: 'Why does the tool add a white border instead of stretching?',
    answer: 'Stretching photos distorts facial proportions, which can cause rejection at govt portals. Our tool fits your photo within the target dimensions and adds white padding if needed — this is the correct way to resize form photos.',
  },
  {
    question: 'Can I set any custom pixel dimensions?',
    answer: 'Yes — select "Custom" from the presets and type any width and height in pixels. Useful for portals with unusual requirements not covered by our standard presets.',
  },
];

export default function ResizeImageDimensions() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Resize Image to Specific Dimensions — SSC 200×230, UPSC 413×531 & Custom"
      intro="Many government exam portals require your photo at an exact pixel size — SSC requires 200×230 pixels, UPSC applications need 413×531, and passport portals have their own dimensions. This free browser-based tool lets you resize any image to a specific width and height in pixels. Choose from preset government exam sizes or enter any custom dimensions. The tool fits your image within the target dimensions while adding white background to maintain the correct aspect ratio. No server upload, no registration needed — works instantly on all devices."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <DimensionResizerTool />
    </ToolLayout>
  );
}
