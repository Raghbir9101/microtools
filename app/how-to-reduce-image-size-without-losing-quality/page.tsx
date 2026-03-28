import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'How to Reduce Image Size Without Losing Quality (2026 Guide)',
  description:
    'Learn how to reduce image file size without visible quality loss. JPEG compression tips, tools, and techniques for photos, govt forms, and web use.',
  keywords:
    'reduce image size without losing quality, compress image no quality loss, reduce photo size keep quality, image compression guide, how to compress jpg without losing quality',
  alternates: {
    canonical: 'https://tools.draftly.co.in/how-to-reduce-image-size-without-losing-quality',
    languages: { 'en-IN': 'https://tools.draftly.co.in/how-to-reduce-image-size-without-losing-quality' },
  },
  openGraph: {
    title: 'How to Reduce Image Size Without Losing Quality',
    description:
      'Complete guide to compressing images while keeping visual quality. Best techniques, tools, and format tips.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Can you truly compress an image without losing any quality?',
    answer:
      'For JPEG files: not literally — JPEG is a lossy format. But below 80% JPEG quality (roughly 200KB for a standard photo), the quality loss is imperceptible to the human eye. Above 200KB, you can compress significantly with zero visible change in quality.',
  },
  {
    question: 'What is the best image format for smaller file sizes with good quality?',
    answer:
      'WebP is the winner — 25–35% smaller than JPEG at the same visual quality. PNG is lossless but large. JPEG is the best compromise for photos. For government forms, always use JPEG as other formats may be rejected.',
  },
  {
    question: 'What JPEG quality percentage should I use for web images?',
    answer:
      '80–85% JPEG quality is the sweet spot — nearly indistinguishable from the original at half the file size. For thumbnails: 60–70%. For government forms (20KB–100KB): quality drops to 30–50% but faces remain clear.',
  },
  {
    question: 'Does resizing image dimensions also reduce file size?',
    answer:
      'Yes — combining dimension reduction and quality compression gives the best results. A 4000×3000px photo compressed to 1000×750px and JPEG quality 80% will be 90%+ smaller than the original.',
  },
  {
    question: 'Does WhatsApp compress images automatically?',
    answer:
      'Yes. WhatsApp applies its own compression to images sent in chat — often reducing quality visibly. To send without compression, use the "Document" option when attaching the file. Pre-compressing to 200KB before sending provides better controlled quality.',
  },
  {
    question: 'How do photographers compress portfolio images for websites?',
    answer:
      'Professional photographers export at 80% JPEG quality, resize to 2000px wide max, and use tools like Lightroom, Squoosh (Google), or our compressor. The goal: under 300KB per image for fast page loading while maintaining sharp visual quality.',
  },
];

const techniques = [
  {
    title: 'Reduce JPEG Quality (Most Effective)',
    desc: 'JPEG files store quality in a 0–100 scale. Reducing from 95% to 80% cuts file size by 50–60% with almost no visible difference. Below 70%, some degradation appears — still acceptable for govt forms but noticeable on prints.',
    tip: 'Use our size-targeted compressors — type a KB target and we find the optimal quality automatically.',
    color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
  },
  {
    title: 'Reduce Image Dimensions',
    desc: 'Halving width and height (e.g., 4000×3000→2000×1500) reduces file size by 75%. Combine with quality reduction for maximum compression.',
    tip: 'Use our Image Dimension Resizer to reduce pixel dimensions before compressing.',
    color: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800',
  },
  {
    title: 'Convert to WebP (Best for Web)',
    desc: 'WebP delivers 25–35% smaller files than JPEG at the same quality. Ideal for websites and apps. Not accepted by government portals.',
    tip: 'Use our JPG to WebP Converter for web-optimised images.',
    color: 'bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800',
  },
  {
    title: 'Remove Metadata (EXIF)',
    desc: 'Camera photos contain hidden EXIF metadata (GPS, camera model, settings) that can add 50–500KB. Stripping EXIF reduces size without any visual quality change.',
    tip: 'Our compressor strips EXIF data automatically during compression.',
    color: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800',
  },
];

export default function PageReduceImageSizeQuality() {
  const relatedTools = getRelatedTools([
    'resize-image-20kb-ssc',
    'resize-image-100kb-railway',
    'jpg-to-webp',
    'resize-image-dimensions',
  ]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">Reduce Image Size Without Losing Quality</span>
          </nav>

          <AdSlot variant="top" />

          <div className="mt-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-5 border border-emerald-200 dark:border-emerald-800">
              📚 Complete Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
              How to Reduce Image Size Without Losing Quality
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              The right compression technique can reduce a 5MB photo to 50KB while keeping it visually sharp. This guide covers every compression method — JPEG quality tuning, dimension reduction, format conversion, and metadata removal — with the best approach for each use case.
            </p>
          </div>

          {/* Techniques */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">4 Techniques to Compress Images Without Quality Loss</h2>
            <div className="space-y-4">
              {techniques.map((tech) => (
                <div key={tech.title} className={`p-5 rounded-2xl border ${tech.color}`}>
                  <h3 className="font-bold text-foreground mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tech.desc}</p>
                  <p className="text-xs text-primary font-medium">💡 {tech.tip}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSlot variant="section" />

          {/* Quality vs Size table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">JPEG Quality vs File Size (Reference Table)</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold text-foreground">JPEG Quality</th>
                    <th className="text-left p-3 font-semibold text-foreground">Approx Size (3MP photo)</th>
                    <th className="text-left p-3 font-semibold text-foreground">Visual Quality</th>
                    <th className="text-left p-3 font-semibold text-foreground">Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['90–100%', '2MB – 5MB', 'Perfect (original)', 'Printing, archiving'],
                    ['80–90%', '800KB – 2MB', 'Excellent', 'Portfolio, social media'],
                    ['70–80%', '300KB – 800KB', 'Very Good', 'Web images, emails'],
                    ['50–70%', '100KB – 300KB', 'Good', 'Thumbnails, previews'],
                    ['30–50%', '20KB – 100KB', 'Acceptable', 'Govt forms (SSC/UPSC)'],
                    ['<30%', '<20KB', 'Noticeable artifacts', 'Very strict portals'],
                  ].map(([q, size, quality, use]) => (
                    <tr key={q} className="border-t border-border">
                      <td className="p-3 font-semibold text-foreground">{q}</td>
                      <td className="p-3 text-muted-foreground">{size}</td>
                      <td className="p-3 text-muted-foreground">{quality}</td>
                      <td className="p-3 text-muted-foreground">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Related tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Compress Your Image Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="group p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                    {tool.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{tool.description}</div>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection faqs={faqs} title="Frequently Asked Questions" />
          <AdSlot variant="section" />
        </div>
      </main>
      <Footer />
    </>
  );
}
