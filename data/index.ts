export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Codeur passionné et développeur no-code, je crée des applications web modernes, accessibles et performantes",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Mes compétences s'adaptent à vos besoins",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ma stack technique",
    description: "Je mets à jour en continu",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Plusieurs années de passion et d'action",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Code ou no-code ?",
    description: "Le choix idéal pour votre projet",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "On discute sur votre prochain projet ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Néhémie a une vraie passion pour le développement. Il transforme des idées complexes en solutions simples et efficaces.",
    name: "Ulysse Kouadio",
    title: "Développeur web | Graphiste",
  },
  {
    quote:
      "J’ai collaboré avec lui sur un projet web, et j’ai été impressionné par sa rigueur et sa créativité.",
    name: "Achnelle Ezin",
    title: "Web designer",
  },
  {
    quote:
      "Son professionnalisme et son sens du détail font toute la différence. On sent qu’il aime ce qu’il fait.",
    name: "Raphaël Houngbedji",
    title: "Graphiste | Développeur web",
  },
  {
    quote: "Collaborer avec Néhémie a été un véritable plaisir.",
    name: "Giscard",
    title: "Graphiste",
  },
  {
    quote:
      "Il a conçu une solution simple mais efficace pour notre besoin. Je recommande vivement son travail.",
    name: "Abel",
    title: "CEO AbPrêt",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Développement Frontend avec Next.js & React.js",
    desc: "Création d’interfaces modernes et responsives avec Next.js, React et TailwindCSS. Expérience avec le routage, l’optimisation SEO et les API routes.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "FullStack avec Next.js & PostrgeSQL",
    desc: "Conception et développement d'applications web avec Next.js et PostgreSQL. Expérience avec l'intégration d'API et la gestion de bases de données.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Bubble.io",
    desc: "Prototypage rapide d’applications web avec workflows, base de données interne et intégration d’API.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Zapier / Make (ex Integromat) / n8n",
    desc: "Automatisation de workflows entre applications (CRM, emails, bases de données).",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Applications Mobiles",
    desc: "Développement d’applications mobiles cross-platform (iOS & Android) avec React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/gajonedev"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/gajonedev"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gajonedev/"
  },
];
