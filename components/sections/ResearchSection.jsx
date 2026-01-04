'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExpand, FaCompress } from 'react-icons/fa';

export default function ResearchSection({ sectionRef }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Use local PDF file from public folder with toolbar disabled but scrollbar enabled for mobile
  const researchPdfUrl = "/research_paper.pdf#toolbar=0&navpanes=0";

  return (
    <motion.section
      ref={sectionRef}
      id="research"
      className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 text-center">
        Research Paper
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Paper Details Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Title Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="animate-pulse text-yellow-400">●</span>
                <span className="text-xs font-medium text-yellow-300 bg-yellow-500/20 px-2 py-1 rounded border border-yellow-500/50">
                  Under Review
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-cyan-300 leading-tight">
                Embedded Machine Learning for Early Detection of Heart Attack Symptoms
              </h3>

              {/* Authors */}
              <div className="space-y-3 mb-4">
                <div className="text-sm">
                  <p className="font-semibold text-white">Vivek M G</p>
                  <p className="text-xs text-gray-400">Computing Technologies,</p>
                  <p className="text-xs text-gray-400">SRM Institute of Science and Technology,</p>
                  <p className="text-xs text-gray-400">Kattankulathur, India</p>
                  <p className="text-xs text-cyan-400 mt-1">vm4512@srmist.edu.in</p>
                </div>

                <div className="text-sm">
                  <p className="font-semibold text-white">S Raghuram</p>
                  <p className="text-xs text-gray-400">Computing Technologies,</p>
                  <p className="text-xs text-gray-400">SRM Institute of Science and Technology,</p>
                  <p className="text-xs text-gray-400">Kattankulathur, India</p>
                  <p className="text-xs text-cyan-400 mt-1">rs0657@srmist.edu.in</p>
                </div>

                <div className="text-sm">
                  <p className="font-semibold text-white">Dr. R Jeya</p>
                  <p className="text-xs text-gray-400">Computing Technologies,</p>
                  <p className="text-xs text-gray-400">SRM Institute of Science and Technology,</p>
                  <p className="text-xs text-gray-400">Kattankulathur, India</p>
                  <p className="text-xs text-cyan-400 mt-1">jeyar@srmist.edu.in</p>
                </div>
              </div>

              {/* Conference Info */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-sm font-semibold text-cyan-400">
                  9th International Conference on IoT in Social, Mobile, Analytics and Cloud (I-SMAC 2025)
                </p>
                <p className="text-xs text-gray-400">
                  📅 Conference Dates: October 08-10, 2025
                </p>
                <p className="text-xs text-green-400 font-semibold">
                  🎤 Presented: October 9, 2025
                </p>
              </div>
            </div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl rounded-xl overflow-hidden"
          >
            {/* Header with controls */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-3 flex items-center justify-between border-b border-gray-600">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 shadow-lg" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg" />
                  <span className="w-3 h-3 rounded-full bg-green-500 shadow-lg" />
                </div>
                <span className="text-gray-400 text-sm font-mono hidden sm:block">
                  research_paper.pdf
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <FaCompress className="w-4 h-4" /> : <FaExpand className="w-4 h-4" />}
              </motion.button>
            </div>

            {/* PDF Viewer */}
            <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-gray-900' : ''}`}>
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-4 right-4 z-10 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FaCompress className="w-5 h-5" />
                </button>
              )}
              
              <iframe
                src={researchPdfUrl}
                className={`w-full border-0 ${
                  isFullscreen 
                    ? 'h-screen' 
                    : 'h-[600px] lg:h-[800px]'
                }`}
                title="Research Paper"
                loading="lazy"
                style={{
                  pointerEvents: 'auto'
                }}
              />
              
              {/* Overlay to prevent right-click */}
              <div 
                className="absolute inset-0 pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
