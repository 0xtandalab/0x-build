"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Lock,
  ArrowUpRight,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { PRODUCTS_DATA, Product } from '../../lib/data';

// ─── Animation Variants ────────────────────────────────────────────────────────

const EASE_SNAP = [0.22, 1, 0.36, 1] as [number, number, number, number];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_SNAP },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SNAP },
  },
};

// ─── Discount helper ──────────────────────────────────────────────────────────

function getDiscount(product: Product): number {
  if (!product.originalPrice || product.originalPrice <= product.price) return 0;
  return Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const [imgHover, setImgHover] = useState(false);
  const isPlaceholder = !!product.isPlaceholder;
  const discount = getDiscount(product);

  // ── Placeholder (upcoming) ──────────────────────────────────────────────────
  if (isPlaceholder) {
    return (
      <motion.div variants={cardVariants}>
        <div className="relative w-full aspect-[3/4] bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col items-center justify-center gap-4">
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          <Lock
            size={48}
            strokeWidth={1}
            className="text-neutral-800 relative z-10"
          />
          <div className="relative z-10 text-center space-y-1">
            <p className="font-mono text-[9px] tracking-[0.5em] text-neutral-700 uppercase">
              ENCRYPTED_FILE
            </p>
            <p className="font-mono text-[8px] tracking-[0.3em] text-neutral-800 uppercase">
              ACCESS DENIED
            </p>
          </div>
          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)',
            }}
          />
        </div>
        <div className="pt-4 space-y-1 px-0.5">
          <p className="font-mono text-[8px] tracking-[0.4em] text-neutral-700 uppercase">
            Coming Soon
          </p>
          <p className="font-deco text-sm font-bold tracking-wider uppercase text-neutral-700">
            ???
          </p>
        </div>
      </motion.div>
    );
  }

  // ── Real product ────────────────────────────────────────────────────────────
  return (
    <motion.div variants={cardVariants}>
      <Link
        href={`/product/${product.slug}`}
        className="group block"
      >
        {/* ── Image container ── */}
        <div
          className="relative w-full aspect-[3/4] overflow-hidden bg-[#0A0A0A] border border-white/[0.06]"
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
        >
          {/* Product image */}
          <Image
            src={product.imgPhysical}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Gradient overlay — always present, intensifies on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-90" />

          {/* ── Badges: top row ── */}
          <div className="absolute top-4 inset-x-4 flex items-start justify-between z-10">
            {/* Stock badge */}
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse flex-shrink-0" />
              <span className="font-mono text-[8px] tracking-widest text-white uppercase">
                {product.stock} UNITS
              </span>
            </div>

            {/* Discount badge */}
            {discount > 0 && (
              <div className="bg-[#00FF9D] text-black font-mono text-[8px] font-bold px-2 py-1 tracking-wider">
                -{discount}%
              </div>
            )}
          </div>

          {/* ── Digital Twin indicator — bottom left badge ── */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-[#836EF9]/15 backdrop-blur-md border border-[#836EF9]/30 px-2.5 py-1.5">
            <Cpu size={9} className="text-[#836EF9]" />
            <span className="font-mono text-[7px] tracking-[0.3em] text-[#836EF9] uppercase">
              Digital Twin
            </span>
          </div>

          {/* ── Hover: View Detail overlay ── */}
          <div
            className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ${
              imgHover ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-2 border border-white/20 bg-black/60 backdrop-blur-md px-5 py-3">
              <span className="font-mono text-[9px] tracking-[0.3em] text-white uppercase">
                Lihat Detail
              </span>
              <ArrowUpRight size={12} className="text-white" />
            </div>
          </div>
        </div>

        {/* ── Card info footer ── */}
        <div className="pt-4 space-y-2 px-0.5">
          {/* Type label */}
          <p className="font-mono text-[8px] tracking-[0.35em] text-neutral-500 uppercase">
            {product.type}
          </p>

          {/* Name + Arrow row */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-deco text-sm md:text-base font-bold tracking-wider uppercase text-white leading-tight group-hover:text-[#836EF9] transition-colors duration-300">
              {product.name}
            </h3>
            <ArrowUpRight
              size={14}
              className="text-neutral-600 group-hover:text-[#836EF9] transition-colors duration-300 flex-shrink-0 mt-0.5"
            />
          </div>

          {/* Price row */}
          <div className="flex items-center gap-3 pt-1">
            <span className="font-mono text-sm font-bold text-[#836EF9]">
              IDR {product.price.toLocaleString('id-ID')}
            </span>
            {discount > 0 && (
              <span className="font-mono text-[9px] text-neutral-600 line-through">
                IDR {product.originalPrice?.toLocaleString('id-ID')}
              </span>
            )}
          </div>

          {/* Phygital verified micro-tag */}
          <div className="flex items-center gap-1.5 pt-0.5">
            <CheckCircle2 size={9} className="text-[#00FF9D]" />
            <span className="font-mono text-[7px] tracking-[0.3em] text-neutral-600 uppercase">
              Phygital Verified // ERC-721 Monad
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Filter Tabs ──────────────────────────────────────────────────────────────

const FILTERS = ['ALL', 'AVAILABLE', 'COMING_SOON'] as const;
type Filter = (typeof FILTERS)[number];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL');

  const filteredProducts = PRODUCTS_DATA.filter(p => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AVAILABLE') return !p.isPlaceholder;
    if (activeFilter === 'COMING_SOON') return !!p.isPlaceholder;
    return true;
  });

  return (
    <main className="min-h-screen bg-[#0E0E0E] pb-28 selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden">

      {/* ════════════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════════════ */}
      <motion.header
        className="pt-44 px-6 mb-16"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto">

          {/* Label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#836EF9]" />
            <span className="font-mono text-[#836EF9] text-[9px] tracking-[0.6em] uppercase">
              Archive Collection
            </span>
          </div>

          {/* Heading + subtitle row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-deco text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none text-white">
                GENESIS
                <span className="font-mono text-neutral-700 italic text-4xl md:text-6xl ml-4">
                  // 01
                </span>
              </h1>
              <p className="font-mono text-[9px] tracking-[0.4em] text-white/30 uppercase mt-4">
                BATCH 01 — LIMITED PHYSICAL UNITS // DIGITAL TWIN INCLUDED
              </p>
            </div>

            {/* Live count */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-500 uppercase">
                {PRODUCTS_DATA.filter(p => !p.isPlaceholder && p.stock > 0).length} Items Live
              </span>
            </div>
          </div>

          {/* ── Filter tabs ── */}
          <div className="flex items-center gap-1 mt-10 border-b border-white/[0.06] pb-0">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative font-mono text-[9px] tracking-[0.3em] uppercase px-4 pb-3 transition-colors duration-200 ${
                  activeFilter === f
                    ? 'text-white'
                    : 'text-neutral-600 hover:text-neutral-400'
                }`}
              >
                {f.replace('_', ' ')}
                {activeFilter === f && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#836EF9]"
                    transition={{ duration: 0.25, ease: EASE_SNAP }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      {/* ════════════════════════════════════════════════════
          PRODUCTS GRID
      ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-28"
          >
            <p className="font-mono text-[10px] tracking-[0.5em] text-neutral-700 uppercase">
              NO_RECORDS_FOUND
            </p>
          </motion.div>
        )}
      </section>

      {/* ════════════════════════════════════════════════════
          BOTTOM CTA — subtle
      ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="border-t border-white/[0.05] pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] tracking-[0.4em] text-neutral-600 uppercase mb-2">
              0xTanda // Secure Transmission
            </p>
            <p className="font-mono text-[8px] tracking-[0.25em] text-neutral-700 uppercase">
              Setiap item mencakup fisik + Digital Twin NFT
            </p>
          </div>
          <Link
            href="/verify"
            className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] hover:border-[#836EF9]/40 hover:bg-[#836EF9]/5 px-5 py-3 transition-all duration-300 group"
          >
            <span className="font-mono text-[9px] tracking-[0.35em] text-neutral-400 group-hover:text-white uppercase transition-colors">
              Sudah beli? Aktivasi NFT
            </span>
            <ArrowUpRight size={12} className="text-neutral-600 group-hover:text-[#836EF9] transition-colors" />
          </Link>
        </div>
      </section>

    </main>
  );
}