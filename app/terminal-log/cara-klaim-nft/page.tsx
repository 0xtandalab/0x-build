"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import { 
  ShieldCheck, Scan, Wallet, User, Calendar, Clock, ArrowLeft, 
  CheckCircle2, MessageSquareWarning, AlertTriangle, Send, ChevronRight, Zap 
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

export default function CaraKlaimNFTPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#00FF9D] selection:text-black font-sans relative">
      {/* READING PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#836EF9] to-[#00FF9D] z-[100] origin-left" style={{ scaleX }} />

      {/* HEADER ARTIKEL JURNAL */}
      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/terminal-log" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#00FF9D] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            {/* Tag Kategori Jurnal */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#00FF9D] uppercase font-bold">
              <span className="bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-3 py-1 rounded-full">Tutorial & Guide</span>
              <span className="text-neutral-500">// Archive_02</span>
            </motion.div>

            {/* Judul Artikel */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white">
              Cara Klaim NFT Fashion 0xTanda: Panduan Lengkap Step-by-Step | 0xTanda
            </motion.h1>

            {/* Sub-judul / Deck */}
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#00FF9D] font-light leading-relaxed">
              Cara Klaim NFT Baju 0xTanda-mu dalam 5 Menit — Tanpa Ribet, Tanpa Harus Jago Crypto.
            </motion.p>

            {/* Metadata Penulis */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#00FF9D]/20 flex items-center justify-center border border-[#00FF9D]/50">
                  <User size={12} className="text-[#00FF9D]" />
                </div>
                <span className="font-bold text-white">0xTanda Concierge Team</span>
              </div>
              <div className="flex items-center gap-2"><Calendar size={14} /> 15 Maret 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} /> 4 Min Read</div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* BODY ARTIKEL */}
      <article className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="space-y-10 text-[17px] md:text-[19px] text-neutral-300 leading-[1.8] font-light">
            
            {/* PENDAHULUAN DENGAN DROP CAP */}
            <motion.div variants={fadeUp}>
              <p>
                <span className="float-left text-6xl md:text-7xl font-bold text-[#00FF9D] mr-4 mt-2 leading-none font-serif">M</span>
                emasuki dunia Web3 dan blockchain sering kali terasa menakutkan bagi pemula. Istilah teknis seperti <i>gas fee</i>, <i>smart contract</i>, atau <i>crypto wallet</i> sering menjadi hambatan. Namun, di 0xTanda, kami telah meruntuhkan tembok tersebut.
              </p>
              <p className="mt-6">
                Melalui protokol <b>Concierge Airdrop</b> kami, mengklaim Digital Twin (kembaran digital berbentuk NFT) dari pakaian fisik Anda kini semudah mengisi formulir daring biasa. Anda tidak perlu memikirkan kerumitan teknis, apalagi membayar biaya transaksi jaringan. Kami yang akan mengurus semuanya untuk Anda.
              </p>
              <p className="mt-6 font-bold text-white">
                Berikut adalah panduan lengkap langkah demi langkah untuk mengaktifkan aset digital Anda.
              </p>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div variants={fadeUp} className="py-6">
              <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 group bg-white/5">
                <Image src="/article/cover-tutorial-klaim.png" alt="Panduan Klaim NFT 0xTanda" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#00FF9D] border border-[#00FF9D]/30 uppercase tracking-widest">
                  System_Log // Concierge Tutorial
                </figcaption>
              </figure>
            </motion.div>

            {/* SEKSI 1 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-4">
                <span className="text-[#00FF9D] font-mono mr-3">1.</span> Yang Kamu Butuhkan Sebelum Mulai (Checklist 3 Item)
              </h2>
              <p>Sebelum mengakses portal aktivasi, pastikan tiga hal utama ini sudah ada di tangan Anda:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-[#121212] border border-white/10 p-6 rounded-sm space-y-4">
                  <div className="text-[#836EF9]"><Scan size={24} /></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest leading-tight">Genesis Collection Card (Kartu NFT Fisik)</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Kartu ini terdapat di dalam paket pengiriman bersama dengan baju 0xTanda Anda. Kartu ini memiliki panel perak di bagian belakang yang bisa digosok untuk memunculkan 12 digit Secret Code (Kode Rahasia).
                  </p>
                </div>
                <div className="bg-[#121212] border border-white/10 p-6 rounded-sm space-y-4">
                  <div className="text-[#00FF9D]"><Wallet size={24} /></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest leading-tight">Crypto Wallet Pribadi (Phantom atau MetaMask)</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Anda memerlukan dompet digital pribadi (bukan dari exchange atau bursa kripto seperti Indodax/Binance). Kami sangat menyarankan Anda mengunduh aplikasi Phantom atau MetaMask di smartphone Anda karena penggunaannya yang sangat ramah pemula.
                  </p>
                </div>
                <div className="bg-[#121212] border border-white/10 p-6 rounded-sm space-y-4">
                  <div className="text-[#836EF9]"><CheckCircle2 size={24} /></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest leading-tight">Bukti Pembelian (Struk/Screenshot)</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Siapkan tangkapan layar (screenshot) bukti transfer atau rincian pesanan saat Anda membeli produk fisik 0xTanda sebagai lapis keamanan tambahan.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SEKSI 2 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8">
                <span className="text-[#00FF9D] font-mono mr-3">2.</span> Langkah 1–5: Dari Scan Barcode Hingga NFT Masuk ke Walletmu
              </h2>
              <p>Proses ini dirancang agar dapat diselesaikan dalam waktu kurang dari 5 menit.</p>
              
              <ul className="space-y-8 mt-8 border-l border-white/10 pl-6 md:pl-8 ml-2">
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">1</span>
                  <strong className="text-white block mb-2 text-lg">Siapkan Phantom atau MetaMask Wallet</strong>
                  Unduh aplikasi Phantom atau MetaMask dari App Store atau Google Play. Ikuti instruksi untuk membuat dompet baru. <b className="text-[#00FF9D]">Peringatan Keamanan Sangat Penting:</b> Anda akan diberikan 12 kata rahasia (Recovery Phrase / Seed Phrase). Tulis kata-kata tersebut di kertas dan simpan di tempat yang aman. Jangan pernah membagikan 12 kata itu kepada siapa pun, termasuk tim 0xTanda.
                </li>
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">2</span>
                  <strong className="text-white block mb-2 text-lg">Scan Barcode atau Kunjungi Website Verifikasi</strong>
                  Buka kamera smartphone Anda dan pindai (scan) QR Code yang ada di bagian belakang Genesis Card, atau Anda bisa langsung mengetik <code className="bg-white/10 px-2 py-0.5 text-[#00FF9D] font-mono text-sm">0xtanda.xyz/verify</code> di browser Anda.
                </li>
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">3</span>
                  <strong className="text-white block mb-2 text-lg">Gosok dan Masukkan Kode Rahasia</strong>
                  Gosok perlahan panel pelindung perak pada Genesis Card Anda menggunakan koin. Masukkan 12 digit kode alfanumerik yang tersembunyi di baliknya ke dalam kolom pertama di formulir website.
                </li>
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">4</span>
                  <strong className="text-white block mb-2 text-lg">Salin Alamat Wallet (Wallet Address)</strong>
                  Buka aplikasi Phantom atau MetaMask Anda. Di bagian paling atas aplikasi, Anda akan melihat deretan huruf dan angka yang diawali dengan <code>0x...</code> (contoh: 0x1234abcd...). Gunakan <b>Jaringan MONAD</b> atau Alamat wallet MONAD, ketuk deretan angka tersebut untuk menyalinnya (copy), lalu tempelkan (paste) ke kolom "Wallet Address" di formulir website.
                </li>
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">5</span>
                  <strong className="text-white block mb-2 text-lg">Lengkapi Data & Submit</strong>
                  Isi sisa formulir dengan nama, kontak, dan unggah foto bukti pembelian Anda. Klik tombol "Submit". Selesai! Tim 0xTanda akan menanggung seluruh biaya jaringan (gas fee) dan mengirimkan (Airdrop) NFT tersebut ke dompet Anda secara manual dalam waktu maksimal 1x24 jam.
                </li>
              </ul>
            </motion.div>

            {/* SEKSI 3 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8">
                <span className="text-[#00FF9D] font-mono mr-3">3.</span> Apa yang Bisa Kamu Lakukan dengan NFT Setelah Diklaim?
              </h2>
              <div className="bg-[#00FF9D]/5 border border-[#00FF9D]/30 p-6 md:p-8 rounded-sm space-y-4">
                <p>
                  Setelah aset digital 0xTanda mendarat di dompet Wallet Anda, status Anda resmi ditingkatkan menjadi <b>Verified Holder</b>. Aset ini bukanlah sebuah instrumen investasi untuk tujuan jual-beli demi keuntungan semata, melainkan sebuah utilitas yang memberikan nilai tambah pada pakaian Anda:
                </p>
                <ul className="space-y-4 mt-6 text-[15px] md:text-base">
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="text-[#00FF9D] shrink-0 mt-1" size={20} />
                    <div>
                      <b className="text-white">Sertifikat Keaslian :</b> NFT Anda adalah bukti kriptografis mutlak bahwa pakaian fisik yang Anda miliki adalah 100% original dari fasilitas produksi kami.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Zap className="text-[#00FF9D] shrink-0 mt-1" size={20} />
                    <div>
                      <b className="text-white">Akses Diskon & Prioritas:</b> Memegang NFT ini memberikan Anda pengakuan di dalam sistem kami, membuka akses untuk diskon khusus pada rilis produk fisik di masa depan, serta mendapatkan sneak peak pembelian (whitelist) sebelum produk dijual ke publik.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* SEKSI 4 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8">
                <span className="text-[#00FF9D] font-mono mr-3">4.</span> Masalah Umum Saat Klaim dan Cara Mengatasinya
              </h2>
              <p>Kendala teknis sesekali bisa terjadi. Berikut adalah solusi cepat untuk beberapa skenario yang paling umum:</p>
              
              <div className="grid gap-4 mt-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <h4 className="text-red-400 font-bold text-base flex items-center gap-2 mb-3">
                    <MessageSquareWarning size={18} /> Peringatan "Kode Sudah Digunakan"
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Kode pada Genesis Card hanya berlaku satu kali. Jika Anda mendapatkan pesan ini tetapi merasa belum pernah mengklaimnya, jangan panik. Kemungkinan Anda menekan tombol "Submit" dua kali (double click). Tim kami akan memverifikasi antrean secara manual.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <h4 className="text-yellow-400 font-bold text-base flex items-center gap-2 mb-3">
                    <AlertTriangle size={18} /> Peringatan "Alamat Wallet Tidak Valid"
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Sistem kami mendeteksi jika format dompet Anda salah. Pastikan Anda menyalin alamat lengkap dari aplikasi Phantom atau MetaMask Anda. Alamat yang valid Jaringan MONAD yang diawali dengan angka nol dan huruf x kecil (0x...). Jangan pernah memasukkan alamat rekening dari bursa kripto (Exchange).
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <h4 className="text-[#38BDF8] font-bold text-base flex items-center gap-2 mb-3">
                    <Clock size={18} /> NFT Belum Masuk Setelah 24 Jam
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Proses pengiriman kami lakukan secara teliti dan manual demi keamanan bersama. Jika melewati batas 1x24 jam, Anda dapat langsung menghubungi layanan dukungan pelanggan (Concierge) kami melalui Telegram untuk pengecekan cepat.{' '}
                    <a href="https://t.me/Official0xTanda" target="_blank" rel="noopener noreferrer" className="text-[#00FF9D] hover:underline font-bold">
                      (Link Telegram CS)
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SEKSI 5 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8">
                <span className="text-[#00FF9D] font-mono mr-3">5.</span> Tanya Komunitas: Bergabung ke Telegram 0xTanda Official
              </h2>
              <p>
                Mempelajari teknologi baru akan jauh lebih mudah jika dilakukan bersama-sama. Revolusi Web3 dan Phygital Fashion dibangun di atas kekuatan komunitas.
              </p>
              <p>
                Jika Anda masih memiliki pertanyaan seputar cara menginstal dompet kripto, cara menjaga keamanan seed phrase, atau sekadar ingin berdiskusi mengenai arah tren pakaian dan karya seni di masa depan, pintu komunitas kami selalu terbuka lebar.
              </p>
              <p className="font-bold text-white pt-4">
                Bergabung dengan komunitas resmi kami:
              </p>
              <div className="mt-6">
                <a href="https://t.me/Official0xTanda" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#00FF9D]/10 border border-[#00FF9D]/50 text-[#00FF9D] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#00FF9D] hover:text-black transition-all rounded-sm shadow-[0_0_20px_rgba(0,255,157,0.1)]">
                  <Send size={16} /> Bergabung ke Telegram Official 0xTanda
                </a>
              </div>
              <p className="pt-8 font-medium text-[#00FF9D] italic text-center text-sm md:text-base border-t border-white/5 mt-8">
                “Tangible craftsmanship you can feel, secured by digital ownership you can prove.”
              </p>
            </motion.div>

          </motion.div>
        </div>
      </article>

      {/* INTERNAL LINKS (Recommended Next Steps) */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h4 className="font-mono text-[#00FF9D] text-[10px] tracking-[0.4em] uppercase mb-4 text-center md:text-left">Lanjutkan Membaca:</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/shop" className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#00FF9D]/50 transition-all rounded-sm">
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Katalog 0xTanda</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#00FF9D] transition-colors flex items-start gap-2 justify-between">
                  Kembali ke Halaman Produk Koleksi Aktif <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
            <Link href="/terminal-log" className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-white/50 transition-all rounded-sm">
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">System Log</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-white transition-colors flex items-start gap-2 justify-between">
                  Baca Artikel Phygital Fashion Lainnya <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER SOSIAL */}
      <footer className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.5em]">0XTANDA_DIGITAL_ARCHIVE_ISSUE_002_LOCKED</p>
        </div>
      </footer>
    </main>
  );
}