// Informations principales du site et du propriétaire

export const siteConfig = {
  name: "Néhémie Gandonou",
  shortName: "NG",
  title: "Développeur Web & Mobile",
  description:
    "Développeur web & mobile freelance basé à Cotonou, Bénin. Je conçois des expériences digitales modernes, rapides et prêtes à convertir.",
  url: "https://gajone.dev",
  locale: "fr_BJ",
  language: "fr",
} as const;

export const contactInfo = {
  email: "gajonedev@gmail.com",
  phone: "+229 01 46 89 73 22",
  phoneRaw: "+2290146897322",
  location: "Cotonou, Bénin",
  availability: "Remote / Worldwide",
  responseTime: "Prise de brief sous 24h.",
  averageDelivery: "4 à 8 semaines selon le scope.",
} as const;

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/gajonedev",
    username: "gajonedev",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/gajonedev",
    username: "gajonedev",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/gajonedev",
    username: "@gajonedev",
  },
] as const;

export const stats = [
  { label: "Projets livrés", value: "+15" },
  { label: "Clients", value: "+8" },
  { label: "Temps moyen", value: "4-8 sem" },
  { label: "Satisfaction", value: "4.9/5" },
] as const;

export const aboutStats = [
  { label: "Projets livrés", value: "+15" },
  { label: "Clients internationaux", value: "+8" },
  { label: "Satisfaction client", value: "4.9/5" },
  { label: "Années d'expérience", value: "4+" },
] as const;

export const stackAndTools = {
  main: "Flutter, Next.js, React, TypeScript, Node.js, Supabase, Sanity & Payload — et, à l'occasion, des systèmes embarqués ESP32 / Arduino.",
  tags: [
    "Mobile Flutter",
    "Web Next.js",
    "API REST",
    "Design system",
    "SEO",
    "Performance",
    "IoT / Embedded",
  ],
} as const;

export const aboutHighlights = [
  "Produits premium : propres, robustes et durables",
  "Backend solide et architecture scalable",
  "Expérience fluide, soignée jusque dans le détail",
] as const;
