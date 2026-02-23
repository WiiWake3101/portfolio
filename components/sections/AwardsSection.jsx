'use client';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaHandsHelping, FaMedal } from 'react-icons/fa';

const awards = [
  {
    icon: FaTrophy,
    title: 'Placed 3rd among 6 teams',
    subtitle: "Enduraverse'25 Hackathon",
    org: 'Endurance Technologies Ltd',
    date: 'Feb 2025',
    description: 'Competed in hardware innovation challenge, developing IoT telematics solution',
    badge: '🥉 BRONZE',
    accent: '#ffaa00',
  },
  {
    icon: FaUsers,
    title: 'Led 4-member design team',
    subtitle: 'AlexaVerse 2.0',
    org: 'Alexa Developers SRM',
    date: '2024-2025',
    description: 'Directed poster design & branding for flagship technical event',
    badge: '👥 LEADERSHIP',
    accent: '#00fff0',
  },
  {
    icon: FaHandsHelping,
    title: 'Logistics Volunteer',
    subtitle: 'GIT101 Tech Conference',
    org: 'SRMIST',
    date: 'Nov 2023',
    description: 'Coordinated event logistics and participant management',
    badge: '🤝 SERVICE',
    accent: '#00ff88',
  },
];

const stats = [
  { label: 'AWARDS', value: '1', icon: FaMedal, accent: '#ffaa00' },
  { label: 'LEADERSHIP', value: '1', icon: FaUsers, accent: '#00fff0' },
  { label: 'SERVICE', value: '1', icon: FaHandsHelping, accent: '#00ff88' },
];

export default function AwardsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="awards"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // ACHIEVEMENTS.LOG
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Awards & Activities
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {awards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-35 transition duration-500"
                style={{ background: `radial-gradient(circle, ${item.accent}, transparent)` }} />

              <div className="relative rounded-2xl p-6 h-full overflow-hidden"
                style={{ background: 'rgba(4,10,20,0.9)', border: `1px solid ${item.accent}20`, backdropFilter: 'blur(14px)' }}>

                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)`, boxShadow: `0 0 8px ${item.accent}` }} />

                {/* Scanlines */}
                <div className="absolute inset-0 pointer-events-none opacity-15"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.01) 3px,rgba(255,255,255,0.01) 4px)' }} />

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] tracking-widest px-2 py-0.5 rounded"
                    style={{ fontFamily: 'Share Tech Mono, monospace', background: `${item.accent}12`, border: `1px solid ${item.accent}35`, color: item.accent }}>
                    {item.badge}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mb-5 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}30`, boxShadow: `0 0 16px ${item.accent}20` }}
                >
                  <Icon style={{ color: item.accent, width: 24, height: 24, filter: `drop-shadow(0 0 6px ${item.accent})` }} />
                </motion.div>

                <h3 className="text-base font-bold mb-1 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Orbitron, monospace', fontSize: '13px', color: item.accent, letterSpacing: '0.04em' }}>
                  {item.title}
                </h3>
                <p className="text-xs mb-2 font-semibold opacity-80" style={{ color: item.accent }}>{item.subtitle}</p>
                <p className="text-xs mb-4 leading-relaxed opacity-60">{item.description}</p>

                <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${item.accent}30, transparent)` }} />

                <div className="space-y-1">
                  <p className="text-[10px] tracking-wider opacity-55" style={{ fontFamily: 'Share Tech Mono, monospace' }}>📍 {item.org}</p>
                  <p className="text-[10px] tracking-wider opacity-35" style={{ fontFamily: 'Share Tech Mono, monospace', color: item.accent }}>📅 {item.date}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats HUD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div key={idx} whileHover={{ scale: 1.06, y: -3 }}
              className="relative rounded-xl p-4 text-center"
              style={{ background: 'rgba(4,10,20,0.88)', border: `1px solid ${stat.accent}20`, backdropFilter: 'blur(10px)' }}>
              <Icon className="mx-auto mb-2 w-5 h-5" style={{ color: stat.accent, filter: `drop-shadow(0 0 5px ${stat.accent})` }} />
              <div className="text-2xl font-bold mb-0.5" style={{ fontFamily: 'Orbitron, monospace', color: stat.accent, textShadow: `0 0 10px ${stat.accent}` }}>{stat.value}</div>
              <div className="text-[9px] tracking-widest opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace' }}>{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}