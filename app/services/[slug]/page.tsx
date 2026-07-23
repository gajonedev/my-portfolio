import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import TechBadge from "../../components/ui/TechBadge";
import PriceTag from "../../components/ui/PriceTag";
import WhatsAppCta from "../../components/ui/WhatsAppCta";
import {
  getIcon,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  MapPin,
} from "@/lib/icons";
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
  const Icon = getIcon(service.iconName);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={service.title} description={service.heroDescription} />

      <main className="py-16">
        <Container className="gap-14 grid">
          {/* Fil d'ariane */}
          <nav aria-label="Fil d'ariane" className="-mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-foreground-muted text-sm">
              <li>
                <Link href="/" className="hover:text-foreground transition">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-foreground transition"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li aria-current="page" className="text-foreground">
                {service.shortTitle}
              </li>
            </ol>
          </nav>

          {/* Introduction */}
          <section className="max-w-3xl">
            <div className="flex justify-center items-center bg-primary/15 mb-6 rounded-2xl w-14 h-14 text-primary">
              {/* eslint-disable-next-line react-hooks/static-components */}
              <Icon className="w-7 h-7" />
            </div>
            {service.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-foreground-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* Livrables */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Ce que vous recevez
            </h2>
            <div className="gap-3 grid md:grid-cols-2">
              {service.deliverables.map((deliverable) => (
                <div key={deliverable} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-foreground-muted text-sm">{deliverable}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Offres */}
          <section>
            <h2 className="mb-2 font-semibold text-foreground text-2xl">
              Trois formules, un même niveau d&apos;exigence
            </h2>
            <p className="mb-8 text-foreground-muted text-sm">
              Des périmètres clairs pour situer votre budget, le devis précis
              arrive sous 24h, gratuitement.
            </p>
            <div className="items-stretch gap-6 grid md:grid-cols-3">
              {service.offers.map((offer, index) => (
                <div
                  key={offer.name}
                  className={`relative flex flex-col p-6 rounded-2xl ${
                    offer.recommended
                      ? "animated-border md:scale-[1.03] shadow-[0_10px_50px_var(--primary-glow-strong)]"
                      : "bg-card/60 border border-stroke"
                  }`}
                >
                  {offer.recommended && (
                    <PriceTag
                      tilt="right"
                      className="-top-4 right-5 absolute text-xs uppercase tracking-wider"
                    >
                      Recommandé
                    </PriceTag>
                  )}
                  <h3 className="font-display font-semibold text-foreground text-lg">
                    {offer.name}
                  </h3>
                  <p className="mt-2 text-foreground-muted text-sm">
                    {offer.description}
                  </p>
                  <div className="mt-5">
                    <span className="block mb-2 text-foreground-muted text-xs uppercase tracking-wider">
                      À partir de
                    </span>
                    <PriceTag
                      tilt={index % 2 === 0 ? "left" : "right"}
                      className="text-lg"
                    >
                      {offer.price}
                    </PriceTag>
                    {offer.priceNote && (
                      <p className="mt-2 text-foreground-muted text-xs">
                        {offer.priceNote}
                      </p>
                    )}
                  </div>
                  <ul className="flex flex-col gap-2 mt-5">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-foreground-muted text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-auto pt-6 ${
                      offer.recommended ? "" : "opacity-90"
                    }`}
                  >
                    <span
                      className={`inline-flex justify-center items-center gap-2 w-full ${
                        offer.recommended ? "btn-primary" : "btn-secondary"
                      }`}
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-4 text-foreground-muted text-sm">
              Besoin d&apos;un périmètre différent ? Chaque projet est unique :{" "}
              <Link href="/contact" className="text-primary hover:underline">
                décrivez-moi le vôtre
              </Link>{" "}
              et je vous propose une formule adaptée.
            </p>
          </section>

          {/* Processus */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-2xl">
              Comment ça se passe
            </h2>
            <div className="flex flex-col gap-4 max-w-3xl">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
                >
                  <div className="flex justify-center items-center bg-primary/15 rounded-xl w-10 h-10 font-display font-semibold text-primary shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-foreground-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projets liés */}
          {relatedProjects.length > 0 && (
            <section>
              <h2 className="mb-6 font-semibold text-foreground text-xl">
                Réalisations dans ce domaine
              </h2>
              <div className="gap-3 grid grid-cols-1 sm:grid-cols-3">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group bg-card/50 hover:bg-card p-5 border border-stroke hover:border-primary/40 rounded-xl transition"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition">
                      {project.name}
                    </p>
                    <p className="mt-1 text-foreground-muted text-xs">
                      {project.sector}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tech.slice(0, 3).map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-4">
              {service.faq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-card open:pb-5 border border-stroke rounded-2xl"
                >
                  <summary className="flex justify-between items-center gap-4 p-5 font-medium text-foreground cursor-pointer list-none">
                    {item.question}
                    <ChevronRight className="w-5 h-5 text-foreground-muted group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <p className="px-5 text-foreground-muted text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-4 text-foreground-muted text-sm">
              Une question sur le budget ? Consultez les{" "}
              <Link href="/tarifs" className="text-primary hover:underline">
                tarifs indicatifs
              </Link>
              .
            </p>
          </section>

          {/* Villes */}
          {relatedCities.length > 0 && (
            <section>
              <h2 className="mb-6 font-semibold text-foreground text-xl">
                Ce service, près de chez vous
              </h2>
              <div className="gap-3 grid grid-cols-1 sm:grid-cols-3">
                {relatedCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${cityFullSlug(city)}`}
                    className="group flex items-center gap-3 bg-card/50 hover:bg-card p-4 border border-stroke hover:border-primary/40 rounded-xl transition"
                  >
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <p className="font-medium text-foreground group-hover:text-primary transition">
                      Développeur web à {city.name}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Prêt à démarrer ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Décrivez-moi votre projet : devis clair et détaillé sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <WhatsAppCta
                label="Discuter de mon projet"
                message={`Bonjour Néhémie, je suis intéressé par votre service « ${service.shortTitle} » et j'aimerais en discuter.`}
              />
              <Link href="/tarifs" className="btn-secondary">
                Voir les tarifs
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
