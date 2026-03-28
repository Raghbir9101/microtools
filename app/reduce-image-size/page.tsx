import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'Reduce Image Size Online — Free, Instant, No Button Click',
  description:
    'Reduce any image file size online instantly. Drop your photo and choose the target KB — 20KB, 50KB, 100KB, 200KB. Free, browser-based, no uploads. Works for all gov portals and email attachments.',
  keywords:
    'reduce image size, reduce photo size online, compress image size, make image smaller, reduce file size photo, image size reducer free, photo size reducer online',
  alternates: {
    canonical: 'https://tools.draftly.co.in/reduce-image-size',
    languages: { 'en-IN': 'https://tools.draftly.co.in/reduce-image-size' },
  },
  openGraph: {
    title: 'Reduce Image Size Online — Instant, Free',
    description: 'Reduce photo file size to any KB target — drop and done. No uploads, browser-based.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reduce Image Size Online — Free, Instant',
    description: 'Drop your photo and pick the target size. 20KB, 50KB, 100KB — done instantly.',
    images: ['/opengraph-image'],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'Reduce Image Size Online — Free Instant Tool',
    url: `${SITE_URL}/reduce-image-size`,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    description: 'Free browser-based tool to reduce image file size to any KB target — 20KB, 50KB, 100KB, 200KB.',
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Reduce Image Size', item: `${SITE_URL}/reduce-image-size` },
    ],
  },
];

const faqs = [
  {
    question: 'How do I reduce image file size without losing quality?',
    answer: 'Use the tool above — select the target KB, drop your photo. Our Canvas API binary search compresses to within ±2KB of your target while using the maximum JPEG quality that fits. "Without losing quality" is relative — some compression is always needed to reduce size, but we preserve as much quality as possible for the target.',
  },
  {
    question: 'What is the difference between "resizing" and "reducing file size"?',
    answer: '"Resizing" often means changing image dimensions (pixels). "Reducing file size" means reducing the KB/MB of the file. Both affect each other, but they are distinct operations. This tool reduces the file size (KB) without necessarily changing your image dimensions.',
  },
  {
    question: 'I need to reduce my photo for a government form — which size do I pick?',
    answer: 'SSC exams → 20KB. Banking (IBPS/SBI/RBI) → 50KB. Railway (RRB) and state PSC → 100KB. Passport / visa photos → 200KB. If unsure, check your exam hall ticket or notification for "file size" in the photo upload instructions.',
  },
  {
    question: 'Can I reduce the size of a PNG image?',
    answer: 'Yes. Upload your PNG and this tool converts it to JPEG during compression (all govt portals require JPEG). The output will be a clean JPEG at your chosen size. If you specifically need a PNG output, use our image converter and separate compression tools.',
  },
  {
    question: 'My image is very large (3–5MB). Will this work?',
    answer: 'Yes, up to 10MB input. The Canvas API compresses from high-resolution originals — which actually gives better results than compressing an already-compressed low-res image. Larger originals → more data to work with → better quality at the target size.',
  },
  {
    question: 'Does the tool work on mobile?',
    answer: 'Yes — fully. It works in Chrome, Safari, and Firefox on both Android and iPhone. On iPhone, photos are taken in HEIC format. This tool accepts HEIC and converts during compression.',
  },
];

