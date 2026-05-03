import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // Mengizinkan semua bot search engine (Google, Bing, Yahoo, dll)
      userAgent: '*',
      allow: '/',
    },
    // PERBAIKAN: Menambahkan 'www.' agar persis dengan domain utama lu di GSC
    sitemap: 'https://www.0xtanda.xyz/sitemap.xml',
  };
}