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
    iconName: "Code",
    title: "Code propre",
    description:
      "Architecture scalable, composants réutilisables et bonnes pratiques.",
  },
  {
    iconName: "Palette",
    title: "Design system",
    description: "Cohérence visuelle et expérience utilisateur optimale.",
  },
  {
    iconName: "Rocket",
    title: "Performance",
    description: "Sites rapides, optimisés SEO et Core Web Vitals.",
  },
  {
    iconName: "Users",
    title: "Collaboration",
    description: "Communication transparente et suivi régulier du projet.",
  },
];

export const processSteps = [
  {
    title: "Reconnaissance",
    iconName: "Search",
    description:
      "Comprendre vos objectifs business, cible, concurrence et KPI clés.",
  },
  {
    title: "Design System",
    iconName: "Lightbulb",
    description: "Création d'une identité UI/UX cohérente et modulaire.",
  },
  {
    title: "Développement",
    iconName: "Code",
    description: "Code moderne, composants scalables, tests et performance.",
  },
  {
    title: "Optimisation",
    iconName: "Rocket",
    description: "SEO, accessibilité, analytics et optimisation continue.",
  },
];
