import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";
import Container from "./components/Container";
import SectionHeader from "./components/SectionHeader";
import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Bot,
  RefreshCw,
  Briefcase,
  Store,
  Palette,
  Truck,
  Search,
  Lightbulb,
  Code,
  Rocket,
  Quote,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Site vitrine",
    icon: Globe,
    description:
      "Identité digitale moderne avec performance Core Web Vitals, SEO et contenu orienté conversion.",
  },
  {
    title: "E-commerce & marketplace",
    icon: ShoppingCart,
    description:
      "Expérience d'achat fluide, catalogue optimisés performances, paiements sécurisés et automatisations métier.",
  },
  {
    title: "SaaS & dashboards",
    icon: LayoutDashboard,
    description:
      "Interfaces produit fluides, onboarding guidé et architecture scalable pour vos équipes.",
  },
  {
    title: "Apps mobiles",
    icon: Smartphone,
    description:
      "Applications mobiles ou PWA pour offrir une expérience mobile rapide et intuitive.",
  },
  {
    title: "Automatisation IA",
    icon: Bot,
    description:
      "Workflows intelligents, chatbots, intégrations API et analyse de données assistée.",
  },
  {
    title: "Refonte & optimisation",
    icon: RefreshCw,
    description:
      "Audit UX, refonte UI, optimisation des temps de chargement et accessibilité AA.",
  },
];

const projects = [
  {
    title: "NovaPay",
    tag: "Fintech • SaaS",
    icon: Briefcase,
    description:
      "Plateforme de paiement multi-pays avec dashboard temps réel et onboarding KYC.",
  },
  {
    title: "AfroMarket",
    tag: "Marketplace",
    icon: Store,
    description:
      "Marketplace multi-vendeurs avec gestion logistique et expérience mobile-first.",
  },
  {
    title: "Bloom Studio",
    tag: "Site vitrine",
    icon: Palette,
    description:
      "Landing page premium avec storytelling visuel et génération de leads.",
  },
  {
    title: "Pulse Logistics",
    tag: "Dashboard",
    icon: Truck,
    description:
      "Solution B2B de suivi de flotte avec analytics et alertes temps réel.",
  },
];

const testimonials = [
  {
    name: "Mariam A.",
    role: "CEO, AfroMarket",
    quote:
      "Une collaboration fluide et un résultat au-dessus de nos attentes. Les performances du site ont doublé.",
  },
  {
    name: "Jean K.",
    role: "Product Manager, NovaPay",
    quote:
      "Design précis, rendu propre et délai respecté. Nous avons apprécié la vision produit.",
  },
  {
    name: "Claire S.",
    role: "Fondatrice, Bloom Studio",
    quote:
      "Le site convertit mieux et reflète parfaitement notre image de marque. Merci !",
  },
];

const processSteps = [
  {
    title: "Reconnaissance",
    icon: Search,
    description:
      "Comprendre vos objectifs business, cible, concurrence et KPI clés.",
  },
  {
    title: "Design System",
    icon: Lightbulb,
    description: "Création d'une identité UI/UX cohérente et modulaire.",
  },
  {
    title: "Développement",
    icon: Code,
    description: "Code moderne, composants scalables, tests et performance.",
  },
  {
    title: "Optimisation",
    icon: Rocket,
    description: "SEO, accessibilité, analytics et optimisation continue.",
  },
];

