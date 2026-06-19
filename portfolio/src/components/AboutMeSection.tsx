import { motion } from "framer-motion";
import avatar from "../assets/ee2115e5-1fa1-4500-9078-5067804191f7.png";
import CopyToClipboard from "./CopyToClipboard";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

const skills = [
  { name: "Python",      color: "text-yellow-300 border-yellow-800 bg-yellow-950/50" },
  { name: "C/C++",       color: "text-gray-300 border-gray-700 bg-gray-900/50" },
  { name: "Java",        color: "text-orange-300 border-orange-800 bg-orange-950/50" },
  { name: "JavaScript",  color: "text-amber-300 border-amber-800 bg-amber-950/50" },
  { name: "PHP",         color: "text-violet-300 border-violet-800 bg-violet-950/50" },
  { name: "React",       color: "text-cyan-300 border-cyan-800 bg-cyan-950/50" },
  { name: "Node.js",     color: "text-green-300 border-green-800 bg-green-950/50" },
  { name: "Express",     color: "text-emerald-300 border-emerald-800 bg-emerald-950/50" },
  { name: "FastAPI",     color: "text-teal-300 border-teal-800 bg-teal-950/50" },
  { name: "TailwindCSS", color: "text-sky-300 border-sky-800 bg-sky-950/50" },
  { name: "PostgreSQL",  color: "text-indigo-300 border-indigo-800 bg-indigo-950/50" },
  { name: "MySQL",       color: "text-blue-300 border-blue-800 bg-blue-950/50" },
  { name: "LangChain",   color: "text-lime-300 border-lime-800 bg-lime-950/50" },
  { name: "YOLO",        color: "text-red-300 border-red-800 bg-red-950/50" },
  { name: "Git",         color: "text-rose-300 border-rose-800 bg-rose-950/50" },
  { name: "Linux",       color: "text-neutral-300 border-neutral-700 bg-neutral-900/50" },
];

const rightVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutMeSection() {
  const { lang } = useLanguage();
  const tr = t[lang].about;

  const languages = [
    { name: tr.arabic,  level: tr.native },
    { name: tr.french,  level: "B2" },
    { name: tr.english, level: "C1" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-12 py-16 md:py-0">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-10 items-center">

        {/* ── Left: profile ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-[2px] bg-gradient-to-br from-white/30 via-white/10 to-transparent">
              <img
                src={avatar}
                alt="Nader Ben Salah"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_80px_12px_rgba(255,255,255,0.05)] pointer-events-none" />
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Nader Ben Salah</h2>
            <p className="text-neutral-400 mt-1 text-sm md:text-base">Computer Science Engineering Student</p>
            <p className="text-neutral-600 text-xs md:text-sm mt-0.5">ENSI · Tunisia</p>
          </div>

          <div className="flex items-center gap-3 md:gap-4 text-white flex-wrap justify-center">
            <CopyToClipboard value="+216 94 066 700" icon={<FaPhone size={17} />} copiedText={t[lang].home.phoneCopied} />
            <CopyToClipboard value="nader.ben.salah.78@gmail.com" icon={<BiLogoGmail size={22} />} copiedText={t[lang].home.emailCopied} />
            <a href="https://github.com/derdebej" target="_blank" rel="noopener noreferrer">
              <FaGithub size={19} className="hover:text-neutral-300 transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/nader-ben-salah-256692328/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={19} className="hover:text-neutral-300 transition-colors duration-200" />
            </a>
            <a href="https://www.facebook.com/nader.ben.salah.1312" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={19} className="hover:text-neutral-300 transition-colors duration-200" />
            </a>
          </div>
        </motion.div>

        {/* ── Right: content cards ── */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {/* Bio */}
          <motion.div
            variants={cardVariants}
            className="backdrop-blur-sm bg-white/[0.03] border border-neutral-800 rounded-2xl p-5 md:p-6"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-3">
              {tr.label}
            </p>
            <p className="text-neutral-300 leading-relaxed text-sm md:text-[1.05rem]">{tr.bio}</p>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            variants={cardVariants}
            className="backdrop-blur-sm bg-white/[0.03] border border-neutral-800 rounded-2xl p-5 md:p-6"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-3">
              {tr.techStack}
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {skills.map((skill) => (
                <span key={skill.name} className={`px-2.5 py-1 text-xs rounded-full border ${skill.color}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={cardVariants}
            className="backdrop-blur-sm bg-white/[0.03] border border-neutral-800 rounded-2xl px-5 py-4 md:px-6"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-3">
              {tr.languages}
            </p>
            <div className="flex flex-col gap-2">
              {languages.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <span className="text-neutral-300 text-sm">{item.name}</span>
                  <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-2.5 py-0.5">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
