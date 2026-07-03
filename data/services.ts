// Services proposés

export interface Service {
  title: string;
  iconName: string;
  description: string;
  /** Slug de la page service dédiée (/services/[slug]) */
  slug?: string;
}

export interface ServiceDetailed extends Service {
  details: string;
  features: string[];
}

// Services résumés (page d'accueil)
export const servicesPreview: Service[] = [
  {
    title: "Applications mobiles",
    iconName: "Smartphone",
    description:
      "Des apps mobiles pro, propres et fluides qui résolvent un vrai problème — et qui font le job : vendre, automatiser, fidéliser.",
  },
  {
    title: "Applications & logiciels web",
    iconName: "Globe",
    description:
      "De vrais logiciels web complets, pas des vitrines : des outils qui résolvent des problèmes et facilitent le travail au quotidien.",
  },
  {
    title: "SaaS & dashboards",
    iconName: "LayoutDashboard",
    description:
      "Produits SaaS et tableaux de bord fluides, multi-tenant et pensés dès le départ pour monter en charge.",
  },
  {
    title: "E-commerce & vente en ligne",
    iconName: "ShoppingCart",
    description:
      "Des boutiques qui vendent vraiment : parcours d'achat fluide, paiements sécurisés et back-office maîtrisé.",
  },
  {
    title: "Backend & API",
    iconName: "Code",
    description:
      "Le moteur de vos apps mobiles et web : API et infrastructure robustes, sécurisées et scalables, faites proprement.",
  },
  {
    title: "Qualité & scalabilité",
    iconName: "Award",
    description:
      "Expérience moderne. Code propre, performances soignées et architecture prête à grandir avec vous.",
  },
];

// Services détaillés (page services)
export const servicesDetailed: ServiceDetailed[] = [
  {
    title: "Applications mobiles",
    slug: "creation-application-mobile",
    iconName: "Smartphone",
    description:
      "Des apps mobiles pro, propres et fluides qui résolvent un vrai problème.",
    details:
      "Applications mobiles Flutter performantes et soignées dans le moindre détail, adossées à un backend solide. Conçues pour résoudre un vrai problème, vendre ou automatiser — et publiées sur l'App Store et Google Play.",
    features: [
      "Flutter cross-platform",
      "Backend solide",
      "Mode hors-ligne",
      "Publication stores",
    ],
  },
  {
    title: "Applications & logiciels web",
    slug: "creation-application-web",
    iconName: "Globe",
    description:
      "De vrais logiciels web complets qui résolvent des problèmes et facilitent le travail.",
    details:
      "Pas des vitrines : de véritables produits web complets (outils métier, plateformes, espaces clients) qui automatisent et fluidifient le travail. Frontend soigné, logique métier robuste et infrastructure background maîtrisée.",
    features: ["Outils métier", "Logique robuste", "Temps réel", "Scalable"],
  },
  {
    title: "SaaS & dashboards",
    slug: "creation-saas-dashboard",
    iconName: "LayoutDashboard",
    description:
      "Produits SaaS et tableaux de bord fluides, pensés pour monter en charge.",
    details:
      "Interfaces produit fluides et lisibles, architecture multi-tenant, design system complet et onboarding guidé — pensés dès le départ pour scaler proprement.",
    features: ["Multi-tenant", "Auth & rôles", "API REST", "Monitoring"],
  },
  {
    title: "E-commerce & vente en ligne",
    slug: "creation-ecommerce",
    iconName: "ShoppingCart",
    description:
      "Des boutiques qui vendent vraiment, sécurisées et maîtrisées de bout en bout.",
    details:
      "Parcours d'achat fluide, catalogue performant, paiements sécurisés et back-office complet. Intégrations Stripe, PayPal ou solutions locales (mobile money, FedaPay).",
    features: [
      "Parcours optimisé",
      "Paiements sécurisés",
      "Gestion stocks",
      "Back-office",
    ],
  },
  {
    title: "Backend & API",
    slug: "backend-api",
    iconName: "Code",
    description:
      "Le moteur robuste et sécurisé derrière vos apps mobiles et web.",
    details:
      "API REST propres, base de données bien modélisée, authentification, jobs en arrière-plan et infrastructure scalable. Le socle technique de vos produits, fait proprement et documenté.",
    features: [
      "API REST",
      "Base de données",
      "Auth & sécurité",
      "Jobs background",
    ],
  },
  {
    title: "Qualité & optimisation",
    slug: "audit-optimisation",
    iconName: "Award",
    description:
      "Du soin, de la robustesse et des performances — expériences utilisateur optimales.",
    details:
      "Audit technique, refonte d'un produit existant, optimisation des performances et de la fluidité, montée en charge et mise en conformité accessibilité. L'exigence de qualité du premier au dernier commit.",
    features: [
      "Audit technique",
      "Performance",
      "Scalabilité",
      "Accessibilité",
    ],
  },
];

// Services pour la page SEO locale
export const localServices: Service[] = [
  {
    title: "Applications web & SaaS",
    slug: "creation-application-web",
    iconName: "Globe",
    description:
      "Logiciels web complets et plateformes sur-mesure, du site professionnel au SaaS scalable, optimisés pour Google.",
  },
  {
    title: "Applications mobiles",
    slug: "creation-application-mobile",
    iconName: "Smartphone",
    description:
      "Apps iOS et Android performantes et fluides (Flutter), pour startups et entreprises au Bénin.",
  },
  {
    title: "E-commerce & paiement mobile",
    slug: "creation-ecommerce",
    iconName: "ShoppingCart",
    description:
      "Boutiques en ligne avec FedaPay, MTN MoMo et Moov Money intégrés, et livraison locale.",
  },
  {
    title: "Backend & API",
    slug: "backend-api",
    iconName: "Code",
    description:
      "API, bases de données et automatisations métier : un backend solide, sécurisé et prêt à grandir.",
  },
];
