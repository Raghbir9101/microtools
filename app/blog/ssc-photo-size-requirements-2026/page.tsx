import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'SSC Photo Size Requirements 2026: Complete Guide | Microtools Blog',
  description: 'Official SSC photo and signature size requirements for 2026. SSC CGL, CHSL, MTS, CPO — exact KB limits, pixel dimensions, format, and step-by-step upload guide.',
  keywords: 'SSC photo size 2026, SSC CGL photo size, SSC CHSL photo requirements, SSC signature size, SSC form photo upload guide',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/ssc-photo-size-requirements-2026',
  },
  openGraph: {
    title: 'SSC Photo Size Requirements 2026 — Complete Guide',
    description: 'Exact photo and signature size requirements for all SSC exams in 2026.',
    type: 'article',
    url: 'https://tools.draftly.co.in/blog/ssc-photo-size-requirements-2026',
  },
};

const faqs = [
  {
    question: 'What is the SSC CGL 2026 photo size in KB?',
    answer: 'SSC CGL 2026 requires a recent passport-size photograph with file size between 4KB and 12KB (target 10KB or 20KB depending on the notification). The image must be in JPG/JPEG format with minimum 200×230 pixels. Always check the official SSC notification for the exact exam cycle you are applying for.',
  },
  {
    question: 'What is SSC signature size in KB?',
    answer: 'SSC signature image should be between 1KB and 12KB (target ~10KB), in JPG/JPEG format, with dimensions around 140×60 pixels. The signature must be on white paper with a black pen.',
  },
  {
    question: 'Can I use a mobile photo for SSC form?',
    answer: 'Yes, but the photo must be taken against a white or light background, face clearly visible, without glasses or caps. A good quality smartphone camera in a well-lit area is acceptable. Make sure the file size meets the exact requirement.',
  },
  {
    question: 'What happens if my SSC photo is rejected?',
    answer: 'If the photo does not meet size, format, or content requirements, the portal will either show an upload error or your application may be rejected during scrutiny. Always verify before submitting.',
  },
];

export default function SscPhotoGuide() {
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
            <span className="text-foreground font-medium">SSC Photo Size 2026</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8 prose-custom">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Govt Forms</span>
              <span className="text-xs text-muted-foreground">March 2026 · 5 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              SSC Photo Size Requirements 2026 — Complete Guide
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Every year, thousands of SSC applicants face form rejection simply because their photo or signature does not meet the exact size and format requirements. In 2026, SSC has maintained consistent standards across all major exams including CGL, CHSL, MTS, CPO, and GD. This guide gives you the exact numbers — file size in KB, pixel dimensions, format — plus a step-by-step guide to get it right in under 2 minutes.
            </p>

            <AdSlot variant="section" />

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Reference Table</h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Exam</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Photo Size</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Dimensions</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Format</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ['SSC CGL', '10–20 KB', '200×230 px', 'JPG/JPEG'],
                      ['SSC CHSL', '10–20 KB', '200×230 px', 'JPG/JPEG'],
                      ['SSC MTS', '10–20 KB', '200×230 px', 'JPG/JPEG'],
                      ['SSC CPO', '10–20 KB', '200×230 px', 'JPG/JPEG'],
                      ['SSC GD', '10–20 KB', '200×230 px', 'JPG/JPEG'],
                      ['SSC Signature', '1–12 KB', '140×60 px', 'JPG/JPEG'],
                    ].map(([exam, size, dim, fmt], i) => (
                      <tr key={exam} className={i % 2 === 0 ? '' : 'bg-muted/20'}>
                        <td className="px-4 py-3 font-medium text-foreground">{exam}</td>
                        <td className="px-4 py-3 text-muted-foreground">{size}</td>
                        <td className="px-4 py-3 text-muted-foreground">{dim}</td>
                        <td className="px-4 py-3 text-muted-foreground">{fmt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">⚠️ Always confirm with the official SSC notification for your specific exam cycle, as requirements can vary.</p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Step-by-Step: Resize Your SSC Photo in 2 Minutes</h2>
              <ol className="space-y-4">
                {[
                  { step: '1', title: 'Open the SSC Photo Compressor', desc: 'Go to our free Resize Image to 20KB tool — no login, no download required.', link: '/resize-image-20kb-ssc', linkText: '→ Open SSC 20KB Tool' },
                  { step: '2', title: 'Upload your photo', desc: 'Click the upload area or drag your photo. JPG, PNG, or JPEG are all accepted.' },
                  { step: '3', title: 'Select 20KB target', desc: 'The SSC 20KB preset is pre-selected. The tool automatically compresses to within ±2KB of 20KB.' },
                  { step: '4', title: 'Download your compressed photo', desc: 'Click the Download button. Your photo is now ready for the SSC portal upload.' },
                  { step: '5', title: 'Repeat for signature', desc: 'For your signature, use the Resize Image to 10KB tool.', link: '/resize-image-10kb', linkText: '→ Open 10KB Signature Tool' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
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
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Common SSC Photo Mistakes to Avoid</h2>
              <ul className="space-y-3">
                {[
                  'Using a coloured background (must be white or off-white)',
                  'Wearing glasses or cap in the photo',
                  'Uploading a file in PNG format (convert to JPG first)',
                  'Photo too old — must be recent (within 3 months)',
                  'File size too large — portal caps at 12KB or 20KB',
                  'Signature on lined paper — use plain white paper',
                ].map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-destructive font-bold mt-0.5">✗</span>
                    <span className="text-muted-foreground">{mistake}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Recommended Tools for SSC Forms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/resize-image-20kb-ssc', title: 'Resize Photo to 20KB (SSC)', desc: 'Most common SSC photo requirement' },
                  { href: '/resize-image-10kb', title: 'Resize Signature to 10KB', desc: 'For SSC signature upload' },
                  { href: '/resize-image-dimensions', title: 'Pixel Dimension Resizer', desc: 'Resize to exact 200×230 pixels' },
                  { href: '/png-to-jpg', title: 'PNG to JPG Converter', desc: 'Convert PNG photos to JPG format' },
                ].map((tool) => (
                  <Link key={tool.href} href={tool.href}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{tool.title}</p>
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
              <FAQSection faqs={faqs} title="SSC Photo FAQs" />
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
