"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
// === IMPORT MASTER CONTROL ===
import { PRODUCTS_DATA } from '../../../lib/data';

import { 
  ArrowLeft, ShieldCheck, Send, Zap, CheckCircle2, Info,
  ChevronLeft, ChevronRight, Maximize2, X, Ruler, Lock,
  Terminal, ExternalLink // <- Tambahan Ikon Baru
} from 'lucide-react';

// ============================================================================
// MOCK NEXT.JS (Hanya untuk keperluan Preview di layar Canvas)
// ============================================================================
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);
const Image = ({ src, alt, className, sizes, fill, priority, draggable }: any) => {
    // FIX: Menghapus paksaan 'object-cover' agar bisa dikontrol lewat className
    if (fill) {
      return <img src={src} alt={alt} className={`absolute inset-0 w-full h-full ${className || ''}`} sizes={sizes} loading={priority ? "eager" : "lazy"} draggable={draggable} />;
    }
    return <img src={src} alt={alt} className={className} sizes={sizes} loading={priority ? "eager" : "lazy"} draggable={draggable} />;
};
// ============================================================================

// =================================================================
// DEFINISI CUSTOM ICONS
// =================================================================
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const TokopediaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.65 15.65c.67-2.14.34-4.22-1.1-6.12-1.28-1.69-3.32-2.58-5.32-2.31l.16-.9c.27-1.52-.72-2.98-2.22-3.26C12.65 2.8 11.2 3.8 10.92 5.31l-.18 1.02c-2.02.3-3.92 1.55-4.88 3.39-1.07 2.05-.98 4.25-.13 6.31l-3.3 1.9c-.8.46-1.08 1.48-.62 2.28.46.8 1.48 1.08 2.28.62l3.37-1.94c1.37 1.37 3.23 2.11 5.25 2.11 2.5 0 4.75-1.14 6.13-3.13l1.58 2.74c.46.8 1.48 1.08 2.28.62.8-.46 1.08-1.48.62-2.28l-1.58-2.74c.3-.17.58-.36.85-.56zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    <circle cx="10" cy="12" r="1.5"/>
    <circle cx="14" cy="12" r="1.5"/>
  </svg>
);

const TikTokShopIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
     <path d="M19 14h-2v4h-4v2h4v4h2v-4h4v-2h-4z"/>
  </svg>
);

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const [view, setView] = useState<'physical' | 'digital'>('physical');
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [lightboxData, setLightboxData] = useState<{ images: string[], currentIndex: number } | null>(null);

  const product = useMemo(() => 
    PRODUCTS_DATA.find(p => p.slug === params.slug), 
    [params.slug]
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center font-mono text-white p-6">
        <div className="text-center">
          <p className="text-[#836EF9] mb-4 tracking-widest">[ ERROR: ARCHIVE_NOT_FOUND ]</p>
          <Link href="/shop" className="text-xs uppercase underline hover:text-[#836EF9] transition-colors">
            Kembali ke Koleksi
          </Link>
        </div>
      </div>
    );
  }

  // Kalkulasi Diskon Otomatis dari Master Control
  let discountPercentage = 0;
  if (product.originalPrice && product.originalPrice > product.price) {
    discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  }

  const images = product.gallery || [];

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (images.length > 0) setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (images.length > 0) setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMainDragEnd = (e: any, { offset }: any) => {
    if (view === 'digital') return; 
    if (offset.x < -50) nextImage(); 
    else if (offset.x > 50) prevImage();
  };

  const lightboxNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxData && lightboxData.images.length > 1) {
      setLightboxData({ ...lightboxData, currentIndex: (lightboxData.currentIndex + 1) % lightboxData.images.length });
    }
  };

  const lightboxPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxData && lightboxData.images.length > 1) {
      setLightboxData({ ...lightboxData, currentIndex: (lightboxData.currentIndex - 1 + lightboxData.images.length) % lightboxData.images.length });
    }
  };

  const handleLightboxDragEnd = (e: any, { offset }: any) => {
    if (offset.x < -50) lightboxNext(); 
    else if (offset.x > 50) lightboxPrev();
  };

  const openLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (view === 'physical') {
      setLightboxData({ images, currentIndex: currentImgIndex });
    } else {
      setLightboxData({ images: [product.imgDigital], currentIndex: 0 });
    }
  };

  return (
    <main className="min-h-screen pb-20 bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden relative">
      <div className="pt-48 px-6 max-w-7xl mx-auto">
        <Link 
          href="/shop"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-10 font-mono text-[10px] tracking-[0.5em] uppercase transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO ARCHIVE
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* MEDIA SECTION */}
          <div className="space-y-6">
            
            {/* CONTAINER GAMBAR UTAMA - Aspect 4:5 Lebih pas buat baju */}
            <div className="relative aspect-[4/5] bg-[#0A0A0A] border border-white/5 overflow-hidden rounded-sm shadow-2xl group flex items-center justify-center">
              
              {/* TOMBOL ZOOM (Terpisah dari container swipe agar tidak salah pencet) */}
              <button 
                onClick={openLightbox} 
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-[#836EF9] hover:text-black transition-all z-30 cursor-pointer shadow-lg"
                title="Perbesar Gambar"
              >
                <Maximize2 size={18} className="text-white hover:text-black transition-colors" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={view === 'physical' ? (images[currentImgIndex] || 'empty') : product.imgDigital}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full cursor-grab active:cursor-grabbing"
                  // FITUR SWIPE LANGSUNG DI GAMBAR UTAMA
                  drag={view === 'physical' ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={handleMainDragEnd}
                >
                  <Image 
                    src={view === 'physical' ? (images[currentImgIndex] || product.imgPhysical) : product.imgDigital} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-2 md:p-6 select-none" // object-contain memastikan gambar muat sempurna & tidak terpotong
                    draggable={false}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {view === 'physical' && images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 hover:bg-[#836EF9] hover:text-black transition-all z-20 shadow-2xl cursor-pointer">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 hover:bg-[#836EF9] hover:text-black transition-all z-20 shadow-2xl cursor-pointer">
                    <ChevronRight size={20} />
                  </button>
                  
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImgIndex ? 'w-6 bg-[#836EF9]' : 'w-2 bg-white/30'}`} />
                    ))}
                  </div>
                </>
              )}
              
              {/* SWITCHER PHYSICAL VS DIGITAL */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-black/80 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 shadow-2xl z-30" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setView('physical')} className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all uppercase tracking-widest ${view === 'physical' ? 'bg-white text-black font-bold' : 'text-white/40 hover:text-white'}`}>
                  PHYSICAL
                </button>
                <button onClick={() => setView('digital')} className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all flex items-center gap-2 uppercase tracking-widest ${view === 'digital' ? 'bg-[#836EF9] text-white font-bold shadow-[0_0_20px_rgba(131,110,249,0.4)]' : 'text-white/40 hover:text-white'}`}>
                  GENESIS CARD <Zap size={10} fill="currentColor" />
                </button>
              </div>
            </div>

            {/* THUMBNAILS */}
            {view === 'physical' && images.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar justify-center">
                {images.map((img, idx) => (
                  <button key={idx} onClick={() => setCurrentImgIndex(idx)} className={`relative w-20 h-24 flex-shrink-0 border transition-all rounded-sm overflow-hidden bg-neutral-900 cursor-pointer ${currentImgIndex === idx ? 'border-[#836EF9] opacity-100' : 'border-white/10 opacity-40 hover:opacity-100'}`}>
                    <Image src={img} alt={`thumb-${idx}`} fill className="object-contain p-1" draggable={false} />
                  </button>
                ))}
              </div>
            )}

            {/* PANEL LIVE STOCK INVENTORY (DINAMIS DARI MASTER DATA) */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6 bg-[#121212] border border-white/5 rounded-sm p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <h3 className="text-[#00FF9D] text-[10px] font-mono font-bold tracking-[0.3em] flex items-center gap-2 uppercase">
                    <Zap size={14} /> LIVE INVENTORY
                  </h3>
                  <span className="bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse"></span>
                    TOTAL SISA: {product.stock}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {product.variants.map((variant, vIdx) => (
                    <div key={vIdx} className="space-y-3">
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em]">WARNA: {variant.color}</p>
                      <div className="flex gap-2 flex-wrap">
                        {variant.sizes.map((sizeData, sIdx) => {
                           let stockColor = "text-[#00FF9D]"; 
                           if (sizeData.stock === 0) stockColor = "text-red-400"; 
                           else if (sizeData.stock <= 2) stockColor = "text-yellow-400"; 
                           
                           return (
                             <div key={sIdx} className="flex-1 min-w-[60px] bg-white/5 border border-white/10 p-3 rounded-sm text-center transition-colors hover:border-white/30">
                               <p className="text-white font-bold text-sm">{sizeData.size}</p>
                               <p className={`${stockColor} text-[9px] font-mono mt-1 font-bold tracking-widest`}>
                                 SISA {sizeData.stock}
                               </p>
                             </div>
                           );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* END PANEL LIVE STOCK INVENTORY */}

            {product.sizeChart && (
              <div className="mt-8 bg-[#121212] border border-white/5 rounded-sm p-6 relative group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#836EF9] text-[10px] font-mono font-bold tracking-[0.3em] flex items-center gap-2 uppercase">
                    <Ruler size={16} /> PANDUAN UKURAN (SIZE CHART)
                  </h3>
                  <button onClick={() => setLightboxData({ images: [product.sizeChart as string], currentIndex: 0 })} className="text-neutral-500 hover:text-white transition-colors cursor-pointer" title="Perbesar Size Chart">
                    <Maximize2 size={16} />
                  </button>
                </div>
                <div className="relative w-full aspect-[4/3] bg-black rounded-sm overflow-hidden cursor-zoom-in border border-white/5" onClick={() => setLightboxData({ images: [product.sizeChart as string], currentIndex: 0 })}>
                  <Image src={product.sizeChart} alt="Size Chart 0xTanda" fill className="object-contain group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="font-mono text-xs font-bold tracking-widest uppercase bg-black/80 px-4 py-2 rounded-full border border-white/10">Klik untuk Zoom</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INFORMASI PRODUK */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[#836EF9] font-mono text-[10px] mb-6 uppercase tracking-[0.4em]">
              <ShieldCheck size={16} /> VERIFIED PHYGITAL ENTITY
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-2 tracking-tighter leading-none">
              {product.name}
            </h1>
            <p className="text-neutral-500 font-mono text-xs mb-8 tracking-widest uppercase">
              {product.type}
            </p>
            
            <div className="mb-10">
              {discountPercentage > 0 && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-lg md:text-xl text-neutral-500 line-through">
                    IDR {product.originalPrice?.toLocaleString('id-ID')}
                  </span>
                  <span className="font-mono text-[10px] bg-[#00FF9D] text-black px-2 py-1 rounded-sm font-bold tracking-wider shadow-[0_0_15px_rgba(0,255,157,0.3)]">
                    LIMITED {discountPercentage}% OFF
                  </span>
                </div>
              )}
              <p className="text-3xl md:text-5xl font-mono text-white tracking-tighter font-bold">
                IDR {product.price.toLocaleString('id-ID')}
              </p>
            </div>

            <div className="space-y-6 mb-16">
              <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.5em]">PLACE YOUR ORDER:</p>
              
              <a href={product.links.telegram} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-4 py-5 bg-[#836EF9] text-black font-mono text-xs font-bold uppercase transition-all hover:bg-white shadow-[0_0_40px_rgba(131,110,249,0.3)] active:scale-95 rounded-sm">
                <Send size={18} /> ORDER VIA TELEGRAM
              </a>

              <div className="flex items-center justify-center gap-8 pt-6 border-t border-white/5 flex-wrap">
                {product.links.whatsapp && (
                  <a href={product.links.whatsapp} target="_blank" title="WhatsApp" className="text-neutral-400 hover:text-[#25D366] transition-all transform hover:scale-110">
                    <WhatsAppIcon className="w-8 h-8" />
                  </a>
                )}
                {product.links.tokopedia && (
                  <a href={product.links.tokopedia} target="_blank" title="Tokopedia" className="text-neutral-400 hover:text-[#03AC0E] transition-all transform hover:scale-110">
                    <TokopediaIcon className="w-8 h-8" />
                  </a>
                )}
                {product.links.tiktokshop && (
                  <a href={product.links.tiktokshop} target="_blank" title="TikTok Shop" className="text-neutral-400 hover:text-white transition-all transform hover:scale-110">
                    <TikTokShopIcon className="w-8 h-8" />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-12 font-mono text-[11px] uppercase tracking-wider leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-[#836EF9] font-bold tracking-[0.3em]">DESKRIPSI PRODUK</h3>
                <div className="space-y-4 text-neutral-400 normal-case tracking-normal leading-relaxed text-sm">
                  <p>{product.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-10">
                <div className="space-y-4">
                  <h3 className="text-[#836EF9] font-bold tracking-[0.3em]">SPESIFIKASI</h3>
                  <ul className="space-y-2 text-neutral-300">
                    {product.specs?.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[#836EF9] font-bold tracking-[0.3em]">KARAKTERISTIK</h3>
                  <ul className="space-y-2 text-neutral-300">
                    {product.features?.map((f, i) => <li key={i}>• {f}</li>)}
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/5 pt-10 space-y-4">
                <h3 className="text-[#836EF9] font-bold tracking-[0.3em]">YANG DIDAPATKAN</h3>
                <ul className="space-y-3 text-neutral-300">
                  {product.includes?.map((inc, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-[#00FF9D] shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                <div className="flex items-center gap-2 text-[#836EF9] mb-3">
                  <Info size={14} />
                  <span className="font-bold tracking-[0.2em]">PENTING</span>
                </div>
                <p className="text-[10px] text-neutral-500 normal-case tracking-normal leading-relaxed">
                  Akses digital hanya diberikan kepada pembeli resmi produk fisik. Tidak ada penjualan NFT secara terpisah. Produk ini bukan instrumen investasi.
                </p>
              </div>
            </div>

            {/* === PANEL DEPLOYMENT BLOCKCHAIN MONADVISION DIPINDAH KE SINI === */}
            {product.smartContract && product.explorerLink && (
              <div className="mt-12 bg-black border border-[#00FF9D]/30 p-5 md:p-6 rounded-sm relative overflow-hidden group shadow-[0_0_20px_rgba(0,255,157,0.05)]">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF9D] to-transparent opacity-50" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-white/5 pb-4">
                  <h3 className="text-[#00FF9D] text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] flex items-center gap-2 uppercase">
                    <Terminal size={14} /> ON-CHAIN PROVENANCE
                  </h3>
                  <div className="flex items-center gap-2 bg-[#00FF9D]/10 px-3 py-1 rounded-sm border border-[#00FF9D]/30 w-fit">
                    <div className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse" />
                    <span className="text-[#00FF9D] text-[8px] font-mono tracking-[0.2em] font-bold">MONAD NETWORK</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] p-4 border border-white/5 rounded-sm">
                    <p className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase mb-1">SMART CONTRACT NFT</p>
                    <p className="text-[10px] md:text-sm text-white font-mono break-all selection:bg-[#00FF9D] selection:text-black">
                      {product.smartContract}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase mb-1">Standard</p>
                      <p className="text-[10px] text-white font-mono font-bold tracking-widest">ERC-721</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase mb-1">Status</p>
                      <p className="text-[10px] text-[#00FF9D] font-mono font-bold tracking-widest">DEPLOYED / MINT</p>
                    </div>
                  </div>
                  
                  <a 
                    href={product.explorerLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-2 w-full flex items-center justify-center gap-2 py-3 bg-[#00FF9D]/10 border border-[#00FF9D]/30 text-[#00FF9D] hover:bg-[#00FF9D] hover:text-black transition-all text-[10px] font-bold font-mono tracking-widest uppercase rounded-sm"
                  >
                    <ExternalLink size={14} /> VIEW ON EXPLORER (MONADVISION)
                  </a>
                </div>
              </div>
            )}
            {/* ======================================================== */}
            
          </div>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX (MODAL) */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxData(null)}
          >
            <button className="absolute top-6 right-6 z-[210] p-3 bg-white/10 rounded-full hover:bg-[#836EF9] hover:text-black transition-all cursor-pointer" onClick={() => setLightboxData(null)}>
              <X size={24} />
            </button>

            <div className="relative w-full h-full max-w-5xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.div 
                key={lightboxData.currentIndex} 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }} 
                transition={{ duration: 0.2 }} 
                className="relative w-full h-full cursor-grab active:cursor-grabbing" 
                drag="x" 
                dragConstraints={{ left: 0, right: 0 }} 
                dragElastic={1} 
                onDragEnd={handleLightboxDragEnd}
              >
                {/* FIX: object-contain menjamin gambar TIDAK TERPOTONG di layar penuh */}
                <Image src={lightboxData.images[lightboxData.currentIndex]} alt="Zoomed" fill className="object-contain p-4 md:p-10" priority draggable={false} />
              </motion.div>

              {lightboxData.images.length > 1 && (
                <>
                  <button onClick={lightboxPrev} className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer">
                    <ChevronLeft size={40} />
                  </button>
                  <button onClick={lightboxNext} className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer">
                    <ChevronRight size={40} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {lightboxData.images.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === lightboxData.currentIndex ? 'w-8 bg-[#836EF9]' : 'w-2 bg-white/30'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}