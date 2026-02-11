// Services proposés

export interface Service {
  title: string;
  iconName: string;
  description: string;
}

export interface ServiceDetailed extends Service {
  details: string;
  features: string[];
}

// Services résumés (page d'accueil)
export const servicesPreview: Service[] = [
  {
    title: "Site vitrine",
    iconName: "Globe",
    description:
      "Identité digitale moderne avec performance Core Web Vitals, SEO et contenu orienté conversion.",
  },
  {
    title: "E-commerce & marketplace",
    iconName: "ShoppingCart",
    description:
      "Expérience d'achat fluide, catalogue optimisés performances, paiements sécurisés et automatisations métier.",
  },
  {
    title: "SaaS & dashboards",
    iconName: "LayoutDashboard",
    description:
      "Interfaces produit fluides, onboarding guidé et architecture scalable pour vos équipes.",
  },
  {
    title: "Apps mobiles",
    iconName: "Smartphone",
    description:
      "Applications mobiles ou PWA pour offrir une expérience mobile rapide et intuitive.",
  },
  {
    title: "Automatisation IA",
    iconName: "Bot",
    description:
      "Workflows intelligents, chatbots, intégrations API et analyse de données assistée.",
  },
  {
    title: "Refonte & optimisation",
    iconName: "RefreshCw",
    description:
      "Audit UX, refonte UI, optimisation des temps de chargement et accessibilité AA.",
  },
];

// Services détaillés (page services)
export const servicesDetailed: ServiceDetailed[] = [
  {
    title: "Site vitrine premium",
    iconName: "Globe",
    description:
      "Identité digitale moderne avec performance Core Web Vitals, SEO et contenu orienté conversion.",
    details:
      "UI/UX haut de gamme, SEO technique, performance Core Web Vitals, et copywriting orienté conversion. Livré avec un design system complet.",
    features: [
      "Design responsive",
      "SEO optimisé",
      "Performance A+",
      "Analytics",
    ],
  },
  {
    title: "E-commerce & marketplace",
    iconName: "ShoppingCart",
    description:
      "Expérience d'achat fluide, catalogue optimisés performances, paiements sécurisés et automatisations métier.",
    details:
      "Gestion catalogue, paiement sécurisé, back-office, automatisations et analytics avancés. Intégration Stripe, PayPal, ou solutions locales.",
    features: [
      "Multi-vendeurs",
      "Paiements sécurisés",
      "Gestion stocks",
      "Dashboard",
    ],
  },
  {
    title: "SaaS & dashboard",
    iconName: "LayoutDashboard",
    description:
      "Interfaces produit fluides, onboarding guidé et architecture scalable pour vos équipes.",
    details:
      "Interfaces modulaires, design system complet, onboarding guidé et architecture scalable pour vos équipes produit.",
    features: ["Multi-tenant", "Auth SSO", "API REST", "Monitoring"],
  },
  {
    title: "Apps mobiles",
    iconName: "Smartphone",
    description:
      "Applications mobiles ou PWA pour offrir une expérience mobile rapide et intuitive.",
    details:
      "Applications React Native ou PWA optimisées pour la rétention. Publication App Store et Google Play incluse.",
    features: [
      "Cross-platform",
      "Push notifications",
      "Offline mode",
      "Analytics",
    ],
  },
  {
    title: "Automatisation IA",
    iconName: "Bot",
    description:
      "Workflows intelligents, chatbots, intégrations API et analyse de données assistée.",
    details:
      "Chatbots intelligents, workflows automatisés, intégrations API tierces et analyse de données assistée par IA.",
    features: ["Chatbots", "Workflows", "Intégrations API", "Analytics IA"],
  },
  {
    title: "Refonte & optimisation",
    iconName: "RefreshCw",
    description:
      "Audit UX, refonte UI, optimisation des temps de chargement et accessibilité AA.",
    details:
      "Audit UX complet, refonte UI moderne, optimisation des temps de chargement et mise en conformité accessibilité AA.",
    features: ["Audit UX", "Refonte UI", "Performance", "Accessibilité"],
  },
];

// Services pour la page SEO locale
export const localServices: Service[] = [
  {
    title: "Sites vitrines",
    iconName: "Globe",
    description:
      "Sites internet professionnels pour entreprises béninoises, optimisés pour Google.",
  },
  {
    title: "E-commerce",
    iconName: "ShoppingCart",
    description:
      "Boutiques en ligne avec paiement mobile money, FedaPay, et livraison locale.",
  },
  {
    title: "Applications mobiles",
    iconName: "Smartphone",
    description: "Apps iOS et Android pour startups et entreprises au Bénin.",
  },
  {
    title: "Automatisation",
    iconName: "Bot",
    description:
      "Chatbots WhatsApp, automatisation des processus métier et intégrations API.",
  },
];