export default function Home() {
  return (
    <>
      <AnimatedSection className="relative py-10 md:py-20 overflow-hidden">
        <Container className="lg:items-center gap-12 grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-8">
            <div className="flex items-center" data-animate>
              <span className="flex items-center gap-2 bg-primary/10 px-2 py-1 border border-primary/50 rounded-full text-primary text-xs uppercase tracking-[0.25em]">
                <span className="inline-block bg-green-400 rounded-full w-2 h-2" />
                En ligne
              </span>
            </div>
            <div className="flex flex-col gap-16 my-8" data-animate>
              <h1 className="font-bold text-foreground text-4xl md:text-5xl leading-tight">
                Créateur de{" "}
                <span className="text-primary">présence numérique</span> et
                d&apos;
                <span className="text-primary">
                  expériences digitales professionnelles
                </span>{" "}
                pour startups et PME
              </h1>
              <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
                Je suis Néhémie, développeur web & mobile basé à Cotonou, Bénin.
                Je conçois des expériences digitales modernes, rapides et qui
                convertissent. J&apos;accompagne les startups et PME à créer des
                expériences web et mobile qui en valent la peine : sites
                vitrines | e-commerce, marketplaces, SaaS et automatisations IA.
              </p>
            </div>
            <div className="flex flex-wrap gap-4" data-animate>
              <a href="#contact" className="btn-primary">
                Me contacter
              </a>
              <Link href="/projects" className="btn-secondary">
                Voir les projets
              </Link>
            </div>
            <div
              className="gap-6 grid grid-cols-2 sm:grid-cols-4 text-foreground-muted text-sm"
              data-animate
            >
              {[
                { label: "Projets livrés", value: "+5" },
                { label: "Clients", value: "+2" },
                { label: "Temps moyen", value: "4-8 sem" },
                { label: "Satisfaction", value: "4.9/5" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-semibold text-foreground text-lg">
                    {stat.value}
                  </span>
                  <span className="text-foreground-muted/60 text-xs uppercase tracking-[0.2em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center" data-animate>
            <div className="-top-10 -left-10 absolute bg-primary/30 blur-2xl rounded-full w-24 h-24" />
            <div className="right-0 -bottom-8 absolute bg-primary/20 blur-2xl rounded-full w-28 h-28" />
            <div className="bg-card/80 shadow-xl p-4 border border-stroke rounded-4xl">
              <Image
                src="/portrait.svg"
                alt="Portrait de Néhémie Gandonou"
                width={360}
                height={440}
                priority
                className="rounded-3xl"
              />
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="services" className="py-20">
        <Container className="gap-10 grid">
          <SectionHeader
            kicker="Services"
            title="Des solutions appropriées pour chaque projet"
            subtitle="Je combine design UI et system, développement full-stack et optimisation pour livrer des produits performants et élégants."
          />
          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-animate
                  className="group bg-card/80 hover:shadow-lg p-6 border border-stroke hover:border-primary/50 rounded-3xl transition hover:-translate-y-1"
                >
                  <div className="flex justify-center items-center bg-primary/20 mb-4 rounded-2xl w-12 h-12 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-foreground-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="projects" className="py-20">
        <Container className="gap-10 grid">
          <SectionHeader
            kicker="Projets"
            title="Des réalisations attestant impact business et design"
            subtitle="Chaque projet est construit pour convertir, rassurer et accélérer la croissance de votre marque."
          />
          <div className="gap-6 grid md:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  data-animate
                  className="flex flex-col gap-4 bg-card/70 p-6 border border-stroke hover:border-primary/50 rounded-3xl transition"
                >
                  <div className="flex justify-between items-center">
                    <span className="bg-primary/10 px-4 py-1 rounded-full text-primary text-xs">
                      {project.tag}
                    </span>
                    <span className="text-foreground-muted/60 text-xs">
                      2025
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center bg-primary/20 rounded-xl w-10 h-10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-foreground text-xl">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-foreground-muted text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 text-foreground-muted/60 text-xs">
                    <span>Next.js</span>
                    <span>•</span>
                    <span>NodeJs</span>
                    <span>•</span>
                    <span>JavaScript</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="process" className="py-20">
        <Container className="gap-10 grid">
          <SectionHeader
            kicker="Process"
            title="Processus de travail pour livrer vite et bien"
            subtitle="De la planification stratégique aux optimisations, avec une communication claire et transparente."
          />
          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  data-animate
                  className="bg-card/70 p-6 border border-stroke rounded-3xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-primary text-sm">
                      0{index + 1}
                    </span>
                    <div className="flex justify-center items-center bg-primary/20 rounded-lg w-8 h-8 text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-foreground-muted text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Container className="lg:items-center gap-10 grid lg:grid-cols-[0.55fr_0.45fr]">
          <div className="flex flex-col gap-6" data-animate>
            <SectionHeader
              kicker="À propos"
              title="Un partenaire produit concentré sur la performance"
              subtitle="J'accorde beaucoup d'importance à l'expérience utilisateur, la vitesse et la clarté des parcours afin de convertir vos visiteurs en clients."
            />
            <div className="gap-4 grid text-foreground-muted text-sm">
              {[
                "Design system cohérent et scalable",
                "Stratégie SEO et contenu optimisés",
                "Livrables prêts pour la croissance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="bg-primary rounded-full w-2 h-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            data-animate
            className="bg-card p-8 border border-stroke rounded-3xl"
          >
            <h3 className="font-semibold text-foreground text-lg">
              Stack & outils
            </h3>
            <p className="mt-3 text-foreground-muted text-sm">
              Next.js, React, TailwindCSS, GSAP, Node.js, Supabase, WordPress,
              WooCommerce.
            </p>
            <div className="flex flex-wrap gap-2 mt-6 text-foreground-muted text-xs">
              {[
                "Design system",
                "API REST",
                "SEO",
                "Performance",
                "Monitoring",
                "Analytics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-background px-3 py-1 border border-stroke rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <Container className="gap-10 grid">
          <SectionHeader
            kicker="Avis"
            title="Ils ont confié leur produit digital"
            subtitle="Des collaborations mis en place sur la confiance, la transparence et la qualité."
          />
          <div className="gap-6 grid md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                data-animate
                className="bg-card/80 p-6 border border-stroke rounded-3xl"
              >
                <Quote className="mb-3 w-6 h-6 text-primary/60" />
                <p className="text-foreground-muted text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-foreground-muted/60 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="contact" className="py-20">
        <Container className="gap-10 grid lg:grid-cols-[0.6fr_0.4fr]">
          <div className="flex flex-col gap-6" data-animate>
            <SectionHeader
              kicker="Contact"
              title="Parlons de votre projet"
              subtitle="Envoyez moi un message décrivant votre besoin, votre délai et vos objectifs."
            />
            <form className="gap-4 grid">
              <div className="gap-4 grid md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="input"
                />
                <input type="email" placeholder="Email" className="input" />
              </div>
              <input
                type="text"
                placeholder="Type de projet"
                className="input"
              />
              <textarea
                placeholder="Expliquez votre besoin"
                rows={4}
                className="textarea"
              />
              <button type="button" className="w-fit btn-primary">
                Envoyer la demande
              </button>
            </form>
          </div>
          <div
            data-animate
            className="flex flex-col justify-between gap-6 bg-card p-6 border border-stroke rounded-3xl"
          >
            <div>
              <p className="text-foreground-muted/60 text-sm uppercase tracking-[0.25em]">
                Coordonnées
              </p>
              <h3 className="mt-3 font-semibold text-foreground text-xl">
                gajonedev@gmail.com
              </h3>
              <p className="mt-2 text-foreground-muted text-sm">
                +229 01 46 89 73 22
              </p>
            </div>
            <div className="bg-background p-4 border border-stroke rounded-2xl text-foreground-muted text-sm">
              <p className="font-medium text-foreground">Délai moyen</p>
              <p className="mt-1 text-foreground-muted/60 text-xs">
                4 à 8 semaines selon le scope.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-foreground-muted/60 text-xs">
              <span>Cotonou, Bénin</span>
              <span>•</span>
              <span>Remote / Worldwide</span>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
