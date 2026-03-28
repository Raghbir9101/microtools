import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'Compress Image to 100KB — Instant Online Tool (No Click Needed)',
  description:
    'Drop your photo and get a 100KB JPEG instantly — no button click. Works for RRB NTPC, Railway, state PSC, BPSC, UPPSC, DSSSB, and all portals requiring 100KB. Free, browser-based.',
  keywords:
    'compress image to 100kb, resize image 100kb, reduce photo 100kb, 100kb image online, railway photo 100kb, RRB NTPC photo size, state PSC photo 100kb',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-100kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-100kb' },
  },
  openGraph: {
    title: 'Compress Image to 100KB — Instant (Drop & Done)',
    description: 'Drop photo → 100KB JPEG instantly. No clicks. Railway, state PSC, BPSC, UPPSC portals.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'Compress Image to 100KB — Instant',
    url: `${SITE_URL}/resize-image-100kb`,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    description: 'Free browser tool to compress photos to exactly 100KB instantly.',
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compress Image to 100KB', item: `${SITE_URL}/resize-image-100kb` },
    ],
  },
];

const faqs = [
  {
    question: 'Which exams require a 100KB photo?',
    answer: 'RRB NTPC, RRB Group D, RRB ALP, RRB JE, BPSC, UPPSC, MPSC, TSPSC, KPSC, RPSC, DSSSB, Delhi Police, NTA exams, and many state government boards require 100KB. Most Railway Recruitment Board (RRB) portals also have 100KB as the photo cap.',
  },
  {
    question: 'How does the instant compress work?',
    answer: 'Drop or click to select your photo — compression fires immediately, no button click needed. Canvas API binary search runs 10–15 iterations to find the exact JPEG quality that lands at 100KB (±2KB). Done in 1–3 seconds.',
  },
  {
    question: 'At 100KB, will the photo quality be acceptable?',
    answer: 'Yes — 100KB is a comfortable file size. At this size, JPEG compression artifacts are minimal and face clarity, skin tone, and background details are very well preserved. Most photos at 100KB look nearly indistinguishable from the original.',
  },
  {
    question: 'The Railway portal says "photo must be between 20KB and 100KB" — which should I target?',
    answer: 'Target the upper end — 80–100KB — for a range like that. More data = better quality at the same dimensions. Use this tool to hit exactly 90–100KB.',
  },
  {
    question: 'Can I use this for my RRB NTPC 2025 application?',
    answer: 'Yes. RRB NTPC requires photos in JPEG format, max 100KB (or 80KB depending on the notification year — always verify). Compress here, then check using our Image Size Checker before uploading.',
  },
  {
    question: 'My photo is PNG. Can I still use this?',
    answer: 'Yes — upload your PNG and this tool converts it to JPEG during compression. The output file will be a clean JPEG at 100KB, which is accepted by all Railway and state PSC portals.',
  },
];

export default function ResizeImage100KB() {
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
            <span className="text-foreground font-medium">Compress Image to 100KB</span>
          </nav>

          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-xs font-semibold mb-3 border border-orange-200 dark:border-orange-800">
              ⚡ Drop image → 100KB instantly · No button click
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Compress Image to 100KB — Instant, Free
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Drop your photo and it compresses to <strong>exactly 100KB</strong> automatically.
              Works for <strong>Railway (RRB), state PSC (BPSC, UPPSC, MPSC, KPSC), DSSSB</strong>, and any portal capped at 100KB.
            </p>
          </div>

          <div className="mb-10">
            <CompressorTool
              autoCompress
              portalContext="railway"
              title="Drop Image → 100KB Instantly"
              description="Drop or click to select your photo. Compression starts immediately — result in 1–3 seconds."
              options={[{ size: 100, label: 'Auto — 100KB', description: 'Railway · State PSC · DSSSB · NTA portals' }]}
            />
          </div>

          <AdSlot variant="section" />

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Which Exams Need 100KB Photo?</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Exam / Portal</th>
                    <th className="text-left p-3 font-semibold text-orange-600 dark:text-orange-400">Photo Max</th>
                    <th className="text-left p-3 font-semibold text-foreground">Signature</th>
                    <th className="text-left p-3 font-semibold text-foreground">Format</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['RRB NTPC 2025', '100KB', '30KB', 'JPEG'],
                    ['RRB Group D / ALP / JE', '100KB', '30KB', 'JPEG'],
                    ['BPSC (Bihar PSC)', '100KB', '30KB', 'JPEG'],
                    ['UPPSC (UP PSC)', '50–100KB', '50KB', 'JPEG'],
                    ['MPSC (Maharashtra)', '100KB', '50KB', 'JPEG'],
                    ['DSSSB (Delhi)', '100KB', '50KB', 'JPEG'],
                    ['NTA NEET / JEE / CUET', '10–200KB (varies)', '4–30KB', 'JPEG'],
                  ].map(([exam, photo, sig, fmt]) => (
                    <tr key={exam as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-foreground">{exam}</td>
                      <td className="p-3 text-orange-600 dark:text-orange-400 font-semibold">{photo}</td>
                      <td className="p-3 text-muted-foreground">{sig}</td>
                      <td className="p-3 text-muted-foreground">{fmt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Quick Size Guide — Which KB Do You Need?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { size: '20KB', color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20', textColor: 'text-emerald-600 dark:text-emerald-400', use: 'SSC all exams', href: '/resize-image-20kb' },
                { size: '50KB', color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/20', textColor: 'text-violet-600 dark:text-violet-400', use: 'UPSC / Banking', href: '/resize-image-50kb' },
                { size: '100KB', color: 'border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/20 ring-2 ring-orange-300 dark:ring-orange-700', textColor: 'text-orange-600 dark:text-orange-400', use: '← You are here', href: '/resize-image-100kb' },
                { size: '200KB', color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20', textColor: 'text-blue-600 dark:text-blue-400', use: 'Passport / Visa', href: '/resize-image-200kb' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className={`p-4 rounded-xl border ${item.color} hover:shadow-sm transition-all block`}>
                  <p className={`text-2xl font-extrabold ${item.textColor} mb-1`}>{item.size}</p>
                  <p className="text-xs text-muted-foreground">{item.use}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-20kb', badge: '20KB', title: 'Compress to 20KB', desc: 'SSC CGL, CHSL, MTS — government exam standard', tag: 'SSC' },
                { href: '/resize-image-50kb', badge: '50KB', title: 'Compress to 50KB', desc: 'IBPS, SBI, RBI, UPSC exams', tag: 'Banking/UPSC' },
                { href: '/resize-image-100kb-railway', badge: 'RRB', title: 'Railway Photo Guide', desc: 'RRB-specific requirements and rejection causes', tag: 'Railway' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Convert before compressing if photo is PNG', tag: 'Format Fix' },
                { href: '/image-size-checker', badge: '✓', title: 'Image Size Checker', desc: 'Verify output is under 100KB before uploading', tag: 'Verify' },
                { href: '/photo-upload-failed-ssc-fix', badge: '🛠', title: 'Fix Upload Errors', desc: 'Portal keeps rejecting? Full troubleshooting guide', tag: 'Problem Fix' },
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

          <FAQSection faqs={faqs} subtitle="Common questions about compressing photos to 100KB for Railway and state PSC portals." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
