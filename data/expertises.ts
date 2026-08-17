// Pages expertise par technologie — cible les recherches « développeur {tech} Bénin ».
// Comme pour les villes : contenu unique par techno, pas de template rempli.

export interface ExpertiseFaq {
  question: string;
  answer: string;
}

export interface ExpertiseStrength {
  title: string;
  description: string;
  iconName: string;
}

export interface Expertise {
  slug: string;
  techName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroDescription: string;
  intro: string[];
  strengths: ExpertiseStrength[];
  useCases: string[];
  faq: ExpertiseFaq[];
  relatedProjectSlugs: string[];
  relatedServiceSlug: string;
}

export function getExpertiseBySlug(slug: string): Expertise | undefined {
  return expertises.find((expertise) => expertise.slug === slug);
}

export const expertises: Expertise[] = [
  {
    slug: "developpeur-flutter-benin",
    techName: "Flutter",
    title: "Développeur Flutter au Bénin",
    metaTitle:
      "Développeur Flutter au Bénin, Applications Mobiles iOS & Android",
    metaDescription:
      "Développeur Flutter expérimenté au Bénin : applications iOS et Android à partir d'un seul code, offline-first, Mobile Money intégré. Portfolio et devis sous 24h.",
    keywords: [
      "développeur Flutter Bénin",
      "développeur Flutter Cotonou",
      "expert Flutter Afrique",
      "application Flutter Bénin",
      "freelance Flutter",
      "développeur Dart",
    ],
    heroDescription:
      "Je développe vos applications iOS et Android à partir d'un seul code : plus vite, moins cher, sans compromis sur la qualité.",
    intro: [
      "Flutter est ma technologie mobile de prédilection, et celle avec laquelle j'ai construit la majorité de mes projets : applications de gestion offline-first, domotique temps réel, facturation, fintech. Créé par Google, Flutter permet de développer les versions iOS et Android d'une application à partir d'un seul code, un avantage décisif en coût et en délais.",
      "Ma maîtrise de Flutter va au-delà des interfaces : gestion d'état propre, architecture testable, intégration native quand il le faut (Bluetooth, capteurs, arrière-plan), et une spécialité rare, les applications offline-first qui fonctionnent sans réseau et se synchronisent seules, indispensables sur le terrain africain.",
      "Chaque application Flutter que je livre s'appuie sur un backend que je construis moi-même : vous avez un seul interlocuteur pour l'app et son moteur, et une cohérence technique de bout en bout.",
    ],
    strengths: [
      {
        title: "Un code, deux plateformes",
        description:
          "iOS et Android à partir du même code : 40 à 50 % d'économie par rapport à deux développements natifs, et des évolutions deux fois plus rapides.",
        iconName: "Smartphone",
      },
      {
        title: "Offline-first",
        description:
          "Des apps qui fonctionnent sans connexion et se synchronisent au retour du réseau, conçues pour les réalités du terrain.",
        iconName: "RefreshCw",
      },
      {
        title: "Performances natives",
        description:
          "Flutter compile en code natif : animations à 60 fps, démarrage rapide, fluidité même sur les téléphones d'entrée de gamme.",
        iconName: "Rocket",
      },
      {
        title: "Au-delà du mobile",
        description:
          "Intégrations poussées : Mobile Money, Bluetooth, IoT (MQTT), notifications, j'ai déjà connecté Flutter à des systèmes embarqués complets.",
        iconName: "Code",
      },
    ],
    useCases: [
      "Applications de gestion pour commerces et PME",
      "Apps e-commerce avec paiement Mobile Money",
      "Applications de livraison et de transport",
      "Fintech : facturation, épargne, paiements",
      "Contrôle IoT et domotique en temps réel",
      "Apps de terrain pour ONG et coopératives",
    ],
    faq: [
      {
        question: "Flutter est-il un bon choix pour une application au Bénin ?",
        answer:
          "C'est même le meilleur rapport qualité/coût dans la plupart des cas : un seul développement pour toucher les utilisateurs Android (majoritaires ici) et iOS, d'excellentes performances sur les téléphones d'entrée de gamme, et la possibilité de gérer le mode hors-ligne proprement.",
      },
      {
        question: "Une app Flutter peut-elle intégrer MTN MoMo et Moov Money ?",
        answer:
          "Oui : j'intègre les paiements Mobile Money via FedaPay dans l'application, avec un backend qui sécurise chaque transaction (vérifications, idempotence, journalisation). C'est un besoin que je traite sur la quasi-totalité de mes projets.",
      },
      {
        question: "Qu'avez-vous déjà construit avec Flutter ?",
        answer:
          "Entre autres : AfCom, une app de gestion offline-first pour petits commerçants ; Afreel, une app de facturation pour freelances ; SmartVilla, le contrôle temps réel d'une villa domotisée ; et iVeges, le monitoring d'un système d'irrigation IoT. Les études de cas détaillées sont sur ce site.",
      },
    ],
    relatedProjectSlugs: ["afcom", "smartvilla", "afreel", "iveges"],
    relatedServiceSlug: "creation-application-mobile",
  },
  {
    slug: "developpeur-nextjs-benin",
    techName: "Next.js",
    title: "Développeur Next.js au Bénin",
    metaTitle: "Développeur Next.js au Bénin, Sites Rapides et Bien Référencés",
    metaDescription:
      "Développeur Next.js au Bénin : sites et applications web ultra-rapides, SEO d'excellence, plateformes SaaS et e-commerce. Le framework des produits web exigeants.",
    keywords: [
      "développeur Next.js Bénin",
      "développeur Next.js Afrique",
      "expert Next.js",
      "site Next.js SEO",
      "freelance Next.js Cotonou",
      "application React server",
    ],
    heroDescription:
      "Avec Next.js, je construis des sites rapides, structurés pour le référencement et des applications capables d'évoluer avec leur usage.",
    intro: [
      "Next.js est le framework web que j'utilise pour la quasi-totalité de mes projets web, y compris le site que vous lisez en ce moment. Bâti sur React et adopté par Netflix, TikTok ou Notion, il combine ce qui est habituellement incompatible : la richesse d'une application et la vitesse d'un site statique.",
      "Concrètement, le rendu côté serveur accélère l'affichage du contenu et facilite son exploration par les moteurs de recherche. L'architecture doit ensuite être adaptée au projet, du site vitrine au logiciel en ligne.",
      "Je maîtrise l'écosystème Next.js dans sa profondeur : App Router, génération statique et rendu serveur, server actions, optimisation des Core Web Vitals, intégration de CMS (Sanity, Payload) et déploiement continu. C'est l'outil avec lequel je construis les plateformes les plus ambitieuses de mon portfolio.",
    ],
    strengths: [
      {
        title: "SEO d'excellence",
        description:
          "Rendu serveur et génération statique : Google lit des pages complètes et rapides. Le référencement est structurel, pas rattrapé après coup.",
        iconName: "Search",
      },
      {
        title: "Vitesse réelle",
        description:
          "Des pages qui chargent en moins d'une seconde, même en 3G. La vitesse est un critère de classement Google et de conversion.",
        iconName: "Rocket",
      },
      {
        title: "Du vitrine au SaaS",
        description:
          "La même base technique porte un site de présentation, une boutique ou une plateforme complète : votre investissement grandit sans refonte.",
        iconName: "LayoutDashboard",
      },
      {
        title: "Écosystème moderne",
        description:
          "TypeScript, CMS headless, paiements, analytics : Next.js s'intègre proprement avec les meilleurs outils du web actuel.",
        iconName: "Code",
      },
    ],
    useCases: [
      "Sites professionnels optimisés pour Google",
      "Plateformes SaaS et espaces clients",
      "E-commerce rapide avec paiement local",
      "Sites institutionnels multilingues",
      "Landing pages à forte conversion",
      "Blogs et sites de contenu performants",
    ],
    faq: [
      {
        question: "Pourquoi Next.js plutôt que WordPress ?",
        answer:
          "WordPress convient pour un blog simple, mais montre vite ses limites : lenteur, failles de sécurité, plugins qui se contredisent. Next.js produit des sites plusieurs fois plus rapides, sans surface d'attaque inutile, avec une liberté totale de design et de fonctionnalités. Pour un site d'entreprise qui doit ranker et convertir, ce n'est pas le même niveau.",
      },
      {
        question: "Next.js est-il adapté aux connexions internet locales ?",
        answer:
          "Particulièrement : la génération statique et l'optimisation automatique des images font que les pages restent légères et rapides même en 3G. Ce site même en est la démonstration, testez sa vitesse depuis n'importe quelle ville du Bénin.",
      },
      {
        question: "Pourrai-je gérer mon contenu sans développeur ?",
        answer:
          "Oui : j'intègre un CMS headless (Sanity ou Payload) qui vous donne une interface simple pour modifier textes, images et articles. Le site reste ultra-rapide, et vous êtes autonome au quotidien.",
      },
    ],
    relatedProjectSlugs: ["weman-lms", "gain", "archiform"],
    relatedServiceSlug: "creation-application-web",
  },
  {
    slug: "developpeur-react-benin",
    techName: "React",
    title: "Développeur React au Bénin",
    metaTitle:
      "Développeur React au Bénin, Interfaces Web Modernes et Dashboards",
    metaDescription:
      "Développeur React au Bénin : interfaces web modernes, dashboards, applications métier. TypeScript, design systems et code maintenable. Devis sous 24h.",
    keywords: [
      "développeur React Bénin",
      "développeur React Cotonou",
      "expert React Afrique",
      "développeur TypeScript Bénin",
      "création dashboard React",
      "freelance React",
    ],
    heroDescription:
      "Avec React, je construis les interfaces du web moderne : des applications lisibles, rapides et maintenables.",
    intro: [
      "React est le socle de tout mon travail web : c'est la bibliothèque créée par Meta qui équipe Facebook, Airbnb ou Discord, et le standard de facto des interfaces web modernes. La maîtriser en profondeur, pas seulement l'utiliser, fait la différence entre une application fluide et maintenable et un chantier fragile.",
      "Mon quotidien avec React : TypeScript systématique pour attraper les erreurs avant la production, composants réutilisables organisés en design system, gestion d'état adaptée à la complexité réelle du projet, et une attention constante à la performance perçue, ce que l'utilisateur ressent, pas ce que la machine mesure.",
      "C'est l'outil idéal pour les dashboards et applications métier : données en temps réel, tableaux et graphiques réactifs, formulaires complexes qui restent agréables. Si votre équipe a déjà du React, je m'intègre aussi en renfort sur un code existant.",
    ],
    strengths: [
      {
        title: "Interfaces réactives",
        description:
          "Données en temps réel, interactions instantanées, mises à jour sans rechargement : l'expérience d'une application native, dans le navigateur.",
        iconName: "LayoutDashboard",
      },
      {
        title: "TypeScript systématique",
        description:
          "Un typage strict de bout en bout : les erreurs sont attrapées à l'écriture du code, pas signalées par vos utilisateurs.",
        iconName: "Code",
      },
      {
        title: "Design systems",
        description:
          "Des composants cohérents et réutilisables : chaque nouvelle fonctionnalité coûte moins cher que la précédente.",
        iconName: "Palette",
      },
      {
        title: "Renfort d'équipe",
        description:
          "Code existant à reprendre, équipe à renforcer, revue d'architecture : j'interviens aussi sur du React déjà en place.",
        iconName: "Users",
      },
    ],
    useCases: [
      "Dashboards et outils d'administration",
      "Applications métier à formulaires complexes",
      "Interfaces de données en temps réel",
      "Design systems et bibliothèques de composants",
      "Reprise et assainissement de code React existant",
      "Frontends pour API et backends existants",
    ],
    faq: [
      {
        question: "React ou Next.js : que choisir pour mon projet ?",
        answer:
          "Next.js est un framework construit sur React : la question n'est pas l'un contre l'autre. Pour un site public qui doit être référencé sur Google, Next.js s'impose. Pour un outil interne ou un dashboard derrière une connexion, du React seul peut suffire. Je vous oriente selon votre cas, les deux font partie de mon quotidien.",
      },
      {
        question: "Pouvez-vous reprendre une application React mal codée ?",
        answer:
          "Oui, c'est une demande fréquente : audit du code existant, identification des points fragiles (état incohérent, composants monolithiques, absence de types), puis assainissement progressif sans arrêter le produit. Vous gardez votre acquis, vous perdez la dette.",
      },
      {
        question: "Travaillez-vous avec TypeScript ?",
        answer:
          "J'utilise TypeScript en mode strict sur mes projets React. Cela réduit certaines erreurs et facilite la compréhension du code, sans remplacer les tests, la documentation et une architecture claire.",
      },
    ],
    relatedProjectSlugs: ["weman-lms", "gain"],
    relatedServiceSlug: "creation-saas-dashboard",
  },
];
