import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Best Image Size for Indian Passport Application 2026 | Microtools Blog',
  description: 'What photo size does Indian passport need? Dimension 35×45mm, white background, JPG format, under 500KB. Complete guide with free online tools to prepare your passport photo.',
  keywords: 'passport photo size india 2026, Indian passport photo requirements, passport photo dimensions, passport size photo online free, tatkal passport photo size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/best-image-size-for-passport',
  },
  openGraph: {
    title: 'Best Image Size for Indian Passport Application 2026',
    description: 'Complete guide to Indian passport photo requirements — size, dimensions, format.',
    type: 'article',
    url: 'https://tools.draftly.co.in/blog/best-image-size-for-passport',
  },
};

const faqs = [
  {
    question: 'What is the exact size of a passport photo in India?',
    answer: 'Indian passport photos must be 35mm × 45mm in physical size (approximately 413×531 pixels at 300 DPI). The background must be white or off-white. The face must cover 70–80% of the frame. Digital file size is usually under 500KB in JPG format.',
  },
  {
    question: 'Can I make my own passport photo at home?',
    answer: 'Yes, you can make an acceptable passport photo at home. Use a white wall as background, ensure good natural lighting, face the camera directly, keep a neutral expression, and wear normal clothes (no glasses, no cap). Take the photo with your phone and then resize to the required dimensions.',
  },
  {
    question: 'What is the file size for online passport application?',
    answer: 'For the Indian Passport Seva portal, the digital photo must be in JPG/JPEG format, between 10KB and 500KB, with minimum 200×200 pixel resolution. The recommended dimensions are 413×531 pixels at 300 DPI.',
  },
  {
    question: 'Is there a difference between Tatkal and normal passport photo requirements?',
    answer: 'No, the photo requirements are the same for both Tatkal and normal passport applications on the Passport Seva portal. The difference is only in processing time and fees, not in photo specifications.',
  },
  {
    question: 'What if my passport photo is rejected?',
    answer: 'Passport photos are rejected for reasons like dark or coloured background, glasses, head covering, incorrect size, printed with borders, or digital alterations. Ensure your photo is recent (taken in the last 6 months) and meets all specifications before uploading.',
  },
];

export default function PassportPhotoGuide() {
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
            <span className="text-foreground font-medium">Passport Photo Size 2026</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">Passport</span>
              <span className="text-xs text-muted-foreground">March 2026 · 4 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              Best Image Size for Indian Passport Application (2026)
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              A wrong passport photo can cause days of delay in your application. Indian passport photo requirements are very specific — not just the dimensions, but also the background colour, face coverage ratio, file size in KB, and acceptable format. This guide explains everything you need to know to prepare the perfect passport photo at home for free, using our online tools.
            </p>

            <AdSlot variant="section" />

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Indian Passport Photo Requirements at a Glance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Physical Size', value: '35mm × 45mm (portrait)', icon: '📐' },
                  { label: 'Digital File Size', value: '10KB – 500KB', icon: '💾' },
                  { label: 'Pixel Dimensions', value: '413×531 px (recommended)', icon: '🖼️' },
                  { label: 'Format', value: 'JPG / JPEG only', icon: '📄' },
                  { label: 'Background', value: 'White or off-white', icon: '⬜' },
                  { label: 'DPI', value: '300 DPI (minimum)', icon: '🔍' },
                  { label: 'Face Coverage', value: '70–80% of frame', icon: '😊' },
                  { label: 'Recency', value: 'Taken within last 6 months', icon: '📅' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-card">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Create a Passport Photo at Home (Free)</h2>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Take the photo',
                    desc: 'Stand or sit against a plain white wall. Use natural daylight from a window (avoid harsh flash). Face the camera directly with a neutral expression. No glasses, no hair covering the face.',
                  },
                  {
                    step: '2',
                    title: 'Remove the background (if needed)',
                    desc: 'If your background is not clean white, use our Background Remover tool to make it white automatically. AI-powered, free, and works in seconds.',
                    link: '/background-remover',
                    linkText: '→ Background Remover Tool',
                  },
                  {
                    step: '3',
                    title: 'Crop to passport dimensions',
                    desc: 'Use our Passport Photo Maker to crop and resize to the exact 35×45mm / 413×531px requirement with white background.',
                    link: '/passport-photo-maker',
                    linkText: '→ Passport Photo Maker',
                  },
                  {
                    step: '4',
                    title: 'Set DPI to 300',
                    desc: 'For printed passport photos, you need 300 DPI. Use our Photo DPI Converter to set the correct DPI without changing visual quality.',
                    link: '/photo-dpi-converter',
                    linkText: '→ Photo DPI Converter',
                  },
                  {
                    step: '5',
                    title: 'Resize to 10–500KB for upload',
                    desc: 'For the Passport Seva online portal, resize your photo to under 500KB. Use the Image Size Checker to verify before uploading.',
                    link: '/resize-image-50kb-upsc',
                    linkText: '→ Resize to 50KB Tool',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-violet-500 text-white font-bold text-sm flex items-center justify-center">
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
              <h2 className="text-2xl font-bold text-foreground mb-4">🚫 Why Passport Photos Get Rejected</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  ['Coloured or dark background', 'Face covered by hair, dupatta'],
                  ['Wearing glasses or sunglasses', 'Head tilted or turned sideways'],
                  ['Smiling with teeth showing', 'Photo older than 6 months'],
                  ['Wearing a cap, hat, or turban', 'Digital borders or white edges added'],
                  ['File not in JPG format', 'Photo too blurry or dark'],
                ].map(([left, right], i) => (
                  <div key={i} className="space-y-1">
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive">✗</span> {left}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive">✗</span> {right}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Recommended Tools for Passport Photos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/passport-photo-maker', title: 'Passport Photo Maker', desc: 'Crop to 35×45mm with white background' },
                  { href: '/background-remover', title: 'Background Remover', desc: 'Remove background, make it white' },
                  { href: '/photo-dpi-converter', title: 'Photo DPI Converter', desc: 'Set to 300 DPI for print quality' },
                  { href: '/resize-image-dimensions', title: 'Pixel Dimension Resizer', desc: 'Resize to exact 413×531 pixels' },
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
              <FAQSection faqs={faqs} title="Passport Photo FAQs" />
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
