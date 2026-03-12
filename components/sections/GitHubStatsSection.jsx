'use client';
import { motion } from 'framer-motion';

const USERNAME = 'WiiWake3101';

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&count_private=true&bg_color=020408&border_color=00fff030&title_color=00fff0&text_color=a0c4d4&icon_color=00fff0&hide_border=false`;
const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&bg_color=020408&border_color=00fff030&title_color=00fff0&text_color=a0c4d4&hide_border=false&langs_count=8`;
const streakUrl = `https://streak-stats.demolab.com/?user=${USERNAME}&background=020408&border=00fff030&ring=00fff0&fire=ff00aa&currStreakLabel=00fff0&sideNums=ffffff&sideLabels=a0c4d4&dates=607080`;

const corners = [
  { top: 8, left: 8, bw: '1px 0 0 1px' },
  { top: 8, right: 8, bw: '1px 1px 0 0' },
  { bottom: 8, left: 8, bw: '0 0 1px 1px' },
  { bottom: 8, right: 8, bw: '0 1px 1px 0' },
];

function StatCard({ src, alt, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{ background: 'rgba(4,10,20,0.9)', border: '1px solid rgba(0,255,240,0.12)', backdropFilter: 'blur(14px)' }}
    >
      {/* Top neon bar */}
      <div className="h-0.5" style={{ background: 'linear-gradient(90deg,#00fff0,#0066ff,#ff00aa)', boxShadow: '0 0 8px #00fff0' }} />

      {/* Corner brackets */}
      {corners.map((s, i) => (
        <div key={i} className="absolute w-3 h-3 pointer-events-none"
          style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, borderStyle: 'solid', borderWidth: s.bw, borderColor: 'rgba(0,255,240,0.3)' }} />
      ))}

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.015) 3px,rgba(0,255,240,0.015) 4px)' }} />

      <div className="p-4 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto rounded"
          style={{ maxWidth: '100%', imageRendering: 'auto' }}
        />
      </div>
    </motion.div>
  );
}

export default function GitHubStatsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="github-stats"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // ACTIVITY_FEED.GITHUB
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          GitHub Activity
        </h2>
        <p className="text-sm mt-3 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          &gt; Fetching live data from{' '}
          <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer"
            style={{ color: '#00fff0' }} className="hover:underline">
            @{USERNAME}
          </a>
          ...
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stats card */}
        <StatCard
          src={statsUrl}
          alt="GitHub Stats"
          delay={0}
        />

        {/* Top Languages */}
        <StatCard
          src={langsUrl}
          alt="Top Languages"
          delay={0.1}
        />

        {/* Streak — full width */}
        <StatCard
          src={streakUrl}
          alt="GitHub Streak"
          delay={0.2}
          className="md:col-span-2"
        />
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-8"
      >
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold tracking-widest transition-all hover:-translate-y-0.5"
          style={{ fontFamily: 'Orbitron, monospace', background: 'rgba(0,255,240,0.07)', border: '1px solid rgba(0,255,240,0.3)', color: '#00fff0', boxShadow: '0 0 15px rgba(0,255,240,0.08)' }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
          VIEW PROFILE →
        </a>
      </motion.div>
    </motion.section>
  );
}
