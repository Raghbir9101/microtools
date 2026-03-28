import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'Compress Image to 30KB — Instant Online Tool (No Click Needed)',
  description:
    'Drop your photo and get a 30KB JPEG instantly — no button click. Works for state PSC, university forms, and portals between 20KB and 50KB. Free, browser-based.',
  keywords:
    'compress image to 30kb, resize image 30kb, reduce photo 30kb, 30kb image online, photo 30kb online free, image compressor 30kb',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-30kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-30kb' },
  },
  openGraph: {
    title: 'Compress Image to 30KB — Instant (Drop & Done)',
    description: 'Drop photo → 30KB JPEG instantly. No clicks. Works for portals with 20–50KB range.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'Compress Image to 30KB — Instant',
    url: `${SITE_URL}/resize-image-30kb`,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compress Image to 30KB', item: `${SITE_URL}/resize-image-30kb` },
    ],
  },
];

const faqs = [
  {
    question: 'Which portals require exactly 30KB?',
    answer: 'Several state government exam boards (CGPSC, Assam PSC, some MPPSC rounds), university admission portals (Delhi University, certain central university forms), and corporate HR portals that accept photo uploads in the 20–50KB range. When unsure, 30KB is a safe middle value for any "max 50KB" portal.',
  },
  {
    question: 'How is 30KB different from SSC\'s 20KB?',
    answer: 'SSC CGL, CHSL, and MTS require 20KB (strict). Most state portals allow 30–50KB. At 30KB, your photo retains noticeably better clarity than at 20KB — the face is sharper and there are fewer JPEG compression artifacts.',
  },
  {
    question: 'Can I use this for signatures?',
    answer: 'Yes. If your portal requires a 30KB signature image, upload your scanned signature and compress here. For SSC signatures (10KB) or bank signatures (20KB), use the appropriate size tool instead.',
  },
  {
    question: 'What tolerance does the compression hit?',
    answer: 'The binary search algorithm targets ±2KB — your output will be 28–32KB. This is within the acceptable range for all portals that specify "maximum 30KB".',
  },
];

export default function ResizeImage30KB() {
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
            <span className="text-foreground font-medium">Compress Image to 30KB</span>
          </nav>

          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold mb-3 border border-yellow-200 dark:border-yellow-800">
              ⚡ Drop image → 30KB instantly · No button click
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Compress Image to 30KB — Instant, Free
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Drop your photo below and it compresses to <strong>exactly 30KB</strong> automatically.
              Works for portals that allow 20–50KB, state exam boards, and university submission forms.
            </p>
          </div>

          <div className="mb-10">
            <CompressorTool
              autoCompress
              title="Drop Image → 30KB Instantly"
              description="Drop or click to select your photo. Compression starts immediately."
              options={[{ size: 30, label: 'Auto — 30KB', description: 'State PSC · University forms · 20–50KB range portals' }]}
            />
          </div>

          <AdSlot variant="section" />

          {/* Size picker guide */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Not sure which size? Pick the right one</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { size: '20KB', label: 'SSC all exams', href: '/resize-image-20kb', color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20', tc: 'text-emerald-600 dark:text-emerald-400' },
                { size: '30KB', label: '← You are here', href: '/resize-image-30kb', color: 'border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-950/20 ring-2 ring-yellow-300 dark:ring-yellow-700', tc: 'text-yellow-600 dark:text-yellow-400' },
                { size: '50KB', label: 'UPSC / Banking', href: '/resize-image-50kb', color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/20', tc: 'text-violet-600 dark:text-violet-400' },
                { size: '100KB', label: 'Railway / PSC', href: '/resize-image-100kb', color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20', tc: 'text-orange-600 dark:text-orange-400' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className={`p-4 rounded-xl border ${item.color} hover:shadow-sm transition-all block`}>
                  <p className={`text-2xl font-extrabold ${item.tc} mb-1`}>{item.size}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-20kb', badge: '20KB', title: 'Compress to 20KB', desc: 'SSC CGL, CHSL, MTS — strictest standard', tag: 'Smaller' },
                { href: '/resize-image-50kb', badge: '50KB', title: 'Compress to 50KB', desc: 'IBPS, SBI, NABARD, UPSC portals', tag: 'Larger' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Convert before compressing if photo is PNG', tag: 'Format Fix' },
                { href: '/image-size-checker', badge: '✓', title: 'Image Size Checker', desc: 'Verify output is exactly under 30KB', tag: 'Verify' },
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

          <FAQSection faqs={faqs} subtitle="Questions about compressing photos to 30KB for portals requiring a 20–50KB range." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
