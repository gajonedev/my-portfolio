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
      "Développeur web & mobile freelance basé à Cotonou. Applications web, apps mobiles Flutter, e-commerce avec FedaPay et Mobile Money. Rencontre en présentiel, devis sous 24h.",
    intro: [
      "Je suis développeur web et mobile freelance basé à Cotonou, la capitale économique du Bénin. C'est ici que je vis et que je travaille au quotidien : nous pouvons nous rencontrer en présentiel pour discuter de votre projet, à Ganhi, Haie Vive, Cadjèhoun, Fidjrossè ou dans le quartier de votre choix.",
      "Entre le Port autonome, le marché Dantokpa, les sièges d'entreprises et un écosystème startup en pleine effervescence, Cotonou concentre l'essentiel de l'activité économique du pays. Les entreprises qui y digitalisent leurs services prennent une longueur d'avance : c'est exactement ce que je vous aide à faire, avec des applications web et mobiles solides, pensées pour le marché béninois.",
    ],
    opportunities: [
      {
        title: "E-commerce avec paiement local",
        description:
          "Boutiques en ligne avec FedaPay, MTN MoMo et Moov Money intégrés, et gestion de la livraison dans les quartiers de Cotonou.",
        iconName: "ShoppingCart",
      },
      {
        title: "Digitalisation des PME",
        description:
          "Facturation, gestion de stock, suivi client : des outils web sur-mesure pour les commerces et entreprises de la ville.",
        iconName: "LayoutDashboard",
      },
      {
        title: "Applications mobiles grand public",
        description:
          "Apps Flutter iOS et Android pour toucher une population jeune et ultra-connectée au mobile.",
        iconName: "Smartphone",
      },
      {
        title: "Plateformes SaaS & fintech",
        description:
          "Des produits web scalables pour les startups de l'écosystème cotonois, du MVP à la mise en production.",
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
          "Oui, je suis basé à Cotonou. Nous pouvons organiser un rendez-vous physique pour cadrer votre projet, faire le point en cours de développement ou vous former à l'utilisation de votre outil. C'est l'un des avantages de travailler avec un développeur local.",
      },
      {
        question: "Combien coûte un site web professionnel à Cotonou ?",
        answer:
          "Tout dépend du projet : un site vitrine soigné, une boutique en ligne avec paiement Mobile Money et une application métier complète n'ont pas le même périmètre. Je vous envoie un devis clair et détaillé sous 24h après notre premier échange, sans engagement.",
      },
      {
        question: "Intégrez-vous les moyens de paiement béninois ?",
        answer:
          "Oui, c'est même une de mes spécialités : FedaPay, MTN Mobile Money, Moov Money et les cartes bancaires. Vos clients paient avec les moyens qu'ils utilisent réellement au quotidien, ce qui augmente directement vos conversions.",
      },
      {
        question: "Quels délais pour livrer un projet ?",
        answer:
          "Comptez 2 à 8 semaines selon le scope, avec des points d'étape réguliers. Un site vitrine peut aller plus vite ; une application métier ou un SaaS demande plus de profondeur. Le planning est posé noir sur blanc dès le devis.",
      },
    ],
    nearby: ["abomey-calavi", "porto-novo", "ouidah", "seme-podji"],
    geo: { latitude: 6.3654, longitude: 2.4183 },
  },
  {
    slug: "abomey-calavi",
    name: "Abomey-Calavi",
    department: "Atlantique",
    regionCode: "BJ-AQ",
    tagline: "Ville universitaire et commune la plus peuplée du Bénin",
    metaDescription:
      "Développeur web & mobile à Abomey-Calavi : sites, applications et e-commerce pour les entreprises, écoles et commerces de Calavi, Godomey et Akassato. Basé à Cotonou, à 20 minutes.",
    intro: [
      "Abomey-Calavi est devenue la commune la plus peuplée du Bénin, portée par l'Université d'Abomey-Calavi (UAC) et une croissance urbaine spectaculaire de Godomey à Akassato en passant par Tankpè. Cette dynamique crée une demande énorme en services digitaux : immobilier, éducation, commerce de proximité.",
      "Basé à Cotonou, à une vingtaine de minutes, j'accompagne les entrepreneurs, écoles et commerces de Calavi dans leurs projets web et mobiles. Déplacement en présentiel possible sans difficulté, du centre de Calavi à Zinvié.",
    ],
    opportunities: [
      {
        title: "Plateformes immobilières",
        description:
          "Annonces, visites et gestion locative en ligne pour un marché immobilier parmi les plus actifs du pays.",
        iconName: "Home",
      },
      {
        title: "Solutions pour écoles et universités",
        description:
          "Sites d'établissements, inscriptions en ligne, portails de notes et plateformes e-learning pour la ville de l'UAC.",
        iconName: "GraduationCap",
      },
      {
        title: "E-commerce de proximité",
        description:
          "Boutiques en ligne avec paiement Mobile Money et livraison dans les quartiers de Calavi et Godomey.",
        iconName: "ShoppingCart",
      },
      {
        title: "Apps pour les services du quotidien",
        description:
          "Transport, livraison, petites annonces : des applications mobiles pensées pour une population jeune et étudiante.",
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
          "Oui. Je suis basé à Cotonou, juste à côté : je me déplace régulièrement à Calavi, Godomey ou Akassato pour rencontrer des clients, cadrer un projet ou assurer un suivi en présentiel.",
      },
      {
        question: "Pouvez-vous créer une plateforme pour mon école privée ?",
        answer:
          "Absolument. Site vitrine de l'établissement, préinscriptions en ligne, portail parents-élèves, gestion des notes et des paiements de scolarité par Mobile Money : je conçois des outils adaptés aux établissements de Calavi, du primaire au supérieur.",
      },
      {
        question: "Quel budget prévoir pour un site d'annonces immobilières ?",
        answer:
          "Une plateforme d'annonces avec recherche, photos, contact des propriétaires et espace d'administration démarre généralement autour de quelques centaines de milliers de FCFA et évolue selon les fonctionnalités (paiement en ligne, abonnements, application mobile). Devis précis sous 24h.",
      },
    ],
    nearby: ["cotonou", "ouidah", "porto-novo"],
    geo: { latitude: 6.4487, longitude: 2.3556 },
  },
  {
    slug: "porto-novo",
    name: "Porto-Novo",
    department: "Ouémé",
    regionCode: "BJ-OU",
    tagline: "Capitale administrative du Bénin",
    metaDescription:
      "Développeur web & mobile à Porto-Novo : sites institutionnels, e-commerce et applications pour les entreprises de la capitale. Présentiel possible, devis sous 24h.",
    intro: [
      "Capitale administrative du Bénin, Porto-Novo réunit institutions, administrations et un patrimoine culturel remarquable, du musée Honmè aux maisons afro-brésiliennes. Sa position sur le corridor Cotonou-Lagos en fait aussi une place forte du commerce avec le Nigeria.",
      "J'accompagne les institutions, entreprises et commerçants de Porto-Novo dans leur transformation digitale : sites officiels, plateformes de services, boutiques en ligne. Depuis Cotonou, je suis à moins d'une heure de route de Ouando, Tokpota ou Houinmè pour un rendez-vous en présentiel.",
    ],
    opportunities: [
      {
        title: "Sites institutionnels",
        description:
          "Sites web modernes et accessibles pour les administrations, mairies, ONG et organisations basées dans la capitale.",
        iconName: "Briefcase",
      },
      {
        title: "Valorisation du patrimoine",
        description:
          "Sites et billetteries en ligne pour les musées, sites culturels et événements de la ville aux trois noms.",
        iconName: "Palette",
      },
      {
        title: "Commerce transfrontalier",
        description:
          "Catalogues en ligne et outils de gestion pour les commerçants qui travaillent avec le Nigeria voisin.",
        iconName: "Store",
      },
      {
        title: "Applications de services",
        description:
          "Prise de rendez-vous, démarches en ligne, portails citoyens : le digital au service des habitants.",
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
          "Oui. Pour les acteurs de Porto-Novo qui travaillent avec le Nigeria ou des partenaires internationaux, je conçois des sites bilingues français-anglais avec un référencement optimisé dans les deux langues.",
      },
      {
        question: "Travaillez-vous avec les administrations et ONG ?",
        answer:
          "Oui, je réalise des sites institutionnels : présentation claire, publication d'actualités et de documents, formulaires de contact ou de démarches, accessibilité et sécurité. Je peux aussi former vos équipes à la mise à jour du contenu.",
      },
      {
        question: "Peut-on se voir à Porto-Novo pour discuter du projet ?",
        answer:
          "Bien sûr. Je suis basé à Cotonou et me déplace facilement à Porto-Novo pour une première rencontre, une réunion de cadrage ou une restitution. Le reste du suivi peut se faire à distance, à votre convenance.",
      },
    ],
    nearby: ["cotonou", "seme-podji", "abomey-calavi"],
    geo: { latitude: 6.4969, longitude: 2.6289 },
  },
  {
    slug: "parakou",
    name: "Parakou",
    department: "Borgou",
    regionCode: "BJ-BO",
    tagline: "Capitale économique du nord Bénin",
    metaDescription:
      "Développeur web & mobile pour Parakou et le nord Bénin : outils de gestion, e-commerce, plateformes agro. Collaboration à distance rodée, déplacements possibles.",
    intro: [
      "Carrefour commercial du septentrion, Parakou relie le sud du Bénin au Niger, au Nigeria et au Burkina Faso. Entre le marché Arzèkè, la filière coton, les transporteurs et l'Université de Parakou, la ville regorge d'activités qui gagnent énormément à se digitaliser.",
      "Je travaille avec les entreprises et organisations de Parakou principalement à distance, appels réguliers, démos en ligne, livraisons progressives, avec des déplacements possibles pour les phases clés d'un projet. La distance n'est pas un frein : c'est la méthode qui compte, et la mienne est rodée.",
    ],
    opportunities: [
      {
        title: "Gestion pour commerçants et grossistes",
        description:
          "Stocks, facturation, suivi des ventes : des outils simples et robustes pour les acteurs du marché Arzèkè et au-delà.",
        iconName: "Receipt",
      },
      {
        title: "Plateformes agro et coton",
        description:
          "Suivi des coopératives, traçabilité des récoltes, mise en relation producteurs-acheteurs pour la filière agricole du Borgou.",
        iconName: "Sprout",
      },
      {
        title: "Transport et logistique",
        description:
          "Réservation, suivi de flotte et gestion des expéditions pour les transporteurs du carrefour nord.",
        iconName: "Truck",
      },
      {
        title: "E-commerce pour le nord",
        description:
          "Boutiques en ligne avec Mobile Money pour vendre à Parakou et livrer dans tout le septentrion.",
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
          "Très simplement : un premier appel pour cadrer le besoin, un devis sous 24h, puis des livraisons progressives avec des démos en visio à chaque étape. Vous voyez le projet avancer concrètement, semaine après semaine. Je peux aussi me déplacer à Parakou pour le lancement ou la formation de vos équipes.",
      },
      {
        question: "Pouvez-vous digitaliser la gestion de ma coopérative ?",
        answer:
          "Oui. Membres, cotisations, collectes, pesées, paiements : je conçois des outils adaptés aux réalités du terrain, utilisables sur mobile même avec une connexion limitée, avec des exports simples pour vos rapports.",
      },
      {
        question: "Mes clients pourront-ils payer par Mobile Money ?",
        answer:
          "Oui, j'intègre MTN MoMo, Moov Money et FedaPay dans les boutiques et applications que je développe. C'est indispensable pour vendre efficacement au Bénin, et particulièrement dans le nord où le Mobile Money est le moyen de paiement dominant.",
      },
    ],
    nearby: ["djougou", "kandi", "natitingou"],
    geo: { latitude: 9.3372, longitude: 2.6303 },
  },
  {
    slug: "djougou",
    name: "Djougou",
    department: "Donga",
    regionCode: "BJ-DO",
    tagline: "Carrefour commercial du nord-ouest",
    metaDescription:
      "Développeur web & mobile pour Djougou : plateformes pour coopératives karité et anacarde, commerce, artisanat. Applications adaptées aux réalités du terrain.",
    intro: [
      "Ville commerçante par excellence, Djougou occupe une position stratégique entre Parakou, Natitingou et le Togo voisin. Son économie vit du négoce, de l'artisanat et des filières agricoles à forte valeur : karité, anacarde, céréales.",
      "Pour les entrepreneurs et coopératives de la Donga, je développe des outils digitaux concrets : catalogues en ligne pour toucher des acheteurs au-delà de la région, gestion des collectes et des membres, présence web professionnelle. Le tout pensé pour fonctionner sur mobile, avec une collaboration à distance simple et efficace.",
    ],
    opportunities: [
      {
        title: "Filières karité et anacarde",
        description:
          "Gestion des coopératives, traçabilité des collectes et vitrines en ligne pour vendre aux acheteurs nationaux et internationaux.",
        iconName: "Sprout",
      },
      {
        title: "Commerce et négoce",
        description:
          "Outils de gestion de stock et de facturation pour les commerçants du grand marché de Djougou.",
        iconName: "Store",
      },
      {
        title: "Artisanat en ligne",
        description:
          "Catalogues et boutiques web pour donner aux artisans de la Donga une visibilité qui dépasse la région.",
        iconName: "Palette",
      },
      {
        title: "Présence web professionnelle",
        description:
          "Sites vitrines rapides et bien référencés pour les entreprises, écoles et organisations locales.",
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
          "Oui, et c'est souvent un tournant : une vitrine web sérieuse avec photos, volumes disponibles et certifications permet d'être contacté directement par des acheteurs de Cotonou ou de l'étranger, sans dépendre uniquement des intermédiaires de passage.",
      },
      {
        question:
          "Nos équipes ne sont pas très à l'aise avec l'informatique, est-ce un problème ?",
        answer:
          "Non. Je conçois des interfaces simples, en français clair, utilisables sur smartphone. Et je prévois systématiquement une formation à la prise en main, avec des guides pas-à-pas adaptés au niveau de vos équipes.",
      },
      {
        question: "Comment travaille-t-on ensemble depuis Djougou ?",
        answer:
          "À distance pour l'essentiel : échanges par téléphone et WhatsApp, démos en ligne, livraisons par étapes. Un déplacement sur place est possible pour les moments clés, comme le lancement ou la formation.",
      },
    ],
    nearby: ["parakou", "natitingou"],
    geo: { latitude: 9.7085, longitude: 1.666 },
  },
  {
    slug: "bohicon",
    name: "Bohicon",
    department: "Zou",
    regionCode: "BJ-ZO",
    tagline: "Carrefour routier et commercial du sud",
    metaDescription:
      "Développeur web & mobile pour Bohicon : outils de gestion pour commerçants et transporteurs, e-commerce, sites professionnels. Devis clair sous 24h.",
    intro: [
      "Tous les axes du sud Bénin passent par Bohicon : la route inter-états vers le nord, l'axe vers Abomey, le rail. Cette position de carrefour a fait de la ville un centre de commerce de gros, de transport et de distribution parmi les plus actifs du pays.",
      "J'aide les commerçants, transporteurs et entreprises de Bohicon à structurer leur activité avec des outils digitaux : gestion de stock et de facturation, suivi des expéditions, boutiques en ligne avec Mobile Money. Des solutions concrètes, dimensionnées pour votre activité réelle.",
    ],
    opportunities: [
      {
        title: "Commerce de gros et distribution",
        description:
          "Gestion des stocks, commandes et livraisons pour les grossistes et distributeurs du carrefour de Bohicon.",
        iconName: "Store",
      },
      {
        title: "Transport et logistique",
        description:
          "Suivi des véhicules, réservations et gestion des courses pour les acteurs du transport routier.",
        iconName: "Truck",
      },
      {
        title: "Boutiques en ligne",
        description:
          "Vendre au-delà de Bohicon avec une boutique web, le paiement Mobile Money et une logistique de livraison simple.",
        iconName: "ShoppingCart",
      },
      {
        title: "Facturation et comptabilité simplifiées",
        description:
          "Des outils légers pour suivre ventes, dépenses et marges sans tableur ni cahier.",
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
          "Oui, à condition qu'il soit dimensionné pour vous. Pas besoin d'un gros logiciel : un outil simple qui suit vos stocks, vos ventes et vos crédits clients vous fait déjà gagner des heures chaque semaine et évite les pertes. On commence petit, on fait évoluer ensuite.",
      },
      {
        question:
          "Combien de temps pour mettre en place une boutique en ligne ?",
        answer:
          "Comptez 3 à 6 semaines pour une boutique complète avec catalogue, paiement Mobile Money et espace de gestion des commandes. Le planning précis est fixé dès le devis, que vous recevez sous 24h.",
      },
      {
        question: "Peut-on se rencontrer avant de démarrer ?",
        answer:
          "Oui. Bohicon est à environ deux heures de Cotonou : un déplacement pour la réunion de cadrage ou le lancement du projet est tout à fait envisageable. Le suivi courant se fait ensuite à distance, par téléphone et démos en ligne.",
      },
    ],
    nearby: ["abomey", "dassa-zoume", "cotonou"],
    geo: { latitude: 7.1782, longitude: 2.0667 },
  },
  {
    slug: "abomey",
    name: "Abomey",
    department: "Zou",
    regionCode: "BJ-ZO",
    tagline: "Cité historique des rois du Danxomè",
    metaDescription:
      "Développeur web pour Abomey : sites pour hôtels, musées et artisans, billetterie et réservation en ligne. Valorisez la cité des palais royaux sur le web.",
    intro: [
      "Ancienne capitale du royaume du Danxomè, Abomey abrite les palais royaux classés au patrimoine mondial de l'UNESCO. Le tourisme culturel, l'artisanat d'art et l'hôtellerie y constituent un potentiel économique que le digital peut démultiplier.",
      "Je conçois pour les acteurs d'Abomey des outils qui convertissent cette richesse en visibilité et en revenus : sites d'hôtels avec réservation en ligne, vitrines pour les artisans, billetteries pour les sites culturels et événements. Un visiteur qui prépare son voyage doit pouvoir vous trouver, et réserver, depuis son téléphone.",
    ],
    opportunities: [
      {
        title: "Hôtellerie et réservation",
        description:
          "Sites d'hôtels et maisons d'hôtes avec réservation et paiement en ligne, pour capter les visiteurs avant leur arrivée.",
        iconName: "Home",
      },
      {
        title: "Musées et sites culturels",
        description:
          "Présentation, horaires, billetterie en ligne et visites guidées réservables pour les lieux de mémoire de la cité royale.",
        iconName: "Palette",
      },
      {
        title: "Artisanat d'art",
        description:
          "Boutiques en ligne pour les tisserands, sculpteurs et forgerons d'Abomey, avec expédition nationale et internationale.",
        iconName: "Store",
      },
      {
        title: "Événements et festivals",
        description:
          "Sites événementiels, billetterie et communication digitale pour les manifestations culturelles.",
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
          "Oui, plus que jamais : la majorité des visiteurs d'Abomey préparent leur séjour en ligne. Un site avec photos soignées, disponibilités et réservation directe vous évite de dépendre uniquement des plateformes internationales et de leurs commissions.",
      },
      {
        question:
          "Pouvez-vous créer une boutique pour vendre notre artisanat à l'international ?",
        answer:
          "Oui : boutique multilingue, paiement par carte bancaire et Mobile Money, et organisation de l'expédition. Je vous accompagne aussi sur les photos produits et la présentation, qui font toute la différence à l'international.",
      },
      {
        question:
          "Proposez-vous la maintenance du site après la mise en ligne ?",
        answer:
          "Oui, je propose un accompagnement après livraison : mises à jour, sauvegardes, évolutions du contenu. Vous pouvez aussi être formé pour gérer vous-même les contenus courants, comme les tarifs ou les actualités.",
      },
    ],
    nearby: ["bohicon", "dassa-zoume"],
    geo: { latitude: 7.1826, longitude: 1.9912 },
  },
  {
    slug: "lokossa",
    name: "Lokossa",
    department: "Mono",
    regionCode: "BJ-MO",
    tagline: "Chef-lieu du département du Mono",
    metaDescription:
      "Développeur web & mobile pour Lokossa et le Mono : sites professionnels, outils de gestion, plateformes pour institutions et coopératives. Devis sous 24h.",
    intro: [
      "Chef-lieu du Mono, Lokossa est le centre administratif et éducatif du sud-ouest béninois, avec ses institutions, ses établissements d'enseignement supérieur et un tissu de PME et de coopératives agricoles tourné vers la vallée du Mono et le Togo voisin.",
      "J'accompagne les organisations et entrepreneurs de Lokossa dans leurs projets digitaux : sites institutionnels, outils de gestion, plateformes éducatives. La collaboration se fait à distance avec des points réguliers, et je me déplace dans le Mono pour les étapes importantes d'un projet.",
    ],
    opportunities: [
      {
        title: "Institutions et administrations",
        description:
          "Sites web clairs et bien structurés pour les services publics, ONG et organisations du département.",
        iconName: "Briefcase",
      },
      {
        title: "Éducation et formation",
        description:
          "Plateformes pour les établissements d'enseignement de Lokossa : inscriptions, résultats, communication avec les parents.",
        iconName: "GraduationCap",
      },
      {
        title: "Coopératives agricoles",
        description:
          "Gestion des membres et des collectes pour les filières de la vallée du Mono : riz, maraîchage, palmier à huile.",
        iconName: "Sprout",
      },
      {
        title: "PME et commerces",
        description:
          "Présence web professionnelle et outils de facturation pour les entreprises locales.",
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
          "Parce que vos clients et partenaires vous cherchent déjà sur Google. Une entreprise du Mono avec un site professionnel bien référencé capte des demandes qui, sans cela, partent vers Cotonou. C'est un investissement qui travaille pour vous 24h/24.",
      },
      {
        question: "Travaillez-vous avec les mairies et services publics ?",
        answer:
          "Oui. Je réalise des sites institutionnels avec publication d'actualités, documents téléchargeables, formulaires de contact et démarches en ligne, dans le respect des standards d'accessibilité et de sécurité.",
      },
      {
        question: "Le suivi à distance fonctionne-t-il vraiment ?",
        answer:
          "Oui : devis sous 24h, démos en ligne à chaque étape, échanges par téléphone et WhatsApp. Vous validez chaque avancée avant de passer à la suivante. Et pour le lancement ou une formation, je me déplace à Lokossa.",
      },
    ],
    nearby: ["come", "ouidah", "bohicon"],
    geo: { latitude: 6.6389, longitude: 1.7167 },
  },
  {
    slug: "ouidah",
    name: "Ouidah",
    department: "Atlantique",
    regionCode: "BJ-AQ",
    tagline: "Ville d'histoire, de mémoire et de tourisme",
    metaDescription:
      "Développeur web pour Ouidah : sites d'hôtels avec réservation en ligne, billetterie d'événements, vitrines pour les acteurs du tourisme et de la culture.",
    intro: [
      "Entre la Route de l'Esclave, la Porte du Non-Retour, ses musées et les Vodun Days qui attirent chaque année des milliers de visiteurs, Ouidah est l'une des destinations culturelles majeures de l'Afrique de l'Ouest. Le tourisme y explose, et avec lui, le besoin d'une vraie présence en ligne.",
      "Je développe pour les hôtels, restaurants, guides et acteurs culturels de Ouidah des sites et outils qui transforment cette affluence en réservations : les visiteurs préparent leur séjour sur Google des semaines à l'avance, et c'est là qu'il faut être visible.",
    ],
    opportunities: [
      {
        title: "Hôtels et maisons d'hôtes",
        description:
          "Sites avec réservation et paiement en ligne pour capter les visiteurs des Vodun Days et de la haute saison touristique.",
        iconName: "Home",
      },
      {
        title: "Billetterie d'événements",
        description:
          "Vente de billets en ligne pour les festivals, concerts et manifestations culturelles de la ville.",
        iconName: "Users",
      },
      {
        title: "Guides et expériences touristiques",
        description:
          "Réservation de visites guidées et d'expériences, avec présentation multilingue pour les visiteurs internationaux.",
        iconName: "Globe",
      },
      {
        title: "Restaurants et plages",
        description:
          "Menus en ligne, réservation de tables et visibilité Google Maps pour les établissements de la côte.",
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
          "En étant visible en ligne bien avant l'événement : un site rapide et multilingue, une fiche Google Business soignée et la réservation en ligne. Les visiteurs réservent hébergement et activités des semaines à l'avance, si vous n'êtes pas trouvable à ce moment-là, la réservation part ailleurs.",
      },
      {
        question: "Faut-il un site en anglais aussi ?",
        answer:
          "Fortement recommandé pour Ouidah : une grande partie des visiteurs vient du Nigeria, des États-Unis, du Brésil et des Caraïbes. Je conçois des sites bilingues français-anglais, avec un référencement travaillé dans les deux langues.",
      },
      {
        question: "Peut-on accepter les paiements des clients étrangers ?",
        answer:
          "Oui : j'intègre le paiement par carte bancaire internationale en plus du Mobile Money local. Vos clients paient leur réservation depuis l'étranger, vous recevez les fonds au Bénin.",
      },
    ],
    nearby: ["cotonou", "abomey-calavi", "come"],
    geo: { latitude: 6.3667, longitude: 2.085 },
  },
  {
    slug: "natitingou",
    name: "Natitingou",
    department: "Atacora",
    regionCode: "BJ-AK",
    tagline: "Porte d'entrée de la Pendjari et du pays Somba",
    metaDescription:
      "Développeur web pour Natitingou : sites et réservation en ligne pour lodges, guides et acteurs de l'écotourisme de l'Atacora et de la Pendjari.",
    intro: [
      "Nichée au pied de la chaîne de l'Atacora, Natitingou est la porte d'entrée du parc national de la Pendjari et du pays Somba, célèbre pour ses tata somba, ces châteaux de terre uniques au monde. L'écotourisme y est un moteur économique de premier plan.",
      "Pour les lodges, guides, agences et artisans de l'Atacora, je crée des sites et outils de réservation qui touchent les voyageurs là où ils préparent leur aventure : en ligne, souvent depuis l'étranger, plusieurs mois avant le départ.",
    ],
    opportunities: [
      {
        title: "Lodges et écolodges",
        description:
          "Sites avec disponibilités et réservation en ligne pour les hébergements de Natitingou et des environs de la Pendjari.",
        iconName: "Home",
      },
      {
        title: "Guides et safaris",
        description:
          "Présentation des circuits, tarifs et réservation pour les guides et agences qui font découvrir la Pendjari et le pays Somba.",
        iconName: "Globe",
      },
      {
        title: "Artisanat de l'Atacora",
        description:
          "Vitrines en ligne pour les artisans locaux, avec vente et expédition vers Cotonou et l'international.",
        iconName: "Palette",
      },
      {
        title: "Filières agricoles de montagne",
        description:
          "Outils de gestion pour les coopératives de l'Atacora : fonio, miel, karité, moringa.",
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
          "Oui : un site professionnel avec réservation directe vous rend indépendant des commissions d'intermédiaires et vous met en contact direct avec les voyageurs. Beaucoup cherchent précisément des acteurs locaux à soutenir, encore faut-il qu'ils vous trouvent.",
      },
      {
        question:
          "La connexion internet est parfois limitée ici, est-ce gérable ?",
        answer:
          "Tout à fait. Je conçois des sites très légers qui se chargent vite même en 3G, et des outils de gestion qui fonctionnent hors-ligne puis se synchronisent. La contrainte réseau fait partie du cahier des charges dès le départ.",
      },
      {
        question: "Comment collabore-t-on depuis Natitingou ?",
        answer:
          "À distance, avec des échanges par téléphone et WhatsApp et des validations par étapes. Le processus est simple et éprouvé : brief, devis sous 24h, maquette, développement, mise en ligne, formation.",
      },
    ],
    nearby: ["djougou", "parakou"],
    geo: { latitude: 10.3042, longitude: 1.3796 },
  },
  {
    slug: "kandi",
    name: "Kandi",
    department: "Alibori",
    regionCode: "BJ-AL",
    tagline: "Cœur du bassin cotonnier de l'Alibori",
    metaDescription:
      "Développeur web & mobile pour Kandi et l'Alibori : outils de gestion pour coopératives cotonnières, agro-business et commerces du nord Bénin.",
    intro: [
      "Chef-lieu de l'Alibori, Kandi est au cœur du premier bassin cotonnier du Bénin. Coopératives, égreneurs, distributeurs d'intrants et transporteurs y animent une économie agricole puissante mais encore largement gérée sur papier.",
      "C'est précisément là que le digital apporte le plus : je développe pour les acteurs de l'Alibori des outils de gestion adaptés au terrain, suivi des producteurs, des intrants et des collectes, paiements Mobile Money, utilisables sur smartphone, même avec une connexion intermittente.",
    ],
    opportunities: [
      {
        title: "Coopératives cotonnières",
        description:
          "Suivi des producteurs, des surfaces, des intrants distribués et des livraisons de coton-graine, avec des rapports clairs.",
        iconName: "Sprout",
      },
      {
        title: "Distribution d'intrants",
        description:
          "Gestion des stocks, des crédits de campagne et des remboursements pour les distributeurs de l'Alibori.",
        iconName: "Truck",
      },
      {
        title: "Paiements Mobile Money",
        description:
          "Intégration de MTN MoMo et Moov Money pour payer producteurs et fournisseurs de façon traçable.",
        iconName: "Wallet",
      },
      {
        title: "Commerces du nord",
        description:
          "Outils de facturation et de suivi des ventes pour les commerçants de Kandi et des communes voisines.",
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
          "Oui : je conçois des applications qui fonctionnent hors-ligne, l'agent saisit les données au village, et tout se synchronise dès qu'il retrouve du réseau. C'est une contrainte que j'intègre dès la conception pour les projets du nord.",
      },
      {
        question:
          "Peut-on suivre plusieurs milliers de producteurs dans l'outil ?",
        answer:
          "Oui, c'est une question d'architecture. Je construis des backends solides et scalables, capables de gérer des dizaines de milliers d'enregistrements avec des recherches rapides et des exports pour vos rapports de campagne.",
      },
      {
        question: "Quel est le processus pour démarrer depuis Kandi ?",
        answer:
          "Un appel pour comprendre votre organisation, un devis détaillé sous 24h, puis un développement par étapes avec des démos en ligne. Un déplacement à Kandi est possible pour le déploiement et la formation des équipes.",
      },
    ],
    nearby: ["malanville", "parakou"],
    geo: { latitude: 11.1342, longitude: 2.9386 },
  },
  {
    slug: "malanville",
    name: "Malanville",
    department: "Alibori",
    regionCode: "BJ-AL",
    tagline: "Porte du Bénin sur le Niger",
    metaDescription:
      "Développeur web & mobile pour Malanville : outils pour le commerce transfrontalier, la logistique et les échanges avec le Niger. Solutions adaptées au terrain.",
    intro: [
      "Posée sur le fleuve Niger, face à Gaya, Malanville est la grande porte commerciale entre le Bénin et le Niger. Son marché international, l'un des plus importants de la sous-région, brasse céréales, bétail, tissus et marchandises de toute nature.",
      "Pour les commerçants, transitaires et transporteurs de ce carrefour transfrontalier, je développe des outils qui sécurisent et accélèrent les échanges : suivi des marchandises, gestion des crédits clients, paiements Mobile Money traçables des deux côtés de la frontière.",
    ],
    opportunities: [
      {
        title: "Commerce transfrontalier",
        description:
          "Gestion des commandes, des stocks et des crédits pour les commerçants qui travaillent entre le Bénin et le Niger.",
        iconName: "Store",
      },
      {
        title: "Transit et logistique",
        description:
          "Suivi des chargements et des passages pour les transitaires et transporteurs du corridor Cotonou-Niamey.",
        iconName: "Truck",
      },
      {
        title: "Paiements traçables",
        description:
          "Mobile Money intégré pour remplacer les transactions en espèces par des paiements suivis et sécurisés.",
        iconName: "Wallet",
      },
      {
        title: "Filières agricoles du fleuve",
        description:
          "Outils pour les coopératives rizicoles et maraîchères de la vallée du Niger.",
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
          "Oui : le Bénin et le Niger partagent le FCFA (UEMOA), ce qui simplifie les choses. J'intègre les paiements Mobile Money et le suivi des règlements pour que chaque transaction laisse une trace claire, quel que soit le côté de la frontière.",
      },
      {
        question:
          "Nos activités reposent beaucoup sur la confiance et l'oral, le digital peut-il s'y adapter ?",
        answer:
          "Le digital ne remplace pas la confiance, il la renforce : un registre clair des crédits accordés, des livraisons faites et des paiements reçus évite les litiges et protège les deux parties. L'outil s'adapte à vos pratiques, pas l'inverse.",
      },
      {
        question:
          "Comment se passe la collaboration à une telle distance de Cotonou ?",
        answer:
          "Par téléphone, WhatsApp et démos en ligne, avec un développement par étapes que vous validez. C'est un mode de travail que je pratique avec des clients dans tout le pays, la distance ne change rien à la qualité du résultat.",
      },
    ],
    nearby: ["kandi"],
    geo: { latitude: 11.8686, longitude: 3.3833 },
  },
  {
    slug: "savalou",
    name: "Savalou",
    department: "Collines",
    regionCode: "BJ-CO",
    tagline: "Capitale de l'igname et porte des Collines",
    metaDescription:
      "Développeur web pour Savalou : valorisation des filières agricoles, outils pour coopératives, sites pour entreprises des Collines. Devis sous 24h.",
    intro: [
      "Célèbre pour sa fête de l'igname qui rassemble chaque 15 août des visiteurs de tout le pays, Savalou est un centre agricole majeur des Collines : igname, manioc, anacarde et produits vivriers y font vivre une économie rurale dense.",
      "J'aide les coopératives, transformateurs et entrepreneurs de Savalou à valoriser cette production : outils de gestion des collectes, vitrines en ligne pour toucher les acheteurs des grandes villes, présence digitale pour les événements et acteurs locaux.",
    ],
    opportunities: [
      {
        title: "Filières igname et anacarde",
        description:
          "Gestion des coopératives et mise en relation directe avec les acheteurs de Cotonou et de la sous-région.",
        iconName: "Sprout",
      },
      {
        title: "Transformation agroalimentaire",
        description:
          "Catalogues et boutiques en ligne pour les transformateurs : gari, tapioca, cossettes, noix de cajou.",
        iconName: "Store",
      },
      {
        title: "Événements et tourisme",
        description:
          "Sites et communication digitale pour la fête de l'igname et les manifestations culturelles des Collines.",
        iconName: "Users",
      },
      {
        title: "PME locales",
        description:
          "Sites professionnels et outils de facturation pour les entreprises et prestataires de Savalou.",
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
          "Avec une vitrine en ligne sérieuse : produits, volumes, prix indicatifs et contact direct. Les acheteurs de Cotonou, Parakou ou de l'étranger cherchent des fournisseurs fiables sur Google, être visible et bien présenté fait toute la différence.",
      },
      {
        question: "Une coopérative peut-elle se payer un outil digital ?",
        answer:
          "Oui : je dimensionne l'outil au besoin réel et le devis est transparent, sans surprise. Un outil de gestion simple coûte bien moins qu'on ne l'imagine, et se rentabilise vite en pertes évitées et en temps gagné.",
      },
      {
        question: "Faites-vous le déplacement jusqu'à Savalou ?",
        answer:
          "Oui, pour les étapes clés : cadrage initial si nécessaire, déploiement et formation des équipes. Le suivi courant se fait à distance par téléphone et démos en ligne, ce qui maintient les coûts raisonnables.",
      },
    ],
    nearby: ["dassa-zoume", "bohicon"],
    geo: { latitude: 7.9281, longitude: 1.9756 },
  },
  {
    slug: "dassa-zoume",
    name: "Dassa-Zoumè",
    department: "Collines",
    regionCode: "BJ-CO",
    tagline: "Cité des 41 collines et carrefour du centre",
    metaDescription:
      "Développeur web pour Dassa-Zoumè : sites pour hébergements et restaurants, outils pour le tourisme religieux et les entreprises des Collines.",
    intro: [
      "Cité des 41 collines, Dassa-Zoumè est à la fois un carrefour routier entre le sud et le nord du pays et un haut lieu de pèlerinage : la grotte mariale de Notre-Dame d'Arigbo attire chaque année des dizaines de milliers de pèlerins, avec un pic autour du 15 août.",
      "Ces flux réguliers de voyageurs et de pèlerins représentent une vraie opportunité pour les hôtels, restaurants et commerces de la ville. Je les aide à capter cette clientèle avec des sites visibles sur Google, la réservation en ligne et des outils de gestion simples.",
    ],
    opportunities: [
      {
        title: "Hébergement des pèlerins",
        description:
          "Sites avec réservation en ligne pour les hôtels et auberges, essentiels pendant les grands pèlerinages.",
        iconName: "Home",
      },
      {
        title: "Restauration et commerces",
        description:
          "Visibilité Google Maps, menus en ligne et communication digitale pour les établissements de la ville.",
        iconName: "Store",
      },
      {
        title: "Paroisses et organisations",
        description:
          "Sites d'information, programmes d'événements et outils de communication pour les organisations religieuses et associatives.",
        iconName: "Users",
      },
      {
        title: "Tourisme des collines",
        description:
          "Mise en valeur des circuits de randonnée et des sites naturels pour les guides et acteurs touristiques locaux.",
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
          "En étant réservable en ligne bien avant : les pèlerins et leurs paroisses organisent le déplacement des semaines à l'avance. Un site avec disponibilités, tarifs et réservation vous remplit avant même le début de l'événement.",
      },
      {
        question:
          "Un simple restaurant a-t-il besoin d'une présence en ligne ?",
        answer:
          "Au minimum une fiche Google Business bien remplie avec photos, horaires et localisation : c'est gratuit et c'est ce que consultent les voyageurs qui s'arrêtent à Dassa. Un site simple avec le menu renforce ensuite cette visibilité.",
      },
      {
        question: "Combien coûte un site de réservation pour une auberge ?",
        answer:
          "Un site avec présentation, photos, calendrier de disponibilités et réservation en ligne reste un projet raisonnable, bien moins cher qu'une année de commissions versées à des intermédiaires. Devis précis et transparent sous 24h.",
      },
    ],
    nearby: ["savalou", "bohicon"],
    geo: { latitude: 7.75, longitude: 2.1833 },
  },
  {
    slug: "seme-podji",
    name: "Sèmè-Podji",
    department: "Ouémé",
    regionCode: "BJ-OU",
    tagline: "Corridor Cotonou-Lagos et cité de l'innovation",
    metaDescription:
      "Développeur web & mobile à Sèmè-Podji : applications pour startups, logistique du corridor Lagos, e-commerce. À quelques minutes de Cotonou.",
    intro: [
      "Entre Cotonou et la frontière nigériane, Sèmè-Podji est une commune en pleine mutation : Sèmè City, la cité internationale de l'innovation et du savoir, y forme la nouvelle génération tech du Bénin, tandis que le corridor vers Lagos draine un trafic commercial intense.",
      "Basé à Cotonou, à quelques minutes, j'accompagne les startups, entreprises et acteurs logistiques de Sèmè-Podji : développement de MVP, applications métier, outils pour le commerce transfrontalier. Rencontre en présentiel facile, réactivité maximale.",
    ],
    opportunities: [
      {
        title: "Startups et MVP",
        description:
          "Développement rapide de produits web et mobiles pour les porteurs de projets de l'écosystème Sèmè City.",
        iconName: "Rocket",
      },
      {
        title: "Logistique du corridor Lagos",
        description:
          "Suivi des marchandises et gestion des opérations pour les transitaires et transporteurs de l'axe Cotonou-Lagos.",
        iconName: "Truck",
      },
      {
        title: "Commerce avec le Nigeria",
        description:
          "Catalogues bilingues et outils de gestion pour les entreprises qui commercent avec le marché nigérian.",
        iconName: "Store",
      },
      {
        title: "Applications web sur-mesure",
        description:
          "Outils métier robustes pour les industries et entreprises installées dans la zone.",
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
          "Oui, c'est un exercice que j'affectionne : transformer une idée en MVP fonctionnel en quelques semaines, avec une architecture propre qui pourra grandir. Je peux aussi conseiller sur les choix techniques avant même la première ligne de code.",
      },
      {
        question: "Peut-on se voir en présentiel à Sèmè-Podji ?",
        answer:
          "Très facilement : je suis basé à Cotonou, la commune voisine. Rendez-vous de cadrage, sessions de travail, points d'étape, le présentiel est simple à organiser quand c'est utile au projet.",
      },
      {
        question:
          "Faites-vous des applications tournées vers le marché nigérian ?",
        answer:
          "Oui : interfaces bilingues français-anglais, prise en compte des usages de paiement des deux pays et référencement pensé pour les deux marchés. Le corridor Cotonou-Lagos est une opportunité énorme pour qui s'outille correctement.",
      },
    ],
    nearby: ["porto-novo", "cotonou"],
    geo: { latitude: 6.3667, longitude: 2.7 },
  },
  {
    slug: "come",
    name: "Comè",
    department: "Mono",
    regionCode: "BJ-MO",
    tagline: "Carrefour du Mono, entre lac Ahémé et route de Lomé",
    metaDescription:
      "Développeur web pour Comè et la région du lac Ahémé : sites pour le tourisme lacustre, outils pour commerçants et acteurs de l'axe Cotonou-Lomé.",
    intro: [
      "Posée sur l'axe Cotonou-Lomé, à deux pas du lac Ahémé et des eaux thermales de Possotomè, Comè vit du commerce, de la pêche et d'un tourisme de nature en plein développement autour du lac et de la basse vallée du Mono.",
      "J'aide les entrepreneurs de Comè et des rives du lac Ahémé à exister en ligne : sites pour les hébergements et sites touristiques, vitrines pour les commerces de l'axe international, outils de gestion simples pour les activités locales.",
    ],
    opportunities: [
      {
        title: "Tourisme du lac Ahémé",
        description:
          "Sites et réservation en ligne pour les hébergements, restaurants et activités autour du lac et de Possotomè.",
        iconName: "Home",
      },
      {
        title: "Commerces de l'axe Cotonou-Lomé",
        description:
          "Visibilité en ligne et outils de gestion pour les commerces qui vivent du trafic de la route internationale.",
        iconName: "Store",
      },
      {
        title: "Pêche et produits du lac",
        description:
          "Valorisation et vente des produits de la pêche et de la pisciculture auprès des acheteurs de Cotonou.",
        iconName: "Sprout",
      },
      {
        title: "Présence web locale",
        description:
          "Sites vitrines rapides et bien référencés pour les entreprises, écoles et organisations de Comè.",
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
          "Oui, énormément : les visiteurs qui cherchent une escapade nature autour de Cotonou ou depuis Lomé préparent tout en ligne. Un hébergement visible sur Google avec photos, avis et réservation capte cette clientèle avant tout le monde.",
      },
      {
        question: "Je suis sur la route internationale, comment me démarquer ?",
        answer:
          "Une fiche Google Business optimisée et un site simple font qu'un voyageur qui cherche « restaurant Comè » ou « hôtel Comè » vous trouve en premier. C'est un avantage décisif sur un axe aussi fréquenté que Cotonou-Lomé.",
      },
      {
        question: "Travaillez-vous avec de petites structures ?",
        answer:
          "Oui : chaque projet est dimensionné au besoin et au budget réels. Un site vitrine efficace et bien référencé est un investissement accessible, et c'est souvent le meilleur premier pas avant des outils plus ambitieux.",
      },
    ],
    nearby: ["lokossa", "ouidah"],
    geo: { latitude: 6.4, longitude: 1.8833 },
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
