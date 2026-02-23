'use client';
import { motion } from 'framer-motion';

const languages = [
  { flag: '🇬🇧', name: 'English', level: 'FLUENT', percentage: 95, accent: '#00fff0' },
  { flag: '🇮🇳', name: 'Tamil',   level: 'NATIVE', percentage: 80, accent: '#ff00aa' },
];

export default function LanguagesSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="languages"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // LANGUAGE_MODULES.DAT
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Languages
        </h2>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {languages.map((lang, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-35 transition duration-500"
              style={{ background: `radial-gradient(circle, ${lang.accent}, transparent)` }} />

            <div className="relative rounded-xl p-6 overflow-hidden"
              style={{ background: 'rgba(4,10,20,0.9)', border: `1px solid ${lang.accent}22`, backdropFilter: 'blur(14px)' }}>

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${lang.accent}, transparent)`, boxShadow: `0 0 8px ${lang.accent}` }} />

              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none opacity-15"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px)' }} />

              {/* Corner brackets */}
              {[{top:6,left:6,bw:'1px 0 0 1px'},{top:6,right:6,bw:'1px 1px 0 0'},{bottom:6,left:6,bw:'0 0 1px 1px'},{bottom:6,right:6,bw:'0 1px 1px 0'}].map((s,i)=>(
                <div key={i} className="absolute w-2.5 h-2.5" style={{top:s.top,left:s.left,right:s.right,bottom:s.bottom,borderStyle:'solid',borderWidth:s.bw,borderColor:`${lang.accent}45`}} />
              ))}

              {/* Flag + name */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <motion.span whileHover={{ scale: 1.2, rotate: 5 }} className="text-4xl">
                    {lang.flag}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Orbitron, monospace', color: lang.accent, textShadow: `0 0 10px ${lang.accent}50` }}>
                      {lang.name}
                    </h3>
                    <span className="text-[10px] tracking-widest px-2 py-0.5 rounded"
                      style={{ fontFamily: 'Share Tech Mono, monospace', background: `${lang.accent}10`, border: `1px solid ${lang.accent}30`, color: lang.accent }}>
                      {lang.level}
                    </span>
                  </div>
                </div>

                {/* Percentage readout */}
                <div className="text-right">
                  <div className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, monospace', color: lang.accent, textShadow: `0 0 10px ${lang.accent}` }}>
                    {lang.percentage}
                  </div>
                  <div className="text-[10px] opacity-40" style={{ fontFamily: 'Share Tech Mono, monospace' }}>SCORE</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative z-10">
                <div className="flex justify-between text-[10px] mb-2 tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                  <span style={{ color: lang.accent, opacity: 0.6 }}>PROFICIENCY</span>
                  <span style={{ color: lang.accent }}>{lang.percentage}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${lang.accent}20` }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ background: `linear-gradient(90deg, ${lang.accent}80, ${lang.accent})`, boxShadow: `0 0 8px ${lang.accent}` }}
                  >
                    {/* Shimmer */}
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }}
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
                    />
                  </motion.div>
                </div>

                {/* Segment markers */}
                <div className="flex justify-between mt-1">
                  {[0,25,50,75,100].map(v => (
                    <span key={v} className="text-[8px] opacity-25" style={{ fontFamily: 'Share Tech Mono, monospace', color: lang.accent }}>{v}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}