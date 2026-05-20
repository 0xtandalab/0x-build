'use client';

import { useEffect, useRef, useState } from 'react';

function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

export default function CursorSystem() {
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Mobile check — only activate on pointer/hover-capable devices
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isTouch && !prefersReduced) setVisible(true);
  }, []);

  // Animation loop — runs only after mobile check passes
  useEffect(() => {
    if (!visible) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !glow) return;

    document.body.style.cursor = 'none';

    const mouse = { x: -1000, y: -1000 };
    const ringPos = { x: -1000, y: -1000 };
    const glowPos = { x: -1000, y: -1000 };
    let isHovered = false;
    let currentScale = 1;
    let ringAlpha = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // Zero lag — bypass rAF, write directly to DOM
      dot.style.transform = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`;
    };

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        isHovered = true;
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        isHovered = false;
      }
    };

    const animate = () => {
      // Ring — lerp 0.12 (slight lag)
      ringPos.x = lerp(ringPos.x, mouse.x, 0.12);
      ringPos.y = lerp(ringPos.y, mouse.y, 0.12);

      // Glow — lerp 0.04 (heavy lag, dreamy follow)
      glowPos.x = lerp(glowPos.x, mouse.x, 0.04);
      glowPos.y = lerp(glowPos.y, mouse.y, 0.04);

      // Lerp scale + fill for smooth hover transitions
      currentScale = lerp(currentScale, isHovered ? 2 : 1, 0.1);
      ringAlpha = lerp(ringAlpha, isHovered ? 0.08 : 0, 0.1);

      ring.style.transform = `translate(${ringPos.x - 14}px, ${ringPos.y - 14}px) scale(${currentScale.toFixed(4)})`;
      ring.style.background = `rgba(131,110,249,${ringAlpha.toFixed(4)})`;
      glow.style.transform = `translate(${glowPos.x - 200}px, ${glowPos.y - 200}px)`;

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot — 6px, zero lag, direct DOM write on mousemove */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#836EF9',
          pointerEvents: 'none',
          zIndex: 10001,
          willChange: 'transform',
          transform: 'translate(-1000px, -1000px)',
        }}
      />

      {/* Ring — 28px, lerp 0.12, scale×2 + fill on interactive hover */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '1px solid rgba(131,110,249,0.5)',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 10000,
          willChange: 'transform',
          transform: 'translate(-1000px, -1000px)',
        }}
      />

      {/* Ambient Glow — 400px, lerp 0.04, purple radial light */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 400,
          height: 400,
          background:
            'radial-gradient(circle, rgba(131,110,249,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9997,
          willChange: 'transform',
          transform: 'translate(-1000px, -1000px)',
        }}
      />
    </>
  );
}
