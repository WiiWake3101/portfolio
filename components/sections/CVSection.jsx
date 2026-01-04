'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExpand, FaCompress } from 'react-icons/fa';

export default function CVSection({ sectionRef }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Use local PDF file from public folder with toolbar disabled but scrollbar enabled for mobile
  const cvEmbedUrl = "/Vivek_CV.pdf#toolbar=0&navpanes=0";

  return (
    <motion.section
      ref={sectionRef}
      id="cv"
      className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.65 }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 text-center">
        Academic CV
      </h2>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden"
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
                vivek_cv.pdf
              </span>
            </div>
            
            <div className="flex items-center gap-2">
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
              src={cvEmbedUrl}
              className={`w-full border-0 ${
                isFullscreen 
                  ? 'h-screen' 
                  : 'h-[500px] sm:h-[600px] lg:h-[800px]'
              }`}
              title="Academic CV"
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
    </motion.section>
  );
}
