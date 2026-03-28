import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'SSC CHSL Photo Resize Tool (20KB) — LDC, PA, DEO Upload Fix | 2026',
  description:
    'Compress photo to exactly 20KB for SSC CHSL 2026. Works for LDC, PA, SA, DEO posts. CHSL post requirements table, Tier 2 typing test, rejection causes, upload walkthrough. Free.',
  keywords:
    'SSC CHSL photo size 2026, resize image SSC CHSL, SSC CHSL photo 20kb, SSC 10+2 image requirement, LDC photo size, PA DEO SSC CHSL photo, compress photo SSC CHSL, CHSL photo upload failed',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-ssc-chsl',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-ssc-chsl' },
  },
  openGraph: {
    title: 'Resize Image for SSC CHSL 2026 — 20KB Photo Compressor (LDC/PA/DEO)',
    description:
      'Compress photo to 20KB for SSC CHSL 2026 — LDC, Postal Assistant, DEO posts. Rejection causes, stage-wise requirements, uploading guide.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for SSC CHSL 2026 — 20KB Photo for LDC/PA/DEO',
    description: 'SSC CHSL photo failing? Compress to 20KB. CHSL stage requirements, rejection reasons, upload walkthrough.',
    images: ['/opengraph-image'],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Resize Image for SSC CHSL 2026', item: `${SITE_URL}/resize-image-for-ssc-chsl` },
  ],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SSC CHSL Photo Compressor — 20KB',
  url: `${SITE_URL}/resize-image-for-ssc-chsl`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Free browser-based tool to compress JPEG photos to exactly 20KB for the SSC CHSL 2026 application form.',
};

const faqs = [
  {
    question: 'What is the SSC CHSL 2026 photo requirement?',
    answer:
      'SSC CHSL 2026 requires: JPEG/JPG format only, maximum 20KB file size, recommended dimensions 200×230 pixels, plain white or off-white background, recent photo within 3 months, front-facing with eyes open, no glasses, no cap.',
  },
  {
    question: 'What posts are filled through SSC CHSL 2026?',
    answer:
      'SSC CHSL 2026 recruits for: Lower Division Clerk (LDC) in central govt ministries, Junior Secretariat Assistant (JSA) in Parliament, Postal Assistant (PA) in Department of Posts, Sorting Assistant (SA), and Data Entry Operator (DEO) in central government departments including CAG. Each post has different typing speed requirements at Tier 2.',
  },
  {
    question: 'What is the typing test requirement for SSC CHSL Tier 2?',
    answer:
      'SSC CHSL Tier 2 has a Skill Test: (1) For LDC/JSA: typing speed of 35 words per minute in English or 30 words per minute in Hindi on a computer. (2) For DEO: Data Entry Speed of 8,000 key depressions per hour on a computer. (3) For PA/SA: typing at 35 wpm in English. All candidates must also appear for Tier 1 (CBT) and Tier 2 (Descriptive Paper at selected centres).',
  },
  {
    question: 'Is SSC CHSL photo requirement different from SSC CGL?',
    answer:
      'The file specifications are identical — 20KB JPEG, 200×230px, white background. However, the CHSL application itself goes through different regional portals depending on your region (Northern, Southern, Central, etc.), and exam stages differ — CHSL has Tier 1 (CBT), Tier 2 (Descriptive + Skill), while CGL has Tier 1, 2, and 3. The same compressed photo file can be used for both.',
  },
  {
    question: 'Can I use the same photo for SSC CHSL Tier 1 and Tier 2?',
    answer:
      'Yes — the same uploaded photo from Part II of the application is used throughout the selection process. You do not re-upload at each stage. However, if the time between Stage 1 and Stage 2 spans more than 3 months from when the photo was taken, you may need to provide a fresher physical copy at the document verification stage.',
  },
  {
    question: 'What are the age limits for SSC CHSL 2026?',
    answer:
      'For LDC/JSA: 18–27 years. For PA/SA: 18–27 years. For DEO (CAG): 18–27 years. Age relaxation of 5 years for SC/ST, 3 years for OBC. Check the official SSC CHSL notification for exact post-wise age limits — these vary each year.',
  },
  {
    question: 'My CHSL application is showing "incomplete" even after uploading the photo — why?',
    answer:
      'This happens when: (1) The signature was not uploaded — both photo AND signature must be uploaded for the application to show as complete. (2) Part I details (category, age, centre) have not been saved. (3) Browser session expired during upload — refresh and try again. Ensure both photo (20KB) and signature (10KB) uploads show green previews before submitting.',
  },
  {
    question: 'What is the educational qualification for SSC CHSL?',
    answer:
      'SSC CHSL requires Class 12 (Higher Secondary) pass from a recognised board. No graduation is needed — this exam is specifically designed for 10+2 qualified candidates. For DEO posts in certain departments, additional qualifications may apply. Refer to the official notification for post-specific qualification requirements.',
  },
];

