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
    description:
      "Des points d'étape réguliers et un seul interlocuteur, du début à la fin du projet.",
  },
];

export const processSteps = [
  {
    title: "Cadrage",
    iconName: "Search",
    description:
      "Je pars de votre problème, de vos utilisateurs et de votre objectif business, avant d'écrire la moindre ligne.",
  },
  {
    title: "Conception",
    iconName: "Lightbulb",
    description:
      "Je dessine un parcours simple et lisible, adossé à un design system cohérent.",
  },
  {
    title: "Développement",
    iconName: "Code",
    description:
      "Je construis un produit fiable et rapide, pensé pour durer et évoluer avec vous.",
  },
  {
    title: "Livraison & suivi",
    iconName: "Rocket",
    description:
      "Je mets en ligne proprement, puis je reste disponible pour faire grandir votre produit.",
  },
];
