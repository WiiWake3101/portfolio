'use client';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { FaTrophy, FaUsers, FaHandsHelping } from 'react-icons/fa';

export default function Home() {
  // Section scroll spy logic
  const sectionIds = [
    "home",
    "education",
    "internships",
    "projects",
    "certifications",
    "Technical",
    "awards",
    "languages"
  ];
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // adjust offset for navbar height
      let currentSection = sectionIds[0];
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const ref = sectionRefs.current[i];
        if (ref && ref.offsetTop <= scrollPosition) {
          currentSection = sectionIds[i];
        }
      }
      // Highlight nav or update state here if needed
      // Example: document.body.dataset.section = currentSection;
      // Or trigger a callback to Navbar if you want to highlight active section
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <div className="relative pt-35 px-8 sm:px-20 z-10">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0.7, backgroundPosition: '0% 50%' }}
        animate={{ 
          opacity: 1, 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <motion.section
          ref={el => sectionRefs.current[0] = el}
          id="home"
          className="py-10 px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:scroll-mt-150"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 sm:p-10 text-white text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Vivek 👋</h1>
            <div className="mt-4 text-base sm:text-lg text-white">
              <span className="block mt-2">
                I&apos;m a Computer Science and Engineering student passionate about
                <span className="font-semibold text-cyan-400"> Embedded AI</span>,
                <span className="font-semibold text-cyan-400"> Embedded Systems</span>,
                and
                <span className="font-semibold text-cyan-400"> IoT</span>.
                <br />
                I enjoy building smart devices, blending software and hardware, and solving real-world problems with technology.
              </span>
            </div>
            <div className="mt-3 text-sm text-white">
              <span className="font-semibold text-cyan-300">Interests:</span>
              <span>
                <span className="font-semibold"> Embedded AI</span>, 
                <span className="font-semibold"> IoT</span>, 
                <span className="font-semibold"> Edge Computing</span>, 
                <span className="font-semibold"> ML on Microcontrollers</span>, 
                <span className="font-semibold"> Hardware-Software Integration</span>
              </span>
            </div>
            <style jsx>{`
              .typing-animation {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                border-right: 2px solid #22d3ee;
                animation: typing 3.5s steps(60, end) 1, blink-caret 0.75s step-end infinite;
                max-width: 100%;
              }
              @keyframes typing {
                from { width: 0 }
                to { width: 100% }
              }
              @keyframes blink-caret {
                from, to { border-color: transparent }
                50% { border-color: #22d3ee; }
              }
            `}</style>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <Image
              src="/IMG_1487.PNG"
              alt="Vivek"
              width={256}
              height={256}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/30 shadow-lg"
            />

          </motion.div>
        </motion.section>

        <motion.section
          ref={el => sectionRefs.current[1] = el}
          id="education"
          className="py-12 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* B.Tech Card */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyYOZllJlZZM8VeKPrGcCWtjc6nBW1sg5mQ&s"
                  alt="SRMIST Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain mx-auto mb-3 rounded-full bg-white/20"
                  unoptimized
                />
              </a>
              <h3 className="text-xl font-semibold mb-1">B.Tech in Computer Science and Engineering</h3>
              <p className="text-sm text-gray-200">SRMIST, Kattankulathur</p>
              <div className="flex justify-center gap-4 text-sm text-gray-300 mt-2">
                <span>CGPA: 9.22 / 10</span>
                <span>May 2026*</span>
              </div>
            </div>
            {/* 12th Grade Card */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <a href="https://www.kpcvs.ac.in/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://www.chennaischooldirectory.com/assets/upload/profileimg/PRFIMGUSR11581671789372.png"
                  alt="KPCVS Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain mx-auto mb-3 rounded-full bg-white/20"
                  unoptimized
                />
              </a>
              <h3 className="text-xl font-semibold mb-1">12th Grade</h3>
              <p className="text-sm text-gray-200">Kola Perumal Chetty Vaishnav Senior Secondary School, Chennai</p>
              <div className="flex justify-center gap-4 text-sm text-gray-300 mt-2">
                <span>Score: 70.4%</span>
                <span>July 2022</span>
              </div>
            </div>
            {/* 10th Grade Card */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <a href="https://www.npschennai.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://www.nps.acadamis.in/assets/school_logos/national-public-school-gopalapuram_logo_1634878530.png"
                  alt="NPS Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain mx-auto mb-3 rounded-full bg-white/20"
                  unoptimized
                />
              </a>
              <h3 className="text-xl font-semibold mb-1">10th Grade</h3>
              <p className="text-sm text-gray-200">National Public School, Chennai</p>
              <div className="flex justify-center gap-4 text-sm text-gray-300 mt-2">
                <span>Score: 78.8%</span>
                <span>June 2020</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={el => sectionRefs.current[2] = el}
          id="internships"
          className="py-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Samsung Internship Card */}
            <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block bg-indigo-700/30 text-indigo-300 px-2 py-1 rounded text-xs font-mono">Mar 2024 – Dec 2024</span>
                <span className="inline-block bg-orange-700/30 text-orange-300 px-2 py-1 rounded text-xs font-mono">Internship</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">Research and Development Intern</h4>
              <p className="text-sm text-gray-200 italic mb-1">Samsung R&amp;D Institute India</p>
              <div className="font-medium text-cyan-300 mb-2">Detecting Anomaly in Smart Home Events using GenAI</div>
              <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                <li>Designed a smart lock anomaly detection system using LLAMA2-7b Chat for event classification and Isolation Forest for detecting anomalies.</li>
                <li>Created a synthetic dataset using Python &amp; SmartThings API simulating realistic lock/unlock activity.</li>
                <li>Pre-processed data to reduce bias and help ML models learn user patterns; visualized trends using Matplotlib.</li>
                <li>Evaluated dataset with five unsupervised learning algorithms; Isolation Forest outperformed others in anomaly detection. LLAMA2-7b used for generating real-time natural language explanations.</li>
                <li>Achieved 80.2% accurate real-time anomaly identification with low latency for faster responses.</li>
              </ul>
            </div>
            {/* Beyond Pages Trust Internship Card */}
            <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block bg-indigo-700/30 text-indigo-300 px-2 py-1 rounded text-xs font-mono">Jun 2024 – Jul 2024</span>
                <span className="inline-block bg-orange-700/30 text-orange-300 px-2 py-1 rounded text-xs font-mono">Internship</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">Community Connect</h4>
              <p className="text-sm text-gray-200 italic mb-1">BEYOND PAGES TRUST</p>
              <div className="font-medium text-cyan-300 mb-2">Community Service &amp; Development</div>
              <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                <li>Worked on community service and development projects impacting local communities.</li>
                <li>Engaged in outreach, event organization, and awareness campaigns.</li>
                <li>Collaborated with team members to deliver impactful social initiatives.</li>
                <li>Skills: Community Service, Community Development, Teamwork, Communication</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Club Experience Section */}
        <motion.section
          id="club-experience"
          className="py-10 px-4 sm:px-6 lg:px-20 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Club Experience</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Alexa Developers SRM Club Card */}
            <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 w-full md:w-1/2 hover:scale-[1.03] transition-transform duration-200">
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src="https://media.licdn.com/dms/image/v2/C560BAQHIcf-sado1eg/company-logo_200_200/company-logo_200_200/0/1631097727005/alexa_developers_srm_logo?e=1756944000&v=beta&t=mmYboS34pfgAdQil3Kirih6Z8DYs7AaLpBfq5raDA-w"
                  alt="Alexa Developers SRM Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full bg-white/20 object-contain"
                  unoptimized
                />
                <div>
                  <div className="font-semibold text-lg">Alexa Developers SRM</div>
                </div>
              </div>
              {/* Creative Lead */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-base">Creatives Lead</span>
                  <span className="inline-block bg-blue-700/30 text-blue-300 px-2 py-1 rounded text-xs font-mono">Part-time</span>
                  <span className="inline-block bg-gray-700/30 text-gray-300 px-2 py-1 rounded text-xs font-mono">Oct 2024 - Present · 9 mos</span>
                  <span className="inline-block bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-mono">Hybrid</span>
                </div>
                <div className="text-xs text-gray-400 mb-1">Chengalpattu, Tamil Nadu, India</div>
                <div className="text-sm text-gray-200 mb-1">
                  As the Creative Lead of the Alexa Developer Club at SRM, I am responsible for guiding our creative vision and fostering an environment where students can explore and develop their design skills. My role involves collaborating with club members, mentoring budding designers, and overseeing the design and UI/UX for the website and related projects. Additionally, I will be monitoring and guiding the creation of posters for club events and initiatives.
                </div>
                <div className="text-xs text-cyan-300">Skills: Figma, Team Leadership, UI/UX</div>
              </div>
              {/* Creative Executive */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-base">Creative Executive</span>
                  <span className="inline-block bg-blue-700/30 text-blue-300 px-2 py-1 rounded text-xs font-mono">Part-time</span>
                  <span className="inline-block bg-gray-700/30 text-gray-300 px-2 py-1 rounded text-xs font-mono">Jul 2024 - Oct 2024 · 4 mos</span>
                  <span className="inline-block bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-mono">On-site</span>
                </div>
                <div className="text-xs text-gray-400 mb-1">Chennai, Tamil Nadu, India</div>
                <div className="text-sm text-gray-200 mb-1">
                  As an executive, I helped shape the creative direction of this club while fostering a collaborative and inspiring environment for all the members.
                </div>
                <div className="text-xs text-cyan-300">Skills: Figma, UI/UX</div>
              </div>
              {/* Creative Member */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-base">Creative Member</span>
                  <span className="inline-block bg-blue-700/30 text-blue-300 px-2 py-1 rounded text-xs font-mono">Sep 2023 - Jul 2024 · 11 mos</span>
                  <span className="inline-block bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-mono">Chennai, Tamil Nadu, India</span>
                </div>
                <div className="text-sm text-gray-200 mb-1">
                  Supported club activities, contributed to poster design, and participated in GIT101 event organization.
                </div>
                <div className="text-xs text-cyan-300">Skills: Figma, Communication</div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={el => sectionRefs.current[3] = el}
          id="projects"
          className="min-h-screen py-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

          <div className="flex flex-col gap-10">

            {/* Undergraduate Project */}
            <h3 className="text-2xl font-semibold mb-4">Undergraduate Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Embedded ML for Early Heart Attack Prediction */}
              <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-blue-700/30 text-blue-300 px-2 py-1 rounded text-xs font-mono">Jan 2025 – May 2025</span>
                  <span className="inline-block bg-purple-700/30 text-purple-300 px-2 py-1 rounded text-xs font-mono">Undergraduate</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">Embedded ML for Early Heart Attack Prediction</h4>
                <p className="text-sm text-gray-200 italic mb-1">Undergraduate Project</p>
                <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                  <li>Built a real-time heart attack prediction system using Arduino Nano BLE 33 Sense Rev 2 and Embedded AI.</li>
                  <li>Integrated MAX30102, TMP117, and GSR sensors to collect physiological data.</li>
                  <li>Simulated datasets using Python, NumPy, and Pandas; visualized data using Matplotlib.</li>
                  <li>Trained a binary classification model in TensorFlow Lite; achieved 96% accuracy.</li>
                </ul>
              </div>
            </div>

            {/* Competition Project: Low-Cost Telematics Dongle */}
            <h3 className="text-2xl font-semibold mb-4">Competition Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Low-Cost Telematics Dongle */}
              <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-yellow-700/30 text-yellow-300 px-2 py-1 rounded text-xs font-mono">Feb 2025</span>
                  <span className="inline-block bg-pink-700/30 text-pink-300 px-2 py-1 rounded text-xs font-mono">Competition</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">Low-Cost Telematics Dongle</h4>
                <p className="text-sm text-gray-200 italic mb-1">Enduraverse 25, Endurance Technologies</p>
                <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                  <li>Designed using ESP32 and IMU sensor to monitor real-time motion data.</li>
                  <li>Built mobile app for Bluetooth data transmission; integrated ThingSpeak for cloud logging.</li>
                  <li>Focused on low latency (&lt;500ms); future-proofed for mechanical wear prediction.</li>
                </ul>
              </div>
              {/* IoT Vision Glasses */}
              <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-yellow-700/30 text-yellow-300 px-2 py-1 rounded text-xs font-mono">Jan 2025</span>
                  <span className="inline-block bg-pink-700/30 text-pink-300 px-2 py-1 rounded text-xs font-mono">Competition</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">IoT-Based Vision Glasses for the Blind</h4>
                <p className="text-sm text-gray-200 italic mb-1">ULTRON 8.0, FUTURIX CTECH, SRMIST</p>
                <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                  <li>Built wearable aid using Jetson Nano and MiDaS depth estimation.</li>
                  <li>Mobile app delivered spatial alerts via audio and haptics.</li>
                  <li>Achieved 87% obstacle detection accuracy in real-time prototype.</li>
                </ul>
              </div>
            </div>

            {/* Course Projects - Grouped */}
            <div className="space-y-10">
              <h3 className="text-2xl font-semibold mb-4">Course Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Robotic Arm */}
                <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block bg-cyan-700/30 text-cyan-300 px-2 py-1 rounded text-xs font-mono">Mar 2024 – Apr 2024</span>
                    <span className="inline-block bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-mono">Course Project</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Robotic Arm using ESP32</h4>
                  <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                    <li>Developed robotic arm using WebSocket, Wi-Fi control, and PWM-based movement.</li>
                  </ul>
                </div>
                {/* Road Damage Detection */}
                <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block bg-cyan-700/30 text-cyan-300 px-2 py-1 rounded text-xs font-mono">Jan 2024 – Apr 2024</span>
                    <span className="inline-block bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-mono">Course Project</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Road Damage Detection using Detectron2</h4>
                  <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                    <li>Trained model using Detectron2 to detect road potholes and cracks.</li>
                    <li>Built Flask backend and Tailwind CSS frontend; achieved 85% accuracy.</li>
                  </ul>
                </div>
                {/* Beyond Pages Website */}
                <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block bg-cyan-700/30 text-cyan-300 px-2 py-1 rounded text-xs font-mono">May 2024 – Apr 2024</span>
                    <span className="inline-block bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-mono">Course Project</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Beyond Pages Trust Website</h4>
                  <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                    <li>Designed a donation website with Tailwind CSS and Razorpay integration.</li>
                  </ul>
                </div>
                {/* Blog App */}
                <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 hover:scale-[1.03] transition-transform duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block bg-cyan-700/30 text-cyan-300 px-2 py-1 rounded text-xs font-mono">Jan 2024 – Apr 2024</span>
                    <span className="inline-block bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-mono">Course Project</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">Blog App</h4>
                  <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 mb-2">
                    <li>Built using React.js, Prisma with MongoDB, and Firebase for real-time features and authentication.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        <motion.section
          ref={el => sectionRefs.current[4] = el}
          id="certifications"
          className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'GitHub Foundation',
                org: 'GitHub',
                date: 'Feb 2025',
                icon: (
                  <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
                  </svg>
                ),
                color: "from-gray-700 to-gray-900"
              },
              {
                name: 'Networking Basics',
                org: 'Cisco Networking Academy',
                date: 'Sep 2024',
                icon: (
                  <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                color: "from-cyan-700 to-cyan-900"
              },
              {
                name: 'Operating System Basics',
                org: 'Cisco Networking Academy',
                date: 'Mar 2024',
                icon: (
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                color: "from-green-700 to-green-900"
              },
              {
                name: 'Introduction to IoT',
                org: 'Cisco Networking Academy',
                date: 'Mar 2024',
                icon: (
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                ),
                color: "from-blue-700 to-blue-900"
              },
              {
                name: 'Computer Architecture',
                org: 'IIT Madras (NPTEL)',
                date: 'Oct 2023',
                icon: (
                  <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                    <path d="M8 8h8v8H8z"/>
                  </svg>
                ),
                color: "from-yellow-700 to-yellow-900"
              },
              {
                name: 'Programming in Java',
                org: 'IIT Kharagpur (NPTEL)',
                date: 'Oct 2023',
                icon: (
                  <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                color: "from-pink-700 to-pink-900"
              }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg transition-transform duration-200`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)',
                  boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex-shrink-0">{cert.icon}</div>
                <div>
                  <div className="font-semibold text-lg">{cert.name}</div>
                  <div className="text-sm text-gray-200">{cert.org}</div>
                  <div className="text-xs text-gray-300">{cert.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={el => sectionRefs.current[5] = el}
          id="Technical"
          className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Technical Skills</h2>
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 space-y-4 shadow-lg relative overflow-x-auto"
            style={{ fontFamily: 'monospace' }}
          >
            {/* Mac window bar */}
            <div className="flex items-center space-x-2 h-4 mb-3 pl-1">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-red-700 shadow" title="Close"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block border border-yellow-600 shadow" title="Minimize"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block border border-green-700 shadow" title="Zoom"></span>
            </div>
            <div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-inner"
              style={{
                fontFamily: 'monospace',
                color: '#22d3ee', // cyan-400
                boxShadow: '0 4px 32px 0 rgba(0,0,0,0.15)',
              }}
            >
              <div>
                <span className="text-cyan-400">$</span> cat skills.txt
                <span className="animate-blink ml-1" style={{
                  display: 'inline-block',
                  width: '10px',
                  background: 'currentColor',
                  height: '1em',
                  verticalAlign: 'middle'
                }}>|</span>
              </div>
              <div className="pl-4">
                <span className="text-cyan-300">Operating Systems:</span> <span className="text-cyan-100">Windows, Linux</span><br />
                <span className="text-cyan-300">Languages:</span> <span className="text-cyan-100">C++, Python, JavaScript, Arduino C</span><br />
                <span className="text-cyan-300">Database &amp; Server:</span> <span className="text-cyan-100">MySQL</span><br />
                <span className="text-cyan-300">Tools:</span> <span className="text-cyan-100">VS Code, GitHub, Git, Figma</span><br />
                <span className="text-cyan-300">Web:</span> <span className="text-cyan-100">React Native, React JS, Next JS</span><br />
                <span className="text-cyan-300">Others:</span> <span className="text-cyan-100">Embedded System Programming</span>
              </div>
              <style jsx>{`
                .animate-blink {
                  animation: blink 1s steps(2, start) infinite;
                }
                @keyframes blink {
                  to {
                    visibility: hidden;
                  }
                }
              `}</style>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={el => sectionRefs.current[6] = el}
          id="awards"
          className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Awards & Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <FaTrophy className="text-yellow-400 w-12 h-12 drop-shadow-lg" />
                ),
                title: "Placed 3rd among 6 teams, Enduraverse’25 Hackathon",
                org: "Endurance Technologies Ltd",
                date: "Feb 2025"
              },
              {
                icon: (
                  <FaUsers className="text-cyan-300 w-10 h-10 drop-shadow" />
                ),
                title: "Led a 4-member design team for Alexaverse",
                org: "Alexa Developers SRM",
                date: "Poster design & branding"
              },
              {
                icon: (
                  <FaHandsHelping className="text-green-300 w-10 h-10 drop-shadow" />
                ),
                title: "Logistics Volunteer, GIT101",
                org: "SRMIST",
                date: "Nov 2023"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 shadow-lg transition-transform duration-200"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)',
                  boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold text-base mb-1">{item.title}</div>
                  <div className="text-sm text-gray-200">{item.org}</div>
                  <div className="text-xs text-gray-400">{item.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={el => sectionRefs.current[7] = el}
          id="languages"
          className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Languages</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* English */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl px-8 py-6 min-w-[180px] hover:scale-105 transition-transform duration-200">
              <span className="text-4xl mb-2">🇬🇧</span>
              <span className="font-semibold text-lg">English</span>
              <span className="text-xs text-gray-300 mt-1">Read / Write / Speak</span>
              <span className="mt-2 text-green-400 font-mono text-xs bg-green-900/30 px-2 py-1 rounded">Fluent</span>
            </div>
            {/* Tamil */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl px-8 py-6 min-w-[180px] hover:scale-105 transition-transform duration-200">
              <span className="text-4xl mb-2">🇮🇳</span>
              <span className="font-semibold text-lg">Tamil</span>
              <span className="text-xs text-gray-300 mt-1">Read / Write / Speak</span>
              <span className="mt-2 text-green-400 font-mono text-xs bg-green-900/30 px-2 py-1 rounded">Fluent</span>
            </div>
          </div>
        </motion.section>
        <footer className="mb-10 bg-white/10 backdrop-blur-lg border-t border-white/20 text-white py-6 px-4 sm:px-6 lg:px-20 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Vivek M G. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Wiiwake3101" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://linkedin.com/in/vm4512" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="mailto:vivekmg31@gmail.com" className="hover:text-white">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}