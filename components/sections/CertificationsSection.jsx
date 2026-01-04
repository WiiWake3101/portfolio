'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const certifications = [
  {
    name: 'GitHub Foundation',
    org: 'GitHub',
    date: 'Feb 2025',
    icon: '/GitHub.png',
    gradient: 'from-gray-700 via-gray-800 to-gray-900',
    unoptimized: false
  },
  {
    name: 'Networking Basics',
    org: 'Cisco Networking Academy',
    date: 'Sep 2024',
    icon: '/networking_badge.jpg',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    unoptimized: false
  },
  {
    name: 'Operating System Basics',
    org: 'Cisco Networking Academy',
    date: 'Mar 2024',
    icon: '/OS_badge.png',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    unoptimized: false
  },
  {
    name: 'Introduction to IoT',
    org: 'Cisco Networking Academy',
    date: 'Mar 2024',
    icon: 'https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/introduction_to_iot_45.png',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    unoptimized: true
  },
  {
    name: 'Computer Architecture',
    org: 'IIT Madras (NPTEL)',
    date: 'Oct 2023',
    icon: '/nptel.png',
    gradient: 'from-orange-600 via-red-600 to-pink-600',
    unoptimized: false
  },
  {
    name: 'Programming in Java',
    org: 'IIT Kharagpur (NPTEL)',
    date: 'Oct 2023',
    icon: '/nptel.png',
    gradient: 'from-yellow-600 via-orange-600 to-red-600',
    unoptimized: false
  }
];

export default function CertificationsSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="certifications"
      className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="relative group"
          >
            {/* Subtle glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />
            
            {/* Card */}
            <div className="relative flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg">
              {/* Icon */}
              <div className="flex-shrink-0">
                <Image
                  src={cert.icon}
                  alt={`${cert.name} Certificate`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-lg shadow-md object-contain bg-white/5 p-1"
                  unoptimized={cert.unoptimized}
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base mb-1 group-hover:text-cyan-300 transition-colors truncate">
                  {cert.name}
                </div>
                <div className="text-sm text-gray-200 truncate">{cert.org}</div>
                <div className="text-xs text-gray-400 mt-1">{cert.date}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
