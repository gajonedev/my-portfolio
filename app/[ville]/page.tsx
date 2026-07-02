import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import {
  getIcon,
  MapPin,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from "@/lib/icons";
import {
  localServices,
  localAdvantages,
  siteConfig,
  contactInfo,
  localCities,
  cityFullSlug,
  getCityByFullSlug,
  getCityBySlug,
} from "@/data";

// Seules les villes du dataset existent : tout autre slug → 404
export const dynamicParams = false;

export function generateStaticParams() {
  return localCities.map((city) => ({ ville: cityFullSlug(city) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityByFullSlug(ville);
  if (!city) return {};

  const url = `${siteConfig.url}/${cityFullSlug(city)}`;
  const title = `Développeur Web & Mobile à ${city.name} — Sites, Applications, E-commerce`;

  return {
    title,
    description: city.metaDescription,
    keywords: [
      `développeur web ${city.name}`,
      `développeur ${city.name}`,
      `création site web ${city.name}`,
      `application mobile ${city.name}`,
      `développeur mobile ${city.name}`,
      `freelance ${city.name}`,
      `e-commerce ${city.name}`,
      `développeur web ${city.department} Bénin`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `Développeur Web & Mobile à ${city.name}`,
      description: city.metaDescription,
      url,
      type: "website",
      locale: "fr_BJ",
    },
    other: {
      "geo.region": city.regionCode,
      "geo.placename": city.name,
      "geo.position": `${city.geo.latitude};${city.geo.longitude}`,
      ICBM: `${city.geo.latitude}, ${city.geo.longitude}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const city = getCityByFullSlug(ville);
  if (!city) notFound();

  const url = `${siteConfig.url}/${cityFullSlug(city)}`;
  const nearbyCities = city.nearby
    .map((slug) => getCityBySlug(slug))
    .filter((c) => c !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: `${siteConfig.name} — Développeur Web & Mobile à ${city.name}`,
        description: city.metaDescription,
        url,
        image: `${siteConfig.url}/portrait.webp`,
        telephone: contactInfo.phoneRaw,
        email: contactInfo.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cotonou",
          addressRegion: "Littoral",
          addressCountry: "BJ",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: `${city.department}, Bénin`,
          },
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: city.geo.latitude,
          longitude: city.geo.longitude,
        },
        provider: { "@id": `${siteConfig.url}/#person` },
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
            name: "Développeur Web au Bénin",
            item: `${siteConfig.url}/developpeur-web-benin`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city.name,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: city.faq.map((item) => ({
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

      <PageHeader
        title={`Développeur Web & Mobile à ${city.name}`}
        description={`${city.tagline} — applications web, apps mobiles, e-commerce et outils métier pour les entreprises et organisations de ${city.name}.`}
      />

      <main className="py-16">
        <Container className="gap-16 grid">
          {/* Fil d'ariane */}
          <nav aria-label="Fil d'ariane" className="-mb-8">
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
                  href="/developpeur-web-benin"
                  className="hover:text-foreground transition"
                >
                  Développeur Web au Bénin
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li aria-current="page" className="text-foreground">
                {city.name}
              </li>
            </ol>
          </nav>

          {/* Introduction */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Votre partenaire digital à {city.name}
            </h2>
            {city.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-foreground-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* Opportunités locales */}
          <section>
            <h2 className="mb-2 font-semibold text-foreground text-xl">
              Le digital au service de {city.name}
            </h2>
            <p className="mb-6 text-foreground-muted text-sm">
              Des solutions pensées pour les réalités économiques de{" "}
              {city.name} et du département {city.department === "Littoral" ? "du" : "de"}{" "}
              {city.department} :
            </p>
            <div className="gap-4 grid md:grid-cols-2">
              {city.opportunities.map((opportunity) => {
                const Icon = getIcon(opportunity.iconName);
                return (
                  <div
                    key={opportunity.title}
                    className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
                  >
                    <div className="flex justify-center items-center bg-primary/20 rounded-xl w-12 h-12 text-primary shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {opportunity.title}
                      </h3>
                      <p className="mt-1 text-foreground-muted text-sm">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Services disponibles à {city.name}
            </h2>
            <div className="gap-4 grid md:grid-cols-2">
              {localServices.map((service) => {
                const Icon = getIcon(service.iconName);
                return (
                  <div
                    key={service.title}
                    className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
                  >
                    <div className="flex justify-center items-center bg-primary/20 rounded-xl w-12 h-12 text-primary shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-foreground-muted text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ancrage local */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              {city.name}, un territoire que je connais
            </h2>
            <div className="gap-8 grid md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-medium text-foreground text-sm uppercase tracking-wider">
                  Repères locaux
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {city.anchors.map((anchor) => (
                    <li key={anchor} className="flex items-start gap-3">
                      <MapPin className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground-muted text-sm">
                        {anchor}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-medium text-foreground text-sm uppercase tracking-wider">
                  Pourquoi un développeur béninois
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {localAdvantages.slice(0, 4).map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-foreground-muted text-sm">
                        {advantage}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Questions fréquentes — {city.name}
            </h2>
            <div className="flex flex-col gap-4">
              {city.faq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-card border border-stroke rounded-2xl open:pb-5"
                >
                  <summary className="flex justify-between items-center gap-4 p-5 font-medium text-foreground cursor-pointer list-none">
                    {item.question}
                    <ChevronRight className="w-5 h-5 text-foreground-muted transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <p className="px-5 text-foreground-muted text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Villes voisines — maillage interne */}
          {nearbyCities.length > 0 && (
            <section>
              <h2 className="mb-6 font-semibold text-foreground text-xl">
                J&apos;interviens aussi près de {city.name}
              </h2>
              <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {nearbyCities.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/${cityFullSlug(nearby)}`}
                    className="group flex items-center gap-3 bg-card/50 hover:bg-card p-4 border border-stroke hover:border-primary/40 rounded-xl transition"
                  >
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition">
                        Développeur web à {nearby.name}
                      </p>
                      <p className="text-foreground-muted text-xs">
                        {nearby.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-foreground-muted text-sm">
                Retrouvez toutes les villes sur la page{" "}
                <Link
                  href="/developpeur-web-benin"
                  className="text-primary hover:underline"
                >
                  développeur web au Bénin
                </Link>
                .
              </p>
            </section>
          )}

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Un projet à {city.name} ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Parlons-en. Prise de brief et devis clair sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="/contact" className="btn-primary">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="btn-secondary">
                Voir mes réalisations
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
