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
    title: "Plateformes & logiciels web",
    slug: "creation-application-web",
    iconName: "LayoutDashboard",
    description:
      "Vous gérez encore vos clients, vos stocks ou vos réservations dans plusieurs fichiers ? Je réunis ces tâches dans un logiciel web adapté à votre équipe.",
  },
  {
    title: "Applications mobiles",
    slug: "creation-application-mobile",
    iconName: "Smartphone",
    description:
      "Vous voulez proposer un service sur téléphone ? Je développe votre application pour iOS et Android, avec les comptes, les paiements et le mode hors ligne dont vos utilisateurs ont besoin.",
  },
];

// Services détaillés (page services)
export const servicesDetailed: ServiceDetailed[] = [
  {
    title: "Applications mobiles",
    slug: "creation-application-mobile",
    iconName: "Smartphone",
    description:
      "Vous voulez proposer un service sur téléphone ? Je développe votre application pour iOS et Android, avec les comptes, les paiements et le mode hors ligne dont vos utilisateurs ont besoin.",
    details:
      "Je développe votre application pour iOS et Android et je prends aussi en charge le serveur qui gère ses données. Paiements, notifications, fonctionnement hors ligne : nous choisissons ce qui est utile à votre service. Je vous accompagne ensuite pour la publication sur les stores.",
    features: [
      "iOS et Android",
      "Mode hors ligne selon le besoin",
      "Aide à la publication",
      "Serveur et données de l’application",
    ],
  },
  {
    title: "E-commerce & vente en ligne",
    slug: "creation-ecommerce",
    iconName: "ShoppingCart",
    description:
      "Je crée votre boutique en ligne pour que vos clients puissent consulter vos produits, commander et payer avec leurs moyens de paiement habituels.",
    details:
      "Je vous aide à passer de commandes dispersées dans les messages à une boutique que vous pouvez gérer au même endroit : produits, paiements, stocks et livraisons. Nous choisissons les moyens de paiement selon vos clients.",
    features: [
      "Parcours optimisé",
      "Paiements sécurisés",
      "Gestion stocks",
      "Back-office",
    ],
  },
  {
    title: "Plateformes & logiciels web",
    slug: "creation-application-web",
    iconName: "Briefcase",
    description:
      "Vous gérez encore vos clients, vos stocks ou vos réservations dans plusieurs fichiers ? Je réunis ces tâches dans un logiciel web adapté à votre équipe.",
    details:
      "Je développe votre logiciel de gestion, votre espace client ou votre plateforme en ligne. Nous partons de votre façon de travailler pour décider des écrans, des droits d’accès et des tâches à automatiser.",
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
      "Je crée un site qui présente votre activité et donne à vos visiteurs les informations nécessaires pour vous contacter.",
    details:
      "Vous avez besoin d’un site pour présenter votre entreprise ? Je m’occupe des pages, de leur affichage sur téléphone et des bases du référencement. Nous choisissons ensemble ce que vos visiteurs doivent savoir et comment ils peuvent vous joindre.",
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
      "Vous lancez un service en ligne ? Je vous aide à construire sa première version, puis à la faire évoluer avec les retours de vos utilisateurs.",
    details:
      "Je développe votre logiciel par abonnement ou votre tableau de bord. Comptes clients, droits d’accès, facturation et suivi de l’activité : nous définissons ce qui doit être prêt au lancement et ce qui peut attendre.",
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
      "Je construis la partie serveur de votre application : les données, les comptes utilisateurs, les paiements et les connexions à vos autres outils.",
    details:
      "Votre équipe a déjà une interface ? Je peux développer le serveur et les API qui lui manquent, ou reprendre ceux qui posent problème. Je documente mon travail pour que votre équipe puisse ensuite le maintenir.",
    features: [
      "Sécurisé",
      "Conçu pour les évolutions prévues",
      "Automatisations",
      "Documenté",
    ],
  },
  {
    title: "Qualité & optimisation",
    slug: "audit-optimisation",
    iconName: "Award",
    description:
      "Votre site ou votre application vous pose problème ? Je regarde ce qui bloque et je vous propose les corrections à faire en premier.",
    details:
      "Lenteurs, bugs ou difficultés à modifier votre application : je commence par comprendre ce qui se passe. Je vous explique ensuite ce qui peut être corrigé, ce qui mérite d’être repris et le budget à prévoir.",
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
      "Je crée un site qui présente votre activité et donne à vos visiteurs les informations nécessaires pour vous contacter.",
  },
  {
    title: "Applications mobiles",
    slug: "creation-application-mobile",
    iconName: "Smartphone",
    description:
      "Vous voulez proposer un service sur téléphone ? Je développe votre application pour iOS et Android, avec les comptes, les paiements et le mode hors ligne dont vos utilisateurs ont besoin.",
  },
  {
    title: "E-commerce & paiement mobile",
    slug: "creation-ecommerce",
    iconName: "ShoppingCart",
    description:
      "Je crée votre boutique en ligne pour que vos clients puissent consulter vos produits, commander et payer avec leurs moyens de paiement habituels.",
  },
  {
    title: "Logiciels métier & gestion",
    slug: "creation-application-web",
    iconName: "Briefcase",
    description:
      "Vous gérez encore vos clients, vos stocks ou vos réservations dans plusieurs fichiers ? Je réunis ces tâches dans un logiciel web adapté à votre équipe.",
  },
];