export default function PageSSCCHSL() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">SSC CHSL Photo — 20KB Compressor</span>
          </nav>

          <AdSlot variant="top" />

          {/* H1 — tight */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-200 dark:border-blue-800">
              📋 SSC CHSL 2026 · LDC / PA / SA / DEO
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              SSC CHSL Photo Resize Tool — Fix 20KB Upload Error (LDC, PA, DEO)
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Compress your photo to exactly <strong>20KB for SSC CHSL 2026</strong>. Required for LDC, Postal Assistant, Sorting Assistant, and DEO applications (10+2 level). Signature to 10KB also available.
            </p>
          </div>

          {/* ─── TOOL — ABOVE THE FOLD ─── */}
          <div className="mb-10">
            <CompressorTool
              title="Compress Photo / Signature for SSC CHSL 2026"
              description="Upload your JPEG. Compressed to exactly 20KB (photo) or 10KB (signature) — guaranteed to pass SSC CHSL portal validation."
              options={[
                { size: 20, label: 'Photo — 20KB (SSC CHSL)', description: 'Standard SSC CHSL photograph requirement' },
                { size: 10, label: 'Signature — 10KB (SSC CHSL)', description: 'Standard SSC CHSL signature requirement' },
                { size: 18, label: 'Photo — 18KB (safe margin)', description: 'Use if 20KB is still getting rejected' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          {/* ── SECTION 1: SSC CHSL Posts ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">SSC CHSL 2026 — Posts, Departments & Typing Requirements</h2>
            <p className="text-sm text-muted-foreground mb-5">
              CHSL fills different posts than CGL. Each post has different skill requirements at Tier 2:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Post</th>
                    <th className="text-left p-3 font-semibold text-foreground">Department</th>
                    <th className="text-left p-3 font-semibold text-foreground">Tier 2 Skill</th>
                    <th className="text-left p-3 font-semibold text-foreground">Pay Level</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['LDC / JSA', 'Central Ministries / Parliament', 'Typing: 35 wpm English / 30 wpm Hindi', 'Level 2 (₹19,900)'],
                    ['Postal Assistant (PA)', 'Dept of Posts', 'Typing: 35 wpm English', 'Level 4 (₹25,500)'],
                    ['Sorting Assistant (SA)', 'Dept of Posts', 'Typing: 35 wpm English', 'Level 4 (₹25,500)'],
                    ['DEO Grade A', 'CAG & Others', 'DEST: 8,000 key depressions/hr', 'Level 4 (₹25,500)'],
                    ['DEO Grade B', 'SFIO', 'DEST: 15,000 key depressions/hr', 'Level 5 (₹29,200)'],
                  ].map(([post, dept, skill, pay]) => (
                    <tr key={post} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-semibold text-foreground">{post}</td>
                      <td className="p-3 text-muted-foreground">{dept}</td>
                      <td className="p-3 text-muted-foreground">{skill}</td>
                      <td className="p-3 text-muted-foreground">{pay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 2: Requirements Table ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Exact Photo & Signature Upload Requirements</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Requirement</th>
                    <th className="text-left p-3 font-semibold text-blue-600 dark:text-blue-400">Photograph</th>
                    <th className="text-left p-3 font-semibold text-violet-600 dark:text-violet-400">Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Format', 'JPEG / JPG only', 'JPEG / JPG only'],
                    ['Max Size', '20KB', '10KB'],
                    ['Recommended Dimensions', '200 × 230 pixels', '140 × 60 pixels'],
                    ['Background', 'Plain white or off-white', 'White paper'],
                    ['Photo Age', 'Within 3 months', 'Recent'],
                    ['Face Rules', 'No glasses, cap, or covering', 'Black/dark blue ink only'],
                  ].map(([req, photo, sig]) => (
                    <tr key={req} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-muted-foreground">{req}</td>
                      <td className="p-3 text-foreground">{photo}</td>
                      <td className="p-3 text-foreground">{sig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 3: CHSL-Specific Rejection Reasons ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Why SSC CHSL Photos Get Rejected</h2>
            <p className="text-sm text-muted-foreground mb-5">
              CHSL sees the highest application volume among all SSC exams — server-side validation is strict:
            </p>
            <div className="space-y-3">
              {[
                { icon: '❌', title: 'PNG file uploaded as JPEG', body: 'CHSL portal performs a file-header check, not just extension check. PNG files renamed to .jpg are rejected with "invalid format". Convert with our PNG→JPG tool first.' },
                { icon: '❌', title: 'File saved from WhatsApp or social media', body: 'Photos forwarded through WhatsApp get re-encoded and often exceed the allowed compression range. Start from the original file on your camera roll or get a fresh scan.' },
                { icon: '❌', title: 'Photo not in colour', body: 'Unlike many state exams, SSC CHSL requires a colour photograph. Black and white or monochrome photos are rejected at document verification, not at the portal — making it a costly late-stage error.' },
                { icon: '❌', title: 'Signature on lined or graph paper', body: 'SSC CHSL signature must be on plain white paper only. Lined notebook paper backgrounds are visible in scans and can lead to signature rejection during document verification.' },
                { icon: '❌', title: 'Photo taken more than 3 months ago', body: 'If your 2024 photo is still on your phone and looks fine — do not use it. The 3-month rule is enforced physically at the regional SSC office when you present documents. Rejection at that stage means you lose the opportunity even after clearing the exam.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 flex gap-3">
                  <span className="flex-shrink-0 text-lg">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 4: Related Tools — Contextual ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Tools for Your SSC CHSL Application</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-20kb-ssc', badge: '20KB', title: 'Resize to 20KB (All SSC)', desc: 'Generic SSC compressor for all exam portals', tag: 'Core Tool' },
                { href: '/resize-signature-ssc', badge: 'SIG', title: 'Signature Resizer for SSC', desc: 'Compress signature to 10KB for CHSL portal', tag: 'Required' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Convert before compressing if your photo is PNG', tag: 'Format Fix' },
                { href: '/photo-upload-failed-ssc-fix', badge: '🛠', title: 'Fix SSC Photo Upload Errors', desc: 'Portal rejecting after compression? Full fix guide', tag: 'Problem Fix' },
                { href: '/resize-image-for-ssc-cgl', badge: 'CGL', title: 'Resize Image for SSC CGL', desc: 'Applying for CGL too? Same 20KB specs, different posts', tag: 'Related Exam' },
                { href: '/resize-image-for-ssc-mts', badge: 'MTS', title: 'Resize Image for SSC MTS', desc: 'SSC MTS Havaldar 2026 — 10th pass exam guide', tag: 'Related Exam' },
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

          <FAQSection faqs={faqs} subtitle="Frequently asked questions from SSC CHSL applicants about photo specifications and the portal." />

          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
