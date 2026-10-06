import { serializeJsonLd } from "@/lib/seo";
import { contactHref } from "@/lib/acquisition";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createElement } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import SectionWrapper from "../../components/layout/SectionWrapper";
import SectionHeading from "../../components/ui/SectionHeading";
import GlowButton from "../../components/ui/GlowButton";
import ProjectCard from "../../components/ui/ProjectCard";
import FaqList from "../../components/ui/FaqList";
import FinalCta from "../../components/ui/FinalCta";
import { getIcon, CheckCircle, MapPin } from "@/lib/icons";
import {
  servicePages,
  getServicePageBySlug,
  getProjectBySlug,
  getCityBySlug,
  cityFullSlug,
  siteConfig,
  contactInfo,
} from "@/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);
  if (!service) return {};

  const url = `${siteConfig.url}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website",
      locale: "fr_BJ",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);
  if (!service) notFound();

  const url = `${siteConfig.url}/services/${service.slug}`;

  const relatedProjects = service.relatedProjectSlugs
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project) => project !== undefined);

  const relatedCities = service.relatedCitySlugs
    .map((citySlug) => getCityBySlug(citySlug))
    .filter((city) => city !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.metaDescription,
        url,
        serviceType: service.shortTitle,
        provider: {
          "@id": `${siteConfig.url}/#person`,
        },
        areaServed: [
          { "@type": "Country", name: "Bénin" },
          { "@type": "Country", name: "Togo" },
          { "@type": "Country", name: "Côte d'Ivoire" },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteConfig.url}/contact`,
          servicePhone: contactInfo.phoneRaw,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteConfig.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortTitle,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <PageHeader
        kicker={service.shortTitle}
        title={service.title}
        description={service.heroDescription}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* Introduction + livrables */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="items-start gap-10 grid lg:grid-cols-[1.25fr_1fr]">
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center bg-primary/15 rounded-2xl w-14 h-14 text-primary">
              {createElement(getIcon(service.iconName), {
                className: "w-7 h-7",
              })}
            </div>
            {service.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-foreground-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="lg:top-28 lg:sticky p-7 card">
            <h2 className="mb-5 font-semibold text-foreground text-lg">
              Ce que vous recevez
            </h2>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground-muted text-sm leading-relaxed">
                    {deliverable}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </SectionWrapper>

      {/* Offres */}
      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="gap-10 grid">
          <SectionHeading
            kicker="Budget"
            title="Quelques repères pour votre budget"
            subtitle="Ces exemples vous aident à situer votre budget. Je prépare ensuite un devis gratuit selon les fonctionnalités dont vous avez besoin."
          />
          <div className="items-stretch gap-6 grid md:grid-cols-3">
            {service.offers.map((offer) => (
              <article
                key={offer.name}
                className={`relative flex flex-col p-7 rounded-3xl border ${
                  offer.recommended
                    ? "border-primary/60 bg-background-soft shadow-[0_20px_60px_var(--primary-glow)]"
                    : "border-stroke bg-card"
                }`}
              >
                {offer.recommended && (
                  <span className="-top-3 left-7 absolute bg-primary-fill px-3 py-1 rounded-full font-semibold text-[0.7rem] text-primary-foreground uppercase tracking-wider">
                    Recommandé
                  </span>
                )}
                <h3 className="font-display font-semibold text-foreground text-lg">
                  {offer.name}
                </h3>
                <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                  {offer.description}
                </p>
                <div className="my-6 pt-6 border-stroke border-t">
                  <span className="text-foreground-muted text-xs">
                    À partir de
                  </span>
                  <p className="font-display font-bold text-foreground text-3xl tracking-tight">
                    {offer.price}
                  </p>
                  {offer.priceNote && (
                    <p className="mt-1 text-foreground-muted text-xs">
                      {offer.priceNote}
                    </p>
                  )}
                </div>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground-muted text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                {offer.recommended ? (
                  <GlowButton
                    href={contactHref(service.slug, `/services/${service.slug}`)}
                    className="mt-auto w-full"
                  >
                    Demander un devis
                  </GlowButton>
                ) : (
                  <Link
                    href={contactHref(service.slug, `/services/${service.slug}`)}
                    className="mt-auto w-full btn-secondary"
                  >
                    Demander un devis
                  </Link>
                )}
              </article>
            ))}
          </div>
          <p className="text-foreground-muted text-sm">
            Vous avez besoin d’autres fonctionnalités ?{" "}
            <Link
              href={contactHref(service.slug, `/services/${service.slug}`)}
              className="text-primary hover:underline"
            >
              Parlez-moi de votre projet
            </Link>{" "}
            et je vous propose une formule adaptée.
          </p>
        </Container>
      </SectionWrapper>

      {/* Processus : frise horizontale */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-12 grid">
          <SectionHeading kicker="Étapes" title="Comment ça se passe" />
          <ol className="relative gap-8 grid md:auto-cols-fr md:grid-flow-col">
            <span
              aria-hidden="true"
              className="hidden md:block top-5 absolute inset-x-5 bg-linear-to-r from-primary/60 via-stroke to-stroke h-px"
            />
            {service.process.map((step, index) => (
              <li key={step.title} className="relative flex md:flex-col gap-4">
                <span className="flex justify-center items-center bg-background-soft shadow-[0_0_0_6px_var(--background)] border border-primary/50 rounded-full w-10 h-10 font-display font-semibold text-primary text-sm shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      {/* Réalisations + villes */}
      {(relatedProjects.length > 0 || relatedCities.length > 0) && (
        <SectionWrapper variant="dark" className="py-16 md:py-24">
          <Container className="gap-10 grid">
            {relatedProjects.length > 0 && (
              <>
                <SectionHeading
                  kicker="Réalisations"
                  title="Des projets dans ce domaine"
                />
                <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
                  {relatedProjects.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      accent={["#ff4d3d", "#3b82f6", "#f59e0b"][index % 3]}
                    />
                  ))}
                </div>
              </>
            )}
            {relatedCities.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-foreground-muted text-sm">
                  Ce service près de chez vous :
                </span>
                {relatedCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${cityFullSlug(city)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-foreground text-sm card-interactive"
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    {city.name}
                  </Link>
                ))}
              </div>
            )}
          </Container>
        </SectionWrapper>
      )}

      {/* FAQ */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="items-start gap-10 grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-4 lg:top-28 lg:sticky">
            <SectionHeading kicker="FAQ" title="Questions fréquentes" />
            <p className="text-foreground-muted text-sm">
              Une question sur le budget ? Consultez les{" "}
              <Link href="/tarifs" className="text-primary hover:underline">
                tarifs indicatifs
              </Link>
              .
            </p>
          </div>
          <FaqList items={service.faq} />
        </Container>
      </SectionWrapper>

      <FinalCta
        title="Prêt à démarrer ?"
        text="Parlez-moi des fonctionnalités dont vous avez besoin. Je vous prépare un devis gratuit."
        whatsappMessage={`Bonjour Néhémie, je suis intéressé par votre service « ${service.shortTitle} » et j'aimerais en discuter.`}
        secondary={{
          href: contactHref(service.slug, `/services/${service.slug}`),
          label: "Décrire mon projet",
        }}
      />
    </>
  );
}
