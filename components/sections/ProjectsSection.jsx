'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GitHubIcon = () => (
  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
  </svg>
);

const undergraduateProjects = [
  {
    image: '/ug_project.jpg',
    duration: 'Jan 2025 – May 2025',
    type: 'Undergraduate',
    title: 'Embedded ML for Early Heart Attack Prediction',
    subtitle: 'Undergraduate Project',
    github: 'https://github.com/IoT-Health-Monitoring-Devices-in-EV/Embedded-Machine-Learning-for-Early-Detection-of-Heart-Attack-Symptoms',
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
    subtitle: 'Enduraverse 25, Endurance Technologies',
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
    points: ['Developed robotic arm using WebSocket, Wi-Fi control, and PWM-based movement.']
  },
  {
    duration: 'Jan 2024 – Apr 2024',
    title: 'Road Damage Detection using Detectron2',
    github: 'https://github.com/WiiWake3101/Road-Damage-Detection-using-Detectron2',
    points: [
      'Trained model using Detectron2 to detect road potholes and cracks.',
      'Built Flask backend and Tailwind CSS frontend; achieved 85% accuracy.'
    ]
  },
  {
    duration: 'May 2024 – Apr 2024',
    title: 'Beyond Pages Trust Website',
    github: 'https://github.com/WiiWake3101/Beyond-Pages-Trust',
    points: ['Designed a donation website with Tailwind CSS and Razorpay integration.']
  },
  {
    duration: 'Jan 2024 – Apr 2024',
    title: 'Blog App',
    github: 'https://github.com/WiiWake3101/Blog-App',
    points: ['Built using React.js, Prisma with MongoDB, and Firebase for real-time features and authentication.']
  }
];

export default function ProjectsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

      <div className="flex flex-col gap-10">
        {/* Undergraduate Projects */}
        <h3 className="text-2xl font-semibold mb-4">Undergraduate Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {undergraduateProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(34, 211, 238, 0.3)" }}
              className="flex flex-col md:flex-row bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 overflow-hidden group"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex-shrink-0 flex justify-center items-center mb-4 md:mb-0 md:mr-8 w-full md:w-[420px] relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={420}
                    height={280}
                    className="rounded-xl object-cover shadow-md w-full h-auto max-w-[420px] max-h-[280px] border border-white/10"
                  />
                </motion.div>
              </div>
              <div className="flex-1 flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-blue-700/30 text-blue-300 px-2 py-1 rounded text-xs font-mono border border-blue-500/30"
                  >
                    {project.duration}
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-purple-700/30 text-purple-300 px-2 py-1 rounded text-xs font-mono border border-purple-500/30"
                  >
                    {project.type}
                  </motion.span>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white text-xs rounded border border-gray-600 transition-all shadow-lg"
                  >
                    <GitHubIcon />
                    GitHub
                  </motion.a>
                </div>
                <h4 className="text-lg font-semibold mb-1 group-hover:text-cyan-300 transition-colors">{project.title}</h4>
                <p className="text-sm text-gray-200 italic mb-1">{project.subtitle}</p>
                <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                  {project.points.map((point, pointIdx) => (
                    <motion.li 
                      key={pointIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pointIdx * 0.1 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competition Projects */}
        <h3 className="text-2xl font-semibold mb-4">Competition Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitionProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.2)" }}
              className="flex flex-col bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-yellow-700/30 text-yellow-300 px-2 py-1 rounded text-xs font-mono border border-yellow-500/30"
                >
                  {project.duration}
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-pink-700/30 text-pink-300 px-2 py-1 rounded text-xs font-mono border border-pink-500/30"
                >
                  Competition
                </motion.span>
              </div>
              <h4 className="text-lg font-semibold mb-1 group-hover:text-yellow-300 transition-colors">{project.title}</h4>
              <p className="text-sm text-gray-200 italic mb-1">{project.subtitle}</p>
              <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                {project.points.map((point, pointIdx) => (
                  <motion.li 
                    key={pointIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pointIdx * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Course Projects */}
        <div className="space-y-10">
          <h3 className="text-2xl font-semibold mb-4">Course Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseProjects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)" }}
                className="flex flex-col bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 group"
              >
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-cyan-700/30 text-cyan-300 px-2 py-1 rounded text-xs font-mono border border-cyan-500/30"
                  >
                    {project.duration}
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-mono border border-green-500/30"
                  >
                    Course Project
                  </motion.span>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white text-xs rounded border border-gray-600 transition-all shadow-lg"
                  >
                    <GitHubIcon />
                    GitHub
                  </motion.a>
                </div>
                <h4 className="text-lg font-semibold mb-1 group-hover:text-cyan-300 transition-colors">{project.title}</h4>
                <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                  {project.points.map((point, pointIdx) => (
                    <motion.li 
                      key={pointIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pointIdx * 0.1 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
