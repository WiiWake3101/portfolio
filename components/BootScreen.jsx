'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  '> INITIALIZING NEURAL_CORE.SYS........... OK',
  '> LOADING CYBERPUNK_INTERFACE.EXE........ OK',
  '> ESTABLISHING SECURE CHANNEL............ OK',
  '> DECRYPTING VIVEK_MG.PROFILE............ OK',
  '> CALIBRATING HOLOGRAPHIC DISPLAY........ OK',
  '> ALL SYSTEMS NOMINAL. WELCOME.',
];

export default function BootScreen() {
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState([]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setVisible(true);

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        const line = bootLines[i];
        i++;
        setLines(prev => [...prev, line]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            setVisible(false);
          }, 700);
        }, 500);
      }
    }, 230);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="boot-screen"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          transition={{ duration: 0.7 }}
          style={{ background: '#020408' }}
        >
          {/* HUD grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,240,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,240,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.02) 3px,rgba(0,255,240,0.02) 4px)' }}
          />

          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-96 h-96 rounded-full top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
              style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="absolute w-96 h-96 rounded-full bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
              style={{ background: 'radial-gradient(circle, rgba(0,255,240,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          </div>

          {/* Terminal card */}
          <div
            className="relative w-full max-w-xl mx-4 rounded-xl overflow-hidden"
            style={{ background: 'rgba(2,4,10,0.97)', border: '1px solid rgba(0,255,240,0.2)', maxHeight: '90vh' }}
          >
            {/* Top bar */}
            <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #00fff0, #0066ff, #ff00aa)', boxShadow: '0 0 12px #00fff0' }} />

            {/* Window chrome */}
            <div className="px-4 py-2 flex items-center gap-2 border-b border-white/5">
              {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
              <span className="ml-2 text-[10px] tracking-widest opacity-40 truncate"
                style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
                VIVEK_MG — BOOT.SH
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-4 sm:p-6 min-h-[200px] max-h-[calc(90vh-80px)] overflow-y-auto">
              {/* ASCII logo */}
              <pre
                className="text-[6px] sm:text-[8px] md:text-[10px] mb-3 sm:mb-5 opacity-60 leading-tight hidden sm:block"
                style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}
              >
{`
 ██╗   ██╗██╗██╗   ██╗███████╗██╗  ██╗    ███╗   ███╗ ██████╗
 ██║   ██║██║██║   ██║██╔════╝██║ ██╔╝    ████╗ ████║██╔════╝
 ██║   ██║██║██║   ██║█████╗  █████╔╝     ██╔████╔██║██║  ███╗
 ╚██╗ ██╔╝██║╚██╗ ██╔╝██╔══╝  ██╔═██╗     ██║╚██╔╝██║██║   ██║
  ╚████╔╝ ██║ ╚████╔╝ ███████╗██║  ██╗    ██║ ╚═╝ ██║╚██████╔╝
   ╚═══╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝   ╚═╝     ╚═╝ ╚═════╝
`}
              </pre>

              {/* Mobile simplified header */}
              <div className="sm:hidden mb-4 text-center">
                <div className="text-lg font-bold" style={{ fontFamily: 'Orbitron, monospace', color: '#00fff0', textShadow: '0 0 10px rgba(0,255,240,0.6)' }}>
                  VIVEK M G
                </div>
                <div className="text-[9px] opacity-50 tracking-widest mt-1" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
                  PORTFOLIO SYSTEM
                </div>
              </div>

              {/* Boot lines */}
              <div className="flex flex-col gap-1 sm:gap-1.5">
                {lines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] sm:text-xs break-words"
                    style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      color: line.includes('WELCOME') ? '#00ff88' : '#00fff0',
                      textShadow: line.includes('WELCOME') ? '0 0 8px #00ff88' : '0 0 6px rgba(0,255,240,0.5)',
                    }}
                  >
                    {line}
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                {lines.length < bootLines.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block w-1.5 sm:w-2 h-3 sm:h-3.5 align-middle"
                    style={{ background: '#00fff0', boxShadow: '0 0 6px #00fff0' }}
                  />
                )}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="h-0.5" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,240,0.4), transparent)' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
