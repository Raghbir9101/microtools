import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Blog — Image Size Tips, Govt Form Guide & More | Microtools',
  description: 'Learn how to resize images for SSC, UPSC, Railway forms. Tips on photo size requirements, PDF tools, and digital form submission guides for Indian government exams.',
  keywords: 'SSC photo size 2026, UPSC image requirements, resize image for govt form, passport photo online, image size guide india',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog',
  },
  openGraph: {
    title: 'Blog — Image Size Tips & Govt Form Guides | Microtools',
    description: 'Expert guides on image size for SSC, UPSC, Railway forms and more.',
    type: 'website',
    url: 'https://tools.draftly.co.in/blog',
  },
};

const posts = [
  {
    slug: 'ssc-photo-size-requirements-2026',
    title: 'SSC Photo Size Requirements 2026: Complete Guide',
    description: 'Everything you need to know about SSC CGL, CHSL, MTS, CPO photo and signature size requirements for 2026 applications. Exact KB limits, dimensions, and format.',
    date: 'March 2026', readTime: '5 min read', category: 'Govt Forms', emoji: '📋',
    categoryColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  {
    slug: 'upsc-photo-requirements-2026',
    title: 'UPSC Photo Requirements 2026 — Complete Guide',
    description: 'Complete guide to UPSC Civil Services, CAPF, CDS, NDA photo and signature requirements for 2026. 50KB JPEG, dimensions, background rules, and upload guide.',
    date: 'March 2026', readTime: '5 min read', category: 'Govt Forms', emoji: '🏛️',
    categoryColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
  },
  {
    slug: 'railway-rrb-photo-size-guide',
    title: 'Railway RRB Exam Photo Size 2026 — Complete Guide',
    description: 'Photo and signature requirements for RRB NTPC, Group D, ALP, JE, RPF — 100KB JPEG, dimensions, background rules, and step-by-step upload instructions.',
    date: 'March 2026', readTime: '5 min read', category: 'Railway', emoji: '🚂',
    categoryColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  },
  {
    slug: 'ibps-photo-size-requirements',
    title: 'IBPS PO / Clerk Photo Size 2026 — SBI Included',
    description: 'Exact photo and signature requirements for IBPS PO, IBPS Clerk, IBPS SO, SBI PO, SBI Clerk — 50KB JPEG, dimensions, background rules, and upload guide.',
    date: 'March 2026', readTime: '4 min read', category: 'Banking', emoji: '🏦',
    categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    slug: 'how-to-resize-signature-for-exam-forms',
    title: 'How to Resize Signature for Exam Forms — SSC, UPSC, IBPS Guide',
    description: 'Step-by-step guide to scanning, photographing, and compressing your signature for any government exam portal. All exam requirements in one table.',
    date: 'March 2026', readTime: '5 min read', category: 'Tutorial', emoji: '✍️',
    categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    slug: 'how-to-merge-pdf-files-free',
    title: 'How to Convert & Merge Documents to PDF — Free',
    description: 'Complete guide to converting JPG images to PDF and merging multiple PDFs into one file. For government forms, bank job applications, and academic submissions.',
    date: 'March 2026', readTime: '5 min read', category: 'PDF Guide', emoji: '📄',
    categoryColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  },
  {
    slug: 'instagram-image-size-guide-2026',
    title: 'Instagram Image Size Guide 2026 — Posts, Stories, Reels',
    description: 'Exact pixel dimensions for every Instagram content type — posts (1080×1080), Stories (1080×1920), Reels, profile pictures, and carousels. No blurry uploads.',
    date: 'March 2026', readTime: '4 min read', category: 'Social Media', emoji: '📸',
    categoryColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  },
  {
    slug: 'best-youtube-thumbnail-size-guide',
    title: 'Best YouTube Thumbnail Size 2026 — Dimensions & Design Tips',
    description: 'YouTube thumbnail specs — 1280×720 pixels, 2MB limit, JPEG/PNG format. Plus 5 CTR-proven design tips that actually increase clicks.',
    date: 'March 2026', readTime: '4 min read', category: 'YouTube', emoji: '▶️',
    categoryColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
  {
    slug: 'how-to-resize-image-for-govt-forms',
    title: 'How to Resize Image for Government Forms (Step-by-Step)',
    description: 'A complete step-by-step guide to compressing and resizing your photo for any Indian government exam form. Works for SSC, UPSC, Railway, IBPS, and bank exams.',
    date: 'March 2026', readTime: '4 min read', category: 'Tutorial', emoji: '🖼️',
    categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    slug: 'best-image-size-for-passport',
    title: 'Best Image Size for Passport Application in India (2026)',
    description: 'What is the correct photo size for Indian passport application? Dimension requirements, file size in KB, background color, and how to make it at home for free.',
    date: 'March 2026', readTime: '4 min read', category: 'Passport', emoji: '🛂',
    categoryColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
  },
];


export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">Blog</span>
          </nav>

          <AdSlot variant="top" />

          <div className="mt-8 mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
              Guides & Tips
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              Learn how to prepare photos for Indian government exam forms, understand image size requirements, and get the most out of our free tools.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">
                    {post.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <AdSlot variant="section" />
          </div>
        </div>
      </main>
    </>
  );
}
