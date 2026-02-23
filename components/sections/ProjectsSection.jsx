'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
  </svg>
);

const corners = [
  { top: 6, left: 6, bw: '1px 0 0 1px' },
  { top: 6, right: 6, bw: '1px 1px 0 0' },
  { bottom: 6, left: 6, bw: '0 0 1px 1px' },
  { bottom: 6, right: 6, bw: '0 1px 1px 0' },
];

const undergraduateProjects = [
  {
    image: '/ug_project.jpg',
    duration: 'Jan 2025 – May 2025',
    type: 'Undergraduate',
    title: 'Embedded ML for Early Heart Attack Prediction',
    subtitle: 'Undergraduate Project',
    github: 'https://github.com/IoT-Health-Monitoring-Devices-in-EV/Embedded-Machine-Learning-for-Early-Detection-of-Heart-Attack-Symptoms',
    accent: '#00fff0',
    points: [
      'Built a real-time heart attack prediction system using Arduino Nano BLE 33 Sense Rev 2 and Embedded AI.',
      'Integrated MAX30102, TMP117, and GSR sensors to collect physiological data.',
      'Simulated datasets using Python, NumPy, and Pandas; visualized data using Matplotlib.',
      'Trained a binary classification model in TensorFlow Lite; achieved 96% accuracy.'
    ]
  }
];

const competitionProjects = [
  {
    duration: 'Feb 2025',
    title: 'Low-Cost Telematics Dongle',
    subtitle: "Enduraverse'25, Endurance Technologies",
    accent: '#ffaa00',
    points: [
      'Designed using ESP32 and IMU sensor to monitor real-time motion data.',
      'Built mobile app for Bluetooth data transmission; integrated ThingSpeak for cloud logging.',
      'Focused on low latency (<500ms); future-proofed for mechanical wear prediction.'
    ]
  },
  {
    duration: 'Jan 2025',
    title: 'IoT-Based Vision Glasses for the Blind',
    subtitle: 'ULTRON 8.0, FUTURIX CTECH, SRMIST',
    accent: '#ff00aa',
    points: [
      'Built wearable aid using Jetson Nano and MiDaS depth estimation.',
      'Mobile app delivered spatial alerts via audio and haptics.',
      'Achieved 87% obstacle detection accuracy in real-time prototype.'
    ]
  }
];

const courseProjects = [
  {
    duration: 'Mar 2024 – Apr 2024',
    title: 'Robotic Arm using ESP32',
    github: 'https://github.com/WiiWake3101/Robotic-Arm-ESP32',
    accent: '#00fff0',
    points: ['Developed robotic arm using WebSocket, Wi-Fi control, and PWM-based movement.']
  },
  {
    duration: 'Jan 2024 – Apr 2024',
    title: 'Road Damage Detection using Detectron2',
    github: 'https://github.com/WiiWake3101/Road-Damage-Detection-using-Detectron2',
    accent: '#0066ff',
    points: [
      'Trained model using Detectron2 to detect road potholes and cracks.',
      'Built Flask backend and Tailwind CSS frontend; achieved 85% accuracy.'
    ]
  },
  {
    duration: 'May 2024 – Apr 2024',
    title: 'Beyond Pages Trust Website',
    github: 'https://github.com/WiiWake3101/Beyond-Pages-Trust',
    accent: '#00ff88',
    points: ['Designed a donation website with Tailwind CSS and Razorpay integration.']
  },
  {
    duration: 'Jan 2024 – Apr 2024',
    title: 'Blog App',
    github: 'https://github.com/WiiWake3101/Blog-App',
    accent: '#ff00aa',
    points: ['Built using React.js, Prisma with MongoDB, and Firebase for real-time features and authentication.']
  }
];

// Reusable tag chip
function Tag({ children, accent }) {
  return (
    <span
      className="inline-block text-[10px] tracking-widest px-2 py-0.5 rounded"
      style={{
        fontFamily: 'Share Tech Mono, monospace',
        background: `${accent}10`,
        border: `1px solid ${accent}35`,
        color: accent,
      }}
    >
      {children}
    </span>
  );
}

// GitHub button
function GithubBtn({ href, accent }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-bold tracking-widest"
      style={{
        fontFamily: 'Orbitron, monospace',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.15)',
        color: 'rgba(160,196,212,0.8)',
      }}
    >
      <GitHubIcon />
      GITHUB
    </motion.a>
  );
}

// Section sub-heading
function SubHeading({ label, comment }) {
  return (
    <div className="mb-6">
      <p className="text-[10px] tracking-[0.3em] mb-1 opacity-40"
        style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
        {comment}
      </p>
      <h3 className="text-xl font-bold"
        style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.04em' }}>
        {label}
      </h3>
    </div>
  );
}

