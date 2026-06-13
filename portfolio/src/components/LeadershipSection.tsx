import { motion } from "framer-motion";
import { leadership, type LeadershipEntry } from "../data/leadership";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

function LeadershipCard({ entry, index }: { entry: LeadershipEntry; index: number }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="backdrop-blur-sm bg-white/[0.02] border border-neutral-800 rounded-2xl p-6 flex flex-col gap-3 hover:border-neutral-600 transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div>
          <h3 className="text-lg font-bold text-white leading-snug">{entry.role[lang]}</h3>
          <p className="text-neutral-300 text-base font-medium mt-0.5">{entry.organization}</p>
        </div>
        <span className="text-neutral-600 text-xs whitespace-nowrap pt-1 shrink-0">
          {entry.period}
        </span>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed">{entry.description[lang]}</p>
      <p className="text-neutral-700 text-xs">{entry.location}</p>
    </motion.div>
  );
}

export default function LeadershipSection() {
  const { lang } = useLanguage();
  const tr = t[lang].leadership;

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl w-full">
        {leadership.map((entry, index) => (
          <LeadershipCard key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}
