// Projets réalisés

export interface Project {
  name: string;
  sector: string;
  iconName: string;
  summary: string;
  tech: string[];
  link: string;
  year?: string;
}

// Projets pour la page d'accueil (version courte)
export interface ProjectPreview {
  title: string;
  tag: string;
  iconName: string;
  description: string;
}

export const projectsPreview: ProjectPreview[] = [
  {
    title: "NovaPay",
    tag: "Fintech • SaaS",
    iconName: "Briefcase",
    description:
      "Plateforme de paiement multi-pays avec dashboard temps réel et onboarding KYC.",
  },
  {
    title: "AfroMarket",
    tag: "Marketplace",
    iconName: "Store",
    description:
      "Marketplace multi-vendeurs avec gestion logistique et expérience mobile-first.",
  },
  {
    title: "Bloom Studio",
    tag: "Site vitrine",
    iconName: "Palette",
    description:
      "Landing page premium avec storytelling visuel et génération de leads.",
  },
  {
    title: "Pulse Logistics",
    tag: "Dashboard",
    iconName: "Truck",
    description:
      "Solution B2B de suivi de flotte avec analytics et alertes temps réel.",
  },
];

// Projets détaillés (page projets)
export const projects: Project[] = [
  {
    name: "NovaPay",
    sector: "Fintech • SaaS",
    iconName: "Briefcase",
    summary:
      "Plateforme de paiement avec dashboard en temps réel, KYC et automatisations back-office.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    link: "https://github.com/gajonedev",
    year: "2025",
  },
  {
    name: "AfroMarket",
    sector: "Marketplace",
    iconName: "Store",
    summary:
      "Marketplace multi-vendeurs, gestion logistique et parcours mobile-first optimisé.",
    tech: ["React", "Supabase", "Stripe"],
    link: "https://github.com/gajonedev",
    year: "2025",
  },
  {
    name: "Bloom Studio",
    sector: "Site vitrine",
    iconName: "Palette",
    summary:
      "Branding digital et landing page premium pour maximiser la conversion.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/gajonedev",
    year: "2025",
  },
  {
    name: "Pulse Logistics",
    sector: "Dashboard B2B",
    iconName: "Truck",
    summary:
      "Visualisation de flotte et alertes temps réel pour les équipes opérations.",
    tech: ["React", "D3.js", "Firebase"],
    link: "https://github.com/gajonedev",
    year: "2025",
  },
];
