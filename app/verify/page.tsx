"use client";

import React from 'react';
import { ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';

// ============================================================================
// MOCK NEXT.JS (Hanya untuk keperluan Preview di layar Canvas)
// CATATAN UNTUK COPAS: 
// Saat menyalin kode ini ke file project asli Anda (VSCode/Vercel), 
// HAPUS bagian mock ini dan gunakan import bawaan Next.js berikut:
//
// import Link from 'next/link';
// ============================================================================
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);
// ============================================================================

export default function VerifyLandingPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white flex flex-col items-center justify-center pt-32 pb-6 px-6 relative overflow-hidden font-sans selection:bg-[#836EF9] selection:text-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#836EF9]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
        
        {/* Ikon Shield Online */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-black border border-[#00FF9D]/30 rounded-full mb-4 shadow-[0_0_40px_rgba(0,255,157,0.1)] relative">
          <div className="absolute inset-0 border border-[#00FF9D] rounded-full animate-ping opacity-20" />
          <ShieldCheck size={40} className="text-[#00FF9D]" />
        </div>

        {/* HEADER */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#836EF9] bg-[#836EF9]/10 px-4 py-1 rounded-full mb-2">
            <div className="w-2 h-2 bg-[#836EF9] rounded-full animate-pulse"/>
            <span className="text-[10px] text-[#836EF9] font-mono font-bold tracking-[0.2em] uppercase">SYSTEM_ONLINE // VERIFICATION_NODE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            ACTIVATION <span className="text-[#836EF9]">PORTAL</span>
          </h1>
          <p className="text-neutral-500 font-mono text-xs md:text-sm leading-relaxed tracking-widest uppercase max-w-2xl mx-auto italic">
            "Tangible craftsmanship you can feel, secured by digital ownership you can prove."
          </p>
        </div>

        {/* INSTRUKSI PENTING */}
        <div className="bg-[#121212] border border-white/10 p-6 md:p-8 rounded-sm mb-12 relative overflow-hidden group text-left shadow-2xl">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#836EF9] group-hover:w-full group-hover:opacity-5 transition-all duration-700" />
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-3 relative z-10">
            <AlertTriangle className="text-[#836EF9]" size={18} /> INSTRUKSI PENTING:
          </h3>
          <ul className="space-y-4 text-[10px] md:text-xs text-neutral-400 uppercase tracking-wide leading-relaxed relative z-10">
            <li className="flex gap-3 items-start">
              <span className="text-[#836EF9] font-bold shrink-0">01.</span> 
              <span>GOSOK panel pelindung pada Genesis Card untuk melihat Secret Code.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#836EF9] font-bold shrink-0">02.</span> 
              <span>PASTIKAN alamat wallet yang dimasukkan adalah Personal Wallet MONAD (Metamask/Phantom/Hot Wallet lainnya).</span>
            </li>
            <li className="flex gap-3 items-start text-red-500 font-bold bg-red-900/10 p-3 border border-red-900/30 rounded-sm">
              <span className="text-red-500 shrink-0">03.</span> 
              <span>🚫 DILARANG menggunakan alamat Exchange (Indodax/Binance/Tokocrypto/Bybit. dll).</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#836EF9] font-bold shrink-0">04.</span> 
              <span>PROSES verifikasi dilakukan secara manual demi keamanan (Max 1x24 Jam).</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#836EF9] font-bold shrink-0">05.</span> 
              <span>BIAYA jaringan (Gas Fee) ditanggung 0xTanda (GRATIS).</span>
            </li>
          </ul>
        </div>

        {/* Tombol Lanjut ke Form */}
        <div className="pt-4">
          <Link 
            href="/verify/pageform" 
            className="inline-flex items-center gap-4 bg-[#836EF9] text-black px-12 py-5 font-mono text-sm font-bold uppercase tracking-[0.2em] hover:bg-white transition-all group shadow-[0_0_30px_rgba(131,110,249,0.3)] hover:shadow-[0_0_50px_rgba(131,110,249,0.5)] rounded-sm"
          >
            VERIFY <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        
        <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.4em] pt-8">
          0xTanda // Secure Transmission
        </p>

      </div>
    </main>
  );
}