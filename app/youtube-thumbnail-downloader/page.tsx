import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import YoutubeThumbnailTool from '@/components/YoutubeThumbnailTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['youtube-thumbnail-downloader'];
export const metadata: Metadata = {
  title: 'YouTube Thumbnail Downloader — Download HD Thumbnails Free',
  description: 'Download YouTube video thumbnails in HD (1280×720), HQ, or SD quality. Paste any YouTube URL and get the thumbnail image free. No login, no software needed.',
  keywords: 'youtube thumbnail downloader, download youtube thumbnail, youtube video thumbnail, yt thumbnail download, youtube cover image download',
  alternates: { canonical: 'https://tools.draftly.co.in/youtube-thumbnail-downloader' },
  openGraph: { title: 'YouTube Thumbnail Downloader — HD Free', description: 'Get YouTube video thumbnails in HD quality. Paste URL and download instantly.', type: 'website', url: 'https://tools.draftly.co.in/youtube-thumbnail-downloader' },
};

const faqs = [
  { question: 'How do I download a YouTube thumbnail?', answer: 'Copy the URL of any YouTube video, paste it in the tool above, and click "Get Thumb". You\'ll see the thumbnail preview in multiple resolutions. Click "Download Thumbnail" to save it to your device.' },
  { question: 'What resolutions are available?', answer: 'HD (1280×720) — best quality available, HQ (480×360) — good for previews, MQ (320×180) — medium quality, and SD (120×90) — small. Not all videos have the highest resolution available — the tool automatically falls back to the best available.' },
  { question: 'Is downloading YouTube thumbnails legal?', answer: 'YouTube thumbnails are publicly visible images. Downloading them for personal use or reference is generally acceptable. Using downloaded thumbnails for commercial purposes without the creator\'s permission may violate copyright laws.' },
  { question: 'Does this work for YouTube Shorts and Playlists?', answer: 'Yes — it works for regular YouTube videos and YouTube Shorts. Playlist thumbnails are not supported as they don\'t have a standard thumbnail URL format.' },
];

export default function YoutubeThumbnailDownloader() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="YouTube Thumbnail Downloader — Get Any Video Thumbnail in HD Free"
      intro="Download the thumbnail image of any YouTube video in HD quality (1280×720px) or lower resolutions. Perfect for YouTubers checking competitors' thumbnails, content creators wanting inspiration, or anyone who needs the cover image of a YouTube video. Just paste the YouTube URL, choose your preferred quality, and download. Works for regular videos, YouTube Shorts, and all public videos."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <YoutubeThumbnailTool />
    </ToolLayout>
  );
}
