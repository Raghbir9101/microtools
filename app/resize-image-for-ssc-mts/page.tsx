import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'SSC MTS Photo Resize Tool (20KB) — MTS + Havaldar Upload Fix | 2026',
  description:
    'Compress your photo to exactly 20KB for SSC MTS (Multi Tasking Staff) & Havaldar 2026. Covers Havaldar PET/PST physical standards, CBIC/CBN departments, 10th pass requirements, and rejection fixes. Free, browser-based.',
  keywords:
    'SSC MTS photo size 2026, SSC Havaldar photo 20kb, resize image SSC MTS, SSC MTS photo upload failed, SSC multitasking staff image size, MTS Havaldar PET PST photo, compress photo SSC MTS 2026',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-ssc-mts',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-ssc-mts' },
  },
  openGraph: {
    title: 'Resize Image for SSC MTS 2026 — 20KB Photo (MTS Havaldar Application)',
    description:
      'Compress photo to 20KB for SSC MTS & Havaldar 2026. Physical test standards, CBIC/CBN department details, rejection causes covered.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image for SSC MTS 2026 — 20KB Photo (Havaldar Included)',
    description: 'SSC MTS & Havaldar photo failing? Compress to 20KB. PET/PST standards, rejection fixes, upload guide.',
    images: ['/opengraph-image'],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Resize Image for SSC MTS 2026', item: `${SITE_URL}/resize-image-for-ssc-mts` },
  ],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SSC MTS Havaldar Photo Compressor — 20KB',
  url: `${SITE_URL}/resize-image-for-ssc-mts`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Free tool to compress JPEG photos to 20KB for SSC MTS and Havaldar 2026 application forms.',
};

const faqs = [
  {
    question: 'What is the SSC MTS 2026 photo requirement?',
    answer:
      'SSC MTS 2026 requires: JPEG/JPG format only, maximum 20KB file size, 200×230 pixels recommended, plain white or off-white background, recent photo taken within 3 months, front-facing, no cap, no glasses. The photo requirement is the same for both the MTS (Multi Tasking Staff) post and the Havaldar (CBIC/CBN) post.',
  },
  {
    question: 'What is the difference between SSC MTS and SSC Havaldar?',
    answer:
      'SSC MTS conducts recruitment for two distinct posts: (1) Multi Tasking Staff (MTS) — office support roles in central government ministries, cleaning, records, delivery, guard duties. (2) Havaldar — uniformed posts in Central Board of Indirect Taxes and Customs (CBIC) and Central Bureau of Narcotics (CBN). Havaldar posts require passing a Physical Efficiency Test (PET) and Physical Standard Test (PST), which MTS posts do not. Both are applied on the same form.',
  },
  {
    question: 'What are the Havaldar physical standards (PET/PST) for SSC MTS 2026?',
    answer:
      'SSC MTS Havaldar Physical Standard Test (PST): Height — 157.5 cm (male), 152 cm (female); Chest (male only) — 76 cm unexpanded, 81 cm expanded. Physical Efficiency Test (PET): Male — walk 1600m in 15 minutes; Female — walk 1 km in 20 minutes. Candidates with PH/Ex-SM relaxations may have modified standards. PST/PET is only for those who selected Havaldar post.',
  },
  {
    question: 'What education qualification is needed for SSC MTS 2026?',
    answer:
      'SSC MTS only requires Matriculation (Class 10) from a recognised board — no 12th pass or graduation needed. This makes it the most accessible SSC exam and one of the most competitive by application count. For the Havaldar post in CBIC/CBN, the same 10th pass qualification applies but you must also pass the physical test.',
  },
  {
    question: 'How many stages does SSC MTS 2026 have?',
    answer:
      'SSC MTS 2026 has two stages: (1) Session 1 CBT — numerical and mathematical ability, reasoning. (2) Session 2 CBT — general awareness, English language. Candidates who qualify both sessions are shortlisted for document verification and PET/PST (for Havaldar posts only). There is no mains/descriptive paper unlike CGL or CHSL.',
  },
  {
    question: 'Can I apply for both MTS and Havaldar in the same application?',
    answer:
      'Yes — when filling the SSC MTS application, you can select your post preference: MTS only, Havaldar only, or both MTS and Havaldar. All candidates must upload the same 20KB JPEG photo and 10KB signature regardless of post choice. If you chose Havaldar, you must meet the PET/PST physical standards during later stages.',
  },
  {
    question: 'Why did my SSC MTS photo get rejected even though I met the 20KB limit?',
    answer:
      'The size limit is just one of several checks: (1) File is not a genuine JPEG (PNG renamed to .jpg). (2) Photo is in CMYK color mode instead of RGB. (3) Dimensions are below the minimum 100×130 pixels. (4) Background is grey, blue, or patterned — the SSC server does not always catch this at upload, but document verification will. Our tool generates a clean Canvas API JPEG that passes all server-side checks.',
  },
  {
    question: 'I am applying for SSC MTS but I am also appearing for SSC CGL this year — can I use the same photo?',
    answer:
      'Yes — if the photo was taken within 3 months and meets all specs (20KB JPEG, white background), you can use the same compressed file for multiple SSC exams. Keep the original uncompressed photo saved so you can re-compress fresh for each application — do not re-compress an already-compressed 20KB file.',
  },
];

