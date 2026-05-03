"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  Brain, Gem, History, ShieldCheck, Globe, Hexagon, User, Calendar, Clock, Info, ArrowLeft, ChevronRight, Link as LinkIcon, ArrowRight
} from "lucide-react";

// ============================================================================
// MOCK COMPONENTS
// ============================================================================
const Link = ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>;
const Image = ({ src, alt, width, height, className, priority }: any) => (
  <img src={src} alt={alt} width={width} height={height} className={className} loading={priority ? "eager" : "lazy"} />
);
// ============================================================================

// --- VARIAN ANIMASI ---
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }};
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

export default function PsikologiKoleksiArticlePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#F43F5E] selection:text-black font-sans relative">
      {/* READING PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#836EF9] via-[#F43F5E] to-[#00FF9D] z-[100] origin-left" style={{ scaleX }} />

      {/* HEADER ARTIKEL JURNAL */}
      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/terminal-log" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#F43F5E] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#F43F5E] uppercase font-bold">
              <span className="bg-[#F43F5E]/10 border border-[#F43F5E]/30 px-3 py-1 rounded-full">Editorial</span>
              <span className="text-neutral-500">// Archive_04</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white">
              Psikologi di Balik Mengoleksi: Mengapa Kita Menghargai Kelangkaan dan Otentisitas? | 0xTanda
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#F43F5E] font-light leading-relaxed">
              Mengapa Kita Mengoleksi? Memahami Nilai Psikologis dari Barang Langka dan Otentik.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F43F5E]/20 flex items-center justify-center border border-[#F43F5E]/50">
                  <User size={12} className="text-[#F43F5E]" />
                </div>
                <span className="font-bold text-white">0xTanda Research Lab</span>
              </div>
              <div className="flex items-center gap-2"><Calendar size={14} /> 17 Maret 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} /> 6 Min Read</div>
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
              <span className="float-left text-6xl md:text-7xl font-bold text-[#F43F5E] mr-4 mt-2 leading-none font-serif">S</span>
              epanjang sejarah peradaban, manusia memiliki kecenderungan unik yang tidak ditemukan pada makhluk hidup lain: kita suka mengumpulkan benda. Dari koin kuno, prangko, piringan hitam, hingga karya seni kontemporer, aktivitas mengoleksi telah menjadi bagian tak terpisahkan dari budaya manusia.
            </p>
            <p className="mt-6">
              Namun, pernahkah kita bertanya-tanya, dorongan psikologis apa yang membuat seseorang rela menghabiskan waktu, tenaga, dan sumber daya untuk memiliki suatu barang tertentu? Mengapa sebuah kanvas dengan coretan cat bisa bernilai ribuan kali lipat lebih tinggi dibandingkan kanvas kosong?
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="py-6">
            <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 bg-white/5 group flex items-center justify-center">
              <Image 
                src="/article/cover-psikologi-koleksi.png" 
                alt="Psikologi Koleksi" 
                width={1600}
                height={900}
                priority={true}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-[#F43F5E]/10 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
              <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#F43F5E] border border-[#F43F5E]/30 uppercase tracking-widest z-10">
                Psy_Data // Collector Mindset
              </figcaption>
            </figure>
          </motion.div>

          {/* SEKSI 1 */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Brain className="text-[#F43F5E]" size={28} /> 1. Kebutuhan Akan Identitas dan Ekspresi Diri
            </h2>
            <p>
              Pada tingkat psikologis yang paling dasar, benda-benda yang kita kumpulkan dan kita kenakan adalah perpanjangan dari identitas kita. Barang koleksi berfungsi sebagai medium komunikasi non-verbal.
            </p>
            <p>
              Ketika seseorang mengoleksi barang-barang beraliran vintage atau karya seni independen, mereka sedang memberi tahu dunia tentang nilai-nilai, selera, dan komunitas tempat mereka bernaung tanpa perlu mengucapkan sepatah kata pun.
            </p>
          </motion.div>

          {/* SEKSI 2 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Gem className="text-[#F43F5E]" size={28} /> 2. Efek Kelangkaan (The Scarcity Principle)
            </h2>
            <p>
              Dalam ilmu ekonomi dan psikologi perilaku, terdapat prinsip yang disebut <i>Scarcity</i> (Kelangkaan). Manusia secara alami diprogram untuk menginginkan hal-hal yang sulit didapatkan. Ketika sebuah barang diproduksi secara massal dan bisa dimiliki oleh siapa saja, nilai emosionalnya menurun drastis.
            </p>
            <div className="bg-[#F43F5E]/10 border-l-2 border-[#F43F5E] p-6 my-6 text-white italic">
              "Sebaliknya, ketika suatu benda diproduksi dalam jumlah yang sangat terbatas, benda tersebut memicu rasa urgensi dan eksklusivitas."
            </div>
            <p>
              Memiliki barang yang langka memberikan kepuasan tersendiri karena hal itu memisahkan sang pemilik dari kerumunan mayoritas.
            </p>
          </motion.div>

          {/* SEKSI 3 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <History className="text-[#F43F5E]" size={28} /> 3. Nilai Sentimental vs. Nilai Material
            </h2>
            <p>
              Bagi seorang kolektor sejati, nilai material dari sebuah benda sering kali menjadi nomor dua. Yang lebih berharga adalah narasi atau cerita di balik benda tersebut. Kapan benda itu dibuat? Siapa seniman di baliknya? Apa filosofi yang ingin disampaikan?
            </p>
            <p>
              Benda koleksi sering kali bertindak sebagai "kapsul waktu" yang menyimpan memori dan emosi, menghubungkan pemiliknya dengan momen spesifik dalam sejarah atau kultur tertentu.
            </p>
          </motion.div>

          {/* SEKSI 4 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <ShieldCheck className="text-[#F43F5E]" size={28} /> 4. Fetisisme Otentisitas: Mengapa Barang Asli Tak Tergantikan
            </h2>
            <p>
              Satu pertanyaan filosofis yang sering muncul adalah: <i>Jika ada sebuah barang tiruan yang 100% identik dengan barang aslinya secara fisik, mengapa orang tetap menginginkan yang asli?</i>
            </p>
            <p>
              Jawabannya terletak pada apa yang disebut oleh para ahli sebagai <b>"Aura Otentisitas"</b>. Manusia menghargai jejak kehadiran penciptanya. Barang asli memiliki ikatan sejarah langsung dengan sang seniman atau desainer. 
            </p>
            <p>
              Memiliki barang yang otentik berarti menghargai kerja keras, keringat, dan ide orisinal dari pembuatnya, sesuatu yang tidak akan pernah bisa direplikasi oleh mesin fotokopi atau pabrik tiruan sebaik apa pun.
            </p>
          </motion.div>

          {/* SEKSI 5 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Globe className="text-[#F43F5E]" size={28} /> 5. Evolusi Koleksi di Era Modern
            </h2>
            <p>
              Cara kita mengoleksi mungkin telah berevolusi. Jika dulu kita memajang barang fisik di lemari kaca, kini bentuk koleksi mulai meluas ke medium digital. 
            </p>
            <p>
              Namun, apa pun mediumnya—baik fisik maupun barisan kode—psikologi dasarnya tetap tidak berubah. Kita akan selalu mencari keindahan, menghargai kelangkaan, dan merayakan otentisitas dari sebuah karya.
            </p>
          </motion.div>

          {/* SEKSI 6 */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Hexagon className="text-[#F43F5E]" size={28} /> 6. 0xTanda: Mendefinisikan Ulang Koleksi di Era Phygital
            </h2>
            <p>
              Di 0xTanda, kami merangkum seluruh psikologi ini ke dalam satu ekosistem. Kami memahami bahwa pakaian bukan sekadar penutup tubuh; kalian memiliki sebuah karya seutuhnya.
            </p>
            <p>
              Itulah mengapa kami membangun infrastruktur <b>Phygital Fashion</b>. Kami menciptakan sebuah karya dalam bentuk fashion yang dapat anda miliki seutuhnya. Melalui perpaduan kualitas fisik dan otentikasi Digital Twin di jaringan blockchain Monad, kami memastikan bahwa setiap helai yang Anda miliki adalah karya orisinal dengan jejak sejarah (<i>provenance</i>) yang mutlak.
            </p>
            <p className="pt-4 font-medium text-white italic">
              Bersama 0xTanda, Anda tidak hanya membeli pakaian; Anda mengamankan sebuah karya. Fisiknya Anda kenakan, digitalnya Anda amankan, dan bisa dibuktikan on-chain.
            </p>
            
            <div className="pt-6">
              <Link 
                href="/shop" 
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#F43F5E]/10 border border-[#F43F5E]/50 text-[#F43F5E] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#F43F5E] hover:text-black transition-all rounded-sm shadow-[0_0_20px_rgba(244,63,94,0.1)] w-full sm:w-auto"
              >
                Jelajahi Koleksi Genesis <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

        </div>
      </article>
      
      {/* INTERNAL LINKS */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <h4 className="font-mono text-[#F43F5E] text-[10px] tracking-[0.4em] uppercase mb-4 text-center md:text-left">Lanjutkan Penjelajahan:</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/shop" 
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#F43F5E]/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Katalog 0xTanda</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#F43F5E] transition-colors flex items-start gap-2 justify-between">
                  Amankan Koleksi Terbatas <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>

            <Link 
              href="/verify" 
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#F43F5E]/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Portal Verifikasi</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#F43F5E] transition-colors flex items-start gap-2 justify-between">
                  Aktivasi Kepemilikan Anda <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>

            <Link 
              href="/terminal-log/digital-twin-nft" 
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-white/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">System Log 03</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-white transition-colors flex items-start gap-2 justify-between">
                  Apa Itu Digital Twin NFT? <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.5em]">0XTANDA_DIGITAL_ARCHIVE_ISSUE_004_LOCKED</p>
        </div>
      </footer>
    </main>
  );
}