// Projets réalisés — une seule source de vérité par projet.
// La page d’accueil affiche la sélection `projectsPreview` ;
// la page Projets les affiche tous (summary détaillé + tech + lien) ;
// chaque projet avec `caseStudy` a une page étude de cas /projects/[slug].
export interface CaseStudy {
  /** Contexte : pour qui, dans quel environnement */
  context: string;
  /** Le problème concret à résoudre */
  problem: string;
  /** La solution mise en place, étape par étape ou aspect par aspect */
  solution: string[];
  /** Résultats et bénéfices concrets */
  results: string[];
  /** Enseignements ou choix techniques marquants */
  highlights?: string[];
}

export interface ProjectImage {
  /** Chemin local dans public, par exemple /projects/afcom/ventes.webp. */
  src?: string;
  alt: string;
  caption?: string;
}

export interface Project {
  role: string;
  images: ProjectImage[];
  slug: string;
  name: string;
  sector: string;
  iconName: string;
  /** Description courte — cartes de la page d'accueil */
  description: string;
  /** Bénéfice concret pour le client — mis en avant sur les cartes (orienté résultat, pas technique) */
  impact?: string;
  /** Résumé détaillé — page Projets */
  summary: string;
  tech: string[];
  link?: string;
  year?: string;
  status?: "live" | "preview" | "in-dev";
  /** Mis en avant sur la page d'accueil */
  featured?: boolean;
  /** Étude de cas détaillée — page /projects/[slug] */
  caseStudy?: CaseStudy;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projects: Project[] = [
  {
    slug: "weman-lms",
    role: "Je conçois et développe la plateforme web, les paiements et les traitements automatiques.",
    images: [
      {
        alt: "Vue d’ensemble du produit",
        src: "/projects/weman/1.png",
      },
      {
        src: "/projects/weman/2.png",
        alt: "Parcours principal et fonctionnalités",
      },
      {
        src: "/projects/weman/3.png",
        alt: "Parcours d’achat et de suivi",
      },
      {
        src: "/projects/weman/4.png",
        alt: "Tableaux de bord pour les formateurs",
      },
      {
        src: "/projects/weman/5.png",
        alt: "Tableaux de bord pour les formateurs",
      },
      {
        src: "/projects/weman/6.png",
        alt: "Tableaux de bord pour les formateurs",
      },
      {
        src: "/projects/weman/7.png",
        alt: "Tableaux de bord pour les formateurs",
      },
      {
        src: "/projects/weman/8.png",
        alt: "Tableaux de bord pour les formateurs",
      },
      {
        src: "/projects/weman/9.png",
        alt: "Tableaux de bord pour les formateurs",
      },
      {
        src: "/projects/weman/10.png",
        alt: "Tableaux de bord pour les formateurs",
      },
    ],
    name: "Wéman LMS",
    sector: "eLearning • Plateforme",
    iconName: "GraduationCap",
    description:
      "Je développe une plateforme où les formateurs peuvent publier leurs cours et les apprenants payer par Mobile Money, suivre leur progression et obtenir un certificat.",
    impact:
      "Le parcours d’achat, l’accès aux vidéos et le suivi de progression sont réunis dans la plateforme.",
    summary:
      "Je développe une plateforme où les formateurs peuvent publier leurs cours et les apprenants payer par Mobile Money, suivre leur progression et obtenir un certificat. Avec Wéman, je travaille sur une plateforme de cours en ligne adaptée aux usages du Bénin : paiement Mobile Money, consultation sur téléphone et connexions parfois limitées.",
    tech: [
      "Next.js",
      "Drizzle ORM",
      "Better Auth",
      "Inngest",
      "Mux",
      "PostgreSQL",
    ],
    year: "2026",
    status: "in-dev",
    featured: true,
    caseStudy: {
      context:
        "Avec Wéman, je travaille sur une plateforme de cours en ligne adaptée aux usages du Bénin : paiement Mobile Money, consultation sur téléphone et connexions parfois limitées.",
      problem:
        "Je voulais réunir la publication des cours, l’achat, le suivi et les certificats dans un même parcours, sans demander aux formateurs de gérer eux-mêmes les opérations techniques.",
      solution: [
        "J’ai prévu un espace par formateur pour publier des cours, organiser les chapitres et suivre les apprenants.",
        "J’utilise Mux pour la vidéo afin d’adapter la qualité de lecture au débit disponible.",
        "J’ai relié le paiement Mobile Money à l’ouverture de l’accès au cours.",
        "J’ai mis en place la génération des certificats PDF après la validation du parcours.",
        "Les formateurs disposent de tableaux de bord pour consulter les ventes et la progression.",
      ],
      results: [
        "Le parcours d’achat, l’accès aux vidéos et le suivi de progression sont réunis dans la plateforme.",
        "Les formateurs disposent d’un espace pour préparer et publier leurs cours.",
        "Le projet est encore en développement ; les fonctions sont présentées à ce stade.",
      ],
      highlights: [
        "J’ai séparé les tâches comme la génération des certificats et les emails du parcours de lecture.",
        "Je m’appuie sur Drizzle et PostgreSQL pour organiser les données et faire évoluer le schéma.",
      ],
    },
  },
  {
    slug: "afcom",
    role: "Je conçois l’application mobile, son stockage sur le téléphone et sa synchronisation.",
    images: [
      {
        alt: "Vue d’ensemble du produit",
      },
      {
        alt: "Parcours principal et fonctionnalités",
      },
    ],
    name: "AfCom",
    sector: "Mobile • Commerce",
    iconName: "Store",
    description:
      "Avec AfCom, je travaille sur une application qui permet aux commerçants de suivre leurs ventes, leurs stocks et leurs dépenses, même sans connexion.",
    impact:
      "Le prototype permet de saisir des ventes et des dépenses sans réseau.",
    summary:
      "Avec AfCom, je travaille sur une application qui permet aux commerçants de suivre leurs ventes, leurs stocks et leurs dépenses, même sans connexion. AfCom part d’un besoin simple : garder une trace des ventes et des stocks sans dépendre d’un cahier ni d’une connexion permanente.",
    tech: ["Flutter", "Dart", "Supabase", "SQLite"],
    year: "2025",
    status: "preview",
    featured: true,
    caseStudy: {
      context:
        "AfCom part d’un besoin simple : garder une trace des ventes et des stocks sans dépendre d’un cahier ni d’une connexion permanente.",
      problem:
        "Je voulais permettre à un commerçant d’enregistrer son activité sur son téléphone, puis de retrouver les informations utiles pour suivre ses stocks et ses dépenses.",
      solution: [
        "J’enregistre les ventes, les stocks et les dépenses dans une base SQLite sur le téléphone.",
        "Je synchronise les données vers Supabase lorsque la connexion revient.",
        "J’ai limité les étapes de saisie pour faciliter l’enregistrement d’une vente au comptoir.",
        "J’ai préparé des tableaux de bord pour retrouver les ventes, les dépenses et les produits à réapprovisionner.",
      ],
      results: [
        "Le prototype permet de saisir des ventes et des dépenses sans réseau.",
        "Les opérations sont datées et conservées sur le téléphone.",
        "Les tableaux de bord s’appuient sur les données enregistrées pour présenter l’activité.",
      ],
      highlights: [
        "J’ai construit l’application autour du stockage local : les opérations courantes ne passent pas d’abord par le serveur.",
        "J’ai vérifié l’enregistrement et la reprise de synchronisation après des coupures réseau.",
      ],
    },
  },
  {
    slug: "smartvilla",
    role: "Je développe l’application mobile et ses échanges avec les équipements de la villa.",
    images: [
      {
        alt: "Vue d’ensemble du produit",
      },
      {
        alt: "Parcours principal et fonctionnalités",
      },
    ],
    name: "SmartVilla",
    sector: "IoT • Smart Home",
    iconName: "Home",
    description:
      "J’ai développé une application pour commander l’éclairage et le portail d’une villa, recevoir l’état des équipements et consulter les mesures des capteurs.",
    impact:
      "Le prototype réunit le pilotage de l’éclairage, du portail et la consultation des capteurs.",
    summary:
      "J’ai développé une application pour commander l’éclairage et le portail d’une villa, recevoir l’état des équipements et consulter les mesures des capteurs. SmartVilla relie une application mobile à des équipements de domotique : éclairage, portail, sécurité et compteurs. Il fallait que les commandes et les informations circulent entre le téléphone et les contrôleurs.",
    tech: ["Flutter", "ESP32", "MQTT", "Node.js", "FreeRTOS"],
    year: "2025",
    status: "preview",
    featured: true,
    caseStudy: {
      context:
        "SmartVilla relie une application mobile à des équipements de domotique : éclairage, portail, sécurité et compteurs. Il fallait que les commandes et les informations circulent entre le téléphone et les contrôleurs.",
      problem:
        "Mon travail consistait à donner accès à ces équipements depuis le téléphone, avec un retour de leur état et une reprise des échanges après une coupure.",
      solution: [
        "L’application échange avec les contrôleurs ESP32 qui pilotent les différentes zones.",
        "J’utilise MQTT pour transmettre les commandes et recevoir les événements des équipements.",
        "Le serveur Node.js gère les accès et conserve l’historique des événements.",
        "J’affiche dans l’application Flutter l’état reçu des équipements après les commandes.",
        "J’ai prévu la resynchronisation des contrôleurs après le retour du courant.",
      ],
      results: [
        "Le prototype réunit le pilotage de l’éclairage, du portail et la consultation des capteurs.",
        "Les mesures de consommation peuvent être consultées depuis l’application.",
        "Les échanges reprennent après une coupure sans ressaisie manuelle des états.",
      ],
      highlights: [
        "Les tâches des contrôleurs sont organisées avec FreeRTOS pour traiter les fonctions selon leur priorité.",
        "MQTT me permet de faire évoluer les équipements sans relier directement chaque capteur à l’application.",
      ],
    },
  },
  {
    slug: "archiform",
    role: "J’ai développé la page de formation, le paiement et l’envoi automatique des accès.",
    images: [
      {
        alt: "Vue d’ensemble du produit",
      },
      {
        alt: "Parcours principal et fonctionnalités",
      },
    ],
    name: "ArchiForm",
    sector: "Landing • Paiement",
    iconName: "CreditCard",
    description:
      "J’ai créé une page d’inscription à une formation : après le paiement, l’apprenant reçoit un email et l’accès aux ressources dans Google Drive.",
    impact: "La page de formation et le parcours de paiement sont en ligne.",
    summary:
      "J’ai créé une page d’inscription à une formation : après le paiement, l’apprenant reçoit un email et l’accès aux ressources dans Google Drive. Pour cette formation, il fallait présenter le programme et permettre l’inscription sans envoyer manuellement les ressources à chaque nouvel apprenant.",
    tech: ["Next.js", "Node.js", "Google Drive API", "Resend"],
    link: "https://ambc.vercel.app",
    year: "2025",
    status: "live",
    featured: true,
    caseStudy: {
      context:
        "Pour cette formation, il fallait présenter le programme et permettre l’inscription sans envoyer manuellement les ressources à chaque nouvel apprenant.",
      problem:
        "Je devais relier l’inscription, le paiement et l’accès à Google Drive pour que le formateur puisse suivre les inscriptions sans traiter chaque envoi lui-même.",
      solution: [
        "J’ai développé la page qui présente le programme et permet de s’inscrire.",
        "J’ai intégré le paiement et sa confirmation côté serveur.",
        "Après confirmation, j’ajoute l’apprenant au dossier Google Drive prévu pour la formation.",
        "J’envoie un email avec la confirmation et les informations d’accès.",
      ],
      results: [
        "La page de formation et le parcours de paiement sont en ligne.",
        "Les accès aux ressources sont envoyés après la confirmation du paiement.",
        "Le client confirme qu’il n’a plus à intervenir pour donner les accès à chaque inscrit.",
      ],
    },
  },
  {
    slug: "afreel",
    role: "Je développe l’application mobile et les fonctions de devis et de facturation.",
    images: [
      {
        alt: "Vue d’ensemble du produit",
      },
      {
        alt: "Parcours principal et fonctionnalités",
      },
    ],
    name: "Afreel",
    sector: "Mobile • Facturation",
    iconName: "Receipt",
    description:
      "J’ai conçu Afreel pour préparer des devis et des factures depuis un téléphone, les partager en PDF et suivre les paiements.",
    impact:
      "Le prototype permet de préparer et d’exporter les documents depuis le téléphone.",
    summary:
      "J’ai conçu Afreel pour préparer des devis et des factures depuis un téléphone, les partager en PDF et suivre les paiements. Avec Afreel, je voulais rassembler les devis, les factures et le suivi des clients dans une application utilisable depuis le téléphone.",
    tech: ["Flutter", "Dart", "SQLite"],
    year: "2025",
    status: "preview",
    caseStudy: {
      context:
        "Avec Afreel, je voulais rassembler les devis, les factures et le suivi des clients dans une application utilisable depuis le téléphone.",
      problem:
        "L’objectif était de préparer un document, de l’envoyer et de retrouver son statut sans chercher dans plusieurs conversations ou fichiers.",
      solution: [
        "J’ai prévu la création de devis et de factures avec numérotation et informations du prestataire.",
        "Je génère les documents en PDF pour les partager par email ou WhatsApp.",
        "J’ai ajouté les statuts de suivi : brouillon, envoyé, payé et en retard.",
        "Je conserve les fiches clients et les documents en SQLite pour permettre leur consultation hors ligne.",
      ],
      results: [
        "Le prototype permet de préparer et d’exporter les documents depuis le téléphone.",
        "Les factures et leurs statuts sont regroupés dans la même application.",
        "Le suivi mensuel présente les montants des factures enregistrées.",
      ],
    },
  },
  {
    slug: "fintech",
    role: "Je développe l’application mobile et le serveur qui gère ses données.",
    images: [
      {
        alt: "Vue d’ensemble du produit",
      },
      {
        alt: "Parcours principal et fonctionnalités",
      },
    ],
    name: "Fintech",
    sector: "Finance • Gestion",
    iconName: "Wallet",
    description:
      "Je travaille sur une application pour réunir revenus, dépenses, budgets et objectifs d’épargne, quel que soit le compte utilisé.",
    impact:
      "Le prototype regroupe les opérations enregistrées sur plusieurs comptes.",
    summary:
      "Je travaille sur une application pour réunir revenus, dépenses, budgets et objectifs d’épargne, quel que soit le compte utilisé. Les dépenses peuvent passer par les espèces, le Mobile Money ou la banque. Je voulais permettre de les suivre dans une même application sans perdre la distinction entre les comptes.",
    tech: ["Flutter", "Dart", "Node.js", "PostgreSQL"],
    year: "2025",
    status: "preview",
    caseStudy: {
      context:
        "Les dépenses peuvent passer par les espèces, le Mobile Money ou la banque. Je voulais permettre de les suivre dans une même application sans perdre la distinction entre les comptes.",
      problem:
        "Le projet devait réunir les opérations, les classer et permettre à l’utilisateur de comparer ses dépenses au budget qu’il s’est fixé.",
      solution: [
        "J’ai prévu une saisie des opérations par compte : espèces, banque ou Mobile Money.",
        "Je classe les transactions récurrentes pour faciliter les prochaines saisies.",
        "J’ai ajouté des budgets par catégorie et des alertes de dépassement.",
        "Le serveur Node.js et PostgreSQL permet de sauvegarder les données et de les synchroniser entre appareils.",
      ],
      results: [
        "Le prototype regroupe les opérations enregistrées sur plusieurs comptes.",
        "Les graphiques présentent les dépenses par catégorie.",
        "Les budgets permettent de comparer les montants prévus aux dépenses saisies.",
      ],
    },
  },
  {
    slug: "iveges",
    role: "J’ai développé l’application mobile et l’architecture de communication avec les capteurs, avec un co-développeur.",
    images: [
      {
        alt: "Vue d’ensemble du produit",
      },
      {
        alt: "Parcours principal et fonctionnalités",
      },
    ],
    name: "iVeges",
    sector: "IoT • Agriculture",
    iconName: "Sprout",
    description:
      "Sur iVeges, j’ai relié une application mobile à un système d’irrigation : elle permet de consulter les capteurs, les arrosages et les alertes.",
    impact: "Le système commande l’arrosage à partir des données des capteurs.",
    summary:
      "Sur iVeges, j’ai relié une application mobile à un système d’irrigation : elle permet de consulter les capteurs, les arrosages et les alertes. iVeges est un projet d’irrigation pilotée par des capteurs. J’y ai travaillé sur l’application mobile et les échanges avec le système embarqué.",
    tech: ["Flutter", "ESP32", "Arduino", "NRF24L01", "C++"],
    year: "2026",
    status: "live",
    featured: true,
    caseStudy: {
      context:
        "iVeges est un projet d’irrigation pilotée par des capteurs. J’y ai travaillé sur l’application mobile et les échanges avec le système embarqué.",
      problem:
        "Il fallait remonter les mesures du terrain, suivre les décisions d’arrosage et donner accès à ces informations depuis un téléphone, sans réseau WiFi sur la parcelle.",
      solution: [
        "Les capteurs mesurent l’humidité du sol et les conditions ambiantes à plusieurs endroits.",
        "Les nœuds Arduino communiquent par radio NRF24L01 avec le contrôleur ESP32.",
        "Le système utilise une logique floue de Mamdani pour décider de l’arrosage à partir des mesures.",
        "J’ai développé l’application Flutter pour consulter les mesures, les arrosages et les alertes.",
      ],
      results: [
        "Le système commande l’arrosage à partir des données des capteurs.",
        "L’application présente les mesures et l’historique des arrosages.",
        "Le suivi peut se faire depuis le téléphone ; les économies d’eau restent à mesurer sur le terrain.",
      ],
      highlights: [
        "La logique floue permet de prendre en compte plusieurs conditions au lieu d’un seul seuil d’humidité.",
        "Ce projet m’a demandé de faire dialoguer l’application mobile, le protocole radio et les équipements embarqués.",
      ],
    },
  },
  {
    slug: "gain",
    role: "J’ai développé le site bilingue, les formulaires et l’intégration des contenus.",
    images: [
      {
        alt: "Page d’accueil et parcours de contact",
      },
    ],
    name: "GAIN",
    sector: "Vitrine • Association",
    iconName: "Globe",
    description:
      "J’ai réalisé le site français-anglais de GAIN pour présenter le réseau et recueillir les contacts et les demandes de prière.",
    impact: "Le site est en ligne en français et en anglais.",
    summary:
      "J’ai réalisé le site français-anglais de GAIN pour présenter le réseau et recueillir les contacts et les demandes de prière. Le Gospel Activists International Network souhaitait présenter son programme à un public francophone et anglophone. Le site devait aussi faciliter les échanges avec ses visiteurs.",
    tech: ["Next.js 15", "Framer Motion", "Tailwind CSS", "next-intl"],
    link: "https://gain-network.vercel.app",
    year: "2026",
    status: "live",
    featured: true,
    caseStudy: {
      context:
        "Le Gospel Activists International Network souhaitait présenter son programme à un public francophone et anglophone. Le site devait aussi faciliter les échanges avec ses visiteurs.",
      problem:
        "Il fallait organiser les informations dans les deux langues et proposer des formulaires distincts pour les contacts et les demandes de prière.",
      solution: [
        "J’ai développé les versions française et anglaise avec Next.js et next-intl.",
        "J’ai intégré les contenus et les animations pour présenter les différentes parties du programme.",
        "J’ai mis en place les formulaires avec validation et notifications par email.",
        "J’ai ajouté la galerie et les témoignages prévus pour présenter le réseau.",
      ],
      results: [
        "Le site est en ligne en français et en anglais.",
        "Les pages et les formulaires sont accessibles sur téléphone.",
        "Les demandes de contact et de prière sont transmises avec les informations du formulaire.",
      ],
      highlights: [
        "J’ai organisé les adresses et les contenus par langue pour que chaque version puisse être partagée et référencée.",
      ],
    },
  },
];

// Sous-ensemble mis en avant sur la page d'accueil
export const projectsPreview = ["weman-lms", "afcom", "archiform"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined);
