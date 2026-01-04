'use client';

import { useState } from 'react';
import {
  FaHome,
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaAward,
  FaLanguage,
  FaBars,
  FaBriefcase,
  FaTimes,
  FaWrench,
  FaFileAlt,
  FaFlask,
} from 'react-icons/fa';

/** Store the icon *component* so we can size it differently in desktop vs mobile */
const navLinks = [
  { href: '#home', icon: FaHome },
  { href: '#education', icon: FaGraduationCap },
  { href: '#internships', icon: FaBriefcase },
  { href: '#projects', icon: FaLaptopCode },
  { href: '#research', icon: FaFlask },
  { href: '#certifications', icon: FaCertificate },
  { href: '#Technical', icon: FaWrench },
  { href: '#cv', icon: FaFileAlt },
  { href: '#awards', icon: FaAward },
  { href: '#languages', icon: FaLanguage },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ─────────── DESKTOP NAVBAR ─────────── */}
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md shadow-lg rounded-full px-6 py-2 z-50 border border-white/20">
        <div className="flex p-2 gap-6 text-white">
          {navLinks.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="hover:text-cyan-300 transition-colors duration-200"
            >
              {/* Bigger icons on md+ screens */}
              <Icon className="text-2xl lg:text-xl" />
            </a>
          ))}
        </div>
      </nav>

      {/* ─────────── MOBILE HAMBURGER ─────────── */}
      <div className="md:hidden fixed top-4 right-5 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white shadow-md hover:shadow-lg transition-all"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* ─────────── MOBILE DROPDOWN ─────────── */}
      {open && (
        <div className="md:hidden fixed top-20 right-4 z-40 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-4 flex flex-col items-center gap-4">
          {navLinks.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="text-white hover:text-cyan-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              {/* Smaller icons on mobile */}
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
      )}
    </>
  );
}