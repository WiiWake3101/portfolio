'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const roles = ['Embedded AI Engineer', 'IoT Developer', 'Full Stack Developer', 'Hardware Hacker'];

function TypewriterText({ texts }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = texts[index];
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1800);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 300);
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setIndex(i => (i + 1) % texts.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, index, texts]);

  return (
    <span style={{ fontFamily: 'Share Tech Mono, monospace' }}>
      <span style={{ color: '#00fff0', textShadow: '0 0 10px rgba(0,255,240,0.6)' }}>{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[2px] h-[1em] align-middle ml-0.5"
        style={{ background: '#00fff0', boxShadow: '0 0 8px #00fff0' }}
      />
    </span>
  );
}

export default function HeroSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="py-10 px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-1/2 relative"
      >
        {/* Card glow */}
        <div className="absolute -inset-1 rounded-2xl blur-2xl opacity-20"
          style={{ background: 'linear-gradient(135deg, #00fff0, #0066ff)' }} />

        <div className="relative rounded-2xl overflow-hidden"
          style={{ background: 'rgba(4,10,20,0.85)', border: '1px solid rgba(0,255,240,0.18)', backdropFilter: 'blur(16px)' }}>

          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.018) 3px,rgba(0,255,240,0.018) 4px)' }} />

          {/* Corner brackets */}
          {[{top:8,left:8,bw:'1px 0 0 1px'},{top:8,right:8,bw:'1px 1px 0 0'},{bottom:8,left:8,bw:'0 0 1px 1px'},{bottom:8,right:8,bw:'0 1px 1px 0'}].map((s,i)=>(
            <div key={i} className="absolute w-3 h-3" style={{...s,borderStyle:'solid',borderColor:'rgba(0,255,240,0.4)'}} />
          ))}

          <div className="p-6 sm:p-10 text-white text-center md:text-left">
            {/* Open to Work */}
            <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded"
              style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.3)', color: '#00ff88' }}>
              <motion.span animate={{scale:[1,1.5,1],opacity:[1,0.5,1]}} transition={{duration:1.5,repeat:Infinity}}
                className="w-2 h-2 rounded-full inline-block" style={{ background: '#00ff88', boxShadow: '0 0 6px #00ff88' }} />
              <span className="text-xs tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>OPEN_TO_WORK</span>
            </motion.div>

            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>
              <span className="text-xs tracking-widest opacity-40 mb-1 block" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>// IDENTITY.EXE</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
                HI, I&apos;M{' '}
                <span style={{ color: '#00fff0', textShadow: '0 0 20px rgba(0,255,240,0.6), 0 0 40px rgba(0,255,240,0.3)' }}>
                  VIVEK
                </span>{' '}
                <span className="inline-block">👋</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div className="text-lg sm:text-xl mb-5 h-8" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}>
              <span className="opacity-40 mr-2" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#0066ff' }}>&gt;</span>
              <TypewriterText texts={roles} />
            </motion.div>

            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}
              className="text-sm leading-relaxed mb-6 opacity-80" style={{ color: '#a0c4d4' }}>
              Computer Science &amp; Engineering student passionate about{' '}
              <span style={{ color: '#00fff0' }}>Embedded AI</span>,{' '}
              <span style={{ color: '#ff00aa' }}>Embedded Systems</span>, and{' '}
              <span style={{ color: '#0066ff' }}>IoT</span>.
              Building smart devices that bridge silicon and software.
            </motion.p>

            {/* Interest tags */}
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.8}}
              className="p-4 rounded mb-6"
              style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(0,255,240,0.08)' }}>
              <span className="text-xs tracking-widest opacity-60 block mb-2" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
                &gt; INTERESTS[]
              </span>
              <div className="flex flex-wrap gap-2">
                {['Embedded AI','IoT','Edge Computing','ML on MCUs','HW-SW Integration'].map((tag, i) => (
                  <motion.span key={i} whileHover={{ scale: 1.05, y: -1 }}
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 + i * 0.06 }}
                    className="px-3 py-1 text-xs tracking-wider cursor-default transition-all rounded"
                    style={{ fontFamily: 'Share Tech Mono, monospace', background: 'rgba(0,255,240,0.06)', border: '1px solid rgba(0,255,240,0.2)', color: '#00fff0' }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:1}}
              className="flex gap-3 flex-wrap justify-center md:justify-start">
              <a href="#contact"
                className="px-5 py-2.5 rounded text-sm font-semibold tracking-widest transition-all hover:-translate-y-0.5"
                style={{ fontFamily: 'Orbitron, monospace', background: 'rgba(0,255,240,0.1)', border: '1px solid rgba(0,255,240,0.4)', color: '#00fff0', boxShadow: '0 0 15px rgba(0,255,240,0.1)' }}>
                CONTACT →
              </a>
              <a href="#projects"
                className="px-5 py-2.5 rounded text-sm font-semibold tracking-widest transition-all hover:-translate-y-0.5"
                style={{ fontFamily: 'Orbitron, monospace', background: 'rgba(255,0,170,0.08)', border: '1px solid rgba(255,0,170,0.3)', color: '#ff00aa', boxShadow: '0 0 15px rgba(255,0,170,0.08)' }}>
                PROJECTS
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/3 flex justify-center relative"
      >
        {/* Ambient glow rings */}
        <motion.div className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'radial-gradient(circle, rgba(0,255,240,0.2) 0%, transparent 70%)' }} />

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} className="relative z-10">
          {/* Rotating neon ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full"
            style={{ background: 'conic-gradient(from 0deg, transparent 70%, #00fff0 85%, transparent 100%)', filter: 'blur(2px)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-6 rounded-full"
            style={{ background: 'conic-gradient(from 180deg, transparent 70%, #ff00aa 85%, transparent 100%)', filter: 'blur(2px)', opacity: 0.6 }}
          />

          {/* Hex border glow */}
          <div className="absolute -inset-2 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(0,255,240,0.4), rgba(255,0,170,0.4))', filter: 'blur(8px)', opacity: 0.5 }} />

          <Image
            src="/IMG_1487.PNG" alt="Vivek"
            width={256} height={256}
            className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
            style={{ border: '2px solid rgba(0,255,240,0.4)', boxShadow: '0 0 30px rgba(0,255,240,0.3), inset 0 0 30px rgba(0,0,0,0.5)' }}
          />

          {/* HUD data overlay */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
            <div className="text-xs tracking-widest opacity-60" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
              [VIVEK_MG.EXE]
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}