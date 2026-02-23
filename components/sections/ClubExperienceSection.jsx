'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clubRoles = [
  {
    title: 'Creatives Head',
    rank: '01',
    period: 'Jul 2025 – Present',
    duration: '7 months',
    type: 'Full-time',
    location: 'Chennai, Tamil Nadu, India',
    description:
      'Leading the Design, Content, and VFX efforts for all club initiatives. Head of the Organising committee of AlexaVerse 2.0.',
    skills: ['Team Leadership', 'Event Management', 'Design Direction', 'VFX'],
    isCurrent: true,
    accentColor: '#00fff0',
    accentGlow: 'rgba(0,255,240,0.15)',
  },
  {
    title: 'Creatives Lead',
    rank: '02',
    period: 'Oct 2024 – Jul 2025',
    duration: '10 months',
    type: 'Part-time',
    location: 'Chengalpattu, Tamil Nadu, India',
    description:
      'Guided creative vision, mentored design team members, and oversaw website UI/UX redesign.',
    skills: ['Figma', 'Team Leadership', 'UI/UX', 'Mentoring'],
    isCurrent: false,
    accentColor: '#0066ff',
    accentGlow: 'rgba(0,102,255,0.12)',
  },
  {
    title: 'Creative Executive',
    rank: '03',
    period: 'Jul 2024 – Oct 2024',
    duration: '4 months',
    type: 'Part-time',
    location: 'Chennai, Tamil Nadu, India',
    description:
      'Shaped creative direction and fostered collaborative environment for all members.',
    skills: ['Figma', 'UI/UX', 'Collaboration'],
    isCurrent: false,
    accentColor: '#ff00aa',
    accentGlow: 'rgba(255,0,170,0.1)',
  },
];

const corners = [
  { top:6, left:6,  bw:'1px 0 0 1px' },
  { top:6, right:6, bw:'1px 1px 0 0' },
  { bottom:6, left:6,  bw:'0 0 1px 1px' },
  { bottom:6, right:6, bw:'0 1px 1px 0' },
];

