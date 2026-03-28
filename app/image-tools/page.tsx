import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Free Online Image Tools — Compress, Resize, Convert, Remove Background',
  description:
    'All free image tools in one place — compress to 20KB/50KB/100KB, resize dimensions, background remover, PNG↔JPG converter, crop, blur, and more. No upload, browser-based.',
  keywords:
    'free image tools online, image compressor, resize image, background remover, png to jpg, image converter, image size reducer, photo editor online',
  alternates: {
    canonical: 'https://tools.draftly.co.in/image-tools',
    languages: { 'en-IN': 'https://tools.draftly.co.in/image-tools' },
  },
  openGraph: {
    title: 'Free Online Image Tools — Compress, Resize, Convert',
    description: 'All image tools in one place. Free, browser-based, no uploads.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Free Online Image Tools',
  url: `${SITE_URL}/image-tools`,
  description: 'Collection of free browser-based image tools — compressor, resizer, converter, background remover.',
};

const clusters = [
  {
    heading: '🗜️ Image Compressor',
    color: 'border-emerald-200 dark:border-emerald-800',
    hc: 'text-emerald-600 dark:text-emerald-400',
    tools: [
      { href: '/resize-image-20kb', label: 'Compress to 20KB', desc: 'SSC, Aadhar portals · Auto-compress on drop' },
      { href: '/resize-image-50kb', label: 'Compress to 50KB', desc: 'IBPS, SBI, NABARD, UPSC portals' },
      { href: '/resize-image-100kb', label: 'Compress to 100KB', desc: 'Railway RRB, state PSC, NTA exams' },
      { href: '/reduce-image-size', label: 'Reduce Image Size', desc: 'Pick any KB target — 20/50/100/200KB' },
      { href: '/resize-image-20kb-ssc', label: 'SSC Photo Resize', desc: 'CGL · CHSL · MTS · CPO · GD — all in one' },
    ],
  },
  {
    heading: '📐 Resize & Dimensions',
    color: 'border-blue-200 dark:border-blue-800',
    hc: 'text-blue-600 dark:text-blue-400',
    tools: [
      { href: '/resize-image-dimensions', label: 'Resize Image Dimensions', desc: 'Set exact pixel width × height' },
      { href: '/image-crop', label: 'Crop Image', desc: 'Crop to custom size or aspect ratio' },
      { href: '/passport-photo-maker', label: 'Passport Photo Maker', desc: 'Standard passport size, any country' },
      { href: '/resize-signature', label: 'Signature Resizer', desc: '10KB or 20KB — SSC, IBPS, SBI portals' },
    ],
  },
  {
    heading: '🔄 Format Converters',
    color: 'border-violet-200 dark:border-violet-800',
    hc: 'text-violet-600 dark:text-violet-400',
    tools: [
      { href: '/png-to-jpg', label: 'PNG to JPG', desc: 'Convert PNG to JPEG for govt portals' },
      { href: '/jpg-to-png', label: 'JPG to PNG', desc: 'Convert JPEG to lossless PNG' },
      { href: '/webp-to-jpg', label: 'WebP to JPG', desc: 'Convert WebP images to JPEG' },
      { href: '/jpg-to-webp', label: 'JPG to WebP', desc: 'Convert JPEG to smaller WebP format' },
    ],
  },
  {
    heading: '🖼️ Background & Effects',
    color: 'border-orange-200 dark:border-orange-800',
    hc: 'text-orange-600 dark:text-orange-400',
    tools: [
      { href: '/background-remover', label: 'Background Remover', desc: 'AI-powered — remove & replace background' },
      { href: '/remove-background-for-passport-photo', label: 'Passport BG Remover', desc: 'White background for passport photos' },
      { href: '/remove-background-for-govt-id', label: 'Govt ID BG Remover', desc: 'White background for Aadhar, PAN, licence' },
      { href: '/photo-to-black-and-white', label: 'Photo to Black & White', desc: 'Convert colour photos to greyscale' },
    ],
  },
  {
    heading: '🔧 Utility Tools',
    color: 'border-slate-200 dark:border-slate-800',
    hc: 'text-slate-600 dark:text-slate-400',
    tools: [
      { href: '/image-size-checker', label: 'Image Size Checker', desc: 'Verify exact file size in KB before uploading' },
      { href: '/photo-dpi-converter', label: 'DPI Converter', desc: 'Change image DPI for print or ID requirements' },
      { href: '/add-watermark', label: 'Add Watermark', desc: 'Stamp text or logo watermark on images' },
      { href: '/image-blur', label: 'Blur Image', desc: 'Apply Gaussian blur to photos' },
    ],
  },
  {
    heading: '🛠️ Problem Fix Pages',
    color: 'border-red-200 dark:border-red-800',
    hc: 'text-red-600 dark:text-red-400',
    tools: [
      { href: '/photo-upload-failed-ssc-fix', label: 'SSC Photo Upload Failed', desc: 'Portal rejected your photo — full fix guide' },
      { href: '/png-not-accepted-by-portal-fix', label: 'PNG Not Accepted', desc: 'Convert PNG to JPEG and compress' },
      { href: '/image-size-too-large-fix', label: 'Image Too Large Error', desc: 'Reduce file size below portal limit' },
      { href: '/how-to-reduce-image-size-without-losing-quality', label: 'Reduce Without Quality Loss', desc: 'Best-practice compression guide' },
    ],
  },
];

export default function ImageTools() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">Image Tools</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Free Online Image Tools
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              All image tools in one place — compress to any KB target, resize dimensions, convert formats, remove backgrounds.
              100% free, browser-based. Nothing is uploaded to any server.
            </p>
          </div>

          {/* Quick access — top 3 money tools */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {[
              { href: '/resize-image-20kb', label: 'Compress to 20KB', sub: 'Most used · SSC · Aadhar', color: 'bg-emerald-600 hover:bg-emerald-700' },
              { href: '/resize-image-20kb-ssc', label: 'SSC Photo Resize', sub: 'CGL · CHSL · MTS · CPO · GD', color: 'bg-primary hover:bg-primary/90' },
              { href: '/reduce-image-size', label: 'Reduce Any Size', sub: '20 / 50 / 100 / 200KB', color: 'bg-slate-700 hover:bg-slate-800' },
            ].map(item => (
              <Link key={item.href} href={item.href} className={`flex flex-col items-center justify-center p-4 rounded-xl ${item.color} text-white text-center transition-all shadow-md hover:shadow-lg`}>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-xs opacity-80 mt-0.5">{item.sub}</p>
              </Link>
            ))}
          </div>

          <AdSlot variant="section" />

          {/* Tool clusters */}
          <div className="space-y-10">
            {clusters.map(cluster => (
              <section key={cluster.heading}>
                <h2 className={`text-lg font-bold mb-3 ${cluster.hc}`}>{cluster.heading}</h2>
                <div className={`rounded-xl border ${cluster.color} overflow-hidden`}>
                  {cluster.tools.map((tool, i) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className={`flex items-center justify-between gap-4 px-4 py-3 hover:bg-muted/30 transition-colors group ${i > 0 ? 'border-t border-border' : ''}`}
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{tool.label}</p>
                        <p className="text-xs text-muted-foreground truncate">{tool.desc}</p>
                      </div>
                      <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
