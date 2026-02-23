'use client';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import EducationSection from '../components/sections/EducationSection';
import InternshipsSection from '../components/sections/InternshipsSection';
import ClubExperienceSection from '../components/sections/ClubExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResearchSection from '../components/sections/ResearchSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import TechnicalSkillsSection from '../components/sections/TechnicalSkillsSection';
import SkillsProficiencySection from '../components/sections/SkillsProficiencySection';
import CVSection from '../components/sections/CVSection';
import AwardsSection from '../components/sections/AwardsSection';
import LanguagesSection from '../components/sections/LanguagesSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';
import CyberpunkParticles from '../components/CyberpunkParticles';
import CyberpunkCursor from '../components/CyberpunkCursor';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  const sectionRefs = useRef([]);

  return (
    <>
      {/* ── Global cyberpunk layer (behind everything) ── */}
      {/* Deep base */}
      <div className="fixed inset-0 z-0" style={{ background: '#020408' }} />

      {/* HUD grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,240,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,240,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Deep ambient glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[700px] h-[700px] rounded-full -top-40 -left-40"
          style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full top-1/3 -right-40"
          style={{ background: 'radial-gradient(circle, rgba(255,0,170,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bottom-0 left-1/3"
          style={{ background: 'radial-gradient(circle, rgba(0,255,240,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      {/* Neural network particles */}
      <CyberpunkParticles />

      {/* UI chrome */}
      <ScrollProgress />
      <CyberpunkCursor />

      {/* ── Page content ── */}
      <div className="relative z-10 pt-28 px-4 sm:px-8 lg:px-16 cursor-none">
        <Navbar />
        <HeroSection sectionRef={el => sectionRefs.current[0] = el} />
        <EducationSection sectionRef={el => sectionRefs.current[1] = el} />
        <InternshipsSection sectionRef={el => sectionRefs.current[2] = el} />
        <ClubExperienceSection />
        <ProjectsSection sectionRef={el => sectionRefs.current[3] = el} />
        <ResearchSection sectionRef={el => sectionRefs.current[4] = el} />
        <CertificationsSection sectionRef={el => sectionRefs.current[5] = el} />
        <TechnicalSkillsSection sectionRef={el => sectionRefs.current[6] = el} />
        <SkillsProficiencySection sectionRef={el => sectionRefs.current[7] = el} />
        <CVSection sectionRef={el => sectionRefs.current[8] = el} />
        <AwardsSection sectionRef={el => sectionRefs.current[9] = el} />
        <LanguagesSection sectionRef={el => sectionRefs.current[10] = el} />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}