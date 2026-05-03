"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  ShieldCheck, Package, Fingerprint, Leaf, Hexagon, User, Calendar, Clock, ArrowLeft, ChevronRight, Link as LinkIcon
} from "lucide-react";

// ============================================================================
// MOCK NEXT.JS (Hanya untuk keperluan Preview di layar Canvas)
// CATATAN UNTUK COPAS: 
// Saat menyalin kode ini ke file project asli Anda (VSCode/Vercel), 
// HAPUS bagian mock ini dan gunakan import bawaan Next.js berikut:
//
// import Link from 'next/link';
// import Image from 'next/image';
// ============================================================================
const Link = ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>;
const Image = ({ src, alt, className, fill }: any) => fill 
  ? <img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-cover ${className || ''}`} />
  : <img src={src} alt={alt} className={className} />;
// ============================================================================

// --- VARIAN ANIMASI ---
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }};
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

export default function Article1() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#836EF9] selection:text-black font-sans relative">
      {/* READING PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#836EF9] to-[#00FF9D] z-[100] origin-left" style={{ scaleX }} />

      {/* HEADER ARTIKEL JURNAL */}
      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/terminal-log" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#836EF9] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#836EF9] uppercase font-bold">
              <span className="bg-[#836EF9]/10 border border-[#836EF9]/30 px-3 py-1 rounded-full">Editorial</span>
              <span className="text-neutral-500">// Archive_01</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white">
              Apa Itu Phygital Fashion? Panduan Lengkap untuk Memahami Phygital | 0xTanda
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#836EF9] font-light leading-relaxed">
              Phygital Fashion: Ketika Pakaian Punya Pakaian/Produk Digital yang Tidak Bisa Dipalsukan.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#836EF9]/20 flex items-center justify-center border border-[#836EF9]/50">
                  <User size={12} className="text-[#836EF9]" />
                </div>
                <span className="font-bold text-white">0xTanda Research Lab</span>
              </div>
              <div className="flex items-center gap-2"><Calendar size={14} /> 14 Maret 2026</div>
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
              <span className="float-left text-6xl md:text-7xl font-bold text-[#836EF9] mr-4 mt-2 leading-none font-serif">D</span>
              unia fashion perlahan sedang memasuki era baru. Selama puluhan tahun, cara kita berinteraksi dengan pakaian hanya terbatas pada apa yang bisa kita sentuh dan pakai. Namun, seiring dengan meleburnya batasan antara dunia nyata dan ruang digital, muncul sebuah pergerakan baru yang mendefinisikan ulang makna kepemilikan sebuah karya: <b>Phygital Fashion</b>.
            </p>
            <p className="mt-6">
              Bagi Anda yang baru pertama kali mendengar istilah ini, artikel ini akan membedah secara mendalam apa itu Phygital, bagaimana teknologi di baliknya bekerja, dan mengapa inovasi ini mengubah cara kita menghargai sebuah pakaian.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="py-6">
            <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 bg-white/5 group">
              {/* === DI SINI PERBAIKANNYA (HURUF t KECIL) === */}
              <Image src="/article/cover-phygital-fashion.png" alt="0xTanda Phygital Concept" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#836EF9] border border-[#836EF9]/30 uppercase tracking-widest">
                Visual_Data // 0xTanda Phygital Concept
              </figcaption>
            </figure>
          </motion.div>

          {/* SEKSI 1 */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <LinkIcon className="text-[#836EF9]" size={28} /> Definisi Phygital Fashion
            </h2>
            <p className="font-mono text-xs text-[#836EF9] uppercase tracking-widest">— Bukan Sekadar Kaos dengan QR Code</p>
            <p>
              Secara harfiah, kata <b>Phygital</b> adalah gabungan dari dua kata: <i>Physical</i> (Fisik) dan <i>Digital</i>. Dalam konteks fashion, ini merujuk pada sebuah ekosistem di mana sebuah produk pakaian nyata dihubungkan secara permanen dengan entitas digitalnya di dunia maya.
            </p>
            <p>
              Seringkali, ada kesalahpahaman bahwa Phygital hanyalah pakaian yang diberi label barcode atau QR code yang mengarah ke website katalog. Phygital yang sesungguhnya jauh lebih mendalam dari itu.
            </p>
            <div className="bg-[#836EF9]/10 border-l-2 border-[#836EF9] p-6 my-6 text-white italic">
              "Dalam arsitektur Phygital sejati, entitas digital tersebut adalah sebuah aset mandiri yang unik, mustahil diduplikasi, dan dimiliki sepenuhnya oleh sang pembeli, bukan oleh brand yang merilisnya."
            </div>
            <p>
              Ini adalah fusi antara kualitas material kain yang bisa Anda rasakan, dengan kepastian data digital yang bisa Anda buktikan.
            </p>
          </motion.div>

          {/* SEKSI 2 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Fingerprint className="text-[#836EF9]" size={28} /> Blockchain & Keaslian Pakaian
            </h2>
            <p className="font-mono text-xs text-[#836EF9] uppercase tracking-widest">— Membuktikan Apa yang Dulu Tidak Terbukti</p>
            <p>
              Salah satu masalah tertua dalam industri fashion dan karya seni adalah pembuktian keaslian (<i>authenticity</i>). Nota kertas bisa hilang, dan tag kain sangat mudah ditiru. Di sinilah teknologi <b>blockchain</b> hadir sebagai solusi infrastruktur.
            </p>
            <p>
              Sederhananya, blockchain adalah sebuah buku catatan digital publik yang sangat aman. Sekali sebuah data dicatat di dalamnya, data tersebut tidak dapat diubah, dihapus, atau dimanipulasi oleh siapa pun.
            </p>
            <p>
              Ketika sebuah pakaian Phygital dirilis, brand akan mencatat identitas unik pakaian tersebut ke dalam blockchain. Proses ini menciptakan apa yang disebut sebagai <b>Provenance</b> (jejak sejarah mutlak). Saat Anda memiliki pakaian tersebut beserta sertifikat digitalnya di blockchain, seluruh dunia bisa memverifikasi bahwa pakaian fisik yang Anda kenakan adalah 100% otentik, langsung dari tangan kreator aslinya. Tidak ada lagi ruang untuk keraguan.
            </p>
          </motion.div>

          {/* SEKSI 3 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Leaf className="text-[#836EF9]" size={28} /> Phygital vs Fast Fashion
            </h2>
            <p className="font-mono text-xs text-[#836EF9] uppercase tracking-widest">— Mengapa Arah Kita Selanjutnya Berubah</p>
            <p>
              Industri <i>fast fashion</i> telah lama mendominasi pasar dengan memproduksi pakaian secara massal, cepat, dan seringkali mengorbankan kualitas demi tren sesaat. Hasilnya adalah siklus konsumsi yang berujung pada pakaian sekali pakai yang cepat rusak dan kehilangan maknanya.
            </p>
            <p>
              Pendekatan Phygital lahir sebagai antitesis dari budaya tersebut. Dengan menyematkan identitas digital pada sebuah pakaian, pakaian tersebut bertransformasi dari sekadar "barang pakai" menjadi sebuah "artefak" atau karya seni koleksi.
            </p>
            <p>
              Kesadaran ini mendorong kreator untuk memproduksi pakaian fisik dengan standar setinggi mungkin—seperti menggunakan material kapas heavyweight yang tebal dan jahitan yang kokoh. Tujuannya agar wujud fisik pakaian tersebut mampu bertahan lama, setara dengan umur sertifikat digitalnya yang abadi. Ini adalah langkah maju menuju apresiasi karya yang lebih bermakna dan berumur panjang.
            </p>
          </motion.div>

          {/* SEKSI 4 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <ShieldCheck className="text-[#836EF9]" size={28} /> Konsep Digital Twin
            </h2>
            <p className="font-mono text-xs text-[#836EF9] uppercase tracking-widest">— Kepemilikan yang Hidup di Blockchain</p>
            <p>
              Inti dari pengalaman Phygital adalah apa yang kita sebut sebagai <b>Digital Twin</b> (Kembaran Digital). Saat Anda mengamankan sebuah produk Phygital, Anda tidak hanya membawa pulang baju fisiknya, tetapi juga mengklaim Digital Twin berupa aset digital (sering disebut NFT) ke dalam dompet digital pribadi Anda.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm space-y-4 my-6">
              <p className="text-sm text-neutral-300">
                <b className="text-white">Penting untuk digarisbawahi:</b> Digital Twin dalam ekosistem fashion murni berfungsi sebagai arsip keaslian, paspor komunitas, dan bentuk apresiasi terhadap seniman yang mendesainnya.
              </p>
              <p className="text-sm text-[#836EF9] font-bold">
                Aset ini bukan sebuah instrumen investasi finansial, bukan alat untuk spekulasi, dan tidak dirancang untuk aktivitas trading (jual-beli demi keuntungan semata).
              </p>
            </div>
            <p>
              Memiliki Digital Twin sama halnya dengan memiliki sertifikat lukisan asli dari seorang maestro; nilainya terletak pada sejarah, nilai seni, dan kebanggaan sebagai kolektor yang mendukung ekosistem kreatif secara langsung.
            </p>
          </motion.div>

          {/* SEKSI 5 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
             <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Hexagon className="text-[#836EF9]" size={28} /> 0xTanda & Genesis Batch 001
            </h2>
             <p className="font-mono text-xs text-[#836EF9] uppercase tracking-widest">— Phygital Pertama dari Jakarta</p>
             <p>
               Membawa semangat teknologi dan craftsmanship ke jalanan ibu kota, <b>0xTanda</b> hadir sebagai inisiatif Phygital Fashion dari Jakarta Timur. Kami membangun infrastruktur di mana pakaian berkualitas tinggi berjalan berdampingan dengan identitas digital yang aman.
             </p>
             <p>
               Langkah pertama dari visi ini diwujudkan melalui <b>Genesis Batch 001</b>. Sebuah rilis pakaian berpotongan boxy yang diracik dari katun combed 16s heavyweight, menjadikannya sebuah hardware fisik yang tangguh. Setiap unit Genesis Batch 001 didampingi oleh Genesis Collection Card—sebuah kartu fisik yang berisi Secret Code unik. Kode ini merupakan kunci bagi pemiliknya untuk mengklaim Digital Twin NFT mereka di jaringan blockchain, tanpa kerumitan teknis dan tanpa biaya jaringan (gas fee).
             </p>
             <p className="pt-6 font-medium text-white italic">
               Di 0xTanda, kami percaya pada filosofi "One Entity // Dual Existence". Fisik dan digital bukanlah dua hal yang terpisah, melainkan satu kesatuan karya yang utuh. Dimana Tangan Pengrajin bertemu dengan Smart Contract.
             </p>
             <div className="bg-[#836EF9]/10 border-l-4 border-[#836EF9] p-6 mt-6">
                <p className="font-serif text-lg md:text-xl text-white italic">"Sejalan dengan Slogan kami, kami tidak sekadar membuat pakaian; kami merancang bukti kepemilikan karya masa depan yang bisa Anda kenakan hari ini."</p>
             </div>
          </motion.div>
        </div>
      </article>
      
      {/* INTERNAL LINKS (Call To Action Box) */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
          <Link 
            href="/verify" 
            className="flex-1 group bg-[#121212] border border-white/10 p-6 flex flex-col items-start gap-4 hover:border-[#836EF9]/50 transition-all rounded-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#836EF9]/10 flex items-center justify-center text-[#836EF9] group-hover:scale-110 transition-transform">
              <ShieldCheck size={18} />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Aktivasi</p>
              <h4 className="text-white font-bold tracking-tight flex items-center gap-2 group-hover:text-[#836EF9] transition-colors">
                Lihat Panduan Klaim NFT Lengkap <ChevronRight size={16} />
              </h4>
            </div>
          </Link>

          <Link 
            href="/shop" 
            className="flex-1 group bg-[#121212] border border-white/10 p-6 flex flex-col items-start gap-4 hover:border-[#00FF9D]/50 transition-all rounded-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D] group-hover:scale-110 transition-transform">
              <Package size={18} />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Katalog</p>
              <h4 className="text-white font-bold tracking-tight flex items-center gap-2 group-hover:text-[#00FF9D] transition-colors">
                Jelajahi Koleksi Limited Drop Terbaru <ChevronRight size={16} />
              </h4>
            </div>
          </Link>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {['Instagram', 'Twitter', 'TikTok', 'Telegram'].map((soc) => (
              <a key={soc} href="#" className="text-[11px] font-mono text-neutral-600 hover:text-[#836EF9] transition-colors uppercase tracking-[0.3em]">{soc}</a>
            ))}
          </div>
          <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.5em]">0XTANDA_DIGITAL_ARCHIVE_ISSUE_001_LOCKED</p>
        </div>
      </footer>
    </main>
  );
}