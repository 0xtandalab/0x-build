"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  ScanLine,
  ShieldX,
  ShieldCheck,
  CircleDollarSign,
  Fingerprint,
  Link as LinkIcon,
  Hash,
  User,
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Zap,
} from "lucide-react";

// ============================================================================
// CATATAN UNTUK COPAS KE PROJECT ASLI:
// Hapus mock Link & Image di bawah ini, dan gunakan:
// import Link from 'next/link';
// import Image from 'next/image';
// ============================================================================
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>
    {children}
  </a>
);
const Image = ({
  src,
  alt,
  width,
  height,
  className,
  priority,
  fill,
}: any) => {
  if (fill)
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${className || ""}`}
        loading={priority ? "eager" : "lazy"}
      />
    );
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
    />
  );
};
// ============================================================================

// --- METADATA (Wajib ada di file terpisah jika pakai App Router) ---
// Salin ke app/terminal-log/kaos-original-vs-palsu/page.tsx
// dan export metadata berikut DI LUAR komponen:
//
// export const metadata = {
//   title: "Cara Membedakan Kaos Original vs Palsu di Indonesia | 0xTanda",
//   description:
//     "Panduan lengkap cara cek keaslian baju dan kaos di Indonesia. Temukan mengapa teknologi blockchain dan NFT menjadi solusi permanen untuk membuktikan orisinalitas produk fashion.",
//   keywords: [
//     "kaos original vs palsu",
//     "cara cek keaslian baju",
//     "baju original Indonesia",
//     "anti counterfeit fashion",
//     "NFT fashion Indonesia",
//     "cara bedakan baju palsu",
//     "verifikasi produk fashion",
//     "blockchain fashion",
//     "0xTanda",
//   ],
//   openGraph: {
//     title: "Cara Membedakan Kaos Original vs Palsu di Indonesia | 0xTanda",
//     description:
//       "Panduan lengkap cara cek keaslian baju. Dari inspeksi fisik hingga solusi blockchain.",
//     images: ["/article/cover-anti-palsu.png"],
//   },
// };

// ============================================================================

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// --- DATA TABEL PERBANDINGAN ---
const COMPARISON_DATA = [
  {
    aspek: "Kualitas Jahitan",
    original: "Rapi, kencang, tidak ada benang menjuntai",
    palsu: "Jahitan longgar, tidak merata, sering miring",
    iconOriginal: <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0" />,
    iconPalsu: <XCircle size={16} className="text-red-400 shrink-0" />,
  },
  {
    aspek: "Material & Berat",
    original: "Gramasi sesuai klaim, tidak transparan",
    palsu: "Terasa ringan, tipis, dan mudah melar",
    iconOriginal: <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0" />,
    iconPalsu: <XCircle size={16} className="text-red-400 shrink-0" />,
  },
  {
    aspek: "Label & Hangtag",
    original: "Cetakan tajam, detail presisi, informasi lengkap",
    palsu: "Warna pudar, font salah, informasi tidak akurat",
    iconOriginal: <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0" />,
    iconPalsu: <XCircle size={16} className="text-red-400 shrink-0" />,
  },
  {
    aspek: "Sablon / Print",
    original: "Warna solid, tidak retak, terasa menyatu dengan kain",
    palsu: "Mudah retak, warna berbeda, terasa menempel di atas kain",
    iconOriginal: <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0" />,
    iconPalsu: <XCircle size={16} className="text-red-400 shrink-0" />,
  },
  {
    aspek: "Bukti Keaslian",
    original: "Dapat diverifikasi, ada jejak produksi",
    palsu: "Tidak ada bukti, mudah direplikasi",
    iconOriginal: <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0" />,
    iconPalsu: <XCircle size={16} className="text-red-400 shrink-0" />,
  },
];

export default function AntiPalsuArticlePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#836EF9] selection:text-black font-sans relative">
      {/* READING PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#836EF9] via-[#00FF9D] to-[#836EF9] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* ============================================================ */}
      {/* HEADER ARTIKEL */}
      {/* ============================================================ */}
      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/terminal-log"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#836EF9] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Menu
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            {/* Tag Kategori */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#836EF9] uppercase font-bold"
            >
              <span className="bg-[#836EF9]/10 border border-[#836EF9]/30 px-3 py-1 rounded-full">
                Deep Dive
              </span>
              <span className="text-neutral-500">// Archive_06</span>
            </motion.div>

            {/* ====================================================== */}
            {/* JUDUL — Dioptimasi untuk keyword utama SEO              */}
            {/* ====================================================== */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white"
            >
              Cara Membedakan Kaos Original vs Palsu di Indonesia — dan Mengapa
              Blockchain Jadi Jawabannya
            </motion.h1>

            {/* Sub-judul / SEO Deck */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-[#836EF9] font-light leading-relaxed"
            >
              Panduan lengkap cara cek keaslian baju: dari inspeksi fisik yang
              bisa kamu lakukan sendiri, hingga teknologi NFT yang membuktikan
              keaslian secara permanen dan tidak bisa dipalsukan.
            </motion.p>

            {/* Metadata Penulis */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#836EF9]/20 flex items-center justify-center border border-[#836EF9]/50">
                  <User size={12} className="text-[#836EF9]" />
                </div>
                <span className="font-bold text-white">
                  0xTanda Research Lab
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} /> 12 Mei 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} /> 7 Min Read
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* BODY ARTIKEL                                                  */}
      {/* ============================================================ */}
      <article className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-[17px] md:text-[19px] text-neutral-300 leading-[1.8] font-light">

          {/* PENDAHULUAN DENGAN DROP CAP */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p>
              <span className="float-left text-6xl md:text-7xl font-bold text-[#836EF9] mr-4 mt-2 leading-none font-serif">
                S
              </span>
              etiap tahun, industri fashion global kehilangan miliaran dolar
              akibat produk palsu. Di Indonesia, fenomena ini sangat terasa —
              dari pasar kaki lima hingga platform e-commerce, barang tiruan
              beredar bebas dengan kualitas yang semakin mirip dengan aslinya.
              Bagi konsumen awam, membedakan mana yang original dan mana yang
              palsu semakin menjadi tantangan tersendiri.
            </p>
            <p className="mt-6">
              Artikel ini akan membahas dua hal sekaligus: pertama, cara
              praktis yang bisa kamu lakukan sendiri untuk mengecek keaslian
              pakaian secara fisik. Kedua, dan yang lebih penting —{" "}
              <b className="text-white">
                mengapa semua metode fisik itu pada akhirnya memiliki batas
              </b>
              , dan bagaimana teknologi blockchain hadir sebagai solusi yang
              tidak bisa ditipu.
            </p>
          </motion.div>

          {/* HERO IMAGE PLACEHOLDER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="py-2"
          >
            <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 group bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
              {/* Visual placeholder — ganti dengan Image component saat deploy */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 bg-red-500/20 border border-red-500/50 rounded-sm flex items-center justify-center">
                      <ShieldX size={36} className="text-red-400" />
                    </div>
                    <div className="text-4xl font-mono text-white/20">VS</div>
                    <div className="w-20 h-20 bg-[#00FF9D]/20 border border-[#00FF9D]/50 rounded-sm flex items-center justify-center">
                      <ShieldCheck size={36} className="text-[#00FF9D]" />
                    </div>
                  </div>
                  <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">
                    Palsu vs Original // Visual Concept
                  </p>
                </div>
              </div>
              {/* Uncomment & ganti saat cover image sudah ada: */}
              {/* <Image src="/article/cover-anti-palsu.png" alt="Kaos Original vs Palsu Indonesia" fill priority className="object-cover group-hover:scale-105 transition-transform duration-1000" /> */}
              <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#836EF9] border border-[#836EF9]/30 uppercase tracking-widest z-10">
                Visual_Data // Anti-Counterfeit System
              </figcaption>
            </figure>
          </motion.div>

          {/* ======================================================== */}
          {/* SEKSI 1: Kenapa Ini Masalah Serius                        */}
          {/* ======================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3 pt-4">
              <CircleDollarSign className="text-[#836EF9] shrink-0" size={28} />
              1. Skala Masalah: Mengapa Pemalsuan Fashion Begitu Merajalela?
            </h2>
            <p>
              Pemalsuan bukan hanya soal kualitas yang lebih buruk. Ini adalah
              masalah multidimensi yang merugikan banyak pihak secara
              bersamaan. Konsumen dirugikan karena membayar harga yang tidak
              sepadan. Desainer dan merek independen kehilangan penghasilan yang
              seharusnya menjadi hak mereka. Dan dalam skala yang lebih besar,
              industri kreatif sebagai ekosistem menjadi lemah karena
              seniman tidak mendapatkan apresiasi yang layak.
            </p>
            <p>
              Di pasar streetwear lokal Indonesia, masalah ini bahkan lebih
              mengkhawatirkan. Merek-merek independen yang baru tumbuh —
              yang seringkali beroperasi dalam skala kecil dengan margin tipis
              — menjadi yang paling rentan terhadap peniruan. Sebuah desain
              yang membutuhkan berbulan-bulan riset dan produksi bisa
              "diduplikasi" dan dijual dengan harga jauh lebih murah dalam
              hitungan minggu.
            </p>

            {/* Warning Box */}
            <div className="bg-red-900/10 border border-red-500/30 p-6 rounded-sm flex gap-4 items-start my-8">
              <AlertTriangle
                className="text-red-400 shrink-0 mt-1"
                size={20}
              />
              <div>
                <p className="text-red-300 font-bold text-sm uppercase tracking-widest mb-2">
                  Dampak Nyata Pemalsuan
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Menurut laporan Global Brand Counterfeiting Report, nilai
                  kerugian industri fashion akibat pemalsuan mencapai ratusan
                  miliar dolar per tahun secara global. Di Indonesia, laporan
                  BPOM dan Dirjen Bea Cukai secara berkala menyita produk
                  tekstil tiruan dalam jumlah yang sangat besar setiap
                  tahunnya.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* SEKSI 2: 5 Cara Cek Fisik                                 */}
          {/* ======================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-5 pt-8 border-t border-white/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <ScanLine className="text-[#836EF9] shrink-0" size={28} />
              2. Lima Cara Mengecek Keaslian Baju Secara Fisik
            </h2>
            <p>
              Sebelum masuk ke solusi teknologi, ada beberapa hal yang bisa
              kamu periksa sendiri secara langsung saat memegang atau menerima
              pakaian. Ini adalah <b className="text-white">langkah pertama</b>{" "}
              yang bisa mengeliminasi pemalsuan kelas bawah.
            </p>

            <ul className="space-y-6 mt-6">
              {[
                {
                  nomor: "01",
                  judul: "Periksa Kualitas Jahitan",
                  isi: "Balikkan kaos dan periksa bagian dalam. Jahitan original biasanya rapi, konsisten, dan tidak ada benang yang menjuntai. Tarik sedikit bagian jahitan — jika langsung mengendur atau terlihat longgar, itu pertanda kualitas jahitan yang buruk, ciri khas barang tiruan.",
                  icon: <CheckCircle2 size={20} className="text-[#00FF9D]" />,
                },
                {
                  nomor: "02",
                  judul: "Rasakan Berat dan Tekstur Kain",
                  isi: "Kaos berkualitas dengan material heavyweight cotton (seperti yang digunakan 0xTanda pada spesifikasi 235–245 gsm) terasa berat, berstruktur, dan tidak transparan meski diangkat melawan cahaya. Barang tiruan sering menggunakan kain murah yang terasa ringan, tipis, dan cepat kusut.",
                  icon: <CheckCircle2 size={20} className="text-[#00FF9D]" />,
                },
                {
                  nomor: "03",
                  judul: "Inspeksi Label dan Hangtag",
                  isi: "Perhatikan label di bagian dalam leher dan hangtag yang menggantung. Produk original memiliki label dengan cetakan yang tajam, font yang konsisten, dan informasi yang akurat (material, ukuran, cara perawatan). Pemalsuan sering kali memiliki label dengan warna yang sedikit berbeda, tulisan yang buram, atau informasi yang salah.",
                  icon: <CheckCircle2 size={20} className="text-[#00FF9D]" />,
                },
                {
                  nomor: "04",
                  judul: "Evaluasi Kualitas Sablon atau Bordir",
                  isi: "Sablon berkualitas (DTF, screen print high-density) terasa menyatu dengan kain, warnanya solid dan tidak mudah terkelupas. Sablon palsu sering terasa seperti stiker yang menempel di atas permukaan kain, warnanya tidak akurat, dan mulai retak atau terkelupas setelah beberapa kali cuci.",
                  icon: <CheckCircle2 size={20} className="text-[#00FF9D]" />,
                },
                {
                  nomor: "05",
                  judul: "Cek Kemasan dan Aksesori",
                  isi: "Produk original biasanya hadir dengan kemasan yang terstandarisasi dan aksesori tambahan (kartu, stiker, atau dokumen) yang berkualitas. Kemasan yang lecek, plastik tipis tanpa branding, atau tidak adanya aksesori yang seharusnya ada bisa menjadi tanda peringatan.",
                  icon: <CheckCircle2 size={20} className="text-[#00FF9D]" />,
                },
              ].map((item) => (
                <li
                  key={item.nomor}
                  className="bg-white/5 border border-white/10 p-6 rounded-sm flex flex-col md:flex-row gap-5 items-start"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-[#836EF9] font-bold text-xs">
                      {item.nomor}
                    </span>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base uppercase tracking-widest mb-2">
                      {item.judul}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.isi}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ======================================================== */}
          {/* SEKSI 3: Tabel Perbandingan                               */}
          {/* ======================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-5 pt-8 border-t border-white/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Tabel Perbandingan: Kaos Original vs Palsu
            </h2>
            <p className="text-base text-neutral-400">
              Berikut ringkasan perbedaan utama yang bisa kamu jadikan
              referensi cepat:
            </p>

            {/* Tabel Mobile-Friendly sebagai Card List */}
            <div className="space-y-3 mt-6">
              <div className="grid grid-cols-3 gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 pb-2 border-b border-white/5">
                <span>Aspek</span>
                <span className="text-[#00FF9D]">Original ✓</span>
                <span className="text-red-400">Palsu ✗</span>
              </div>
              {COMPARISON_DATA.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-3 gap-3 py-4 border-b border-white/5 text-sm"
                >
                  <span className="text-white font-bold text-[11px] uppercase tracking-widest leading-snug">
                    {row.aspek}
                  </span>
                  <div className="flex items-start gap-2">
                    {row.iconOriginal}
                    <span className="text-neutral-300 text-[11px] leading-snug">
                      {row.original}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    {row.iconPalsu}
                    <span className="text-neutral-500 text-[11px] leading-snug">
                      {row.palsu}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* SEKSI 4: Keterbatasan Metode Fisik (BRIDGE TO BLOCKCHAIN) */}
          {/* ======================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-5 pt-8 border-t border-white/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <ShieldX className="text-red-400 shrink-0" size={28} />
              3. Masalahnya: Semua Cara Fisik Itu Bisa Ditipu
            </h2>
            <p>
              Lima cara di atas efektif untuk mengeliminasi pemalsuan kelas
              rendah. Tapi industri pemalsuan terus berevolusi. Pemalsir kelas
              tinggi{" "}
              <b className="text-white">
                sudah lama mampu mereplikasi jahitan, label, hingga kemasan
              </b>{" "}
              dengan tingkat akurasi yang sulit dibedakan oleh mata biasa.
            </p>

            {/* Blockquote masalah inti */}
            <div className="bg-[#836EF9]/10 border-l-4 border-[#836EF9] p-6 my-6">
              <p className="text-white italic text-lg md:text-xl leading-relaxed">
                "Jika sebuah produk palsu terlihat sama, terasa sama, dan
                dikemas sama — bagaimana cara membuktikan bahwa yang kamu
                pegang adalah yang asli?"
              </p>
            </div>

            <p>
              Ini adalah pertanyaan yang selama puluhan tahun tidak memiliki
              jawaban yang memuaskan. Nota kertas bisa dipalsukan. QR code
              statis bisa disalin. Hologram pun sudah mulai bisa ditiru.
              Setiap sistem keamanan berbasis fisik menghadapi satu kelemahan
              fundamental yang sama:{" "}
              <b className="text-white">
                ia bisa diduplikasi oleh siapa pun dengan alat yang cukup
              </b>
              .
            </p>
          </motion.div>

          {/* ======================================================== */}
          {/* SEKSI 5: Solusi Blockchain                                */}
          {/* ======================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-5 pt-8 border-t border-white/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Fingerprint className="text-[#00FF9D] shrink-0" size={28} />
              4. Solusi Permanen: Blockchain sebagai Mesin Kebenaran
            </h2>
            <p>
              Di sinilah teknologi blockchain mengubah segalanya. Berbeda
              dengan semua sistem keamanan berbasis fisik,{" "}
              <b className="text-white">
                blockchain adalah buku catatan digital publik yang tidak bisa
                diubah oleh siapa pun
              </b>
              . Sekali sebuah data dicatat di dalamnya, data tersebut bersifat
              permanen, transparan, dan dapat diverifikasi oleh siapa saja di
              seluruh dunia.
            </p>
            <p>
              Ketika sebuah produk pakaian memiliki{" "}
              <b className="text-white">Digital Twin NFT</b> yang tercatat di
              blockchain, ia mendapatkan sesuatu yang tidak dimiliki oleh
              produk konvensional manapun: identitas digital yang unik,
              mustahil diduplikasi, dan terhubung langsung dengan jejak sejarah
              produksi (provenance) yang mutlak.
            </p>

            {/* Box Cara Kerja */}
            <div className="bg-black border border-[#00FF9D]/30 p-6 md:p-8 rounded-sm relative mt-8">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF9D] to-transparent opacity-50" />
              <h3 className="text-[#00FF9D] text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] uppercase flex items-center gap-2 mb-6">
                <Hash size={14} /> Bagaimana NFT Digital Twin Membuktikan
                Keaslian?
              </h3>
              <div className="space-y-5">
                {[
                  {
                    step: "01",
                    text: "Saat sebuah produk diproduksi, brand membuat dan mencatat NFT unik ke blockchain. Setiap NFT punya identitas yang tidak ada duplikatnya — seperti sidik jari digital.",
                  },
                  {
                    step: "02",
                    text: "NFT tersebut terikat pada satu unit produk fisik tertentu, dan bisa diklaim oleh pembeli resmi melalui sistem terenkripsi (seperti Secret Code di Genesis Card 0xTanda).",
                  },
                  {
                    step: "03",
                    text: "Siapa pun di dunia bisa memverifikasi keaslian produk dengan mengecek Smart Contract di blockchain explorer — transparan dan real-time, tanpa perlu menghubungi brand.",
                  },
                  {
                    step: "04",
                    text: "Pemalsir tidak bisa membuat NFT duplikat dari Smart Contract yang sama. Mereka bisa meniru fisiknya, tapi tidak bisa memalsukan data yang sudah tertulis di blockchain.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="font-mono text-[#00FF9D] text-xs font-bold bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-3 py-1.5 rounded-sm shrink-0">
                      {item.step}
                    </span>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* SEKSI 6: 0xTanda Case Study                               */}
          {/* ======================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-5 pt-8 border-t border-white/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Zap className="text-[#836EF9] shrink-0" size={28} />
              5. Studi Kasus: Bagaimana 0xTanda Menerapkan Sistem Ini?
            </h2>
            <p>
              0xTanda adalah brand streetwear pertama di Indonesia yang
              menerapkan sistem verifikasi keaslian berbasis blockchain secara
              penuh. Berikut adalah arsitektur sistem yang kami bangun:
            </p>

            {/* Diagram Sistem */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                {
                  nomor: "LAPISAN 1",
                  judul: "Fisik Berkualitas Tinggi",
                  deskripsi:
                    "Kaos heavyweight cotton 235–245 gsm, sablon DTF high-density, jahitan double-stitched. Bukti keaslian fisik pertama.",
                  warna: "border-white/20",
                  warnaText: "text-white",
                },
                {
                  nomor: "LAPISAN 2",
                  judul: "Genesis Collection Card",
                  deskripsi:
                    "Kartu fisik dengan panel perak terenkripsi berisi 12-digit Secret Code. Kunci untuk mengklaim kembaran digital.",
                  warna: "border-[#836EF9]/50",
                  warnaText: "text-[#836EF9]",
                },
                {
                  nomor: "LAPISAN 3",
                  judul: "Digital Twin NFT",
                  deskripsi:
                    "Aset digital ERC-721 di jaringan Monad. Bukti kepemilikan on-chain yang permanen, transparan, dan tidak bisa dipalsukan.",
                  warna: "border-[#00FF9D]/50",
                  warnaText: "text-[#00FF9D]",
                },
              ].map((layer) => (
                <div
                  key={layer.nomor}
                  className={`bg-[#121212] border ${layer.warna} p-6 rounded-sm space-y-3`}
                >
                  <span
                    className={`font-mono text-[9px] font-bold uppercase tracking-[0.3em] ${layer.warnaText}`}
                  >
                    {layer.nomor}
                  </span>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest leading-tight">
                    {layer.judul}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {layer.deskripsi}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6">
              Sistem tiga lapisan ini berarti: bahkan jika seseorang berhasil
              meniru fisik kaos 0xTanda dengan sempurna, mereka{" "}
              <b className="text-white">tidak akan bisa menghadirkan</b> NFT
              yang tercatat di Smart Contract kami. Dan tanpa NFT itu, produk
              tersebut tidak akan bisa diverifikasi sebagai produk asli —
              cukup dengan dicek di explorer publik oleh siapa saja.
            </p>

            {/* Smart Contract Info Box */}
            <div className="bg-black border border-[#00FF9D]/30 p-5 md:p-6 rounded-sm mt-6">
              <p className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase mb-2">
                Smart Contract Resmi 0xTanda // Jaringan Monad
              </p>
              <p className="text-[12px] md:text-sm text-[#00FF9D] font-mono break-all mb-4">
                0x75c294c9f8576FDF882cAAEf9d4316589b638610
              </p>
              <a
                href="https://monadvision.com/address/0x75c294c9f8576FDF882cAAEf9d4316589b638610?portfolio=Info&tab=Events&mode=overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00FF9D] border border-[#00FF9D]/30 bg-[#00FF9D]/10 hover:bg-[#00FF9D] hover:text-black transition-all px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold rounded-sm"
              >
                <ExternalLink size={12} /> Verifikasi On-Chain (Monad Explorer)
              </a>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* SEKSI 7: Kesimpulan & CTA                                 */}
          {/* ======================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6 pt-8 border-t border-white/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <ShieldCheck className="text-[#836EF9] shrink-0" size={28} />
              Kesimpulan: Era Baru Keaslian yang Tidak Bisa Dibohongi
            </h2>
            <p>
              Cara-cara fisik untuk mengecek keaslian pakaian tetap relevan dan
              penting sebagai langkah pertama. Namun, di era di mana
              pemalsiran semakin canggih, kita membutuhkan lebih dari sekadar
              inspeksi mata dan tangan.
            </p>
            <p>
              Blockchain dan NFT Digital Twin bukan sekadar teknologi keren
              atau kata-kata baru — ini adalah infrastruktur keaslian yang
              sesungguhnya. Sebuah sistem di mana pembuktian bukan bergantung
              pada kepercayaan kepada penjual, tetapi pada kode matematika yang
              bisa diverifikasi oleh siapa pun, kapan pun, di mana pun.
            </p>

            <div className="bg-[#836EF9]/10 border-l-4 border-[#836EF9] p-6 my-6">
              <p className="text-white italic text-lg md:text-xl leading-relaxed font-serif">
                "Tangible craftsmanship you can feel, secured by digital
                ownership you can prove."
              </p>
              <p className="text-[#836EF9] font-mono text-xs uppercase tracking-widest mt-3">
                — 0xTanda
              </p>
            </div>

            <p>
              Di 0xTanda, setiap produk yang kami rilis membawa dua dimensi
              kepastian: kualitas fisik yang bisa Anda rasakan, dan bukti
              digital yang bisa Anda tunjukkan ke dunia. Itulah standar baru
              kepemilikan fashion yang kami percayai.
            </p>

            {/* CTA Button */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#836EF9] text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm shadow-[0_0_30px_rgba(131,110,249,0.3)]"
              >
                Lihat Produk 0xTanda <ArrowRight size={16} />
              </Link>
              <Link
                href="/verify"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#00FF9D]/10 border border-[#00FF9D]/50 text-[#00FF9D] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#00FF9D] hover:text-black transition-all rounded-sm"
              >
                Verifikasi Produk <ShieldCheck size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* ============================================================ */}
      {/* INTERNAL LINKS — SEO Internal Linking                         */}
      {/* ============================================================ */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <h4 className="font-mono text-[#836EF9] text-[10px] tracking-[0.4em] uppercase mb-4 text-center md:text-left">
            Baca Juga:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/terminal-log/digital-twin-nft"
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#836EF9]/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  System Log 03
                </p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#836EF9] transition-colors flex items-start gap-2 justify-between">
                  Apa Itu Digital Twin NFT?{" "}
                  <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
            <Link
              href="/terminal-log/cara-klaim-nft"
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#00FF9D]/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  System Log 02
                </p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#00FF9D] transition-colors flex items-start gap-2 justify-between">
                  Cara Klaim NFT 0xTanda Step-by-Step{" "}
                  <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
            <Link
              href="/terminal-log/phygital-fashion-indonesia"
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-white/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  System Log 01
                </p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-white transition-colors flex items-start gap-2 justify-between">
                  Apa Itu Phygital Fashion?{" "}
                  <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.5em]">
          0XTANDA_DIGITAL_ARCHIVE_ISSUE_006_LOCKED
        </p>
      </footer>
    </main>
  );
}