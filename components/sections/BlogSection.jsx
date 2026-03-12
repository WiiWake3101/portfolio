'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaClock, FaTag } from 'react-icons/fa';

// Replace hrefs with actual article URLs when published
const articles = [
  {
    title: 'Anomaly Detection in Smart Homes using LLaMA2 & Isolation Forest',
    excerpt:
      'How I built a GenAI-powered anomaly detection system for SmartThings using Meta\'s LLaMA2-7b Chat, achieving 80.2% real-time accuracy with synthetic dataset generation.',
    tags: ['GenAI', 'LLaMA2', 'IoT', 'ML'],
    readTime: '8 min read',
    date: 'Dec 2024',
    href: '#',        // ← replace with actual article URL
    platform: 'Medium',
    accent: '#00fff0',
  },
  {
    title: 'Embedded ML on Arduino BLE 33 Sense: Heart Attack Prediction at the Edge',
    excerpt:
      'A deep dive into deploying TensorFlow Lite on an Arduino Nano BLE 33 Sense Rev 2 for real-time heart attack prediction using MAX30102 and TMP117 sensors.',
    tags: ['TFLite', 'Embedded AI', 'Arduino', 'Healthcare'],
    readTime: '6 min read',
    date: 'Mar 2025',
    href: '#',        // ← replace with actual article URL
    platform: 'dev.to',
    accent: '#0066ff',
  },
  {
    title: 'Building an IoT Telematics Dongle with ESP32 and ThingSpeak',
    excerpt:
      'End-to-end guide on designing a low-cost vehicle telematics dongle using ESP32 + IMU, a Flutter mobile app for BLE data streaming, and ThingSpeak for cloud analytics.',
    tags: ['ESP32', 'IoT', 'ThingSpeak', 'BLE'],
    readTime: '5 min read',
    date: 'Feb 2025',
    href: '#',        // ← replace with actual article URL
    platform: 'Hashnode',
    accent: '#ff00aa',
  },
];

const platformColors = {
  Medium: '#ffffff',
  'dev.to': '#08a6ff',
  Hashnode: '#2962ff',
};

const corners = [
  { top: 8, left: 8, bw: '1px 0 0 1px' },
  { top: 8, right: 8, bw: '1px 1px 0 0' },
  { bottom: 8, left: 8, bw: '0 0 1px 1px' },
  { bottom: 8, right: 8, bw: '0 1px 1px 0' },
];

export default function BlogSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="blog"
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
          // WRITINGS.LOG
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Blog &amp; Writings
        </h2>
        <p className="text-sm mt-3 opacity-40" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          &gt; Technical articles &amp; project deep-dives
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map(({ title, excerpt, tags, readTime, date, href, platform, accent }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target={href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            whileHover={{ scale: 1.025, y: -5 }}
            className="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
            style={{ background: 'rgba(4,10,20,0.9)', border: `1px solid ${accent}20`, backdropFilter: 'blur(14px)', textDecoration: 'none' }}
          >
            {/* Top bar */}
            <div className="h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, boxShadow: `0 0 10px ${accent}` }} />

            {/* Corner brackets */}
            {corners.map((s, i) => (
              <div key={i} className="absolute w-3 h-3 pointer-events-none"
                style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, borderStyle: 'solid', borderWidth: s.bw, borderColor: `${accent}40` }} />
            ))}

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-15"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.015) 3px,rgba(0,255,240,0.015) 4px)' }} />

            <div className="relative p-6 flex flex-col flex-1">
              {/* Platform badge + date */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-widest px-2 py-0.5 rounded font-bold"
                  style={{ fontFamily: 'Share Tech Mono, monospace', background: `${accent}12`, border: `1px solid ${accent}30`, color: platformColors[platform] ?? accent }}>
                  {platform.toUpperCase()}
                </span>
                <span className="text-[10px] opacity-40 flex items-center gap-1" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                  <FaClock className="text-[9px]" /> {date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold leading-snug mb-3 group-hover:opacity-100 opacity-90 transition-opacity"
                style={{ fontFamily: 'Orbitron, monospace', color: accent, letterSpacing: '0.02em' }}>
                {title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs leading-relaxed opacity-60 flex-1 mb-4"
                style={{ fontFamily: 'Share Tech Mono, monospace', color: '#a0c4d4' }}>
                {excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 text-[9px] tracking-wider px-1.5 py-0.5 rounded"
                    style={{ fontFamily: 'Share Tech Mono, monospace', background: `${accent}08`, border: `1px solid ${accent}20`, color: `${accent}cc` }}>
                    <FaTag className="text-[7px]" /> {tag}
                  </span>
                ))}
              </div>

              {/* Read link */}
              <div className="flex items-center gap-1.5 text-[10px] tracking-widest transition-all group-hover:gap-2.5"
                style={{ fontFamily: 'Share Tech Mono, monospace', color: accent }}>
                <span className="flex items-center gap-1">
                  <FaClock className="text-[9px]" /> {readTime}
                </span>
                <span className="opacity-30">|</span>
                <span className="flex items-center gap-1">
                  READ MORE <FaExternalLinkAlt className="text-[9px]" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
