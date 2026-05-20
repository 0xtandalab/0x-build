"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BarChart2, RefreshCcw, Brain, Fingerprint, ArrowLeft, ChevronRight, ArrowRight, User, Calendar, Clock
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

export default function YonoVsYoloArticlePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#836EF9] selection:text-black font-sans relative">
      {/* HEADER ARTIKEL JURNAL */}
      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/terminal-log" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#836EF9] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#836EF9] uppercase font-bold">
              <span className="bg-[#836EF9]/10 border border-[#836EF9]/30 px-3 py-1 rounded-full">Editorial</span>
              <span className="text-neutral-500">// Archive_07</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white">
              YONO vs YOLO: Ketika Generasi yang Lahir dari Impulse Buying Mulai Mempertanyakan Lemari Bajunya Sendiri
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#836EF9] font-light leading-relaxed">
              Sistem dirancang agar kamu terus membeli. Tapi ada error di dalam loop itu. Dan Gen Z mulai melihatnya.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#836EF9]/20 flex items-center justify-center border border-[#836EF9]/50">
                  <User size={12} className="text-[#836EF9]" />
                </div>
                <span className="font-bold text-white">0xTanda Lab</span>
              </div>
              <div className="flex items-center gap-2"><Calendar size={14} /> 19 Mei 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} /> ~8 menit</div>
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
              <span className="float-left text-6xl md:text-7xl font-bold text-[#836EF9] mr-4 mt-2 leading-none font-serif">K</span>
              amu punya berapa baju?
            </p>
            <p className="mt-6">
              Buka lemarimu. Hitung. Bukan yang sering dipakai — hitung semuanya. Yang terlipat rapi di belakang. Yang masih ada tag-nya. Yang dibeli karena diskon flash sale pukul 00.00. Yang terasa "sayang dibuang" padahal sudah setahun tidak pernah disentuh.
            </p>
            <p className="mt-6">
              Angkanya lebih besar dari yang kamu kira.
            </p>
            <p className="mt-6">
              Dan di suatu titik, angka itu berhenti terasa seperti kekayaan. Ia mulai terasa seperti catatan kesalahan.
            </p>
            <p className="mt-6">
              Generasi yang dibesarkan dengan notifikasi checkout, OOTD culture, dan filosofi YOLO — You Only Live Once, hidup sekali jadi belilah saja — kini menghadapi paradoks yang tidak pernah diajarkan di sekolah: punya banyak, tapi tidak benar-benar memiliki apapun.
            </p>
            <p className="mt-6">
              Di sinilah YONO masuk. Bukan sebagai tren estetika. Tapi sebagai sinyal bahwa sesuatu di dalam sistem sudah mulai rusak.
            </p>
          </motion.div>

          {/* COVER IMAGE */}
          <motion.div variants={fadeUp} className="py-6">
            <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 bg-white/5 group flex items-center justify-center">
              <Image 
                src="/article/cover-yono-vs-yolo.png" 
                alt="YONO vs YOLO Concept" 
                width={1600}
                height={900}
                priority
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-[#836EF9]/10 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
              <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#836EF9] border border-[#836EF9]/30 uppercase tracking-widest z-10">
                Consumption_Loop // Error_Detected
              </figcaption>
            </figure>
          </motion.div>

          {/* SEKSI A */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <BarChart2 className="text-[#836EF9]" size={28} /> A. Angka-Angka yang Tidak Ada di Caption Instagram
            </h2>
            <p>
              Mari kita mulai dari fakta.
            </p>
            <p>
              Sebuah riset terhadap perilaku konsumsi Gen Z di Indonesia menemukan angka yang mengejutkan: 56,2% membeli pakaian baru setiap bulan. Dan 75,6% melakukan impulse buying — membeli tanpa rencana, dipicu diskon atau tampilan menarik di layar ponsel.
            </p>

            {/* CALLOUT BOX */}
            <div className="bg-[#836EF9]/10 border-l-2 border-[#836EF9] p-6 my-6 text-white italic">
              "Tiga dari empat orang. Setiap bulan. Tanpa benar-benar berniat membeli."
            </div>

            <p>
              Di sisi lain, data Kementerian Perdagangan mencatat bahwa pakaian adalah produk paling banyak dibeli di e-commerce Indonesia sepanjang 2024, dengan persentase 70,1% dari seluruh kategori — mengalahkan produk kecantikan, makanan, bahkan elektronik.
            </p>
            <p>
              Indonesia bukan hanya konsumen fashion. Indonesia adalah salah satu mesin konsumsi fashion terbesar di dunia.
            </p>
            <p>
              Dan biayanya?
            </p>
            <p>
              Limbah tekstil Indonesia diproyeksikan mencapai 3,5 juta ton pada 2030 — naik 68 persen dibanding 2019. Industri tekstil global menyumbang setidaknya 7 persen dari total sampah dunia. Di hulu produksinya, Sungai Citarum — sungai yang ada di negara yang sama dengan lemarimu — telah kehilangan 60 persen spesies ikannya akibat limbah pewarnaan tekstil.
            </p>
            <p>
              Tidak ada dari angka-angka ini yang muncul di konten "haul baju" yang kamu tonton tadi malam.
            </p>
          </motion.div>

          {/* SEKSI B */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <RefreshCcw className="text-[#836EF9]" size={28} /> B. YOLO ke YONO: Ini Bukan Soal Kesadaran Lingkungan
            </h2>
            <p>
              YONO — You Only Need One — bukan lahir dari kampanye sustainability yang dibiayai brand fashion mewah.
            </p>
            <p>
              Ia lahir dari tekanan.
            </p>
            <p>
              Pertama kali viral dari Korea, YONO adalah respons Gen Z terhadap dua krisis sekaligus: krisis ekonomi yang membuat "flex culture" terasa semakin absurd, dan krisis eksistensial ketika lemari yang penuh ternyata tidak membuat hidup terasa lebih penuh.
            </p>
            <p>
              Ini adalah perbedaan yang penting untuk dipahami.
            </p>
            <p>
              YONO bukan tentang menjadi minimalis yang estetis. Ia tentang satu pertanyaan radikal yang mulai berani ditanyakan oleh generasi yang selama ini diajarkan untuk tidak menunda kepuasan:
            </p>
            <p className="text-white font-bold">
              "Apakah aku benar-benar membutuhkan ini?"
            </p>
            <p>
              Dan di balik pertanyaan itu, ada kesadaran yang lebih gelap: bahwa selama bertahun-tahun, jawaban atas pertanyaan itu sudah dijawabkan lebih dulu — oleh algoritma, oleh flash sale, oleh notifikasi yang tahu persis kapan kamu paling rentan membuka aplikasi.
            </p>

            {/* BLOCKQUOTE */}
            <div className="bg-[#836EF9]/10 border-l-2 border-[#836EF9] p-6 my-6">
              <p className="text-white italic text-lg md:text-xl leading-relaxed">
                "YOLO memberi izin. YONO adalah pencabutan izin itu."
              </p>
            </div>

            <p>
              Tapi ada masalah.
            </p>
          </motion.div>

          {/* SEKSI C */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Brain className="text-[#836EF9]" size={28} /> C. Intention-Behavior Gap: Tahu Tapi Tidak Bisa Berhenti
            </h2>
            <p>
              Di sinilah narasi YONO mulai retak.
            </p>
            <p>
              Riset akademis menyebutnya intention-behavior gap — jurang antara niat dan tindakan nyata. Orang tahu fast fashion merusak. Mereka tahu impulse buying menguras dompet. Mereka setuju dengan prinsip YONO secara teoritis.
            </p>
            <p>
              Tapi angka impulse buying tidak turun.
            </p>
            <p>
              Kenapa?
            </p>
            <p>
              Karena sistem tidak dirancang untuk mendukung keputusan yang lambat.
            </p>
            <p>
              Algoritma TikTok dan Instagram bukan hanya cermin selera kamu — ia adalah instruksi pembelian yang sangat personal, dibangun dari data perilakumu selama bertahun-tahun. Setiap konten yang berhenti kamu scroll lebih dari dua detik adalah data. Setiap produk yang kamu zoom adalah data. Setiap jam berapa kamu membuka aplikasi adalah data.
            </p>
            <p>
              Lebih jauh lagi: brand fashion besar sudah menggunakan AI yang menganalisis jutaan gambar media sosial setiap hari untuk memprediksi apa yang akan kamu inginkan — hingga 24 bulan ke depan. Tren yang kamu "temukan" sendiri di FYP bulan ini, mungkin sudah diproduksi massal dua tahun yang lalu berdasarkan model prediktif yang melacak pola konsumsi jutaan orang seperti kamu.
            </p>
            <p>
              Kamu bukan yang menemukan tren itu. Kamu adalah konfirmasi dari prediksi yang sudah dibuat sebelum kamu sadar ingin membelinya.
            </p>
            <p>
              YONO adalah perlawanan terhadap sistem ini. Tapi perlawanan yang jujur harus dimulai dengan mengakui betapa dalamnya sistem itu sudah masuk.
            </p>
            <p>
              Capsule wardrobe yang diromantisasi di konten lifestyle? Itu bukan solusi untuk semua orang. "Beli sedikit, beli bagus" adalah privilege ketika harga barang berkualitas masih jauh di atas jangkauan UMR Jakarta.
            </p>
            <p>
              Masalahnya bukan pilihan antara fast fashion atau slow fashion.
            </p>
            <p className="text-white font-bold">
              Masalahnya adalah: kepemilikan yang sebenarnya tidak pernah diajarkan sebagai sebuah nilai.
            </p>

            {/* GRID 2-COL FAKTA KUNCI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm space-y-3">
                <p className="text-3xl font-bold text-[#836EF9] font-mono">76,7%</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Gen Z dipengaruhi konten sosmed dalam belanja baju
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm space-y-3">
                <p className="text-3xl font-bold text-[#836EF9] font-mono">24</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Bulan — brand fashion pakai AI prediksi tren hingga 24 bulan sebelum launching
                </p>
              </div>
            </div>
          </motion.div>

          {/* SEKSI D */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Fingerprint className="text-[#836EF9]" size={28} /> D. Bukan Tentang Membeli Lebih Sedikit — Tapi Memiliki dengan Cara yang Berbeda
            </h2>
            <p>
              Ada pertanyaan yang lebih fundamental dari "seberapa banyak yang cukup?":
            </p>
            <p className="text-white font-bold text-xl">
              Apa artinya benar-benar memiliki sesuatu?
            </p>
            <p>
              Dalam sistem yang sekarang ada, jawaban itu sangat kabur. Kamu membeli baju, tapi dalam tiga bulan modelnya sudah "ketinggalan." Kamu punya receipt-nya, tapi tidak ada cara membuktikan keasliannya. Nilai barangnya turun begitu keluar dari toko, bukan karena kualitasnya menurun, tapi karena sistem tidak pernah membangun infrastruktur untuk nilai yang bertahan.
            </p>
            <p>
              Fast fashion menjual ilusi kepemilikan. Kamu membeli sebuah baju, tapi yang sebenarnya kamu beli adalah akses sementara ke sebuah tren — yang akan digantikan oleh tren berikutnya dalam hitungan minggu.
            </p>
            <p>
              YONO bukan hanya tentang membeli lebih sedikit. Ia tentang menuntut bahwa setiap keputusan membeli harus berarti sesuatu. Bahwa setiap piece yang masuk ke lemarimu membawa nilai yang bisa diverifikasi, dipertahankan, dan dipindahtangankan secara sah.
            </p>

            {/* CALLOUT BOX */}
            <div className="bg-[#836EF9]/10 border border-[#836EF9]/30 p-6 md:p-8 rounded-sm mt-8">
              <p className="text-white font-bold text-lg md:text-xl leading-relaxed">
                Kepemilikan yang nyata bukan soal jumlah. Ia soal bukti.
              </p>
            </div>

            <p>
              Baju yang kamu beli hari ini — siapa yang bisa membuktikan kamu yang punya? Dalam berapa tahun, dan dengan cara apa, nilai itu bisa bertahan?
            </p>
            <p>
              Itulah pertanyaan yang seharusnya ditanyakan sebelum checkout berikutnya.
            </p>
          </motion.div>

          {/* PENUTUP */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 border-t border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Sistem Tidak Akan Berubah Sendiri
            </h2>
            <p>
              YONO adalah sinyal yang benar dengan solusi yang masih setengah jalan.
            </p>
            <p>
              Benar bahwa generasi ini mulai lelah dengan loop konsumsi tanpa akhir. Benar bahwa "lebih sedikit" lebih baik dari "lebih banyak."
            </p>
            <p>
              Tapi selama infrastruktur kepemilikan tidak berubah — selama baju yang kamu beli tidak punya catatan eksistensi, tidak punya verifikasi, tidak punya nilai yang bertahan melampaui satu musim tren — YONO hanya akan menjadi tren lain yang difoto untuk konten dan dilupakan di bulan berikutnya.
            </p>
            <p>
              Pergeseran yang nyata bukan di jumlah baju di lemarimu.
            </p>
            <p>
              Ia ada di pertanyaan yang kamu tanyakan sebelum membeli:
            </p>
            <p className="text-white font-bold text-xl md:text-2xl italic leading-relaxed">
              "Apakah ini sesuatu yang layak untuk benar-benar kumiliki?"
            </p>
            <p>
              Dan jika jawabannya ya — maka kepemilikan itu seharusnya bisa dibuktikan.
            </p>

            {/* CTA BUTTON */}
            <div className="pt-6">
              <Link 
                href="/shop" 
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#836EF9] text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm shadow-[0_0_30px_rgba(131,110,249,0.3)] w-full sm:w-auto"
              >
                LIHAT KOLEKSI GENESIS <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

        </div>
      </article>

      {/* INTERNAL LINKS */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <h4 className="font-mono text-[#836EF9] text-[10px] tracking-[0.4em] uppercase mb-4 text-center md:text-left">Archive Transmissions:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/terminal-log/phygital-fashion-indonesia" 
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#836EF9]/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">System Log 01</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#836EF9] transition-colors flex items-start gap-2 justify-between">
                  Apa Itu Phygital Fashion? <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
            <Link 
              href="/terminal-log/psikologi-koleksi" 
              className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#F43F5E]/50 transition-all rounded-sm"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">System Log 04</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#F43F5E] transition-colors flex items-start gap-2 justify-between">
                  Psikologi di Balik Mengoleksi <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="font-mono text-[7px] text-neutral-800 uppercase tracking-[0.5em]">0XTANDA_DIGITAL_ARCHIVE_ISSUE_007_LOCKED</p>
        </div>
      </footer>
    </main>
  );
}
