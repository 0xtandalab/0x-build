import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Jalur relatif untuk keamanan preview
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import { ArrowRight } from 'lucide-react';

/**
 * Halaman Home 0xTanda.
 * Logo Ultra Mega (Lebar Maksimal) dengan jarak yang sangat rapat (meppet)
 * agar semua konten muat dalam satu layar tanpa scroll.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-black overflow-hidden">
      <Marquee />
      <Navbar />

      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        {/* Latar Belakang Cahaya */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl aspect-square bg-brand-purple/5 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="relative z-10 text-center fade-in flex flex-col items-center w-full">
          {/* Teks Atas - Margin sangat kecil */}
          <p className="font-mono text-brand-purple text-[9px] tracking-[0.7em] mb-4 uppercase opacity-70">
            Est. 2026 Jakarta // Digital Archive
          </p>
          
          {/* ULTRA MEGA LOGO - Sangat Lebar, Tinggi Ramping, Margin Meppet */}
          <div className="relative w-[110vw] max-w-[1200px] h-[180px] md:max-w-[2800px] md:h-[420px] mb-2 animate-glitch">
            <Image 
              src="/branding/logo-0xtanda.png"
              alt="0xTanda Official Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Deskripsi - Margin Meppet */}
          <div className="max-w-3xl mx-auto mb-6">
            <p className="font-mono text-[#00FF9D] text-[10px] md:text-[13px] tracking-[0.4em] leading-relaxed uppercase">
              Tangible craftsmanship you can feel, secured by digital ownership you can prove.
            </p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
            <Link 
              href="/shop" 
              className="group bg-brand-purple text-black px-12 py-4 font-mono text-[10px] font-bold rounded-sm flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_40px_rgba(131,110,249,0.3)]"
            >
              ENTER COLLECTIONS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about" 
              className="px-12 py-4 border border-white/10 font-mono text-[10px] font-bold rounded-sm hover:bg-white/5 hover:border-white/30 transition-all text-center uppercase tracking-[0.4em]"
            >
              MANIFESTO
            </Link>
          </div>
        </div>
        
        {/* Specs di pojok bawah */}
        <div className="absolute bottom-6 left-0 w-full px-10 flex justify-between items-end opacity-20 select-none pointer-events-none font-mono text-[7px] tracking-[0.5em] uppercase">
          <div>System_Live // 2026</div>
          <div className="text-right italic">JKT_ARCHIVE_01</div>
        </div>
      </section>
    </main>
  );
}