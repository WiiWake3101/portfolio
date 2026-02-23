'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const certifications = [
  { name: 'GitHub Foundation', org: 'GitHub', date: 'Feb 2025', icon: '/GitHub.png', accent: '#00fff0', unoptimized: false },
  { name: 'Networking Basics', org: 'Cisco Networking Academy', date: 'Sep 2024', icon: '/networking_badge.jpg', accent: '#0066ff', unoptimized: false },
  { name: 'Operating System Basics', org: 'Cisco Networking Academy', date: 'Mar 2024', icon: '/OS_badge.png', accent: '#00ff88', unoptimized: false },
  { name: 'Introduction to IoT', org: 'Cisco Networking Academy', date: 'Mar 2024', icon: 'https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/introduction_to_iot_45.png', accent: '#ff00aa', unoptimized: true },
  { name: 'Computer Architecture', org: 'IIT Madras (NPTEL)', date: 'Oct 2023', icon: '/nptel.png', accent: '#ffaa00', unoptimized: false },
  { name: 'Programming in Java', org: 'IIT Kharagpur (NPTEL)', date: 'Oct 2023', icon: '/nptel.png', accent: '#aa00ff', unoptimized: false },
];

export default function CertificationsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="certifications"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // CERTIFICATIONS.DAT
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative group"
          >
            {/* Glow */}
            <div className="absolute -inset-0.5 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition duration-400"
              style={{ background: cert.accent }} />

            {/* Card */}
            <div className="relative flex items-center gap-4 rounded-xl p-4 overflow-hidden"
              style={{ background: 'rgba(4,10,20,0.9)', border: `1px solid ${cert.accent}22`, backdropFilter: 'blur(12px)' }}>

              {/* Left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: cert.accent, opacity: 0.6, boxShadow: `0 0 6px ${cert.accent}` }} />

              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none opacity-15"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px)' }} />

              {/* Badge icon */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${cert.accent}25` }}>
                  <Image src={cert.icon} alt={cert.name} width={40} height={40}
                    className="w-10 h-10 object-contain p-0.5" unoptimized={cert.unoptimized} />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 relative z-10">
                <p className="font-semibold text-sm mb-0.5 truncate group-hover:text-white transition-colors"
                  style={{ color: cert.accent, fontFamily: 'Orbitron, monospace', fontSize: '11px', letterSpacing: '0.03em' }}>
                  {cert.name}
                </p>
                <p className="text-xs opacity-55 truncate" style={{ fontFamily: 'Share Tech Mono, monospace' }}>{cert.org}</p>
                <p className="text-[10px] opacity-35 mt-0.5" style={{ fontFamily: 'Share Tech Mono, monospace', color: cert.accent }}>{cert.date}</p>
              </div>

              {/* Corner brackets */}
              {[{top:4,right:4,bw:'1px 1px 0 0'}].map((s,i)=>(
                <div key={i} className="absolute w-2 h-2" style={{top:s.top,right:s.right,borderStyle:'solid',borderWidth:s.bw,borderColor:`${cert.accent}40`}} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}