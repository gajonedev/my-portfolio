// Informations principales du site et du propriétaire

export const siteConfig = {
  name: "Néhémie Gandonou",
  shortName: "NG",
  title: "Plateformes web & Apps mobiles",
  description:
    "Je suis Néhémie, développeur indépendant à Cotonou. Je vous accompagne pour créer votre plateforme web, votre logiciel métier ou votre application mobile.",
  url: "https://gajone.dev",
  updatedAt: "2026-10-04",
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
  responseTime: "Je vous réponds sous 24h pour discuter de votre idée.",
  averageDelivery:
    "Nous fixons les dates de livraison ensemble, selon les fonctionnalités à réaliser.",
} as const;

// Lien WhatsApp pré-rempli — CTA à faible friction (convertit mieux qu'un formulaire ici)
const DEFAULT_WHATSAPP_MESSAGE =
  "Bonjour Néhémie, j'ai un projet de plateforme web ou d'application mobile et j'aimerais en discuter avec vous.";

export const whatsappUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;

// Arguments de confiance affichés sur la home (objection-killers, tous véridiques)
export const homeTrust = [
  "Vous échangez directement avec moi",
  "Nous fixons le calendrier ensemble",
  "Vous récupérez le code et les accès",
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
  {
    label: "Projets livrés",
    value: "+15",
  },
  {
    label: "Clients",
    value: "+8",
  },
  {
    label: "Temps moyen",
    value: "4-8 sem",
  },
  {
    label: "Expérience",
    value: "4+ ans",
  },
] as const;

export const aboutStats = [
  {
    label: "Projets livrés",
    value: "+15",
  },
  {
    label: "Clients accompagnés",
    value: "+8",
  },
  {
    label: "Spécialités",
    value: "Web et mobile",
  },
  {
    label: "Années d'expérience",
    value: "4+",
  },
] as const;

// Bénéfices client mis en avant dans la section À propos de la home
// (orientés résultat, pas fonctionnalité technique)
export const aboutHighlights = [
  "Vous échangez directement avec moi, du premier appel à la livraison",
  "Je construis votre application autour du travail de vos équipes",
  "Je vous aide à la prendre en main et à préparer les prochaines évolutions",
] as const;

// Engagements concrets — remplacent l'ancienne carte « stack » (trop technique
// pour la home ; la stack vit déjà dans la section Compétences). Tous véridiques.
export const aboutGuarantees = [
  "Je vous prépare un devis gratuit après notre échange",
  "Avant de commencer, vous savez ce que je développe, combien cela coûte et quand je le livre",
  "Vous savez dès le devis quel code et quels accès vous récupérez à la livraison",
  "Je vous accompagne pour prendre en main votre application",
] as const;
