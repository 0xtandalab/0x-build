'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import { ArrowRight } from 'lucide-react';

/**
 * Halaman Home 0xTanda.
 * Logo Ultra Mega (Lebar Maksimal) dengan jarak yang sangat rapat (meppet)
 * agar semua konten muat dalam satu layar tanpa scroll.
 */
export default function HomePage() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-brand-black overflow-hidden">
      <Marquee />
      <Navbar />

      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        {/* Layer 1 — Animated perspective grid */}
        <div className="hero-grid-bg absolute inset-0 z-[0]" />

        {/* Layer 2 — Radial fade: softens grid at edges */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #0E0E0E 75%)' }}
        />

        {/* Layer 3 — Purple ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl aspect-square bg-brand-purple/5 blur-[150px] pointer-events-none rounded-full z-[2]" />

        <div className="relative z-10 text-center flex flex-col items-center w-full">
          <AnimatePresence>
            {isReady && (
              <motion.div
                className="flex flex-col items-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Teks Atas - letter-spacing animates from tight → expanded */}
                <motion.p
                  className="font-mono text-brand-purple text-[9px] mb-4 uppercase"
                  initial={{ opacity: 0, letterSpacing: '0.2em' }}
                  animate={{ opacity: 0.7, letterSpacing: '0.7em' }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                >
                  Est. 2026 Jakarta // Digital Archive
                </motion.p>

                {/* ULTRA MEGA LOGO — blur reveal */}
                <motion.div
                  className="relative w-[110vw] max-w-[1200px] h-[180px] md:max-w-[2800px] md:h-[420px] mb-2 animate-glitch"
                  initial={{ opacity: 0, scale: 1.06, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  <Image
                    src="/branding/logo-0xtanda.png"
                    alt="0xTanda Official Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* Deskripsi - Margin Meppet */}
                <motion.div
                  className="max-w-3xl mx-auto mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                >
                  <p className="font-mono text-[#00FF9D] text-[10px] md:text-[13px] tracking-[0.4em] leading-relaxed uppercase">
                    Tangible craftsmanship you can feel, secured by digital ownership you can prove.
                  </p>
                </motion.div>

                {/* Tombol Aksi */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
                >
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
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
