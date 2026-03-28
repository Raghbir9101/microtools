import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import YoutubeThumbnailTool from '@/components/YoutubeThumbnailTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Download YouTube Thumbnail in HD — Free 1280×720 Downloader',
  description:
    'Download YouTube video thumbnails in maximum HD quality (1280×720). Paste any YouTube URL and get the highest resolution thumbnail image instantly. Free, no login.',
  keywords:
    'download youtube thumbnail hd, youtube thumbnail downloader 1280x720, get youtube video thumbnail, youtube thumbnail url, maxresdefault thumbnail download, youtube video cover image download',
  alternates: {
    canonical: 'https://tools.draftly.co.in/download-youtube-thumbnail-hd',
    languages: { 'en-IN': 'https://tools.draftly.co.in/download-youtube-thumbnail-hd' },
  },
  openGraph: {
    title: 'Download YouTube Thumbnail in HD (1280×720) — Free',
    description: 'Get the maximum resolution thumbnail for any YouTube video. Paste URL, download HD thumbnail instantly.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the maximum YouTube thumbnail resolution I can download?',
    answer:
      'YouTube offers thumbnails in multiple resolutions: 120×90 (default), 320×180 (medium), 480×360 (high), 640×480 (standard), and 1280×720 (maxresdefault — HD). Our tool attempts to fetch the highest available resolution first.',
  },
  {
    question: 'Why does "maxresdefault" sometimes not work for some videos?',
    answer:
      'Not all YouTube videos have an HD custom thumbnail uploaded by the creator. If the creator did not upload a custom thumbnail, only the auto-generated lower-resolution thumbnails (120×90, 320×180, 480×360) are available.',
  },
  {
    question: 'Can I use downloaded YouTube thumbnails for my own content?',
    answer:
      'YouTube thumbnails are copyrighted by the video creator. Downloading is allowed for personal use (reference, archiving). Using another creator\'s thumbnail commercially or claiming it as your own is copyright infringement. Always create original thumbnails for your own videos.',
  },
  {
    question: 'How do I find the thumbnail URL for a YouTube video manually?',
    answer:
      'The URL pattern is: https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg — replace [VIDEO_ID] with the video ID from the YouTube URL (the part after v=). Our tool does this automatically for any pasted YouTube link.',
  },
  {
    question: 'Can I download thumbnails for YouTube Shorts?',
    answer:
      'Yes. YouTube Shorts have thumbnails too, typically at 360×270 resolution. Paste the YouTube Shorts URL into this tool and the thumbnail will be fetched.',
  },
  {
    question: 'What format are YouTube thumbnails in?',
    answer:
      'YouTube thumbnails are JPEG (.jpg) format. You can use our JPG to PNG converter to convert to PNG if needed for transparent background editing.',
  },
];

export default function PageYTThumbnailHD() {
  const relatedTools = getRelatedTools([
    'youtube-thumbnail-downloader',
    'instagram-image-resizer',
    'image-crop',
    'jpg-to-png',
  ]);

  return (
    <ToolLayout
      h1="Download YouTube Thumbnail in HD Quality"
      intro="Download YouTube video thumbnails in the highest available resolution — up to 1280×720 HD (maxresdefault quality). Paste any YouTube video URL and our tool instantly fetches all available thumbnail sizes. No login, no software, works for all YouTube videos including Shorts. The downloaded thumbnail is a standard JPEG that you can use as reference for your own thumbnail design."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <YoutubeThumbnailTool />
    </ToolLayout>
  );
}
