'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [pct, setPct] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', v => setPct(Math.round(v * 100)));
  }, [scrollYProgress]);

  return (
    <>
      {/* Main neon progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #00fff0, #0066ff, #ff00aa)',
          boxShadow: '0 0 8px #00fff0, 0 0 20px rgba(0,255,240,0.4)',
        }}
      />
      {/* HUD percentage readout */}
      <div
        className="fixed top-3 right-16 z-[101] text-[10px] tracking-widest"
        style={{ fontFamily: 'Share Tech Mono, monospace', color: 'rgba(0,255,240,0.55)' }}
      >
        {String(pct).padStart(3, '0')}%
      </div>
    </>
  );
}