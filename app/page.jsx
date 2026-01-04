'use client';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import EducationSection from '../components/sections/EducationSection';
import InternshipsSection from '../components/sections/InternshipsSection';
import ClubExperienceSection from '../components/sections/ClubExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResearchSection from '../components/sections/ResearchSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import TechnicalSkillsSection from '../components/sections/TechnicalSkillsSection';
import CVSection from '../components/sections/CVSection';
import AwardsSection from '../components/sections/AwardsSection';
import LanguagesSection from '../components/sections/LanguagesSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SkillsProficiencySection from '../components/sections/SkillsProficiencySection';

export default function Home() {
  // Section scroll spy logic
  const sectionIds = [
    "home",
    "education",
    "internships",
    "projects",
    "research",
    "certifications",
    "Technical",
    "skills-proficiency",
    "cv",
    "awards",
    "languages"
  ];
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // adjust offset for navbar height
      let currentSection = sectionIds[0];
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const ref = sectionRefs.current[i];
        if (ref && ref.offsetTop <= scrollPosition) {
          currentSection = sectionIds[i];
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <div className="relative pt-35 px-8 sm:px-20 z-10">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0.7, backgroundPosition: '0% 50%' }}
        animate={{ 
          opacity: 1, 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
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
    </div>
  );
}