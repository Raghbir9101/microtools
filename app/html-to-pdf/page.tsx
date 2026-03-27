import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import HtmlToPdfTool from '@/components/HtmlToPdfTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['html-to-pdf'];

export const metadata: Metadata = {
  title: 'HTML to PDF Converter Online Free — Convert Webpage to PDF',
  description: 'Convert HTML code to PDF online free. Paste any HTML and download as a PDF document instantly. Browser-based, no server uploads, 100% private.',
  keywords: 'html to pdf converter, convert html to pdf online free, webpage to pdf, html code to pdf, online html pdf converter, free html to pdf',
  alternates: {
    canonical: 'https://tools.draftly.co.in/html-to-pdf',
    languages: { 'en-IN': 'https://tools.draftly.co.in/html-to-pdf' },
  },
  openGraph: {
    title: 'HTML to PDF Converter — Convert Webpage to PDF Free Online',
    description: 'Paste HTML code and convert to PDF instantly. No uploads, no registration. 100% browser-based.',
    type: 'website',
    url: 'https://tools.draftly.co.in/html-to-pdf',
  },
};

const faqs = [
  {
    question: 'How do I convert HTML to PDF?',
    answer: 'Paste your full HTML code (including <html>, <head>, and <body> tags) into the editor. Click "Convert & Print to PDF" — a new preview tab opens. In the print dialog, choose "Save as PDF" as the destination and click Save. Your HTML is converted to a PDF immediately.',
  },
  {
    question: 'Can I convert an entire webpage to PDF?',
    answer: 'Yes! Open the webpage in your browser, press Ctrl+U (or Cmd+U on Mac) to view its HTML source, copy all the code, and paste it into our tool. Then convert to PDF. This method works for any public webpage.',
  },
  {
    question: 'What HTML features are supported?',
    answer: 'Our tool renders standard HTML including headings, paragraphs, tables, lists, inline styles, and CSS. Complex JavaScript-powered pages may have limited support since the browser renders HTML before printing.',
  },
  {
    question: 'Is my HTML content private?',
    answer: 'Completely. All conversion happens locally in your browser — we never upload, store, or access your HTML or the resulting PDF. Your files and code stay on your device.',
  },
  {
    question: 'Why use "Print to PDF" instead of direct download?',
    answer: 'The browser\'s built-in print engine produces higher-quality PDF output with proper page breaks, fonts, and layout. The direct download method works for simple documents. For best results with complex layouts, always use "Convert & Print to PDF".',
  },
  {
    question: 'Can I add custom styles and fonts?',
    answer: 'Yes. Include your CSS within a <style> tag in the <head> section of your HTML. You can use Google Fonts by adding a <link> tag. All styles you embed in the HTML will be applied in the PDF.',
  },
  {
    question: 'How is this different from saving a webpage as PDF in browser?',
    answer: 'Our tool lets you edit and customize the HTML before converting. You can remove unnecessary sections like headers and footers, modify styles, or combine multiple HTML snippets into one clean document before saving as PDF.',
  },
];

export default function HtmlToPdfPage() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="HTML to PDF Converter — Free Online Tool"
      intro="Convert any HTML code to a PDF document instantly in your browser. Whether you need to save a webpage as PDF, convert an HTML report to a shareable document, or turn HTML email templates into printable files — our free tool handles it all. Simply paste your HTML, click convert, and save as PDF. No server uploads, no registration needed. Works entirely in your browser for complete privacy. Supports all standard HTML tags, inline CSS styles, tables, and formatted text. Ideal for developers, students, and anyone who needs to create professional PDF documents from HTML code."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <HtmlToPdfTool />
    </ToolLayout>
  );
}
