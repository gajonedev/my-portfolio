// Données SEO locales

export interface City {
  name: string;
  description: string;
  available: boolean;
}

export const cities: City[] = [
  {
    name: "Cotonou",
    description: "Capitale économique du Bénin",
    available: true,
  },
  {
    name: "Porto-Novo",
    description: "Capitale administrative",
    available: true,
  },
  {
    name: "Lokossa",
    description: "Chef-lieu du Mono",
    available: true,
  },
  {
    name: "Parakou",
    description: "Capitale du Nord",
    available: true,
  },
  {
    name: "Abomey-Calavi",
    description: "Ville universitaire",
    available: true,
  },
  {
    name: "Bohicon",
    description: "Carrefour du Sud",
    available: true,
  },
];

export const localAdvantages = [
  "Je suis basé à Cotonou et nous pouvons convenir d’une rencontre",
  "Je prévois les connexions et les téléphones utilisés par vos équipes",
  "Je peux intégrer les moyens de paiement disponibles pour votre compte",
  "Vous échangez directement avec moi en français",
  "Je vous détaille les fonctionnalités et les frais dans le devis",
  "Nous fixons les dates et les étapes de validation ensemble",
];

export const remoteCountries = [
  "Togo",
  "Niger",
  "Burkina Faso",
  "Côte d'Ivoire",
];

export const geoData = {
  region: "BJ-LI",
  placename: "Cotonou",
  latitude: 6.3654,
  longitude: 2.4183,
};

// FAQ de la page hub /developpeur-web-benin.
// Cible les requêtes réelles (prix, délais, Mobile Money, remote) et alimente
// le schema FAQPage pour les featured snippets.
export interface BeninFaqItem {
  question: string;
  answer: string;
}

export const beninFaq: BeninFaqItem[] = [
  {
    question: "Combien coûte un site web ou une application au Bénin ?",
    answer:
      "Un logiciel web démarre à 650 000 FCFA et une application mobile à 900 000 FCFA. Pour un site de présentation, mes tarifs commencent à 170 000 FCFA. Consultez la page Tarifs pour les fourchettes ; je vous prépare un devis après avoir discuté de votre besoin.",
  },
  {
    question: "En combien de temps mon projet est-il livré ?",
    answer:
      "Nous fixons le calendrier selon les fonctions à développer, les données à reprendre et les contenus disponibles. Je vous explique les étapes et les éléments dont j’ai besoin avant de commencer.",
  },
  {
    question:
      "Intégrez-vous le paiement Mobile Money (MTN MoMo, Moov, FedaPay, Kkiapay) ?",
    answer:
      "Oui. Je regarde avec vous les moyens utilisés par vos clients et les services disponibles pour votre compte. Nous retenons un prestataire, puis je connecte le paiement et sa confirmation à votre application.",
  },
  {
    question: "Travaillez-vous en dehors de Cotonou et à distance ?",
    answer:
      "Oui. Je travaille depuis Cotonou et je peux vous accompagner à distance au Bénin et à l’international. Nous convenons des échanges, des démonstrations et des éventuelles rencontres.",
  },
  {
    question: "Le site et le code m'appartiennent-ils ?",
    answer:
      "Je vous remets le code développé pour vous, les données et les accès prévus au devis. Les outils externes conservent leurs licences et leurs conditions ; je vous indique ceux utilisés par votre application.",
  },
];

export const seoKeywords = [
  "développeur web Cotonou",
  "développeur mobile Bénin",
  "développeur fullstack Bénin",
  "application web Bénin",
  "application mobile Bénin",
  "développeur Flutter Bénin",
  "développeur React Bénin",
  "développeur Next.js Afrique",
  "création site web Bénin",
  "e-commerce Cotonou",
  "SaaS Afrique de l'Ouest",
  "freelance Cotonou",
  "développeur Porto-Novo",
  "développeur Parakou",
  "développeur Lokossa",
];
