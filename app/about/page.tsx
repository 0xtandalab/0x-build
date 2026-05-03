"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion'; 

import { 
  Send, 
  MoveRight,
  ShieldCheck,
  Cpu,
  Fingerprint,
  Layers,
  Hexagon,
  Terminal,
  Copy,
  ExternalLink,
  CheckCircle2,
  Instagram
} from 'lucide-react';

/**
 * ============================================================================
 * MOCK NEXT.JS (Hanya untuk keperluan Preview di layar Canvas)
 * CATATAN UNTUK COPAS: 
 * Saat menyalin kode ini ke file project asli Anda (VSCode/Vercel), 
 * HAPUS bagian mock ini dan gunakan import bawaan Next.js berikut:
 *
 * import Link from 'next/link';
 * import Image from 'next/image';
 * ============================================================================
 */
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);
const Image = ({ src, alt, className, fill }: any) => {
  if (fill) {
    return <img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-cover ${className || ''}`} />;
  }
  return <img src={src} alt={alt} className={className} />;
};
// ============================================================================

/**
 * Komponen Ikon TikTok (Custom SVG)
 */
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

/**
 * Komponen Ikon X / Twitter (Custom SVG)
 */
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.486h2.039L6.448 3.288H4.26L17.607 20.64z" />
  </svg>
);

// --- VARIAN ANIMASI FRAMER MOTION ---
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function AboutPage() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x75c294c9f8576FDF882cAAEf9d4316589b638610";

  // Fungsi Copy disesuaikan agar berjalan lancar di segala browser/iframe
  const handleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = contractAddress;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-mono overflow-x-hidden relative">

      {/* SECTION 01: HEADER */}
      <section className="pt-48 px-6 pb-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[#836EF9]/5 blur-[120px] pointer-events-none rounded-full" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10"
        >
          <div className="max-w-3xl border-y border-white/10 py-10 px-4 relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#836EF9]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#836EF9]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#836EF9]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#836EF9]"></div>

            <p className="text-lg md:text-2xl text-white italic font-sans font-medium leading-relaxed tracking-wide">
              “Tangible craftsmanship you can feel, secured by digital ownership you can prove.”
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 02: TENTANG 0xTANDA */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex items-center gap-6 mb-12"
        >
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">Tentang 0xTanda</span>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8 text-neutral-400 text-sm md:text-base leading-relaxed uppercase tracking-widest"
        >
          <motion.p variants={fadeUpVariant}>
            Di era di mana segala hal dengan mudah diduplikasi dan dipalsukan, <strong className="text-white">0xTanda</strong> mengambil peran definitif sebagai infrastruktur otentisitas. Kami bukan sekadar label pakaian; kami adalah pelopor <span className="text-[#836EF9]">Phygital Streetwear</span> yang bertugas menjembatani kualitas fisik dunia nyata dengan kepastian teknologi. Peran mutlak kami adalah merancang garmen dengan presisi craftsmanship tingkat tinggi, lalu menyegel keasliannya melalui lapisan <span className="text-[#836EF9]">Digital Twin</span> (kembaran digital). Kami membangun ekosistem di mana setiap entitas fisik yang Anda kenakan senantiasa memiliki rekam jejak yang tak terhapus di Blockchain.
          </motion.p>
          <motion.p variants={fadeUpVariant}>
            Lantas, mengapa harus memilih 0xTanda? Karena Anda menolak tunduk pada kultur mode instan yang rapuh dan tanpa nilai historis. Anda memilih kami karena Anda menginginkan lebih dari sekadar pakaian—Anda menuntut pembuktian. Lapisan digital (NFT) yang kami sertakan bukanlah instrumen investasi kripto atau alat spekulasi, melainkan wujud apresiasi <span className="text-white">collector art</span> yang menjaga hak kepemilikan Anda secara transparan.
          </motion.p>
          <motion.p variants={fadeUpVariant} className="text-white">
            Bersama 0xTanda, Anda tidak hanya sekadar mengenakan apa yang nyaman dirasakan, tetapi juga mengamankan sebuah mahakarya, memiliki, dan berkembang seiring waktu.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 03: FILOSOFI */}
      <section className="py-32 bg-white/[0.02] px-6 border-y border-white/5 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex items-center gap-6 mb-16"
          >
            <div className="w-16 h-[1px] bg-[#836EF9]" />
            <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">Filosofi</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUpVariant} className="space-y-6 group">
              <div className="flex items-center gap-3 text-[#836EF9] group-hover:scale-110 transition-transform origin-left">
                <Cpu size={24}/> <h3 className="text-xl font-bold uppercase tracking-tighter">0x</h3>
              </div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
                Nol dan Huruf X ditulis dengan gaya huruf modern yang merepresentasikan kode heksadesimal dan teknologi digital.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeUpVariant} className="space-y-6 group">
              <div className="flex items-center gap-3 text-[#836EF9] group-hover:scale-110 transition-transform origin-left">
                <Fingerprint size={24}/> <h3 className="text-xl font-bold uppercase tracking-tighter">Tanda</h3>
              </div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
                Kata “Tanda” memaknai identitas, bukti, dan kepemilikan. Melambangkan bukti fisik yang terverifikasi secara absolut.
              </p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div variants={fadeUpVariant} className="space-y-6 group">
              <div className="flex items-center gap-3 text-[#836EF9] group-hover:scale-110 transition-transform origin-left">
                <Layers size={24}/> <h3 className="text-xl font-bold uppercase tracking-tighter">//</h3>
              </div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
                Garis miring ganda mencerminkan dua sisi yang berjalan bersamaan: fisik dan digital secara terstruktur.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 04: PRODUK & PENDEKATAN */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-b border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex items-center gap-6 mb-12"
        >
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">Produk & Pendekatan</span>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8 text-neutral-400 text-sm md:text-base leading-relaxed uppercase tracking-widest"
        >
          <motion.p variants={fadeUpVariant}>
            Setiap koleksi 0xTanda dirilis dalam jumlah terbatas dan memiliki identitas unik. Fokus kami adalah kualitas yang konsisten, desain yang terukur, dan sistem yang jelas.
          </motion.p>
          <motion.p variants={fadeUpVariant}>
            Setiap pembelian disertai <span className="text-white">Genesis Collection Card</span> untuk mengklaim <span className="text-[#836EF9]">Digital Twin</span> resmi melalui sistem terenkripsi.
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 05: BUKTI BLOCKCHAIN (SMART CONTRACT TERMINAL) */}
      {/* ========================================================== */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex items-center gap-6 mb-12"
        >
          <div className="w-16 h-[1px] bg-[#00FF9D]" />
          <span className="text-[#00FF9D] text-xs font-bold tracking-[0.4em] uppercase flex items-center gap-2">
            <Terminal size={14} /> On-Chain Provenance
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-black border border-[#00FF9D]/30 p-[1px] rounded-sm relative group shadow-[0_0_40px_rgba(0,255,157,0.05)] hover:shadow-[0_0_60px_rgba(0,255,157,0.15)] transition-all duration-700"
        >
          {/* Garis Animasi Scanning (Hiasan Cyberpunk) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FF9D] to-transparent opacity-50" />
          
          <div className="bg-[#0A0A0A] p-8 md:p-12 relative z-10">
            
            {/* Header Terminal */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-8">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tighter uppercase">Smart Contract Terminal</h3>
                <p className="text-[10px] md:text-xs text-[#00FF9D] font-mono tracking-[0.3em] uppercase flex items-center gap-2">
                  <ShieldCheck size={14} /> Verified Phygital Protocol
                </p>
              </div>
              <div className="flex flex-col gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-[0.3em] text-left md:text-right">
                <p>Network: <strong className="text-white">MONAD</strong></p>
                <p>Standard: <strong className="text-white">ERC-721 (NFT)</strong></p>
                <p>Status: <strong className="text-[#00FF9D] animate-pulse">ACTIVE // IMMUTABLE</strong></p>
              </div>
            </div>

            {/* Konten Terminal */}
            <div className="space-y-6">
              <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest leading-relaxed">
                Bukti absolut bahwa <strong className="text-white">0xTanda adalah pionir Phygital Fashion dengan Digital Twin NFT di Indonesia</strong>. Seluruh aset digital (Digital Twin) dienkripsi, divalidasi, dan dipublikasikan selamanya pada alamat kontrak pintar (Smart Contract) berikut:
              </p>
              
              {/* Kotak Alamat Kontrak */}
              <div className="bg-black border border-white/10 p-5 md:p-6 rounded-sm flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 mt-8">
                
                <div className="font-mono text-sm md:text-lg text-[#00FF9D] break-all selection:bg-[#00FF9D] selection:text-black">
                  {contractAddress}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto shrink-0">
                  <button 
                    onClick={handleCopy}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all text-[10px] font-bold font-mono tracking-widest uppercase rounded-sm"
                  >
                    {copied ? <><CheckCircle2 size={14} className="text-[#00FF9D]"/> COPIED</> : <><Copy size={14}/> COPY ADDRESS</>}
                  </button>
                  <a 
                    href="https://monadvision.com/address/0x75c294c9f8576FDF882cAAEf9d4316589b638610?portfolio=Info&tab=Events&mode=overview" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#00FF9D]/10 border border-[#00FF9D]/30 text-[#00FF9D] hover:bg-[#00FF9D] hover:text-black transition-all text-[10px] font-bold font-mono tracking-widest uppercase rounded-sm"
                  >
                    <ExternalLink size={14} /> VIEW ON EXPLORER
                  </a>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 06: LINGKUNGAN & KEBERLANJUTAN */}
      <section className="py-32 bg-black px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[300px] bg-[#00FF9D]/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex items-center gap-6 mb-12"
          >
            <div className="w-16 h-[1px] bg-[#00FF9D]" />
            <span className="text-[#00FF9D] text-xs font-bold tracking-[0.4em] uppercase">Lingkungan & Keberlanjutan</span>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8 text-neutral-400 text-sm md:text-base leading-relaxed uppercase tracking-widest"
          >
            <motion.p variants={fadeUpVariant}>
              Di tengah industri yang bergerak serba cepat dan sering kali mengabaikan dampaknya terhadap bumi, kami memilih untuk melambat. <strong className="text-white">0xTanda berdiri sebagai antitesis dari budaya fast fashion.</strong> Kami percaya bahwa penciptaan karya dan eksklusivitas tidak seharusnya mengorbankan ekosistem lingkungan hidup.
            </motion.p>
            <motion.p variants={fadeUpVariant}>
              Oleh karena itu, setiap lini pakaian kami diproduksi melalui sistem batch yang sangat terkendali (<span className="text-[#00FF9D]">controlled quantities</span>). Dengan menerapkan prinsip produksi yang ketat, kami secara sadar menekan jejak karbon dan memastikan tidak ada limbah tekstil berlebih (<span className="text-[#00FF9D]">zero deadstock</span>). Kami menciptakan pakaian tangguh yang dirancang untuk bertahan melewati ujian waktu, bukan untuk sekadar menjadi sampah di musim berikutnya.
            </motion.p>
            <motion.p variants={fadeUpVariant}>
              Dengan slogan <span className="text-white italic normal-case tracking-normal">“Tangible craftsmanship you can feel, secured by digital ownership you can prove.”</span> 0xTanda berkomitmen pada kualitas yang bertahan, sistem yang jelas, dan pertumbuhan yang terukur. Kami percaya bahwa keberlanjutan bukan hanya soal bahan, tetapi juga tentang bagaimana produk dirancang, diproduksi, dan dimiliki.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 07: CARA KERJA (CONCIERGE AIRDROP) */}
      <section className="py-32 px-6 bg-white/[0.02] border-b border-white/5 text-center md:text-left overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex items-center gap-6 mb-16 justify-center md:justify-start"
          >
            <div className="w-16 h-[1px] bg-[#836EF9]" />
            <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase text-center">Concierge Airdrop System</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
            {[
              "Pembeli membeli produk fisik.",
              "Mendapatkan Secret Code dari Genesis Card.",
              "Mengisi formulir verifikasi di 0xtanda.xyz.",
              "Tim memvalidasi & mengirim aset digital.",
              "Biaya jaringan ditanggung oleh 0xTanda."
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUpVariant}
                whileHover={{ y: -5, borderColor: "rgba(131,110,249,0.5)" }}
                className="bg-white/[0.03] border border-white/5 p-6 relative group transition-all duration-300"
              >
                <span className="text-[#836EF9] font-mono text-xs font-bold block mb-4">STEP_0{idx + 1}</span>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">{step}</p>
                {idx < 4 && <MoveRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-white/10 hidden md:block group-hover:text-[#836EF9]/50 transition-colors duration-300" size={16} />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 08: SISTEM KEANGGOTAAN */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex items-center gap-6 mb-16"
        >
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">Sistem Holder</span>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Royal Genesis Card */}
          <motion.div 
            variants={fadeUpVariant}
            className="border border-[#836EF9] bg-[#836EF9]/5 p-12 rounded-sm relative group overflow-hidden"
          >
            <Hexagon className="absolute -right-4 -top-4 text-[#836EF9]/10 w-32 h-32 group-hover:rotate-90 transition-transform duration-1000" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-2 relative z-10">ROYAL RESISTANCE</h3>
            <p className="text-[10px] text-[#836EF9] uppercase tracking-widest mb-8 font-bold relative z-10">1000 Pembeli Pertama</p>
            <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed relative z-10">
              Mendapatkan akses prioritas, diskon 10%, dan benefit tambahan sebagai bagian awal ekosistem.
            </p>
          </motion.div>

          {/* Regular Holder Card */}
          <motion.div 
            variants={fadeUpVariant}
            className="border border-white/10 bg-white/5 p-12 rounded-sm relative group overflow-hidden hover:border-white/30 transition-colors"
          >
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-2 relative z-10">REGULAR HOLDER</h3>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-8 font-bold relative z-10">Verified Owners</p>
            <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed relative z-10">
              Hak kepemilikan karya, keaslian, diskon 5%, dan akses komunitas penuh.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 09: PENUTUP & TANDA TANGAN */}
      <section className="pt-32 pb-16 px-6 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUpVariant} className="space-y-8 mb-24">
            <div className="space-y-6 text-neutral-400 text-base md:text-lg uppercase tracking-widest leading-relaxed">
              <p>0xTanda berjalan di dua dunia sekaligus — fisik dan digital.</p>
              <p className="text-white font-bold">
                Fokus kami sederhana: membangun sistem kepemilikan yang jelas, akses yang nyata, Kosisten, dan pengalaman yang menarik.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 pt-16">
            <div className="space-y-4">
              <p className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter">Abrur Alaina</p>
              <div className="space-y-1">
                <p className="text-[#836EF9] text-xs font-bold uppercase tracking-widest">Founder, 0xTanda</p>
                <p className="text-neutral-600 text-[10px] uppercase tracking-widest">Jakarta, Indonesia</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-mono text-[10px] text-neutral-700 uppercase tracking-[0.5em] mb-4">Archive Est. 2026</p>
              <div className="flex gap-4 justify-end opacity-20">
                <Hexagon size={20} className="animate-pulse" />
                <Cpu size={20} className="animate-pulse delay-75" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 10: KONEKSI 0xTANDA */}
      <section className="pb-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto pt-16"
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center mb-12">
            <h3 className="text-xl md:text-3xl font-sans font-bold uppercase tracking-tighter mb-4 text-neutral-400">Connect With Resistance</h3>
            <div className="w-12 h-0.5 bg-[#836EF9]" />
          </motion.div>

          <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-6 md:gap-12">
            <motion.a variants={fadeUpVariant} href="https://www.instagram.com/0xtanda/" target="_blank" className="group flex flex-col items-center gap-3 transition-all">
              <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center bg-black group-hover:border-[#836EF9]/50 group-hover:bg-[#836EF9]/5 transition-all">
                <Instagram size={18} className="text-neutral-500 group-hover:text-[#836EF9] transition-all" />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-600 group-hover:text-white transition-colors">Instagram</span>
            </motion.a>
            <motion.a variants={fadeUpVariant} href="https://www.tiktok.com/@0xtanda" target="_blank" className="group flex flex-col items-center gap-3 transition-all">
              <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center bg-black group-hover:border-[#836EF9]/50 group-hover:bg-[#836EF9]/5 transition-all">
                <TikTokIcon className="w-4 h-4 text-neutral-500 group-hover:text-[#836EF9] transition-all" />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-600 group-hover:text-white transition-colors">TikTok</span>
            </motion.a>
            <motion.a variants={fadeUpVariant} href="https://x.com/0xTanda" target="_blank" className="group flex flex-col items-center gap-3 transition-all">
              <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center bg-black group-hover:border-[#836EF9]/50 group-hover:bg-[#836EF9]/5 transition-all">
                <XIcon className="w-4 h-4 text-neutral-500 group-hover:text-[#836EF9] transition-all" />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-600 group-hover:text-white transition-colors">X</span>
            </motion.a>
            <motion.a variants={fadeUpVariant} href="https://t.me/Official0xTanda" target="_blank" className="group flex flex-col items-center gap-3 transition-all">
              <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center bg-black group-hover:border-[#836EF9]/50 group-hover:bg-[#836EF9]/5 transition-all">
                <Send size={18} className="text-neutral-500 group-hover:text-[#836EF9] transition-all" />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-600 group-hover:text-white transition-colors">Community</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* FLOATING TELEGRAM CS */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
        <a 
          href="https://t.me/GM0xTanda" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#836EF9] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(131,110,249,0.5)] hover:scale-110 active:scale-95 transition-all group relative border border-white/10"
          title="Contact Customer Service"
        >
          <div className="absolute -left-32 bg-black/90 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="text-[8px] text-white uppercase tracking-widest font-bold">Contact_Support</span>
          </div>
          <Send className="text-black -translate-x-0.5 translate-y-0.5" size={24} />
        </a>
      </div>

      <footer className="py-20 text-center opacity-10">
        <p className="font-mono text-[7px] uppercase tracking-[1em]">0XTANDA_LITEPAPER_V1.0_SYSTEM_SECURED</p>
      </footer>
    </main>
  );
}