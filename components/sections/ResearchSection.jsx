'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaExpand, FaCompress, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

export default function ResearchSection({ sectionRef }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile]         = useState(false);
  const [isClient, setIsClient]         = useState(false);

  useEffect(() => {
    setIsClient(true);
    const check = () => setIsMobile(window.innerWidth < 1024 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const pdfUrl    = '/research_paper.pdf#toolbar=0&navpanes=0&view=FitH';
  const directUrl = '/research_paper.pdf';

  const Tag = ({ children, accent = '#00fff0' }) => (
    <span className="inline-block text-[10px] tracking-widest px-2 py-0.5 rounded"
      style={{ fontFamily: 'Share Tech Mono, monospace', background: `${accent}10`, border: `1px solid ${accent}30`, color: accent }}>
      {children}
    </span>
  );

  return (
    <motion.section
      ref={sectionRef}
      id="research"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // RESEARCH_OUTPUT.PDF
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Research Paper
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="relative rounded-xl overflow-hidden h-full"
            style={{ background: 'rgba(4,10,20,0.9)', border: '1px solid rgba(0,255,240,0.15)', backdropFilter: 'blur(14px)' }}>

            {/* Top bar */}
            <div className="h-0.5" style={{ background: 'linear-gradient(90deg,#00fff0,#0066ff,#ff00aa)', boxShadow: '0 0 10px #00fff0' }} />

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-15"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.012) 3px,rgba(0,255,240,0.012) 4px)' }} />

            <div className="relative p-6 space-y-5">
              {/* Status */}
              <div className="flex items-center gap-2">
                <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.4, repeat:Infinity }}
                  className="w-2 h-2 rounded-full" style={{ background:'#ffaa00', boxShadow:'0 0 6px #ffaa00' }} />
                <Tag accent="#ffaa00">UNDER_REVIEW</Tag>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold leading-snug"
                style={{ fontFamily: 'Orbitron, monospace', fontSize: '12px', color: '#00fff0', textShadow: '0 0 10px rgba(0,255,240,0.4)', letterSpacing: '0.03em' }}>
                Embedded Machine Learning for Early Detection of Heart Attack Symptoms
              </h3>

              {/* Authors */}
              <div className="space-y-3 pt-2" style={{ borderTop: '1px solid rgba(0,255,240,0.08)' }}>
                {[
                  { name: 'Vivek M G', email: 'vm4512@srmist.edu.in' },
                  { name: 'S Raghuram', email: 'rs0657@srmist.edu.in' },
                  { name: 'Dr. R Jeya', email: 'jeyar@srmist.edu.in' },
                ].map((a,i) => (
                  <div key={i}>
                    <p className="text-xs font-bold" style={{ color: i === 0 ? '#00fff0' : 'rgba(160,196,212,0.9)' }}>{a.name}</p>
                    <p className="text-[10px] opacity-40" style={{ fontFamily: 'Share Tech Mono, monospace' }}>SRMIST, Kattankulathur</p>
                    <p className="text-[10px]" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0', opacity: 0.5 }}>{a.email}</p>
                  </div>
                ))}
              </div>

              {/* Conference */}
              <div className="pt-3 space-y-2" style={{ borderTop: '1px solid rgba(0,255,240,0.08)' }}>
                <p className="text-[11px] font-semibold leading-snug" style={{ color: '#00fff0', fontFamily: 'Orbitron, monospace', fontSize: '10px' }}>
                  I-SMAC 2025
                </p>
                <p className="text-[10px] opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                  9th Intl. Conf. on IoT in Social, Mobile, Analytics and Cloud
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Tag accent="#0066ff">OCT 08–10 2025</Tag>
                  <Tag accent="#00ff88">PRESENTED OCT 9</Tag>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(0,255,240,0.15)', boxShadow: '0 0 30px rgba(0,255,240,0.04)' }}
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-2.5"
            style={{ background: 'rgba(2,6,12,0.98)', borderBottom: '1px solid rgba(0,255,240,0.1)' }}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {['#ff5f57','#ffbd2e','#28c840'].map((c,i)=><div key={i} className="w-3 h-3 rounded-full" style={{ background:c }} />)}
              </div>
              <span className="text-[10px] tracking-widest opacity-40" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>research_paper.pdf</span>
            </div>
            <div className="flex gap-2">
              {isClient && isMobile && (
                <>
                  <motion.a href={directUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.05 }}
                    className="flex items-center gap-1 px-3 py-1 rounded text-[10px] tracking-widest"
                    style={{ fontFamily:'Orbitron, monospace', background:'rgba(0,102,255,0.1)', border:'1px solid rgba(0,102,255,0.3)', color:'#0066ff' }}>
                    <FaExternalLinkAlt size={9} /> OPEN
                  </motion.a>
                  <motion.a href={directUrl} download="Research_Paper_Vivek.pdf" whileHover={{ scale:1.05 }}
                    className="flex items-center gap-1 px-3 py-1 rounded text-[10px] tracking-widest"
                    style={{ fontFamily:'Orbitron, monospace', background:'rgba(0,255,136,0.1)', border:'1px solid rgba(0,255,136,0.3)', color:'#00ff88' }}>
                    <FaDownload size={9} /> SAVE
                  </motion.a>
                </>
              )}
              {isClient && !isMobile && (
                <motion.button onClick={() => setIsFullscreen(!isFullscreen)} whileHover={{ scale:1.05 }}
                  className="p-1.5 rounded"
                  style={{ background:'rgba(0,255,240,0.06)', border:'1px solid rgba(0,255,240,0.2)', color:'#00fff0', cursor:'pointer' }}>
                  {isFullscreen ? <FaCompress size={12}/> : <FaExpand size={12}/>}
                </motion.button>
              )}
            </div>
          </div>

          {/* Viewer body */}
          <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : ''}`} style={{ background:'#020408' }}>
            {isFullscreen && (
              <button onClick={() => setIsFullscreen(false)} className="absolute top-4 right-4 z-10 p-2 rounded"
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
                <p className="text-xs opacity-50 text-center" style={{ fontFamily:'Share Tech Mono, monospace' }}>Open or download to read</p>
                <div className="flex gap-3">
                  <motion.a href={directUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded text-sm"
                    style={{ fontFamily:'Orbitron, monospace', fontSize:'11px', background:'rgba(0,102,255,0.1)', border:'1px solid rgba(0,102,255,0.35)', color:'#0066ff' }}>
                    <FaExternalLinkAlt size={11}/> OPEN
                  </motion.a>
                  <motion.a href={directUrl} download="Research_Paper_Vivek.pdf" whileHover={{ scale:1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded text-sm"
                    style={{ fontFamily:'Orbitron, monospace', fontSize:'11px', background:'rgba(0,255,136,0.1)', border:'1px solid rgba(0,255,136,0.35)', color:'#00ff88' }}>
                    <FaDownload size={11}/> SAVE
                  </motion.a>
                </div>
              </div>
            ) : (
              <object data={pdfUrl} type="application/pdf"
                className={`w-full border-0 ${isFullscreen ? 'h-screen' : 'h-[600px] lg:h-[800px]'}`}>
                <iframe src={isClient ? `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + directUrl)}&embedded=true` : directUrl}
                  className="w-full h-full border-0" title="Research Paper" />
              </object>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5"
            style={{ background:'rgba(0,255,240,0.05)', borderTop:'1px solid rgba(0,255,240,0.08)' }}>
            <span className="text-[9px] tracking-widest opacity-40" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>I-SMAC_2025</span>
            <span className="text-[9px] tracking-widest opacity-30" style={{ fontFamily:'Share Tech Mono, monospace', color:'#ffaa00' }}>UNDER_REVIEW</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}