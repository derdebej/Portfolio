export interface EducationEntry {
  id: number;
  institution: string;
  degree: { en: string; fr: string };
  period: string;
  location: string;
  description: { en: string; fr: string };
  tags?: string[];
}

export const education: EducationEntry[] = [
  {
    id: 1,
    institution: "ENSI",
    degree: {
      en: "Computer Engineering Degree",
      fr: "Cycle Ingénieur en Informatique",
    },
    period: "2024 — Present",
    location: "Tunis, Tunisia",
    description: {
      en: "Engineering degree in Computer Science at the National School of Computer Science (École Nationale des Sciences de l'Informatique). Covering software engineering, algorithms, AI, databases, and web development.",
      fr: "Cycle Ingénieur en Informatique à l'École Nationale des Sciences de l'Informatique. Génie logiciel, algorithmes, intelligence artificielle, bases de données et développement web.",
    },
    tags: ["Software Engineering", "AI", "Algorithms", "Databases", "Web Dev"],
  },
  {
    id: 2,
    institution: "IPEIS",
    degree: {
      en: "Preparatory Classes — Mathematics & Physics",
      fr: "Cycle Préparatoire Maths-Physique",
    },
    period: "2022 — 2024",
    location: "Sfax, Tunisia",
    description: {
      en: "Two years of intensive preparatory classes in mathematics, physics, and computer science at the Institut Préparatoire aux Études d'Ingénieur de Sfax.",
      fr: "Deux années de classes préparatoires intensives en mathématiques, physique et informatique à l'Institut Préparatoire aux Études d'Ingénieur de Sfax.",
    },
    tags: ["Mathematics", "Physics", "Computer Science"],
  },
];
