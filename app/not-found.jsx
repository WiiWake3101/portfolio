'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const glitchFrames = ['NOT_FOUND', 'N0T_F0UND', 'N@T_F#UND', 'NOT_FOUND'];

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: '#020408' }}>
      {/* HUD grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,240,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,240,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.018) 3px,rgba(0,255,240,0.018) 4px)' }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full -top-20 -left-20"
          style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute w-96 h-96 rounded-full -bottom-20 -right-20"
          style={{ background: 'radial-gradient(circle, rgba(255,0,170,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-white text-center px-6 max-w-lg"
      >
        {/* 404 big glitch text */}
        <motion.div
          animate={{ opacity: [1, 0.85, 1, 0.9, 1] }}
          transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3 }}
          className="text-[120px] font-black leading-none mb-4 select-none"
          style={{
            fontFamily: 'Orbitron, monospace',
            color: '#00fff0',
            textShadow: '0 0 30px rgba(0,255,240,0.7), 0 0 60px rgba(0,255,240,0.3), 4px 0 rgba(255,0,170,0.4)',
            letterSpacing: '-0.03em',
          }}
        >
          404
        </motion.div>

        {/* Glitch subtitle */}
        <motion.div
          animate={{ x: [0, -2, 1, -1, 0] }}
          transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 2.5 }}
          className="text-xs tracking-[0.4em] mb-3 opacity-60"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#ff00aa' }}
        >
          // ERROR: SECTOR_NOT_FOUND
        </motion.div>

        <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Route Does Not Exist
        </h1>

        <p className="text-sm opacity-60 mb-8 leading-relaxed"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#a0c4d4' }}>
          &gt; The page you requested has been deleted, moved, or was never uploaded to this system.
          Initiating redirect to base directory...
        </p>

        {/* Animated terminal line */}
        <div
          className="mb-8 p-3 rounded text-left text-xs"
          style={{ fontFamily: 'Share Tech Mono, monospace', background: 'rgba(0,255,240,0.04)', border: '1px solid rgba(0,255,240,0.15)', color: '#00fff0' }}
        >
          <span className="opacity-50">$ </span>
          <span>cd /home</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block w-1.5 h-3.5 align-middle ml-0.5"
            style={{ background: '#00fff0' }}
          />
        </div>

        {/* Back home CTA */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold tracking-widest transition-all"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: 'rgba(0,255,240,0.08)',
              border: '1px solid rgba(0,255,240,0.4)',
              color: '#00fff0',
              boxShadow: '0 0 20px rgba(0,255,240,0.15)',
              textDecoration: 'none',
            }}
          >
            ← RETURN_TO_BASE
          </Link>
        </motion.div>

        {/* Bottom badge */}
        <div className="mt-10 text-[10px] opacity-30 tracking-widest"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          VIVEK_MG_PORTFOLIO // STATUS: 404
        </div>
      </motion.div>
    </div>
  );
}
