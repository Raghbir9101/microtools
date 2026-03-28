import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Best YouTube Thumbnail Size 2026 — Dimensions, Format, File Size Guide',
  description:
    'Complete YouTube thumbnail size guide for 2026. Required dimensions (1280×720), file format (JPG/PNG), max file size (2MB), and tips for click-through rate.',
  keywords:
    'youtube thumbnail size 2026, youtube thumbnail dimensions, youtube thumbnail 1280x720, best youtube thumbnail size pixels, youtube thumbnails JPG PNG, youtube thumbnail file size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/best-youtube-thumbnail-size-guide',
    languages: { 'en-IN': 'https://tools.draftly.co.in/blog/best-youtube-thumbnail-size-guide' },
  },
  openGraph: {
    title: 'Best YouTube Thumbnail Size 2026 — Complete Guide',
    description: 'Exact YouTube thumbnail specs for 2026 — 1280×720, JPEG/PNG, 2MB limit, and design tips for maximum clicks.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the required YouTube thumbnail size in 2026?',
    answer: 'YouTube requires thumbnails at 1280×720 pixels (16:9 ratio), maximum 2MB file size, JPEG or PNG format. Thumbnails under 640×360 pixels may look blurry on large screens.',
  },
  {
    question: 'Should I use JPEG or PNG for YouTube thumbnails?',
    answer: 'JPEG for photo-based thumbnails (smaller file — better load time). PNG for thumbnail designs with text overlays and sharp graphics (lossless). Both are accepted by YouTube with the 2MB limit.',
  },
  {
    question: 'How do I download someone else\'s YouTube thumbnail?',
    answer: 'Use our YouTube Thumbnail Downloader — paste the video URL and download the HD 1280×720 thumbnail. Note: thumbnails are copyrighted by the creator — do not use them commercially.',
  },
  {
    question: 'Does thumbnail design affect YouTube click-through rate?',
    answer: 'Yes. YouTube data shows thumbnails with bright colours, large readable text (3-4 words max), and a human face showing emotion significantly improve CTR. A good thumbnail is worth more than a perfect title for initial clicks.',
  },
];

export default function BlogYTThumbnail() {
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
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">YouTube Thumbnail Size Guide</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">YouTube</span>
                <span className="text-xs text-muted-foreground">March 2026 · 4 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                Best YouTube Thumbnail Size 2026 — Complete Guide
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Exact specifications for YouTube thumbnails in 2026 — dimensions, format, file size limit, and design tips that actually improve click-through rates.
              </p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">YouTube Thumbnail Specifications 2026</h2>
                <div className="overflow-x-auto rounded-xl border border-border mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-semibold text-foreground">Specification</th>
                        <th className="text-left p-3 font-semibold text-foreground">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Dimensions', '1280×720 pixels (recommended)'],
                        ['Minimum', '640×360 pixels'],
                        ['Aspect Ratio', '16:9 (widescreen)'],
                        ['Format', 'JPG, PNG, GIF, BMP, WebP'],
                        ['Max File Size', '2MB'],
                        ['Colour Space', 'sRGB (not CMYK)'],
                      ].map(([spec, val]) => (
                        <tr key={spec} className="border-t border-border">
                          <td className="p-3 font-medium text-foreground">{spec}</td>
                          <td className="p-3 text-primary font-semibold">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Top 5 Thumbnail Design Tips (CTR Proven)</h2>
                <ol className="space-y-2 list-decimal pl-5">
                  <li><strong className="text-foreground">Use a human face with strong emotion</strong> — surprise, excitement, or concern drives clicks</li>
                  <li><strong className="text-foreground">Add 3–5 words of bold text</strong> — readable even at small size (phone list view)</li>
                  <li><strong className="text-foreground">Use contrasting colours</strong> — bright yellow/red text on dark background stands out in home feed</li>
                  <li><strong className="text-foreground">Create visual contrast with thumbnail neighbours</strong> — if most videos use dark thumbnails, use a bright one</li>
                  <li><strong className="text-foreground">A/B test</strong> — YouTube allows changing thumbnails anytime; test different designs for the same video</li>
                </ol>
              </section>

              <AdSlot variant="section" />

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">YouTube Thumbnail Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: '/youtube-thumbnail-downloader', label: 'YouTube Thumbnail Downloader' },
                    { href: '/download-youtube-thumbnail-hd', label: 'Download Thumbnail in HD (1280×720)' },
                    { href: '/image-crop', label: 'Crop Image to 16:9 Ratio' },
                    { href: '/how-to-reduce-image-size-without-losing-quality', label: 'Reduce File Size (Stay Under 2MB)' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm font-medium text-foreground">
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-10">
              <FAQSection faqs={faqs} title="FAQ" />
            </div>
          </article>
          <AdSlot variant="section" />
        </div>
      </main>
      <Footer />
    </>
  );
}
