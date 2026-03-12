'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const links = [
  {
    icon: FaGithub,
    href: 'https://github.com/WiiWake3101',
    label: 'GitHub',
    color: '#e6edf3',
    glow: 'rgba(230,237,243,0.3)',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/vm4512',
    label: 'LinkedIn',
    color: '#0a84ff',
    glow: 'rgba(10,132,255,0.35)',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:vivekmg31@gmail.com',
    label: 'Email',
    color: '#00fff0',
    glow: 'rgba(0,255,240,0.35)',
  },
];

export default function FloatingSocial() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div
      className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1"
    >
      {/* Top line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-px h-16 origin-top"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(0,255,240,0.4))' }}
      />

      {/* Icon buttons */}
      <div className="flex flex-col items-center gap-2 my-2">
        {links.map(({ icon: Icon, href, label, color, glow }, idx) => (
          <div key={label} className="relative flex items-center">
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-10 whitespace-nowrap text-[10px] tracking-widest px-2 py-1 rounded pointer-events-none"
                  style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    background: 'rgba(2,6,12,0.95)',
                    border: `1px solid ${color}40`,
                    color,
                    boxShadow: `0 0 10px ${glow}`,
                  }}
                >
                  {label.toUpperCase()}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              onHoverStart={() => setHoveredIdx(idx)}
              onHoverEnd={() => setHoveredIdx(null)}
              whileHover={{ scale: 1.2, x: 3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
              className="w-9 h-9 flex items-center justify-center rounded-lg"
              style={{
                background: 'rgba(4,10,20,0.88)',
                border: `1px solid ${color}30`,
                backdropFilter: 'blur(10px)',
                color,
              }}
            >
              <Icon
                size={15}
                style={{
                  filter: hoveredIdx === idx ? `drop-shadow(0 0 5px ${color})` : 'none',
                  transition: 'filter 0.2s',
                }}
              />
            </motion.a>
          </div>
        ))}
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-px h-16 origin-bottom"
        style={{ background: 'linear-gradient(180deg, rgba(0,255,240,0.4), transparent)' }}
      />
    </div>
  );
}
