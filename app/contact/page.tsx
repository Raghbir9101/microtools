'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mail client with pre-filled data
    const mailto = `mailto:contact@draftly.co.in?subject=${encodeURIComponent(form.subject || 'Microtools Feedback')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="mb-10">
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">← Back to all tools</Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Contact Us</h1>
            <p className="text-sm text-muted-foreground">Questions, suggestions, bug reports — we read everything.</p>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="text-5xl">✅</div>
              <h2 className="text-xl font-bold text-foreground">Thanks for reaching out!</h2>
              <p className="text-sm text-muted-foreground">Your email client should have opened. If not, email us directly at <a href="mailto:contact@draftly.co.in" className="text-primary underline">contact@draftly.co.in</a></p>
              <Link href="/" className="inline-block mt-4 text-sm text-primary underline">← Go back to tools</Link>
            </div>
          ) : (
            <div className="space-y-6">

              {/* Quick contact options */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: '🐛', label: 'Bug Report' },
                  { icon: '💡', label: 'Suggest a Tool' },
                  { icon: '🤝', label: 'Partnership' },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, subject: item.label }))}
                    className={`p-3 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                      form.subject === item.label
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border bg-card text-muted-foreground hover:border-primary/40'
                    }`}
                  >
                    <div className="text-xl mb-1">{item.icon}</div>
                    {item.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Rahul Sharma"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="rahul@email.com"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1.5">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder="What is this about?"
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Describe your issue, suggestion, or question…"
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-sm hover:opacity-90 transition-all shadow-md"
                >
                  Send Message →
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Or email directly: <a href="mailto:contact@draftly.co.in" className="text-primary underline">contact@draftly.co.in</a>
                </p>
              </form>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
