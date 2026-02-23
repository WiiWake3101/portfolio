'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const fields = [
  { id: 'name',    name: 'name',    type: 'text',  label: 'NAME',    icon: FaUser,     placeholder: 'Vivek M G',            required: true  },
  { id: 'email',   name: 'email',   type: 'email', label: 'EMAIL',   icon: FaEnvelope, placeholder: 'vivek@example.com',    required: true  },
  { id: 'phone',   name: 'phone',   type: 'tel',   label: 'PHONE',   icon: FaPhone,    placeholder: '+91 1234567890',       required: false },
];

export default function ContactSection() {
  const [focused, setFocused] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 2000);
  };

  const inputStyle = (id) => ({
    width: '100%',
    background: focused === id ? 'rgba(0,255,240,0.04)' : 'rgba(2,6,12,0.8)',
    border: `1px solid ${focused === id ? 'rgba(0,255,240,0.5)' : 'rgba(0,255,240,0.12)'}`,
    borderRadius: '6px',
    color: '#e0f4ff',
    padding: '10px 14px',
    outline: 'none',
    fontFamily: 'Share Tech Mono, monospace',
    fontSize: '13px',
    letterSpacing: '0.04em',
    transition: 'all 0.2s',
    boxShadow: focused === id ? '0 0 16px rgba(0,255,240,0.12), inset 0 0 8px rgba(0,255,240,0.04)' : 'none',
  });

  return (
    <motion.section
      id="contact"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // ESTABLISH_CONNECTION.SH
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Let&apos;s Connect
        </h2>
        <p className="text-sm mt-3 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          &gt; Initiating secure channel...
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Outer glow */}
        <div className="absolute -inset-2 blur-3xl opacity-10 pointer-events-none rounded-3xl"
          style={{ background: 'linear-gradient(135deg,#00fff0,#0066ff,#ff00aa)' }} />

        <div className="relative rounded-2xl overflow-hidden"
          style={{ background: 'rgba(4,10,20,0.92)', border: '1px solid rgba(0,255,240,0.15)', backdropFilter: 'blur(16px)' }}>

          {/* Top neon bar */}
          <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #00fff0, #0066ff, #ff00aa)', boxShadow: '0 0 10px #00fff0' }} />

          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-15"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.015) 3px,rgba(0,255,240,0.015) 4px)' }} />

          {/* Corner brackets */}
          {[{top:8,left:8,bw:'1px 0 0 1px'},{top:8,right:8,bw:'1px 1px 0 0'},{bottom:8,left:8,bw:'0 0 1px 1px'},{bottom:8,right:8,bw:'0 1px 1px 0'}].map((s,i)=>(
            <div key={i} className="absolute w-3.5 h-3.5" style={{top:s.top,left:s.left,right:s.right,bottom:s.bottom,borderStyle:'solid',borderWidth:s.bw,borderColor:'rgba(0,255,240,0.35)'}} />
          ))}

          <form
            action="https://formspree.io/f/mvgryypg"
            method="POST"
            onSubmit={handleSubmit}
            className="relative p-8 sm:p-10 space-y-5"
          >
            {/* Text fields */}
            {fields.map(({ id, name, type, label, icon: Icon, placeholder, required }) => (
              <div key={id}>
                <label className="flex items-center gap-2 text-[10px] tracking-widest mb-2"
                  style={{ fontFamily: 'Share Tech Mono, monospace', color: focused === id ? '#00fff0' : 'rgba(0,255,240,0.45)' }}>
                  <Icon className="text-xs" />
                  {label} {required && <span style={{ color: '#ff00aa' }}>*</span>}
                </label>
                <input
                  type={type} id={id} name={name} required={required}
                  placeholder={placeholder}
                  onFocus={() => setFocused(id)}
                  onBlur={() => setFocused(null)}
                  style={inputStyle(id)}
                />
              </div>
            ))}

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 text-[10px] tracking-widest mb-2"
                style={{ fontFamily: 'Share Tech Mono, monospace', color: focused === 'message' ? '#00fff0' : 'rgba(0,255,240,0.45)' }}>
                <FaComment className="text-xs" />
                MESSAGE <span style={{ color: '#ff00aa' }}>*</span>
              </label>
              <textarea
                id="message" name="message" rows={5} required
                placeholder="Tell me about your project or just say hi! 👋"
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                style={{ ...inputStyle('message'), resize: 'none' }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-3.5 px-6 rounded font-bold tracking-widest overflow-hidden"
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '13px',
                background: submitting ? 'rgba(0,255,240,0.05)' : 'rgba(0,255,240,0.08)',
                border: '1px solid rgba(0,255,240,0.4)',
                color: '#00fff0',
                boxShadow: '0 0 20px rgba(0,255,240,0.1)',
                cursor: submitting ? 'not-allowed' : 'pointer',
              }}
            >
              {/* Button glow sweep */}
              {!submitting && (
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,240,0.15), transparent)' }}
                />
              )}
              <span className="relative flex items-center justify-center gap-3">
                {submitting ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 rounded-full border-2"
                      style={{ borderColor: 'rgba(0,255,240,0.3)', borderTopColor: '#00fff0' }} />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    SEND_MESSAGE
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                      <FaPaperPlane className="text-sm" />
                    </motion.span>
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}