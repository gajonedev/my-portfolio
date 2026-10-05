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
    title: "Soigner les détails",
    description:
      "Je vérifie les écrans, les formulaires et les cas d’erreur : ce sont aussi eux qui rendent une application agréable à utiliser.",
  },
  {
    iconName: "Code",
    title: "Préparer la suite",
    description:
      "J’organise le code et sa documentation pour que votre application puisse évoluer, avec moi ou avec un autre développeur.",
  },
  {
    iconName: "Rocket",
    title: "Penser aux conditions d’usage",
    description:
      "Je tiens compte des téléphones, des connexions et des habitudes des personnes qui utiliseront votre application.",
  },
  {
    iconName: "Users",
    title: "Travailler avec vous",
    description:
      "Vous voyez le travail avancer. Nous faisons le point aux étapes convenues et vous me dites ce qu’il faut ajuster.",
  },
];

export const processSteps = [
  {
    title: "Nous parlons de votre besoin",
    iconName: "Search",
    description:
      "Vous m’expliquez votre activité, vos utilisateurs et ce qui vous manque aujourd’hui. Je vous aide à choisir les premières fonctionnalités.",
  },
  {
    title: "Je prépare les écrans",
    iconName: "Lightbulb",
    description:
      "Je vous montre comment l’application va fonctionner. Nous ajustons les parcours avant de passer au développement.",
  },
  {
    title: "Je développe votre application",
    iconName: "Code",
    description:
      "Vous pouvez essayer les fonctionnalités au fil de l’avancement. Vos retours me permettent de corriger ce qui doit l’être.",
  },
  {
    title: "Je vous accompagne au lancement",
    iconName: "Rocket",
    description:
      "Je m’occupe de la mise en ligne et je vous explique comment utiliser l’outil. Nous convenons aussi du suivi après la livraison.",
  },
];
