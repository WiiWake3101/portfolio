'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaExpand, FaCompress, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

export default function CVSection({ sectionRef }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const check = () => setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cvEmbedUrl  = '/Vivek_CV.pdf#toolbar=0&navpanes=0&view=FitH';
  const cvDirectUrl = '/Vivek_CV.pdf';

  const btnStyle = (color = '#00fff0') => ({
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
    padding: '8px 14px', borderRadius: '6px',
    background: `${color}10`, border: `1px solid ${color}35`, color,
    fontFamily: 'Orbitron, monospace', fontSize: '11px', letterSpacing: '0.06em',
    cursor: 'pointer', transition: 'all 0.2s', textDecoration: 'none',
  });

  return (
    <motion.section
      ref={sectionRef}
      id="cv"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // RESUME.PDF
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Academic CV
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(0,255,240,0.15)', boxShadow: '0 0 40px rgba(0,255,240,0.05)' }}
        >
          {/* HUD toolbar */}
          <div className="flex items-center justify-between px-4 py-2.5"
            style={{ background: 'rgba(2,6,12,0.98)', borderBottom: '1px solid rgba(0,255,240,0.1)' }}>
            <div className="flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                {['#ff5f57','#ffbd2e','#28c840'].map((c,i)=>(
                  <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="text-[10px] tracking-widest opacity-40" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
                VIVEK_CV.PDF
              </span>
            </div>
            <div className="flex items-center gap-2">
              {isClient && isMobile && (
                <>
                  <motion.a href={cvDirectUrl} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }} style={btnStyle('#0066ff')}>
                    <FaExternalLinkAlt size={10} /> OPEN
                  </motion.a>
                  <motion.a href={cvDirectUrl} download="Vivek_CV.pdf"
                    whileHover={{ scale: 1.05 }} style={btnStyle('#00ff88')}>
                    <FaDownload size={10} /> DOWNLOAD
                  </motion.a>
                </>
              )}
              {isClient && !isMobile && (
                <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsFullscreen(!isFullscreen)}
                  style={{ ...btnStyle(), cursor: 'pointer', border: 'none', background: 'rgba(0,255,240,0.06)', color: '#00fff0' }}>
                  {isFullscreen ? <FaCompress size={12} /> : <FaExpand size={12} />}
                </motion.button>
              )}
            </div>
          </div>

          {/* Viewer */}
          <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
            style={{ background: '#020408' }}>
            {isFullscreen && (
              <button onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded"
                style={{ background:'rgba(2,6,12,0.95)', border:'1px solid rgba(0,255,240,0.2)', color:'#00fff0' }}>
                <FaCompress size={16} />
              </button>
            )}

            {isClient && isMobile ? (
              <div className="flex flex-col items-center justify-center p-10 gap-6 min-h-[400px]">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center"
                  style={{ background:'rgba(0,255,240,0.06)', border:'1px solid rgba(0,255,240,0.2)' }}>
                  <FaDownload size={32} style={{ color:'#00fff0' }} />
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2" style={{ fontFamily:'Orbitron, monospace', color:'#00fff0' }}>VIEW_CV.PDF</h3>
                  <p className="text-xs opacity-50" style={{ fontFamily:'Share Tech Mono, monospace' }}>Open in browser or download</p>
                </div>
                <div className="flex gap-3">
                  <motion.a href={cvDirectUrl} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale:1.05 }} className="flex items-center gap-2 px-4 py-2 rounded text-sm font-bold"
                    style={{ fontFamily:'Orbitron, monospace', background:'rgba(0,102,255,0.1)', border:'1px solid rgba(0,102,255,0.35)', color:'#0066ff' }}>
                    <FaExternalLinkAlt size={12} /> OPEN
                  </motion.a>
                  <motion.a href={cvDirectUrl} download="Vivek_CV.pdf"
                    whileHover={{ scale:1.05 }} className="flex items-center gap-2 px-4 py-2 rounded text-sm font-bold"
                    style={{ fontFamily:'Orbitron, monospace', background:'rgba(0,255,136,0.1)', border:'1px solid rgba(0,255,136,0.35)', color:'#00ff88' }}>
                    <FaDownload size={12} /> SAVE
                  </motion.a>
                </div>
              </div>
            ) : (
              <object data={cvEmbedUrl} type="application/pdf"
                className={`w-full border-0 ${isFullscreen ? 'h-screen' : 'h-[500px] sm:h-[650px] lg:h-[800px]'}`}>
                <iframe
                  src={isClient ? `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + cvDirectUrl)}&embedded=true` : cvDirectUrl}
                  className="w-full h-full border-0" title="Academic CV" />
              </object>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5"
            style={{ background:'rgba(0,255,240,0.06)', borderTop:'1px solid rgba(0,255,240,0.08)' }}>
            <span className="text-[9px] tracking-widest opacity-50" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>VIVEK_MG // ACADEMIC_CV</span>
            <span className="text-[9px] tracking-widest opacity-35" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>PDF_VIEWER_v2.0</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}