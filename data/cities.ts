// Pages SEO locales — une entrée par ville, avec du contenu différencié.
// Règle : chaque ville doit avoir une intro, des opportunités et une FAQ
// qui lui sont propres. Pas de contenu dupliqué d'une ville à l'autre.

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityOpportunity {
  title: string;
  description: string;
  iconName: string;
}

export interface LocalCity {
  slug: string;
  name: string;
  department: string;
  regionCode: string;
  tagline: string;
  metaDescription: string;
  intro: string[];
  opportunities: CityOpportunity[];
  anchors: string[];
  faq: CityFaq[];
  nearby: string[];
  geo: { latitude: number; longitude: number };
}

export const CITY_SLUG_PREFIX = "developpeur-web";

export function cityFullSlug(city: LocalCity): string {
  return `${CITY_SLUG_PREFIX}-${city.slug}`;
}

export function getCityByFullSlug(fullSlug: string): LocalCity | undefined {
  return localCities.find((city) => cityFullSlug(city) === fullSlug);
}

export function getCityBySlug(slug: string): LocalCity | undefined {
  return localCities.find((city) => city.slug === slug);
}

export const localCities: LocalCity[] = [
  {
    slug: "cotonou",
    name: "Cotonou",
    department: "Littoral",
    regionCode: "BJ-LI",
    tagline: "Capitale économique du Bénin",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Cotonou. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Je suis installé à Cotonou. Si vous avez besoin d’un logiciel de gestion ou d’une application mobile, nous pouvons nous rencontrer pour parler de votre activité et regarder vos outils actuels.",
      "Vous souhaitez vendre en ligne, suivre vos commandes ou lancer un service ? Je vous aide à choisir les fonctions à développer et les moyens de paiement adaptés à vos clients.",
    ],
    opportunities: [
      {
        title: "E-commerce avec paiement local",
        description:
          "Je prépare votre catalogue, vos commandes et les paiements retenus pour la boutique.",
        iconName: "ShoppingCart",
      },
      {
        title: "Digitalisation des PME",
        description:
          "Je réunis vos factures, vos stocks et vos dossiers clients dans un logiciel que votre équipe peut consulter.",
        iconName: "LayoutDashboard",
      },
      {
        title: "Applications mobiles grand public",
        description:
          "Je développe votre application pour iOS et Android à partir des usages que vous me présentez.",
        iconName: "Smartphone",
      },
      {
        title: "Plateformes SaaS & fintech",
        description:
          "Je vous accompagne pour lancer une première version de votre service et préparer ses évolutions.",
        iconName: "Rocket",
      },
    ],
    anchors: [
      "Port autonome de Cotonou",
      "Marché international Dantokpa",
      "Quartiers d'affaires Ganhi et Haie Vive",
      "Aéroport international Cardinal Bernardin Gantin",
    ],
    faq: [
      {
        question: "Peut-on se rencontrer en présentiel à Cotonou ?",
        answer:
          "Je suis basé à Cotonou. Commençons par un appel pour parler de votre idée. Si vous préférez un rendez-vous à Cotonou, je vous indique mes disponibilités et les conditions du déplacement.",
      },
      {
        question: "Combien coûte un site web professionnel à Cotonou ?",
        answer:
          "Dans mes offres, un site vitrine démarre à 170 000 FCFA et un logiciel web à 650 000 FCFA. Dites-moi ce que votre site doit permettre de faire : je vous prépare un devis selon les pages et les fonctionnalités prévues.",
      },
      {
        question: "Intégrez-vous les moyens de paiement béninois ?",
        answer:
          "Oui. Je regarde avec vous les moyens de paiement utilisés par vos clients et les services disponibles pour votre compte. Nous choisissons le prestataire, puis je connecte les paiements et leurs confirmations à votre site ou à votre application.",
      },
      {
        question: "Quels délais pour livrer un projet ?",
        answer:
          "Le délai dépend des écrans, des connexions et des données à reprendre. Je vous propose un calendrier après notre échange et nous fixons les étapes avant de commencer. Les fourchettes de ma page Tarifs vous donnent un premier repère.",
      },
    ],
    nearby: ["abomey-calavi", "porto-novo", "ouidah", "seme-podji"],
    geo: {
      latitude: 6.3654,
      longitude: 2.4183,
    },
  },
  {
    slug: "abomey-calavi",
    name: "Abomey-Calavi",
    department: "Atlantique",
    regionCode: "BJ-AQ",
    tagline: "Écoles, commerces et immobilier",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Abomey-Calavi. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous gérez une école, un commerce ou une activité immobilière à Abomey-Calavi ? Je peux vous aider à réunir vos inscriptions, vos annonces ou vos commandes dans une plateforme web.",
      "Je suis basé à Cotonou. Nous pouvons organiser un premier échange à distance ou convenir d’une rencontre pour regarder votre besoin ensemble.",
    ],
    opportunities: [
      {
        title: "Plateformes immobilières",
        description:
          "Je développe votre catalogue d’annonces et les fonctions nécessaires pour suivre les demandes.",
        iconName: "Home",
      },
      {
        title: "Solutions pour écoles et universités",
        description:
          "Je peux relier les inscriptions, les notes et les paiements dans un portail pour votre établissement.",
        iconName: "GraduationCap",
      },
      {
        title: "E-commerce de proximité",
        description:
          "Je prépare la boutique, les moyens de paiement et les zones de livraison que vous souhaitez proposer.",
        iconName: "ShoppingCart",
      },
      {
        title: "Apps pour les services du quotidien",
        description:
          "Je vous aide à construire une application de réservation, de livraison ou d’annonces selon votre service.",
        iconName: "Smartphone",
      },
    ],
    anchors: [
      "Université d'Abomey-Calavi (UAC)",
      "Carrefour de Godomey",
      "Zones en pleine expansion : Akassato, Tankpè, Togba",
    ],
    faq: [
      {
        question: "Intervenez-vous physiquement à Abomey-Calavi ?",
        answer:
          "Je suis basé à Cotonou. Commençons par un appel pour parler de votre idée. Si vous préférez un rendez-vous à Abomey-Calavi, je vous indique mes disponibilités et les conditions du déplacement.",
      },
      {
        question: "Pouvez-vous créer une plateforme pour mon école privée ?",
        answer:
          "Je peux créer un portail pour les inscriptions, les notes, les paiements et les échanges avec les parents. Nous choisissons les fonctions selon votre établissement et la façon dont votre équipe travaille.",
      },
      {
        question: "Quel budget prévoir pour un site d'annonces immobilières ?",
        answer:
          "Un logiciel web démarre à 650 000 FCFA dans mes offres. Pour votre plateforme immobilière, je regarde avec vous les annonces, les recherches, les comptes utilisateurs et les fonctions de gestion avant de chiffrer le projet.",
      },
    ],
    nearby: ["cotonou", "ouidah", "porto-novo"],
    geo: {
      latitude: 6.4487,
      longitude: 2.3556,
    },
  },
  {
    slug: "porto-novo",
    name: "Porto-Novo",
    department: "Ouémé",
    regionCode: "BJ-OU",
    tagline: "Capitale administrative du Bénin",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Porto-Novo. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous avez un projet web ou mobile à Porto-Novo ? Je peux développer votre espace de gestion, vos démarches en ligne ou votre catalogue, selon ce que vous souhaitez proposer à vos utilisateurs.",
      "Si votre activité s’adresse aussi à des anglophones, nous pouvons prévoir une version française et anglaise. Nous décidons des contenus et des fonctions utiles avant de développer.",
    ],
    opportunities: [
      {
        title: "Sites institutionnels",
        description:
          "Je prépare vos pages d’information, vos documents et les formulaires utiles à vos usagers.",
        iconName: "Briefcase",
      },
      {
        title: "Valorisation du patrimoine",
        description:
          "Je peux réunir les informations de visite, les réservations et la billetterie dans un site.",
        iconName: "Palette",
      },
      {
        title: "Commerce transfrontalier",
        description:
          "Je développe votre catalogue et vos outils de suivi, avec les langues utiles à vos partenaires.",
        iconName: "Store",
      },
      {
        title: "Applications de services",
        description:
          "Je vous aide à mettre en ligne les rendez-vous, les demandes et le suivi des dossiers.",
        iconName: "Globe",
      },
    ],
    anchors: [
      "Musée Honmè et patrimoine afro-brésilien",
      "Corridor commercial Cotonou-Lagos",
      "Quartiers Ouando, Tokpota, Houinmè",
    ],
    faq: [
      {
        question: "Faites-vous des sites multilingues français-anglais ?",
        answer:
          "Oui. Je peux prévoir des versions française et anglaise. Nous préparons les contenus dans les deux langues et je mets en place les pages et la navigation correspondantes.",
      },
      {
        question: "Travaillez-vous avec les administrations et ONG ?",
        answer:
          "Je peux développer vos pages d’information, vos documents et vos formulaires. Nous regardons ensemble les accès, les données à protéger et la manière dont votre équipe publiera les contenus.",
      },
      {
        question: "Peut-on se voir à Porto-Novo pour discuter du projet ?",
        answer:
          "Je suis basé à Cotonou. Commençons par un appel pour parler de votre idée. Si vous préférez un rendez-vous à Porto-Novo, je vous indique mes disponibilités et les conditions du déplacement.",
      },
    ],
    nearby: ["cotonou", "seme-podji", "abomey-calavi"],
    geo: {
      latitude: 6.4969,
      longitude: 2.6289,
    },
  },
  {
    slug: "parakou",
    name: "Parakou",
    department: "Borgou",
    regionCode: "BJ-BO",
    tagline: "Capitale économique du nord Bénin",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Parakou. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Votre équipe à Parakou a besoin de suivre des stocks, des expéditions ou des collectes ? Je développe des outils web et mobiles pour regrouper ces informations et faciliter leur consultation.",
      "Je travaille depuis Cotonou et je vous montre l’application à distance au fil du développement. Vous essayez les fonctions et nous échangeons sur vos retours. Si le projet demande une rencontre sur place, nous regardons comment l’organiser.",
    ],
    opportunities: [
      {
        title: "Gestion pour commerçants et grossistes",
        description:
          "Je vous aide à retrouver les ventes, les stocks et les factures au même endroit.",
        iconName: "Receipt",
      },
      {
        title: "Plateformes agro et coton",
        description:
          "Je développe les fiches des membres, le suivi des collectes et les exports nécessaires à vos rapports.",
        iconName: "Sprout",
      },
      {
        title: "Transport et logistique",
        description:
          "Je peux relier les réservations, les véhicules et les expéditions dans votre outil de gestion.",
        iconName: "Truck",
      },
      {
        title: "E-commerce pour le nord",
        description:
          "Je prépare votre boutique avec les options de paiement et de livraison convenues.",
        iconName: "ShoppingCart",
      },
    ],
    anchors: [
      "Marché international Arzèkè",
      "Université de Parakou",
      "Carrefour routier vers le Niger, le Nigeria et le Burkina Faso",
      "Bassin cotonnier du Borgou",
    ],
    faq: [
      {
        question: "Comment se passe un projet à distance depuis Parakou ?",
        answer:
          "Nous commençons par un appel pour parler de votre besoin. Je vous prépare ensuite un devis, puis nous avançons par étapes avec des versions que vous pouvez essayer. Nous convenons des échanges et des éventuelles rencontres avant de commencer.",
      },
      {
        question: "Pouvez-vous digitaliser la gestion de ma coopérative ?",
        answer:
          "Je peux réunir le suivi des membres, des cotisations, des collectes et des paiements dans un même outil. Vous me montrez vos fiches actuelles pour que je prépare les écrans et les rapports utiles.",
      },
      {
        question: "Mes clients pourront-ils payer par Mobile Money ?",
        answer:
          "Oui. Je peux intégrer un prestataire de paiement Mobile Money et le suivi des confirmations. Nous vérifions d’abord les moyens disponibles pour vos clients et les conditions d’ouverture de votre compte.",
      },
    ],
    nearby: ["djougou", "kandi", "natitingou"],
    geo: {
      latitude: 9.3372,
      longitude: 2.6303,
    },
  },
  {
    slug: "djougou",
    name: "Djougou",
    department: "Donga",
    regionCode: "BJ-DO",
    tagline: "Carrefour commercial du nord-ouest",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Djougou. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous souhaitez mieux suivre les commandes de votre commerce ou les collectes de votre coopérative à Djougou ? Je peux vous aider à remplacer les informations dispersées par un outil que votre équipe utilise au quotidien.",
      "Nous regardons aussi les téléphones et la connexion disponibles. Si vos agents doivent saisir des informations sans réseau, je peux prévoir leur stockage sur le téléphone et leur synchronisation.",
    ],
    opportunities: [
      {
        title: "Filières karité et anacarde",
        description:
          "Je réunis le suivi des membres, des collectes et des produits disponibles dans une plateforme.",
        iconName: "Sprout",
      },
      {
        title: "Commerce et négoce",
        description:
          "Je développe un outil pour enregistrer les ventes, préparer les factures et retrouver les stocks.",
        iconName: "Store",
      },
      {
        title: "Artisanat en ligne",
        description:
          "Je vous aide à présenter vos créations et à recevoir les commandes depuis un catalogue en ligne.",
        iconName: "Palette",
      },
      {
        title: "Présence web professionnelle",
        description:
          "Je prépare les pages qui expliquent votre activité et donnent accès à vos contacts.",
        iconName: "Globe",
      },
    ],
    anchors: [
      "Grand marché de Djougou",
      "Axe routier Parakou-Natitingou-Togo",
      "Filières karité et anacarde de la Donga",
    ],
    faq: [
      {
        question: "Une coopérative peut-elle vraiment vendre en ligne ?",
        answer:
          "Je peux présenter vos produits, les volumes disponibles et vos contacts dans un catalogue. Vos acheteurs peuvent alors vous adresser des demandes. La vente dépend aussi de vos prix, de la livraison et de votre prospection.",
      },
      {
        question:
          "Nos équipes ne sont pas très à l'aise avec l'informatique, est-ce un problème ?",
        answer:
          "Vous me montrez comment vos équipes travaillent. Je leur propose des écrans à essayer, puis je les ajuste à leurs retours. Je vous accompagne aussi pour la prise en main.",
      },
      {
        question: "Comment travaille-t-on ensemble depuis Djougou ?",
        answer:
          "Nous commençons par un appel pour parler de votre besoin. Je vous prépare ensuite un devis, puis nous avançons par étapes avec des versions que vous pouvez essayer. Nous convenons des échanges et des éventuelles rencontres avant de commencer.",
      },
    ],
    nearby: ["parakou", "natitingou"],
    geo: {
      latitude: 9.7085,
      longitude: 1.666,
    },
  },
  {
    slug: "bohicon",
    name: "Bohicon",
    department: "Zou",
    regionCode: "BJ-ZO",
    tagline: "Carrefour routier et commercial du sud",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Bohicon. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "À Bohicon, vous pouvez me confier un logiciel pour suivre vos stocks, vos factures ou vos livraisons. Je commence par regarder avec vous les tâches qui prennent du temps et les informations difficiles à retrouver.",
      "Nous choisissons les premières fonctions, puis je vous montre les écrans avant de les développer. Vous pouvez essayer l’outil au fil du projet et me faire vos retours.",
    ],
    opportunities: [
      {
        title: "Commerce de gros et distribution",
        description:
          "Je construis votre outil pour suivre les stocks, les commandes et les livraisons.",
        iconName: "Store",
      },
      {
        title: "Transport et logistique",
        description:
          "Je peux réunir les véhicules, les réservations et les courses dans un espace de gestion.",
        iconName: "Truck",
      },
      {
        title: "Boutiques en ligne",
        description:
          "Je prépare votre catalogue, les paiements et les informations de livraison.",
        iconName: "ShoppingCart",
      },
      {
        title: "Facturation et comptabilité simplifiées",
        description:
          "Je vous aide à retrouver vos ventes, vos dépenses et vos factures dans le même outil.",
        iconName: "Receipt",
      },
    ],
    anchors: [
      "Carrefour de la route inter-états (RNIE 2 / RNIE 4)",
      "Marché de Bohicon",
      "Proximité immédiate d'Abomey, cité historique",
    ],
    faq: [
      {
        question: "Mon commerce est petit, un outil digital vaut-il le coup ?",
        answer:
          "Cela dépend de ce qui vous prend du temps aujourd’hui. Nous pouvons commencer par un outil limité aux stocks, aux ventes ou aux crédits. Je vous aide à comparer ce travail avec un logiciel déjà disponible.",
      },
      {
        question:
          "Combien de temps pour mettre en place une boutique en ligne ?",
        answer:
          "Le délai dépend des écrans, des connexions et des données à reprendre. Je vous propose un calendrier après notre échange et nous fixons les étapes avant de commencer. Les fourchettes de ma page Tarifs vous donnent un premier repère.",
      },
      {
        question: "Peut-on se rencontrer avant de démarrer ?",
        answer:
          "Nous commençons par un appel pour parler de votre besoin. Je vous prépare ensuite un devis, puis nous avançons par étapes avec des versions que vous pouvez essayer. Nous convenons des échanges et des éventuelles rencontres avant de commencer.",
      },
    ],
    nearby: ["abomey", "dassa-zoume", "cotonou"],
    geo: {
      latitude: 7.1782,
      longitude: 2.0667,
    },
  },
  {
    slug: "abomey",
    name: "Abomey",
    department: "Zou",
    regionCode: "BJ-ZO",
    tagline: "Cité historique des rois du Danxomè",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Abomey. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous souhaitez présenter votre hôtel, proposer des réservations ou vendre vos créations depuis Abomey ? Je vous aide à préparer le site et les outils nécessaires pour recevoir ces demandes.",
      "Nous regardons d’abord comment vous gérez les disponibilités, les commandes et les paiements. Le site doit correspondre à votre organisation, y compris lorsque vous traitez une demande par téléphone.",
    ],
    opportunities: [
      {
        title: "Hôtellerie et réservation",
        description:
          "Je prépare vos chambres, les demandes de réservation et les moyens de paiement convenus.",
        iconName: "Home",
      },
      {
        title: "Musées et sites culturels",
        description:
          "Je peux publier les informations de visite et mettre en place une réservation ou une billetterie.",
        iconName: "Palette",
      },
      {
        title: "Artisanat d'art",
        description:
          "Je développe votre catalogue de créations et le suivi des commandes.",
        iconName: "Store",
      },
      {
        title: "Événements et festivals",
        description:
          "Je vous aide à présenter l’événement, recevoir les inscriptions et vendre les billets.",
        iconName: "Users",
      },
    ],
    anchors: [
      "Palais royaux d'Abomey (UNESCO)",
      "Musée historique d'Abomey",
      "Artisanat d'art : tissage, sculpture, bas-reliefs",
    ],
    faq: [
      {
        question: "Un petit hôtel a-t-il besoin d'un site avec réservation ?",
        answer:
          "Un site peut permettre à vos visiteurs de consulter les chambres et de vous adresser une réservation. Nous regardons d’abord comment vous gérez les disponibilités et si vous avez besoin d’un paiement en ligne.",
      },
      {
        question:
          "Pouvez-vous créer une boutique pour vendre notre artisanat à l'international ?",
        answer:
          "Je peux créer votre catalogue et connecter les paiements disponibles. Nous préparons aussi les informations sur les frais, les délais et les destinations de livraison.",
      },
      {
        question:
          "Proposez-vous la maintenance du site après la mise en ligne ?",
        answer:
          "Oui. Nous pouvons prévoir les mises à jour, les sauvegardes et les évolutions dans un accord de suivi. Je peux aussi vous montrer comment gérer les contenus courants vous-même.",
      },
    ],
    nearby: ["bohicon", "dassa-zoume"],
    geo: {
      latitude: 7.1826,
      longitude: 1.9912,
    },
  },
  {
    slug: "lokossa",
    name: "Lokossa",
    department: "Mono",
    regionCode: "BJ-MO",
    tagline: "Chef-lieu du département du Mono",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Lokossa. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous dirigez une organisation, une école ou une entreprise à Lokossa ? Je peux développer votre portail, vos formulaires et les fonctions de gestion dont votre équipe a besoin.",
      "Je vous accompagne depuis Cotonou, avec des échanges à distance. Nous définissons les étapes de validation et, si besoin, les rencontres pour la prise en main.",
    ],
    opportunities: [
      {
        title: "Institutions et administrations",
        description:
          "Je prépare les pages, les documents et les formulaires utiles à vos usagers.",
        iconName: "Briefcase",
      },
      {
        title: "Éducation et formation",
        description:
          "Je peux relier les inscriptions, les résultats et les échanges avec les familles dans un portail.",
        iconName: "GraduationCap",
      },
      {
        title: "Coopératives agricoles",
        description:
          "Je développe le suivi des membres, des collectes et des paiements convenus.",
        iconName: "Sprout",
      },
      {
        title: "PME et commerces",
        description:
          "Je vous aide à présenter votre entreprise et à suivre ses clients et ses factures.",
        iconName: "Store",
      },
    ],
    anchors: [
      "Chef-lieu administratif du Mono",
      "Pôle d'enseignement supérieur du sud-ouest",
      "Vallée du Mono et proximité du Togo",
    ],
    faq: [
      {
        question:
          "Pourquoi une entreprise de Lokossa devrait-elle investir dans un site web ?",
        answer:
          "Un site peut aider vos clients à comprendre votre activité et à vous contacter. Nous regardons d’abord ce qu’ils cherchent et ce que vous souhaitez leur proposer, avant de décider du travail à réaliser.",
      },
      {
        question: "Travaillez-vous avec les mairies et services publics ?",
        answer:
          "Je peux développer les pages, les documents et les formulaires de votre organisation. Nous précisons les accès et les besoins de sécurité avec votre équipe.",
      },
      {
        question: "Le suivi à distance fonctionne-t-il vraiment ?",
        answer:
          "Nous commençons par un appel pour parler de votre besoin. Je vous prépare ensuite un devis, puis nous avançons par étapes avec des versions que vous pouvez essayer. Nous convenons des échanges et des éventuelles rencontres avant de commencer.",
      },
    ],
    nearby: ["come", "ouidah", "bohicon"],
    geo: {
      latitude: 6.6389,
      longitude: 1.7167,
    },
  },
  {
    slug: "ouidah",
    name: "Ouidah",
    department: "Atlantique",
    regionCode: "BJ-AQ",
    tagline: "Ville d'histoire, de mémoire et de tourisme",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Ouidah. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous accueillez des visiteurs à Ouidah ? Je peux préparer votre site et vos réservations pour que vos clients trouvent vos informations et vous contactent avant leur arrivée.",
      "Nous choisissons les langues, les moyens de paiement et les informations à publier selon votre public. Vous gardez un espace pour suivre les demandes et modifier les contenus prévus.",
    ],
    opportunities: [
      {
        title: "Hôtels et maisons d'hôtes",
        description:
          "Je prépare vos hébergements et un parcours pour recevoir les demandes de réservation.",
        iconName: "Home",
      },
      {
        title: "Billetterie d'événements",
        description:
          "Je développe la vente de billets et les informations pratiques de votre événement.",
        iconName: "Users",
      },
      {
        title: "Guides et expériences touristiques",
        description:
          "Je peux présenter vos visites dans les langues utiles à votre public et recueillir les réservations.",
        iconName: "Globe",
      },
      {
        title: "Restaurants et plages",
        description:
          "Je vous aide à publier vos menus, vos horaires et vos contacts, avec les réservations prévues.",
        iconName: "Store",
      },
    ],
    anchors: [
      "Route de l'Esclave et Porte du Non-Retour",
      "Vodun Days et Festival international",
      "Musée d'Histoire de Ouidah et Temple des Pythons",
    ],
    faq: [
      {
        question:
          "Comment capter les touristes qui viennent pour les Vodun Days ?",
        answer:
          "Je peux vous aider à publier vos hébergements, vos activités et les informations pratiques avant l’événement. Nous regardons les contenus à préparer et le moyen de recevoir les réservations.",
      },
      {
        question: "Faut-il un site en anglais aussi ?",
        answer:
          "Si votre public comprend des anglophones, une version anglaise peut être utile. Je peux la prévoir avec vous, en précisant qui prépare et valide les traductions.",
      },
      {
        question: "Peut-on accepter les paiements des clients étrangers ?",
        answer:
          "Oui. Je regarde avec vous les moyens de paiement utilisés par vos clients et les services disponibles pour votre compte. Nous choisissons le prestataire, puis je connecte les paiements et leurs confirmations à votre site ou à votre application.",
      },
    ],
    nearby: ["cotonou", "abomey-calavi", "come"],
    geo: {
      latitude: 6.3667,
      longitude: 2.085,
    },
  },
  {
    slug: "natitingou",
    name: "Natitingou",
    department: "Atacora",
    regionCode: "BJ-AK",
    tagline: "Porte d'entrée de la Pendjari et du pays Somba",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Natitingou. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous proposez des hébergements, des visites ou des produits depuis Natitingou ? Je peux développer votre catalogue ou votre outil de réservation pour recevoir les demandes en ligne.",
      "Je tiens compte de votre connexion et de celle de vos clients. Si une partie du travail doit se faire sans réseau, nous le précisons avant de choisir comment construire l’application.",
    ],
    opportunities: [
      {
        title: "Lodges et écolodges",
        description:
          "Je prépare les pages des hébergements et le suivi des demandes de séjour.",
        iconName: "Home",
      },
      {
        title: "Guides et safaris",
        description:
          "Je vous aide à présenter les circuits que vous proposez et à recevoir les réservations.",
        iconName: "Globe",
      },
      {
        title: "Artisanat de l'Atacora",
        description:
          "Je développe votre catalogue pour présenter vos créations et traiter les demandes d’achat.",
        iconName: "Palette",
      },
      {
        title: "Filières agricoles de montagne",
        description:
          "Je peux réunir les membres, les collectes et les stocks de votre coopérative dans un logiciel.",
        iconName: "Sprout",
      },
    ],
    anchors: [
      "Parc national de la Pendjari",
      "Tata somba du pays Somba",
      "Chaîne de l'Atacora et cascades de Kota",
    ],
    faq: [
      {
        question:
          "Nos clients réservent surtout via des agences étrangères, un site changerait-il quelque chose ?",
        answer:
          "Un site vous donne un moyen de recevoir des demandes directement. Nous pouvons présenter vos offres et prévoir les réservations, tout en gardant les canaux de vente qui vous apportent déjà des clients.",
      },
      {
        question:
          "La connexion internet est parfois limitée ici, est-ce gérable ?",
        answer:
          "Nous pouvons prévoir un fonctionnement hors ligne pour les tâches qui le nécessitent. Les données sont alors conservées sur le téléphone, puis synchronisées au retour de la connexion. Je vous explique quelles fonctions nécessitent malgré tout le réseau.",
      },
      {
        question: "Comment collabore-t-on depuis Natitingou ?",
        answer:
          "Nous commençons par un appel pour parler de votre besoin. Je vous prépare ensuite un devis, puis nous avançons par étapes avec des versions que vous pouvez essayer. Nous convenons des échanges et des éventuelles rencontres avant de commencer.",
      },
    ],
    nearby: ["djougou", "parakou"],
    geo: {
      latitude: 10.3042,
      longitude: 1.3796,
    },
  },
  {
    slug: "kandi",
    name: "Kandi",
    department: "Alibori",
    regionCode: "BJ-AL",
    tagline: "Cœur du bassin cotonnier de l'Alibori",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Kandi. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Votre coopérative ou votre entreprise à Kandi doit suivre des producteurs, des intrants ou des livraisons ? Je peux réunir ces informations dans un logiciel web et une application pour vos agents.",
      "Vous me montrez les fiches et les rapports utilisés aujourd’hui. Nous décidons de ce qui doit être saisi sur le terrain, de ce qui doit rester disponible hors ligne et des informations à partager avec le bureau.",
    ],
    opportunities: [
      {
        title: "Coopératives cotonnières",
        description:
          "Je développe les fiches producteurs, le suivi des intrants et les rapports de livraison.",
        iconName: "Sprout",
      },
      {
        title: "Distribution d'intrants",
        description:
          "Je vous aide à suivre les stocks, les crédits accordés et leurs remboursements.",
        iconName: "Truck",
      },
      {
        title: "Paiements Mobile Money",
        description:
          "Je peux connecter les paiements disponibles pour conserver les confirmations dans votre outil.",
        iconName: "Wallet",
      },
      {
        title: "Commerces du nord",
        description:
          "Je construis un espace pour enregistrer les ventes et préparer les factures.",
        iconName: "Store",
      },
    ],
    anchors: [
      "Premier bassin cotonnier du Bénin",
      "Axe routier Parakou-Malanville-Niger",
      "Proximité du parc national du W",
    ],
    faq: [
      {
        question:
          "Nos agents de terrain n'ont pas toujours de réseau, votre outil fonctionnera-t-il ?",
        answer:
          "Nous pouvons prévoir un fonctionnement hors ligne pour les tâches qui le nécessitent. Les données sont alors conservées sur le téléphone, puis synchronisées au retour de la connexion. Je vous explique quelles fonctions nécessitent malgré tout le réseau.",
      },
      {
        question:
          "Peut-on suivre plusieurs milliers de producteurs dans l'outil ?",
        answer:
          "Oui, nous pouvons organiser les données pour suivre plusieurs producteurs. Je vous demande les volumes attendus, les recherches et les rapports nécessaires pour dimensionner l’outil.",
      },
      {
        question: "Quel est le processus pour démarrer depuis Kandi ?",
        answer:
          "Nous commençons par un appel pour parler de votre besoin. Je vous prépare ensuite un devis, puis nous avançons par étapes avec des versions que vous pouvez essayer. Nous convenons des échanges et des éventuelles rencontres avant de commencer.",
      },
    ],
    nearby: ["malanville", "parakou"],
    geo: {
      latitude: 11.1342,
      longitude: 2.9386,
    },
  },
  {
    slug: "malanville",
    name: "Malanville",
    department: "Alibori",
    regionCode: "BJ-AL",
    tagline: "Porte du Bénin sur le Niger",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Malanville. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous gérez des marchandises, des livraisons ou des crédits clients à Malanville ? Je peux vous aider à garder une trace de ces opérations dans un outil de gestion.",
      "Nous partons de vos pratiques : qui enregistre une commande, qui confirme le paiement et qui suit la livraison. Si votre activité implique plusieurs pays, nous vérifions aussi les moyens de paiement disponibles.",
    ],
    opportunities: [
      {
        title: "Commerce transfrontalier",
        description:
          "Je développe votre suivi des commandes, des stocks et des crédits clients.",
        iconName: "Store",
      },
      {
        title: "Transit et logistique",
        description:
          "Je peux réunir les chargements et les étapes d’expédition dans votre outil.",
        iconName: "Truck",
      },
      {
        title: "Paiements traçables",
        description:
          "Je relie les confirmations de paiement aux opérations enregistrées, selon les prestataires disponibles.",
        iconName: "Wallet",
      },
      {
        title: "Filières agricoles du fleuve",
        description:
          "Je vous aide à suivre les membres, les collectes et les ventes de votre coopérative.",
        iconName: "Sprout",
      },
    ],
    anchors: [
      "Marché international de Malanville",
      "Pont sur le fleuve Niger vers Gaya",
      "Corridor commercial Cotonou-Niamey",
    ],
    faq: [
      {
        question:
          "Un outil peut-il gérer des transactions en FCFA des deux côtés de la frontière ?",
        answer:
          "Je peux prévoir le suivi de vos ventes et de vos règlements en FCFA. Pour encaisser en ligne de part et d’autre de la frontière, nous vérifions les pays et les moyens couverts par le prestataire de paiement avant de choisir l’intégration.",
      },
      {
        question:
          "Nos activités reposent beaucoup sur la confiance et l'oral, le digital peut-il s'y adapter ?",
        answer:
          "Nous pouvons conserver vos habitudes de travail tout en enregistrant les crédits, les livraisons et les paiements. Je vous montre des écrans que votre équipe peut essayer avant de décider des ajustements.",
      },
      {
        question:
          "Comment se passe la collaboration à une telle distance de Cotonou ?",
        answer:
          "Nous commençons par un appel pour parler de votre besoin. Je vous prépare ensuite un devis, puis nous avançons par étapes avec des versions que vous pouvez essayer. Nous convenons des échanges et des éventuelles rencontres avant de commencer.",
      },
    ],
    nearby: ["kandi"],
    geo: {
      latitude: 11.8686,
      longitude: 3.3833,
    },
  },
  {
    slug: "savalou",
    name: "Savalou",
    department: "Collines",
    regionCode: "BJ-CO",
    tagline: "Capitale de l'igname et porte des Collines",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Savalou. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous souhaitez suivre les collectes de votre coopérative ou présenter vos produits depuis Savalou ? Je peux développer votre outil de gestion ou votre catalogue en ligne.",
      "Nous décidons ensemble des informations à enregistrer et de celles à partager avec les acheteurs. Je prépare ensuite des écrans que votre équipe peut essayer avant le lancement.",
    ],
    opportunities: [
      {
        title: "Filières igname et anacarde",
        description:
          "Je prépare le suivi des membres, des produits collectés et des demandes des acheteurs.",
        iconName: "Sprout",
      },
      {
        title: "Transformation agroalimentaire",
        description:
          "Je développe votre catalogue et les fonctions de commande pour les produits que vous vendez.",
        iconName: "Store",
      },
      {
        title: "Événements et tourisme",
        description:
          "Je vous aide à présenter l’événement et à gérer les inscriptions ou les réservations.",
        iconName: "Users",
      },
      {
        title: "PME locales",
        description:
          "Je peux relier votre présentation en ligne à un outil de suivi des clients et des factures.",
        iconName: "Briefcase",
      },
    ],
    anchors: [
      "Fête annuelle de l'igname (15 août)",
      "Bassin de production d'igname et d'anacarde",
      "Axe routier Dassa-Zoumè-Djougou",
    ],
    faq: [
      {
        question: "Comment vendre notre production au-delà de Savalou ?",
        answer:
          "Je peux vous aider à présenter vos produits, les volumes disponibles et vos contacts dans un catalogue. Nous prévoyons les informations que les acheteurs doivent avoir avant de vous écrire.",
      },
      {
        question: "Une coopérative peut-elle se payer un outil digital ?",
        answer:
          "Je vous propose d’abord de regarder les fonctions dont vous avez besoin. Mes tarifs vous donnent un repère : un logiciel web démarre à 650 000 FCFA et une application mobile à 900 000 FCFA. Je vous prépare ensuite un devis détaillé ; nous pouvons aussi prévoir une première version plus limitée.",
      },
      {
        question: "Faites-vous le déplacement jusqu'à Savalou ?",
        answer:
          "Je suis basé à Cotonou. Commençons par un appel pour parler de votre idée. Si vous préférez un rendez-vous à Savalou, je vous indique mes disponibilités et les conditions du déplacement.",
      },
    ],
    nearby: ["dassa-zoume", "bohicon"],
    geo: {
      latitude: 7.9281,
      longitude: 1.9756,
    },
  },
  {
    slug: "dassa-zoume",
    name: "Dassa-Zoumè",
    department: "Collines",
    regionCode: "BJ-CO",
    tagline: "Cité des 41 collines et carrefour du centre",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Dassa-Zoumè. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous gérez un hébergement, une association ou un commerce à Dassa-Zoumè ? Je peux vous aider à recevoir les réservations, publier vos informations ou suivre vos demandes dans une plateforme web.",
      "Je vous accompagne à distance depuis Cotonou. Nous préparons les contenus et les fonctions qui seront utiles à vos visiteurs comme à votre équipe.",
    ],
    opportunities: [
      {
        title: "Hébergement des pèlerins",
        description:
          "Je prépare vos pages d’hébergement et un suivi des demandes de réservation.",
        iconName: "Home",
      },
      {
        title: "Restauration et commerces",
        description:
          "Je vous aide à publier les informations dont vos clients ont besoin pour vous trouver et vous joindre.",
        iconName: "Store",
      },
      {
        title: "Paroisses et organisations",
        description:
          "Je crée votre espace pour publier les programmes et recevoir les inscriptions ou les demandes.",
        iconName: "Users",
      },
      {
        title: "Tourisme des collines",
        description:
          "Je peux présenter vos circuits et recueillir les réservations de vos visiteurs.",
        iconName: "Globe",
      },
    ],
    anchors: [
      "Grotte mariale Notre-Dame d'Arigbo",
      "Les 41 collines de Dassa",
      "Carrefour routier RNIE 2 entre le sud et le nord",
    ],
    faq: [
      {
        question: "Comment profiter du pic de fréquentation du pèlerinage ?",
        answer:
          "Je peux mettre en place les demandes de réservation et les confirmations. Nous précisons les périodes, les capacités d’accueil et les informations à demander aux visiteurs.",
      },
      {
        question:
          "Un simple restaurant a-t-il besoin d'une présence en ligne ?",
        answer:
          "Je peux vous aider à publier votre menu, vos horaires, votre localisation et un contact. Nous regardons d’abord les informations que vos clients cherchent et les moyens de les rendre accessibles.",
      },
      {
        question: "Combien coûte un site de réservation pour une auberge ?",
        answer:
          "Un site de présentation démarre à 170 000 FCFA dans mes offres. Si vous souhaitez gérer les disponibilités, les réservations ou les paiements en ligne, je chiffre ces fonctions après avoir regardé avec vous comment votre auberge travaille.",
      },
    ],
    nearby: ["savalou", "bohicon"],
    geo: {
      latitude: 7.75,
      longitude: 2.1833,
    },
  },
  {
    slug: "seme-podji",
    name: "Sèmè-Podji",
    department: "Ouémé",
    regionCode: "BJ-OU",
    tagline: "Corridor Cotonou-Lagos et cité de l'innovation",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Sèmè-Podji. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous lancez un service ou gérez une activité à Sèmè-Podji ? Je développe des plateformes web et des applications mobiles, avec les comptes, les données et les paiements dont votre projet a besoin.",
      "Pour une première version, je vous aide à choisir les fonctions nécessaires au lancement. Si vous avez déjà un outil, nous regardons plutôt ce qu’il faut connecter ou améliorer.",
    ],
    opportunities: [
      {
        title: "Startups et MVP",
        description:
          "Je vous aide à choisir et développer les fonctions de votre première version web ou mobile.",
        iconName: "Rocket",
      },
      {
        title: "Logistique du corridor Lagos",
        description:
          "Je construis votre suivi des marchandises et des opérations de transport.",
        iconName: "Truck",
      },
      {
        title: "Commerce avec le Nigeria",
        description:
          "Je prépare un catalogue bilingue et les fonctions de suivi utiles à votre activité.",
        iconName: "Store",
      },
      {
        title: "Applications web sur-mesure",
        description:
          "Je développe le logiciel qui réunit les tâches et les données de votre équipe.",
        iconName: "LayoutDashboard",
      },
    ],
    anchors: [
      "Sèmè City, cité internationale de l'innovation",
      "Corridor commercial Cotonou-Lagos",
      "Poste frontalier de Sèmè-Kraké",
    ],
    faq: [
      {
        question: "Accompagnez-vous les startups en phase de démarrage ?",
        answer:
          "Je vous aide à choisir les fonctions nécessaires pour faire essayer votre idée. Je développe cette première version, puis nous regardons les retours avant d’ajouter la suite.",
      },
      {
        question: "Peut-on se voir en présentiel à Sèmè-Podji ?",
        answer:
          "Je suis basé à Cotonou. Commençons par un appel pour parler de votre idée. Si vous préférez un rendez-vous à Sèmè-Podji, je vous indique mes disponibilités et les conditions du déplacement.",
      },
      {
        question:
          "Faites-vous des applications tournées vers le marché nigérian ?",
        answer:
          "Je peux prévoir une interface française et anglaise. Pour les paiements et les autres services, nous vérifions ce qui est disponible dans les pays concernés avant de développer.",
      },
    ],
    nearby: ["porto-novo", "cotonou"],
    geo: {
      latitude: 6.3667,
      longitude: 2.7,
    },
  },
  {
    slug: "come",
    name: "Comè",
    department: "Mono",
    regionCode: "BJ-MO",
    tagline: "Carrefour du Mono, entre lac Ahémé et route de Lomé",
    metaDescription:
      "Je développe votre plateforme web ou votre application mobile à Comè. Parlons de vos utilisateurs, de vos fonctions et de votre budget.",
    intro: [
      "Vous avez besoin de suivre vos commandes, de présenter votre activité ou de recevoir des réservations à Comè ? Je peux vous accompagner pour créer le site ou le logiciel adapté.",
      "Je commence par votre organisation et les usages de vos clients. Nous prévoyons ensuite les contenus, les moyens de paiement et les conditions de prise en main.",
    ],
    opportunities: [
      {
        title: "Tourisme du lac Ahémé",
        description:
          "Je vous aide à préparer les informations et les réservations de vos hébergements.",
        iconName: "Home",
      },
      {
        title: "Commerces de l'axe Cotonou-Lomé",
        description:
          "Je développe le suivi de vos ventes, de vos stocks et de vos factures.",
        iconName: "Store",
      },
      {
        title: "Pêche et produits du lac",
        description:
          "Je peux réunir vos produits et vos demandes d’achat dans un catalogue en ligne.",
        iconName: "Sprout",
      },
      {
        title: "Présence web locale",
        description:
          "Je prépare les pages et les outils nécessaires aux échanges avec vos clients.",
        iconName: "Globe",
      },
    ],
    anchors: [
      "Lac Ahémé et eaux thermales de Possotomè",
      "Axe international Cotonou-Lomé",
      "Basse vallée du Mono",
    ],
    faq: [
      {
        question:
          "Le tourisme autour du lac Ahémé peut-il vraiment bénéficier du digital ?",
        answer:
          "Je peux préparer votre présentation, vos produits ou vos hébergements et les moyens de recevoir les demandes. Nous choisissons les pages et les fonctions selon votre activité.",
      },
      {
        question: "Je suis sur la route internationale, comment me démarquer ?",
        answer:
          "Je peux vous aider à présenter votre établissement, vos horaires, vos menus et vos contacts. Nous travaillons les pages et les informations locales pour faciliter les recherches, sans promettre une position précise sur Google.",
      },
      {
        question: "Travaillez-vous avec de petites structures ?",
        answer:
          "Oui. Nous regardons votre besoin et votre budget pour choisir un premier projet réalisable. Je vous dirai aussi si un outil existant ou quelques pages suffisent pour commencer.",
      },
    ],
    nearby: ["lokossa", "ouidah"],
    geo: {
      latitude: 6.4,
      longitude: 1.8833,
    },
  },
];

// Villes mises en avant dans le footer (les plus recherchées)
export const featuredCitySlugs = [
  "cotonou",
  "abomey-calavi",
  "porto-novo",
  "parakou",
  "bohicon",
  "lokossa",
] as const;
