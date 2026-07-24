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
import SectionCta from "./components/ui/SectionCta";
import WhatsAppIcon from "./components/ui/WhatsAppIcon";
import TechBadge from "./components/ui/TechBadge";
import ProjectStatus from "./components/ui/ProjectStatus";
import TestimonialsCarousel from "./components/ui/TestimonialsCarousel";
import ContactForm from "./components/ui/ContactForm";
import DotPattern from "./components/ui/DotPattern";
import { getIcon, ArrowRight, CheckCircle, TrendingUp } from "@/lib/icons";
import {
  servicesPreview,
  projectsPreview,
  testimonials,
  processSteps,
  skills,
  homeProblems,
  aboutHighlights,
  aboutGuarantees,
  contactInfo,
  whatsappUrl,
} from "@/data";

// Rotating accent palette for card corner glows (coral / blue / amber)
const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;
const accentFor = (i: number) => ACCENTS[i % ACCENTS.length];
const cornerFor = (i: number) => CORNERS[i % CORNERS.length];

export default async function Home() {
  return (
    <>
      {/* ============ HERO (dark) ============ */}
      <SectionWrapper variant="dark">
        <Hero />
      </SectionWrapper>

      {/* ============ PROBLÈME / INTÉRÊT (dark) ============ */}
      <SectionWrapper variant="dark" beam className="relative py-24">
        <DotPattern />
        <Container className="relative gap-12 grid">
          <SectionHeading
            align="center"
            kicker="Le problème"
            title="Ce qui bloque votre croissance"
            subtitle="La plupart de mes clients arrivent avec une de ces situations. Peut-être la vôtre."
            className="mx-auto"
          />
          <StaggerContainer className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            {homeProblems.map((problem, i) => {
              const Icon = getIcon(problem.iconName);
              return (
                <StaggerItem key={problem.title} className="h-full">
                  <SpotlightCard
                    corner={cornerFor(i)}
                    cornerColor={accentFor(i)}
                    className="group h-full"
                    glow={false}
                  >
                    <div className="p-6">
                      <div className="flex justify-center items-center bg-primary/15 mb-4 rounded-2xl w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-lg">
                        {problem.title}
                      </h3>
                      <p className="mt-3 font-body text-foreground-muted text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <ScrollReveal>
            <p className="mx-auto max-w-2xl font-body text-foreground-muted text-base md:text-lg text-center leading-relaxed">
              Je pars précisément de là.{" "}
              <span className="font-medium text-foreground">
                Je transforme une de ces situations en un système qui vous
                ramène des clients pendant que vous travaillez.
              </span>
            </p>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* ============ ABOUT (light) ============ */}
      <SectionWrapper variant="light" className="py-24">
        <Container className="items-center gap-12 grid lg:grid-cols-[0.55fr_0.45fr]">
          <div className="flex flex-col gap-8">
            <SectionHeading
              kicker="À propos de moi"
              title={
                <>
                  Bien plus qu&apos;un développeur, je suis un{" "}
                  <span className="text-primary">partenaire</span> pour votre{" "}
                  <span className="text-primary">croissance</span>
                </>
              }
              subtitle="Développeur indépendant, je m'implique dans votre projet comme si c'était le mien : je pars de votre objectif business, je livre un produit qui y répond, et je reste disponible après la mise en ligne."
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

          <div className="flex flex-col gap-6">
            <ScrollReveal direction="left">
              <SpotlightCard corner="br" cornerColor="#ff4d3d" hover={false}>
                <div className="p-8">
                  <h3 className="font-display font-semibold text-foreground text-lg">
                    Ce sur quoi vous pouvez compter avec moi
                  </h3>
                  <p className="mt-3 font-body text-foreground-muted text-sm leading-relaxed">
                    Les mêmes engagements tenus pour chacun de mes projets.
                  </p>
                  <ul className="flex flex-col gap-3 mt-6">
                    {aboutGuarantees.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-foreground-muted text-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </ScrollReveal>
            <p className="flex flex-wrap items-center self-start gap-1 font-body text-foreground-muted text-sm">
              <span>Ces engagements vous parlent ?</span>
              <SectionCta>Lançons votre projet</SectionCta>
            </p>
          </div>
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
            kicker="Mes Services"
            title="Des produits complets, faits proprement"
            subtitle="De l'application mobile au site web, je livre des produits complets qui règlent le problème de votre activité, et qui durent dans le temps."
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
                    glow={false}
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
          <div className="flex flex-col justify-center items-center gap-6">
            <OutlineButton href="/services" className="shrink-0">
              Tous les services
              <ArrowRight className="w-4 h-4" />
            </OutlineButton>
          </div>
        </Container>
      </SectionWrapper>

      {/* ============ PROJECTS (light) ============ */}
      <SectionWrapper variant="light" id="projects" className="py-24">
        <Container className="gap-12 grid">
          <div className="flex md:flex-row flex-col justify-between items-start md:items-end gap-6">
            <SectionHeading
              kicker="Mes Projets"
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
                      {project.impact && (
                        <p className="flex items-start gap-2 bg-primary/5 px-3 py-2 border-primary/60 border-l-2 rounded-r-lg font-body text-foreground text-sm">
                          <TrendingUp className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                          <span className="font-medium">{project.impact}</span>
                        </p>
                      )}
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

      {/* ============ TECH STACK (dark) ============ */}
      <SectionWrapper variant="dark" beam className="relative py-24">
        <DotPattern />
        <Container className="relative gap-12 grid">
          <SectionHeading
            align="center"
            kicker="Mes Compétences Techniques"
            title={
              <>
                Du <span className="text-primary">mobile</span> au{" "}
                <span className="text-primary">web</span>, une stack complète
              </>
            }
            subtitle="Applications mobiles iOS et Android, plateformes web sur-mesure et CMS headless, chaque couche maîtrisée pour des produits cohérents de bout en bout."
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

      {/* ============ PROCESS (light) ============ */}
      <SectionWrapper variant="light" className="py-24">
        <Container className="gap-12 grid">
          <SectionHeading
            kicker="Mon Processus"
            title="Un processus pour livrer vite et bien"
            subtitle="Du premier cadrage à la mise en ligne, vous savez toujours où en est votre projet."
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
          <p className="flex flex-wrap items-center gap-1 font-body text-foreground-muted text-sm">
            <span>Vous êtes prêt pour une collboration ?</span>
            <SectionCta>Parlons de votre projet</SectionCta>
          </p>
        </Container>
      </SectionWrapper>

      {/* ============ TESTIMONIALS (dark) ============ */}
      <SectionWrapper variant="dark" className="py-24">
        <Container className="gap-12 grid">
          <SectionHeading
            align="center"
            kicker="Quelques avis"
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
          <div className="relative bg-background-soft border border-stroke rounded-4xl overflow-hidden">
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
                  subtitle="Décrivez votre besoin, votre délai et vos objectifs. Je reviens vers vous sous 24h."
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
                  <GlowButton href={whatsappUrl()} external>
                    <WhatsAppIcon className="w-4 h-4" />
                    Discuter sur WhatsApp
                  </GlowButton>
                  <OutlineButton href="/contact">
                    Ou remplir le formulaire
                  </OutlineButton>
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
