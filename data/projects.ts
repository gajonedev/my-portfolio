// Projets réalisés — une seule source de vérité par projet.
// La page d'accueil affiche les projets `featured` (description courte) ;
// la page Projets les affiche tous (summary détaillé + tech + lien).
export interface Project {
  name: string;
  sector: string;
  iconName: string;
  /** Description courte — cartes de la page d'accueil */
  description: string;
  /** Résumé détaillé — page Projets */
  summary: string;
  tech: string[];
  link: string;
  year?: string;
  status?: "live" | "preview" | "in-dev";
  /** Mis en avant sur la page d'accueil */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Wéman LMS",
    sector: "eLearning • Plateforme",
    iconName: "GraduationCap",
    description:
      "Plateforme e-learning complète adaptée au Bénin : multi-auteurs, paiement MoMo, certificats auto-générés et suivi de progression.",
    summary:
      "Plateforme e-learning complète pensée pour les réalités béninoises. Espace étudiant et auteur, vidéos hébergées, suivi de progression, analytics, génération automatique de certificats PDF, paiement Mobile Money et emails transactionnels.",
    tech: [
      "Next.js",
      "Drizzle ORM",
      "Better Auth",
      "Inngest",
      "Mux",
      "PostgreSQL",
    ],
    link: "https://github.com/gajonedev",
    year: "2026",
    status: "in-dev",
    featured: true,
  },
  {
    name: "AfCom",
    sector: "Mobile • Commerce",
    iconName: "Store",
    description:
      "App mobile offline-first pour les petits commerçants africains. Suivi des ventes, stocks et dépenses avec synchro automatique.",
    summary:
      "Application mobile conçue pour les petits commerçants africains. Gestion complète des ventes, stocks et dépenses en mode offline-first avec synchronisation automatique dès la connexion retrouvée.",
    tech: ["Flutter", "Dart", "Supabase", "SQLite"],
    link: "https://github.com/gajonedev",
    year: "2025",
    status: "preview",
    featured: true,
  },
  {
    name: "SmartVilla",
    sector: "IoT • Smart Home",
    iconName: "Home",
    description:
      "Application de contrôle d'une villa intelligente complète : éclairage, sécurité, portail, gestion d'énergie et monitoring.",
    summary:
      "Application connectée à une villa intelligente complète : contrôle de l'éclairage, gestion du portail motorisé, surveillance sécurité, monitoring énergétique et gestion de l'eau. Communication temps réel avec les systèmes embarqués.",
    tech: ["Flutter", "ESP32", "MQTT", "Node.js", "FreeRTOS"],
    link: "https://github.com/gajonedev",
    year: "2025",
    status: "preview",
    featured: true,
  },
  {
    name: "ArchiForm",
    sector: "Landing • Paiement",
    iconName: "CreditCard",
    description:
      "Page de présentation et tunnel de paiement pour une formation, avec ajout auto au Drive et envoi de mails de confirmation.",
    summary:
      "Page de présentation d'une formation avec tunnel de paiement intégré. Après paiement, ajout automatique de l'apprenant au dossier Google Drive et envoi de mail de confirmation avec accès aux ressources.",
    tech: ["Next.js", "Node.js", "Google Drive API", "Resend"],
    link: "https://ambc.vercel.app",
    year: "2025",
    status: "live",
    featured: true,
  },
  {
    name: "Afreel",
    sector: "Mobile • Facturation",
    iconName: "Receipt",
    description:
      "App mobile de facturation pour freelances africains : devis, factures, suivi des paiements et export PDF.",
    summary:
      "Application mobile de facturation pensée pour les freelances africains. Création de devis et factures professionnels, suivi des paiements, gestion clients et export PDF.",
    tech: ["Flutter", "Dart", "SQLite"],
    link: "https://github.com/gajonedev",
    year: "2025",
    status: "preview",
  },
  {
    name: "Fintech",
    sector: "Finance • Gestion",
    iconName: "Wallet",
    description:
      "App de gestion financière : suivi des revenus et dépenses, budgets, objectifs d'épargne et catégorisation automatique.",
    summary:
      "Application de gestion financière complète : suivi des revenus et dépenses, budgets, objectifs d'épargne, visualisation graphique et catégorisation automatique des transactions.",
    tech: ["Flutter", "Dart", "Node.js", "PostgreSQL"],
    link: "https://github.com/gajonedev",
    year: "2025",
    status: "preview",
  },
  {
    name: "iVeges",
    sector: "IoT • Agriculture",
    iconName: "Sprout",
    description:
      "Monitoring IoT d'irrigation autonome par réseau de capteurs sans fil, logique floue et dashboard mobile temps réel.",
    summary:
      "Système IoT de monitoring d'irrigation autonome basé sur un réseau de capteurs sans fil (WSN). Architecture maître ESP32 + esclaves Arduino Nano avec communication NRF24L01, logique floue de Mamdani pour la décision d'arrosage, et app mobile Flutter pour le suivi temps réel.",
    tech: ["Flutter", "ESP32", "Arduino", "NRF24L01", "C++"],
    link: "https://github.com/gajonedev",
    year: "2026",
    status: "live",
    featured: true,
  },
  {
    name: "GAIN",
    sector: "Vitrine • Association",
    iconName: "Globe",
    description:
      "Site vitrine bilingue FR/EN pour un réseau international d'évangélisation, avec animations Framer Motion et formulaires.",
    summary:
      "Site vitrine bilingue (FR/EN) pour le Gospel Activists International Network, un programme international d'évangélisation. Animations Framer Motion, formulaires de contact et de demande de prière, galerie photo et témoignages.",
    tech: ["Next.js 15", "Framer Motion", "Tailwind CSS", "next-intl"],
    link: "https://gain-network.vercel.app",
    year: "2026",
    status: "live",
    featured: true,
  },
  // TODO: Ajouter AEMEEC quand les détails du projet seront confirmés
];

// Sous-ensemble mis en avant sur la page d'accueil
export const projectsPreview = projects.filter((project) => project.featured);
