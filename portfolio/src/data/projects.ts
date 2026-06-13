export interface Project {
  id: number;
  title: string;
  description: { en: string; fr: string };
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "INORA",
    description: {
      en: "Embedded AI assistant designed to improve independence for visually impaired people. Features obstacle detection and banknote recognition with YOLO, real-time OCR with PaddleOCR, noise reduction for improved accuracy, and offline TTS with multilingual voice commands.",
      fr: "Assistant IA embarqué destiné à améliorer l'autonomie des personnes malvoyantes. Détection d'obstacles et reconnaissance de billets via YOLO, OCR temps réel avec PaddleOCR, réduction du bruit et synthèse vocale hors ligne avec commandes multilingues.",
    },
    techStack: ["Python", "YOLO", "PaddleOCR", "Piper TTS", "Vosk"],
    githubUrl: "https://github.com/derdebej/INORA",
  },
  {
    id: 2,
    title: "AI Financial Analysis Assistant",
    description: {
      en: "Intelligent backend powered by LLM agents with tool-calling mechanisms. Integrates real-time financial data with streaming response generation and a modular architecture for easy extension of data sources and tools.",
      fr: "Backend intelligent basé sur des agents LLM avec mécanismes de tool-calling. Intégration de données financières en temps réel, génération de réponses en streaming et architecture modulaire facilitant l'ajout de nouvelles sources de données.",
    },
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI API"],
    githubUrl: "https://github.com/derdebej/AI_stock_analysis_assistant",
  },
  {
    id: 3,
    title: "CARA — E-Commerce Platform",
    description: {
      en: "Collaborative full-stack e-commerce platform with responsive interfaces, relational database integration, and complete product and order management features.",
      fr: "Plateforme e-commerce complète développée en collaboration, avec interfaces responsives, base de données relationnelle et gestion des produits et commandes.",
    },
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "https://github.com/derdebej",
  },
  {
    id: 4,
    title: "Purchase Tracking Platform",
    description: {
      en: "Web platform developed during an internship at Groupe Chimique Tunisien for tracking purchases, requests, and orders. Built a REST API with Node.js and Express, integrated a PostgreSQL database, and created analytical dashboards for operational visibility.",
      fr: "Plateforme web développée en stage chez Groupe Chimique Tunisien pour le suivi des achats, demandes et commandes. Implémentation d'une API REST avec Node.js et Express, intégration d'une base de données PostgreSQL et création de tableaux de bord analytiques.",
    },
    techStack: ["Node.js", "Express", "PostgreSQL", "React"],
    githubUrl: "https://github.com/derdebej/stage_gct",
  },
];
