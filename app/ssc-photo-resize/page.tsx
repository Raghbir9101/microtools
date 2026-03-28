import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'SSC Photo Resize Tool — Compress to 20KB for CGL, CHSL, MTS (Instant)',
  description:
    'Instantly compress your photo to exactly 20KB for any SSC exam — CGL, CHSL, MTS, CPO, GD. Also resize signature to 10KB. Free, browser-based, no uploads.',
  keywords:
    'ssc photo resize, ssc photo 20kb, compress photo ssc, ssc cgl chsl mts photo size, ssc signature 10kb, ssc photo upload tool, ssc photo compressor 2026',
  alternates: {
    canonical: 'https://tools.draftly.co.in/ssc-photo-resize',
    languages: { 'en-IN': 'https://tools.draftly.co.in/ssc-photo-resize' },
  },
  openGraph: {
    title: 'SSC Photo Resize Tool — 20KB for CGL, CHSL, MTS (Instant)',
    description:
      'Compress your SSC exam photo to exactly 20KB. Works for CGL, CHSL, MTS, CPO, GD Constable. Free, instant, browser-based.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSC Photo Resize Tool — 20KB Instant Compressor',
    description: 'Compress SSC exam photo to 20KB in seconds. Works for all SSC exams — CGL, CHSL, MTS, CPO.',
    images: ['/opengraph-image'],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'SSC Photo Resize Tool', item: `${SITE_URL}/ssc-photo-resize` },
  ],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SSC Photo Resize Tool — 20KB Compressor',
  url: `${SITE_URL}/ssc-photo-resize`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Free browser-based tool to compress SSC exam photos to exactly 20KB and signatures to 10KB.',
};

const faqs = [
  {
    question: 'What is the photo size for all SSC exams?',
    answer:
      'All major SSC exams — CGL, CHSL, MTS, CPO, GD Constable — require the same photo specifications: JPEG format, maximum 20KB, 200×230 pixels recommended, plain white background, recent photo within 3 months.',
  },
  {
    question: 'What is the signature size for SSC exams?',
    answer:
      'SSC signature requirement across all exams: JPEG format, maximum 10KB, 140×60 pixels recommended, signed in black or dark blue ink on plain white paper. No pencil, no printed/digital signatures.',
  },
  {
    question: 'Why does the SSC portal say "file size too large" for a 21KB photo?',
    answer:
      'The SSC portal enforces 20KB very strictly — even 20.5KB triggers rejection. Use our tool with the "Photo — 20KB" option, which targets 18–20KB deliberately to stay under the threshold. If still rejected, try the 18KB option.',
  },
  {
    question: 'My photo is a PNG or HEIC (iPhone). Can I use it directly?',
    answer:
      'No. SSC portals accept JPEG/JPG only. If your photo is PNG, HEIC, or WebP, first convert it using our PNG to JPG converter, then compress to 20KB with this tool. Renaming a PNG to .jpg does NOT work — the server reads the file header.',
  },
  {
    question: 'Does this tool work for SSC CPO and GD Constable too?',
    answer:
      'Yes. SSC CPO (Central Police Organisations) and SSC GD Constable also require 20KB JPEG photo and 10KB JPEG signature. The same compressed files work for all SSC exams — compress once, use for any SSC application.',
  },
  {
    question: 'How accurate is the 20KB compression?',
    answer:
      'Our binary-search algorithm runs up to 15 iterations, targeting 18–20KB output. This consistently passes SSC portal validation. The file is never above 20KB. If your source photo is already low quality, use the 18KB option for a safer margin.',
  },
];

