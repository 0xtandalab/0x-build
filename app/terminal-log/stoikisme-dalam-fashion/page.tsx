"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  Compass, Anchor, Zap, ShieldCheck, Scale, Hexagon, User, Calendar, Clock, Info, ArrowLeft, ChevronRight, ArrowRight
} from "lucide-react";

// ============================================================================
// MOCK COMPONENTS
// ============================================================================
const Link = ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>;
const Image = ({ src, alt, width, height, className, priority }: any) => (
  <img src={src} alt={alt} width={width} height={height} className={className} loading={priority ? "eager" : "lazy"} />
);
// ============================================================================

const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }};
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

export default function StoikismeFashionArticlePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#F59E0B] selection:text-black font-sans relative">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#836EF9] via-[#F59E0B] to-[#00FF9D] z-[100] origin-left" style={{ scaleX }} />

      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/terminal-log" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#F59E0B] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#F59E0B] uppercase font-bold">
              <span className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-3 py-1 rounded-full">Editorial</span>
              <span className="text-neutral-500">// Archive_05</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white uppercase">
              Stoikisme dalam Fashion: Seni Berpakaian dengan Kesadaran
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#F59E0B] font-light leading-relaxed">
              Menemukan ketenangan dan kebebasan di tengah gempuran tren serta konsumerisme modern.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F59E0B]/20 flex items-center justify-center border border-[#F59E0B]/50">
                  <User size={12} className="text-[#F59E0B]" />
                </div>
                <span className="font-bold text-white">0xTanda Research Lab</span>
              </div>
              <div className="flex items-center gap-2"><Calendar size={14} /> 18 Maret 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} /> 7 Min Read</div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <article className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-[17px] md:text-[19px] text-neutral-300 leading-[1.8] font-light">
          
          <motion.div variants={fadeUp}>
            <p>
              <span className="float-left text-6xl md:text-7xl font-bold text-[#F59E0B] mr-4 mt-2 leading-none font-serif">D</span>
              i tengah dunia yang terobsesi dengan tren mingguan dan validasi media sosial, fashion seringkali menjadi sumber kecemasan daripada sekadar kebutuhan fungsi. Stoikisme, filosofi Yunani Kuno yang berusia ribuan tahun, menawarkan perspektif radikal untuk membantu kita menemukan ketenangan dalam cara kita berpakaian.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="py-6">
            <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 bg-white/5 group flex items-center justify-center">
              <Image 
                src="/article/stoikisme-cover.png" 
                alt="Stoicism in Fashion" 
                width={1600}
                height={900}
                priority={true}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale" 
              />
              <div className="absolute inset-0 bg-[#F59E0B]/10 mix-blend-overlay"></div>
              <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#F59E0B] border border-[#F59E0B]/30 uppercase tracking-widest z-10">
                Ethos_Visual // Stoic Mindset
              </figcaption>
            </figure>
          </motion.div>

          {/* SEKSI A */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Scale className="text-[#F59E0B]" size={28} /> A. Dikotomi Kendali: Apa yang Kita Pakai vs Apa yang Orang Lihat
            </h2>
            <p>Prinsip utama Stoikisme adalah <i>Dichotomy of Control</i> (Dikotomi Kendali). Kita harus bisa membedakan antara hal yang bisa kita kendalikan dan hal yang di luar kendali kita.</p>
            <ul className="space-y-4 ml-4">
              <li>• <b className="text-white">Internal (Kendali Kita):</b> Kualitas pakaian yang kita pilih, kesesuaian pakaian dengan cuaca, dan niat kita dalam berpakaian.</li>
              <li>• <b className="text-white">Eksternal (Luar Kendali):</b> Pendapat orang lain, status sosial yang diberikan orang pada merek tertentu, dan perubahan tren mendadak.</li>
            </ul>
            <p>Berpakaian secara stoik berarti tidak membiarkan harga diri kita bergantung pada pengakuan orang lain terhadap merek yang kita kenakan.</p>
          </motion.div>

          {/* SEKSI B */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Anchor className="text-[#F59E0B]" size={28} /> B. Esensialisme dan Kualitas di Atas Kuantitas
            </h2>
            <p>Kaum Stoik menghargai kesederhanaan. Dalam fashion, ini diterjemahkan menjadi <b>Essentialism</b>. Daripada memiliki lemari yang penuh dengan pakaian murah yang cepat rusak (Fast Fashion), seorang praktisi stoik akan lebih memilih beberapa pakaian berkualitas tinggi.</p>
            <div className="bg-[#F59E0B]/10 border-l-2 border-[#F59E0B] p-6 my-6 text-white italic">
              "Memilih bahan yang tebal, jahitan yang kuat, dan desain yang abadi (timeless) adalah bentuk praktik Stoikisme."
            </div>
            <p>Ini membebaskan kita dari siklus belanja berlebihan dan membuat kita lebih menghargai setiap barang yang kita miliki.</p>
          </motion.div>

          {/* SEKSI C */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Zap className="text-[#F59E0B]" size={28} /> C. Melawan Penyakit "Hype" dan FOMO
            </h2>
            <p>Industri fashion sering menggunakan psikologi kelangkaan untuk memicu impulsifitas. Stoikisme mengajarkan kita untuk berhenti mengejar keinginan yang tidak ada habisnya. Sebelum membeli, ajukan pertanyaan ini:</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <li className="bg-white/5 border border-white/10 p-4 rounded-sm text-xs uppercase tracking-widest leading-relaxed">"Apakah aku benar-benar membutuhkannya?"</li>
              <li className="bg-white/5 border border-white/10 p-4 rounded-sm text-xs uppercase tracking-widest leading-relaxed">"Apakah aku tetap bahagia tanpanya?"</li>
              <li className="bg-white/5 border border-white/10 p-4 rounded-sm text-xs uppercase tracking-widest leading-relaxed">"Apakah nilainya tetap sama jika tidak ada yang melihat?"</li>
            </ul>
          </motion.div>

          {/* SEKSI D */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <ShieldCheck className="text-[#F59E0B]" size={28} /> D. Pakaian sebagai Alat, Bukan Identitas Mutlak
            </h2>
            <p>Marcus Aurelius pernah mengingatkan dirinya bahwa jubah ungu kekaisarannya hanyalah bulu domba yang dicelupkan ke dalam darah kerang.</p>
            <p>Memiliki pandangan ini membantu kita untuk tetap rendah hati. Kita bisa menikmati pakaian yang bagus, tapi tidak akan hancur jika pakaian itu rusak atau hilang, karena identitas sejati kita terletak pada karakter, bukan pada kain.</p>
          </motion.div>

          {/* KESIMPULAN */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Compass className="text-[#F59E0B]" size={28} /> Kesimpulan: Berpakaian dengan Kebebasan
            </h2>
            <p>Menerapkan Stoikisme dalam fashion adalah tentang kebebasan. Kebebasan dari tekanan tren, kebebasan dari keinginan pamer, dan kebebasan untuk memilih kualitas yang benar-benar memberikan manfaat nyata bagi hidup Anda.</p>
            
            <div className="pt-6">
              <Link 
                href="/shop" 
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#F59E0B]/10 border border-[#F59E0B]/50 text-[#F59E0B] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#F59E0B] hover:text-black transition-all rounded-sm shadow-[0_0_20px_rgba(245,158,11,0.1)] w-full sm:w-auto"
              >
                Jelajahi Koleksi Berdasarkan Kualitas <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* INTERNAL LINKS */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <h4 className="font-mono text-[#F59E0B] text-[10px] tracking-[0.4em] uppercase mb-4 text-center md:text-left">Archive Transmissions:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/terminal-log/psikologi-koleksi" className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#F59E0B]/50 transition-all rounded-sm">
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">System Log 04</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#F59E0B] transition-colors flex items-start gap-2 justify-between">
                  Psikologi di Balik Mengoleksi <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
            <Link href="/terminal-log/phygital-fashion-indonesia" className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-white/50 transition-all rounded-sm">
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">System Log 01</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-white transition-colors flex items-start gap-2 justify-between">
                  Apa Itu Phygital Fashion? <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.5em]">0XTANDA_DIGITAL_ARCHIVE_ISSUE_005_LOCKED</p>
        </div>
      </footer>
    </main>
  );
}