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
import ProjectStatus from "./components/ui/ProjectStatus";
import TestimonialsCarousel from "./components/ui/TestimonialsCarousel";
import ContactForm from "./components/ui/ContactForm";
import DotPattern from "./components/ui/DotPattern";
import { getIcon, ArrowRight, CheckCircle } from "@/lib/icons";
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
        <Container className="items-center gap-12 grid lg:grid-cols-[0.55fr_0.45fr]">
          <div className="flex flex-col gap-8">
            <SectionHeading
              kicker="À propos"
              title={
                <>
                  Un partenaire produit obsédé par la{" "}
                  <span className="text-primary">qualité</span>
                </>
              }
              subtitle="Je ne livre pas de produit au rabais. Apps mobiles et logiciels web complets, soignés dans le détail, avec un backend solide et une architecture prête à grandir."
            />
            <StaggerContainer className="gap-4 grid">
              {aboutHighlights.map((item) => (
                <StaggerItem
                  key={item}
                  className="flex items-center gap-3 font-body text-foreground-muted text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal direction="left">
            <SpotlightCard corner="br" cornerColor="#ff4d3d" hover={false}>
              <div className="p-8">
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Stack &amp; outils
                </h3>
                <p className="mt-3 font-body text-foreground-muted text-sm leading-relaxed">
                  {stackAndTools.main}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
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
        <Container className="relative gap-12 grid">
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
          <StaggerContainer className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((category, i) => (
              <StaggerItem key={category.name}>
                <SpotlightCard
                  corner={cornerFor(i)}
                  cornerColor={accentFor(i)}
                  className="h-full"
                >
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-primary text-lg">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
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
        <Container className="gap-12 grid">
          <div className="flex md:flex-row flex-col justify-between items-start md:items-end gap-6">
            <SectionHeading
              kicker="Projets"
              title="Des réalisations à fort impact"
              subtitle="Des produits soignés, pensés pour résoudre un problème concret, rester fluides et tenir la charge."
            />
            <OutlineButton href="/projects" className="shrink-0">
              Tous les projets
              <ArrowRight className="w-4 h-4" />
            </OutlineButton>
          </div>
          <StaggerContainer className="gap-6 grid md:grid-cols-2">
            {projectsPreview.map((project, i) => {
              const Icon = getIcon(project.iconName);
              return (
                <StaggerItem key={project.name} className="h-full">
                  <SpotlightCard
                    corner={cornerFor(i)}
                    cornerColor={accentFor(i)}
                    className="h-full"
                  >
                    <div className="flex flex-col gap-4 p-6 h-full">
                      <div className="flex justify-between items-center">
                        <span className="bg-primary/10 px-4 py-1 rounded-full font-body text-primary text-xs">
                          {project.sector}
                        </span>
                        <span className="font-body text-foreground-subtle text-xs">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex justify-center items-center bg-primary/15 rounded-xl w-10 h-10 text-primary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-semibold text-foreground text-xl">
                          {project.name}
                        </h3>
                      </div>
                      <p className="font-body text-foreground-muted text-sm">
                        {project.description}
                      </p>
                      <div className="mt-auto pt-1">
                        <ProjectStatus status={project.status} />
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
      <SectionWrapper
        variant="dark"
        beam
        id="services"
        className="relative py-24"
      >
        <DotPattern />
        <Container className="relative gap-12 grid">
          <SectionHeading
            align="center"
            kicker="Services"
            title="Des produits complets, faits proprement"
            subtitle="Applications mobiles et logiciels web complets, backend solide et exigence de qualité — pensés pour résoudre un vrai problème et durer dans le temps."
            className="mx-auto"
          />
          <StaggerContainer className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
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
                      <div className="flex justify-center items-center bg-primary/15 mb-4 rounded-2xl w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-lg">
                        {service.title}
                      </h3>
                      <p className="mt-3 font-body text-foreground-muted text-sm leading-relaxed">
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
        <Container className="gap-12 grid">
          <SectionHeading
            kicker="Process"
            title="Un processus pour livrer vite et bien"
            subtitle="De la stratégie aux optimisations, avec une communication claire et transparente."
          />
          <StaggerContainer className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
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
                        <span className="font-display font-semibold text-primary text-sm">
                          0{index + 1}
                        </span>
                        <div className="flex justify-center items-center bg-primary/15 rounded-lg w-8 h-8 text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="mt-4 font-display font-semibold text-foreground text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-body text-foreground-muted text-sm">
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
        <Container className="gap-12 grid">
          <SectionHeading
            align="center"
            kicker="Avis"
            title="Ils ont confié leur produit digital"
            subtitle="Des collaborations bâties sur la confiance, la transparence et la qualité."
            className="mx-auto"
          />
          <TestimonialsCarousel testimonials={testimonials} />
        </Container>
      </SectionWrapper>

      {/* ============ CONTACT / CTA (dark) ============ */}
      <SectionWrapper
        variant="dark"
        beam
        id="contact"
        className="relative py-24"
      >
        <DotPattern />
        <Container className="relative">
          <div className="relative bg-background-soft border border-stroke rounded-[2rem] overflow-hidden">
            {/* pronounced warm mesh glow rising from the bottom */}
            <div
              aria-hidden="true"
              className="-bottom-28 absolute inset-x-0 blur-[90px] mx-auto rounded-full w-4/5 h-80 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,77,61,0.65), rgba(255,122,69,0.4) 38%, rgba(59,130,246,0.32) 62%, transparent 75%)",
              }}
            />
            {/* second tighter core for a brighter, more manifest hotspot */}
            <div
              aria-hidden="true"
              className="-bottom-10 absolute inset-x-0 blur-[70px] mx-auto rounded-full w-1/2 h-44 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,99,71,0.55), transparent 70%)",
              }}
            />
            <div className="relative gap-10 grid lg:grid-cols-[0.55fr_0.45fr] p-8 md:p-12">
              <div className="flex flex-col gap-6">
                <SectionHeading
                  kicker="Contact"
                  title={
                    <>
                      Parlons de votre{" "}
                      <span className="text-primary">projet</span>
                    </>
                  }
                  subtitle="Décrivez votre besoin, votre délai et vos objectifs — je reviens vers vous sous 24h."
                />
                <div className="flex flex-col gap-3 font-body text-foreground-muted text-sm">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-primary transition-colors"
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
                  {/* <OutlineButton
                    href="https://comeup.com/fr/@gajonedev"
                    external
                  >
                    Profil Comeup
                  </OutlineButton> */}
                </div>
              </div>

              <hr className="lg:hidden self-start border-stroke h-full" />

              <ContactForm />
            </div>
          </div>

          <p className="mt-8 font-body text-foreground-muted text-sm text-center">
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
