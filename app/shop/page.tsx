"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lock, ExternalLink } from 'lucide-react';
import { PRODUCTS_DATA, Product } from '../../lib/data';

// ─── Animation Variants ────────────────────────────────────────────────────

const EASE_SNAP = [0.22, 1, 0.36, 1] as [number, number, number, number];

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_SNAP },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SNAP },
  },
};

// ─── Flip Card Component ───────────────────────────────────────────────────

function FlipCard({ product, index }: { product: Product; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isPlaceholder = !!product.isPlaceholder;
  const isFeatured = index === 0;

  const handleClick = () => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches &&
      !isPlaceholder
    ) {
      setIsFlipped(prev => !prev);
    }
  };

  let discountPercentage = 0;
  if (product.originalPrice && product.originalPrice > product.price) {
    discountPercentage = Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      className={isFeatured ? 'md:col-span-2' : ''}
    >
      {/* ── Perspective + Hover Lift Wrapper ── */}
      <div
        className={`relative cursor-pointer transition-[transform,box-shadow] duration-[400ms] ease-in-out${
          !isPlaceholder
            ? ' hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(131,110,249,0.1)]'
            : ''
        }`}
        style={{
          perspective: '1000px',
          height: isFeatured ? '620px' : '520px',
        }}
        onMouseEnter={() => { if (!isPlaceholder) setIsFlipped(true); }}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={handleClick}
      >
        {/* ── Rotating Inner ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* ══════════════════════════════════════
              FRONT FACE — Physical Product
          ══════════════════════════════════════ */}
          <div
            className="absolute inset-0 overflow-hidden rounded-sm"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {isPlaceholder ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-black/40 border border-white/5 grayscale opacity-60">
                <Lock size={64} strokeWidth={1} className="text-neutral-800" />
                <p className="font-mono text-[9px] tracking-[1em] text-neutral-800 uppercase">
                  Encrypted_File
                </p>
              </div>
            ) : (
              <div className="relative w-full h-full bg-[#121212] border border-white/5">
                {/* Product image */}
                <Image
                  src={product.imgPhysical}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-transparent pointer-events-none" />

                {/* Stock badge — top right */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm flex items-center gap-2 z-10">
                  <div className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse" />
                  <span className="font-mono text-[8px] tracking-widest text-white uppercase">
                    {product.stock} units
                  </span>
                </div>

                {/* Discount badge — top left */}
                {discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-[#00FF9D] text-black font-mono text-[8px] px-2 py-1 font-bold tracking-wider z-10">
                    -{discountPercentage}%
                  </div>
                )}

                {/* Info overlay — bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex items-end justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[8px] tracking-[0.3em] text-neutral-400 uppercase mb-1 truncate">
                      {product.type}
                    </p>
                    <h3 className="font-deco text-lg font-bold tracking-wider uppercase text-white leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {discountPercentage > 0 && (
                      <p className="font-mono text-[9px] text-neutral-500 line-through mb-0.5">
                        IDR {product.originalPrice?.toLocaleString('id-ID')}
                      </p>
                    )}
                    <p className="font-mono text-base font-bold text-[#836EF9]">
                      IDR {product.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════
              BACK FACE — Digital Twin
          ══════════════════════════════════════ */}
          {/* Animated border outer wrapper */}
          <div
            className="absolute inset-0 overflow-hidden rounded-sm"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              padding: '1px',
            }}
          >
            {/* Rotating gradient — animated border effect */}
            <div
              className="pointer-events-none"
              style={{
                position: 'absolute',
                inset: '-50%',
                background:
                  'linear-gradient(0deg, #836EF9 0%, #00FF9D 50%, #836EF9 100%)',
                animation: 'borderRotate 4s linear infinite',
              }}
            />

            {/* Inner content area */}
            <div
              className="relative z-10 w-full h-full overflow-hidden"
              style={{ background: '#0a0a0a', borderRadius: '1px' }}
            >
              {isPlaceholder ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 opacity-60">
                  <Lock size={48} strokeWidth={1} className="text-neutral-800" />
                  <p className="font-mono text-[9px] tracking-[1em] text-neutral-800 uppercase">
                    Access_Denied
                  </p>
                </div>
              ) : (
                <>
                  {/* Radial glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 35%, rgba(131,110,249,0.12) 0%, transparent 65%)',
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full p-5">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-mono text-[8px] tracking-[0.4em] text-[#836EF9] uppercase mb-1">
                          Digital Twin
                        </p>
                        <p className="font-mono text-[9px] tracking-[0.1em] text-neutral-300 uppercase leading-tight max-w-[160px] truncate">
                          {product.name}
                        </p>
                      </div>
                      {/* Diamond accent icon */}
                      <div className="w-8 h-8 border border-[#836EF9]/30 rounded-sm flex items-center justify-center flex-shrink-0">
                        <div
                          className="w-3 h-3 bg-[#836EF9]"
                          style={{
                            opacity: 0.65,
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                          }}
                        />
                      </div>
                    </div>

                    {/* NFT Image */}
                    <div className="relative flex-1 mb-4 rounded-sm overflow-hidden border border-[#836EF9]/20 bg-black/30">
                      {product.imgDigital ? (
                        <Image
                          src={product.imgDigital}
                          alt={`${product.name} Digital Twin`}
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          <div className="w-10 h-10 border border-[#836EF9]/20 rounded-sm flex items-center justify-center">
                            <div
                              style={{
                                width: 16,
                                height: 16,
                                background: 'rgba(131,110,249,0.3)',
                                clipPath:
                                  'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                              }}
                            />
                          </div>
                          <p className="font-mono text-[8px] text-neutral-700 tracking-wider">
                            NO_PREVIEW
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Token info */}
                    <div className="space-y-1.5 mb-4 pt-3 border-t border-white/5">
                      {(
                        [
                          ['TOKEN_TYPE', 'ERC-721'],
                          ['CHAIN', 'MONAD'],
                          ['STATUS', 'CLAIMABLE'],
                        ] as const
                      ).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="font-mono text-[8px] text-neutral-600 tracking-[0.2em]">
                            {key}
                          </span>
                          <span
                            className={`font-mono text-[8px] tracking-[0.15em] font-bold ${
                              value === 'CLAIMABLE'
                                ? 'text-[#00FF9D]'
                                : 'text-neutral-400'
                            }`}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="grid grid-cols-2 gap-2 mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsFlipped(false);
                        }}
                        className="py-3 border border-white/20 text-white font-mono text-[8px] tracking-[0.15em] uppercase transition-colors hover:border-[#836EF9]/60 hover:text-[#836EF9]"
                      >
                        View Physical
                      </button>
                      <Link
                        href={product.explorerLink ?? product.links.telegram ?? '#'}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="py-3 bg-[#836EF9] text-black font-mono text-[8px] tracking-[0.15em] uppercase flex items-center justify-center gap-1.5 transition-colors hover:bg-[#9d8bff]"
                      >
                        Claim NFT <ExternalLink size={9} />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* ─── end back face ─── */}
        </div>
        {/* ─── end rotating inner ─── */}
      </div>
      {/* ─── end perspective wrapper ─── */}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] pb-20 selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          SHOP HEADER
      ══════════════════════════════════════════════════════ */}
      <motion.header
        className="pt-44 px-6 mb-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        {/* Archive Collection label — with flanking lines */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-16 bg-[#836EF9] opacity-30" />
          <span className="font-mono text-[#836EF9] text-[10px] tracking-[0.5em] uppercase">
            Archive Collection
          </span>
          <div className="h-px w-16 bg-[#836EF9] opacity-30" />
        </div>

        {/* Main heading: GENESIS // 01 */}
        <h1 className="flex flex-wrap items-baseline justify-center gap-x-3 text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-4">
          <span className="font-deco text-white">GENESIS</span>
          <span className="font-mono text-neutral-700 italic text-5xl md:text-7xl">
            {'// 01'}
          </span>
        </h1>

        {/* Sub-label */}
        <p className="font-mono text-[9px] tracking-[0.4em] text-white/40 uppercase mt-4">
          BATCH 01 — LIMITED PHYSICAL UNITS // DIGITAL TWIN INCLUDED
        </p>
      </motion.header>

      {/* ══════════════════════════════════════════════════════
          PRODUCTS GRID
      ══════════════════════════════════════════════════════ */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PRODUCTS_DATA.map((product, index) => (
          <FlipCard key={product.id} product={product} index={index} />
        ))}
      </motion.div>
    </main>
  );
}
