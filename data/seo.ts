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
  "Développeur local, disponible en présentiel à Cotonou",
  "Connaissance du marché béninois et des moyens de paiement locaux",
  "Intégration MTN MoMo, Moov Money, Celtiis Cash",
  "Support en français et accompagnement personnalisé",
  "Tarification transparente et devis détaillé sous 24h",
  "Calendrier défini au devis et points d'étape réguliers",
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
      "Tout dépend du périmètre. Un site vitrine démarre autour de 170 000 FCFA, une boutique en ligne ou une application mobile plus haut. Je publie des fourchettes transparentes sur ma page Tarifs, et je vous envoie un devis précis et gratuit sous 24h.",
  },
  {
    question: "En combien de temps mon projet est-il livré ?",
    answer:
      "Le délai dépend du périmètre. Un site simple peut demander quelques jours, tandis qu'une application plus complète nécessite davantage de temps. Le calendrier et les points d'étape sont définis au devis.",
  },
  {
    question:
      "Intégrez-vous le paiement Mobile Money (MTN MoMo, Moov, FedaPay, Kkiapay) ?",
    answer:
      "Oui. J'intègre les moyens de paiement locaux (MTN MoMo, Moov Money, FedaPay, Kkiapay) comme le paiement par carte, pour que vos clients règlent avec ce qu'ils utilisent déjà.",
  },
  {
    question: "Travaillez-vous en dehors de Cotonou et à distance ?",
    answer:
      "Oui. J'accompagne des clients à Cotonou, Porto-Novo, Parakou, Lokossa et partout au Bénin, ainsi qu'au Togo, au Niger et à l'international, entièrement à distance.",
  },
  {
    question: "Le site et le code m'appartiennent-ils ?",
    answer:
      "Le code développé spécifiquement pour votre projet, la base de données, le domaine et les comptes créés pour vous sont remis selon les conditions du devis. Les bibliothèques et services tiers conservent leurs propres licences.",
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
