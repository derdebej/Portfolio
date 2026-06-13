export interface ExperienceEntry {
  id: number;
  role: { en: string; fr: string };
  company: string;
  period: { en: string; fr: string };
  location: string;
  bullets: Array<{ en: string; fr: string }>;
  techStack?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    role: {
      en: "Full-Stack Developer Intern",
      fr: "Stagiaire Développeur Full-Stack",
    },
    company: "Groupe Chimique Tunisien",
    period: {
      en: "Summer 2025",
      fr: "Été 2025",
    },
    location: "Tunisia",
    bullets: [
      {
        en: "Developed a web platform for tracking purchases, requests, and orders.",
        fr: "Développement d'une plateforme web de suivi des achats, demandes et commandes.",
      },
      {
        en: "Designed and implemented REST APIs using Node.js and Express.",
        fr: "Conception et implémentation d'API REST avec Node.js et Express.",
      },
      {
        en: "Integrated a PostgreSQL database and built analytical dashboards.",
        fr: "Intégration d'une base de données PostgreSQL et création de tableaux de bord analytiques.",
      },
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "React"],
  },
];
