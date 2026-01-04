'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

export default function ContactSection() {
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    // Form will submit naturally, this just adds visual feedback
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      className="pt-4 pb-16 px-4 sm:px-6 lg:px-20 text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.9 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100 + '%'],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.h2 
        className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        Let's Connect! 🚀
      </motion.h2>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
        Have a project in mind or just want to chat? Drop me a message!
      </p>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-10"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20" />
          
          <form
            action="https://formspree.io/f/mvgryypg"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6 relative"
          >
            {/* Name Field */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2">
                <FaUser className="text-cyan-400" />
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                required
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                animate={{
                  scale: focusedField === 'name' ? 1.02 : 1,
                  boxShadow: focusedField === 'name' 
                    ? '0 0 20px rgba(34, 211, 238, 0.3)' 
                    : '0 0 0px rgba(34, 211, 238, 0)'
                }}
                className="w-full px-5 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2">
                <FaEnvelope className="text-cyan-400" />
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                required
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                animate={{
                  scale: focusedField === 'email' ? 1.02 : 1,
                  boxShadow: focusedField === 'email' 
                    ? '0 0 20px rgba(34, 211, 238, 0.3)' 
                    : '0 0 0px rgba(34, 211, 238, 0)'
                }}
                className="w-full px-5 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                placeholder="vivek@example.com"
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2">
                <FaPhone className="text-cyan-400" />
                Phone Number
              </label>
              <motion.input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9+\-\s()]{7,}"
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                animate={{
                  scale: focusedField === 'phone' ? 1.02 : 1,
                  boxShadow: focusedField === 'phone' 
                    ? '0 0 20px rgba(34, 211, 238, 0.3)' 
                    : '0 0 0px rgba(34, 211, 238, 0)'
                }}
                className="w-full px-5 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                placeholder="+91 1234567890"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2">
                <FaComment className="text-cyan-400" />
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={5}
                required
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                animate={{
                  scale: focusedField === 'message' ? 1.02 : 1,
                  boxShadow: focusedField === 'message' 
                    ? '0 0 20px rgba(34, 211, 238, 0.3)' 
                    : '0 0 0px rgba(34, 211, 238, 0)'
                }}
                className="w-full px-5 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or just say hi! 👋"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              
              <span className="relative flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaPaperPlane />
                    </motion.span>
                  </>
                )}
              </span>
            </motion.button>
          </form>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </motion.section>
  );
}
