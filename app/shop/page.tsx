"use client";

import React from 'react';
import { ArrowRight, Zap, Lock } from 'lucide-react';
// === PERBAIKAN: IMPORT DATA DARI MASTER CONTROL (PATH RELATIF) ===
// Kita gunakan path relatif untuk menghindari error alias '@' pada preview environment
import { PRODUCTS_DATA } from '../../lib/data';

// ============================================================================
// MOCK NEXT.JS (Hanya untuk keperluan Preview di layar Canvas)
// CATATAN UNTUK COPAS: 
// Saat menyalin kode ini ke file project asli Anda (VSCode/Vercel), 
// HAPUS bagian mock ini dan gunakan import bawaan Next.js berikut:
//
// import Link from 'next/link';
// import Image from 'next/image';
// ============================================================================
const Link = ({ href, children, className, onClick }: any) => (
  <a href={href} className={className} onClick={onClick}>{children}</a>
);
const Image = ({ src, alt, className, sizes, fill }: any) => {
    if (fill) {
      return <img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-cover ${className || ''}`} sizes={sizes} />;
    }
    return <img src={src} alt={alt} className={className} sizes={sizes} />;
};
// ============================================================================

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] pb-20 selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden">
      <header className="pt-44 px-6 mb-20 text-center">
        <h2 className="font-mono text-[#836EF9] text-[10px] tracking-[0.5em] mb-4 uppercase">Archive Collection</h2>
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-none text-white">
          Genesis // <span className="text-neutral-700 italic">01</span>
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS_DATA.map((product) => {
          const isPlaceholder = product.isPlaceholder;
          
          // Kalkulasi Diskon Otomatis (Jika ada harga coret di lib/data.ts)
          let discountPercentage = 0;
          if (product.originalPrice && product.originalPrice > product.price) {
            discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
          }

          return (
            <div 
              key={product.id} 
              className={`group relative border border-white/5 transition-all duration-500 overflow-hidden flex flex-col rounded-sm shadow-xl ${
                isPlaceholder 
                  ? 'bg-black/40 grayscale opacity-60 cursor-default' 
                  : 'bg-[#121212] hover:border-[#836EF9]/50'
              }`}
            >
              {/* Wadah Gambar Produk */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black flex items-center justify-center p-6">
                {isPlaceholder ? (
                  <div className="flex flex-col items-center gap-4 text-neutral-800">
                    <Lock size={64} strokeWidth={1} />
                    <p className="font-mono text-[9px] tracking-[1em] uppercase">Encrypted_File</p>
                  </div>
                ) : (
                  <Image 
                    src={product.imgPhysical} 
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                
                {/* Status Tag Live dari lib/data.ts */}
                {!isPlaceholder && (
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full flex items-center gap-2 z-10">
                    <div className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse" />
                    <span className="font-mono text-[8px] tracking-widest text-white uppercase">
                      Stock_Lvl: {product.stock}
                    </span>
                  </div>
                )}
              </div>

              {/* Bagian Informasi Produk */}
              <div className="p-8 border-t border-white/5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-display text-2xl font-bold tracking-tighter uppercase leading-tight transition-colors ${
                    isPlaceholder ? 'text-neutral-700' : 'text-white group-hover:text-[#836EF9]'
                  }`}>
                    {product.name}
                  </h3>
                  {!isPlaceholder && <Zap size={16} className="text-[#836EF9] opacity-50" />}
                </div>
                
                <p className="font-mono text-[10px] text-neutral-500 mb-6 tracking-widest uppercase">
                  {product.type}
                </p>
                
                {/* BAGIAN HARGA */}
                <div className="mb-8 flex flex-col gap-1">
                  {discountPercentage > 0 && !isPlaceholder && (
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-neutral-500 line-through">
                        IDR {product.originalPrice?.toLocaleString('id-ID')}
                      </span>
                      <span className="font-mono text-[8px] bg-[#00FF9D] text-black px-2 py-0.5 rounded-sm font-bold tracking-wider">
                        {discountPercentage}% OFF
                      </span>
                    </div>
                  )}
                  <p className={`font-mono text-xl font-bold tracking-tighter ${
                    isPlaceholder ? 'text-neutral-800' : 'text-white'
                  }`}>
                    {isPlaceholder ? 'TBA' : `IDR ${product.price.toLocaleString('id-ID')}`}
                  </p>
                </div>

                {/* Tombol Aksi */}
                <div className="mt-auto">
                  {isPlaceholder ? (
                    <div className="w-full py-4 border border-white/5 text-neutral-800 font-mono text-[10px] font-bold uppercase text-center tracking-[0.4em]">
                      [ Access_Denied ]
                    </div>
                  ) : (
                    <Link 
                      href={`/product/${product.slug}`}
                      className="w-full flex items-center justify-center gap-3 py-4 border border-white/10 text-white font-mono text-[11px] font-bold uppercase transition-all hover:bg-white hover:text-black group/btn shadow-sm"
                    >
                      View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}