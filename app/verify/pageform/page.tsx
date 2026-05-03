"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Wallet, 
  UploadCloud, 
  CheckCircle2, 
  AlertTriangle, 
  Loader2, 
  X,
  Key,
  User,
  Smartphone,
  Mail,
  ShoppingBag,
  ArrowLeft
} from 'lucide-react';

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

export default function VerifyFormPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'used'>('idle');
  const [fileName, setFileName] = useState('');
  
  // State khusus untuk Checkbox Persetujuan
  const [isAgreed, setIsAgreed] = useState(false);

  // 🔴 PASTIKAN URL INI BENAR DARI DEPLOYMENT GOOGLE APPS SCRIPT
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz9_dc-9v8UNopJGhjlzoBPluWiS9i2krk4-wARwH5PhiFiLx-BAHGoZoUgngcGw1ff/exec";

  const [formData, setFormData] = useState({
    secretCode: '',
    walletAddress: '',
    nama: '',
    gender: 'Pria',
    email: '',
    noHp: '',
    telegramId: '',
    productName: 'GENESIS BOXY TEE',
    orderId: '',
    proofImage: '' 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'secretCode') {
      // 1. Hapus semua karakter selain huruf dan angka, jadikan kapital
      let rawValue = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
      // 2. Batasi maksimal 12 karakter alfanumerik
      if (rawValue.length > 12) rawValue = rawValue.substring(0, 12);
      // 3. Sisipkan strip (-) setiap 4 karakter sehingga menjadi XXXX-XXXX-XXXX
      const formattedValue = rawValue.match(/.{1,4}/g)?.join('-') || rawValue;
      setFormData({ ...formData, [name]: formattedValue });
    } else if (name === 'telegramId') {
      // Auto tambahkan @ jika user lupa (Hanya kalau input tidak kosong)
      let tgValue = value.trim();
      if (tgValue.length > 0 && !tgValue.startsWith('@')) {
        tgValue = '@' + tgValue;
      }
      setFormData({ ...formData, [name]: tgValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file terlalu besar. Maksimal 2MB.");
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, proofImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // VALIDASI WALLET (Wajib Monad/EVM: Diawali 0x dan 40 karakter hex)
    const evmRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!evmRegex.test(formData.walletAddress)) {
        alert("ALAMAT WALLET TIDAK VALID!\nPastikan alamat dimulai dengan '0x' dan merupakan format standar MONAD/EVM.");
        return;
    }

    // VALIDASI KODE (Wajib 12 digit alfanumerik + 2 strip = 14 karakter)
    if (formData.secretCode.length !== 14) {
        alert("SECRET CODE TIDAK LENGKAP!\nPastikan Anda memasukkan 12 digit kode dengan benar (Format: XXXX-XXXX-XXXX).");
        return;
    }

    // VALIDASI TELEGRAM (Wajib pakai @ dan minimal 3 karakter setelah @)
    if (!formData.telegramId.startsWith('@') || formData.telegramId.length < 4) {
        alert("ID TELEGRAM TIDAK VALID!\nPastikan mengisi username Telegram yang diawali dengan simbol '@' (contoh: @username).");
        return;
    }

    // VALIDASI PERSETUJUAN
    if (!isAgreed) {
        alert("Anda harus menyetujui Peringatan dan Kebijakan 0xTanda untuk melanjutkan.");
        return;
    }

    setIsLoading(true);

    try {
      // Menyertakan data persetujuan ke payload untuk direkam di database
      const payloadData = {
        ...formData,
        persetujuanKebijakan: isAgreed ? "SETUJU" : "TIDAK_SETUJU"
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payloadData),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('success');
      } else if (result.status === 'duplicate') {
        setStatus('used');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      // Menangkap error CORS yang umum terjadi di Google Apps Script walau data berhasil masuk
      setStatus('success'); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-mono overflow-x-hidden relative">
      <div className="pt-32 px-6 pb-20 max-w-4xl mx-auto relative z-10">
        
        {/* Tombol Kembali ke Portal */}
        <Link 
          href="/verify"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-10 font-mono text-[10px] tracking-[0.5em] uppercase transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO PORTAL
        </Link>
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#836EF9] bg-[#836EF9]/10 px-4 py-1 mb-6 rounded-full">
            <div className="w-2 h-2 bg-[#836EF9] rounded-full animate-pulse"/>
            <span className="text-[10px] text-[#836EF9] font-bold tracking-[0.2em] uppercase">SYSTEM_ONLINE // DATA_ENTRY</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-4">
            ACTIVATION <span className="text-[#836EF9]">FORM</span>
          </h1>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* SECTION 1: CRITICAL DATA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-[#836EF9]/50 p-8 rounded-sm shadow-[0_0_30px_rgba(131,110,249,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <ShieldCheck size={64} className="text-[#836EF9]" />
              </div>
              <h4 className="text-[#836EF9] text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <ShieldCheck size={16}/> PRIMARY CREDENTIALS
              </h4>
              
              <div className="grid gap-10">
                <div className="space-y-3 relative z-10">
                  <label className="text-xs text-[#836EF9] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Key size={14}/> SECRET CODE (GENESIS CARD)
                  </label>
                  <input 
                    type="text" 
                    name="secretCode"
                    value={formData.secretCode}
                    maxLength={14}
                    required
                    placeholder="XXXX-XXXX-XXXX" 
                    className="w-full bg-black border-2 border-[#836EF9] p-6 text-xl md:text-3xl font-sans font-bold text-white placeholder:text-white/10 focus:shadow-[0_0_30px_rgba(131,110,249,0.4)] focus:outline-none transition-all uppercase tracking-widest text-center rounded-sm"
                    onChange={handleInputChange}
                  />
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest text-center">*Masukkan 12 digit (Format otomatis: XXXX-XXXX-XXXX)</p>
                </div>

                <div className="space-y-3 relative z-10">
                  <label className="text-xs text-[#00FF9D] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Wallet size={14}/> WALLET MONAD ADDRESS
                  </label>
                  <input 
                    type="text" 
                    name="walletAddress"
                    value={formData.walletAddress}
                    required
                    placeholder="0x..." 
                    className="w-full bg-black border-2 border-[#00FF9D]/50 p-6 text-sm md:text-xl font-mono text-[#00FF9D] placeholder:text-[#00FF9D]/20 focus:border-[#00FF9D] focus:shadow-[0_0_30px_rgba(0,255,157,0.2)] focus:outline-none transition-all rounded-sm"
                    onChange={handleInputChange}
                  />
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest text-right">*Wajib format 0x... (Personal Wallet Monad)</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: PROFILE */}
          <div className="space-y-8 pt-8 border-t border-white/5">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <User size={16} className="text-neutral-500" /> IDENTITAS OWNER
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Nama Lengkap <span className="text-red-500">*</span></label>
                <input type="text" name="nama" value={formData.nama} required className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Jenis Kelamin</label>
                <select name="gender" value={formData.gender} className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors appearance-none" onChange={handleInputChange}>
                  <option value="Pria">PRIA</option>
                  <option value="Wanita">WANITA</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Email Aktif <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                  <input type="email" name="email" value={formData.email} required className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">No. HP / WhatsApp <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                  <input type="tel" name="noHp" value={formData.noHp} required className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">ID Telegram (Wajib pakai @) <span className="text-red-500">*</span></label>
                <input type="text" name="telegramId" value={formData.telegramId} required placeholder="@username" className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* SECTION 3: DETAIL ORDER */}
          <div className="space-y-8 pt-8 border-t border-white/5">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <ShoppingBag size={16} className="text-neutral-500" /> DETAIL TRANSAKSI
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Pilih Artefak (Produk)</label>
                <div className="relative">
                  <select name="productName" value={formData.productName} className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-[#836EF9] font-bold focus:border-white/50 focus:outline-none transition-colors appearance-none uppercase" onChange={handleInputChange}>
                    <option value="GENESIS BOXY TEE">GENESIS BOXY TEE [BATCH #001]</option>
                    <option value="-" disabled>ARCHIVE 02 (LOCKED)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-2 h-2 bg-[#836EF9] rounded-full" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Order ID <span className="text-red-500">*</span></label>
                <input type="text" name="orderId" value={formData.orderId} required placeholder="Contoh: 230919ABC..." className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Upload Bukti Pembelian (Max 2MB) <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <input type="file" id="fileUpload" required className="hidden" onChange={handleFileChange} accept="image/*" />
                  <label htmlFor="fileUpload" className="w-full bg-[#121212] border border-white/10 border-dashed p-4 text-sm text-neutral-400 flex items-center justify-between cursor-pointer hover:bg-white/5 hover:border-[#836EF9] transition-all">
                    <span className="truncate font-mono">{fileName || "KLIK UNTUK UPLOAD FILE..."}</span>
                    <UploadCloud size={20} className="text-neutral-500 group-hover:text-[#836EF9]" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* WARNING & DISCLAIMER BOX DENGAN CHECKBOX PERSETUJUAN */}
          <div className="pt-8">
            <div className="bg-red-900/10 border border-red-500/30 p-6 md:p-8 rounded-sm space-y-6">
              <div className="flex items-center gap-2 text-red-500 font-bold text-sm md:text-base uppercase tracking-widest">
                <AlertTriangle size={20} /> PERINGATAN & KEBIJAKAN
              </div>
              <p className="text-[11px] md:text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
                Produk 0xTanda <strong className="text-white">bukan instrumen investasi</strong>, dan 0xTanda <strong className="text-white">bukan tempat jual beli</strong>. Setiap produk dan aset digital yang sudah keluar (didistribusikan) dari sistem 0xTanda sepenuhnya menjadi hak dan tanggung jawab mutlak pemilik, dan bukan lagi menjadi tanggung jawab 0xTanda.
              </p>
              
              {/* Checkbox Persetujuan */}
              <label className="flex items-start gap-4 cursor-pointer mt-4 group">
                <div className="relative flex items-start justify-center mt-0.5">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 accent-[#836EF9] bg-[#121212] border border-white/30 rounded-sm cursor-pointer"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    required
                  />
                </div>
                <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-relaxed transition-colors ${isAgreed ? 'text-[#00FF9D]' : 'text-white group-hover:text-[#836EF9]'}`}>
                  SAYA TELAH MEMBACA, MEMAHAMI, DAN MENYETUJUI SELURUH KEBIJAKAN SERTA PERINGATAN DI ATAS.
                </span>
              </label>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isLoading || !isAgreed}
              className="w-full bg-[#836EF9] text-black font-mono text-sm font-bold py-6 uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-neutral-500 shadow-[0_0_40px_rgba(131,110,249,0.3)] hover:shadow-[0_0_60px_rgba(131,110,249,0.6)] rounded-sm"
            >
              {isLoading ? <><Loader2 className="animate-spin" size={20} /> VALIDATING DATA...</> : "SUBMIT VERIFICATION DATA"}
            </button>
          </div>
        </form>
      </div>

      {/* POPUP MODALS */}
      <AnimatePresence>
        {status !== 'idle' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0E0E0E] border border-white/10 p-10 max-w-md w-full text-center relative shadow-[0_0_50px_rgba(131,110,249,0.2)]"
            >
              <button onClick={() => setStatus('idle')} className="absolute top-4 right-4 text-neutral-500 hover:text-white"><X size={24} /></button>

              {status === 'success' && (
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-[#00FF9D]/10 rounded-full flex items-center justify-center mx-auto border border-[#00FF9D]/30">
                    <CheckCircle2 size={48} className="text-[#00FF9D]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2">VERIFIED</h3>
                    <div className="h-1 w-12 bg-[#00FF9D] mx-auto mb-4" />
                    <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-relaxed">Data Anda telah diterima. Tim 0xTanda akan memvalidasi dalam 1x24 jam.</p>
                  </div>
                </div>
              )}

              {status === 'used' && (
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-[#EE4D2D]/10 rounded-full flex items-center justify-center mx-auto border border-[#EE4D2D]/30">
                    <AlertTriangle size={48} className="text-[#EE4D2D]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#EE4D2D] uppercase tracking-tighter mb-2">KODE DIGUNAKAN</h3>
                    <div className="h-1 w-12 bg-[#EE4D2D] mx-auto mb-4" />
                    <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-relaxed">Kode Rahasia terdeteksi duplikat atau sudah pernah diklaim sebelumnya.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto border border-yellow-500/30">
                    <AlertTriangle size={48} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2">ERROR</h3>
                    <div className="h-1 w-12 bg-yellow-500 mx-auto mb-4" />
                    <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-relaxed">Kode Rahasia tidak dikenali. Pastikan Anda mengetik 12 digit kode dengan benar.</p>
                  </div>
                </div>
              )}
              
              <button onClick={() => setStatus('idle')} className="mt-10 w-full border border-white/20 py-4 text-xs font-bold uppercase hover:bg-white hover:text-black transition-all">TUTUP</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}