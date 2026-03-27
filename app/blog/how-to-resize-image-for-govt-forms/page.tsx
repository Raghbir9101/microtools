import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Resize Image for Government Forms (Step-by-Step) | Microtools Blog',
  description: 'Step-by-step guide to resizing images for Indian government exam forms. Compress photos to 10KB, 20KB, 50KB, or 100KB for SSC, UPSC, Railway, IBPS forms in 2 minutes.',
  keywords: 'how to resize image for govt form, compress photo for SSC UPSC Railway, image size for govt exam form, reduce photo size online india',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/how-to-resize-image-for-govt-forms',
  },
  openGraph: {
    title: 'How to Resize Image for Government Forms (Step-by-Step)',
    description: 'Compress photos to exact KB for SSC, UPSC, Railway government exam forms.',
    type: 'article',
    url: 'https://tools.draftly.co.in/blog/how-to-resize-image-for-govt-forms',
  },
};

const faqs = [
  {
    question: 'What image size is required for most government forms?',
    answer: 'It varies by exam. SSC typically requires 20KB, UPSC requires 50KB, Indian Railway (RRB) requires 100KB, and some bank exams require 50–100KB. For signatures, most exams require 10KB–20KB. Always verify with the official notification for your specific exam and year.',
  },
  {
    question: 'Can I resize photos on my phone?',
    answer: 'Yes! Our tools are fully mobile-responsive. Open any tool in your phone browser (Chrome or Safari), upload your photo from gallery, and download the compressed file — all without installing any app.',
  },
  {
    question: 'What format should the government form photo be in?',
    answer: 'Nearly all Indian government portals require JPG or JPEG format. PNG files are often rejected. If your photo is in PNG format, use our free PNG to JPG converter first, then resize to the required KB.',
  },
  {
    question: 'Why does my compressed photo look blurry?',
    answer: 'Blurriness happens when the original photo is very small (low resolution) and gets re-compressed. Start with the best quality photo you have — a 2–5MB photo will compress to 20KB without visible quality loss. Avoid compressing already-compressed small images.',
  },
];

export default function HowToResizeGuide() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">Resize Image for Govt Forms</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Tutorial</span>
              <span className="text-xs text-muted-foreground">March 2026 · 4 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              How to Resize Image for Government Forms — Step-by-Step Guide
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Filling an online government exam application is stressful enough without worrying about photo size errors. This guide walks you through the exact process to compress and resize your photo for any Indian govt exam form — SSC, UPSC, Railway, IBPS, SBI PO, or state PSC — in under 2 minutes using free browser tools, with no software installation required.
            </p>

            <AdSlot variant="section" />

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Which Size Do I Need?</h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Exam / Portal</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Photo Size</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Signature Size</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Use This Tool</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ['SSC (CGL, CHSL, MTS)', '20KB', '10KB', '/resize-image-20kb-ssc'],
                      ['UPSC (IAS, CMS, ESE)', '50KB', '20KB', '/resize-image-50kb-upsc'],
                      ['Railway (RRB NTPC, GD)', '100KB', '20KB', '/resize-image-100kb-railway'],
                      ['Bank (IBPS, SBI)', '50–100KB', '20KB', '/resize-image-50kb-upsc'],
                      ['Passport Application', '10–50KB', '—', '/resize-image-20kb'],
                    ].map(([exam, photo, sig, tool], i) => (
                      <tr key={exam} className={i % 2 === 0 ? '' : 'bg-muted/20'}>
                        <td className="px-4 py-3 font-medium text-foreground text-xs">{exam}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs">{photo}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs">{sig}</td>
                        <td className="px-4 py-3">
                          <Link href={tool} className="text-primary text-xs font-medium hover:underline">Open Tool →</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Step-by-Step: Resize Any Image for Govt Forms</h2>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Find your exam\'s exact requirements',
                    desc: 'Check the official exam notification or the portal\'s FAQ. Note: photo size in KB, pixel dimensions (e.g. 200×230), and accepted formats (usually JPG). Don\'t trust unofficial sources.',
                    color: 'bg-blue-500',
                  },
                  {
                    step: '2',
                    title: 'Take or select a good quality photo',
                    desc: 'Use a photo taken recently (within 3 months), against a white background, without glasses or cap. A 2–5MB photo from your smartphone camera works perfectly — we will compress it.',
                    color: 'bg-violet-500',
                  },
                  {
                    step: '3',
                    title: 'Convert to JPG if needed',
                    desc: 'If your photo is in PNG or WebP format, use our PNG to JPG converter first. Government portals almost always require JPG/JPEG format.',
                    color: 'bg-amber-500',
                    link: '/png-to-jpg',
                    linkText: '→ PNG to JPG Converter',
                  },
                  {
                    step: '4',
                    title: 'Open the correct size tool',
                    desc: 'Choose the compressor that matches your requirement — 10KB, 20KB, 50KB, or 100KB. The tool finds the exact compression needed automatically.',
                    color: 'bg-emerald-500',
                  },
                  {
                    step: '5',
                    title: 'Upload and compress',
                    desc: 'Drag your photo into the upload area. The compression happens instantly in your browser — no server, no internet required for processing.',
                    color: 'bg-rose-500',
                  },
                  {
                    step: '6',
                    title: 'Verify size and download',
                    desc: 'The tool shows you the final file size before download. Confirm it meets the requirement, then click Download. Upload it to your exam portal.',
                    color: 'bg-cyan-500',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                    <div className={`flex-shrink-0 w-9 h-9 rounded-full ${item.color} text-white font-bold text-sm flex items-center justify-center`}>
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                      {item.link && (
                        <Link href={item.link} className="text-primary text-sm font-medium mt-1 inline-block hover:underline">
                          {item.linkText}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Access: Compression Tools by Exam</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/resize-image-20kb-ssc', title: 'Resize to 20KB — SSC', desc: 'SSC CGL, CHSL, MTS, CPO, GD', color: 'border-emerald-200 dark:border-emerald-800' },
                  { href: '/resize-image-50kb-upsc', title: 'Resize to 50KB — UPSC', desc: 'UPSC Civil Services, CMS, ESE', color: 'border-violet-200 dark:border-violet-800' },
                  { href: '/resize-image-100kb-railway', title: 'Resize to 100KB — Railway', desc: 'RRB NTPC, Group D, ALP, JE', color: 'border-orange-200 dark:border-orange-800' },
                  { href: '/resize-image-10kb', title: 'Resize to 10KB — Signatures', desc: 'For signature images on any form', color: 'border-blue-200 dark:border-blue-800' },
                ].map((tool) => (
                  <Link key={tool.href} href={tool.href}
                    className={`group flex items-start gap-3 p-4 rounded-xl border-2 bg-card hover:shadow-sm transition-all ${tool.color}`}>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{tool.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{tool.desc}</p>
                    </div>
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-12">
              <FAQSection faqs={faqs} title="Frequently Asked Questions" />
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-3">
              <Link href="/blog" className="text-sm text-primary hover:underline">← Back to Blog</Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Browse All Tools →</Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
