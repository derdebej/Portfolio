import "./App.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Particles from "./components/Particles";
import Dock from "./components/NavBar";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscMortarBoard,
  VscHistory,
  VscOrganization,
} from "react-icons/vsc";
import HomeSection from "./components/HomeSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import LeadershipSection from "./components/LeadershipSection";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { t } from "./i18n/translations";
import { useWindowWidth } from "./hooks/useWindowWidth";

function AppContent() {
  const { lang, setLang } = useLanguage();
  const tr = t[lang].dock;
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const homeRef = useRef<HTMLElement>(null);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isDockHovered, setIsDockHovered] = useState(false);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHomeVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (homeRef.current) observer.observe(homeRef.current);
    return () => observer.disconnect();
  }, []);

  const showDock = isHomeVisible || isDockHovered;

  const handleDockEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setIsDockHovered(true);
  };

  const handleDockLeave = () => {
    hideTimeout.current = setTimeout(() => setIsDockHovered(false), 300);
  };

  return (
    <>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={1000}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />

      {/* Global language toggle */}
      <button
        onClick={() => setLang(lang === "en" ? "fr" : "en")}
        className="fixed top-6 right-8 z-50 flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-sm bg-white/5 border border-neutral-700 rounded-full text-sm hover:bg-white/10 transition-colors duration-200 cursor-pointer"
      >
        <span className={lang === "en" ? "text-white font-semibold" : "text-neutral-500"}>EN</span>
        <span className="text-neutral-600">|</span>
        <span className={lang === "fr" ? "text-white font-semibold" : "text-neutral-500"}>FR</span>
      </button>

      <section ref={homeRef} id="Home" className="h-screen text-white">
        <HomeSection />
      </section>
      <section id="Projects" className="min-h-screen text-white">
        <ProjectsSection />
      </section>
      <section id="About" className="h-screen text-white">
        <AboutMeSection />
      </section>
      <section id="Experience" className="min-h-screen text-white">
        <ExperienceSection />
      </section>
      <section id="Education" className="min-h-screen text-white">
        <EducationSection />
      </section>
      <section id="Leadership" className="min-h-screen text-white">
        <LeadershipSection />
      </section>

      {/* Pill indicator — visible when dock is hidden */}
      <motion.div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 z-40 group flex items-end justify-center pb-3 w-32 h-14 cursor-pointer"
        animate={{ opacity: showDock ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showDock ? "none" : "auto" }}
        onMouseEnter={handleDockEnter}
        onMouseLeave={handleDockLeave}
      >
        <div className="h-1 w-16 rounded-full bg-white/25 group-hover:w-20 group-hover:bg-white/50 transition-all duration-200" />
      </motion.div>

      {/* Dock */}
      <motion.div
        className="fixed bottom-2 left-1/2 z-50"
        animate={{ y: showDock ? 0 : 100, opacity: showDock ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        onMouseEnter={handleDockEnter}
        onMouseLeave={handleDockLeave}
      >
        <Dock
          items={[
            { icon: <VscHome size={22} color="white" />, label: tr.home, sectionId: "Home" },
            { icon: <VscArchive size={22} color="white" />, label: tr.projects, sectionId: "Projects" },
            { icon: <VscAccount size={22} color="white" />, label: tr.about, sectionId: "About" },
            { icon: <VscHistory size={22} color="white" />, label: tr.experience, sectionId: "Experience" },
            { icon: <VscMortarBoard size={22} color="white" />, label: tr.education, sectionId: "Education" },
            { icon: <VscOrganization size={22} color="white" />, label: tr.leadership, sectionId: "Leadership" },
          ]}
          panelHeight={isMobile ? 56 : 68}
          baseItemSize={isMobile ? 34 : 46}
          magnification={isMobile ? 48 : 65}
        />
      </motion.div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
