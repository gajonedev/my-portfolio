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
      "Je développe votre application iOS et Android avec Flutter. Si votre équipe travaille sans connexion, nous pouvons aussi prévoir un mode hors ligne.",
    keywords: [
      "développeur Flutter Bénin",
      "développeur Flutter Cotonou",
      "expert Flutter Afrique",
      "application Flutter Bénin",
      "freelance Flutter",
      "développeur Dart",
    ],
    heroDescription:
      "Je développe votre application iOS et Android avec Flutter. Si votre équipe travaille sans connexion, nous pouvons aussi prévoir un mode hors ligne.",
    intro: [
      "J’utilise Flutter pour mes applications mobiles, notamment AfCom, Afreel et les projets connectés SmartVilla et iVeges. Cela me permet de partager une grande partie du travail entre les versions iOS et Android.",
      "Pour votre projet, je regarde les fonctions nécessaires, les téléphones utilisés et les conditions de connexion. Je peux prévoir le stockage local, la synchronisation, les notifications ou les échanges avec des équipements.",
      "Je développe aussi le serveur et les connexions de l’application. Vous pouvez donc discuter avec moi des écrans comme des comptes, des données et des paiements.",
    ],
    strengths: [
      {
        title: "iOS et Android",
        description:
          "Je partage le code entre les deux plateformes et je traite leurs besoins spécifiques lorsque c’est nécessaire.",
        iconName: "Smartphone",
      },
      {
        title: "Travailler sans connexion",
        description:
          "Si vos utilisateurs sont sur le terrain, je peux conserver leurs saisies sur le téléphone et les synchroniser au retour du réseau.",
        iconName: "RefreshCw",
      },
      {
        title: "Des écrans adaptés aux usages",
        description:
          "Je vérifie les parcours et l’affichage sur les appareils prévus pour votre application.",
        iconName: "Rocket",
      },
      {
        title: "Relier vos équipements",
        description:
          "Je peux connecter votre application aux paiements, aux notifications ou à des équipements, selon le projet.",
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
          "Flutter peut convenir si vous souhaitez proposer votre application sur iOS et Android avec une base de code partagée. Je regarde aussi vos besoins spécifiques et les appareils concernés avant de vous le proposer.",
      },
      {
        question: "Une app Flutter peut-elle intégrer MTN MoMo et Moov Money ?",
        answer:
          "Oui, selon le prestataire retenu et les moyens disponibles pour votre compte. Je connecte le paiement dans l’application et je vérifie sa confirmation sur le serveur.",
      },
      {
        question: "Qu'avez-vous déjà construit avec Flutter ?",
        answer:
          "J’ai travaillé sur AfCom pour le suivi des ventes hors ligne, Afreel pour la facturation, SmartVilla pour la domotique et iVeges pour l’irrigation. Vous pouvez consulter leurs pages pour voir l’état de chaque projet.",
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
      "Je développe vos plateformes web avec Next.js : pages publiques, espaces clients et fonctions de gestion dans le même projet.",
    keywords: [
      "développeur Next.js Bénin",
      "développeur Next.js Afrique",
      "expert Next.js",
      "site Next.js SEO",
      "freelance Next.js Cotonou",
      "application React server",
    ],
    heroDescription:
      "Je développe vos plateformes web avec Next.js : pages publiques, espaces clients et fonctions de gestion dans le même projet.",
    intro: [
      "J’utilise Next.js pour des projets comme Wéman, ArchiForm et ce portfolio. Il me permet de construire les pages publiques et les fonctions d’une application web avec React.",
      "Vos pages de présentation doivent être faciles à consulter et à trouver. Votre espace client doit afficher les bonnes informations après connexion. Je choisis comment construire chaque partie en fonction de ces usages et de l’endroit où votre application sera hébergée.",
      "Vous voulez modifier vos textes, vos photos ou vos articles vous-même ? Je prévois un espace de publication ou je connecte l’outil que vous utilisez déjà. Vous n’avez pas à intervenir dans le code pour ces mises à jour.",
    ],
    strengths: [
      {
        title: "Préparer le référencement",
        description:
          "Je mets en place les pages publiques, les titres et les informations que les moteurs de recherche doivent pouvoir lire.",
        iconName: "Search",
      },
      {
        title: "Soigner le chargement",
        description:
          "Je limite les images et les scripts inutiles, puis je vérifie les temps d’affichage pour les pages importantes.",
        iconName: "Rocket",
      },
      {
        title: "Construire votre plateforme",
        description:
          "Je peux réunir vos pages publiques, vos comptes utilisateurs et vos fonctions métier dans le même projet.",
        iconName: "LayoutDashboard",
      },
      {
        title: "Connecter vos outils",
        description:
          "Je relie les paiements, la publication des contenus et les services dont votre plateforme a besoin.",
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
          "Je vous propose Next.js lorsque votre projet demande des fonctions sur mesure ou une plateforme web. Un CMS comme WordPress peut convenir à un site essentiellement éditorial. Nous regardons les contenus, les fonctions et la maintenance avant de choisir.",
      },
      {
        question: "Next.js est-il adapté aux connexions internet locales ?",
        answer:
          "Je peux limiter le poids des pages, optimiser les images et éviter les scripts inutiles. Je vérifie ensuite les performances avec les appareils et les conditions de connexion prévus ; le framework seul ne garantit pas la vitesse.",
      },
      {
        question: "Pourrai-je gérer mon contenu sans développeur ?",
        answer:
          "Oui, si nous prévoyons un espace de gestion. Je peux connecter un CMS pour que vous modifiiez les textes, les images et les articles. Je vous montre comment l’utiliser à la livraison.",
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
      "Avec React, je développe les écrans de votre logiciel web : formulaires, tableaux de bord et espaces de travail pour votre équipe.",
    keywords: [
      "développeur React Bénin",
      "développeur React Cotonou",
      "expert React Afrique",
      "développeur TypeScript Bénin",
      "création dashboard React",
      "freelance React",
    ],
    heroDescription:
      "Avec React, je développe les écrans de votre logiciel web : formulaires, tableaux de bord et espaces de travail pour votre équipe.",
    intro: [
      "React est la base des interfaces web que je développe. Je l’utilise pour organiser les écrans, les formulaires et les éléments qui reviennent dans votre application.",
      "Je travaille avec TypeScript et des composants réutilisables pour faciliter la compréhension et les évolutions du code. Je choisis ensuite la gestion des données selon les besoins de votre projet.",
      "Si votre équipe travaille déjà avec React, je peux intervenir sur l’application existante. Nous regardons ce qu’il faut ajouter, corriger ou reprendre avant de définir mon intervention.",
    ],
    strengths: [
      {
        title: "Mettre les données à jour",
        description:
          "Je prépare les écrans pour afficher les changements sans obliger vos utilisateurs à recharger toute la page.",
        iconName: "LayoutDashboard",
      },
      {
        title: "Faciliter la maintenance",
        description:
          "J’utilise TypeScript pour repérer certaines erreurs à l’écriture et rendre les échanges de données plus explicites.",
        iconName: "Code",
      },
      {
        title: "Garder des écrans cohérents",
        description:
          "Je réutilise les boutons, les champs et les tableaux pour que votre équipe retrouve les mêmes repères dans l’application.",
        iconName: "Palette",
      },
      {
        title: "Travailler avec votre équipe",
        description:
          "Je peux reprendre une partie du code, développer des fonctions ou accompagner votre équipe sur une application existante.",
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
          "Next.js utilise React. Je peux choisir Next.js pour un projet avec des pages publiques et du traitement serveur, ou une application React séparée pour un outil interne. Je vous explique le choix en fonction de vos usages et de l’organisation existante.",
      },
      {
        question: "Pouvez-vous reprendre une application React mal codée ?",
        answer:
          "Oui. Je commence par examiner le code et les problèmes que vous rencontrez. Je vous propose ensuite une reprise par étapes, avec les vérifications et les éventuelles migrations à prévoir.",
      },
      {
        question: "Travaillez-vous avec TypeScript ?",
        answer:
          "Oui, j’utilise TypeScript sur mes projets React. Il aide à repérer certaines erreurs et à comprendre les données utilisées. Je le complète avec les tests et la documentation adaptés au projet.",
      },
    ],
    relatedProjectSlugs: ["weman-lms", "gain"],
    relatedServiceSlug: "creation-saas-dashboard",
  },
];
