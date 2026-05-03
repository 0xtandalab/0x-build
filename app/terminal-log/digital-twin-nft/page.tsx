"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  Layers, Package, Fingerprint, HelpCircle, Zap, ShieldCheck, Users, User, Calendar, Clock, Info, ArrowLeft, ChevronRight, Link as LinkIcon
} from "lucide-react";

// Fallback komponen untuk menangani module eksternal
const Link = ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>;
const Image = ({ src, alt, width, height, className, priority }: any) => (
  <img src={src} alt={alt} width={width} height={height} className={className} loading={priority ? "eager" : "lazy"} />
);

// --- VARIAN ANIMASI ---
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }};
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

export default function DigitalTwinArticlePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#38BDF8] selection:text-black font-sans relative">
      {/* READING PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#836EF9] via-[#38BDF8] to-[#00FF9D] z-[100] origin-left" style={{ scaleX }} />

      {/* HEADER ARTIKEL JURNAL */}
      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/terminal-log" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#38BDF8] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase font-bold">
              <span className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 px-3 py-1 rounded-full">Deep Dive</span>
              <span className="text-neutral-500">// Archive_03</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white">
              Digital Twin NFT 0xTanda — Apa yang Kamu Dapatkan Saat Beli | 0xTanda
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#38BDF8] font-light leading-relaxed">
              Setiap Produk 0xTanda Datang dengan Digital Twin NFT : Bukti Kepemilikan karya seni dengan utilitas nyata.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#38BDF8]/20 flex items-center justify-center border border-[#38BDF8]/50">
                  <User size={12} className="text-[#38BDF8]" />
                </div>
                <span className="font-bold text-white">0xTanda Research Lab</span>
              </div>
              <div className="flex items-center gap-2"><Calendar size={14} /> 16 Maret 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} /> 5 Min Read</div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* BODY ARTIKEL */}
      <article className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-[17px] md:text-[19px] text-neutral-300 leading-[1.8] font-light">
          
          {/* PENDAHULUAN */}
          <motion.div variants={fadeUp}>
            <p>
              <span className="float-left text-6xl md:text-7xl font-bold text-[#38BDF8] mr-4 mt-2 leading-none font-serif">S</span>
              aat kamu memutuskan untuk membeli pakaian dari 0xTanda, kamu tidak hanya menerima sebuah paket berisi kaos. Kamu masuk ke dalam sebuah ekosistem phygital (fisik dan digital) yang dirancang untuk memberikan transparansi dan fungsi nyata bagi pembelinya.
            </p>
            <p className="mt-6">
              Bagi sebagian orang, istilah NFT atau teknologi blockchain mungkin terdengar asing. Artikel ini akan menjelaskan secara sederhana apa sebenarnya yang kamu dapatkan di dalam kotak pengiriman kami, dan mengapa sistem ini dibuat khusus untuk mengapresiasi kualitas pakaian serta karya seni di atasnya.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="py-6">
            <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 bg-white/5 group flex items-center justify-center">
              {/* IMAGE UPDATED: Filter hue-rotate dihapus dan menggunakan w-full h-full object-cover */}
              <Image 
                src="/article/cover-digital-twin-utility.jpg" 
                alt="0xTanda Digital Twin Concept" 
                width={1600}
                height={900}
                priority
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#38BDF8] border border-[#38BDF8]/30 uppercase tracking-widest z-10">
                Visual_Data // Digital Twin Utility
              </figcaption>
            </figure>
          </motion.div>

          {/* SEKSI 1 */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Layers className="text-[#38BDF8]" size={28} /> 1. Apa Itu Digital Twin & Lebih Dari Sekadar NFT
            </h2>
            <p>
              Dalam istilah sederhana, <b>Digital Twin</b> adalah kembaran digital dari barang fisik yang kamu miliki. Di 0xTanda, setiap helai baju yang diproduksi memiliki satu sertifikat digital berbentuk NFT yang terekam di jaringan blockchain (Monad).
            </p>
            <p>
              Ini jauh lebih dari sekadar NFT gambar biasa yang sering kamu lihat di internet. Digital Twin 0xTanda terikat langsung dengan produk fisik nyata. Fungsinya murni sebagai bukti kepemilikan yang sah bahwa kamu adalah pembeli resmi dari karya seni dan pakaian tersebut.
            </p>
            <div className="bg-red-900/10 border-l-4 border-red-500 p-6 my-6 text-white relative overflow-hidden">
              <Info className="absolute top-4 right-4 text-red-500/20" size={60} />
              <h4 className="text-red-400 font-bold mb-2 uppercase tracking-widest text-sm flex items-center gap-2">
                <ShieldCheck size={16} /> Perhatian Penting
              </h4>
              <p className="text-sm text-neutral-300 relative z-10 leading-relaxed">
                Kami menegaskan bahwa Digital Twin atau NFT dari 0xTanda <b className="text-white">bukanlah sebuah instrumen investasi</b>. Aset ini tidak dirancang sebagai sarana jual-beli (trading) untuk mencari keuntungan finansial. Nilainya murni terletak pada transparansi kepemilikan karya seni, fungsi diskon, dan tiket masuk ke dalam komunitas kami.
              </p>
            </div>
          </motion.div>

          {/* SEKSI 2 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Package className="text-[#38BDF8]" size={28} /> 2. Yang Kamu Terima di Dalam Paket
            </h2>
            <p>Ketika paket 0xTanda sampai di tanganmu, inilah tiga komponen utama yang akan kamu dapatkan:</p>
            
            <ul className="space-y-6 mt-6">
              <li className="bg-white/5 border border-white/10 p-6 rounded-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="bg-[#38BDF8]/10 p-4 rounded-full text-[#38BDF8] shrink-0 border border-[#38BDF8]/30">
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base uppercase tracking-widest mb-2">Pakaian Fisik Kualitas Premium</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">Fokus utama kami tetap pada produk nyata. Kamu menerima kaos dengan material berkualitas tinggi (heavyweight cotton), berstruktur kokoh, dan jahitan yang rapih.</p>
                </div>
              </li>
              <li className="bg-white/5 border border-white/10 p-6 rounded-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="bg-[#38BDF8]/10 p-4 rounded-full text-[#38BDF8] shrink-0 border border-[#38BDF8]/30">
                  <Fingerprint size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base uppercase tracking-widest mb-2">Genesis Collection Card</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">Di dalam paket, kamu akan menemukan sebuah kartu fisik. Kartu ini menampilkan detail karya seni dari baju yang kamu beli dan memiliki panel perak di bagian belakang yang bisa digosok untuk memunculkan kode rahasia.</p>
                </div>
              </li>
              <li className="bg-white/5 border border-white/10 p-6 rounded-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="bg-[#38BDF8]/10 p-4 rounded-full text-[#38BDF8] shrink-0 border border-[#38BDF8]/30">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base uppercase tracking-widest mb-2">Nomor Seri On-Chain (Aset Digital)</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">Menggunakan kode rahasia dari kartu tersebut, kamu berhak mengklaim Digital Twin ke dompet digitalmu. Di sinilah nomor seri produksimu tercatat secara permanen dan transparan di jaringan blockchain.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* SEKSI 3 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <HelpCircle className="text-[#38BDF8]" size={28} /> 3. Pertanyaan yang Sering Ditanyakan
            </h2>
            <div className="grid gap-6 mt-6">
              <div className="bg-[#121212] border border-white/10 p-6 rounded-sm space-y-3">
                <h4 className="text-white font-bold text-lg">Saya tidak mengerti Web3 atau Crypto, apakah tetap bisa beli?</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Sangat bisa. Jika kamu hanya ingin memakai bajunya tanpa mengklaim NFT, itu sepenuhnya hakmu. Namun, kami sangat menyarankan kamu mengaktifkannya karena prosesnya gratis, sangat mudah, dan ada manfaat tambahan yang sayang untuk dilewatkan.
                </p>
              </div>
              <div className="bg-[#121212] border border-white/10 p-6 rounded-sm space-y-3">
                <h4 className="text-white font-bold text-lg">Apakah ada biaya tambahan untuk mencetak NFT-nya?</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Tidak ada. Semua biaya transaksi jaringan (biasa disebut <i>gas fee</i>) sudah ditanggung penuh oleh pihak 0xTanda. Kamu hanya duduk manis dan menunggu NFT masuk.
                </p>
              </div>
            </div>
          </motion.div>

          {/* SEKSI 4 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Zap className="text-[#38BDF8]" size={28} /> 4. Manfaat & Kenapa Memilih 0xTanda
            </h2>
            <p>
              Membeli produk 0xTanda berarti kamu mengapresiasi kualitas, transparansi, dan ekosistem kreatif. Berikut adalah manfaat nyata yang kamu dapatkan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm space-y-3">
                <ShieldCheck className="text-[#38BDF8] mb-2" size={24} />
                <h4 className="text-white font-bold uppercase tracking-widest text-sm">Kualitas Tanpa Kompromi</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">Kamu mendapatkan pakaian dengan spesifikasi industrial yang dirancang untuk awet, menolak siklus pakaian cepat rusak (anti-fast fashion).</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm space-y-3">
                <User className="text-[#38BDF8] mb-2" size={24} />
                <h4 className="text-white font-bold uppercase tracking-widest text-sm">Dukungan Untuk Seniman</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">Kami menerapkan skema transparansi di mana seniman yang merancang ilustrasi di baju kamu mendapatkan pembagian keuntungan yang adil.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm space-y-3">
                <Zap className="text-[#38BDF8] mb-2" size={24} />
                <h4 className="text-white font-bold uppercase tracking-widest text-sm">Utilitas Dinamis</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">Dengan menyimpan Digital Twin di dompet digitalmu, kamu mendapatkan keuntungan khusus seperti diskon untuk perilisan baju berikutnya dan <i>sneak peek</i> desain baru.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm space-y-3">
                <Users className="text-[#38BDF8] mb-2" size={24} />
                <h4 className="text-white font-bold uppercase tracking-widest text-sm">Komunitas Royal Resistance</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">Bagi pemegang koleksi tertentu, NFT tersebut berfungsi sebagai hak voting dan tempat berkumpulnya sesama kolektor yang menghargai kualitas.</p>
              </div>
            </div>
            
            <div className="bg-[#38BDF8]/10 border-l-4 border-[#38BDF8] p-6 mt-10">
              <p className="font-serif text-lg md:text-xl text-white italic">"Tangible craftsmanship you can feel, secured by digital ownership you can prove."</p>
            </div>
          </motion.div>
        </div>
      </article>
      
      {/* INTERNAL LINKS */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <h4 className="font-mono text-[#38BDF8] text-[10px] tracking-[0.4em] uppercase mb-4 text-center md:text-left">Lanjutkan Penjelajahan:</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/shop" 
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#38BDF8]/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Katalog 0xTanda</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#38BDF8] transition-colors flex items-start gap-2 justify-between">
                  Beli sekarang di koleksi Genesis <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>

            <Link 
              href="/verify" 
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#38BDF8]/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Portal Verifikasi</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#38BDF8] transition-colors flex items-start gap-2 justify-between">
                  Aktivasi NFT-mu sekarang <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>

            <Link 
              href="/terminal-log/phygital-fashion-indonesia" 
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-white/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">System Log 01</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-white transition-colors flex items-start gap-2 justify-between">
                  Pelajari lebih lanjut tentang phygital fashion <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.5em]">0XTANDA_DIGITAL_ARCHIVE_ISSUE_003_LOCKED</p>
        </div>
      </footer>
    </main>
  );
}