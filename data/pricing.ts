// Tarifs indicatifs — fourchettes par type de projet.
// Grille validée par Néhémie (juillet 2026).

export interface PricingTier {
  title: string;
  serviceSlug?: string;
  priceFrom: string;
  priceNote: string;
  /** Délai de livraison indicatif */
  delay: string;
  description: string;
  includes: string[];
  idealFor: string;
}

export interface PricingFaq {
  question: string;
  answer: string;
}

export const pricingTiers: PricingTier[] = [
  {
    title: "Site vitrine professionnel",
    serviceSlug: "creation-site-vitrine",
    priceFrom: "170 000 FCFA",
    priceNote: "170 000 à 450 000 FCFA selon le nombre de pages et le contenu",
    delay: "1 à 2 semaines",
    description:
      "Je réalise les pages qui présentent votre activité et permettent à vos visiteurs de vous contacter.",
    includes: [
      "Design sur-mesure, responsive",
      "3 à 8 pages optimisées SEO",
      "Formulaire de contact",
      "Nom de domaine + hébergement configurés",
      "Formation à la mise à jour",
    ],
    idealFor: "Entreprises, cabinets, hôtels, ONG, professions libérales",
  },
  {
    title: "Boutique e-commerce",
    serviceSlug: "creation-ecommerce",
    priceFrom: "500 000 FCFA",
    priceNote:
      "500 000 à 1 200 000 FCFA selon le catalogue et les intégrations",
    delay: "3 à 5 semaines",
    description:
      "Je mets en place votre catalogue, les commandes et les paiements pour que vous puissiez gérer votre boutique en ligne.",
    includes: [
      "Catalogue produits et panier",
      "Paiement MTN MoMo, Moov Money, Celtiis Cash, CB",
      "Back-office stocks & commandes",
      "Gestion des livraisons par zone",
      "SEO produits (résultats enrichis Google)",
    ],
    idealFor: "Commerçants, marques, grossistes qui veulent vendre en ligne",
  },
  {
    title: "Application web / logiciel métier",
    serviceSlug: "creation-application-web",
    priceFrom: "650 000 FCFA",
    priceNote:
      "650 000 à 2 000 000 FCFA selon la complexité de la logique métier",
    delay: "4 à 8 semaines",
    description:
      "Je développe le logiciel dont votre équipe a besoin pour suivre ses clients, ses stocks, ses factures ou ses réservations.",
    includes: [
      "Analyse du besoin métier",
      "Interface adaptée à vos équipes",
      "Backend et base de données solides",
      "Gestion des rôles et permissions",
      "Formation et documentation",
    ],
    idealFor: "PME, écoles, cliniques, coopératives, administrations",
  },
  {
    title: "Application mobile",
    serviceSlug: "creation-application-mobile",
    priceFrom: "900 000 FCFA",
    priceNote: "900 000 à 2 500 000 FCFA, iOS + Android inclus (Flutter)",
    delay: "5 à 8 semaines",
    description:
      "Je développe votre application pour iOS et Android et je vous accompagne pour la proposer sur les stores.",
    includes: [
      "iOS + Android en un seul code",
      "Backend complet inclus",
      "Mode hors-ligne si nécessaire",
      "Paiement MTN MoMo, Moov Money, Celtiis Cash intégrable",
      "Préparation et accompagnement pour la soumission aux stores",
    ],
    idealFor: "Startups, commerces, services de livraison, fintech",
  },
  {
    title: "SaaS / MVP startup",
    serviceSlug: "creation-saas-dashboard",
    priceFrom: "1 200 000 FCFA",
    priceNote: "1 200 000 à 4 000 000 FCFA selon le périmètre du produit",
    delay: "6 à 10 semaines",
    description:
      "Je vous aide à lancer votre service en ligne : comptes clients, abonnements et tableau de bord.",
    includes: [
      "Architecture capable d'accueillir plusieurs organisations",
      "Authentification, rôles, abonnements",
      "Dashboard et analytics",
      "API documentée",
      "Monitoring en production",
    ],
    idealFor: "Startups et entreprises qui lancent un produit en ligne",
  },
  {
    title: "Audit & optimisation",
    serviceSlug: "audit-optimisation",
    priceFrom: "80 000 FCFA",
    priceNote:
      "80 000 à 250 000 FCFA, déduit du devis si je réalise les corrections",
    delay: "3 à 5 jours",
    description:
      "J’examine votre site ou votre application et je vous remets un rapport avec les corrections à prévoir et leur coût.",
    includes: [
      "Audit performance (Core Web Vitals)",
      "Audit SEO et indexation",
      "Revue du code et de la sécurité",
      "Rapport clair et hiérarchisé",
      "Plan d'action chiffré",
    ],
    idealFor:
      "Toute entreprise dont le site est lent, invisible ou vieillissant",
  },
];

