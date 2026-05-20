'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import { ArrowRight, Lock, Zap } from 'lucide-react';
import { PRODUCTS_DATA } from '../lib/data';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};


const headingVariants = {
  hidden: { opacity: 0, y: 20, skewY: 2 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const TICKER_TOKENS = [
  'Phygital', 'Digital × Physical', 'Blockchain', '0xTanda',
  'Archive', 'Genesis', 'Monad', 'Jakarta', 'NFT', 'One Entity',
];

export default function HomePage() {
  const [isReady, setIsReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 32,
      filter: prefersReducedMotion ? 'blur(0px)' : 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: prefersReducedMotion ? 0.4 : 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-brand-black overflow-hidden">
      <Marquee />
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        <div className="hero-grid-bg absolute inset-0 z-[0]" />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #0E0E0E 75%)' }}
        />
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
                <motion.p
                  className="font-mono text-brand-purple text-[9px] mb-4 uppercase"
                  initial={{ opacity: 0, letterSpacing: '0.2em' }}
                  animate={{ opacity: 0.7, letterSpacing: '0.7em' }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                >
                  Est. 2026 Jakarta // Digital Archive
                </motion.p>

                <motion.div
                  className="relative w-[110vw] max-w-[1200px] h-[180px] md:max-w-[2800px] md:h-[420px] mb-2 animate-glitch"
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.06, filter: prefersReducedMotion ? 'blur(0px)' : 'blur(12px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: prefersReducedMotion ? 0.5 : 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  <Image
                    src="/branding/logo-0xtanda.png"
                    alt="0xTanda Official Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

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

        <div className="absolute bottom-6 left-0 w-full px-10 flex justify-between items-end opacity-20 select-none pointer-events-none font-mono text-[7px] tracking-[0.5em] uppercase">
          <div>System_Live // 2026</div>
          <div className="text-right italic">JKT_ARCHIVE_01</div>
        </div>
      </section>

      {/* ===== PHYGITAL DUALITY SECTION ===== */}
      <section className="relative w-full min-h-screen overflow-hidden bg-brand-black">

        {/* Desktop — vertical center line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px z-20 pointer-events-none"
          style={{ background: 'rgba(131, 110, 249, 0.2)' }}
        />

        {/* Desktop — center tag */}
        <motion.div
          className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.65 }}
        >
          <p className="font-mono text-[11px] tracking-[0.6em] uppercase text-brand-purple whitespace-nowrap px-5 py-2 bg-brand-black/80 backdrop-blur-sm">
            ONE ENTITY // DUAL EXISTENCE
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row min-h-screen">

          {/* LEFT — PHYSICAL */}
          <motion.div
            className="relative flex-1 h-[40vh] md:h-auto md:min-h-screen overflow-hidden bg-[#0a0a0a]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Ghost watermark */}
            <span
              className="absolute bottom-0 left-0 right-0 flex justify-center font-display font-bold uppercase select-none pointer-events-none leading-none z-0 overflow-hidden"
              style={{ fontSize: 'clamp(56px, 16vw, 160px)', color: 'rgba(255,255,255,0.06)' }}
            >
              TANGIBLE
            </span>

            {/* Model photo */}
            <Image
              src="/product/gen1/model/Model-1-front-gen-1.png"
              alt="Physical Artifact — Genesis Boxy Tee"
              fill
              className="object-cover object-top z-[1]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Bottom fade overlay */}
            <div
              className="absolute inset-0 z-[2] pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 40%, #0a0a0a 100%)' }}
            />

            {/* Label */}
            <div className="absolute bottom-8 left-8 z-[3]">
              <p className="font-mono text-[9px] tracking-[0.5em] uppercase" style={{ color: '#A19797' }}>
                Physical Artifact
              </p>
            </div>
          </motion.div>

          {/* MOBILE center text — between panels */}
          <motion.div
            className="md:hidden flex items-center justify-center py-6 bg-brand-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-brand-purple text-center">
              ONE ENTITY // DUAL EXISTENCE
            </p>
          </motion.div>

          {/* RIGHT — DIGITAL */}
          <motion.div
            className="relative flex-1 h-[40vh] md:h-auto md:min-h-screen overflow-hidden bg-[#0E0E0E] flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Ghost watermark */}
            <span
              className="absolute bottom-0 left-0 right-0 flex justify-center font-display font-bold uppercase select-none pointer-events-none leading-none z-0 overflow-hidden"
              style={{ fontSize: 'clamp(56px, 16vw, 160px)', color: 'rgba(255,255,255,0.08)' }}
            >
              DIGITAL
            </span>

            {/* Purple ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square bg-brand-purple/10 blur-[80px] rounded-full pointer-events-none z-0" />

            {/* NFT Card with animated gradient border */}
            <div className="relative z-10 nft-animated-border">
              <div className="nft-card-inner">
                <div
                  className="relative w-[190px] h-[268px] md:w-[270px] md:h-[380px]"
                  style={{
                    transform: 'rotate(2deg)',
                    filter: 'drop-shadow(0 0 28px rgba(131, 110, 249, 0.55))',
                  }}
                >
                  <Image
                    src="/product/gen1/nft/Genesis-Collcetion-Card-0xTanda.png"
                    alt="Genesis Collection Card — Digital Twin"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 190px, 270px"
                  />
                </div>
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-8 right-8 z-[3]">
              <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-brand-purple">
                Digital Twin
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===== TICKER DIVIDER ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="border-y border-white/5 py-4 overflow-hidden"
      >
        <motion.div variants={itemVariants} className="flex gap-12 animate-marquee select-none pointer-events-none">
          {Array.from({ length: 4 }).flatMap(() => TICKER_TOKENS).map((token, i) => (
            <span
              key={i}
              className="font-mono text-[8px] tracking-[0.6em] text-white/15 uppercase whitespace-nowrap"
            >
              {token} <span className="text-brand-purple/30">{'//'}</span>
            </span>
          ))}
        </motion.div>
      </motion.section>

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p variants={itemVariants} className="font-mono text-brand-purple text-[9px] tracking-[0.5em] uppercase mb-4">
            Genesis Collection // Batch_001
          </motion.p>
          <motion.h2
            variants={headingVariants}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase text-white mb-16 leading-none"
          >
            Featured<br />
            <span className="text-white/15 italic">Archive</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS_DATA.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <div
                  className={`group relative transition-[border-color,box-shadow] duration-[400ms] ease-out overflow-hidden flex flex-col rounded-sm ${
                    product.isPlaceholder
                      ? 'bg-black/40 grayscale opacity-40 cursor-default border border-white/5'
                      : 'bg-[#121212] border border-[rgba(131,110,249,0.15)] hover:border-[rgba(131,110,249,0.4)] hover:shadow-[0_0_30px_rgba(131,110,249,0.08)]'
                  }`}
                >
                  {/* Image container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-black">
                    {product.isPlaceholder ? (
                      <div className="flex flex-col items-center justify-center gap-4 text-neutral-800 h-full">
                        <Lock size={48} strokeWidth={1} />
                        <p className="font-mono text-[9px] tracking-[1em] uppercase">Encrypted</p>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={product.imgPhysical}
                          alt={product.name}
                          fill
                          className="object-contain transition-[transform] duration-[600ms] ease-in-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0 pointer-events-none z-[1]"
                          style={{ background: 'linear-gradient(to bottom, transparent 50%, black 100%)' }}
                        />
                      </>
                    )}
                    {!product.isPlaceholder && (
                      <div className="absolute top-4 left-4 z-[2] bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                        <span className="font-mono text-[8px] tracking-widest text-white uppercase">
                          Stock: {product.stock}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info area */}
                  <div className="p-6 border-t border-white/5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3
                        className={`font-deco text-sm font-bold tracking-[0.08em] uppercase leading-tight transition-colors ${
                          product.isPlaceholder
                            ? 'text-neutral-700'
                            : 'text-white group-hover:text-brand-purple'
                        }`}
                      >
                        {product.name}
                      </h3>
                      {!product.isPlaceholder && <Zap size={14} className="text-brand-purple opacity-50 shrink-0 mt-0.5" />}
                    </div>
                    <p className="font-mono text-[9px] text-neutral-600 mb-4 tracking-widest uppercase">{product.type}</p>
                    <p className={`font-mono text-lg font-bold mb-5 ${product.isPlaceholder ? 'text-neutral-800' : 'text-brand-purple'}`}>
                      {product.isPlaceholder ? 'TBA' : `IDR ${product.price.toLocaleString('id-ID')}`}
                    </p>
                    {!product.isPlaceholder && (
                      <Link
                        href={`/product/${product.slug}`}
                        className="card-btn group/cbtn mt-auto w-full py-3 border border-white/10 font-mono text-[10px] font-bold uppercase text-white"
                      >
                        <span className="card-btn-inner">
                          View Details
                          <ArrowRight size={12} className="transition-transform duration-[350ms] group-hover/cbtn:translate-x-1" />
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== SHOP LINK SECTION ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="py-20 px-6 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <motion.p variants={itemVariants} className="font-mono text-[9px] text-white/30 tracking-[0.5em] uppercase mb-4">
              Archive // Genesis_001
            </motion.p>
            <motion.h2
              variants={headingVariants}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase text-white leading-none"
            >
              Own The{' '}
              <span className="text-brand-purple">Physical.</span>
              <br />
              <span className="text-white/20 italic">Prove The Digital.</span>
            </motion.h2>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col gap-3 md:items-end shrink-0">
            <Link
              href="/shop"
              className="group bg-brand-purple text-black px-10 py-4 font-mono text-[10px] font-bold rounded-sm flex items-center gap-3 hover:bg-white transition-all shadow-[0_0_40px_rgba(131,110,249,0.3)]"
            >
              ENTER COLLECTIONS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/verify"
              className="px-10 py-4 border border-white/10 font-mono text-[10px] font-bold rounded-sm hover:bg-white/5 hover:border-white/30 transition-all text-center uppercase tracking-[0.3em]"
            >
              VERIFY OWNERSHIP
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== CTA BAWAH ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="relative py-32 px-6 bg-[#090909] overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(131,110,249,0.04) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p
            variants={itemVariants}
            className="font-mono text-[9px] tracking-[0.6em] uppercase mb-8"
            style={{ color: 'rgba(131,110,249,0.6)' }}
          >
            Terminal_Log // Digital_Archive
          </motion.p>

          {/* Gradient heading */}
          <motion.h2
            variants={headingVariants}
            className="font-deco text-5xl md:text-7xl font-bold uppercase leading-none mb-8"
            style={{
              background: 'linear-gradient(90deg, #836EF9 0%, #00FF9D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Enter The Archive.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-[11px] tracking-[0.4em] uppercase leading-loose mb-12 text-white"
            style={{ opacity: 0.6 }}
          >
            Essays on phygital fashion, digital ownership,
            <br className="hidden md:block" />
            and the future of tangible culture.
          </motion.p>

          {/* CTA + blockchain label */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-5">
            <Link
              href="/terminal-log"
              className="group inline-flex items-center gap-3 border border-[#836EF9] bg-transparent text-white px-12 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#836EF9] hover:text-[#0E0E0E] hover:tracking-[0.55em] transition-[background-color,color,letter-spacing,border-color] duration-300 ease-out"
            >
              OPEN TERMINAL
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <p
              className="font-mono text-[9px] tracking-[0.4em] uppercase text-white"
              style={{ opacity: 0.3 }}
            >
              Secured on Monad Blockchain // ERC-721
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== FOOTER ===== */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="border-t border-white/5 py-14 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <motion.div variants={itemVariants}>
              <p className="font-mono text-[8px] tracking-[0.5em] uppercase text-white/25 mb-5">Navigate</p>
              <ul className="space-y-3">
                {([['Shop', '/shop'], ['About', '/about'], ['Verify', '/verify'], ['Terminal Log', '/terminal-log']] as const).map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="font-mono text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-mono text-[8px] tracking-[0.5em] uppercase text-white/25 mb-5">Connect</p>
              <ul className="space-y-3">
                {[
                  ['Telegram', 'https://t.me/rempeyek_0'],
                  ['WhatsApp', 'https://wa.me/6281398621530'],
                  ['Tokopedia', PRODUCTS_DATA[0].links.tokopedia ?? ''],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2">
              <p className="font-mono text-[8px] tracking-[0.5em] uppercase text-white/25 mb-5">System</p>
              <p className="font-mono text-[9px] text-white/20 leading-loose tracking-widest uppercase">
                0xTanda // Phygital Fashion Archive<br />
                Est. 2026 // Jakarta, Indonesia<br />
                Blockchain: Monad Network<br />
                Contract: 0x75c2...8610
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="font-mono text-[8px] text-white/20 tracking-[0.5em] uppercase">
              © 2026 0xTanda. All Rights Reserved.
            </p>
            <p className="font-mono text-[8px] text-white/10 tracking-[0.4em] uppercase">
              Physical × Digital // One Entity Dual Existence
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}
