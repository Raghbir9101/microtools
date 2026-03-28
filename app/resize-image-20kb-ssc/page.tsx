import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'Compress SSC Photo to 20KB — Instant Fix (CGL, CHSL, MTS) 2026',
  description:
    'Compress SSC photo to 20KB instantly. Covers CGL (biometric), CHSL (LDC/PA), MTS (Havaldar), CPO, GD Constable — one page with all exam specs, rejection causes, and exact 2026 rules. Free, browser-based.',
  keywords:
    'SSC photo 20kb, resize image for SSC, SSC CGL photo size 2026, SSC CHSL photo compress, SSC MTS photo 20kb, SSC CPO image size, SSC GD photo upload',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-20kb-ssc',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-20kb-ssc' },
  },
  openGraph: {
    title: 'SSC Photo Resize — 20KB for All Exams (CGL, CHSL, MTS, CPO, GD)',
    description: 'Drop photo → 20KB instantly. Covers all SSC exams with exam-specific specs, rejection causes, and 2026 rules.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'SSC Photo Resize — 20KB for All Exams',
    url: `${SITE_URL}/resize-image-20kb-ssc`,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    description: 'Free browser tool to compress SSC photos to 20KB. Covers CGL, CHSL, MTS, CPO, GD Constable.',
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compress Image to 20KB', item: `${SITE_URL}/resize-image-20kb` },
      { '@type': 'ListItem', position: 3, name: 'SSC — 20KB', item: `${SITE_URL}/resize-image-20kb-ssc` },
    ],
  },
];

const faqs = [
  {
    question: 'What is the exact photo size for SSC CGL 2026?',
    answer: 'SSC CGL 2026 requires: photo max 20KB, JPEG format, white or light background, 3.5×4.5cm (200×230px recommended), recent (within 3 months). Signature max 10KB, JPEG, 140×60px.',
  },
  {
    question: 'What is the exact photo size for SSC CHSL 2026?',
    answer: 'SSC CHSL requires photo max 20KB, JPEG, white background. Same as CGL. Signature max 10KB. Always verify with your specific CHSL notification — cut-off dates differ across LDC, PA/SA, DEO, and JSA posts.',
  },
  {
    question: 'What is the exact photo size for SSC MTS 2026?',
    answer: 'SSC MTS (including Havaldar) requires photo max 20KB, JPEG, white background, signature max 10KB. For Havaldar posts there is also a PET/PST physical standard — the photo requirement is identical to MTS.',
  },
  {
    question: 'My SSC portal rejected my photo — what do I check first?',
    answer: 'In order: (1) File is genuinely under 20KB — not 20.1KB. (2) File is real JPEG, not a renamed PNG. (3) Background is plain white. (4) Photo is not WhatsApp-forwarded. (5) Dimensions are within 3.5×4.5cm. This tool + PNG→JPG converter fixes causes 1 and 2.',
  },
  {
    question: 'Can I use this for SSC signature compression too?',
    answer: 'Yes — use this tool and select 10KB. Or use our dedicated Signature Resizer at /resize-signature for 10KB + 20KB options with signature-specific guidance.',
  },
  {
    question: 'Does the SSC portal check for eyeglasses or accessories?',
    answer: 'Yes. SSC guidelines prohibit spectacles, tinted lenses, and head coverings (except for religious reasons). Even prescription glasses are disallowed in the official photo. The portal does not auto-detect this — it is checked at document verification.',
  },
];

