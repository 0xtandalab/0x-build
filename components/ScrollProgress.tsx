'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX: scrollSpring,
        originX: 0,
        background: 'linear-gradient(to right, #836EF9, #00FF9D)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 2,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
