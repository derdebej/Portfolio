import { motion } from "framer-motion";
import { experience, type ExperienceEntry } from "../data/experience";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

const techColors: Record<string, string> = {
  "Node.js": "text-green-300 border-green-800 bg-green-950/50",
  Express: "text-green-300 border-green-800 bg-green-950/50",
  PostgreSQL: "text-indigo-300 border-indigo-800 bg-indigo-950/50",
  React: "text-cyan-300 border-cyan-800 bg-cyan-950/50",
};
const defaultColor = "text-neutral-300 border-neutral-700 bg-neutral-900/50";

function ExperienceCard({
  entry,
  index,
  isLast,
}: {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative pl-10 ${!isLast ? "pb-10" : ""}`}
    >
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white border-2 border-neutral-500" />
      {!isLast && (
        <div className="absolute left-[5px] top-5 bottom-0 w-px bg-neutral-700" />
      )}

      <div className="backdrop-blur-sm border-2 rounded-xl border-neutral-700 p-6 hover:border-neutral-500 transition-colors duration-300">
        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
          <div>
            <h3 className="text-2xl font-bold text-white">{entry.role[lang]}</h3>
            <p className="text-neutral-300 text-lg font-medium">{entry.company}</p>
            <p className="text-neutral-600 text-sm mt-0.5">{entry.location}</p>
          </div>
          <span className="text-neutral-500 text-sm whitespace-nowrap pt-1">
            {entry.period[lang]}
          </span>
        </div>

        <ul className="flex flex-col gap-2 mb-4">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-neutral-400 leading-relaxed">
              <span className="text-neutral-600 mt-1 shrink-0">—</span>
              {bullet[lang]}
            </li>
          ))}
        </ul>

        {entry.techStack && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-800">
            {entry.techStack.map((tech) => (
              <span key={tech} className={`px-2 py-1 text-xs rounded-md border ${techColors[tech] ?? defaultColor}`}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const { lang } = useLanguage();
  const tr = t[lang].experience;

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

      <div className="max-w-3xl w-full">
        {experience.map((entry, index) => (
          <ExperienceCard
            key={entry.id}
            entry={entry}
            index={index}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
