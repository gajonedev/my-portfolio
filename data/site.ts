// Informations principales du site et du propriétaire

export const siteConfig = {
  name: "Néhémie Gandonou",
  shortName: "NG",
  title: "Développeur Web & Mobile",
  description:
    "Développeur web et mobile indépendant basé à Cotonou. Je conçois des sites, des applications et des outils métier adaptés aux réalités de votre activité.",
  url: "https://gajone.dev",
  locale: "fr_BJ",
  language: "fr",
} as const;

export const contactInfo = {
  email: "gajonedev@gmail.com",
  phone: "+229 01 46 89 73 22",
  phoneRaw: "+2290146897322",
  whatsapp: "2290146897322",
  location: "Cotonou, Bénin",
  availability: "À Cotonou et à distance",
  responseTime: "Prise de brief sous 24h.",
  averageDelivery: "Délai indicatif : 2 à 8 semaines selon le périmètre.",
} as const;

// Lien WhatsApp pré-rempli — CTA à faible friction (convertit mieux qu'un formulaire ici)
const DEFAULT_WHATSAPP_MESSAGE =
  "Bonjour Néhémie, j'ai un projet de site ou d'application et j'aimerais en discuter avec vous.";

export const whatsappUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;

// Arguments de confiance affichés sur la home (objection-killers, tous véridiques)
export const homeTrust = [
  "Devis détaillé sous 24h",
  "Délai défini avant le démarrage",
  "Code et accès remis à la livraison",
] as const;

// Section « Intérêt » (AIDA) : blocages concrets du visiteur, formulés de son
// point de vue. Nommer la situation avant de proposer la solution.
export const homeProblems = [
  {
    iconName: "Search",
    title: "On ne vous trouve pas",
    description:
      "On vous recommande de bouche à oreille, mais dès qu'un prospect tape votre nom sur Google, il ne trouve rien de concret sur vous. Sur vos concurrents, si.",
  },
  {
    iconName: "Smartphone",
    title: "Votre site ne travaille pas pour vous",
    description:
      "Votre site existe, mais il est lent, difficile à lire sur téléphone, et personne ne vous écrit à travers. Vous avez une vitrine passive au lieu d'un commercial.",
  },
  {
    iconName: "Clock",
    title: "Vous gérez tout à la main",
    description:
      "Les demandes, les paiements, les relances passent par WhatsApp et vous coûtent des heures chaque semaine. Vous perdez du temps, du temps que vous ne passez pas à faire votre métier.",
  },
] as const;

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
  { label: "Expérience", value: "4+ ans" },
] as const;

export const aboutStats = [
  { label: "Projets livrés", value: "+15" },
  { label: "Clients accompagnés", value: "+8" },
  { label: "Spécialités", value: "Web, mobile, IoT" },
  { label: "Années d'expérience", value: "4+" },
] as const;

// Bénéfices client mis en avant dans la section À propos de la home
// (orientés résultat, pas fonctionnalité technique)
export const aboutHighlights = [
  "Un seul interlocuteur, du premier échange à la mise en ligne",
  "Un produit fiable qui tient la charge, même quand l'activité décolle",
  "Une expérience simple et rapide qui met vos clients en confiance",
] as const;

// Engagements concrets — remplacent l'ancienne carte « stack » (trop technique
// pour la home ; la stack vit déjà dans la section Compétences). Tous véridiques.
export const aboutGuarantees = [
  "Devis détaillé et gratuit sous 24h",
  "Périmètre et calendrier validés avant le démarrage",
  "Code spécifique, comptes et accès remis à la livraison",
  "Un suivi après la mise en ligne",
] as const;
