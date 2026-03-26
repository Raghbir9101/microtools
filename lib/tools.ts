/**
 * Single source of truth for all tool metadata.
 * To add a new tool: add one entry to the TOOLS array.
 */

export type ToolStatus = 'live' | 'coming-soon';
export type ToolCategory = 'image' | 'pdf' | 'video';

export interface Tool {
  slug: string;          // URL slug, e.g. "resize-image-20kb-ssc"
  href: string;          // Full href, e.g. "/resize-image-20kb-ssc"
  title: string;         // Short display title
  description: string;   // One-sentence description for cards
  category: ToolCategory;
  status: ToolStatus;
  /** KB size (for image compressors). Used to drive compression presets. */
  sizeKB?: number;
  /** Badge text shown on card / compression button */
  badge: string;
  /** Tailwind color key for accent (without 'text-' / 'bg-') */
  accent: 'blue' | 'emerald' | 'violet' | 'orange' | 'rose' | 'amber';
  /** SEO meta description (longer) */
  metaDescription: string;
  /** Slugs of related tools for internal linking */
  relatedSlugs: string[];
}

export const TOOLS: Tool[] = [
  // ─── Image Tools ──────────────────────────────────────────────────────────
  {
    slug: 'resize-image-10kb',
    href: '/resize-image-10kb',
    title: 'Resize Image to 10KB',
    description: 'Compress any photo to exactly 10KB for govt forms and small file-size requirements.',
    category: 'image',
    status: 'live',
    sizeKB: 10,
    badge: '10KB',
    accent: 'blue',
    metaDescription:
      'Free online image compressor to resize photos to exactly 10KB. Perfect for govt form submissions. 100% browser-based, no uploads, instant results.',
    relatedSlugs: ['resize-image-20kb-ssc', 'resize-image-50kb-upsc', 'resize-image-100kb-railway'],
  },
  {
    slug: 'resize-image-20kb-ssc',
    href: '/resize-image-20kb-ssc',
    title: 'Resize Image to 20KB (SSC)',
    description: 'Compress your photo to 20KB — the standard requirement for SSC CGL, CHSL, MTS and CPO forms.',
    category: 'image',
    status: 'live',
    sizeKB: 20,
    badge: 'SSC 20KB',
    accent: 'emerald',
    metaDescription:
      'Compress your photo to 20KB for SSC exam form submissions. Meets SSC CGL, CHSL, MTS, CPO and GD photo size requirements. Free, secure, browser-based.',
    relatedSlugs: ['resize-image-10kb', 'resize-image-50kb-upsc', 'resize-image-100kb-railway'],
  },
  {
    slug: 'resize-image-50kb-upsc',
    href: '/resize-image-50kb-upsc',
    title: 'Resize Image to 50KB (UPSC)',
    description: 'Compress your photo to 50KB — required by UPSC Civil Services, CMS, ESE and other UPSC exams.',
    category: 'image',
    status: 'live',
    sizeKB: 50,
    badge: 'UPSC 50KB',
    accent: 'violet',
    metaDescription:
      'Compress your photo to 50KB for UPSC exam applications. Meets UPSC Civil Services, CMS, GSE photo requirements. Free, instant, browser-based tool.',
    relatedSlugs: ['resize-image-10kb', 'resize-image-20kb-ssc', 'resize-image-100kb-railway'],
  },
  {
    slug: 'resize-image-100kb-railway',
    href: '/resize-image-100kb-railway',
    title: 'Resize Image to 100KB (Railway)',
    description: 'Compress your photo to 100KB — required by RRB NTPC, Group D, ALP and other Railway recruitment exams.',
    category: 'image',
    status: 'live',
    sizeKB: 100,
    badge: 'Railway 100KB',
    accent: 'orange',
    metaDescription:
      'Compress your photo to 100KB for Indian Railway exam applications. Meets RRB NTPC, Group D, ALP, JE requirements. Free, instant, browser-based tool.',
    relatedSlugs: ['resize-image-10kb', 'resize-image-20kb-ssc', 'resize-image-50kb-upsc'],
  },
  {
    slug: 'background-remover',
    href: '/background-remover',
    title: 'Background Remover',
    description: 'Remove image backgrounds automatically — perfect for passport photos and professional profile pics.',
    category: 'image',
    status: 'coming-soon',
    badge: 'Coming Soon',
    accent: 'rose',
    metaDescription:
      'Remove image background online for free. Automatic AI-based background removal for passport photos, govt ID photos, and profile pictures.',
    relatedSlugs: ['resize-image-20kb-ssc', 'resize-image-50kb-upsc', 'resize-image-100kb-railway'],
  },
  // ─── PDF Tools (placeholders) ─────────────────────────────────────────────
  {
    slug: 'pdf-compressor',
    href: '/pdf-compressor',
    title: 'PDF Compressor',
    description: 'Reduce PDF file size for email and form submissions. No upload required.',
    category: 'pdf',
    status: 'coming-soon',
    badge: 'Coming Soon',
    accent: 'amber',
    metaDescription:
      'Compress PDF files online for free. Reduce PDF size for govt form uploads and email attachments.',
    relatedSlugs: ['resize-image-20kb-ssc', 'resize-image-50kb-upsc'],
  },
  {
    slug: 'pdf-to-jpg',
    href: '/pdf-to-jpg',
    title: 'PDF to JPG',
    description: 'Convert PDF pages to high-quality JPG images, right in your browser.',
    category: 'pdf',
    status: 'coming-soon',
    badge: 'Coming Soon',
    accent: 'amber',
    metaDescription:
      'Convert PDF to JPG images online for free. Browser-based, no file uploads, instant conversion.',
    relatedSlugs: ['resize-image-20kb-ssc', 'pdf-compressor'],
  },
  // ─── Video Tools (placeholders) ───────────────────────────────────────────
  {
    slug: 'video-compressor',
    href: '/video-compressor',
    title: 'Video Compressor',
    description: 'Compress video files for WhatsApp, email, and online portals — browser-based.',
    category: 'video',
    status: 'coming-soon',
    badge: 'Coming Soon',
    accent: 'violet',
    metaDescription:
      'Compress video files online for free. Reduce video size for WhatsApp and email without losing quality.',
    relatedSlugs: [],
  },
];

/** Map from slug → Tool for O(1) lookup */
export const TOOL_BY_SLUG: Record<string, Tool> = Object.fromEntries(
  TOOLS.map((t) => [t.slug, t])
);

/** Category labels + descriptions */
export const CATEGORIES: Record<
  ToolCategory,
  { label: string; description: string; emoji: string }
> = {
  image: {
    label: 'Image Tools',
    emoji: '🖼️',
    description:
      'Compress, resize, and edit images for government forms, passports, and more.',
  },
  pdf: {
    label: 'PDF Tools',
    emoji: '📄',
    description:
      'Compress, convert, and manage PDF files for official submissions.',
  },
  video: {
    label: 'Video Tools',
    emoji: '🎬',
    description:
      'Compress and convert videos for WhatsApp, email, and social sharing.',
  },
};

/** Return live tools for a given category */
export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter((t) => t.category === category);
}

/** Return full Tool objects for a list of slugs */
export function getRelatedTools(slugs: string[]): Tool[] {
  return slugs.map((s) => TOOL_BY_SLUG[s]).filter(Boolean);
}
