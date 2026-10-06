// Pages services dédiées — une entrée par offre, avec contenu SEO différencié.
// Chaque page cible une requête transactionnelle (« création site web Bénin »,
// « développement application mobile »…) : le contenu doit rester unique par service.

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

// Les prix des offres suivent la grille validée de data/pricing.ts (juillet 2026).
export interface ServiceOffer {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  /** Offre mise en avant (badge « Recommandé ») */
  recommended?: boolean;
}

export interface ServicePage {
  slug: string;
  title: string;
  shortTitle: string;
  iconName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroDescription: string;
  intro: string[];
  deliverables: string[];
  process: ServiceProcessStep[];
  offers: ServiceOffer[];
  faq: ServiceFaq[];
  relatedProjectSlugs: string[];
  relatedCitySlugs: string[];
}

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((service) => service.slug === slug);
}

export const servicePages: ServicePage[] = [
  {
    slug: "creation-application-mobile",
    title: "Création d'applications mobiles",
    shortTitle: "Applications mobiles",
    iconName: "Smartphone",
    metaTitle:
      "Création d'Application Mobile au Bénin, Développeur Flutter iOS & Android",
    metaDescription:
      "Je développe votre application pour iOS et Android. Nous choisissons les fonctionnalités utiles à vos utilisateurs, puis je vous accompagne jusqu’à sa soumission sur les stores.",
    keywords: [
      "création application mobile Bénin",
      "développement application mobile",
      "développeur Flutter Bénin",
      "application iOS Android Cotonou",
      "prix application mobile Afrique",
      "app mobile entreprise Bénin",
    ],
    heroDescription:
      "Je développe votre application pour iOS et Android. Nous choisissons les fonctionnalités utiles à vos utilisateurs, puis je vous accompagne jusqu’à sa soumission sur les stores.",
    intro: [
      "Vous avez une idée de service sur téléphone, ou un outil à mettre entre les mains de votre équipe ? Je commence par comprendre qui va l’utiliser et dans quelles situations. Nous décidons ensuite des écrans et des fonctionnalités à réaliser.",
      "Je travaille avec Flutter pour partager le code entre iOS et Android. Je développe aussi le serveur, les comptes utilisateurs et les connexions nécessaires à votre application : vous échangez avec moi sur l’ensemble du projet.",
      "Si votre application doit fonctionner sans réseau, accepter des paiements Mobile Money ou communiquer avec des équipements, nous le prévoyons dès le début. Ces besoins influencent le budget et la façon dont je la construis.",
    ],
    deliverables: [
      "Application iOS + Android à partir d'un seul code Flutter",
      "Backend complet : API, base de données, authentification",
      "Mode hors-ligne avec synchronisation automatique",
      "Paiements intégrés : MTN MoMo, Moov Money, Celtiis Cash, carte bancaire",
      "Publication sur l'App Store et Google Play",
      "Formation à la prise en main et documentation",
    ],
    process: [
      {
        title: "Cadrage du besoin",
        description:
          "Nous discutons de votre idée, de vos utilisateurs et de votre budget. Je vous propose une première version réalisable.",
      },
      {
        title: "Maquettes & validation",
        description:
          "Je prépare les écrans et vous montre les parcours. Vos retours nous permettent d’ajuster avant de développer.",
      },
      {
        title: "Développement itératif",
        description:
          "Je développe l’application et son serveur. Je vous montre les nouvelles fonctions au fur et à mesure pour que vous les essayiez et me disiez ce qui doit changer.",
      },
      {
        title: "Tests & publication",
        description:
          "Je vérifie les parcours importants, les paiements et le comportement de l’application lorsque la connexion est limitée.",
      },
      {
        title: "Suivi post-lancement",
        description:
          "Je prépare la soumission aux stores avec vous. La validation finale revient à Apple et Google ; je vous accompagne dans les ajustements demandés.",
      },
    ],
    faq: [
      {
        question: "Combien coûte le développement d'une application mobile ?",
        answer:
          "Mes applications mobiles démarrent à 900 000 FCFA. Le budget dépend des écrans, des comptes utilisateurs et des fonctions à développer. Vous trouverez mes fourchettes sur la page Tarifs ; après notre échange, je vous prépare un devis adapté à votre projet.",
      },
      {
        question: "Pourquoi Flutter plutôt qu'un développement natif ?",
        answer:
          "Flutter me permet de partager une grande partie du code entre iOS et Android. Cela évite de développer deux applications séparées. Si votre projet demande des fonctions très spécifiques à un téléphone, je les examine avec vous avant de retenir cette approche.",
      },
      {
        question: "L'application fonctionnera-t-elle sans connexion internet ?",
        answer:
          "Oui, nous pouvons le prévoir. Je garde alors les données sur le téléphone et j’organise leur synchronisation au retour du réseau. Nous décidons aussi de ce qui reste disponible hors ligne et de ce qui nécessite une connexion.",
      },
      {
        question: "Qui s'occupe de la publication sur les stores ?",
        answer:
          "Je vous accompagne pour préparer les fiches, les captures et la soumission sur vos comptes développeur. Je suis les retours d’Apple et de Google avec vous. Leurs équipes décident de l’approbation et peuvent demander des modifications.",
      },
    ],
    offers: [
      {
        name: "MVP Mobile",
        price: "900 000 FCFA",
        priceNote: "Idéal pour valider une idée",
        description:
          "Je réalise une première version pour que vous puissiez faire essayer votre idée : les fonctions principales, les comptes et les écrans nécessaires.",
        features: [
          "iOS + Android (Flutter)",
          "Fonctionnalité principale complète",
          "Authentification des utilisateurs",
          "Backend et base de données",
          "Publication sur les stores",
        ],
      },
      {
        name: "Business",
        price: "1 500 000 FCFA",
        priceNote: "Le choix de la plupart des entreprises",
        description:
          "Je développe une application avec les paiements, les notifications et le fonctionnement hors ligne prévus dans votre projet.",
        features: [
          "Tout le MVP Mobile, plus :",
          "Paiement MTN MoMo, Moov Money, Celtiis Cash et carte bancaire",
          "Mode hors-ligne avec synchronisation",
          "Notifications push",
          "Tableau de bord d'administration",
          "Formation de vos équipes",
        ],
        recommended: true,
      },
      {
        name: "Plateforme",
        price: "2 500 000 FCFA et +",
        priceNote: "Sur devis selon le périmètre",
        description:
          "Je construis votre application pour plusieurs profils d’utilisateurs, avec les échanges de données et les connexions nécessaires à votre service.",
        features: [
          "Tout Business, plus :",
          "Multi-rôles (clients, vendeurs, admins…)",
          "Fonctionnalités temps réel",
          "Intégrations sur-mesure (IoT, SMS, cartographie…)",
          "Monitoring et analytics avancés",
          "Accompagnement post-lancement étendu",
        ],
      },
    ],
    relatedProjectSlugs: ["afcom", "afreel", "smartvilla"],
    relatedCitySlugs: ["cotonou", "abomey-calavi", "parakou"],
  },
  {
    slug: "creation-ecommerce",
    title: "Création de sites e-commerce",
    shortTitle: "E-commerce",
    iconName: "ShoppingCart",
    metaTitle:
      "Création de Site E-commerce au Bénin, Boutique en Ligne avec Mobile Money",
    metaDescription:
      "Je crée votre boutique en ligne pour que vos clients puissent choisir leurs produits, commander et payer. Vous gardez la main sur votre catalogue et vos commandes.",
    keywords: [
      "création site e-commerce Bénin",
      "boutique en ligne Cotonou",
      "vendre en ligne Bénin",
      "e-commerce Mobile Money",
      "site de vente en ligne Afrique",
      "boutique FedaPay",
    ],
    heroDescription:
      "Je crée votre boutique en ligne pour que vos clients puissent choisir leurs produits, commander et payer. Vous gardez la main sur votre catalogue et vos commandes.",
    intro: [
      "Vous vendez déjà par téléphone ou sur WhatsApp ? Quand les commandes se multiplient, retrouver un paiement, vérifier un stock ou suivre une livraison peut devenir compliqué. Je vous aide à réunir ces tâches dans votre boutique.",
      "Nous préparons le catalogue, les moyens de paiement et les options de livraison avant le développement. Je tiens compte de la façon dont vos clients achètent et de la manière dont vous traitez les commandes.",
      "À la livraison, je vous montre comment ajouter vos produits, modifier vos prix et suivre les commandes. Vos comptes de paiement restent les vôtres : je m’occupe de leur connexion à la boutique.",
    ],
    deliverables: [
      "Boutique en ligne complète, rapide et mobile-first",
      "Paiements : MTN MoMo, Moov Money, Celtiis Cash, carte bancaire",
      "Back-office : stocks, commandes, clients, promotions",
      "Organisation de la livraison locale et notifications client",
      "SEO produits : données structurées, résultats enrichis Google",
      "Formation complète à la gestion de la boutique",
    ],
    process: [
      {
        title: "Analyse de l'offre",
        description:
          "Nous passons en revue vos produits, vos clients et votre organisation pour les commandes et les livraisons.",
      },
      {
        title: "Design du parcours d'achat",
        description:
          "Je prépare les pages produits et le parcours de commande. Nous les ajustons ensemble.",
      },
      {
        title: "Développement & intégrations",
        description:
          "Je développe le catalogue, le panier et l’espace qui vous permet de gérer la boutique.",
      },
      {
        title: "Tests de bout en bout",
        description:
          "Je connecte les paiements et les options de livraison convenus, puis je vérifie les commandes de test.",
      },
      {
        title: "Lancement & suivi",
        description:
          "Je mets la boutique en ligne et je vous montre comment la gérer au quotidien.",
      },
    ],
    faq: [
      {
        question: "Quels moyens de paiement puis-je proposer à mes clients ?",
        answer:
          "Je peux intégrer le Mobile Money et le paiement par carte selon les services disponibles pour votre compte. Nous vérifions les moyens acceptés, les frais et les reversements avant de choisir le prestataire. Les fonds sont versés sur vos comptes.",
      },
      {
        question:
          "Comment gérer la livraison à Cotonou et à l'intérieur du pays ?",
        answer:
          "Nous pouvons définir des frais par zone, prévoir un retrait en boutique et informer vos clients de l’avancement de leur commande. Si vous travaillez déjà avec un livreur, je regarde avec vous comment l’intégrer.",
      },
      {
        question: "Combien coûte une boutique en ligne ?",
        answer:
          "Mes boutiques démarrent à 500 000 FCFA. Le nombre de produits, les règles de livraison et les fonctions de gestion font varier le budget. Je vous prépare un devis après avoir regardé votre organisation avec vous.",
      },
      {
        question: "Pourrai-je gérer la boutique moi-même au quotidien ?",
        answer:
          "Oui. Je vous donne un espace pour ajouter des produits, modifier les prix et suivre les commandes. Je vous montre comment l’utiliser à la livraison et je vous remets les guides prévus dans le projet.",
      },
    ],
    offers: [
      {
        name: "Boutique Essentielle",
        price: "500 000 FCFA",
        priceNote: "Pour démarrer la vente en ligne",
        description:
          "Je mets en place votre catalogue, les commandes et un premier moyen de paiement pour démarrer la vente en ligne.",
        features: [
          "Catalogue jusqu'à ~50 produits",
          "Paiement MTN MoMo, Moov Money, Celtiis Cash",
          "Gestion des commandes",
          "Design mobile-first",
          "Formation à la gestion",
        ],
      },
      {
        name: "Boutique Pro",
        price: "800 000 FCFA",
        priceNote: "Le choix des marchands sérieux",
        description:
          "J’ajoute les moyens de paiement, les livraisons par zone et les promotions dont votre boutique a besoin.",
        features: [
          "Tout l'Essentielle, plus :",
          "Catalogue étendu + variantes produits",
          "MTN MoMo + Moov + carte bancaire",
          "Livraison par zones + notifications client",
          "Codes promo et remises",
          "SEO produits (résultats enrichis Google)",
        ],
        recommended: true,
      },
      {
        name: "Marketplace / Sur-mesure",
        price: "1 200 000 FCFA et +",
        priceNote: "Sur devis selon le modèle",
        description:
          "Vous avez plusieurs vendeurs ou des règles de vente particulières ? Nous définissons ensemble la plateforme à construire.",
        features: [
          "Tout Pro, plus :",
          "Multi-vendeurs avec commissions",
          "Abonnements et achats récurrents",
          "Application mobile compagnon",
          "Intégrations logistiques avancées",
          "Organisation du code pour les évolutions",
        ],
      },
    ],
    relatedProjectSlugs: ["afcom", "archiform"],
    relatedCitySlugs: ["cotonou", "porto-novo", "parakou"],
  },
  {
    slug: "creation-site-vitrine",
    title: "Création de sites vitrines",
    shortTitle: "Site vitrine",
    iconName: "Globe",
    metaTitle:
      "Création de Site Web au Bénin, Site Vitrine Professionnel et Bien Référencé",
    metaDescription:
      "Je crée votre site pour présenter votre activité, répondre aux questions de vos visiteurs et leur donner envie de vous contacter.",
    keywords: [
      "création site web Bénin",
      "site vitrine Cotonou",
      "création site internet Bénin",
      "site professionnel entreprise",
      "prix site vitrine Bénin",
      "créer site web entreprise Cotonou",
    ],
    heroDescription:
      "Je crée votre site pour présenter votre activité, répondre aux questions de vos visiteurs et leur donner envie de vous contacter.",
    intro: [
      "Quand quelqu’un cherche votre entreprise, il doit pouvoir comprendre ce que vous proposez et comment vous joindre. Je vous aide à rassembler ces informations dans un site clair, utilisable sur téléphone.",
      "Nous choisissons les pages, les textes et les images qui expliquent le mieux votre activité. Je prends ensuite en charge leur présentation et les bases techniques du référencement.",
      "Si vous souhaitez publier des actualités ou modifier les contenus vous-même, nous prévoyons un espace de gestion. Je vous explique son fonctionnement à la livraison.",
    ],
    deliverables: [
      "Site sur-mesure, responsive et rapide (pas de template)",
      "Référencement (SEO) technique intégré dès la conception",
      "Textes structurés pour convertir et ranker",
      "Formulaire de contact et liens WhatsApp",
      "Nom de domaine, hébergement et emails professionnels configurés",
      "Formation à la mise à jour du contenu",
    ],
    process: [
      {
        title: "Brief & stratégie",
        description:
          "Nous décidons des pages et des informations dont vos visiteurs ont besoin.",
      },
      {
        title: "Maquette & contenu",
        description:
          "Je prépare la présentation du site et nous ajustons les textes et les images.",
      },
      {
        title: "Développement",
        description:
          "Je développe les pages et les formulaires, avec un affichage adapté au téléphone.",
      },
      {
        title: "Mise en ligne & indexation",
        description:
          "Je vérifie les liens, les formulaires et les éléments nécessaires à l’exploration par les moteurs de recherche.",
      },
      {
        title: "Accompagnement",
        description:
          "Je mets le site en ligne et je vous montre comment modifier les contenus prévus dans la formule.",
      },
    ],
    offers: [
      {
        name: "Vitrine Essentielle",
        price: "170 000 FCFA",
        priceNote: "En ligne en 2 à 3 semaines",
        description:
          "Je réalise les pages essentielles pour présenter votre activité et permettre la prise de contact.",
        features: [
          "3 à 5 pages sur-mesure",
          "Design responsive soigné",
          "SEO technique de base",
          "Formulaire de contact",
          "Domaine + hébergement configurés",
        ],
      },
      {
        name: "Vitrine Croissance",
        price: "300 000 FCFA",
        priceNote: "Le meilleur rapport visibilité/prix",
        description:
          "Je prépare un site avec davantage de pages et un blog pour vous permettre de développer vos contenus.",
        features: [
          "Tout l'Essentielle, plus :",
          "6 à 10 pages optimisées",
          "Blog avec CMS (contenu autonome)",
          "SEO avancé + données structurées",
          "Analytics et suivi des conversions",
          "Optimisation vitesse poussée",
        ],
        recommended: true,
      },
      {
        name: "Vitrine Premium",
        price: "450 000 FCFA et +",
        priceNote: "Sur devis selon les besoins",
        description:
          "Je réalise un site bilingue avec une présentation et des pages adaptées aux publics que vous souhaitez toucher.",
        features: [
          "Tout Croissance, plus :",
          "Version bilingue français-anglais",
          "Animations et direction artistique",
          "Pages SEO locales par ville",
          "Réservation ou prise de rendez-vous en ligne",
          "Accompagnement SEO sur 3 mois",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte un site vitrine professionnel ?",
        answer:
          "Mes sites de présentation démarrent à 170 000 FCFA. Le prix varie avec le nombre de pages, les contenus à préparer et l’espace de gestion souhaité. Nous en discutons avant que je vous prépare le devis.",
      },
      {
        question: "Mon site sera-t-il visible sur Google ?",
        answer:
          "Je prépare votre site pour que Google puisse explorer et comprendre ses pages : titres, contenu, liens, sitemap et vitesse d’affichage. La position dans les résultats dépend aussi de votre contenu et de la concurrence ; je ne vous promets pas une place précise.",
      },
      {
        question: "Pourrai-je modifier le contenu moi-même ?",
        answer:
          "Oui, si nous prévoyons un espace de gestion. Vous pourrez alors modifier les textes, les images et les actualités concernés sans intervenir dans le code. Je vous montre comment faire.",
      },
      {
        question: "Refaites-vous les sites existants ?",
        answer:
          "Oui. Je commence par regarder ce qui fonctionne sur votre site et ce qui vous gêne. Nous décidons ensuite des changements, de la reprise des contenus et des redirections nécessaires.",
      },
    ],
    relatedProjectSlugs: ["gain", "archiform"],
    relatedCitySlugs: ["cotonou", "ouidah", "porto-novo"],
  },
  {
    slug: "creation-application-web",
    title: "Applications web & logiciels métier",
    shortTitle: "Applications web",
    iconName: "Briefcase",
    metaTitle:
      "Application Web Sur-Mesure au Bénin, Logiciels Métier & Plateformes",
    metaDescription:
      "Je développe votre logiciel web pour que vos équipes puissent travailler au même endroit : clients, stocks, factures, réservations ou dossiers à suivre.",
    keywords: [
      "application web sur mesure",
      "logiciel métier Bénin",
      "logiciel de gestion entreprise",
      "digitalisation entreprise Bénin",
      "espace client en ligne",
      "plateforme web Afrique",
    ],
    heroDescription:
      "Je développe votre logiciel web pour que vos équipes puissent travailler au même endroit : clients, stocks, factures, réservations ou dossiers à suivre.",
    intro: [
      "Vous passez d’un fichier à l’autre pour retrouver une commande, préparer une facture ou suivre un dossier ? Je peux réunir ces tâches dans un logiciel que votre équipe utilise depuis son navigateur.",
      "Avant de développer, vous me montrez comment vous travaillez. Nous décidons de ce que chaque personne doit voir, des informations à conserver et des étapes à simplifier. Je vous présente ensuite les premiers écrans.",
      "Je m’occupe de l’interface, des données et du serveur. Si vous avez déjà des fichiers ou un ancien logiciel, nous examinons leur reprise pour conserver l’historique utile.",
    ],
    deliverables: [
      "Analyse de vos processus métier avant toute ligne de code",
      "Application web sur-mesure, simple à prendre en main",
      "Backend et base de données bien architecturés",
      "Gestion des rôles et permissions de vos équipes",
      "Intégrations : paiement Mobile Money, SMS, outils existants",
      "Formation complète et documentation",
    ],
    process: [
      {
        title: "Immersion métier",
        description:
          "Vous me présentez vos tâches et vos outils actuels. Je vous aide à choisir ce que le logiciel doit gérer en premier.",
      },
      {
        title: "Spécifications & maquettes",
        description:
          "Je prépare les écrans et les droits d’accès. Vos équipes peuvent me dire si les parcours correspondent à leur travail.",
      },
      {
        title: "Développement itératif",
        description:
          "Je développe les fonctions par étapes pour que vous puissiez les essayer et me faire vos retours.",
      },
      {
        title: "Déploiement & formation",
        description:
          "Nous vérifions les données à reprendre et les cas importants avant d’ouvrir l’outil à votre équipe.",
      },
      {
        title: "Évolutions",
        description:
          "Je mets le logiciel en ligne, je vous montre comment l’utiliser et nous organisons son suivi.",
      },
    ],
    offers: [
      {
        name: "Outil Essentiel",
        price: "650 000 FCFA",
        priceNote: "Un processus clé digitalisé",
        description:
          "Je développe un premier outil pour une tâche précise : suivre vos stocks, préparer vos factures ou gérer vos réservations.",
        features: [
          "Analyse du processus concerné",
          "Application web sur-mesure",
          "Backend et base de données",
          "Comptes utilisateurs et rôles simples",
          "Formation à la prise en main",
        ],
      },
      {
        name: "Business",
        price: "1 300 000 FCFA",
        priceNote: "Le choix des PME en croissance",
        description:
          "Je relie plusieurs tâches de votre activité dans le même logiciel, avec les tableaux de bord et les intégrations prévus.",
        features: [
          "Tout l'Essentiel, plus :",
          "Plusieurs modules métier connectés",
          "Intégrations Mobile Money / SMS / email",
          "Tableaux de bord et exports",
          "Rôles et permissions avancés",
          "Reprise de vos données existantes",
        ],
        recommended: true,
      },
      {
        name: "Plateforme",
        price: "2 000 000 FCFA et +",
        priceNote: "Sur devis selon le périmètre",
        description:
          "Je construis votre plateforme pour plusieurs équipes ou sites, avec des espaces clients et les automatisations nécessaires.",
        features: [
          "Tout Business, plus :",
          "Espace client / portail externe",
          "Multi-agences ou multi-sites",
          "Automatisations et notifications avancées",
          "API pour vos partenaires",
          "Accompagnement continu",
        ],
      },
    ],
    faq: [
      {
        question:
          "Pourquoi un logiciel sur-mesure plutôt qu'Excel ou un logiciel générique ?",
        answer:
          "Le sur-mesure devient utile lorsque vos outils actuels vous obligent à ressaisir des données, à contourner leurs limites ou à multiplier les fichiers. Si un logiciel existant répond déjà à votre besoin, je vous le dirai. Nous regardons d’abord ce qui vous manque.",
      },
      {
        question:
          "Mes équipes ne sont pas très à l'aise avec l'informatique, est-ce bloquant ?",
        answer:
          "Non. Vous me montrez comment vos équipes travaillent et je prépare des écrans qu’elles peuvent essayer. Leurs retours servent à simplifier les parcours. Je prévois aussi la prise en main à la livraison.",
      },
      {
        question:
          "Pouvez-vous reprendre nos données existantes (Excel, ancien logiciel) ?",
        answer:
          "Montrez-moi vos fichiers ou votre outil actuel. Je regarde les données à reprendre, les doublons et les informations manquantes, puis je vous explique comment les importer et ce que ce travail coûte.",
      },
      {
        question: "L'outil pourra-t-il évoluer après la livraison ?",
        answer:
          "Oui. Nous pouvons ajouter de nouveaux modules, des accès ou des connexions après la livraison. Je vous aide à préparer ces évolutions ; leur budget dépendra du travail à réaliser.",
      },
    ],
    relatedProjectSlugs: ["weman-lms", "archiform"],
    relatedCitySlugs: ["cotonou", "bohicon", "parakou"],
  },
  {
    slug: "creation-saas-dashboard",
    title: "Création de SaaS & dashboards",
    shortTitle: "SaaS & dashboards",
    iconName: "LayoutDashboard",
    metaTitle:
      "Développement SaaS & Dashboard, Du MVP au Produit Scalable | Bénin",
    metaDescription:
      "Vous souhaitez lancer un logiciel en ligne ? Je vous aide à construire une première version que vos clients pourront utiliser, puis à la faire évoluer.",
    keywords: [
      "développement SaaS Afrique",
      "création MVP startup",
      "dashboard sur mesure",
      "développeur SaaS Bénin",
      "plateforme multi-tenant",
      "tableau de bord analytics",
    ],
    heroDescription:
      "Vous souhaitez lancer un logiciel en ligne ? Je vous aide à construire une première version que vos clients pourront utiliser, puis à la faire évoluer.",
    intro: [
      "Vous avez une idée de logiciel par abonnement ? Nous commençons par le service qu’il doit rendre et les personnes qui l’utiliseront. Je vous aide à choisir ce qui est nécessaire pour le lancer.",
      "Je développe les comptes, les accès, les abonnements et les fonctions principales. Si plusieurs entreprises utilisent le même logiciel, je prévois la séparation de leurs données.",
      "Vos premiers utilisateurs vous donneront des retours que nous ne pouvons pas deviner à l’avance. Nous gardons donc une liste d’évolutions et décidons des prochaines étapes à partir de leurs usages.",
    ],
    deliverables: [
      "Architecture sécurisée pour plusieurs organisations",
      "Authentification, rôles et permissions",
      "Facturation par abonnement (Stripe, FedaPay)",
      "Dashboard avec visualisations et analytics",
      "API documentée et design system complet",
      "Monitoring, logs et alertes en production",
    ],
    process: [
      {
        title: "Vision produit",
        description:
          "Qui va utiliser votre logiciel, et pour faire quoi ? Nous choisissons les premières fonctions autour de ces usages, pour que vous puissiez faire essayer une version utile sans tout développer d’un coup.",
      },
      {
        title: "Architecture",
        description:
          "Je prépare les écrans, les données et les règles d’accès, puis je vous explique les choix techniques.",
      },
      {
        title: "Sprints de développement",
        description:
          "Je développe par étapes et je vous donne accès aux versions de démonstration pour recueillir vos retours.",
      },
      {
        title: "Lancement",
        description:
          "Je prépare la mise en ligne, les paiements et le suivi des erreurs avec vous.",
      },
      {
        title: "Itérations",
        description:
          "Nous examinons les retours des utilisateurs pour choisir les prochaines améliorations.",
      },
    ],
    faq: [
      {
        question: "Combien de temps pour développer un MVP ?",
        answer:
          "Ma fourchette pour un SaaS est de 6 à 10 semaines, selon les fonctions à réaliser. Une première version limitée peut demander moins de temps. Nous fixons le calendrier après avoir décidé de ce qui doit être prêt au lancement.",
      },
      {
        question: "Pouvez-vous reprendre un SaaS existant ?",
        answer:
          "Oui. Je regarde le code, les données et les problèmes que vous rencontrez. Je vous propose ensuite les corrections et les évolutions à réaliser, avec les éventuelles étapes de migration.",
      },
      {
        question: "Comment gérez-vous les paiements récurrents ?",
        answer:
          "Vos clients paient chaque mois ou renouvellent eux-mêmes leur abonnement ? Je vérifie que le prestataire gère le fonctionnement souhaité, puis je prévois les factures et les paiements qui échouent. La carte et le Mobile Money ne proposent pas toujours les mêmes possibilités : je vous explique les options avant de choisir.",
      },
      {
        question: "Le produit m'appartiendra-t-il entièrement ?",
        answer:
          "Je vous remets le code développé pour votre projet, les données et les accès prévus dans le devis. Les outils et services externes gardent leurs licences et leurs conditions ; je vous indique ceux que votre logiciel utilise.",
      },
    ],
    offers: [
      {
        name: "MVP",
        price: "1 200 000 FCFA",
        priceNote: "Calendrier fixé après notre échange",
        description:
          "Je réalise les fonctions principales pour que vous puissiez proposer votre service à de premiers utilisateurs.",
        features: [
          "Fonctions choisies pour le lancement",
          "Authentification et comptes",
          "Fonctionnalité cœur complète",
          "Paiement (un plan d'abonnement)",
          "Base technique prête à évoluer",
        ],
      },
      {
        name: "Startup",
        price: "2 000 000 FCFA",
        priceNote: "Pour préparer le lancement",
        description:
          "Je prépare votre logiciel pour plusieurs clients, avec les abonnements, les tableaux de bord et les étapes de prise en main convenus.",
        features: [
          "Tout le MVP, plus :",
          "Espaces séparés pour vos clients",
          "Plans et facturation récurrente",
          "Tableau de bord et suivi de l’activité",
          "Prise en main guidée pour vos utilisateurs",
          "Monitoring en production",
        ],
        recommended: true,
      },
      {
        name: "Scale",
        price: "4 000 000 FCFA et +",
        priceNote: "Selon les fonctions à réaliser",
        description:
          "Je vous accompagne pour ajouter les accès, les API et les capacités nécessaires à une utilisation plus importante.",
        features: [
          "Tout Startup, plus :",
          "API publique documentée",
          "Rôles et permissions avancés",
          "Optimisations de montée en charge",
          "Intégrations entreprises",
          "Accompagnement produit continu",
        ],
      },
    ],
    relatedProjectSlugs: ["weman-lms", "fintech"],
    relatedCitySlugs: ["cotonou", "seme-podji", "abomey-calavi"],
  },
  {
    slug: "backend-api",
    title: "Backend & API",
    shortTitle: "Backend & API",
    iconName: "Code",
    metaTitle:
      "Développement Backend & API, Architecture Robuste et Scalable | Bénin",
    metaDescription:
      "Je développe le serveur et les API de votre application : comptes, données, paiements et échanges avec vos autres outils.",
    keywords: [
      "développement backend",
      "création API REST",
      "développeur backend Bénin",
      "architecture base de données",
      "intégration API Mobile Money",
      "backend Node.js",
    ],
    heroDescription:
      "Je développe le serveur et les API de votre application : comptes, données, paiements et échanges avec vos autres outils.",
    intro: [
      "Votre application a besoin de conserver des données, de reconnaître ses utilisateurs et de traiter leurs demandes. Je construis cette partie serveur pour qu’elle corresponde à vos fonctions métier.",
      "Qui utilise votre application ? Quelles informations doit-elle conserver et qui a le droit de les modifier ? Je pars de ces questions pour développer les échanges entre vos écrans et le serveur. Je documente aussi les API pour faciliter la suite du projet.",
      "Je peux aussi intervenir sur un serveur existant. Vous me montrez les problèmes rencontrés ; j’examine le code et je vous propose les changements à réaliser avec votre équipe.",
    ],
    deliverables: [
      "API REST structurée, versionnée et documentée",
      "Base de données modélisée et optimisée (PostgreSQL)",
      "Authentification et gestion fine des permissions",
      "Jobs asynchrones : emails, notifications, synchronisations",
      "Intégrations : Mobile Money, SMS, services tiers",
      "Tests, monitoring et documentation technique complète",
    ],
    process: [
      {
        title: "Audit du besoin",
        description:
          "Nous passons en revue les données, les accès et les échanges nécessaires à votre application.",
      },
      {
        title: "Modélisation",
        description:
          "Je prépare la structure des données et les réponses attendues de l’API avec votre équipe.",
      },
      {
        title: "Développement & tests",
        description:
          "Je développe les traitements et je vérifie les parcours sensibles, notamment les comptes et les paiements.",
      },
      {
        title: "Mise en production",
        description:
          "Je mets le serveur en ligne et je vous remets la documentation pour son utilisation et sa maintenance.",
      },
    ],
    faq: [
      {
        question: "Mon application existante peut-elle garder son frontend ?",
        answer:
          "Oui, si votre interface peut communiquer avec les nouvelles API. Je vérifie les échanges existants et je prépare la transition avec votre équipe. Nous décidons aussi de la manière de reprendre les données et des éventuelles interruptions à prévoir.",
      },
      {
        question:
          "Comment intégrez-vous les paiements Mobile Money côté serveur ?",
        answer:
          "Je connecte les API du prestataire retenu et je vérifie les confirmations reçues côté serveur. Je prévois le traitement des erreurs et des notifications répétées pour éviter de comptabiliser plusieurs fois le même paiement.",
      },
      {
        question: "Le backend tiendra-t-il si mon activité grandit ?",
        answer:
          "Je tiens compte des volumes attendus pour choisir la structure des données et les traitements. Si l’usage augmente, nous suivons les performances et ajustons les ressources ou le code selon les mesures.",
      },
      {
        question: "Livrez-vous la documentation technique ?",
        answer:
          "Oui. Je vous remets la documentation des API, les informations sur les données et les étapes de mise en ligne prévues dans le projet. Votre équipe peut ainsi comprendre et reprendre mon travail.",
      },
    ],
    offers: [
      {
        name: "API Essentielle",
        price: "300 000 FCFA",
        priceNote: "Les premières fonctions de votre serveur",
        description:
          "Je développe les API, les comptes et les données nécessaires aux premières fonctions de votre application.",
        features: [
          "API REST structurée",
          "Base de données modélisée (PostgreSQL)",
          "Authentification sécurisée",
          "Documentation d'API",
          "Déploiement configuré",
        ],
      },
      {
        name: "API Business",
        price: "650 000 FCFA",
        priceNote: "Avec les intégrations prévues",
        description:
          "Je prends en charge les paiements, les tâches automatiques et le suivi des erreurs prévus pour votre serveur.",
        features: [
          "Tout l'Essentielle, plus :",
          "Intégrations Mobile Money / FedaPay / SMS",
          "Jobs asynchrones (emails, rappels, synchro)",
          "Tests automatisés des chemins critiques",
          "Monitoring, logs et alertes",
          "Gestion fine des permissions",
        ],
        recommended: true,
      },
      {
        name: "Architecture Complète",
        price: "1 200 000 FCFA et +",
        priceNote: "Sur devis, création ou reprise",
        description:
          "Nous préparons un serveur pour des besoins plus importants, ou la reprise d’un système existant avec votre équipe.",
        features: [
          "Tout Business, plus :",
          "Architecture haute charge (cache, queues)",
          "Audit et reprise d'un backend existant",
          "Migration de données organisée",
          "Documentation d'architecture complète",
          "Accompagnement de votre équipe",
        ],
      },
    ],
    relatedProjectSlugs: ["weman-lms", "smartvilla", "iveges"],
    relatedCitySlugs: ["cotonou", "abomey-calavi", "seme-podji"],
  },
  {
    slug: "audit-optimisation",
    title: "Audit, refonte & optimisation",
    shortTitle: "Audit & optimisation",
    iconName: "Award",
    metaTitle:
      "Audit Technique & Optimisation de Site Web, Performance et SEO | Bénin",
    metaDescription:
      "Votre site ou votre application est lent, instable ou difficile à modifier ? Je regarde ce qui bloque et je vous explique comment le corriger.",
    keywords: [
      "audit site web",
      "optimisation performance web",
      "refonte site web Bénin",
      "site lent solution",
      "améliorer référencement Google",
      "audit technique application",
    ],
    heroDescription:
      "Votre site ou votre application est lent, instable ou difficile à modifier ? Je regarde ce qui bloque et je vous explique comment le corriger.",
    intro: [
      "Vous avez déjà un site ou une application, mais il ne fonctionne pas comme vous l’attendez ? Avant de vous proposer de tout refaire, je prends le temps de comprendre les problèmes.",
      "Je vérifie les temps de chargement, les pages publiques, le code et les parcours des utilisateurs. Vous recevez un rapport qui indique ce que j’ai trouvé, les corrections proposées et leur coût.",
      "Vous pouvez me confier ces corrections ou transmettre le rapport à votre équipe. Si une refonte paraît plus adaptée, je vous explique pourquoi et comment reprendre vos contenus et vos données.",
    ],
    deliverables: [
      "Rapport d'audit clair et hiérarchisé (performance, SEO, code, UX)",
      "Plan d'action chiffré : impact et coût de chaque correction",
      "Optimisation Core Web Vitals et temps de chargement",
      "Mise à niveau SEO : structure, balises, données structurées",
      "Refonte avec migration du contenu et redirections propres",
      "Mesures avant/après pour constater le gain",
    ],
    process: [
      {
        title: "Audit complet",
        description:
          "Vous me décrivez les problèmes rencontrés. J’examine ensuite le site, ses parcours et le code auquel vous me donnez accès.",
      },
      {
        title: "Restitution",
        description:
          "Je vous présente les résultats et les corrections proposées, en expliquant ce qui est urgent et ce qui peut attendre.",
      },
      {
        title: "Corrections priorisées",
        description:
          "Si vous me confiez la suite, je réalise les corrections dans l’ordre convenu avec vous.",
      },
      {
        title: "Mesure & suivi",
        description:
          "Je compare les mesures avant et après les changements et je vous explique ce qui a progressé.",
      },
    ],
    faq: [
      {
        question:
          "Mon site est lent, pouvez-vous le diagnostiquer sans le refaire ?",
        answer:
          "Oui. Je regarde les images, les scripts, le serveur et les pages concernées pour comprendre la lenteur. Certaines corrections suffisent sans refonte ; je vous indique celles qui s’appliquent à votre site.",
      },
      {
        question: "Une refonte va-t-elle me faire perdre mon référencement ?",
        answer:
          "Je conserve les contenus utiles et je redirige les anciennes adresses vers les bonnes pages pour limiter les pertes. Après la mise en ligne, je vérifie que Google retrouve les pages et je surveille les changements d’indexation. Les positions peuvent évoluer : ce suivi permet de repérer les problèmes à corriger.",
      },
      {
        question:
          "Pouvez-vous auditer une application développée par quelqu'un d'autre ?",
        answer:
          "Oui. Je peux examiner une application existante si vous disposez des accès et du code nécessaires. Je vous explique ce qui mérite d’être conservé, corrigé ou repris.",
      },
      {
        question: "L'audit m'engage-t-il à vous confier les corrections ?",
        answer:
          "Non. Je vous remets le rapport pour que vous puissiez décider de la suite, avec moi ou avec un autre développeur. Si vous me confiez les corrections, le coût de l’audit est déduit selon les conditions du devis.",
      },
    ],
    offers: [
      {
        name: "Audit Express",
        price: "80 000 FCFA",
        priceNote: "Rapport sous 5 jours",
        description:
          "Je vérifie la vitesse et le référencement de votre site et je vous remets les corrections à faire en premier.",
        features: [
          "Audit performance (Core Web Vitals)",
          "Audit SEO et indexation",
          "Rapport clair et hiérarchisé",
          "Recommandations prioritaires",
        ],
      },
      {
        name: "Audit Complet",
        price: "160 000 FCFA",
        priceNote: "Déduit si je réalise les corrections",
        description:
          "J’examine aussi le code, la sécurité et les parcours de vos utilisateurs, puis je vous présente un plan de corrections chiffré.",
        features: [
          "Tout l'Express, plus :",
          "Revue du code et de la maintenabilité",
          "Audit sécurité",
          "Analyse des parcours utilisateurs",
          "Plan d'action chiffré poste par poste",
          "Restitution en visio ou présentiel",
        ],
        recommended: true,
      },
      {
        name: "Audit + Corrections",
        price: "300 000 FCFA et +",
        priceNote: "Sur devis selon les chantiers",
        description:
          "Après l’audit, je réalise les corrections convenues et je vous montre les mesures avant et après.",
        features: [
          "Tout le Complet, plus :",
          "Correction des points critiques",
          "Optimisation vitesse mise en œuvre",
          "Mise à niveau SEO exécutée",
          "Mesures avant/après documentées",
          "Suivi sur les semaines suivantes",
        ],
      },
    ],
    relatedProjectSlugs: ["gain", "archiform"],
    relatedCitySlugs: ["cotonou", "porto-novo", "abomey-calavi"],
  },
];
