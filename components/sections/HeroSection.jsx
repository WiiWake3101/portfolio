'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection({ sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="py-10 px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:scroll-mt-150"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-1/2 relative"
      >
        {/* Glowing background effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />
        
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 sm:p-10 text-white text-center md:text-left">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{' '}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear" 
              }}
            >
              Vivek
            </motion.span>{' '}
            👋
          </motion.h1>

          <motion.div 
            className="mt-4 text-base sm:text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="block mt-2 leading-relaxed">
              I&apos;m a Computer Science and Engineering student passionate about
              <motion.span 
                className="font-semibold text-cyan-400"
                whileHover={{ scale: 1.05, color: '#22d3ee' }}
              > Embedded AI</motion.span>,
              <motion.span 
                className="font-semibold text-cyan-400"
                whileHover={{ scale: 1.05, color: '#22d3ee' }}
              > Embedded Systems</motion.span>,
              and
              <motion.span 
                className="font-semibold text-cyan-400"
                whileHover={{ scale: 1.05, color: '#22d3ee' }}
              > IoT</motion.span>.
              <br />
              I enjoy building smart devices, blending software and hardware, and solving real-world problems with technology.
            </span>
          </motion.div>

          <motion.div 
            className="mt-6 p-4 bg-black/20 rounded-xl border border-cyan-500/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="font-semibold text-cyan-300 flex items-center gap-2">
              <span className="text-xl">🎯</span> Interests:
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Embedded AI', 'IoT', 'Edge Computing', 'ML on Microcontrollers', 'Hardware-Software Integration'].map((interest, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-100 cursor-default transition-all"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/3 flex justify-center relative"
      >
        {/* Animated rings around image */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)',
          }}
        />
        
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative z-10"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-40" />
          <Image
            src="/IMG_1487.PNG"
            alt="Vivek"
            width={256}
            height={256}
            className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/30 shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
