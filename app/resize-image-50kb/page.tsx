import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'Compress Image to 50KB — Instant Online Tool (No Click Needed)',
  description:
    'Drop your photo and get a 50KB JPEG instantly — no button click. Works for UPSC, IBPS, SBI, RBI, NABARD, and any govt portal requiring 50KB. Free, browser-based.',
  keywords:
    'compress image to 50kb, resize image 50kb, reduce photo size 50kb, 50kb image online, UPSC photo 50kb, IBPS SBI photo 50kb, image compress 50kb free',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-50kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-50kb' },
  },
  openGraph: {
    title: 'Compress Image to 50KB — Instant (Drop & Done)',
    description: 'Drop your photo → 50KB JPEG instantly. No clicks, no uploads. Works for UPSC, IBPS, SBI, RBI, NABARD.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 50KB — Instant, No Button Click',
    description: 'Drop photo → 50KB JPEG. No server. Works for UPSC, IBPS, SBI, all govt portals.',
    images: ['/opengraph-image'],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Compress Image to 50KB — Instant',
  url: `${SITE_URL}/resize-image-50kb`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Free browser-based tool to compress any photo to exactly 50KB instantly — no button click needed.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Compress Image to 50KB', item: `${SITE_URL}/resize-image-50kb` },
  ],
};

const faqs = [
  {
    question: 'Which exams require a 50KB photo?',
    answer:
      'UPSC Civil Services (IAS/IPS/IFS), UPSC CMS, UPSC CAPF, UPSC ESE, GATE, RBI Grade B, NABARD Grade A, IBPS PO/Clerk, SBI PO/Clerk, SBI SO, and most banking exams run by IBPS, SBI, RBI, and NABARD. The 50KB limit is the banking-sector standard, while SSC exams use 20KB.',
  },
  {
    question: 'How does the instant compress work — no button click?',
    answer:
      'When you drop or select your image, compression starts immediately. The Canvas API binary search algorithm runs 10–15 iterations to find the exact JPEG quality that lands at 50KB (within ±2KB). Result is ready in 2–4 seconds. No extra button — optimised for speed.',
  },
  {
    question: 'The UPSC portal accepted my photo but IBPS rejected it — why?',
    answer:
      'IBPS and SBI run their own portal validation that is stricter. Common causes: file is not a pure JPEG (converted from PNG with wrong encoding), dimensions too small, or an EXIF rotation flag confusing the resolver. Use this tool on the original photo — the Canvas output is a clean JPEG without EXIF rotation flags.',
  },
  {
    question: 'What is the difference between this and /resize-image-50kb-upsc?',
    answer:
      'Same compression engine. This page is the generic version for any portal requiring 50KB. The UPSC-specific page includes UPSC exam lists, photo guidelines for CSE, and civil-services-specific rejection reasons.',
  },
  {
    question: 'My original photo is already 35KB — should I still compress?',
    answer:
      'If your photo is already under 50KB and in JPEG format, you generally do not need to compress further (unless the portal rejects it). However, if your photo is PNG (even if under 50KB), compress it here — because portals require JPEG and PNG is rejected regardless of size.',
  },
  {
    question: 'Can I use this for IBPS signature (which requires 20KB)?',
    answer:
      'Use the 20KB tool at /resize-image-20kb for IBPS signatures. The signature limit for most bank exams is 20KB, while the photo limit is 50KB. Always check your exam notification for the exact requirements.',
  },
];

