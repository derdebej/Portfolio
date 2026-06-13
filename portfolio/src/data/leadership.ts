export interface LeadershipEntry {
  id: number;
  role: { en: string; fr: string };
  organization: string;
  period: string;
  location: string;
  description: { en: string; fr: string };
}

export const leadership: LeadershipEntry[] = [
  {
    id: 1,
    role: {
      en: "Student Representative",
      fr: "Représentant des Étudiants",
    },
    organization: "ENSI",
    period: "2025 — Present",
    location: "Tunis, Tunisia",
    description: {
      en: "Representing students and managing academic communication between students and administration.",
      fr: "Représentation des étudiants et communication académique entre les étudiants et l'administration.",
    },
  },
  {
    id: 2,
    role: {
      en: "Secretary General",
      fr: "Secrétaire Général",
    },
    organization: "UGET ENSI",
    period: "2025 — Present",
    location: "Tunis, Tunisia",
    description: {
      en: "Coordinating student union initiatives, activities, and administrative operations.",
      fr: "Coordination des initiatives, activités et opérations administratives de l'union étudiante.",
    },
  },
  {
    id: 3,
    role: {
      en: "Marketing Team",
      fr: "Équipe Marketing",
    },
    organization: "ENSI Junior Entreprise",
    period: "2025 — Present",
    location: "Tunis, Tunisia",
    description: {
      en: "Content creation, communication strategy, and promotion of student enterprise events.",
      fr: "Création de contenu, stratégie de communication et promotion des événements de la junior entreprise.",
    },
  },
  {
    id: 4,
    role: {
      en: "Marketing Team",
      fr: "Équipe Marketing",
    },
    organization: "Association Robotique ENSI",
    period: "2024 — 2025",
    location: "Tunis, Tunisia",
    description: {
      en: "Communication and marketing activities for the robotics association's events and competitions.",
      fr: "Communication et activités marketing pour les événements et compétitions de l'association robotique.",
    },
  },
];
