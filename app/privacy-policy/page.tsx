import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Privacy Policy — Microtools',
  description: 'Learn how Microtools handles your data. All image processing happens in your browser — we never upload, store, or share your files.',
  alternates: { canonical: 'https://tools.draftly.co.in/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="mb-10">
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">← Back to all tools</Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
          </div>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">1. Overview</h2>
              <p>Microtools (&quot;we&quot;, &quot;our&quot;, &quot;the website&quot;) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information. We operate the website available at <strong>tools.draftly.co.in</strong>.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">2. Information We Collect</h2>
              <h3 className="font-semibold text-foreground mb-2">2a. Image & File Processing</h3>
              <p>For <strong>image resize/compression tools</strong>: All processing happens entirely in your browser using the HTML Canvas API. <strong>Your files are never uploaded to our servers, stored, or shared.</strong> We have no access to the images you compress or resize.</p>
              <p className="mt-3">For <strong>background removal</strong>: Images are temporarily sent to our server for AI processing, then immediately deleted from memory. We do not log, store, or share the content of your images.</p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">2b. Analytics</h3>
              <p>We use <strong>Vercel Analytics</strong> to understand which tools are used and general traffic patterns. This collects anonymous, aggregated data (page views, device type, country) and does not track individual users or use cookies.</p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">2c. Advertising</h3>
              <p>We use <strong>Google AdSense</strong> to display advertisements. Google may use cookies to serve ads based on your prior visits to this or other websites. You can opt out via <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google&apos;s Ad Settings</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">3. Cookies</h2>
              <p>Microtools itself does not set cookies. Third-party services (Google AdSense, Vercel Analytics) may set cookies in accordance with their own privacy policies. You can control cookie preferences in your browser settings.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">4. Data Retention</h2>
              <p>We do not store personal data. Images processed via background removal are held in server memory only for the duration of the request and discarded immediately after the response is sent.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">5. Third-Party Links</h2>
              <p>This website may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">6. Children&apos;s Privacy</h2>
              <p>Microtools is not directed at children under 13. We do not knowingly collect information from children. If you believe a child has provided personal information, please contact us and we will promptly delete it.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">8. Contact</h2>
              <p>If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-primary underline">contact us</Link>.</p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
