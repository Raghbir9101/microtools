import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Instagram Image Size Guide 2026 — Post, Story, Reel, Profile Dimensions',
  description:
    'Complete Instagram image size guide for 2026. Exact pixel dimensions and file sizes for feed posts, Stories, Reels, profile pictures, carousels, and IGTV covers.',
  keywords:
    'instagram image size 2026, instagram post dimensions, instagram story size pixels, instagram profile picture size, instagram reel dimensions, instagram square photo size, instagram carousel size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/instagram-image-size-guide-2026',
    languages: { 'en-IN': 'https://tools.draftly.co.in/blog/instagram-image-size-guide-2026' },
  },
  openGraph: {
    title: 'Instagram Image Size Guide 2026 — All Dimensions',
    description: 'All Instagram image and video dimension specs for 2026 — posts, stories, reels, profiles, carousels.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the best Instagram post size for maximum quality in 2026?',
    answer: 'For square posts: 1080×1080 pixels. For portrait (best engagement): 1080×1350 pixels. For landscape: 1080×566 pixels. Keep file size under 1MB to avoid Instagram re-compression.',
  },
  {
    question: 'Does Instagram compress images?',
    answer: 'Yes. Instagram compresses any photo above ~1MB and any photo not at the recommended dimensions. To avoid compression loss, upload exactly 1080-wide JPEG at under 1MB with sRGB colour profile.',
  },
  {
    question: 'What size should Instagram profile picture be?',
    answer: 'Upload at least 400×400 pixels (displayed at 110×110). Use a clear face or logo with the subject centered, since Instagram crops it in a circle. File size under 5MB.',
  },
  {
    question: 'What image format does Instagram prefer — JPEG or PNG?',
    answer: 'JPEG for photos — Instagram handles JPEG better with less compression loss. PNG for graphics with text or transparency needs. Avoid HEIC and WebP for posting (convert first).',
  },
];

const dimensions = [
  { type: 'Square Post', ratio: '1:1', pixels: '1080×1080', maxFile: 'Under 1MB' },
  { type: 'Portrait Post', ratio: '4:5', pixels: '1080×1350', maxFile: 'Under 1MB' },
  { type: 'Landscape Post', ratio: '1.91:1', pixels: '1080×566', maxFile: 'Under 1MB' },
  { type: 'Story / Reel', ratio: '9:16', pixels: '1080×1920', maxFile: 'Under 30MB (video)' },
  { type: 'Profile Picture', ratio: '1:1', pixels: '400×400 min', maxFile: 'Under 5MB' },
  { type: 'Carousel', ratio: '1:1 or 4:5', pixels: '1080×1080 or 1080×1350', maxFile: 'Under 1MB each' },
  { type: 'IGTV Cover', ratio: '1:1.55', pixels: '420×654', maxFile: 'Under 1MB' },
];

export default function BlogInstagramSizes() {
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
            <span className="text-foreground font-medium">Instagram Size Guide 2026</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">Social Media</span>
                <span className="text-xs text-muted-foreground">March 2026 · 4 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                Instagram Image Size Guide 2026 — All Dimensions
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Exact pixel dimensions for every Instagram content type in 2026 — posts, Stories, Reels, profile pictures, carousels, and IGTV covers.
              </p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Instagram Dimension Quick Reference</h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-semibold text-foreground">Content Type</th>
                        <th className="text-left p-3 font-semibold text-foreground">Ratio</th>
                        <th className="text-left p-3 font-semibold text-foreground">Dimensions</th>
                        <th className="text-left p-3 font-semibold text-foreground">Max File Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dimensions.map((d) => (
                        <tr key={d.type} className="border-t border-border">
                          <td className="p-3 font-medium text-foreground">{d.type}</td>
                          <td className="p-3">{d.ratio}</td>
                          <td className="p-3 text-primary font-semibold">{d.pixels}</td>
                          <td className="p-3">{d.maxFile}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <AdSlot variant="section" />

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Why Instagram Compresses Your Photos</h2>
                <p className="mb-3">Instagram automatically compresses photos when: (1) the file is above 1MB, (2) dimensions are not exactly at a supported ratio, or (3) the colour profile is not sRGB. Visible symptoms: pixelation, washed out colours, artificial texture in dark areas.</p>
                <p>Fix: resize to exact dimensions, use JPEG format at 85% quality, keep under 1MB.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Resize Tools for Instagram</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: '/resize-image-for-instagram-post', label: 'Resize for Instagram Post (1080×1080)' },
                    { href: '/instagram-image-resizer', label: 'Instagram Image Resizer (all formats)' },
                    { href: '/image-crop', label: 'Crop Image (Custom Ratios)' },
                    { href: '/how-to-reduce-image-size-without-losing-quality', label: 'Reduce File Size Without Quality Loss' },
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
