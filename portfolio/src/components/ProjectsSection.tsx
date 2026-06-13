import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { projects, type Project } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

const techColors: Record<string, string> = {
  React: "text-cyan-300 border-cyan-800 bg-cyan-950/50",
  TypeScript: "text-blue-300 border-blue-800 bg-blue-950/50",
  "Node.js": "text-green-300 border-green-800 bg-green-950/50",
  Express: "text-green-300 border-green-800 bg-green-950/50",
  MongoDB: "text-emerald-300 border-emerald-800 bg-emerald-950/50",
  PostgreSQL: "text-indigo-300 border-indigo-800 bg-indigo-950/50",
  Java: "text-orange-300 border-orange-800 bg-orange-950/50",
  "Spring Boot": "text-orange-300 border-orange-800 bg-orange-950/50",
  Python: "text-yellow-300 border-yellow-800 bg-yellow-950/50",
  FastAPI: "text-teal-300 border-teal-800 bg-teal-950/50",
  LangChain: "text-amber-300 border-amber-800 bg-amber-950/50",
  "OpenAI API": "text-emerald-300 border-emerald-800 bg-emerald-950/50",
  YOLO: "text-orange-300 border-orange-800 bg-orange-950/50",
  PaddleOCR: "text-blue-300 border-blue-800 bg-blue-950/50",
  "Piper TTS": "text-purple-300 border-purple-800 bg-purple-950/50",
  Vosk: "text-violet-300 border-violet-800 bg-violet-950/50",
  HTML: "text-orange-300 border-orange-800 bg-orange-950/50",
  CSS: "text-blue-300 border-blue-800 bg-blue-950/50",
  JavaScript: "text-yellow-300 border-yellow-800 bg-yellow-950/50",
  PHP: "text-indigo-300 border-indigo-800 bg-indigo-950/50",
  "Tailwind CSS": "text-sky-300 border-sky-800 bg-sky-950/50",
  "Framer Motion": "text-purple-300 border-purple-800 bg-purple-950/50",
  WebGL: "text-pink-300 border-pink-800 bg-pink-950/50",
  Docker: "text-sky-300 border-sky-800 bg-sky-950/50",
};

const defaultTechColor = "text-neutral-300 border-neutral-700 bg-neutral-900/50";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang } = useLanguage();
  const tr = t[lang].projects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="backdrop-blur-sm border-2 rounded-xl border-neutral-700 p-6 flex flex-col gap-4 hover:border-neutral-500 transition-colors duration-300"
    >
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      <p className="text-neutral-400 text-base leading-relaxed flex-grow">
        {project.description[lang]}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className={`px-2 py-1 text-xs rounded-md border ${techColors[tech] ?? defaultTechColor}`}>
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-5 pt-2 border-t border-neutral-800">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
          >
            <FaGithub size={16} /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
          >
            <FiExternalLink size={16} /> {tr.liveDemo}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const tr = t[lang].projects;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-16 pb-28">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-3">{tr.title}</h2>
        <p className="text-neutral-400 text-base md:text-xl">{tr.subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