export default function ReduceImageSize() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">Reduce Image Size</span>
          </nav>

          {/* H1 */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
              ⚡ Drop image → pick size → instant download
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Reduce Image Size Online — Free, Instant
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Drop your photo and pick your target size — <strong>20KB, 50KB, 100KB, or 200KB</strong>.
              Works for government forms, exam portals, email attachments, and WhatsApp. No server, no signup.
            </p>
          </div>

          {/* ─── TOOL — ALL SIZE OPTIONS ─── */}
          <div className="mb-10">
            <CompressorTool
              title="Reduce Image Size — Pick Your Target"
              description="Drop your photo or click to browse. Select target size. Download the compressed result."
              options={[
                { size: 20, label: '20KB — SSC / Aadhar', description: 'SSC CGL · CHSL · MTS · CPO · Aadhar update' },
                { size: 50, label: '50KB — UPSC / Banking', description: 'IBPS · SBI · RBI · NABARD · UPSC' },
                { size: 100, label: '100KB — Railway / State PSC', description: 'RRB NTPC · BPSC · UPPSC · DSSSB · NTA' },
                { size: 200, label: '200KB — Passport / Visa', description: 'Passport photo · UK Visa · Schengen · IDE' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          {/* Exam quick pick */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Quick Pick by Exam</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { size: '20KB', label: 'SSC', sub: 'CGL · CHSL · MTS', href: '/resize-image-20kb', color: 'border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800', tc: 'text-emerald-600 dark:text-emerald-400' },
                { size: '50KB', label: 'IBPS / SBI', sub: 'RBI · NABARD', href: '/resize-image-50kb', color: 'border-violet-200 bg-violet-50 dark:bg-violet-950/20 dark:border-violet-800', tc: 'text-violet-600 dark:text-violet-400' },
                { size: '100KB', label: 'Railway', sub: 'RRB · State PSC', href: '/resize-image-100kb', color: 'border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-800', tc: 'text-orange-600 dark:text-orange-400' },
                { size: '200KB', label: 'Passport', sub: 'Visa · Official ID', href: '/resize-image-200kb', color: 'border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800', tc: 'text-blue-600 dark:text-blue-400' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className={`p-4 rounded-xl border ${item.color} hover:shadow-sm transition-all block`}>
                  <p className={`text-2xl font-extrabold ${item.tc} mb-1`}>{item.size}</p>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* How it works — trust builder */}
          <section className="mb-10 p-5 rounded-2xl border border-border bg-muted/20">
            <h2 className="text-xl font-bold text-foreground mb-4">How This Works (No Black Box)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {[
                { icon: '📸', title: '1. You drop the photo', body: 'File is read directly in your browser. Nothing is sent to any server. Your photo stays on your device.' },
                { icon: '🔄', title: '2. Canvas API binary search', body: 'We try different JPEG quality levels (0–100) using binary search — typically 10–15 iterations — until the output lands within ±2KB of your target.' },
                { icon: '⬇️', title: '3. Instant download', body: 'Result is a clean JPEG Blob. We trigger a native download — the file goes directly to your Downloads folder. No server, no storage, completely private.' },
              ].map((step) => (
                <div key={step.title}>
                  <p className="text-2xl mb-2">{step.icon}</p>
                  <p className="font-semibold text-foreground mb-1 text-sm">{step.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Specific Size Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-20kb', badge: '20KB', title: 'Compress to 20KB — Instant', desc: 'SSC CGL, CHSL, MTS, CPO, Aadhar update', tag: 'Auto-compress' },
                { href: '/resize-image-50kb', badge: '50KB', title: 'Compress to 50KB — Instant', desc: 'IBPS, SBI, NABARD, UPSC portals', tag: 'Auto-compress' },
                { href: '/resize-image-100kb', badge: '100KB', title: 'Compress to 100KB — Instant', desc: 'Railway RRB, state PSC, NTA exams', tag: 'Auto-compress' },
                { href: '/ssc-photo-resize', badge: 'SSC', title: 'SSC Photo Resize — All Exams', desc: 'CGL, CHSL, MTS, CPO — one page covers all', tag: 'SSC Guide' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Convert format before reducing size', tag: 'Format Fix' },
                { href: '/background-remover', badge: 'BG', title: 'Background Remover', desc: 'White background required for most portals', tag: 'Background' },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs leading-none">{tool.badge}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{tool.title}</p>
                      <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{tool.tag}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{tool.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection faqs={faqs} subtitle="Common questions about reducing image file size for forms, portals, and email." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
