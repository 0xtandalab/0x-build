"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

// ============================================================================
// MOCK COMPONENTS (Untuk Preview Canvas)
// ============================================================================
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);
const Image = ({ src, alt, className, fill, sizes }: any) => {
  if (fill) {
    return <img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-cover ${className || ''}`} sizes={sizes} />;
  }
  return <img src={src} alt={alt} className={className} sizes={sizes} />;
};
// ============================================================================

const ARTICLES = [
  {
    id: "01",
    title: "Apa Itu Phygital Fashion? Panduan Lengkap untuk Memahami Phygital | 0xTanda",
    excerpt: "Dunia fashion perlahan sedang memasuki era baru. Membedah secara mendalam apa itu Phygital, teknologi blockchain di baliknya, dan mengapa inovasi ini mengubah cara kita menghargai pakaian.",
    date: "14 Maret 2026",
    category: "Editorial",
    slug: "phygital-fashion-indonesia", 
    image: "/article/cover-phygital-fashion.png",
    accentColor: "text-[#836EF9]",
    borderColor: "hover:border-[#836EF9]/50",
    glowColor: "bg-[#836EF9]/5"
  },
  {
    id: "02",
    title: "Cara Klaim NFT Fashion 0xTanda: Panduan Lengkap Step-by-Step",
    excerpt: "Memasuki dunia Web3 dan blockchain sering kali terasa menakutkan bagi pemula. Melalui protokol Concierge Airdrop kami, mengklaim Digital Twin kini semudah mengisi formulir daring biasa.",
    date: "15 Maret 2026",
    category: "Tutorial & Guide",
    slug: "cara-klaim-nft", 
    image: "/article/cover-tutorial-klaim.png",
    accentColor: "text-[#00FF9D]",
    borderColor: "hover:border-[#00FF9D]/50",
    glowColor: "bg-[#00FF9D]/5"
  },
  {
    id: "03",
    title: "Digital Twin NFT 0xTanda — Apa yang Kamu Dapatkan Saat Beli | 0xTanda",
    excerpt: "Setiap produk 0xTanda datang dengan Digital Twin NFT. Masuk ke dalam sebuah ekosistem phygital yang dirancang untuk memberikan transparansi dan fungsi nyata bagi pemilik karya seni.",
    date: "16 Maret 2026",
    category: "Deep Dive",
    slug: "digital-twin-nft", 
    image: "/article/cover-digital-twin-utility.jpg", 
    accentColor: "text-[#38BDF8]",
    borderColor: "hover:border-[#38BDF8]/50",
    glowColor: "bg-[#38BDF8]/5"
  },
  {
    id: "04",
    title: "Psikologi di Balik Mengoleksi: Mengapa Kita Menghargai Kelangkaan dan Otentisitas?",
    excerpt: "Memahami nilai psikologis dari barang langka dan otentik. Mengapa sebuah kanvas dengan coretan cat bisa bernilai ribuan kali lipat lebih tinggi dibandingkan kanvas kosong?",
    date: "17 Maret 2026",
    category: "Editorial",
    slug: "psikologi-koleksi", 
    image: "/article/cover-psikologi-koleksi.png", 
    accentColor: "text-[#F43F5E]", 
    borderColor: "hover:border-[#F43F5E]/50",
    glowColor: "bg-[#F43F5E]/5"
  },
  {
    id: "05",
    title: "Stoikisme dalam Fashion: Seni Berpakaian dengan Kesadaran di Era Konsumerisme",
    excerpt: "Di tengah tren mingguan dan validasi media sosial, fashion seringkali menjadi sumber kecemasan. Temukan ketenangan melalui perspektif radikal filosofi Yunani Kuno.",
    date: "18 Maret 2026",
    category: "Editorial",
    slug: "stoikisme-dalam-fashion", 
    image: "/article/stoikisme-cover.png", 
    accentColor: "text-[#F59E0B]", // Warna Aksen Amber
    borderColor: "hover:border-[#F59E0B]/50",
    glowColor: "bg-[#F59E0B]/5"
  }
];

export default function TerminalLogMenu() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] font-sans selection:bg-[#836EF9] selection:text-black">
      <header className="pt-40 pb-16 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[#836EF9]/5 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-[#836EF9]">
              <Terminal size={20} />
              <span className="font-mono text-xs font-bold tracking-[0.4em] uppercase">System_Log</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Terminal <span className="text-[#836EF9]">Log</span></h1>
          </div>
          <p className="text-neutral-500 font-mono text-[10px] tracking-widest uppercase pb-2">
            Archive Transmissions // <br className="hidden md:block"/> Editorial & Insights
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {ARTICLES.map((article, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={article.id}
              className="relative"
            >
              <div className={`absolute inset-0 blur-[100px] ${article.glowColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              <Link 
                href={`/terminal-log/${article.slug}`} 
                className={`group flex flex-col md:flex-row gap-8 bg-[#121212] border border-white/5 p-6 md:p-8 rounded-sm transition-all duration-500 relative z-10 ${article.borderColor}`}
              >
                <div className="w-full md:w-[40%] lg:w-[35%] aspect-[16/10] md:aspect-square relative bg-black border border-white/5 overflow-hidden rounded-sm shrink-0">
                  <Image src={article.image} fill sizes="(max-width: 768px) 100vw, 400px" alt={article.title} className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                  <div className={`absolute inset-0 ${article.glowColor} mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity`}></div>
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[9px] text-white border border-white/10 uppercase tracking-widest">
                    ISSUE_{article.id}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${article.accentColor}`}>
                      {article.category}
                    </span>
                    <span className="text-neutral-600 text-[10px] font-mono uppercase tracking-widest">
                      // {article.date}
                    </span>
                  </div>
                  <h2 className={`text-2xl md:text-3xl font-bold text-white uppercase tracking-tight leading-tight mb-4 transition-colors duration-300 group-hover:${article.accentColor.split('[')[0]}[${article.accentColor.split('[')[1]}`}>
                    {article.title}
                  </h2>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-8 font-light">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-white font-bold uppercase tracking-widest mt-auto border-t border-white/5 pt-6">
                    READ TRANSMISSION <ArrowRight size={14} className={`group-hover:translate-x-2 transition-transform duration-300 ${article.accentColor}`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.6em]">
          End of Archive Transmissions // 0xTanda Security Node
        </p>
      </footer>
    </main>
  );
}