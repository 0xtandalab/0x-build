import type { CSSProperties } from 'react';

const base: CSSProperties = {
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 9998,
};

export default function NoiseOverlay() {
  return (
    <>
      {/* Layer 1 — Film Grain */}
      <svg
        style={{ ...base, opacity: 0.035, mixBlendMode: 'overlay' }}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <filter id="noise-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves={3}
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>

      {/* Layer 2 — Scanlines */}
      <div
        aria-hidden="true"
        style={{
          ...base,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 1px, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0.04) 2px)',
          backgroundSize: '100% 4px',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Layer 3 — Corner Vignette */}
      <div
        aria-hidden="true"
        style={{
          ...base,
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </>
  );
}