export default function PageSSC() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/resize-image-20kb" className="hover:text-foreground transition-colors">20KB Compressor</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">SSC — All Exams</span>
          </nav>

          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-3 border border-emerald-200 dark:border-emerald-800">
              ⚡ Drop photo → 20KB instantly · CGL · CHSL · MTS · CPO · GD
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              SSC Photo Resize — 20KB for All Exams
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Drop your photo and it compresses to <strong>exactly 20KB</strong> automatically.
              Covers <strong>SSC CGL, CHSL, MTS, CPO, GD Constable, JHT</strong> — all with exam-specific specs below.
            </p>
          </div>

          {/* ─── TOOL — ABOVE THE FOLD ─── */}
          <div className="mb-10">
            <CompressorTool
              autoCompress
              portalContext="ssc"
              title="Drop SSC Photo → 20KB Instantly"
              description="Drop or select your photo. Compresses to 20KB JPEG immediately — no button click. Works for all SSC exam portals."
              options={[{ size: 20, label: 'Auto — 20KB', description: 'SSC CGL · CHSL · MTS · CPO · GD Constable · JHT' }]}
            />
          </div>

          <AdSlot variant="section" />

          {/* Master requirements table */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">SSC Photo Requirements — All Exams, 2026</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Exam</th>
                    <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">Photo</th>
                    <th className="text-left p-3 font-semibold text-blue-600 dark:text-blue-400">Signature</th>
                    <th className="text-left p-3 font-semibold text-foreground">Format</th>
                    <th className="text-left p-3 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SSC CGL 2026', '20KB', '10KB', 'JPEG', 'Biometric tie-up — exact match required at exam centre'],
                    ['SSC CHSL 2026', '20KB', '10KB', 'JPEG', 'LDC · PA/SA · DEO · JSA — same photo rules across all'],
                    ['SSC MTS + Havaldar', '20KB', '10KB', 'JPEG', 'Havaldar has PET/PST — photo rule identical to MTS'],
                    ['SSC CPO 2026', '20KB', '10KB', 'JPEG', 'Delhi Police + CAPF — must pass medical; photo used for ID'],
                    ['SSC GD Constable', '20KB', '10KB', 'JPEG', 'State-wise PST/PET — photo used across all stages'],
                    ['SSC JHT / Stenographer', '20KB', '10KB', 'JPEG', 'Same standard as CGL/CHSL'],
                  ].map(([exam, photo, sig, fmt, note]) => (
                    <tr key={exam as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-semibold text-foreground text-xs">{exam}</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold text-xs">{photo}</td>
                      <td className="p-3 text-blue-600 dark:text-blue-400 font-semibold text-xs">{sig}</td>
                      <td className="p-3 text-muted-foreground text-xs">{fmt}</td>
                      <td className="p-3 text-muted-foreground text-xs leading-snug">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CGL-specific section */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3">SSC CGL — Specific Rules</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="font-semibold text-foreground text-sm mb-2">📸 Photo requirements</p>
                <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
                  <li>• Max 20KB, JPEG, white/off-white background</li>
                  <li>• 3.5×4.5 cm (200×230px), face covers 70–80%</li>
                  <li>• No spectacles, no tinted lenses</li>
                  <li>• Taken within 3 months of application date</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20">
                <p className="font-semibold text-foreground text-sm mb-2">⚠️ CGL biometric note</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  CGL uses biometric verification at exam centres. The photo submitted online is cross-checked against your face. Use a <strong>clear, recent photo in good lighting</strong>. Studio-quality compressed photos work best.
                </p>
              </div>
            </div>
          </section>

          {/* CHSL-specific section */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3">SSC CHSL — Post-Specific Notes</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Post</th>
                    <th className="text-left p-3 font-semibold text-foreground">Department</th>
                    <th className="text-left p-3 font-semibold text-foreground">Photo Rule</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['LDC (Lower Division Clerk)', 'Various central govt depts', '20KB JPEG'],
                    ['PA/SA (Postal/Sorting Asst)', 'Dept of Posts', '20KB JPEG — used on postal ID card'],
                    ['DEO (Data Entry Operator)', 'Various depts', '20KB JPEG'],
                    ['JSA (Junior Secretariat Asst)', 'Armed forces HQ', '20KB JPEG'],
                  ].map(([post, dept, rule]) => (
                    <tr key={post as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-foreground text-xs">{post}</td>
                      <td className="p-3 text-muted-foreground text-xs">{dept}</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">{rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">CHSL Tier 1 and Tier 2 use the same photo — upload once during registration.</p>
          </section>

          {/* MTS-specific section */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3">SSC MTS + Havaldar — Key Differences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="font-semibold text-foreground text-sm mb-2">MTS (Multi-Tasking Staff)</p>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li>• Photo: 20KB JPEG, same specs</li>
                  <li>• Min age: 18 · Max age: 25 (OBC/SC/ST relaxation)</li>
                  <li>• Document verification: standard ID match</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/20">
                <p className="font-semibold text-foreground text-sm mb-2">Havaldar (CBIC/CBN)</p>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li>• Photo: 20KB JPEG — same as MTS</li>
                  <li>• PET required: 1600m run (M) / 1km run (F)</li>
                  <li>• PST: height/chest standards apply at physical</li>
                  <li>• Photo used for all stages including PST/PET</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rejection causes */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Why SSC Rejects Your Photo — Top 4 Causes</h2>
            <div className="space-y-3">
              {[
                { n: '1', c: 'bg-red-500', title: 'File over 20KB (byte-level check)', detail: 'Even 20.1KB fails. Our tool targets 18–20KB specifically to stay clearly under the threshold.' },
                { n: '2', c: 'bg-orange-500', title: 'PNG uploaded as .jpg extension', detail: 'The portal checks the actual file header, not the .jpg extension. Convert using PNG → JPG first, then compress here.' },
                { n: '3', c: 'bg-yellow-500', title: 'Photo taken more than 3 months ago', detail: 'Not caught at upload — rejected at document verification. Match your photo date to within 3 months of your form submission date.' },
                { n: '4', c: 'bg-blue-500', title: 'Coloured or patterned background', detail: 'SSC requires plain white or off-white (#F5F5F5 or whiter). Use our Background Remover to replace any background with white before compressing.' },
              ].map(item => (
                <div key={item.n} className={`flex gap-4 p-4 rounded-xl border border-border bg-muted/20`}>
                  <span className={`flex-shrink-0 ${item.c} text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mt-0.5`}>{item.n}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick links */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-image-20kb', badge: '20KB', title: 'Generic 20KB Compressor', desc: 'Same tool — for non-SSC portals', tag: 'Generic' },
                { href: '/resize-signature', badge: 'Sig', title: 'SSC Signature Resize (10KB)', desc: 'Compress scanned signature to 10KB', tag: 'Signature' },
                { href: '/photo-upload-failed-ssc-fix', badge: '🛠', title: 'SSC Photo Upload Failed — Fix', desc: 'Full troubleshooting for portal rejection errors', tag: 'Problem Fix' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Portal says "only JPG accepted"?', tag: 'Format Fix' },
                { href: '/background-remover', badge: 'BG', title: 'Background Remover', desc: 'Replace coloured background with white', tag: 'Background' },
                { href: '/image-size-checker', badge: '✓', title: 'Image Size Checker', desc: 'Verify the output is genuinely under 20KB', tag: 'Verify' },
              ].map(tool => (
                <Link key={tool.href} href={tool.href} className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all">
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

          <FAQSection faqs={faqs} subtitle="Common questions about SSC photo requirements for CGL, CHSL, MTS, CPO, and GD Constable 2026." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
