'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const internshipsData = [
  {
    logo: '/samsungrndindiabangalore_logo.jpg',
    duration: 'Mar 2024 – Dec 2024',
    title: 'Research and Development Intern',
    company: 'Samsung R&D Institute India',
    project: 'Detecting Anomaly in Smart Home Events using GenAI',
    accent: '#00fff0',
    points: [
      'Designed smart lock anomaly detection using LLAMA2-7b Chat for event classification and Isolation Forest',
      'Created synthetic dataset using Python & SmartThings API simulating realistic lock/unlock activity',
      'Pre-processed data to reduce bias and help ML models learn user patterns; visualized trends using Matplotlib',
      'Achieved 80.2% accurate real-time anomaly identification with low latency',
    ],
    unoptimized: false,
  },
  {
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGny7Rg76MhCw/company-logo_200_200/company-logo_200_200/0/1718351472437?e=2147483647&v=beta&t=qp8aISxGRahEQPihp5PHsCE36riBcFwJUS5sXTKET5M',
    duration: 'Jun 2024 – Jul 2024',
    title: 'Community Connect',
    company: 'BEYOND PAGES TRUST',
    project: 'Community Service & Development',
    accent: '#ff00aa',
    points: [
      'Worked on community service and development projects impacting local communities',
      'Engaged in outreach, event organization, and awareness campaigns',
      'Collaborated with team members to deliver impactful social initiatives',
    ],
    unoptimized: true,
  },
];

export default function InternshipsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="internships"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // WORK_EXPERIENCE.LOG
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Internships
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {internshipsData.map((intern, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ y: -6 }}
            className="relative group"
          >
            {/* Outer glow */}
            <div className="absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500"
              style={{ background: `radial-gradient(circle, ${intern.accent}, transparent)` }} />

            {/* Card */}
            <div className="relative flex flex-col rounded-xl overflow-hidden h-full"
              style={{ background: 'rgba(4,10,20,0.9)', border: `1px solid ${intern.accent}20`, backdropFilter: 'blur(14px)' }}>

              {/* Top accent bar */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${intern.accent}, transparent)`, boxShadow: `0 0 10px ${intern.accent}` }} />

              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none opacity-15"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.01) 3px,rgba(255,255,255,0.01) 4px)' }} />

              <div className="relative p-6 flex flex-col flex-1">
                {/* Logo + meta */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${intern.accent}25` }}>
                    <Image src={intern.logo} alt={intern.company} width={48} height={48}
                      className="w-12 h-12 object-contain p-1" unoptimized={intern.unoptimized} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-0.5 group-hover:text-white transition-colors"
                      style={{ fontFamily: 'Orbitron, monospace', fontSize: '13px', color: intern.accent }}>
                      {intern.title}
                    </h4>
                    <p className="text-xs opacity-60" style={{ fontFamily: 'Share Tech Mono, monospace' }}>{intern.company}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-0.5 rounded text-[10px] tracking-widest"
                    style={{ fontFamily:'Share Tech Mono, monospace', background:`${intern.accent}10`, border:`1px solid ${intern.accent}30`, color: intern.accent }}>
                    {intern.duration}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] tracking-widest"
                    style={{ fontFamily:'Share Tech Mono, monospace', background:'rgba(0,255,136,0.08)', border:'1px solid rgba(0,255,136,0.25)', color:'#00ff88' }}>
                    INTERNSHIP
                  </span>
                </div>

                {/* Project title */}
                <div className="mb-4 px-3 py-2 rounded"
                  style={{ background:`${intern.accent}06`, border:`1px solid ${intern.accent}15` }}>
                  <span className="text-[10px] tracking-widest opacity-50 block mb-0.5" style={{ fontFamily:'Share Tech Mono, monospace', color: intern.accent }}>PROJECT</span>
                  <p className="text-sm font-semibold" style={{ color: intern.accent }}>{intern.project}</p>
                </div>

                {/* Points */}
                <ul className="space-y-2 flex-1">
                  {intern.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: 'rgba(160,196,212,0.85)' }}>
                      <span className="flex-shrink-0 mt-1" style={{ color: intern.accent }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}