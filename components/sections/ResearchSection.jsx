'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaExpand, FaCompress, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

export default function ResearchSection({ sectionRef }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile]         = useState(false);
  const [isClient, setIsClient]         = useState(false);
  const [activePaper, setActivePaper]   = useState(0);

  useEffect(() => {
    setIsClient(true);
    const check = () => setIsMobile(window.innerWidth < 1024 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const papers = [
    {
      id: 1,
      title: 'IoT-Integrated Health Monitoring in Electric Vehicles for Real-Time Cardiac Detection',
      pdfUrl: '/research_paper_2.pdf#toolbar=0&navpanes=0&view=FitH',
      directUrl: '/research_paper_2.pdf',
      status: 'AWAITING_PUBLICATION',
      statusColor: '#ffaa00',
      authors: [
        { name: 'Dr. R. Jeya', email: 'jeyar@srmist.edu.in', affiliation: 'SRM Institute of Science and Technology' },
        { name: 'Prof. Dr. Hezerul Bin Abdul Karim', email: 'hezerul@mmu.edu.my', affiliation: 'Multimedia University, Malaysia' },
        { name: 'Vivek M G', email: 'vm4512@srmist.edu.in', affiliation: 'SRMIST, Kattankulathur' },
        { name: 'S Raghuram', email: 'rs0657@srmist.edu.in', affiliation: 'SRMIST, Kattankulathur' },
        { name: 'Dr. Sarina Binti Mansor', email: 'sarina.mansor@mmu.edu.my', affiliation: 'Multimedia University, Malaysia' },
        { name: 'Dr. Tan Yi Fei', email: 'yftan@mmu.edu.my', affiliation: 'Multimedia University, Malaysia' },
      ],
      conference: 'MECON 2026',
      conferenceDetails: 'Multimedia University Engineering Conference 2026',
      tags: [
        { label: '2026', accent: '#0066ff' },
        { label: 'PRESENTED', accent: '#00ff88' },
        { label: 'AWAITING PUBLICATION', accent: '#ffaa00' }
      ]
    },
    {
      id: 2,
      title: 'Embedded Machine Learning for Early Detection of Heart Attack Symptoms',
      pdfUrl: '/research_paper.pdf#toolbar=0&navpanes=0&view=FitH',
      directUrl: '/research_paper.pdf',
      status: 'AWAITING_PUBLICATION',
      statusColor: '#ffaa00',
      authors: [
        { name: 'Vivek M G', email: 'vm4512@srmist.edu.in', affiliation: 'SRMIST, Kattankulathur' },
        { name: 'S Raghuram', email: 'rs0657@srmist.edu.in', affiliation: 'SRMIST, Kattankulathur' },
        { name: 'Dr. R Jeya', email: 'jeyar@srmist.edu.in', affiliation: 'SRMIST, Kattankulathur' },
      ],
      conference: 'I-SMAC 2025',
      conferenceDetails: '9th Intl. Conf. on IoT in Social, Mobile, Analytics and Cloud',
      tags: [
        { label: 'OCT 08–10 2025', accent: '#0066ff' },
        { label: 'PRESENTED OCT 9', accent: '#00ff88' },
        { label: 'AWAITING PUBLICATION', accent: '#ffaa00' }
      ]
    }
  ];

  const currentPaper = papers[activePaper];

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
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Research Papers
        </h2>
        
        {/* Paper Selector */}
        <div className="flex justify-center gap-3 flex-wrap">
          {papers.map((paper, idx) => (
            <motion.button
              key={paper.id}
              onClick={() => setActivePaper(idx)}
              whileHover={{ scale: 1.02 }}
              className="px-4 py-2 rounded-lg text-xs tracking-widest transition-all"
              style={{
                fontFamily: 'Orbitron, monospace',
                background: activePaper === idx ? 'rgba(0,255,240,0.1)' : 'rgba(4,10,20,0.6)',
                border: `1px solid ${activePaper === idx ? 'rgba(0,255,240,0.4)' : 'rgba(0,255,240,0.15)'}`,
                color: activePaper === idx ? '#00fff0' : 'rgba(160,196,212,0.7)',
                boxShadow: activePaper === idx ? '0 0 20px rgba(0,255,240,0.2)' : 'none'
              }}
            >
              PAPER {idx + 1}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <motion.div
          key={currentPaper.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
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
                  className="w-2 h-2 rounded-full" style={{ background: currentPaper.statusColor, boxShadow:`0 0 6px ${currentPaper.statusColor}` }} />
                <Tag accent={currentPaper.statusColor}>{currentPaper.status}</Tag>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold leading-snug"
                style={{ fontFamily: 'Orbitron, monospace', fontSize: '12px', color: '#00fff0', textShadow: '0 0 10px rgba(0,255,240,0.4)', letterSpacing: '0.03em' }}>
                {currentPaper.title}
              </h3>

              {/* Authors */}
              <div className="space-y-3 pt-2 max-h-[400px] overflow-y-auto pr-2" style={{ borderTop: '1px solid rgba(0,255,240,0.08)' }}>
                {currentPaper.authors.map((author, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold" style={{ color: author.name.includes('Vivek') ? '#00fff0' : 'rgba(160,196,212,0.9)' }}>{author.name}</p>
                    <p className="text-[10px] opacity-40" style={{ fontFamily: 'Share Tech Mono, monospace' }}>{author.affiliation}</p>
                    <p className="text-[10px]" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0', opacity: 0.5 }}>{author.email}</p>
                  </div>
                ))}
              </div>

              {/* Conference */}
              <div className="pt-3 space-y-2" style={{ borderTop: '1px solid rgba(0,255,240,0.08)' }}>
                <p className="text-[11px] font-semibold leading-snug" style={{ color: '#00fff0', fontFamily: 'Orbitron, monospace', fontSize: '10px' }}>
                  {currentPaper.conference}
                </p>
                <p className="text-[10px] opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                  {currentPaper.conferenceDetails}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentPaper.tags.map((tag, i) => (
                    <Tag key={i} accent={tag.accent}>{tag.label}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          key={`viewer-${currentPaper.id}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
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
              <span className="text-[10px] tracking-widest opacity-40" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>
                research_paper_{currentPaper.id}.pdf
              </span>
            </div>
            <div className="flex gap-2">
              {isClient && isMobile && (
                <>
                  <motion.a href={currentPaper.directUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.05 }}
                    className="flex items-center gap-1 px-3 py-1 rounded text-[10px] tracking-widest"
                    style={{ fontFamily:'Orbitron, monospace', background:'rgba(0,102,255,0.1)', border:'1px solid rgba(0,102,255,0.3)', color:'#0066ff' }}>
                    <FaExternalLinkAlt size={9} /> OPEN
                  </motion.a>
                  <motion.a href={currentPaper.directUrl} download={`Research_Paper_${currentPaper.id}_Vivek.pdf`} whileHover={{ scale:1.05 }}
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
                  <motion.a href={currentPaper.directUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded text-sm"
                    style={{ fontFamily:'Orbitron, monospace', fontSize:'11px', background:'rgba(0,102,255,0.1)', border:'1px solid rgba(0,102,255,0.35)', color:'#0066ff' }}>
                    <FaExternalLinkAlt size={11}/> OPEN
                  </motion.a>
                  <motion.a href={currentPaper.directUrl} download={`Research_Paper_${currentPaper.id}_Vivek.pdf`} whileHover={{ scale:1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded text-sm"
                    style={{ fontFamily:'Orbitron, monospace', fontSize:'11px', background:'rgba(0,255,136,0.1)', border:'1px solid rgba(0,255,136,0.35)', color:'#00ff88' }}>
                    <FaDownload size={11}/> SAVE
                  </motion.a>
                </div>
              </div>
            ) : (
              <object data={currentPaper.pdfUrl} type="application/pdf"
                className={`w-full border-0 ${isFullscreen ? 'h-screen' : 'h-[600px] lg:h-[800px]'}`}>
                <iframe src={isClient ? `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + currentPaper.directUrl)}&embedded=true` : currentPaper.directUrl}
                  className="w-full h-full border-0" title="Research Paper" />
              </object>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5"
            style={{ background:'rgba(0,255,240,0.05)', borderTop:'1px solid rgba(0,255,240,0.08)' }}>
            <span className="text-[9px] tracking-widest opacity-40" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>
              {currentPaper.conference.replace(/\s+/g, '_').toUpperCase()}
            </span>
            <span className="text-[9px] tracking-widest opacity-30" style={{ fontFamily:'Share Tech Mono, monospace', color: currentPaper.statusColor }}>
              {currentPaper.status}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}