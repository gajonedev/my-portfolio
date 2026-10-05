import Link from "next/link";
import Container from "./components/Container";
import Hero from "./components/sections/Hero";
import SectionWrapper from "./components/layout/SectionWrapper";
import SectionHeading from "./components/ui/SectionHeading";
import ProjectGallery from "./components/ui/ProjectGallery";
import SpotlightCard from "./components/ui/SpotlightCard";
import Testimonials from "./components/ui/Testimonials";
import WhatsAppCta from "./components/ui/WhatsAppCta";
import {
  projectsPreview,
  servicesPreview,
  processSteps,
  aboutGuarantees,
  pricingTiers,
} from "@/data";
import { contactHref } from "@/lib/acquisition";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

export default function Home() {
  return (
    <>
      <SectionWrapper variant="dark">
        <Hero />
      </SectionWrapper>

      <SectionWrapper variant="light" id="projects" className="py-16 md:py-20">
        <Container className="gap-8 grid">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <SectionHeading
              kicker="Réalisations"
              title="Quelques projets sur lesquels j’ai travaillé"
              subtitle="Je vous présente ce que j’ai développé, pour qui et dans quel but."
            />
            <Link
              href="/projects"
              className="font-medium text-primary text-sm hover:underline"
            >
              Tous les projets →
            </Link>
          </div>
          <div className="gap-6 grid lg:grid-cols-3">
            {projectsPreview.map((project, index) => (
              <SpotlightCard
                key={project.slug}
                corner={CORNERS[index % CORNERS.length]}
                cornerColor={ACCENTS[index % ACCENTS.length]}
                hover={false}
                glow={false}
                className="h-full [&>.spotlight-content]:h-full"
              >
                <article className="flex flex-col gap-4 p-4 h-full">
                  <ProjectGallery images={project.images} name={project.name} />
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-foreground-muted text-xs">
                      {project.sector}
                    </span>
                    {/* <ProjectStatus status={project.status} /> */}
                  </div>
                  <h3 className="font-semibold text-xl">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-primary"
                    >
                      {project.name}
                    </Link>
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-auto font-medium text-primary text-sm hover:underline"
                  >
                    Découvrir le projet →
                  </Link>
                </article>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" id="services" className="py-16 md:py-20">
        <Container className="gap-8 grid">
          <SectionHeading
            kicker="Web et mobile"
            title="Ce que je peux réaliser pour vous"
            subtitle="Vous avez besoin d’un logiciel pour votre équipe ou d’une application pour vos clients ? Je vous aide à la construire."
          />
          <div className="gap-6 grid md:grid-cols-2">
            {servicesPreview.map((service, index) => (
              <SpotlightCard
                key={service.slug}
                corner={CORNERS[index % CORNERS.length]}
                cornerColor={ACCENTS[index % ACCENTS.length]}
                hover={false}
                glow={false}
                className="h-full [&>.spotlight-content]:h-full"
              >
                <article className="flex flex-col gap-5 p-6 md:p-8 h-full">
                  <h3 className="font-semibold text-2xl">{service.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-foreground-muted text-sm">
                    À partir de{" "}
                    {
                      pricingTiers.find(
                        (tier) => tier.serviceSlug === service.slug,
                      )?.priceFrom
                    }{" "}
                    · selon les fonctionnalités choisies
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <Link
                      href={contactHref(service.slug, "/")}
                      className="btn-primary"
                    >
                      Parler de ce projet
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-primary text-sm hover:underline"
                    >
                      Découvrir mon accompagnement →
                    </Link>
                  </div>
                </article>
              </SpotlightCard>
            ))}
          </div>
          <Link
            href="/tarifs"
            className="w-fit text-primary text-sm hover:underline"
          >
            Voir mes tarifs et les autres services →
          </Link>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" className="py-16 md:py-20">
        <Container className="gap-8 grid">
          <SectionHeading
            kicker="Ils en parlent"
            title="Ils ont travaillé avec moi"
            subtitle="Voici ce qu’un client et mes collaborateurs disent de notre travail ensemble."
          />
          <Testimonials />
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="py-16 md:py-20">
        <Container className="gap-10 grid">
          <SectionHeading
            kicker="Accompagnement"
            title="Comment nous allons travailler ensemble"
            subtitle="Nous commençons par votre besoin. Je vous propose ensuite les fonctionnalités à développer et un calendrier, puis je vous montre régulièrement l’avancement."
          />
          <ol className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="font-semibold text-primary text-sm">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <SpotlightCard
            corner="tr"
            cornerColor="#ff4d3d"
            hover={false}
            glow={false}
          >
            <div className="gap-6 grid md:grid-cols-2 p-6">
              <div>
                <h3 className="font-semibold">
                  Vous échangez directement avec moi
                </h3>
                <p className="mt-2 text-foreground-muted text-sm">
                  Je suis basé à Cotonou et je peux vous accompagner à distance.
                </p>
                <Link
                  href="/about"
                  className="inline-block mt-3 text-primary text-sm hover:underline"
                >
                  Mon parcours et mes compétences →
                </Link>
              </div>
              <ul className="gap-2 grid text-foreground-muted text-sm">
                {aboutGuarantees.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" id="contact" className="py-16 md:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            align="center"
            kicker="Votre projet"
            title="Parlez-moi de votre idée"
            subtitle="Dites-moi ce que vous voulez faire et à qui l’application servira. Je vous réponds et nous préciserons ensemble le besoin avant le devis."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppCta label="Discuter sur WhatsApp" />
            <Link href={contactHref(undefined, "/")} className="btn-secondary">
              Décrire mon projet
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