export default function PageSSCPhotoResize() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">SSC Photo Resize Tool</span>
          </nav>

          {/* H1 — tight, keyword-first */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 leading-tight">
              SSC Photo Resize Tool — Compress to 20KB Instantly
            </h1>
            <p className="text-sm text-muted-foreground">
              Works for <strong>SSC CGL, CHSL, MTS, CPO, GD Constable 2026</strong> · Photo to 20KB · Signature to 10KB · No uploads · 100% free
            </p>
          </div>

          {/* ─── TOOL FIRST ─── */}
          <div className="mb-8">
            <CompressorTool
              title="SSC Photo & Signature Compressor"
              description="Upload your JPEG photo. The tool will compress it to exactly 20KB (or 10KB for signature) — guaranteed to pass SSC portal validation."
              options={[
                { size: 20, label: 'Photo — 20KB (All SSC Exams)', description: 'CGL · CHSL · MTS · CPO · GD Constable' },
                { size: 10, label: 'Signature — 10KB (All SSC Exams)', description: 'Standard SSC signature requirement' },
                { size: 18, label: 'Photo — 18KB (Safe Margin)', description: 'Use if 20KB still gets rejected by portal' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          {/* ─── Exam Requirements Table ─── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">SSC Exam Photo Requirements — All Exams at a Glance</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">SSC Exam</th>
                    <th className="text-left p-3 font-semibold text-foreground">Photo Size</th>
                    <th className="text-left p-3 font-semibold text-foreground">Signature</th>
                    <th className="text-left p-3 font-semibold text-foreground">Format</th>
                    <th className="text-left p-3 font-semibold text-foreground">Specific Page</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SSC CGL 2026', '20KB max', '10KB max', 'JPEG only', '/resize-image-for-ssc-cgl'],
                    ['SSC CHSL 2026', '20KB max', '10KB max', 'JPEG only', '/resize-image-for-ssc-chsl'],
                    ['SSC MTS + Havaldar 2026', '20KB max', '10KB max', 'JPEG only', '/resize-image-for-ssc-mts'],
                    ['SSC CPO 2026', '20KB max', '10KB max', 'JPEG only', null],
                    ['SSC GD Constable 2026', '20KB max', '10KB max', 'JPEG only', null],
                    ['SSC JHT / Stenographer', '20KB max', '10KB max', 'JPEG only', null],
                  ].map(([exam, photo, sig, fmt, href]) => (
                    <tr key={exam as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-foreground">
                        {href ? (
                          <Link href={href as string} className="text-primary hover:underline">{exam}</Link>
                        ) : exam}
                      </td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">{photo}</td>
                      <td className="p-3 text-blue-600 dark:text-blue-400 font-semibold">{sig}</td>
                      <td className="p-3 text-muted-foreground">{fmt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── Quick rejection fixes ─── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Common SSC Upload Errors — Quick Fixes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { err: '"File size exceeds 20KB"', fix: 'Use Photo — 18KB option for a safe margin below the limit.' },
                { err: '"Invalid file format / only JPG accepted"', fix: 'Your file is PNG or HEIC. Convert it first → PNG to JPG tool.' },
                { err: '"Image dimensions too small"', fix: 'Source photo is too low-res. Resize to 200×230px first using Image Dimension Resizer.' },
                { err: '"File corrupted or unsupported"', fix: 'Photo was forwarded via WhatsApp and damaged. Take a fresh photo and compress from original.' },
                { err: '"Upload failed, please try again"', fix: 'Browser/server issue. Switch to Chrome, clear cache (Ctrl+Shift+Delete), try incognito.' },
                { err: 'Preview shows but submission fails', fix: 'Session expired. Re-login and upload again. Avoid leaving the form idle for 30+ minutes.' },
              ].map((item) => (
                <div key={item.err} className="p-4 rounded-xl border border-border bg-card">
                  <p className="font-mono text-xs text-red-500 dark:text-red-400 mb-1.5">❌ {item.err}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">✅ {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Why photo matters ─── */}
          <section className="mb-10 p-5 rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20">
            <h2 className="text-lg font-bold text-foreground mb-3">⚠️ Why Getting This Right Matters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">🌐 Online Portal</p>
                <p className="text-xs">File above 20KB or wrong format → instant rejection with no resubmission window for some portals.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">📋 Document Verification</p>
                <p className="text-xs">Photo older than 3 months or non-white background → rejection after you clear the exam. You lose the seat.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">🎯 Biometric</p>
                <p className="text-xs">Blurry, dark, or distorted photos fail the face-match at the exam centre. Carry printed photo as backup.</p>
              </div>
            </div>
          </section>

          {/* ─── Related Tools ─── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">SSC Application — Every Tool You Need</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-for-ssc-cgl', badge: 'CGL', title: 'SSC CGL Photo Guide', desc: 'Portal walkthrough, biometric rules, edge cases', tag: 'Detailed Guide' },
                { href: '/resize-image-for-ssc-chsl', badge: 'CHSL', title: 'SSC CHSL Photo Guide', desc: 'LDC/PA/DEO posts, Tier 2 typing, rejection reasons', tag: 'Detailed Guide' },
                { href: '/resize-image-for-ssc-mts', badge: 'MTS', title: 'SSC MTS + Havaldar Guide', desc: 'Havaldar PET/PST physical standards table', tag: 'Detailed Guide' },
                { href: '/resize-signature-ssc', badge: 'SIG', title: 'Resize Signature for SSC', desc: 'Compress signature to exactly 10KB', tag: 'Required' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Convert before compressing if your photo is PNG/HEIC', tag: 'Format Fix' },
                { href: '/photo-upload-failed-ssc-fix', badge: '🛠', title: 'Fix SSC Upload Errors', desc: 'Full troubleshooting guide for portal errors', tag: 'Problem Fix' },
                { href: '/image-size-checker', badge: '✓', title: 'Image Size Checker', desc: 'Verify output is exactly under 20KB before uploading', tag: 'Verification' },
                { href: '/background-remover', badge: 'BG', title: 'Background Remover', desc: 'Replace coloured background with pure white instantly', tag: 'Background Fix' },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all"
                >
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

          <AdSlot variant="section" />

          <FAQSection faqs={faqs} subtitle="Common questions from SSC applicants about photo and signature upload requirements." />
        </div>
      </main>
    </>
  );
}
