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
    points: [
      'Designed smart lock anomaly detection using LLAMA2-7b Chat for event classification and Isolation Forest',
      'Created synthetic dataset using Python & SmartThings API simulating realistic lock/unlock activity',
      'Pre-processed data to reduce bias and help ML models learn user patterns; visualized trends using Matplotlib',
      'Achieved 80.2% accurate real-time anomaly identification with low latency'
    ],
    unoptimized: false
  },
  {
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGny7Rg76MhCw/company-logo_200_200/company-logo_200_200/0/1718351472437?e=2147483647&v=beta&t=qp8aISxGRahEQPihp5PHsCE36riBcFwJUS5sXTKET5M',
    duration: 'Jun 2024 – Jul 2024',
    title: 'Community Connect',
    company: 'BEYOND PAGES TRUST',
    project: 'Community Service & Development',
    points: [
      'Worked on community service and development projects impacting local communities',
      'Engaged in outreach, event organization, and awareness campaigns',
      'Collaborated with team members to deliver impactful social initiatives'
    ],
    unoptimized: true
  }
];

export default function InternshipsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="internships"
      className="py-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Internships</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {internshipsData.map((internship, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative group"
          >
            {/* Subtle glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
            
            {/* Card */}
            <div className="relative flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6">
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <Image
                  src={internship.logo}
                  alt={`${internship.company} Logo`}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain rounded-full bg-white/10 p-2"
                  unoptimized={internship.unoptimized}
                />
              </div>
              
              {/* Badges */}
              <div className="flex items-center gap-2 mb-3 flex-wrap justify-center">
                <span className="inline-block bg-indigo-700/30 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/30">
                  {internship.duration}
                </span>
                <span className="inline-block bg-orange-700/30 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                  Internship
                </span>
              </div>
              
              {/* Content */}
              <h4 className="text-lg font-semibold mb-1 text-center group-hover:text-cyan-300 transition-colors">
                {internship.title}
              </h4>
              <p className="text-sm text-gray-200 italic mb-2 text-center">{internship.company}</p>
              <div className="font-medium text-cyan-400 mb-3 text-center text-sm">{internship.project}</div>
              
              {/* Points */}
              <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
                {internship.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
