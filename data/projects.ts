// Projets réalisés — une seule source de vérité par projet.
// La page d'accueil affiche les projets `featured` (description courte) ;
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

export interface Project {
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
  link: string;
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
    name: "Wéman LMS",
    sector: "eLearning • Plateforme",
    iconName: "GraduationCap",
    description:
      "Plateforme e-learning complète adaptée au Bénin : multi-auteurs, paiement MoMo, certificats auto-générés et suivi de progression.",
    impact:
      "Paiement Mobile Money et certificats générés tout seuls : le formateur vend ses cours sans toucher à la technique.",
    summary:
      "Plateforme e-learning complète pensée pour les réalités béninoises. Espace étudiant et auteur, vidéos hébergées, suivi de progression, analytics, génération automatique de certificats PDF, paiement Mobile Money et emails transactionnels.",
    tech: [
      "Next.js",
      "Drizzle ORM",
      "Better Auth",
      "Inngest",
      "Mux",
      "PostgreSQL",
    ],
    link: "https://github.com/gajonedev",
    year: "2026",
    status: "in-dev",
    featured: true,
    caseStudy: {
      context:
        "Le e-learning explose en Afrique de l'Ouest, mais les plateformes internationales (Udemy, Teachable) sont mal adaptées au terrain : paiement par carte bancaire uniquement, tarification en dollars, aucune prise en compte des débits internet locaux. Wéman est une plateforme e-learning pensée dès le départ pour le marché béninois.",
      problem:
        "Permettre à des formateurs locaux de vendre leurs cours en ligne à un public qui paie par Mobile Money, suit les cours sur mobile avec une connexion parfois instable, et attend un certificat vérifiable en fin de parcours, le tout sans compétence technique côté formateur.",
      solution: [
        "Architecture multi-auteurs : chaque formateur dispose de son espace pour créer ses cours, chapitres et quiz, suivre ses ventes et ses apprenants.",
        "Streaming vidéo via Mux avec adaptation automatique de la qualité au débit disponible, indispensable pour les connexions mobiles locales.",
        "Paiement Mobile Money intégré de bout en bout : l'apprenant paie avec MTN MoMo ou Moov, l'accès au cours est débloqué instantanément.",
        "Génération automatique de certificats PDF nominatifs et vérifiables à la complétion d'un cours, via des jobs asynchrones Inngest.",
        "Suivi de progression détaillé et analytics pour les formateurs : taux de complétion, chapitres qui bloquent, revenus.",
      ],
      results: [
        "Une plateforme complète opérationnelle : parcours d'achat, lecture vidéo, progression, certification et paiement local fonctionnent de bout en bout.",
        "Les formateurs publient un cours complet sans aucune intervention technique.",
        "Infrastructure dimensionnée pour héberger plusieurs écoles et formateurs indépendants sur la même base (multi-tenant).",
      ],
      highlights: [
        "Les jobs asynchrones (Inngest) découplent les traitements lourds (encodage, certificats, emails) du parcours utilisateur : l'interface reste instantanée.",
        "Le choix de Drizzle ORM + PostgreSQL donne un schéma typé de bout en bout : les erreurs de données sont attrapées à la compilation, pas en production.",
      ],
    },
  },
  {
    slug: "afcom",
    name: "AfCom",
    sector: "Mobile • Commerce",
    iconName: "Store",
    description:
      "App mobile offline-first pour les petits commerçants africains. Suivi des ventes, stocks et dépenses avec synchro automatique.",
    impact:
      "Fonctionne sans internet, sur téléphone d'entrée de gamme : fini les pertes du cahier, la rentabilité devient visible.",
    summary:
      "Application mobile conçue pour les petits commerçants africains. Gestion complète des ventes, stocks et dépenses en mode offline-first avec synchronisation automatique dès la connexion retrouvée.",
    tech: ["Flutter", "Dart", "Supabase", "SQLite"],
    link: "https://github.com/gajonedev",
    year: "2025",
    status: "preview",
    featured: true,
    caseStudy: {
      context:
        "Des millions de petits commerçants africains gèrent encore ventes, stocks et crédits clients sur des cahiers : pertes d'information, erreurs de calcul, aucune visibilité sur la rentabilité réelle. Les solutions de caisse existantes supposent une connexion internet permanente, irréaliste sur le terrain.",
      problem:
        "Concevoir un outil de gestion complet qui fonctionne d'abord sans internet, sur des téléphones d'entrée de gamme, et qui reste assez simple pour remplacer le cahier sans formation longue.",
      solution: [
        "Architecture offline-first : toutes les opérations (ventes, entrées de stock, dépenses) s'enregistrent localement en SQLite et fonctionnent sans aucun réseau.",
        "Synchronisation automatique vers Supabase dès que la connexion revient, avec résolution des conflits, le commerçant n'a rien à faire.",
        "Interface pensée pour la rapidité au comptoir : enregistrer une vente prend moins de cinq secondes.",
        "Tableaux de bord simples : bénéfice du jour, produits qui partent le plus, stocks à recommander, crédits clients en cours.",
      ],
      results: [
        "Une gestion complète qui fonctionne dans les conditions réelles du commerce de quartier : sans réseau, sur petit téléphone, à une main.",
        "Fin des pertes d'information du cahier : chaque vente et chaque dépense laisse une trace datée et chiffrée.",
        "Le commerçant voit enfin sa rentabilité réelle, produit par produit.",
      ],
      highlights: [
        "L'offline-first n'est pas une option ajoutée mais le cœur de l'architecture : le serveur est une copie du téléphone, pas l'inverse.",
        "Testée en conditions réelles de coupures réseau prolongées : zéro perte de données.",
      ],
    },
  },
  {
    slug: "smartvilla",
    name: "SmartVilla",
    sector: "IoT • Smart Home",
    iconName: "Home",
    description:
      "Application de contrôle d'une villa intelligente complète : éclairage, sécurité, portail, gestion d'énergie et monitoring.",
    impact:
      "Toute la villa pilotée depuis le téléphone : le système tient même après une coupure de courant ou de réseau.",
    summary:
      "Application connectée à une villa intelligente complète : contrôle de l'éclairage, gestion du portail motorisé, surveillance sécurité, monitoring énergétique et gestion de l'eau. Communication temps réel avec les systèmes embarqués.",
    tech: ["Flutter", "ESP32", "MQTT", "Node.js", "FreeRTOS"],
    link: "https://github.com/gajonedev",
    year: "2025",
    status: "preview",
    featured: true,
    caseStudy: {
      context:
        "Un projet de domotique complet pour une villa : éclairage, portail motorisé, sécurité, suivi de la consommation d'énergie et d'eau. Le défi n'était pas seulement logiciel : il fallait faire dialoguer une application mobile avec de vrais systèmes embarqués, de façon fiable et instantanée.",
      problem:
        "Contrôler et surveiller en temps réel tous les équipements de la villa depuis un téléphone, avec une latence imperceptible, une sécurité sérieuse et une tolérance aux coupures de courant et de réseau fréquentes localement.",
      solution: [
        "Réseau de contrôleurs ESP32 sous FreeRTOS pilotant chaque zone : éclairage, portail, capteurs de sécurité, compteurs d'énergie et d'eau.",
        "Communication temps réel via MQTT : chaque action de l'app est répercutée en quelques dizaines de millisecondes, chaque événement capteur remonte instantanément.",
        "Serveur Node.js central : authentification, historique des événements, règles d'automatisation (extinction programmée, alertes de consommation anormale).",
        "Application Flutter avec état temps réel : l'interface reflète l'état physique réel de la maison, pas un état supposé.",
        "Reprise automatique après coupure : les contrôleurs se resynchronisent seuls au retour du courant.",
      ],
      results: [
        "Toute la villa se pilote et se surveille depuis l'application, de l'éclairage au portail, avec un retour d'état fiable.",
        "Le monitoring énergétique détaillé permet d'identifier les postes de consommation et de réduire la facture.",
        "Le système survit aux coupures de courant et de réseau sans intervention manuelle, critère décisif localement.",
      ],
      highlights: [
        "FreeRTOS sur ESP32 garantit que les fonctions critiques (sécurité, portail) restent prioritaires quoi qu'il arrive.",
        "L'architecture MQTT découple totalement l'app des équipements : ajouter un capteur ne demande aucune modification de l'application.",
      ],
    },
  },
  {
    slug: "archiform",
    name: "ArchiForm",
    sector: "Landing • Paiement",
    iconName: "CreditCard",
    description:
      "Page de présentation et tunnel de paiement pour une formation, avec ajout auto au Drive et envoi de mails de confirmation.",
    impact:
      "Inscription, paiement et accès livrés automatiquement 24h/24 : plus une seule relance manuelle à gérer.",
    summary:
      "Page de présentation d'une formation avec tunnel de paiement intégré. Après paiement, ajout automatique de l'apprenant au dossier Google Drive et envoi de mail de confirmation avec accès aux ressources.",
    tech: ["Next.js", "Node.js", "Google Drive API", "Resend"],
    link: "https://ambc.vercel.app",
    year: "2025",
    status: "live",
    featured: true,
    caseStudy: {
      context:
        "Un formateur vendait sa formation manuellement : messages WhatsApp, confirmation de paiement à la main, envoi des accès un par un. Chaque inscription lui coûtait du temps, et les inscriptions nocturnes attendaient le lendemain, avec des abandons à la clé.",
      problem:
        "Automatiser entièrement le parcours d'inscription : présentation convaincante, paiement en ligne, et livraison instantanée des accès aux ressources de formation, sans aucune intervention manuelle, à toute heure.",
      solution: [
        "Landing page de présentation optimisée pour la conversion : proposition de valeur claire, programme détaillé, témoignages et appel à l'action visible.",
        "Tunnel de paiement intégré directement dans la page, pas de redirection déroutante.",
        "Automatisation post-paiement : ajout automatique de l'apprenant au dossier Google Drive de la formation via l'API Google, avec les bonnes permissions.",
        "Email de confirmation instantané (Resend) avec les accès et les premières instructions.",
      ],
      results: [
        "Le parcours complet, découverte, paiement, accès, se fait sans aucune intervention du formateur, 24h/24.",
        "L'accès instantané après paiement a supprimé les demandes de suivi (« j'ai payé, où sont mes accès ? ») qui pollluaient le WhatsApp du formateur.",
        "Le formateur se concentre sur son contenu, plus sur l'administratif.",
      ],
      highlights: [
        "L'intégration Google Drive API évite de reconstruire un espace membre : les ressources restent là où le formateur les gère déjà.",
        "Un projet volontairement minimal : quelques jours de développement pour un gain de temps quotidien, le meilleur ROI vient souvent des petits outils bien ciblés.",
      ],
    },
  },
  {
    slug: "afreel",
    name: "Afreel",
    sector: "Mobile • Facturation",
    iconName: "Receipt",
    description:
      "App mobile de facturation pour freelances africains : devis, factures, suivi des paiements et export PDF.",
    impact:
      "Un devis pro en 2 minutes au lieu d'un message WhatsApp : image sérieuse et impayés enfin visibles.",
    summary:
      "Application mobile de facturation pensée pour les freelances africains. Création de devis et factures professionnels, suivi des paiements, gestion clients et export PDF.",
    tech: ["Flutter", "Dart", "SQLite"],
    link: "https://github.com/gajonedev",
    year: "2025",
    status: "preview",
    caseStudy: {
      context:
        "Les freelances africains facturent souvent… sans facture : un message WhatsApp, un montant convenu à l'oral. Résultat : image peu professionnelle face aux clients sérieux, impayés difficiles à réclamer, aucune vision sur les revenus.",
      problem:
        "Donner aux freelances un outil de facturation professionnel qui tient dans la poche : créer un devis ou une facture propre en deux minutes depuis son téléphone, suivre qui a payé et qui doit relancer.",
      solution: [
        "Création de devis et factures avec numérotation automatique, logo, conditions et mentions, un rendu professionnel qui inspire confiance.",
        "Export PDF instantané, partageable directement par WhatsApp ou email, là où se passent les échanges clients.",
        "Suivi des statuts : brouillon, envoyée, payée, en retard, avec la liste des relances à faire.",
        "Fiches clients avec historique complet, et fonctionnement 100 % local (SQLite) : les données restent sur le téléphone, aucune connexion requise.",
      ],
      results: [
        "Un devis professionnel se crée en deux minutes au lieu d'un message informel, et le taux d'acceptation s'en ressent.",
        "Les impayés deviennent visibles et actionnables : plus rien ne se perd dans les conversations.",
        "Le freelance connaît enfin son chiffre d'affaires réel, mois par mois.",
      ],
    },
  },
  {
    slug: "fintech",
    name: "Fintech",
    sector: "Finance • Gestion",
    iconName: "Wallet",
    description:
      "App de gestion financière : suivi des revenus et dépenses, budgets, objectifs d'épargne et catégorisation automatique.",
    impact:
      "Mobile Money, espèces et banque réunis au même endroit : enfin une vision claire de son argent.",
    summary:
      "Application de gestion financière complète : suivi des revenus et dépenses, budgets, objectifs d'épargne, visualisation graphique et catégorisation automatique des transactions.",
    tech: ["Flutter", "Dart", "Node.js", "PostgreSQL"],
    link: "https://github.com/gajonedev",
    year: "2025",
    status: "preview",
    caseStudy: {
      context:
        "Entre Mobile Money, espèces et compte bancaire, l'argent circule par plusieurs canaux et la vision d'ensemble se perd : on sait ce qu'on gagne, rarement où ça part. Les apps de budget internationales ignorent ces usages multi-canaux typiques d'Afrique de l'Ouest.",
      problem:
        "Construire une application de gestion financière personnelle qui agrège tous les flux, catégorise automatiquement les transactions et aide réellement à tenir un budget et des objectifs d'épargne.",
      solution: [
        "Saisie rapide multi-comptes : Mobile Money, espèces, banque, chaque transaction rejoint la vue d'ensemble.",
        "Catégorisation automatique des transactions récurrentes : l'app apprend des habitudes et pré-remplit.",
        "Budgets par catégorie avec alertes de dépassement avant la fin du mois, pas après.",
        "Objectifs d'épargne visuels et backend Node.js/PostgreSQL pour la synchronisation multi-appareils et la sauvegarde.",
      ],
      results: [
        "Une vision consolidée de toutes les finances personnelles, quel que soit le canal utilisé.",
        "Les graphiques par catégorie révèlent immédiatement les postes de dépenses invisibles au quotidien.",
        "Les budgets avec alertes transforment les bonnes intentions en discipline effective.",
      ],
    },
  },
  {
    slug: "iveges",
    name: "iVeges",
    sector: "IoT • Agriculture",
    iconName: "Sprout",
    description:
      "Monitoring IoT d'irrigation autonome par réseau de capteurs sans fil, logique floue et dashboard mobile temps réel.",
    impact:
      "L'irrigation se déclenche seule au bon moment : de vraies économies d'eau, plus de va-et-vient aux champs.",
    summary:
      "Système IoT de monitoring d'irrigation autonome basé sur un réseau de capteurs sans fil (WSN). Architecture maître ESP32 + esclaves Arduino Nano avec communication NRF24L01, logique floue de Mamdani pour la décision d'arrosage, et app mobile Flutter pour le suivi temps réel.",
    tech: ["Flutter", "ESP32", "Arduino", "NRF24L01", "C++"],
    link: "https://github.com/gajonedev",
    year: "2026",
    status: "live",
    featured: true,
    caseStudy: {
      context:
        "L'irrigation représente l'un des premiers postes de travail et de coût du maraîchage. Arroser trop, c'est gaspiller l'eau et l'énergie ; pas assez, c'est perdre la récolte. La décision repose traditionnellement sur l'observation humaine, imprécise et chronophage.",
      problem:
        "Automatiser la décision d'arrosage à partir de mesures réelles du terrain (humidité du sol, température, hygrométrie), sur une parcelle sans électricité ni WiFi, avec un budget matériel accessible à une exploitation locale.",
      solution: [
        "Réseau de capteurs sans fil (WSN) : des nœuds Arduino Nano mesurent l'humidité du sol et les conditions ambiantes en plusieurs points de la parcelle.",
        "Communication radio NRF24L01 entre les nœuds et un contrôleur maître ESP32, aucune infrastructure réseau nécessaire sur la parcelle.",
        "Décision d'arrosage par logique floue de Mamdani : le système raisonne comme un agronome (« sol plutôt sec ET forte chaleur → arrosage long ») au lieu de seuils rigides.",
        "Application mobile Flutter de monitoring : état des capteurs, historique des arrosages, consommation d'eau, alertes en temps réel.",
      ],
      results: [
        "L'irrigation se déclenche seule, au bon moment et à la bonne dose, sur la base de mesures réelles et non d'habitudes.",
        "Économies d'eau significatives par rapport à l'arrosage systématique, l'eau n'est utilisée que quand le sol en a besoin.",
        "Le maraîcher supervise sa parcelle depuis son téléphone au lieu d'y passer matin et soir.",
      ],
      highlights: [
        "La logique floue de Mamdani surclasse les seuils fixes : elle gère les situations intermédiaires (sol moyennement humide, chaleur modérée) sans effet tout-ou-rien.",
        "Un projet qui couvre toute la chaîne : électronique embarquée, protocole radio, algorithme de décision et application mobile, la polyvalence hardware/software au service d'un problème concret.",
      ],
    },
  },
  {
    slug: "gain",
    name: "GAIN",
    sector: "Vitrine • Association",
    iconName: "Globe",
    description:
      "Site vitrine bilingue FR/EN pour un réseau international d'évangélisation, avec animations Framer Motion et formulaires.",
    impact:
      "Site bilingue ultra-rapide sur mobile : les contacts et demandes de prière arrivent enfin structurés.",
    summary:
      "Site vitrine bilingue (FR/EN) pour le Gospel Activists International Network, un programme international d'évangélisation. Animations Framer Motion, formulaires de contact et de demande de prière, galerie photo et témoignages.",
    tech: ["Next.js 15", "Framer Motion", "Tailwind CSS", "next-intl"],
    link: "https://gain-network.vercel.app",
    year: "2026",
    status: "live",
    featured: true,
    caseStudy: {
      context:
        "Le Gospel Activists International Network (GAIN), programme international d'évangélisation, avait besoin d'une présence web à la hauteur de son envergure : une audience répartie sur plusieurs continents, francophone et anglophone, consultant majoritairement depuis mobile.",
      problem:
        "Créer un site vitrine bilingue qui présente le réseau avec impact, facilite la prise de contact et les demandes de prière, et reste rapide partout dans le monde, y compris sur les connexions mobiles africaines.",
      solution: [
        "Site Next.js 15 entièrement bilingue français/anglais avec next-intl : chaque page existe dans les deux langues, avec les bonnes balises hreflang pour le référencement international.",
        "Direction artistique soignée avec animations Framer Motion : le site raconte la mission du réseau avec du mouvement, sans jamais sacrifier la performance.",
        "Formulaires de contact et de demande de prière avec validation et notifications email.",
        "Galerie photo optimisée et section témoignages pour incarner l'impact du réseau.",
      ],
      results: [
        "Le réseau dispose d'une vitrine crédible et moderne, accessible dans les deux langues de son audience.",
        "Le site charge vite sur mobile même en connexion limitée, critère essentiel pour son audience africaine.",
        "Les demandes de contact et de prière arrivent structurées, là où elles se perdaient auparavant dans les messageries.",
      ],
      highlights: [
        "L'internationalisation (next-intl) est native, pas plaquée : URLs localisées, SEO par langue, bascule instantanée.",
        "Les animations Framer Motion sont calibrées pour ne jamais dégrader les Core Web Vitals : l'esthétique ne coûte rien en performance.",
      ],
    },
  },
  // TODO: Ajouter AEMEEC quand les détails du projet seront confirmés
];

// Sous-ensemble mis en avant sur la page d'accueil
export const projectsPreview = projects.filter((project) => project.featured);
