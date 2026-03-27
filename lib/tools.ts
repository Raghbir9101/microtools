/**
 * Single source of truth for all tool metadata.
 * To add a new tool: add one entry to the TOOLS array.
 */

export type ToolStatus = 'live' | 'coming-soon';
export type ToolCategory = 'image' | 'pdf' | 'video' | 'utility' | 'social';

export interface Tool {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: ToolCategory;
  status: ToolStatus;
  sizeKB?: number;
  badge: string;
  accent: 'blue' | 'emerald' | 'violet' | 'orange' | 'rose' | 'amber' | 'cyan' | 'pink' | 'slate';
  metaDescription: string;
  relatedSlugs: string[];
}

export const TOOLS: Tool[] = [
  // ─── Image Compressors ────────────────────────────────────────────────────
  {
    slug: 'resize-image-10kb',
    href: '/resize-image-10kb',
    title: 'Resize Image to 10KB',
    description: 'Compress any photo to exactly 10KB for govt forms and small file-size requirements.',
    category: 'image', status: 'live', sizeKB: 10, badge: '10KB', accent: 'blue',
    metaDescription: 'Free online image compressor to resize photos to exactly 10KB. Perfect for govt form submissions. 100% browser-based, no uploads, instant results.',
    relatedSlugs: ['resize-image-20kb-ssc', 'resize-image-50kb-upsc', 'resize-image-100kb-railway', 'resize-signature'],
  },
  {
    slug: 'resize-image-5kb',
    href: '/resize-image-5kb',
    title: 'Resize Image to 5KB',
    description: 'Compress any image to 5KB for strict file-size portals that require very small uploads.',
    category: 'image', status: 'live', sizeKB: 5, badge: '5KB', accent: 'cyan',
    metaDescription: 'Free online image compressor to resize photos to 5KB. Browser-based, no uploads. Ideal for portals with very strict file size limits.',
    relatedSlugs: ['resize-image-10kb', 'resize-image-20kb-ssc', 'resize-signature'],
  },
  {
    slug: 'resize-image-30kb',
    href: '/resize-image-30kb',
    title: 'Resize Image to 30KB',
    description: 'Compress your photo to exactly 30KB for exam portals and email submissions.',
    category: 'image', status: 'live', sizeKB: 30, badge: '30KB', accent: 'emerald',
    metaDescription: 'Compress image to 30KB online free. Browser-based, no uploads. Perfect for portals requiring photos between 20KB and 50KB.',
    relatedSlugs: ['resize-image-20kb-ssc', 'resize-image-50kb-upsc', 'resize-image-10kb'],
  },
  {
    slug: 'resize-image-200kb',
    href: '/resize-image-200kb',
    title: 'Resize Image to 200KB',
    description: 'Compress your photo to 200KB for university applications, visa forms, and document portals.',
    category: 'image', status: 'live', sizeKB: 200, badge: '200KB', accent: 'amber',
    metaDescription: 'Compress image to 200KB online free. Ideal for university applications, visa portals, and high-quality document submissions. No uploads, browser-based.',
    relatedSlugs: ['resize-image-100kb-railway', 'resize-image-50kb-upsc', 'resize-image-dimensions'],
  },
  {
    slug: 'signature-resize-20kb',
    href: '/signature-resize-20kb',
    title: 'Resize Signature to 20KB (UPSC/Bank)',
    description: 'Compress your scanned signature to exactly 20KB for UPSC, bank, and railway form submissions.',
    category: 'image', status: 'live', sizeKB: 20, badge: 'Sig 20KB', accent: 'violet',
    metaDescription: 'Resize signature to 20KB online free. Perfect for UPSC, SBI, IBPS, RRB form signature upload requirements. No server uploads, instant, browser-based.',
    relatedSlugs: ['resize-signature', 'resize-image-20kb-ssc', 'resize-image-50kb-upsc'],
  },
  {
    slug: 'passport-photo-resize',
    href: '/passport-photo-resize',
    title: 'Passport Photo Resizer Online',
    description: 'Resize and compress your passport photo to the correct size for Indian passport applications and visa forms.',
    category: 'image', status: 'live', badge: 'Passport', accent: 'blue',
    metaDescription: 'Resize passport photo online free. Compress to 35×45mm, 413×531 pixels for Indian passport seva portal. White background, correct dimensions. No uploads.',
    relatedSlugs: ['passport-photo-maker', 'background-remover', 'photo-dpi-converter'],
  },
  {
    slug: 'resize-image-20kb-ssc',
    href: '/resize-image-20kb-ssc',
    title: 'Resize Image to 20KB (SSC)',
    description: 'Compress your photo to 20KB — the standard requirement for SSC CGL, CHSL, MTS and CPO forms.',
    category: 'image', status: 'live', sizeKB: 20, badge: 'SSC 20KB', accent: 'emerald',
    metaDescription: 'Compress your photo to 20KB for SSC exam form submissions. Meets SSC CGL, CHSL, MTS, CPO and GD photo size requirements. Free, secure, browser-based.',
    relatedSlugs: ['resize-image-10kb', 'resize-image-50kb-upsc', 'resize-image-100kb-railway', 'resize-signature'],
  },
  {
    slug: 'resize-image-50kb-upsc',
    href: '/resize-image-50kb-upsc',
    title: 'Resize Image to 50KB (UPSC)',
    description: 'Compress your photo to 50KB — required by UPSC Civil Services, CMS, ESE and other UPSC exams.',
    category: 'image', status: 'live', sizeKB: 50, badge: 'UPSC 50KB', accent: 'violet',
    metaDescription: 'Compress your photo to 50KB for UPSC exam applications. Meets UPSC Civil Services, CMS, GSE photo requirements. Free, instant, browser-based tool.',
    relatedSlugs: ['resize-image-10kb', 'resize-image-20kb-ssc', 'resize-image-100kb-railway'],
  },
  {
    slug: 'resize-image-100kb-railway',
    href: '/resize-image-100kb-railway',
    title: 'Resize Image to 100KB (Railway)',
    description: 'Compress your photo to 100KB — required by RRB NTPC, Group D, ALP and other Railway exams.',
    category: 'image', status: 'live', sizeKB: 100, badge: 'Railway 100KB', accent: 'orange',
    metaDescription: 'Compress your photo to 100KB for Indian Railway exam applications. Meets RRB NTPC, Group D, ALP, JE requirements. Free, instant, browser-based tool.',
    relatedSlugs: ['resize-image-10kb', 'resize-image-20kb-ssc', 'resize-image-50kb-upsc'],
  },
  // ─── Govt Form Specialist Tools ───────────────────────────────────────────
  {
    slug: 'resize-signature',
    href: '/resize-signature',
    title: 'Signature Resizer',
    description: 'Resize your scanned signature to 10KB or 20KB for SSC, UPSC, Railway, and bank exam forms.',
    category: 'image', status: 'live', badge: 'Signature', accent: 'cyan',
    metaDescription: 'Free online signature resizer — compress your scanned signature to 10KB or 20KB for SSC CGL, IBPS, SBI, Railway, and UPSC form submissions.',
    relatedSlugs: ['resize-image-20kb-ssc', 'resize-image-10kb', 'resize-image-50kb-upsc'],
  },
  {
    slug: 'passport-photo-maker',
    href: '/passport-photo-maker',
    title: 'Passport Photo Maker',
    description: 'Create a standard Indian passport-size photo (3.5×4.5cm) with white background in seconds.',
    category: 'image', status: 'live', badge: 'Passport', accent: 'blue',
    metaDescription: 'Make a passport-size photo online free. Crop to Indian standard 3.5×4.5cm, white background. Works for passport, visa, SSC, government ID applications.',
    relatedSlugs: ['resize-image-20kb-ssc', 'background-remover', 'resize-image-dimensions'],
  },
  {
    slug: 'resize-image-dimensions',
    href: '/resize-image-dimensions',
    title: 'Image Dimension Resizer',
    description: 'Resize any image to exact pixel dimensions — 200×230, 413×531, or any custom size.',
    category: 'image', status: 'live', badge: 'Dimensions', accent: 'emerald',
    metaDescription: 'Resize image to exact pixel dimensions online free. Set custom width and height in pixels. Presets for SSC (200×230), UPSC (413×531), and passport size.',
    relatedSlugs: ['resize-image-20kb-ssc', 'passport-photo-maker', 'resize-image-50kb-upsc'],
  },
  {
    slug: 'photo-to-black-and-white',
    href: '/photo-to-black-and-white',
    title: 'Photo to Black & White',
    description: 'Convert any photo to black & white or grayscale — required by many govt exam forms.',
    category: 'image', status: 'live', badge: 'B&W', accent: 'slate',
    metaDescription: 'Convert photo to black and white online free. Grayscale converter for government exam forms, documents, and signatures. Instant, browser-based, no uploads.',
    relatedSlugs: ['resize-image-20kb-ssc', 'resize-signature', 'passport-photo-maker'],
  },
  {
    slug: 'photo-dpi-converter',
    href: '/photo-dpi-converter',
    title: 'Photo DPI Converter',
    description: 'Set your image DPI to 300 or 600 — required for official documents and printing.',
    category: 'image', status: 'live', badge: '300 DPI', accent: 'violet',
    metaDescription: 'Convert image DPI to 300 or 600 online free. Required for passport photos, official documents, and government exam form photos. Instant browser-based tool.',
    relatedSlugs: ['passport-photo-maker', 'resize-image-dimensions', 'photo-to-black-and-white'],
  },
  // ─── Image Converters ─────────────────────────────────────────────────────
  {
    slug: 'jpg-to-png',
    href: '/jpg-to-png',
    title: 'JPG to PNG Converter',
    description: 'Convert JPG images to PNG format instantly, keeping full quality and transparency.',
    category: 'image', status: 'live', badge: 'JPG→PNG', accent: 'blue',
    metaDescription: 'Convert JPG to PNG online free. Browser-based, no uploads, instant conversion. Perfect for images that need transparency or lossless quality.',
    relatedSlugs: ['png-to-jpg', 'webp-to-jpg', 'image-crop'],
  },
  {
    slug: 'png-to-jpg',
    href: '/png-to-jpg',
    title: 'PNG to JPG Converter',
    description: 'Convert PNG images to JPG format to reduce file size while keeping great quality.',
    category: 'image', status: 'live', badge: 'PNG→JPG', accent: 'emerald',
    metaDescription: 'Convert PNG to JPG online free. Reduce file size while maintaining quality. Browser-based, no uploads, instant download.',
    relatedSlugs: ['jpg-to-png', 'webp-to-jpg', 'resize-image-20kb-ssc'],
  },
  {
    slug: 'webp-to-jpg',
    href: '/webp-to-jpg',
    title: 'WebP to JPG Converter',
    description: 'Convert WebP images to JPG for compatibility with older devices and apps.',
    category: 'image', status: 'live', badge: 'WebP→JPG', accent: 'orange',
    metaDescription: 'Convert WebP to JPG online free. Browser-based, instant, no file uploads. Works for all WebP files from Chrome screenshots or web downloads.',
    relatedSlugs: ['jpg-to-png', 'png-to-jpg', 'jpg-to-webp'],
  },
  {
    slug: 'jpg-to-webp',
    href: '/jpg-to-webp',
    title: 'JPG to WebP Converter',
    description: 'Convert JPG/PNG images to WebP format for smaller file sizes with same quality.',
    category: 'image', status: 'live', badge: 'JPG→WebP', accent: 'cyan',
    metaDescription: 'Convert JPG or PNG to WebP online free. Smaller file sizes with same visual quality. Instant, browser-based conversion.',
    relatedSlugs: ['webp-to-jpg', 'jpg-to-png', 'png-to-jpg'],
  },
  {
    slug: 'image-crop',
    href: '/image-crop',
    title: 'Image Crop Tool',
    description: 'Crop images to popular aspect ratios — 1:1, 4:3, 16:9, or any custom size.',
    category: 'image', status: 'live', badge: 'Crop', accent: 'rose',
    metaDescription: 'Crop images online free. Choose from fixed ratios (square, portrait, landscape) or enter custom dimensions. Browser-based, instant, no uploads.',
    relatedSlugs: ['passport-photo-maker', 'resize-image-dimensions', 'jpg-to-png'],
  },
  // ─── Background Remover ───────────────────────────────────────────────────
  {
    slug: 'background-remover',
    href: '/background-remover',
    title: 'Background Remover',
    description: 'Remove image backgrounds automatically — perfect for passport photos and profile pics.',
    category: 'image', status: 'live', badge: 'BG Remove', accent: 'rose',
    metaDescription: 'Remove image background online free. AI-powered background removal for passport photos, govt ID photos, and profile pictures. BiRefNet quality mode available.',
    relatedSlugs: ['passport-photo-maker', 'resize-image-20kb-ssc', 'resize-image-50kb-upsc'],
  },
  // ─── Utility Tools ────────────────────────────────────────────────────────
  {
    slug: 'image-size-checker',
    href: '/image-size-checker',
    title: 'Image Size Checker',
    description: 'Instantly check image file size, dimensions, DPI, and format — no upload needed.',
    category: 'utility', status: 'live', badge: 'Size Check', accent: 'slate',
    metaDescription: 'Check image file size, dimensions, resolution, and format online free. Instantly see KB/MB size, pixel dimensions, and DPI. No uploads required.',
    relatedSlugs: ['resize-image-20kb-ssc', 'photo-dpi-converter', 'resize-image-dimensions'],
  },
  {
    slug: 'image-metadata-viewer',
    href: '/image-metadata-viewer',
    title: 'Image Metadata Viewer',
    description: 'View hidden EXIF metadata in your photos — camera model, GPS, date, settings.',
    category: 'utility', status: 'live', badge: 'EXIF', accent: 'slate',
    metaDescription: 'View image EXIF metadata online free. See camera model, GPS location, date taken, shutter speed, ISO, and more. Browser-based, private, no uploads.',
    relatedSlugs: ['image-size-checker', 'photo-dpi-converter'],
  },
  {
    slug: 'image-blur',
    href: '/image-blur',
    title: 'Image Blur Tool',
    description: 'Blur the background or entire image online — great for privacy and creative effects.',
    category: 'utility', status: 'live', badge: 'Blur', accent: 'violet',
    metaDescription: 'Blur image online free. Apply Gaussian blur to full image or background. Perfect for hiding sensitive info or creating depth-of-field effects.',
    relatedSlugs: ['add-watermark', 'photo-to-black-and-white', 'image-crop'],
  },
  {
    slug: 'add-watermark',
    href: '/add-watermark',
    title: 'Add Watermark to Image',
    description: 'Add text or image watermarks to photos — protect your work from unauthorized use.',
    category: 'utility', status: 'live', badge: 'Watermark', accent: 'amber',
    metaDescription: 'Add text watermark to images online free. Custom text, font size, opacity, and position. Protect your photos with a professional watermark.',
    relatedSlugs: ['image-blur', 'image-crop', 'jpg-to-png'],
  },
  // ─── Social Media Tools ───────────────────────────────────────────────────
  {
    slug: 'youtube-thumbnail-downloader',
    href: '/youtube-thumbnail-downloader',
    title: 'YouTube Thumbnail Downloader',
    description: 'Download the thumbnail of any YouTube video in HD — paste URL and save.',
    category: 'social', status: 'live', badge: 'YT Thumb', accent: 'rose',
    metaDescription: 'Download YouTube video thumbnails online free. Paste any YouTube URL to get HD thumbnail image. No login, no software, instant download.',
    relatedSlugs: ['instagram-image-resizer', 'image-crop', 'jpg-to-png'],
  },
  {
    slug: 'instagram-image-resizer',
    href: '/instagram-image-resizer',
    title: 'Instagram Image Resizer',
    description: 'Resize images to perfect Instagram dimensions — post (1:1), story (9:16), landscape.',
    category: 'social', status: 'live', badge: 'Instagram', accent: 'pink',
    metaDescription: 'Resize images for Instagram online free. Auto-size for square post (1080×1080), story (1080×1920), landscape (1080×566). No apps needed.',
    relatedSlugs: ['youtube-thumbnail-downloader', 'image-crop', 'jpg-to-png'],
  },
  // ─── PDF Tools ────────────────────────────────────────────────────────────
  {
    slug: 'merge-pdf',
    href: '/merge-pdf',
    title: 'Merge PDF Files',
    description: 'Combine multiple PDF files into one document — free, browser-based, no upload.',
    category: 'pdf', status: 'live', badge: 'Merge PDF', accent: 'amber',
    metaDescription: 'Merge PDF files online free. Combine multiple PDFs into one document in your browser. No uploads to server, completely private and instant.',
    relatedSlugs: ['jpg-to-pdf', 'pdf-to-jpg', 'compress-pdf'],
  },
  {
    slug: 'jpg-to-pdf',
    href: '/jpg-to-pdf',
    title: 'JPG to PDF Converter',
    description: 'Convert JPG images to a PDF document — perfect for submitting multiple scanned docs.',
    category: 'pdf', status: 'live', badge: 'JPG→PDF', accent: 'orange',
    metaDescription: 'Convert JPG images to PDF online free. Combine multiple photos into one PDF. Browser-based, no server uploads, instant download.',
    relatedSlugs: ['merge-pdf', 'pdf-to-jpg', 'jpg-to-png'],
  },
  {
    slug: 'pdf-to-jpg',
    href: '/pdf-to-jpg',
    title: 'PDF to JPG Converter',
    description: 'Convert PDF pages to JPG images — extract any page as a high-quality photo.',
    category: 'pdf', status: 'live', badge: 'PDF→JPG', accent: 'amber',
    metaDescription: 'Convert PDF to JPG images online free. Extract PDF pages as high-quality JPEG images. Browser-based conversion with no server uploads.',
    relatedSlugs: ['merge-pdf', 'jpg-to-pdf', 'jpg-to-png'],
  },
  {
    slug: 'compress-pdf',
    href: '/compress-pdf',
    title: 'PDF Compressor',
    description: 'Reduce PDF file size for email and form submissions — no quality loss.',
    category: 'pdf', status: 'coming-soon', badge: 'Coming Soon', accent: 'amber',
    metaDescription: 'Compress PDF files online for free. Reduce PDF size for govt form uploads and email attachments.',
    relatedSlugs: ['merge-pdf', 'jpg-to-pdf'],
  },
  {
    slug: 'html-to-pdf',
    href: '/html-to-pdf',
    title: 'HTML to PDF Converter',
    description: 'Convert HTML code or webpages to a PDF document — paste HTML and save as PDF instantly.',
    category: 'pdf', status: 'live', badge: 'HTML→PDF', accent: 'violet',
    metaDescription: 'Convert HTML to PDF online free. Paste HTML code and download as PDF. Browser-based HTML to PDF converter — no server uploads, instant conversion.',
    relatedSlugs: ['jpg-to-pdf', 'merge-pdf', 'pdf-to-jpg'],
  },
  // ─── Video Tools ──────────────────────────────────────────────────────────
  {
    slug: 'video-compressor',
    href: '/video-compressor',
    title: 'Video Compressor',
    description: 'Compress video files for WhatsApp, email, and online portals — browser-based.',
    category: 'video', status: 'coming-soon', badge: 'Coming Soon', accent: 'violet',
    metaDescription: 'Compress video files online for free. Reduce video size for WhatsApp and email without losing quality.',
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
    description: 'Compress, resize, convert, and edit images for government forms, passports, and more.',
  },
  pdf: {
    label: 'PDF Tools',
    emoji: '📄',
    description: 'Merge, convert, and manage PDF files for official submissions and document handling.',
  },
  video: {
    label: 'Video Tools',
    emoji: '🎬',
    description: 'Compress and convert videos for WhatsApp, email, and social sharing.',
  },
  utility: {
    label: 'Utility Tools',
    emoji: '🔧',
    description: 'Handy image utilities — check file info, add watermarks, blur, and more.',
  },
  social: {
    label: 'Social Media Tools',
    emoji: '📱',
    description: 'Resize images for Instagram, download YouTube thumbnails, and more.',
  },
};

/** Return all tools for a given category */
export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter((t) => t.category === category);
}

/** Return full Tool objects for a list of slugs */
export function getRelatedTools(slugs: string[]): Tool[] {
  return slugs.map((s) => TOOL_BY_SLUG[s]).filter(Boolean);
}
