'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHome, FaGraduationCap, FaLaptopCode, FaCertificate,
  FaAward, FaLanguage, FaBars, FaBriefcase, FaTimes,
  FaWrench, FaFileAlt, FaFlask, FaUsers,
} from 'react-icons/fa';

const navLinks = [
  { href: '#home',            icon: FaHome,         label: 'HOME'   },
  { href: '#education',       icon: FaGraduationCap,label: 'EDU'    },
  { href: '#internships',     icon: FaBriefcase,    label: 'WORK'   },
  { href: '#club-experience', icon: FaUsers,        label: 'CLUB'   },
  { href: '#projects',        icon: FaLaptopCode,   label: 'PROJ'   },
  { href: '#research',        icon: FaFlask,        label: 'RES'    },
  { href: '#certifications',  icon: FaCertificate,  label: 'CERT'   },
  { href: '#Technical',       icon: FaWrench,       label: 'SKILLS' },
  { href: '#cv',              icon: FaFileAlt,      label: 'CV'     },
  { href: '#awards',          icon: FaAward,        label: 'AWARDS' },
  { href: '#languages',       icon: FaLanguage,     label: 'LANG'   },
];

// ─── Individual nav item ────────────────────────────────────────────────────
function NavItem({ href, icon: Icon, label, isActive }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={href} className="relative flex flex-col items-center gap-0.5 px-2 py-1.5">
        {/* Animated active highlight pill */}
        {isActive && (
          <motion.div
            layoutId="cyberActiveNav"
            className="absolute inset-0 rounded"
            style={{
              background: 'rgba(0,255,240,0.07)',
              border: '1px solid rgba(0,255,240,0.28)',
              boxShadow: '0 0 14px rgba(0,255,240,0.18), inset 0 0 8px rgba(0,255,240,0.06)',
            }}
            transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
          />
        )}

        <Icon
          className="relative z-10 text-lg transition-all duration-200"
          style={{
            color:  isActive ? '#00fff0' : hovered ? '#00fff0' : 'rgba(100,180,200,0.55)',
            filter: isActive || hovered ? 'drop-shadow(0 0 6px #00fff0)' : 'none',
          }}
        />
        <span
          className="relative z-10 text-[8px] tracking-widest font-medium transition-colors duration-200"
          style={{
            fontFamily: 'Share Tech Mono, monospace',
            color: isActive ? '#00fff0' : hovered ? 'rgba(0,255,240,0.75)' : 'rgba(60,120,140,0.8)',
          }}
        >
          {label}
        </span>
      </a>

      {/* Tooltip (only when not active) */}
      <AnimatePresence>
        {hovered && !isActive && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.12 }}
            className="absolute -bottom-8 text-[9px] tracking-widest whitespace-nowrap pointer-events-none z-50 px-2 py-0.5 rounded"
            style={{
              fontFamily: 'Share Tech Mono, monospace',
              color: '#00fff0',
              background: 'rgba(0,10,20,0.92)',
              border: '1px solid rgba(0,255,240,0.22)',
              boxShadow: '0 0 8px rgba(0,255,240,0.1)',
            }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
  const [open, setOpen]               = useState(false);
  const [activeSection, setActive]    = useState('home');
  const [scrolled, setScrolled]       = useState(false);
  const [time, setTime]               = useState('');
  const observerRef                   = useRef(null);

  // Live clock
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(
        `${String(n.getHours()).padStart(2,'0')}:` +
        `${String(n.getMinutes()).padStart(2,'0')}:` +
        `${String(n.getSeconds()).padStart(2,'0')}`
      );
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  // Scroll-based navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── IntersectionObserver scroll spy ───────────────────────────────────────
  // Tracks which section has the most visible area in the viewport.
  // Much more reliable than getBoundingClientRect threshold checks.
  useEffect(() => {
    // Map from section id → current intersection ratio
    const ratios = {};

    const pickMostVisible = () => {
      let best = 'home';
      let bestRatio = -1;
      for (const [id, r] of Object.entries(ratios)) {
        if (r > bestRatio) { bestRatio = r; best = id; }
      }
      setActive(best);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });
        pickMostVisible();
      },
      {
        // rootMargin: slight negative top offset so the active item switches
        // just after a section crosses the navbar, not before.
        rootMargin: '-80px 0px -30% 0px',
        // Multiple thresholds → smoother ratio tracking
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
      }
    );

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) {
        ratios[el.id] = 0;
        observer.observe(el);
      }
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  // ─── Render ───────────────────────────────────────────────────────────────
  const cornerBrackets = [
    { top:3, left:3,  bw:'1px 0 0 1px' },
    { top:3, right:3, bw:'1px 1px 0 0' },
    { bottom:3, left:3,  bw:'0 0 1px 1px' },
    { bottom:3, right:3, bw:'0 1px 1px 0' },
  ];

  return (
    <>
      {/* ── Desktop ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block fixed top-3 left-1/2 -translate-x-1/2 z-50"
      >
        <div
          className="relative px-3 py-1.5 rounded"
          style={{
            background:    scrolled ? 'rgba(2,4,8,0.96)' : 'rgba(4,8,16,0.82)',
            border:        '1px solid rgba(0,255,240,0.13)',
            boxShadow:     '0 0 30px rgba(0,255,240,0.06), 0 0 60px rgba(0,0,0,0.5)',
            backdropFilter:'blur(20px)',
          }}
        >
          {/* HUD corner brackets */}
          {cornerBrackets.map((s, i) => (
            <div
              key={i}
              className="absolute w-2.5 h-2.5"
              style={{
                top: s.top, left: s.left, right: s.right, bottom: s.bottom,
                borderStyle: 'solid', borderWidth: s.bw,
                borderColor: 'rgba(0,255,240,0.32)',
              }}
            />
          ))}

          <div className="flex items-center gap-1">
            {/* Live clock */}
            <span
              className="text-[9px] tracking-widest mr-2 opacity-40 flicker"
              style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}
            >
              {time}
            </span>

            {navLinks.map(({ href, icon, label }) => (
              <NavItem
                key={href}
                href={href}
                icon={icon}
                label={label}
                isActive={activeSection === href.slice(1)}
              />
            ))}
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile toggle button ── */}
      <div className="md:hidden fixed top-4 right-5 z-50">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="p-3 rounded"
          style={{
            background:  'rgba(2,4,8,0.92)',
            border:      '1px solid rgba(0,255,240,0.22)',
            boxShadow:   '0 0 15px rgba(0,255,240,0.1)',
            color:       '#00fff0',
          }}
        >
          <AnimatePresence mode="wait">
            {open
              ? <motion.div key="c" initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:0.15}}><FaTimes  size={18}/></motion.div>
              : <motion.div key="o" initial={{rotate: 90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:0.15}}><FaBars size={18}/></motion.div>
            }
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, scale:0.9, y:-10 }}
            animate={{ opacity:1, scale:1,   y:0   }}
            exit={{    opacity:0, scale:0.9, y:-10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 right-4 z-40 p-4 rounded grid grid-cols-3 gap-2"
            style={{
              background:    'rgba(2,4,8,0.96)',
              border:        '1px solid rgba(0,255,240,0.22)',
              boxShadow:     '0 0 40px rgba(0,255,240,0.1)',
              backdropFilter:'blur(20px)',
            }}
          >
            {navLinks.map(({ href, icon: Icon, label }) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-1 p-2 rounded transition-all"
                  style={{
                    color:       active ? '#00fff0' : 'rgba(0,255,240,0.4)',
                    background:  active ? 'rgba(0,255,240,0.07)' : 'transparent',
                    border:      '1px solid',
                    borderColor: active ? 'rgba(0,255,240,0.25)' : 'transparent',
                  }}
                >
                  <Icon className="text-base" />
                  <span className="text-[9px] tracking-widest" style={{ fontFamily:'Share Tech Mono, monospace' }}>
                    {label}
                  </span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}