export default function ClubExperienceSection() {
  return (
    <motion.section
      id="club-experience"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // CLUB_EXPERIENCE.LOG
        </p>
        <h2 className="text-3xl font-bold"
          style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Club Experience
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Club identity card */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-14 mx-auto max-w-md"
        >
          <div className="absolute -inset-2 rounded-2xl blur-2xl opacity-25"
            style={{ background: 'linear-gradient(135deg,#00fff0,#0066ff)' }} />
          <div className="relative flex items-center gap-5 px-6 py-5 rounded-2xl"
            style={{ background:'rgba(4,10,20,0.92)', border:'1px solid rgba(0,255,240,0.2)', backdropFilter:'blur(16px)' }}>
            {corners.map((s,i) => (
              <div key={i} className="absolute w-3 h-3"
                style={{ top:s.top, left:s.left, right:s.right, bottom:s.bottom,
                  borderStyle:'solid', borderWidth:s.bw, borderColor:'rgba(0,255,240,0.4)' }} />
            ))}
            <motion.div whileHover={{ scale:1.08 }}
              className="relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden"
              style={{ border:'1px solid rgba(0,255,240,0.25)', boxShadow:'0 0 16px rgba(0,255,240,0.15)' }}>
              <Image src="/Alexa Developers SRM.png" alt="Alexa Developers SRM"
                fill className="object-cover" sizes="64px" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold mb-0.5 truncate"
                style={{ fontFamily:'Orbitron, monospace', color:'#00fff0', textShadow:'0 0 12px rgba(0,255,240,0.4)' }}>
                Alexa Developers SRM
              </h3>
              <p className="text-xs tracking-widest opacity-50"
                style={{ fontFamily:'Share Tech Mono, monospace' }}>
                TOTAL_EXP :: 2 YRS 5 MOS
              </p>
            </div>
            <div className="flex-shrink-0 text-right" style={{ fontFamily:'Share Tech Mono, monospace' }}>
              <div className="text-[10px] opacity-40 tracking-widest">ROLES</div>
              <div className="text-2xl font-bold"
                style={{ color:'#00fff0', textShadow:'0 0 10px rgba(0,255,240,0.5)' }}>03</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background:'linear-gradient(to bottom,#00fff0,#0066ff,#ff00aa)', opacity:0.18 }} />

          <div className="space-y-6">
            {clubRoles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity:0, x:-30 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative sm:pl-16 group"
              >
                {/* Node badge */}
                <div className="absolute left-0 top-6 hidden sm:flex w-12 h-12 items-center justify-center rounded-lg flex-shrink-0"
                  style={{ background:'rgba(2,6,12,0.95)', border:`1px solid ${role.accentColor}`,
                    boxShadow:`0 0 12px ${role.accentGlow}`,
                    fontFamily:'Share Tech Mono, monospace', color:role.accentColor, fontSize:'11px', letterSpacing:'0.1em' }}>
                  {role.rank}
                </div>

                {/* Dot on spine */}
                <div className="absolute hidden sm:block"
                  style={{ left:'22px', top:'26px', transform:'translateX(-50%)', zIndex:10,
                    width:'10px', height:'10px', borderRadius:'50%',
                    background: role.accentColor,
                    boxShadow:`0 0 8px ${role.accentColor}, 0 0 16px ${role.accentGlow}` }} />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type:'spring', stiffness:280 }}
                  className="relative overflow-hidden rounded-xl"
                  style={{ background:'rgba(4,10,20,0.88)', border:`1px solid ${role.accentColor}22`, backdropFilter:'blur(12px)' }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                    style={{ background:`radial-gradient(ellipse at left, ${role.accentGlow} 0%, transparent 60%)` }} />

                  {/* Scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{ backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px)' }} />

                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl"
                    style={{ background:role.accentColor, boxShadow:`0 0 8px ${role.accentColor}`, opacity:0.7 }} />

                  <div className="relative p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <h4 className="text-lg font-bold tracking-wide"
                            style={{ fontFamily:'Orbitron, monospace', color:role.accentColor,
                              textShadow:`0 0 10px ${role.accentGlow}` }}>
                            {role.title}
                          </h4>
                          {role.isCurrent && (
                            <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] tracking-widest"
                              style={{ fontFamily:'Share Tech Mono, monospace', background:'rgba(0,255,136,0.1)',
                                border:'1px solid rgba(0,255,136,0.35)', color:'#00ff88' }}>
                              <motion.span
                                animate={{ opacity:[1,0.3,1] }}
                                transition={{ duration:1.2, repeat:Infinity }}
                                className="w-1.5 h-1.5 rounded-full inline-block"
                                style={{ background:'#00ff88', boxShadow:'0 0 4px #00ff88' }} />
                              ACTIVE
                            </span>
                          )}
                        </div>
                        {/* Meta */}
                        <div className="flex items-center gap-2 text-xs flex-wrap"
                          style={{ fontFamily:'Share Tech Mono, monospace', color:'rgba(0,255,240,0.4)' }}>
                          <span style={{ color:role.accentColor, opacity:0.9 }}>{role.period}</span>
                          <span>//</span>
                          <span>{role.duration}</span>
                          <span>•</span>
                          <span className="px-2 py-0.5 rounded"
                            style={{ background:`${role.accentColor}10`, border:`1px solid ${role.accentColor}30`, color:role.accentColor }}>
                            {role.type.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] tracking-wider opacity-35"
                        style={{ fontFamily:'Share Tech Mono, monospace' }}>
                        📍 {role.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-4" style={{ color:'rgba(160,196,212,0.85)' }}>
                      {role.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px w-full mb-4"
                      style={{ background:`linear-gradient(90deg, ${role.accentColor}35, transparent)` }} />

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, si) => (
                        <motion.span key={si} whileHover={{ scale:1.05, y:-1 }}
                          className="px-3 py-1 rounded text-[11px] tracking-wider cursor-default"
                          style={{ fontFamily:'Share Tech Mono, monospace',
                            background:`${role.accentColor}08`, border:`1px solid ${role.accentColor}28`, color:role.accentColor }}>
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}