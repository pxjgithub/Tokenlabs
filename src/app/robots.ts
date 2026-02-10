import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['Baiduspider', 'Sogou web spider', '360Spider', 'YisouSpider'],
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/manifest.webmanifest',
          '/icon',
          '/*.json',
        ],
      },
      {
        userAgent: ['GPTBot', 'CCBot', 'Google-Extended', 'Bingbot'],
        allow: '/',
      }
    ],
    sitemap: 'https://tokenlabs.me/sitemap.xml',
  };
}
