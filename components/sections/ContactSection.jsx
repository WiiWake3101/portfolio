'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="pt-4 pb-16 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.9 }}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Contact Me</h2>
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8">
        <form
          action="https://formspree.io/f/mvgryypg"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-cyan-300 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9+\-\s()]{7,}"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-6 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-colors duration-200 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
