'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const links = [
  { icon: FaGithub, href: 'https://github.com/Wiiwake3101', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/vm4512', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:vivekmg31@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative mb-10 overflow-hidden rounded-2xl"
      style={{ background: 'rgba(2,6,12,0.9)', border: '1px solid rgba(0,255,240,0.1)' }}>
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #00fff0, #ff00aa, transparent)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.015) 3px,rgba(0,255,240,0.015) 4px)' }} />
      <div className="relative px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs tracking-widest opacity-40" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          © {new Date().getFullYear()} VIVEK_MG // ALL_RIGHTS_RESERVED
        </span>
        <div className="flex gap-3">
          {links.map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs tracking-widest transition-all"
              style={{ fontFamily: 'Share Tech Mono, monospace', background: 'rgba(0,255,240,0.04)', border: '1px solid rgba(0,255,240,0.15)', color: 'rgba(0,255,240,0.7)' }}>
              <Icon className="text-sm" />
              {label.toUpperCase()}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}