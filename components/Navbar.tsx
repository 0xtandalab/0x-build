"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection — compact navbar after 50px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME',         path: '/' },
    { name: 'SHOP',         path: '/shop' },
    { name: 'VERIFY',       path: '/verify' },
    { name: 'ABOUT',        path: '/about' },
    { name: 'TERMINAL LOG', path: '/terminal-log' },
  ];

  return (
    <nav
      className={`fixed left-0 w-full z-50 px-6 transition-all duration-300 ease-in-out ${
        scrolled ? 'top-3' : 'top-10'
      }`}
    >
      {/* ── Pill container — shrinks on scroll ── */}
      <div
        className={`max-w-7xl mx-auto border border-white/10 rounded-2xl flex items-center justify-between shadow-2xl transition-all duration-300 ease-in-out ${
          scrolled
            ? 'p-2.5 bg-[rgba(14,14,14,0.88)]'
            : 'p-4 bg-black/60'
        }`}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        {/* Logo — scale 1.02 on hover */}
        <Link href="/" className="flex items-center">
          <div className="relative w-8 h-8 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src="/branding/logo-0xtanda-icon.png"
              alt="0xTanda Icon"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive =
              (pathname.startsWith(link.path) && link.path !== '/') ||
              pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors duration-200 relative ${
                  isActive
                    ? 'bg-[#836EF9] text-black font-bold'
                    : 'text-neutral-400 hover:text-white nav-link-hover'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 flex flex-col gap-6 lg:hidden shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-display font-bold tracking-tighter transition-colors uppercase ${
                (pathname.startsWith(link.path) && link.path !== '/') ||
                pathname === link.path
                  ? 'text-[#836EF9]'
                  : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
