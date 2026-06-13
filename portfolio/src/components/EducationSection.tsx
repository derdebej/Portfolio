import { motion } from "framer-motion";
import { education, type EducationEntry } from "../data/education";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

function EducationCard({
  entry,
  index,
  isLast,
}: {
  entry: EducationEntry;
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
        <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
          <div>
            <h3 className="text-2xl font-bold text-white">{entry.institution}</h3>
            <p className="text-neutral-300 text-lg">{entry.degree[lang]}</p>
            <p className="text-neutral-600 text-sm mt-0.5">{entry.location}</p>
          </div>
          <span className="text-neutral-500 text-sm whitespace-nowrap pt-1">{entry.period}</span>
        </div>
        <p className="text-neutral-400 leading-relaxed mb-3">{entry.description[lang]}</p>
        {entry.tags && (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs text-neutral-300 rounded-md border border-neutral-700 bg-neutral-900/50">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  const { lang } = useLanguage();
  const tr = t[lang].education;

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
        {education.map((entry, index) => (
          <EducationCard
            key={entry.id}
            entry={entry}
            index={index}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
