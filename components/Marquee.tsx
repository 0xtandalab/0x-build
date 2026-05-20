// Marquee banner — fixed top, dark bg, mixed purple/white text

function MarqueeUnit() {
  return (
    <span className="inline-flex items-center whitespace-nowrap font-mono text-[10px] font-bold italic">
      <span className="text-[#836EF9] tracking-[0.35em] mx-5">0xTANDA</span>
      <span className="text-white/25 mx-1 tracking-wider not-italic">{'//'}</span>
      <span className="text-white/65 tracking-[0.3em] mx-5">PHYGITAL STREETWEAR</span>
      <span className="text-[#836EF9] mx-4 not-italic">✦</span>
      <span className="text-white/65 tracking-[0.3em] mx-5">0XTANDA ORIGIN-LOG-1 COMING SOON</span>
      <span className="text-[#836EF9] mx-4 not-italic">✦</span>
      <span className="text-[#836EF9] tracking-[0.35em] mx-5">ONE ENTITY</span>
      <span className="text-white/65 tracking-[0.3em] ml-1 mx-5">DUAL EXISTENCE</span>
      <span className="text-[#836EF9] mx-4 not-italic">✦</span>
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0a0a0a] border-b border-white/[0.06] py-2 z-[60] overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <MarqueeUnit key={i} />
        ))}
      </div>
    </div>
  );
}
