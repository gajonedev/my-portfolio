import Link from "next/link";
import Container from "./components/Container";
import Hero from "./components/sections/Hero";
import SectionWrapper from "./components/layout/SectionWrapper";
import SectionHeading from "./components/ui/SectionHeading";
import SpotlightCard from "./components/ui/SpotlightCard";
import {
  StaggerContainer,
  StaggerItem,
} from "./components/ui/StaggerContainer";
import ScrollReveal from "./components/ui/ScrollReveal";
import GlowButton from "./components/ui/GlowButton";
import OutlineButton from "./components/ui/OutlineButton";
import TechBadge from "./components/ui/TechBadge";
import DotPattern from "./components/ui/DotPattern";
import { getIcon, Quote, ArrowRight, CheckCircle } from "@/lib/icons";
import {
  servicesPreview,
  projectsPreview,
  testimonials,
  processSteps,
  skills,
  stackAndTools,
  aboutHighlights,
  contactInfo,
} from "@/data";

// Rotating accent palette for card corner glows (coral / blue / amber)
const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;
const accentFor = (i: number) => ACCENTS[i % ACCENTS.length];
const cornerFor = (i: number) => CORNERS[i % CORNERS.length];

export default function Home() {
  return (
    <>
      {/* ============ HERO (dark) ============ */}
      <SectionWrapper variant="dark">
        <Hero />
      </SectionWrapper>

      {/* ============ ABOUT (light) ============ */}
      <SectionWrapper variant="light" className="py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="flex flex-col gap-8">
            <SectionHeading
              kicker="À propos"
              title={
                <>
                  Un partenaire produit concentré sur la{" "}
                  <span className="text-primary">performance</span>
                </>
              }
              subtitle="J'accorde une importance particulière à l'expérience utilisateur, la vitesse et la clarté des parcours afin de transformer vos visiteurs en clients."
            />
            <StaggerContainer className="grid gap-4">
              {aboutHighlights.map((item) => (
                <StaggerItem
                  key={item}
                  className="flex items-center gap-3 font-body text-sm text-foreground-muted"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal direction="left">
            <SpotlightCard corner="br" cornerColor="#ff4d3d" hover={false}>
              <div className="p-8">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Stack &amp; outils
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-foreground-muted">
                  {stackAndTools.main}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {stackAndTools.tags.map((tag) => (
                    <TechBadge key={tag}>{tag}</TechBadge>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* ============ TECH STACK (dark) ============ */}
      <SectionWrapper variant="dark" beam className="relative py-24">
        <DotPattern />
        <Container className="relative grid gap-12">
          <SectionHeading
            align="center"
            kicker="Compétences"
            title={
              <>
                Du <span className="text-primary">mobile</span> au{" "}
                <span className="text-primary">web</span>, une stack complète
              </>
            }
            subtitle="Applications mobiles Flutter, plateformes web Next.js / Node.js et CMS headless — chaque couche maîtrisée pour des produits cohérents de bout en bout."
            className="mx-auto"
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((category, i) => (
              <StaggerItem key={category.name}>
                <SpotlightCard
                  corner={cornerFor(i)}
                  cornerColor={accentFor(i)}
                  className="h-full"
                >
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-primary">
                      {category.name}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <TechBadge key={item}>{item}</TechBadge>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </SectionWrapper>

      {/* ============ PROJECTS (light) ============ */}
      <SectionWrapper variant="light" id="projects" className="py-24">
        <Container className="grid gap-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="Projets"
              title="Des réalisations à fort impact"
              subtitle="Chaque projet est conçu pour convertir, rassurer et accélérer la croissance de la marque."
            />
            <OutlineButton href="/projects" className="shrink-0">
              Tous les projets
              <ArrowRight className="h-4 w-4" />
            </OutlineButton>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {projectsPreview.map((project, i) => {
              const Icon = getIcon(project.iconName);
              return (
                <StaggerItem key={project.title} className="h-full">
                  <SpotlightCard
                    corner={cornerFor(i)}
                    cornerColor={accentFor(i)}
                    className="h-full"
                  >
                    <div className="flex h-full flex-col gap-4 p-6">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-primary/10 px-4 py-1 font-body text-xs text-primary">
                          {project.tag}
                        </span>
                        <span className="font-body text-xs text-foreground-subtle">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      <p className="font-body text-sm text-foreground-muted">
                        {project.description}
                      </p>
                      <div className="mt-auto flex items-center gap-2 font-mono text-xs text-foreground-subtle">
                        <span>Next.js</span>
                        <span>•</span>
                        <span>Flutter</span>
                        <span>•</span>
                        <span>Node.js</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </SectionWrapper>

      {/* ============ SERVICES (dark) ============ */}
      <SectionWrapper variant="dark" beam id="services" className="relative py-24">
        <DotPattern />
        <Container className="relative grid gap-12">
          <SectionHeading
            align="center"
            kicker="Services"
            title="Des solutions sur mesure pour chaque projet"
            subtitle="Design system, développement fullstack et optimisation pour livrer des produits performants et élégants."
            className="mx-auto"
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesPreview.map((service, i) => {
              const Icon = getIcon(service.iconName);
              return (
                <StaggerItem key={service.title} className="h-full">
                  <SpotlightCard
                    corner={cornerFor(i)}
                    cornerColor={accentFor(i)}
                    className="group h-full"
                  >
                    <div className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 font-body text-sm leading-relaxed text-foreground-muted">
                        {service.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </SectionWrapper>

      {/* ============ PROCESS (light) ============ */}
      <SectionWrapper variant="light" className="py-24">
        <Container className="grid gap-12">
          <SectionHeading
            kicker="Process"
            title="Un processus pour livrer vite et bien"
            subtitle="De la stratégie aux optimisations, avec une communication claire et transparente."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = getIcon(step.iconName);
              return (
                <StaggerItem key={step.title} className="h-full">
                  <SpotlightCard
                    corner={cornerFor(index)}
                    cornerColor={accentFor(index)}
                    className="h-full"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-sm font-semibold text-primary">
                          0{index + 1}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-body text-sm text-foreground-muted">
                        {step.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </SectionWrapper>

      {/* ============ TESTIMONIALS (dark) ============ */}
      <SectionWrapper variant="dark" className="py-24">
        <Container className="grid gap-12">
          <SectionHeading
            align="center"
            kicker="Avis"
            title="Ils ont confié leur produit digital"
            subtitle="Des collaborations bâties sur la confiance, la transparence et la qualité."
            className="mx-auto"
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <StaggerItem key={testimonial.name} className="h-full">
                <SpotlightCard
                  corner={cornerFor(i)}
                  cornerColor={accentFor(i)}
                  className="h-full"
                >
                  <div className="p-6">
                    <Quote className="mb-3 h-6 w-6 text-primary/60" />
                    <p className="font-body text-sm text-foreground-muted">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-5">
                      <p className="font-display text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="font-body text-xs text-foreground-subtle">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </SectionWrapper>

      {/* ============ CONTACT / CTA (dark) ============ */}
      <SectionWrapper variant="dark" beam id="contact" className="relative py-24">
        <DotPattern />
        <Container className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-stroke bg-background-soft">
            {/* warm mesh glow rising from the bottom (huly/conversion style) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -bottom-32 mx-auto h-72 w-3/4 rounded-full blur-[110px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,77,61,0.35), rgba(59,130,246,0.18) 50%, transparent 70%)",
              }}
            />
            <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[0.55fr_0.45fr]">
              <div className="flex flex-col gap-6">
                <SectionHeading
                  kicker="Contact"
                  title={
                    <>
                      Parlons de votre{" "}
                      <span className="text-primary">projet</span>
                    </>
                  }
                  subtitle="Décrivez votre besoin, votre délai et vos objectifs — je reviens vers vous sous 48h."
                />
                <div className="flex flex-col gap-3 font-body text-sm text-foreground-muted">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="transition-colors hover:text-primary"
                  >
                    {contactInfo.email}
                  </a>
                  <span>{contactInfo.phone}</span>
                  <span className="text-foreground-subtle">
                    {contactInfo.location} • {contactInfo.availability}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <GlowButton href="/contact">Démarrer un projet</GlowButton>
                  <OutlineButton href="https://comeup.com" external>
                    Profil Comeup
                  </OutlineButton>
                </div>
              </div>

              <form className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
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
                <GlowButton type="submit" className="w-fit">
                  Envoyer la demande
                </GlowButton>
              </form>
            </div>
          </div>

          <p className="mt-8 text-center font-body text-sm text-foreground-muted">
            Préférez un échange direct ?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Toutes mes coordonnées
            </Link>
          </p>
        </Container>
      </SectionWrapper>
    </>
  );
}
