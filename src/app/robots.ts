import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: ['GPTBot', 'CCBot', 'Google-Extended', 'Bingbot'],
        allow: '/',
      }
    ],
    sitemap: 'https://tokenlabs.me/sitemap.xml',
  };
}
