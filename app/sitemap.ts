import type { MetadataRoute } from 'next';

const BASE_URL = 'https://tools.draftly.co.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages with priority
  const pages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Live image tools — high priority
    {
      url: `${BASE_URL}/resize-image-10kb`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resize-image-20kb`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resize-image-20kb-ssc`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resize-image-50kb`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resize-image-50kb-upsc`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resize-image-100kb`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resize-image-100kb-railway`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // Placeholder pages — lower priority
    {
      url: `${BASE_URL}/background-remover`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return pages;
}
