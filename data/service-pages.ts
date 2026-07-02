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
      "Création d'Application Mobile au Bénin — Développeur Flutter iOS & Android",
    metaDescription:
      "Développement d'applications mobiles iOS et Android en Flutter : apps métier, e-commerce, offline-first. Publication sur les stores incluse. Devis sous 24h.",
    keywords: [
      "création application mobile Bénin",
      "développement application mobile",
      "développeur Flutter Bénin",
      "application iOS Android Cotonou",
      "prix application mobile Afrique",
      "app mobile entreprise Bénin",
    ],
    heroDescription:
      "Des applications iOS et Android professionnelles, fluides et robustes — conçues pour vendre, automatiser ou fidéliser, et publiées sur les stores.",
    intro: [
      "Votre application mobile doit résoudre un vrai problème : encaisser des ventes, suivre une activité, fidéliser vos clients. Je développe en Flutter des applications cross-platform — un seul code pour iOS et Android — ce qui divise les coûts et les délais par rapport à deux développements séparés, sans compromis sur la qualité.",
      "Chaque application repose sur un backend solide que je construis moi-même : vos données sont sécurisées, synchronisées et prêtes à monter en charge. Et parce que je connais le terrain, je conçois des apps qui fonctionnent dans les conditions réelles d'utilisation en Afrique de l'Ouest : mode hors-ligne quand le réseau est instable, paiement Mobile Money intégré, interfaces légères qui tournent bien sur les téléphones d'entrée de gamme.",
      "De la première maquette à la publication sur l'App Store et Google Play, vous avez un seul interlocuteur, un planning clair et des démos régulières pour suivre l'avancement.",
    ],
    deliverables: [
      "Application iOS + Android à partir d'un seul code Flutter",
      "Backend complet : API, base de données, authentification",
      "Mode hors-ligne avec synchronisation automatique",
      "Paiements intégrés : Mobile Money, FedaPay, carte bancaire",
      "Publication sur l'App Store et Google Play",
      "Formation à la prise en main et documentation",
    ],
    process: [
      {
        title: "Cadrage du besoin",
        description:
          "On définit ensemble le problème à résoudre, les utilisateurs cibles et les fonctionnalités essentielles. Devis détaillé sous 24h.",
      },
      {
        title: "Maquettes & validation",
        description:
          "Vous visualisez l'application écran par écran avant la première ligne de code. On ajuste jusqu'à validation.",
      },
      {
        title: "Développement itératif",
        description:
          "L'app se construit par étapes, avec des versions testables régulières sur votre propre téléphone.",
      },
      {
        title: "Tests & publication",
        description:
          "Tests sur appareils réels, corrections, puis soumission et publication sur les deux stores.",
      },
      {
        title: "Suivi post-lancement",
        description:
          "Corrections garanties après livraison, et accompagnement pour les évolutions futures.",
      },
    ],
    faq: [
      {
        question: "Combien coûte le développement d'une application mobile ?",
        answer:
          "Cela dépend du périmètre : une app simple à quelques écrans, une app métier avec backend et une marketplace complète sont des projets très différents. Grâce à Flutter, vous obtenez iOS et Android pour le prix d'un seul développement. Consultez ma page tarifs pour des fourchettes indicatives, et recevez un devis précis sous 24h.",
      },
      {
        question: "Pourquoi Flutter plutôt qu'un développement natif ?",
        answer:
          "Flutter permet de créer les versions iOS et Android à partir d'un seul code, avec des performances proches du natif et une interface parfaitement fluide. Résultat : un budget réduit de 40 à 50 %, des délais raccourcis et une maintenance simplifiée. C'est la technologie utilisée par Google, BMW ou Alibaba.",
      },
      {
        question: "L'application fonctionnera-t-elle sans connexion internet ?",
        answer:
          "Oui, si votre usage le nécessite : je conçois des applications offline-first qui stockent les données localement et se synchronisent dès que le réseau revient. C'est indispensable pour les apps utilisées sur le terrain en Afrique de l'Ouest, et c'est une de mes spécialités.",
      },
      {
        question: "Qui s'occupe de la publication sur les stores ?",
        answer:
          "Moi, de bout en bout : création des fiches, captures d'écran, conformité aux règles d'Apple et de Google, soumission et suivi jusqu'à l'approbation. Vous récupérez une application en ligne, pas un fichier à publier vous-même.",
      },
    ],
    relatedProjectSlugs: ["afcom", "afreel", "smartvilla"],
    relatedCitySlugs: ["cotonou", "abomey-calavi", "parakou"],
  },
  {
    slug: "creation-application-web",
    title: "Création d'applications & logiciels web",
    shortTitle: "Applications web",
    iconName: "Globe",
    metaTitle:
      "Création de Site & Application Web au Bénin — Développeur Next.js",
    metaDescription:
      "Développement de sites professionnels et applications web sur-mesure : outils métier, plateformes, espaces clients. Next.js, backend solide, SEO intégré. Devis sous 24h.",
    keywords: [
      "création site web Bénin",
      "création application web",
      "développeur web Cotonou",
      "site professionnel Bénin",
      "logiciel web sur mesure",
      "plateforme web Afrique",
    ],
    heroDescription:
      "Du site professionnel qui convertit au logiciel métier complet qui automatise votre travail : des produits web solides, rapides et bien référencés.",
    intro: [
      "Un site web n'est pas une dépense, c'est un commercial qui travaille 24h/24. Je conçois des sites professionnels et des applications web qui font le job : présenter votre activité de façon crédible, apparaître sur Google quand vos clients vous cherchent, et convertir les visites en demandes de devis.",
      "Au-delà de la vitrine, je développe de véritables logiciels web : outils de gestion, plateformes de services, espaces clients, systèmes de réservation. Des produits complets, avec une logique métier robuste et une interface que vos équipes prennent en main sans formation lourde.",
      "Je travaille avec Next.js et React — les technologies des produits web les plus exigeants — avec une attention particulière à la performance et au référencement : un site que je livre charge vite, s'affiche parfaitement sur mobile et est structuré pour ranker sur Google dès la mise en ligne.",
    ],
    deliverables: [
      "Site ou application web sur-mesure, responsive et rapide",
      "Référencement (SEO) technique intégré dès la conception",
      "Backend et base de données bien architecturés",
      "Espace d'administration pour gérer vos contenus en autonomie",
      "Hébergement configuré, nom de domaine et emails professionnels",
      "Formation et documentation de prise en main",
    ],
    process: [
      {
        title: "Brief & stratégie",
        description:
          "On clarifie l'objectif du site ou de l'outil : à qui il s'adresse, ce qu'il doit produire (contacts, ventes, gain de temps). Devis sous 24h.",
      },
      {
        title: "Maquette & contenu",
        description:
          "Design des pages clés et structuration du contenu, pensés pour la conversion et le référencement.",
      },
      {
        title: "Développement",
        description:
          "Intégration soignée, logique métier, tests — avec des mises en ligne intermédiaires pour valider au fur et à mesure.",
      },
      {
        title: "Mise en ligne & SEO",
        description:
          "Déploiement, configuration du domaine, indexation Google, mesure de la performance.",
      },
      {
        title: "Accompagnement",
        description:
          "Corrections garanties, suivi des premières semaines et évolutions à la demande.",
      },
    ],
    faq: [
      {
        question: "Combien coûte la création d'un site web professionnel ?",
        answer:
          "Un site vitrine soigné, une plateforme avec espace client et un logiciel métier complet correspondent à des budgets différents. Je détaille des fourchettes indicatives sur ma page tarifs — et dans tous les cas, vous recevez un devis précis et transparent sous 24h après notre premier échange.",
      },
      {
        question: "Mon site sera-t-il visible sur Google ?",
        answer:
          "Oui : le référencement fait partie du travail, pas d'une option. Structure sémantique propre, vitesse de chargement optimale, balises et données structurées, sitemap — votre site est construit pour être indexé et bien positionné. Ce site même que vous lisez applique exactement ces méthodes.",
      },
      {
        question: "Pourrai-je modifier le contenu moi-même ?",
        answer:
          "Oui : selon le projet, je mets en place un espace d'administration ou un CMS (Sanity, Payload) qui vous permet de modifier textes, images et actualités sans toucher au code. Je vous forme à son utilisation à la livraison.",
      },
      {
        question: "Refaites-vous les sites existants ?",
        answer:
          "Oui. Si votre site actuel est lent, daté ou invisible sur Google, je réalise un audit puis une refonte qui conserve ce qui fonctionne et corrige ce qui pénalise. La refonte inclut la migration du contenu et les redirections pour ne pas perdre votre référencement existant.",
      },
    ],
    relatedProjectSlugs: ["gain", "archiform", "weman-lms"],
    relatedCitySlugs: ["cotonou", "porto-novo", "bohicon"],
  },
  {
    slug: "creation-saas-dashboard",
    title: "Création de SaaS & dashboards",
    shortTitle: "SaaS & dashboards",
    iconName: "LayoutDashboard",
    metaTitle:
      "Développement SaaS & Dashboard — Du MVP au Produit Scalable | Bénin",
    metaDescription:
      "Développement de produits SaaS et tableaux de bord : architecture multi-tenant, authentification, abonnements, analytics. Du MVP au produit qui scale. Devis sous 24h.",
    keywords: [
      "développement SaaS Afrique",
      "création MVP startup",
      "dashboard sur mesure",
      "développeur SaaS Bénin",
      "plateforme multi-tenant",
      "tableau de bord analytics",
    ],
    heroDescription:
      "Votre produit SaaS construit proprement dès le départ : architecture multi-tenant, abonnements, onboarding — pensé pour encaisser la croissance.",
    intro: [
      "Un SaaS mal architecturé se paie très cher au moment où il décolle : refonte forcée, dette technique, clients frustrés. Je construis des produits SaaS avec les fondations qu'il faut dès le premier jour — multi-tenant, gestion des rôles, facturation par abonnement, monitoring — pour que la croissance soit une bonne nouvelle, pas un problème.",
      "Pour les startups, je développe des MVP qui vont à l'essentiel : la fonctionnalité qui prouve la valeur, livrée en quelques semaines, sur une base saine qui pourra évoluer. Pas de sur-ingénierie, pas de raccourcis toxiques non plus.",
      "Côté interface, je soigne particulièrement les dashboards : données lisibles, visualisations utiles, temps de chargement courts. Un tableau de bord n'est bon que si on comprend la situation en trois secondes.",
    ],
    deliverables: [
      "Architecture multi-tenant sécurisée et scalable",
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
          "On identifie la proposition de valeur et le périmètre minimal qui la démontre. C'est la clé d'un MVP réussi.",
      },
      {
        title: "Architecture",
        description:
          "Choix techniques posés noir sur blanc : base de données, tenancy, auth, hébergement. Le socle qui évite la refonte à 1 000 utilisateurs.",
      },
      {
        title: "Sprints de développement",
        description:
          "Livraisons toutes les 1 à 2 semaines sur un environnement de démo. Vous testez, on ajuste.",
      },
      {
        title: "Lancement",
        description:
          "Mise en production, onboarding des premiers utilisateurs, monitoring actif.",
      },
      {
        title: "Itérations",
        description:
          "Le SaaS vit : j'accompagne les évolutions au rythme de vos retours utilisateurs.",
      },
    ],
    faq: [
      {
        question: "Combien de temps pour développer un MVP ?",
        answer:
          "Généralement 4 à 8 semaines pour un MVP fonctionnel avec authentification, cœur métier et paiement. L'essentiel est de bien découper : on lance vite avec le périmètre qui prouve la valeur, puis on itère sur du concret.",
      },
      {
        question: "Pouvez-vous reprendre un SaaS existant ?",
        answer:
          "Oui. J'audite le code et l'architecture existants, j'identifie ce qui bloque (performance, bugs, scalabilité) et je propose un plan de reprise progressif — sans tout jeter, sauf si c'est réellement la meilleure option.",
      },
      {
        question: "Comment gérez-vous les paiements récurrents ?",
        answer:
          "Avec Stripe pour les clients internationaux et FedaPay ou le Mobile Money pour l'Afrique de l'Ouest : abonnements, essais gratuits, factures automatiques et gestion des échecs de paiement. Le tout intégré proprement dans le produit.",
      },
      {
        question: "Le produit m'appartiendra-t-il entièrement ?",
        answer:
          "Oui, à 100 % : code source, base de données, accès aux services. Tout est documenté et transférable — vous n'êtes jamais prisonnier de votre prestataire, c'est un principe non négociable chez moi.",
      },
    ],
    relatedProjectSlugs: ["weman-lms", "fintech"],
    relatedCitySlugs: ["cotonou", "seme-podji", "abomey-calavi"],
  },
  {
    slug: "creation-ecommerce",
    title: "Création de sites e-commerce",
    shortTitle: "E-commerce",
    iconName: "ShoppingCart",
    metaTitle:
      "Création de Site E-commerce au Bénin — Boutique en Ligne avec Mobile Money",
    metaDescription:
      "Création de boutiques en ligne qui vendent : paiement FedaPay, MTN MoMo, Moov Money et carte bancaire, gestion des stocks et livraison locale. Devis sous 24h.",
    keywords: [
      "création site e-commerce Bénin",
      "boutique en ligne Cotonou",
      "vendre en ligne Bénin",
      "e-commerce Mobile Money",
      "site de vente en ligne Afrique",
      "boutique FedaPay",
    ],
    heroDescription:
      "Des boutiques en ligne qui vendent vraiment : parcours d'achat fluide, paiement Mobile Money et carte bancaire, et un back-office que vous maîtrisez.",
    intro: [
      "Vendre en ligne au Bénin a ses règles propres : vos clients paient par MTN MoMo, Moov Money ou FedaPay bien plus que par carte bancaire, commandent depuis leur téléphone, et veulent une livraison organisée localement. Je construis des boutiques qui respectent ces réalités — c'est ce qui fait la différence entre un site qui vend et un site qui décore.",
      "Chaque boutique que je livre soigne le parcours d'achat : catalogue rapide à parcourir, fiches produits claires, panier sans friction, paiement en deux clics. Côté gestion, vous disposez d'un back-office complet : stocks, commandes, clients, promotions — tout est sous votre contrôle.",
      "Et parce qu'une boutique sans visiteurs ne vend rien, le référencement est intégré dès la construction : vos produits sont structurés pour apparaître sur Google, y compris dans les résultats enrichis avec prix et disponibilité.",
    ],
    deliverables: [
      "Boutique en ligne complète, rapide et mobile-first",
      "Paiements : FedaPay, MTN MoMo, Moov Money, carte bancaire",
      "Back-office : stocks, commandes, clients, promotions",
      "Organisation de la livraison locale et notifications client",
      "SEO produits : données structurées, résultats enrichis Google",
      "Formation complète à la gestion de la boutique",
    ],
    process: [
      {
        title: "Analyse de l'offre",
        description:
          "Catalogue, cibles, zones de livraison, moyens de paiement : on pose le modèle de vente avant de construire.",
      },
      {
        title: "Design du parcours d'achat",
        description:
          "Maquettes des pages clés — accueil, produit, panier, paiement — optimisées pour convertir sur mobile.",
      },
      {
        title: "Développement & intégrations",
        description:
          "Construction de la boutique, intégration des paiements et de la logistique, remplissage du catalogue initial.",
      },
      {
        title: "Tests de bout en bout",
        description:
          "Commandes tests réelles, paiements en conditions réelles, vérification des notifications et du back-office.",
      },
      {
        title: "Lancement & suivi",
        description:
          "Mise en ligne, indexation Google, suivi des premières ventes et ajustements.",
      },
    ],
    faq: [
      {
        question: "Quels moyens de paiement puis-je proposer à mes clients ?",
        answer:
          "Tous ceux qui comptent au Bénin et dans la sous-région : MTN Mobile Money, Moov Money, FedaPay, et la carte bancaire pour les clients internationaux. L'argent arrive directement sur vos comptes — je ne suis jamais intermédiaire dans vos flux financiers.",
      },
      {
        question: "Comment gérer la livraison à Cotonou et à l'intérieur du pays ?",
        answer:
          "La boutique peut calculer des frais par zone (Cotonou, grandes villes, intérieur), proposer le retrait en boutique et notifier le client à chaque étape. Je peux aussi intégrer les services de livraison locaux que vous utilisez déjà.",
      },
      {
        question: "Combien coûte une boutique en ligne ?",
        answer:
          "Cela dépend de la taille du catalogue et des fonctionnalités (promotions, comptes clients, multi-devises…). Les fourchettes indicatives sont sur ma page tarifs ; le devis précis arrive sous 24h. À noter : une boutique bien faite se rembourse vite — c'est un canal de vente, pas une dépense.",
      },
      {
        question: "Pourrai-je gérer la boutique moi-même au quotidien ?",
        answer:
          "Oui, c'est le but : ajouter des produits, suivre les commandes, lancer une promotion — tout se fait depuis un back-office simple, sur ordinateur ou téléphone. Formation incluse à la livraison, avec des guides pas-à-pas.",
      },
    ],
    relatedProjectSlugs: ["afcom", "archiform"],
    relatedCitySlugs: ["cotonou", "porto-novo", "parakou"],
  },
  {
    slug: "backend-api",
    title: "Backend & API",
    shortTitle: "Backend & API",
    iconName: "Code",
    metaTitle:
      "Développement Backend & API — Architecture Robuste et Scalable | Bénin",
    metaDescription:
      "Conception de backends solides : API REST, bases de données, authentification, jobs asynchrones, intégrations Mobile Money. Le socle technique de vos produits.",
    keywords: [
      "développement backend",
      "création API REST",
      "développeur backend Bénin",
      "architecture base de données",
      "intégration API Mobile Money",
      "backend Node.js",
    ],
    heroDescription:
      "Le moteur invisible de vos produits : API propres, base de données bien modélisée, sécurité sérieuse — un socle qui tient la charge et qui dure.",
    intro: [
      "Le backend, c'est ce qu'on ne voit pas mais qui fait tout tenir : la vitesse de vos écrans, la sécurité de vos données, la fiabilité de vos paiements. Un backend bâclé se manifeste des mois plus tard — lenteurs, pertes de données, failles — quand il coûte le plus cher à corriger. Je le construis proprement dès le départ.",
      "Concrètement : des API REST claires et documentées, une base de données modélisée pour vos besoins réels, une authentification sérieuse, des tâches de fond fiables (emails, rappels, synchronisations) et des intégrations tierces maîtrisées — Mobile Money, FedaPay, services de SMS, Google APIs.",
      "J'interviens aussi en renfort : votre équipe a un frontend mais pas de backend solide, votre prestataire précédent a laissé une architecture fragile, votre API actuelle s'écroule sous la charge — je reprends, j'assainis, je documente.",
    ],
    deliverables: [
      "API REST structurée, versionnée et documentée",
      "Base de données modélisée et optimisée (PostgreSQL)",
      "Authentification et gestion fine des permissions",
      "Jobs asynchrones : emails, notifications, synchronisations",
      "Intégrations : Mobile Money, FedaPay, SMS, services tiers",
      "Tests, monitoring et documentation technique complète",
    ],
    process: [
      {
        title: "Audit du besoin",
        description:
          "Analyse des flux de données, des volumes attendus et des intégrations nécessaires. Sur un existant : audit du code en place.",
      },
      {
        title: "Modélisation",
        description:
          "Schéma de base de données et contrat d'API posés et validés avant le développement — c'est là que tout se joue.",
      },
      {
        title: "Développement & tests",
        description:
          "Implémentation avec tests automatisés sur les chemins critiques, notamment les paiements.",
      },
      {
        title: "Mise en production",
        description:
          "Déploiement, monitoring, alertes et documentation — livré prêt à être exploité et repris par n'importe quel développeur.",
      },
    ],
    faq: [
      {
        question: "Mon application existante peut-elle garder son frontend ?",
        answer:
          "Oui : le backend est indépendant. Je peux construire ou reconstruire le moteur derrière votre app mobile ou web existante sans toucher à l'interface, avec une migration des données organisée et sans interruption de service.",
      },
      {
        question: "Comment intégrez-vous les paiements Mobile Money côté serveur ?",
        answer:
          "Via les API officielles (FedaPay, MTN, Moov) avec tout ce qu'un paiement sérieux exige : vérification des webhooks, idempotence, gestion des échecs et des remboursements, journalisation complète. Un paiement ne doit jamais être perdu ni compté deux fois.",
      },
      {
        question: "Le backend tiendra-t-il si mon activité grandit ?",
        answer:
          "C'est le critère de conception : requêtes optimisées, cache, files d'attente pour les traitements lourds. Un backend que je livre passe de 100 à 100 000 utilisateurs en ajoutant des ressources, pas en réécrivant le code.",
      },
      {
        question: "Livrez-vous la documentation technique ?",
        answer:
          "Systématiquement : documentation d'API, schéma de la base, guide de déploiement et décisions d'architecture. N'importe quel développeur compétent peut reprendre le projet — vous restez libre.",
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
      "Audit Technique & Optimisation de Site Web — Performance et SEO | Bénin",
    metaDescription:
      "Site lent, invisible sur Google ou vieillissant ? Audit technique complet, optimisation des performances, refonte et mise à niveau SEO. Diagnostic clair, plan d'action chiffré.",
    keywords: [
      "audit site web",
      "optimisation performance web",
      "refonte site web Bénin",
      "site lent solution",
      "améliorer référencement Google",
      "audit technique application",
    ],
    heroDescription:
      "Votre site est lent, invisible sur Google ou difficile à maintenir ? Diagnostic précis, plan d'action chiffré, et exécution soignée.",
    intro: [
      "Beaucoup d'entreprises ont déjà un site ou une application — mais qui dessert plus qu'il ne sert : pages qui mettent dix secondes à charger, positionnement Google inexistant, bugs récurrents, prestataire injoignable. Avant de tout refaire, il faut comprendre précisément ce qui pèche.",
      "Mon audit couvre les quatre dimensions qui comptent : la performance (Core Web Vitals, temps de chargement réels), le référencement (structure, balises, indexation), la qualité du code (maintenabilité, sécurité) et l'expérience utilisateur (parcours, mobile, accessibilité). Vous recevez un rapport clair, hiérarchisé, avec le coût et l'impact de chaque correction.",
      "Ensuite, deux options : je corrige les points critiques sur l'existant, ou — quand c'est plus rentable — je mène une refonte qui préserve votre acquis (contenu, référencement, données) tout en repartant sur des bases saines.",
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
          "Analyse technique outillée + revue manuelle du code, du SEO et des parcours. Sans rien casser de l'existant.",
      },
      {
        title: "Restitution",
        description:
          "Rapport en langage clair : ce qui va, ce qui pénalise, ce que ça coûte de corriger et ce que ça rapporte.",
      },
      {
        title: "Corrections priorisées",
        description:
          "Exécution en commençant par le ratio impact/effort le plus fort — les gains se voient dès les premières semaines.",
      },
      {
        title: "Mesure & suivi",
        description:
          "Comparaison avant/après sur les métriques réelles : vitesse, positions Google, conversions.",
      },
    ],
    faq: [
      {
        question: "Mon site est lent, pouvez-vous le diagnostiquer sans le refaire ?",
        answer:
          "Oui, c'est exactement le rôle de l'audit : identifier précisément ce qui ralentit (images, scripts, hébergement, code) et corriger de façon ciblée. Dans la majorité des cas, on gagne 50 à 80 % de temps de chargement sans refonte complète.",
      },
      {
        question: "Une refonte va-t-elle me faire perdre mon référencement ?",
        answer:
          "Pas si elle est bien menée : inventaire des pages qui rankent, redirections 301 systématiques, conservation des contenus qui performent. Une refonte propre améliore le référencement — c'est une refonte bâclée qui le détruit.",
      },
      {
        question: "Pouvez-vous auditer une application développée par quelqu'un d'autre ?",
        answer:
          "Oui, c'est fréquent : prestataire disparu, code hérité, doutes sur la qualité. J'audite le code, la sécurité et l'architecture, puis je vous dis honnêtement s'il faut consolider ou reconstruire — avec les chiffres pour décider.",
      },
      {
        question: "L'audit m'engage-t-il à vous confier les corrections ?",
        answer:
          "Non : le rapport d'audit vous appartient et il est suffisamment détaillé pour être exécuté par n'importe quel développeur sérieux. Si vous me confiez la suite, le coût de l'audit est déduit du devis.",
      },
    ],
    relatedProjectSlugs: ["gain", "archiform"],
    relatedCitySlugs: ["cotonou", "porto-novo", "abomey-calavi"],
  },
];
