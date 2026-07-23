// Compétences et valeurs

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Value {
  iconName: string;
  title: string;
  description: string;
}

export const skills: SkillCategory[] = [
  {
    name: "Mobile",
    items: ["Flutter", "Dart", "PWA", "App / Play Store"],
  },
  {
    name: "Web",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Supabase"],
  },
  {
    name: "CMS Headless",
    items: ["Sanity", "Strapi", "Payload"],
  },
];

export const values: Value[] = [
  {
    iconName: "Award",
    title: "Qualité primordiale",
    description:
      "Un produit qui reste fiable et agréable à utiliser, longtemps après la livraison.",
  },
  {
    iconName: "Code",
    title: "Code propre & scalable",
    description:
      "Architecture claire, maintenable et prête à monter en charge, backend compris.",
  },
  {
    iconName: "Rocket",
    title: "Performance & fluidité",
    description:
      "Des apps mobiles et web rapides, fluides et agréables à utiliser.",
  },
  {
    iconName: "Users",
    title: "Collaboration",
    description: "Communication transparente et suivi régulier du projet.",
  },
];

export const processSteps = [
  {
    title: "Cadrage",
    iconName: "Search",
    description:
      "Comprendre le problème à résoudre, les utilisateurs et les objectifs business.",
  },
  {
    title: "Conception",
    iconName: "Lightbulb",
    description:
      "UX claire et design system cohérent, pour un produit fluide et lisible.",
  },
  {
    title: "Développement",
    iconName: "Code",
    description:
      "Un produit fiable et rapide, pensé pour durer et évoluer avec vous.",
  },
  {
    title: "Livraison & suivi",
    iconName: "Rocket",
    description:
      "Optimisation, mise en production soignée et accompagnement dans la durée.",
  },
];
