'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'SRMIST, Kattankulathur',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyYOZllJlZZM8VeKPrGcCWtjc6nBW1sg5mQ&s',
    cgpa: 'CGPA: 9.22 / 10',
    date: 'May 2026*',
    link: 'https://www.srmist.edu.in/',
    status: 'Pursuing',
    accent: '#00fff0',
  },
  {
    degree: '12th Grade',
    institution: 'Kola Perumal Chetty Vaishnav Sr. Sec. School, Chennai',
    logo: 'https://www.chennaischooldirectory.com/assets/upload/profileimg/PRFIMGUSR11581671789372.png',
    cgpa: 'Score: 70.4%',
    date: 'July 2022',
    link: 'https://www.kpcvs.ac.in/',
    status: 'Completed',
    accent: '#0066ff',
  },
  {
    degree: '10th Grade',
    institution: 'National Public School, Chennai',
    logo: 'https://www.nps.acadamis.in/assets/school_logos/national-public-school-gopalapuram_logo_1634878530.png',
    cgpa: 'Score: 78.8%',
    date: 'June 2020',
    link: 'https://www.npschennai.com/',
    status: 'Completed',
    accent: '#ff00aa',
  },
];

function EduCard({ edu, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group h-full"
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500"
        style={{ background: `radial-gradient(circle, ${edu.accent}, transparent)` }} />

      {/* Card */}
      <div className="relative flex flex-col items-center rounded-xl p-6 text-center overflow-hidden h-full"
        style={{ background: 'rgba(4,10,20,0.88)', border: `1px solid ${edu.accent}20`, backdropFilter: 'blur(12px)' }}>

        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px)' }} />

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: edu.accent, opacity: 0.5, boxShadow: `0 0 8px ${edu.accent}` }} />

        {/* Corner brackets */}
        {[{top:6,left:6,bw:'1px 0 0 1px'},{top:6,right:6,bw:'1px 1px 0 0'},{bottom:6,left:6,bw:'0 0 1px 1px'},{bottom:6,right:6,bw:'0 1px 1px 0'}].map((s,i)=>(
          <div key={i} className="absolute w-2.5 h-2.5"
            style={{ top:s.top, left:s.left, right:s.right, bottom:s.bottom, borderStyle:'solid', borderWidth:s.bw, borderColor:`${edu.accent}50` }} />
        ))}

        {/* Status badge */}
        {edu.status === 'Pursuing' && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] tracking-widest"
            style={{ fontFamily:'Share Tech Mono, monospace', background:'rgba(0,255,136,0.1)', border:'1px solid rgba(0,255,136,0.3)', color:'#00ff88' }}>
            <motion.span
              animate={{ opacity:[1,0.3,1] }}
              transition={{ duration:1.2, repeat:Infinity }}
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background:'#00ff88' }}
            />
            ACTIVE
          </div>
        )}

        {/* Logo */}
        <a href={edu.link} target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.1 }} className="mb-4 relative z-10">
            <div className="w-16 h-16 rounded-xl overflow-hidden mx-auto flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${edu.accent}25`, boxShadow: `0 0 12px ${edu.accent}15` }}>
              <Image src={edu.logo} alt={edu.institution} width={56} height={56}
                className="w-14 h-14 object-contain p-1" unoptimized />
            </div>
          </motion.div>
        </a>

        <h3 className="text-base font-bold mb-2 leading-snug relative z-10 transition-colors group-hover:text-white"
          style={{ fontFamily: 'Orbitron, monospace', fontSize:'13px', color: edu.accent }}>
          {edu.degree}
        </h3>
        <p className="text-xs mb-3 opacity-60 relative z-10 leading-relaxed"
          style={{ fontFamily:'Share Tech Mono, monospace' }}>
          {edu.institution}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-2 mt-auto pt-3 relative z-10"
          style={{ borderTop:`1px solid ${edu.accent}18` }}>
          <span className="text-xs font-mono tracking-wider" style={{ color: edu.accent }}>{edu.cgpa}</span>
          <span className="opacity-30 text-xs">|</span>
          <span className="text-xs opacity-50" style={{ fontFamily:'Share Tech Mono, monospace' }}>{edu.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function EducationSection({ sectionRef }) {
  const count = educationData.length;

  // Split into rows of 3 for lg, rows of 2 for sm
  // For any leftover (odd) last item on sm, we center it
  const hasOddLastRow = count % 2 !== 0;

  return (
    <motion.section
      ref={sectionRef}
      id="education"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // EDUCATION.DAT
        </p>
        <h2 className="text-3xl font-bold"
          style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Education
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {count === 1 ? (
          // 1 item → centered single card
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <EduCard edu={educationData[0]} idx={0} />
            </div>
          </div>
        ) : count === 2 ? (
          // 2 items → side by side, centered
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {educationData.map((edu, idx) => <EduCard key={idx} edu={edu} idx={idx} />)}
          </div>
        ) : (
          // 3+ items → lg: 3 cols (all in one row for 3)
          //             sm: 2 cols, lone last card spans 2 cols and is self-centered
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => {
              const isLastOdd = hasOddLastRow && idx === count - 1;
              return (
                <div
                  key={idx}
                  className={
                    isLastOdd
                      ? 'sm:col-span-2 lg:col-span-1 flex justify-center lg:block'
                      : ''
                  }
                >
                  <div className={isLastOdd ? 'w-full sm:max-w-sm lg:max-w-none' : 'w-full'}>
                    <EduCard edu={edu} idx={idx} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </motion.section>
  );
}