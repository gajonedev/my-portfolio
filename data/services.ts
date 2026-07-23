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
      "Des applications mobiles professionnelles, propres et fluides qui vous règlent le problème de votre activité et qui font le job : vendre, automatiser, fidéliser.",
  },
  {
    title: "Applications & logiciels web",
    iconName: "Globe",
    description:
      "De vrais logiciels web complets, bien plus que des vitrines : des outils qui résolvent des problèmes et facilitent le travail au quotidien.",
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
];

// Services détaillés (page services)
export const servicesDetailed: ServiceDetailed[] = [
  {
    title: "Applications mobiles",
    slug: "creation-application-mobile",
    iconName: "Smartphone",
    description:
      "Des apps mobiles pro, propres et fluides, pensées pour votre activité.",
    details:
      "Des applications iOS et Android rapides et soignées, conçues pour répondre à votre objectif : vendre, automatiser ou fidéliser. Publiées sur l'App Store et Google Play, prêtes à l'emploi.",
    features: [
      "iOS + Android",
      "Fonctionne hors-ligne",
      "Publié sur les stores",
      "Rapide et fiable",
    ],
  },
  {
    title: "E-commerce & vente en ligne",
    slug: "creation-ecommerce",
    iconName: "ShoppingCart",
    description:
      "Des boutiques qui vendent vraiment, sécurisées et maîtrisées de bout en bout.",
    details:
      "Un site e-commerce avec un parcours d'achat fluide, un catalogue performant, des paiements sécurisés et un back-office complet. Intégrations Stripe, PayPal ou solutions locales (mobile money).",
    features: [
      "Parcours optimisé",
      "Paiements sécurisés",
      "Gestion stocks",
      "Back-office",
    ],
  },
  {
    title: "Applications & logiciels web",
    slug: "creation-application-web",
    iconName: "Briefcase",
    description:
      "De vrais logiciels web complets qui automatisent votre quotidien et facilitent le travail de vos équipes.",
    details:
      "Bien plus que des vitrines : de véritables outils métier, plateformes et espaces clients qui automatisent votre quotidien et font gagner du temps à vos équipes. Fiables, rapides et prêts à évoluer avec vous.",
    features: [
      "Outils métier",
      "Gain de temps",
      "Temps réel",
      "Prêt à grandir",
    ],
  },
  {
    title: "Sites vitrines",
    slug: "creation-site-vitrine",
    iconName: "Globe",
    description:
      "Le site professionnel qui vous rend crédible et visible sur Google, conçu pour convertir.",
    details:
      "Des sites vitrines sur-mesure, rapides et bien référencés, conçus pour convertir vos visiteurs en clients. Le commercial qui travaille pour vous 24h/24, et que vos clients trouvent sur Google.",
    features: [
      "Design sur-mesure",
      "Visible sur Google",
      "Mobile-first",
      "Facile à mettre à jour",
    ],
  },
  {
    title: "SaaS & dashboards",
    slug: "creation-saas-dashboard",
    iconName: "LayoutDashboard",
    description:
      "Produits SaaS et tableaux de bord fluides, pensés pour monter en charge.",
    details:
      "Un produit SaaS clair et agréable à utiliser, avec comptes, rôles et espaces séparés pour chaque client. Pensé dès le départ pour accueillir vos premiers utilisateurs comme les milliers suivants.",
    features: [
      "Multi-clients",
      "Comptes & rôles",
      "Prêt à grandir",
      "Suivi & stats",
    ],
  },
  {
    title: "Backend & API",
    slug: "backend-api",
    iconName: "Code",
    description:
      "Le moteur robuste et sécurisé derrière vos apps mobiles et web.",
    details:
      "Le moteur invisible derrière vos apps et sites : rapide, sécurisé et prêt à encaisser la montée en charge. Un socle propre et documenté, que vous gardez et pouvez faire évoluer sans dépendre de moi.",
    features: [
      "Sécurisé",
      "Fiable et scalable",
      "Automatisations",
      "Documenté",
    ],
  },
  {
    title: "Qualité & optimisation",
    slug: "audit-optimisation",
    iconName: "Award",
    description:
      "Votre produit est lent, bancal ou difficile à faire évoluer ? Je le remets d'aplomb.",
    details:
      "Votre site ou votre app est lent, instable ou difficile à faire évoluer ? Audit, refonte et optimisation pour le rendre rapide, fiable et agréable, accessible à tous. La qualité du début à la fin.",
    features: [
      "Audit complet",
      "Plus rapide",
      "Prêt à grandir",
      "Accessible à tous",
    ],
  },
];

// Services pour la page SEO locale
export const localServices: Service[] = [
  {
    title: "Sites web professionnels",
    slug: "creation-site-vitrine",
    iconName: "Globe",
    description:
      "Sites vitrines rapides et bien référencés sur Google, pour être trouvé par vos clients locaux.",
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
    title: "Logiciels métier & gestion",
    slug: "creation-application-web",
    iconName: "Briefcase",
    description:
      "Facturation, stocks, réservations, espaces clients : des outils sur-mesure qui automatisent votre activité.",
  },
];
