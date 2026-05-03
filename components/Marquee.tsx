export default function Marquee() {
  const text = "0XTANDA • PHYGITAL STREETWEAR • COMING SOON 0XTANDA ORIGIN • JAKARTA EST. 2026 • ";
  
  return (
    <div className="fixed top-0 left-0 w-full bg-brand-purple text-black py-2 z-[60] overflow-hidden font-mono text-[10px] font-bold">
      <div className="animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4 italic tracking-widest">{text}</span>
        ))}
      </div>
    </div>
  );
}