import Link from "next/link";
import Container from "./components/Container";
import Hero from "./components/sections/Hero";
import SectionWrapper from "./components/layout/SectionWrapper";
import SectionHeading from "./components/ui/SectionHeading";
import ProjectGallery from "./components/ui/ProjectGallery";
import ProjectStatus from "./components/ui/ProjectStatus";
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

export default function Home() {
  return (
    <>
      <SectionWrapper variant="dark">
        <Hero />
      </SectionWrapper>

      <SectionWrapper variant="light" id="projects" className="py-16 md:py-20">
        <Container className="grid gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Réalisations"
              title="Des produits web et mobiles, en détail"
              subtitle="Le besoin de départ, mon rôle et les fonctionnalités réalisées. Chaque projet indique son état actuel."
            />
            <Link
              href="/projects"
              className="text-sm font-medium text-primary hover:underline"
            >
              Tous les projets →
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projectsPreview.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col gap-4 rounded-3xl border border-stroke bg-card card-glow p-4"
              >
                <ProjectGallery images={project.images} name={project.name} />
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-foreground-muted">
                    {project.sector}
                  </span>
                  <ProjectStatus status={project.status} />
                </div>
                <h3 className="text-xl font-semibold">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-primary"
                  >
                    {project.name}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-auto text-sm font-medium text-primary hover:underline"
                >
                  Découvrir le projet →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" id="services" className="py-16 md:py-20">
        <Container className="grid gap-8">
          <SectionHeading
            kicker="Deux spécialités"
            title="Un produit complet, sur le web ou sur mobile"
            subtitle="Pour les entreprises et les porteurs de produit qui ont besoin d’un outil métier ou d’un service numérique sur mesure."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {servicesPreview.map((service) => (
              <article
                key={service.slug}
                className="flex flex-col gap-5 rounded-3xl border border-stroke bg-card card-glow p-6 md:p-8"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm text-foreground-muted">
                  À partir de{" "}
                  {
                    pricingTiers.find(
                      (tier) => tier.serviceSlug === service.slug,
                    )?.priceFrom
                  }{" "}
                  · périmètre défini au devis
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-4">
                  <Link
                    href={contactHref(service.slug, "/")}
                    className="btn-primary"
                  >
                    Parler de ce projet
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-primary hover:underline"
                  >
                    Détails de l’offre →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Link
            href="/tarifs"
            className="w-fit text-sm text-primary hover:underline"
          >
            Budgets, délais et prestations complémentaires →
          </Link>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" className="py-16 md:py-20">
        <Container className="grid gap-8">
          <SectionHeading
            kicker="Retours"
            title="Un retour client, des collaborations concrètes"
            subtitle="Des avis associés à des personnes et à des projets identifiés."
          />
          <Testimonials />
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="py-16 md:py-20">
        <Container className="grid gap-10">
          <SectionHeading
            kicker="Accompagnement"
            title="Du besoin au produit, avec des étapes claires"
            subtitle="Je prends en charge l’interface, le backend et la mise en ligne. Le périmètre, les responsabilités et le calendrier sont définis ensemble."
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="text-sm font-semibold text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="grid gap-6 rounded-2xl border border-stroke p-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">
                Néhémie Gandonou, votre interlocuteur
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Basé à Cotonou, disponible au Bénin et à distance.
              </p>
              <Link
                href="/about"
                className="mt-3 inline-block text-sm text-primary hover:underline"
              >
                Mon parcours et mes compétences →
              </Link>
            </div>
            <ul className="grid gap-2 text-sm text-foreground-muted">
              {aboutGuarantees.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" id="contact" className="py-16 md:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            align="center"
            kicker="Votre projet"
            title="Quel produit souhaitez-vous construire ?"
            subtitle="Décrivez votre besoin et vos utilisateurs. Premier retour sous 24h, puis un devis gratuit après le cadrage."
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