export default function PageSSCMTS() {
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
            <span className="text-foreground font-medium">SSC MTS Havaldar Photo — 20KB Compressor</span>
          </nav>

          <AdSlot variant="top" />

          {/* H1 — tight */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-xs font-semibold mb-3 border border-orange-200 dark:border-orange-800">
              🏛️ SSC MTS 2026 · MTS + Havaldar (CBIC / CBN)
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              SSC MTS Photo Resize Tool — Fix 20KB Upload Error (MTS &amp; Havaldar)
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Compress photo to exactly <strong>20KB for SSC MTS + Havaldar 2026</strong>. Works for both MTS (10th pass) and Havaldar (CBIC/CBN) posts. Havaldar PET/PST physical standards also covered below.
            </p>
          </div>

          {/* ─── TOOL — ABOVE THE FOLD ─── */}
          <div className="mb-10">
            <CompressorTool
              title="Compress Photo / Signature for SSC MTS 2026"
              description="Upload your JPEG. Compressed to exactly 20KB (photo) or 10KB (signature) — guaranteed to pass SSC MTS portal validation."
              options={[
                { size: 20, label: 'Photo — 20KB (SSC MTS)', description: 'Standard SSC MTS 2026 photograph requirement' },
                { size: 10, label: 'Signature — 10KB (SSC MTS)', description: 'Standard SSC MTS 2026 signature requirement' },
                { size: 18, label: 'Photo — 18KB (safe margin)', description: 'Use if 20KB is still getting rejected' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          {/* ── SECTION 1: Photo Requirements ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">SSC MTS 2026 — Photo & Signature Specifications</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Requirement</th>
                    <th className="text-left p-3 font-semibold text-orange-600 dark:text-orange-400">Photograph</th>
                    <th className="text-left p-3 font-semibold text-violet-600 dark:text-violet-400">Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Format', 'JPEG / JPG only', 'JPEG / JPG only'],
                    ['Max File Size', '20KB', '10KB'],
                    ['Recommended Dimensions', '200 × 230 pixels', '140 × 60 pixels'],
                    ['Background', 'White or off-white', 'White paper'],
                    ['Age of Photo', 'Within 3 months', 'Recent'],
                    ['Face Requirements', 'No glasses, no cap, no mask', 'Black/dark blue ink only'],
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

          {/* ── SECTION 2: Havaldar Physical Standards ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Havaldar (CBIC / CBN) Physical Test — PET & PST Standards</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Only for candidates who opted for the Havaldar post. Photo upload is identical for all — but be aware of these post-exam physical requirements:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20">
                <h3 className="font-bold text-foreground text-sm mb-3">Physical Standard Test (PST)</h3>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li><span className="font-semibold text-foreground">Male height:</span> Minimum 157.5 cm</li>
                  <li><span className="font-semibold text-foreground">Female height:</span> Minimum 152 cm</li>
                  <li><span className="font-semibold text-foreground">Male chest:</span> 76 cm unexpanded / 81 cm expanded</li>
                  <li><span className="font-semibold text-foreground">Female chest:</span> Not applicable</li>
                  <li className="pt-1 text-[10px] italic">Relaxations exist for SC/ST hill area candidates</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20">
                <h3 className="font-bold text-foreground text-sm mb-3">Physical Efficiency Test (PET)</h3>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li><span className="font-semibold text-foreground">Male:</span> Walk 1,600 metres in 15 minutes</li>
                  <li><span className="font-semibold text-foreground">Female:</span> Walk 1,000 metres in 20 minutes</li>
                  <li><span className="font-semibold text-foreground">Ex-Servicemen:</span> Modified standards apply</li>
                  <li><span className="font-semibold text-foreground">PwD:</span> Exempt from PET/PST</li>
                  <li className="pt-1 text-[10px] italic">PET is qualifying only — not merit-based</li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20 text-xs text-muted-foreground">
              ⚠️ <span className="font-semibold text-foreground">Important:</span> If you fail the PET/PST, you are dropped from Havaldar but may still be considered for MTS based on CBT merit — only if you had selected both posts during application.
            </div>
          </section>

          {/* ── SECTION 3: MTS vs Havaldar Post Comparison ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">MTS vs Havaldar — Which Post Is Right for You?</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Factor</th>
                    <th className="text-left p-3 font-semibold text-blue-600 dark:text-blue-400">MTS (Multi Tasking Staff)</th>
                    <th className="text-left p-3 font-semibold text-orange-600 dark:text-orange-400">Havaldar (CBIC / CBN)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Department', 'Central Ministries, Departments', 'CBIC (Customs) / CBN (Narcotics)'],
                    ['Nature of Work', 'Office support, records, cleaning', 'Uniformed guard / physical duty'],
                    ['Physical Test', 'None', 'PET + PST mandatory'],
                    ['Pay Level', 'Level 1 (₹18,000)', 'Level 1 (₹18,000)'],
                    ['Posting', 'Across India, mostly cities', 'Ports, airports, borders, narcotics offices'],
                    ['Promotion Path', 'Upper Division Clerk (UDC)', 'Sepoy → Head Havaldar'],
                  ].map(([factor, mts, havaldar]) => (
                    <tr key={factor} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-muted-foreground">{factor}</td>
                      <td className="p-3 text-foreground">{mts}</td>
                      <td className="p-3 text-foreground">{havaldar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 4: Related Tools — Contextual ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Tools to Complete Your SSC MTS Application</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-20kb-ssc', badge: '20KB', title: 'Resize to 20KB (All SSC)', desc: 'Generic 20KB compressor for any SSC portal', tag: 'Core Tool' },
                { href: '/resize-signature-ssc', badge: 'SIG', title: 'Signature Resizer for SSC', desc: 'Compress signature to 10KB for MTS portal', tag: 'Required' },
                { href: '/photo-upload-failed-ssc-fix', badge: '🛠', title: 'Fix SSC Upload Errors', desc: 'Portal keeps rejecting your file? Fix guide here', tag: 'Problem Fix' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Convert iPhone/screenshot photos to JPEG first', tag: 'Format Fix' },
                { href: '/resize-image-for-ssc-cgl', badge: 'CGL', title: 'Resize Image for SSC CGL', desc: 'Applying for CGL too? Same specs, graduation needed', tag: 'Related Exam' },
                { href: '/resize-image-for-ssc-chsl', badge: 'CHSL', title: 'Resize Image for SSC CHSL', desc: 'CHSL for 12th pass — LDC, PA, DEO posts', tag: 'Related Exam' },
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

          <FAQSection faqs={faqs} subtitle="Frequently asked questions from SSC MTS and Havaldar applicants." />

          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