export const alwaysIncluded = [
  "Je vous explique ce que le devis comprend avant de commencer",
  "Vous récupérez les accès, la documentation et le code indiqué dans le devis pour garder la main sur votre projet",
  "Je prépare les pages publiques pour leur référencement",
  "Je vérifie l’application sur téléphone et avec une connexion limitée",
  "Je vous montre comment utiliser ce qui a été livré",
  "Vous savez avant de commencer combien de temps je reste disponible pour les corrections après la livraison",
];

export const priceFactors = [
  {
    title: "Ce que vous souhaitez réaliser",
    description:
      "Le budget dépend des écrans, des utilisateurs et des tâches à gérer. Je vous aide à distinguer ce qui est nécessaire au lancement de ce qui peut attendre.",
  },
  {
    title: "Les outils à connecter",
    description:
      "Paiements, SMS, cartographie ou logiciel existant : chaque connexion demande du travail et des vérifications. Je les détaille dans le devis.",
  },
  {
    title: "Les textes et les images",
    description:
      "Si vos contenus sont prêts, je peux les intégrer directement. Si vous avez besoin d’aide pour les préparer, nous en tenons compte dans le budget et le calendrier.",
  },
  {
    title: "Votre date de lancement",
    description:
      "Dites-moi quand vous souhaitez lancer. Je vous indique ce qui est réalisable dans ce délai et les éventuels ajustements à prévoir.",
  },
];

export const pricingFaq: PricingFaq[] = [
  {
    question: "Pourquoi afficher des fourchettes et pas des prix fixes ?",
    answer:
      "Parce qu’une application avec quelques écrans et une plateforme pour plusieurs équipes ne demandent pas le même travail. Ces fourchettes vous donnent un premier repère. Après avoir discuté de votre besoin, je vous prépare un devis gratuit avec le détail de ce que je vais réaliser.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Nous convenons de plusieurs paiements : un acompte pour démarrer, puis des versements aux étapes prévues et le solde à la livraison. Les montants, les dates et le moyen de paiement figurent dans le devis.",
  },
  {
    question: "Y a-t-il des coûts récurrents après la livraison ?",
    answer:
      "Oui, il faut prévoir le domaine, l’hébergement et les services externes utilisés par votre application. Je vous indique ces frais avant de commencer. Vous réglez ces services directement ; la maintenance éventuelle fait l’objet d’un accord séparé.",
  },
  {
    question: "Proposez-vous la maintenance ?",
    answer:
      "Oui. Nous pouvons prévoir un suivi pour les mises à jour, les sauvegardes et les évolutions. Vous pouvez aussi confier cette partie à quelqu’un d’autre : je vous remets les accès et la documentation prévus au devis.",
  },
  {
    question: "Un site à 170 000 FCFA peut-il vraiment être de qualité ?",
    answer:
      "Oui, pour un site de présentation avec peu de pages et des contenus prêts. Une plateforme avec comptes utilisateurs, paiements ou gestion métier demande davantage de travail. Je vous explique ce qui est inclus pour que vous puissiez comparer les offres.",
  },
];
