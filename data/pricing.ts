// Tarifs indicatifs — fourchettes par type de projet.
// Grille validée par Néhémie (juillet 2026).

export interface PricingTier {
  title: string;
  serviceSlug?: string;
  priceFrom: string;
  priceNote: string;
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
    priceNote: "170 000 – 450 000 FCFA selon le nombre de pages et le contenu",
    description:
      "Le site qui présente votre activité avec crédibilité et vous rend visible sur Google.",
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
      "500 000 – 1 200 000 FCFA selon le catalogue et les intégrations",
    description:
      "La boutique complète qui vend en ligne avec les moyens de paiement locaux.",
    includes: [
      "Catalogue produits et panier",
      "Paiement FedaPay, MTN MoMo, Moov Money, CB",
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
      "650 000 – 2 000 000 FCFA selon la complexité de la logique métier",
    description:
      "L'outil sur-mesure qui automatise votre gestion : facturation, stocks, clients, réservations.",
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
    priceNote:
      "900 000 – 2 500 000 FCFA — iOS + Android inclus (Flutter)",
    description:
      "Votre application sur l'App Store et Google Play, avec un seul développement pour les deux.",
    includes: [
      "iOS + Android en un seul code",
      "Backend complet inclus",
      "Mode hors-ligne si nécessaire",
      "Paiement Mobile Money intégrable",
      "Publication sur les deux stores",
    ],
    idealFor: "Startups, commerces, services de livraison, fintech",
  },
  {
    title: "SaaS / MVP startup",
    serviceSlug: "creation-saas-dashboard",
    priceFrom: "1 200 000 FCFA",
    priceNote:
      "1 200 000 – 4 000 000 FCFA selon le périmètre du produit",
    description:
      "Votre produit SaaS lancé sur des fondations saines : multi-tenant, abonnements, analytics.",
    includes: [
      "Architecture multi-tenant scalable",
      "Authentification, rôles, abonnements",
      "Dashboard et analytics",
      "API documentée",
      "Monitoring en production",
    ],
    idealFor: "Startups et entreprises qui lancent un produit digital",
  },
  {
    title: "Audit & optimisation",
    serviceSlug: "audit-optimisation",
    priceFrom: "80 000 FCFA",
    priceNote:
      "80 000 – 250 000 FCFA — déduit du devis si je réalise les corrections",
    description:
      "Le diagnostic complet de votre site ou application existants, avec plan d'action chiffré.",
    includes: [
      "Audit performance (Core Web Vitals)",
      "Audit SEO et indexation",
      "Revue du code et de la sécurité",
      "Rapport clair et hiérarchisé",
      "Plan d'action chiffré",
    ],
    idealFor: "Toute entreprise dont le site est lent, invisible ou vieillissant",
  },
];

export const alwaysIncluded = [
  "Devis détaillé et transparent sous 24h — sans frais cachés",
  "Code propre, documenté, qui vous appartient à 100 %",
  "Référencement (SEO) technique intégré dès la conception",
  "Site ou app rapide, testé sur mobile et petites connexions",
  "Formation à la prise en main à la livraison",
  "Garantie de correction des bugs après livraison",
];

export const priceFactors = [
  {
    title: "Le périmètre fonctionnel",
    description:
      "Plus il y a d'écrans, de rôles utilisateurs et de règles métier, plus le développement demande de temps. Un bon cadrage initial évite de payer pour du superflu.",
  },
  {
    title: "Les intégrations",
    description:
      "Paiement Mobile Money, SMS, cartographie, outils existants : chaque intégration tierce ajoute du travail de connexion et de test.",
  },
  {
    title: "Le contenu",
    description:
      "Textes, photos et fiches produits fournis prêts à l'emploi ou à produire ensemble : cela joue sur le budget et le délai.",
  },
  {
    title: "L'urgence",
    description:
      "Un délai confortable permet d'optimiser les coûts. Un lancement express reste possible, mais se planifie différemment.",
  },
];

export const pricingFaq: PricingFaq[] = [
  {
    question: "Pourquoi afficher des fourchettes et pas des prix fixes ?",
    answer:
      "Parce que deux projets « site web » peuvent varier du simple au quintuple selon le périmètre. Les fourchettes vous donnent un ordre de grandeur honnête pour situer votre budget ; le devis précis — gratuit et sans engagement — arrive sous 24h après notre premier échange.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "En plusieurs tranches liées à l'avancement : un acompte au démarrage, puis des paiements aux étapes clés validées ensemble, et le solde à la livraison. Virement, Mobile Money ou autre moyen convenu — tout est posé noir sur blanc dans le devis.",
  },
  {
    question: "Y a-t-il des coûts récurrents après la livraison ?",
    answer:
      "Uniquement les coûts d'infrastructure, qui vous sont facturés en direct et en toute transparence : hébergement (souvent quelques milliers de FCFA par mois), nom de domaine annuel, et les éventuels services tiers selon le projet. Aucun abonnement obligatoire chez moi.",
  },
  {
    question: "Proposez-vous la maintenance ?",
    answer:
      "Oui, en option : un forfait de maintenance couvre les mises à jour techniques, les sauvegardes et les petites évolutions. Vous pouvez aussi choisir de gérer vous-même — le code vous appartient et tout est documenté pour ça.",
  },
  {
    question: "Un site à 170 000 FCFA peut-il vraiment être de qualité ?",
    answer:
      "Oui, si le périmètre est bien cadré : un site vitrine de quelques pages, bien conçu et bien référencé, n'a pas besoin d'un budget de plateforme. Ce qui coûte cher, c'est le sur-mesure fonctionnel — pas la qualité d'exécution, qui est la même sur tous mes projets.",
  },
];