export default function ResizeImage50KB() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">Compress Image to 50KB</span>
          </nav>

          {/* H1 — problem-first, tight */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400 text-xs font-semibold mb-3 border border-violet-200 dark:border-violet-800">
              ⚡ Drop image → 50KB instantly · No button click
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Compress Image to 50KB — Instant, Free
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Drop your photo below and it compresses to <strong>exactly 50KB</strong> automatically — no button click needed.
              Works for <strong>UPSC, IBPS, SBI, RBI, NABARD</strong>, and every govt portal with a 50KB photo limit.
            </p>
          </div>

          {/* ─────────── TOOL — ABOVE THE FOLD · AUTO-COMPRESS ON DROP ─────────── */}
          <div className="mb-10">
            <CompressorTool
              autoCompress
              portalContext="ibps"
              title="Drop Image → 50KB Instantly"
              description="Drop or click to select your photo. Compression starts immediately — result downloads in 2–4 seconds."
              options={[
                { size: 50, label: 'Auto — 50KB', description: 'UPSC · IBPS · SBI · RBI · NABARD · Banking portals' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          {/* Portal table */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Which Exams Need 50KB Photo?</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Exam / Portal</th>
                    <th className="text-left p-3 font-semibold text-violet-600 dark:text-violet-400">Photo Max</th>
                    <th className="text-left p-3 font-semibold text-foreground">Signature</th>
                    <th className="text-left p-3 font-semibold text-foreground">Format</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['UPSC Civil Services (IAS/IPS/IFS)', '300KB *preferred 50KB', '300KB', 'JPEG'],
                    ['UPSC CAPF / CMS / ESE', '50KB', '50KB', 'JPEG'],
                    ['IBPS PO / Clerk / SO', '50KB', '20KB', 'JPEG'],
                    ['SBI PO / Clerk / SO', '50KB', '20KB', 'JPEG'],
                    ['RBI Grade B / Assistant', '50KB', '20KB', 'JPEG'],
                    ['NABARD Grade A / B', '50KB', '20KB', 'JPEG'],
                    ['LIC AAO / ADO / HFL', '50KB', '30KB', 'JPEG'],
                  ].map(([exam, photo, sig, fmt]) => (
                    <tr key={exam as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-foreground">{exam}</td>
                      <td className="p-3 text-violet-600 dark:text-violet-400 font-semibold">{photo}</td>
                      <td className="p-3 text-muted-foreground">{sig}</td>
                      <td className="p-3 text-muted-foreground">{fmt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 50KB vs 20KB vs 100KB quick guide */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Which Size Do You Need? Quick Guide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { size: '20KB', color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20', textColor: 'text-emerald-600 dark:text-emerald-400', use: 'SSC all exams', where: 'CGL · CHSL · MTS · CPO · GD', href: '/resize-image-20kb' },
                { size: '50KB', color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/20', textColor: 'text-violet-600 dark:text-violet-400', use: 'Banking + UPSC', where: 'IBPS · SBI · RBI · NABARD · UPSC', href: '/resize-image-50kb' },
                { size: '100KB', color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20', textColor: 'text-orange-600 dark:text-orange-400', use: 'Railway Board', where: 'RRB NTPC · RPF · ALP · Group D', href: '/resize-image-100kb-railway' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className={`p-4 rounded-xl border ${item.color} hover:shadow-sm transition-all block`}>
                  <p className={`text-3xl font-extrabold ${item.textColor} mb-1`}>{item.size}</p>
                  <p className="font-semibold text-foreground text-sm">{item.use}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.where}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-20kb', badge: '20KB', title: 'Compress to 20KB', desc: 'SSC CGL, CHSL, MTS, CPO — all SSC exams', tag: 'SSC' },
                { href: '/resize-image-for-ias-exam', badge: 'IAS', title: 'UPSC IAS Photo Guide', desc: 'UPSC-specific requirements and rejection reasons', tag: 'UPSC' },
                { href: '/resize-image-for-ibps', badge: 'IBPS', title: 'IBPS Photo Resize', desc: 'IBPS PO and Clerk photo and signature sizes', tag: 'Banking' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Convert before compressing if your photo is PNG', tag: 'Format Fix' },
                { href: '/image-size-checker', badge: '✓', title: 'Image Size Checker', desc: 'Verify the output is exactly under 50KB', tag: 'Verify' },
                { href: '/background-remover', badge: 'BG', title: 'Background Remover', desc: 'Replace background with white before compressing', tag: 'Background' },
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

          <FAQSection faqs={faqs} subtitle="Common questions about compressing photos to 50KB for UPSC, IBPS, SBI, and banking portals." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
