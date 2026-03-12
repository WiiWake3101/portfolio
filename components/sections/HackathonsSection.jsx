'use client';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const hackathons = [
  {
    date: 'Feb 2025',
    title: "Enduraverse'25 Hackathon",
    organizer: 'Endurance Technologies Ltd.',
    result: '🥉 3rd Place',
    resultAccent: '#ffaa00',
    project: 'Low-Cost Telematics Dongle (ESP32 + IMU)',
    points: [
      'Designed using ESP32 and IMU sensor to monitor real-time motion data.',
      'Built mobile app for Bluetooth data transmission; integrated ThingSpeak for cloud logging.',
      'Focused on low latency (<500 ms); future-proofed for mechanical wear prediction.',
    ],
    icon: FaTrophy,
    accent: '#ffaa00',
    tags: ['ESP32', 'IoT', 'BLE', 'ThingSpeak'],
  },
  {
    date: 'Jan 2025',
    title: 'ULTRON 8.0',
    organizer: 'FUTURIX CTECH, SRMIST',
    result: '🎯 Finalist',
    resultAccent: '#ff00aa',
    project: 'IoT-Based Vision Glasses for the Blind',
    points: [
      'Built wearable aid using Jetson Nano and MiDaS depth estimation model.',
      'Mobile app delivered spatial alerts via audio and haptics in real time.',
      'Achieved 87% obstacle detection accuracy in prototype testing.',
    ],
    icon: FaRocket,
    accent: '#ff00aa',
    tags: ['Jetson Nano', 'MiDaS', 'Computer Vision', 'IoT'],
  },
];

const corners = [
  { top: 8, left: 8, bw: '1px 0 0 1px' },
  { top: 8, right: 8, bw: '1px 1px 0 0' },
  { bottom: 8, left: 8, bw: '0 0 1px 1px' },
  { bottom: 8, right: 8, bw: '0 1px 1px 0' },
];

export default function HackathonsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="hackathons"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // COMPETITION_LOG.EXE
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Hackathons
        </h2>
        <p className="text-sm mt-3 opacity-40" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          &gt; Competed. Built. Learned.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical spine */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px pointer-events-none hidden sm:block"
          style={{ background: 'linear-gradient(180deg, rgba(0,255,240,0.6), rgba(255,0,170,0.4), transparent)' }}
        />

        <div className="flex flex-col gap-8">
          {hackathons.map(({ date, title, organizer, result, resultAccent, project, points, icon: Icon, accent, tags }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative sm:pl-16"
            >
              {/* Timeline node */}
              <div
                className="absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center hidden sm:flex"
                style={{ background: `${accent}18`, border: `2px solid ${accent}60`, boxShadow: `0 0 16px ${accent}40` }}
              >
                <Icon style={{ color: accent, fontSize: '14px' }} />
              </div>

              {/* Card */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: 'rgba(4,10,20,0.9)', border: `1px solid ${accent}20`, backdropFilter: 'blur(14px)' }}
              >
                {/* Top bar */}
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${accent}, #0066ff, transparent)`, boxShadow: `0 0 10px ${accent}` }} />

                {/* Corner brackets */}
                {corners.map((s, i) => (
                  <div key={i} className="absolute w-3 h-3 pointer-events-none"
                    style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, borderStyle: 'solid', borderWidth: s.bw, borderColor: `${accent}35` }} />
                ))}

                {/* Scanlines */}
                <div className="absolute inset-0 pointer-events-none opacity-15"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.015) 3px,rgba(0,255,240,0.015) 4px)' }} />

                <div className="relative p-6">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[9px] tracking-widest opacity-50"
                      style={{ fontFamily: 'Share Tech Mono, monospace', color: accent }}>
                      [{date}]
                    </span>
                    <span className="text-[9px] tracking-widest px-2 py-0.5 rounded"
                      style={{ fontFamily: 'Share Tech Mono, monospace', background: `${resultAccent}12`, border: `1px solid ${resultAccent}30`, color: resultAccent }}>
                      {result}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'Orbitron, monospace', color: accent, letterSpacing: '0.03em' }}>
                    {title}
                  </h3>
                  <p className="text-[11px] opacity-50 mb-1" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    {organizer}
                  </p>

                  {/* Project name */}
                  <p className="text-xs mb-4 mt-2 font-semibold opacity-80"
                    style={{ fontFamily: 'Share Tech Mono, monospace', color: '#c0d8e8' }}>
                    &gt; {project}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs opacity-70"
                        style={{ fontFamily: 'Share Tech Mono, monospace', color: '#a0c4d4' }}>
                        <span style={{ color: accent, marginTop: '2px' }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span key={tag} className="text-[9px] tracking-wider px-2 py-0.5 rounded"
                        style={{ fontFamily: 'Share Tech Mono, monospace', background: `${accent}08`, border: `1px solid ${accent}20`, color: `${accent}cc` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