export default function ProjectsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // PROJECTS.LOG
        </p>
        <h2 className="text-3xl font-bold"
          style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-14 max-w-7xl mx-auto">

        {/* ── Undergraduate Projects ── */}
        <div>
          <SubHeading label="Undergraduate Projects" comment="// UG_PROJECT.DAT" />
          <div className="flex flex-col gap-6">
            {undergraduateProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Outer glow */}
                <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition duration-500"
                  style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }} />

                <div className="relative flex flex-col md:flex-row rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(4,10,20,0.9)',
                    border: `1px solid ${project.accent}20`,
                    backdropFilter: 'blur(14px)',
                  }}>

                  {/* Top neon bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)`, boxShadow: `0 0 10px ${project.accent}` }} />

                  {/* Scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-15"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px)' }} />

                  {/* Corner brackets */}
                  {corners.map((s, i) => (
                    <div key={i} className="absolute w-2.5 h-2.5 z-10"
                      style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, borderStyle: 'solid', borderWidth: s.bw, borderColor: `${project.accent}45` }} />
                  ))}

                  {/* Image */}
                  <div className="flex-shrink-0 flex justify-center items-center p-5 md:p-6 w-full md:w-[420px] relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative rounded-xl overflow-hidden w-full"
                      style={{ border: `1px solid ${project.accent}25`, boxShadow: `0 0 20px ${project.accent}15` }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={420}
                        height={280}
                        className="object-cover w-full h-auto max-h-[280px]"
                      />
                      {/* Image overlay tint */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${project.accent}08, transparent)` }} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center p-6 relative z-10">
                    {/* Badges row */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <Tag accent="#0066ff">{project.duration}</Tag>
                      <Tag accent="#ff00aa">{project.type.toUpperCase()}</Tag>
                      <GithubBtn href={project.github} accent={project.accent} />
                    </div>

                    <h4 className="text-lg font-bold mb-1 transition-colors group-hover:text-white"
                      style={{ fontFamily: 'Orbitron, monospace', fontSize: '14px', color: project.accent, letterSpacing: '0.03em' }}>
                      {project.title}
                    </h4>
                    <p className="text-xs mb-4 opacity-55 italic"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                      {project.subtitle}
                    </p>

                    <div className="h-px mb-4"
                      style={{ background: `linear-gradient(90deg, ${project.accent}30, transparent)` }} />

                    <ul className="space-y-2">
                      {project.points.map((point, pointIdx) => (
                        <motion.li
                          key={pointIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pointIdx * 0.08 }}
                          className="flex gap-2 text-xs leading-relaxed"
                          style={{ color: 'rgba(160,196,212,0.85)' }}
                        >
                          <span className="flex-shrink-0 mt-0.5" style={{ color: project.accent }}>▸</span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Competition Projects ── */}
        <div>
          <SubHeading label="Competition Projects" comment="// COMPETITION.DAT" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitionProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                {/* Outer glow */}
                <div className="absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-25 transition duration-500"
                  style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }} />

                <div className="relative flex flex-col rounded-xl overflow-hidden h-full"
                  style={{
                    background: 'rgba(4,10,20,0.9)',
                    border: `1px solid ${project.accent}20`,
                    backdropFilter: 'blur(14px)',
                  }}>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)`, boxShadow: `0 0 8px ${project.accent}` }} />

                  {/* Scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-15"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px)' }} />

                  {/* Corner brackets */}
                  {corners.map((s, i) => (
                    <div key={i} className="absolute w-2.5 h-2.5"
                      style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, borderStyle: 'solid', borderWidth: s.bw, borderColor: `${project.accent}40` }} />
                  ))}

                  {/* Hover glow sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{ background: `radial-gradient(ellipse at top left, ${project.accent}08 0%, transparent 60%)` }} />

                  <div className="relative p-5 flex flex-col flex-1 z-10">
                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <Tag accent={project.accent}>{project.duration}</Tag>
                      <Tag accent="#ffaa00">COMPETITION</Tag>
                    </div>

                    <h4 className="text-base font-bold mb-1 transition-colors group-hover:text-white"
                      style={{ fontFamily: 'Orbitron, monospace', fontSize: '13px', color: project.accent, letterSpacing: '0.03em' }}>
                      {project.title}
                    </h4>
                    <p className="text-xs mb-4 opacity-50 italic"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                      {project.subtitle}
                    </p>

                    <div className="h-px mb-4"
                      style={{ background: `linear-gradient(90deg, ${project.accent}25, transparent)` }} />

                    <ul className="space-y-2 flex-1">
                      {project.points.map((point, pointIdx) => (
                        <motion.li
                          key={pointIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pointIdx * 0.08 }}
                          className="flex gap-2 text-xs leading-relaxed"
                          style={{ color: 'rgba(160,196,212,0.85)' }}
                        >
                          <span className="flex-shrink-0 mt-0.5" style={{ color: project.accent }}>▸</span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Course Projects ── */}
        <div>
          <SubHeading label="Course Projects" comment="// COURSE_PROJECTS.DAT" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 280 }}
                className="relative group"
              >
                {/* Outer glow */}
                <div className="absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"
                  style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }} />

                <div className="relative flex flex-col rounded-xl overflow-hidden h-full"
                  style={{
                    background: 'rgba(4,10,20,0.88)',
                    border: `1px solid ${project.accent}18`,
                    backdropFilter: 'blur(12px)',
                  }}>

                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl"
                    style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}`, opacity: 0.7 }} />

                  {/* Scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px)' }} />

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{ background: `radial-gradient(ellipse at left, ${project.accent}08 0%, transparent 55%)` }} />

                  <div className="relative p-5 flex flex-col flex-1 z-10">
                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <Tag accent={project.accent}>{project.duration}</Tag>
                      <Tag accent="#00ff88">COURSE_PROJECT</Tag>
                      <GithubBtn href={project.github} accent={project.accent} />
                    </div>

                    <h4 className="text-base font-bold mb-1 transition-colors group-hover:text-white"
                      style={{ fontFamily: 'Orbitron, monospace', fontSize: '12px', color: project.accent, letterSpacing: '0.03em' }}>
                      {project.title}
                    </h4>

                    <div className="h-px my-3"
                      style={{ background: `linear-gradient(90deg, ${project.accent}20, transparent)` }} />

                    <ul className="space-y-2 flex-1">
                      {project.points.map((point, pointIdx) => (
                        <motion.li
                          key={pointIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pointIdx * 0.08 }}
                          className="flex gap-2 text-xs leading-relaxed"
                          style={{ color: 'rgba(160,196,212,0.85)' }}
                        >
                          <span className="flex-shrink-0 mt-0.5" style={{ color: project.accent }}>▸</span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}