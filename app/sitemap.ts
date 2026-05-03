import { MetadataRoute } from 'next';

/**
 * Konfigurasi Sitemap 0xTanda.
 * Digunakan oleh mesin pencari (Google, Bing) untuk memetakan seluruh halaman website.
 * Domain utama diset ke: https://www.0xtanda.xyz
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.0xtanda.xyz';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, // Halaman utama memiliki prioritas tertinggi
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Katalog produk sangat penting untuk SEO
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terminal-log`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8, // Terminal Log (Menu Daftar Artikel)
    },
    {
      // Artikel 1: Phygital Fashion
      url: `${baseUrl}/terminal-log/phygital-fashion-indonesia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85, 
    },
    {
      // Artikel 2: Tutorial Klaim NFT
      url: `${baseUrl}/terminal-log/cara-klaim-nft`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85, 
    },
    {
      // Artikel 3: Digital Twin NFT
      url: `${baseUrl}/terminal-log/digital-twin-nft`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85, 
    },
    {
      // Artikel 4: Psikologi Koleksi
      url: `${baseUrl}/terminal-log/psikologi-koleksi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85, 
    },
    {
      // Artikel 5: Stoikisme dalam Fashion
      url: `${baseUrl}/terminal-log/stoikisme-dalam-fashion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85, 
    },
    {
      // Artikel Edukasi: Phygital Anti Palsu
      url: `${baseUrl}/journal/phygital-anti-palsu`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85, 
    },
    {
      url: `${baseUrl}/verify`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      // Halaman Form Verifikasi
      url: `${baseUrl}/verify/pageform`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      // Detail produk utama (Genesis Boxy Tee)
      url: `${baseUrl}/product/genesis-boxy-tee`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}