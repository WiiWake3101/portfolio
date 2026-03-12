'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
          style={{
            background: 'rgba(4,10,20,0.92)',
            border: '1px solid rgba(0,255,240,0.45)',
            boxShadow: '0 0 18px rgba(0,255,240,0.25), inset 0 0 8px rgba(0,255,240,0.06)',
            backdropFilter: 'blur(14px)',
          }}
          whileHover={{
            scale: 1.12,
            boxShadow: '0 0 28px rgba(0,255,240,0.45), inset 0 0 12px rgba(0,255,240,0.1)',
          }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0, 0.35] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ border: '1px solid rgba(0,255,240,0.5)' }}
          />
          <FaChevronUp style={{ color: '#00fff0', filter: 'drop-shadow(0 0 5px #00fff0)' }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
