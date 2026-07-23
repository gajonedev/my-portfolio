import type { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import WhatsAppCta from "../components/ui/WhatsAppCta";
import Link from "next/link";
import { getIcon, MapPin, CheckCircle, ChevronRight } from "@/lib/icons";
import {
  localServices,
  localAdvantages,
  remoteCountries,
  seoKeywords,
  beninFaq,
  siteConfig,
  contactInfo,
  localCities,
  cityFullSlug,
} from "@/data";

export const metadata: Metadata = {
  title: "Développeur Web & Mobile au Bénin — Cotonou, Porto-Novo, Lokossa",
  description:
    "Développeur web et mobile freelance au Bénin : sites, apps mobiles, e-commerce et paiement Mobile Money. Devis gratuit sous 24h, à Cotonou, Porto-Novo et partout au Bénin.",
  keywords: seoKeywords.slice(0, 10),
  alternates: {
    canonical: `${siteConfig.url}/developpeur-web-benin`,
  },
  openGraph: {
    title: "Développeur Web & Mobile au Bénin",
    description:
      "Votre développeur freelance pour des applications web fullstack, apps mobiles, SaaS et e-commerce à Cotonou, Porto-Novo, Lokossa et partout au Bénin.",
    url: `${siteConfig.url}/developpeur-web-benin`,
  },
};

const pageUrl = `${siteConfig.url}/developpeur-web-benin`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#service`,
      name: `${siteConfig.name}, Développeur Web & Mobile au Bénin`,
      description:
        "Développeur web et mobile freelance au Bénin : sites web, applications mobiles, e-commerce et logiciels métier, avec paiement Mobile Money.",
      url: pageUrl,
      image: `${siteConfig.url}/portrait.png`,
      telephone: contactInfo.phoneRaw,
      email: contactInfo.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cotonou",
        addressRegion: "Littoral",
        addressCountry: "BJ",
      },
      areaServed: { "@type": "Country", name: "Bénin" },
      provider: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: beninFaq.map((item) => ({
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

export default async function DeveloppeurWebBeninPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Développeur Web & Mobile au Bénin"
        description="Votre partenaire digital à Cotonou pour des applications web fullstack, des apps mobiles et des plateformes e-commerce / SaaS performantes."
      />

      <main className="py-16">
        <Container className="gap-16 grid">
          {/* Introduction SEO */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Votre développeur web freelance au Bénin
            </h2>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Je suis <strong>Néhémie Gandonou</strong>, développeur web et
              mobile freelance basé à <strong>Cotonou, Bénin</strong>. Je conçois
              des <strong>applications web fullstack</strong>, des{" "}
              <strong>applications mobiles</strong> et des plateformes SaaS /
              e-commerce, avec un backend solide et scalable, pour les
              entreprises, startups et entrepreneurs au Bénin et en Afrique de
              l&apos;Ouest.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Que vous soyez à <strong>Cotonou</strong>,{" "}
              <strong>Porto-Novo</strong>, <strong>Lokossa</strong>,{" "}
              <strong>Parakou</strong> ou ailleurs au Bénin, je peux vous
              accompagner dans votre projet digital avec un suivi personnalisé
              et des solutions adaptées au marché local.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Services disponibles au Bénin
            </h2>
            <div className="gap-4 grid md:grid-cols-2">
              {localServices.map((service) => {
                const Icon = getIcon(service.iconName);
                const card = (
                  <>
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
                  </>
                );
                return service.slug ? (
                  <Link
                    key={service.title}
                    href={`/services/${service.slug}`}
                    className="flex gap-4 bg-card hover:bg-card/80 p-5 border border-stroke hover:border-primary/40 rounded-2xl transition"
                  >
                    {card}
                  </Link>
                ) : (
                  <div
                    key={service.title}
                    className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
                  >
                    {card}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Villes couvertes */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Villes où j&apos;interviens
            </h2>
            <div className="gap-3 grid grid-cols-2 md:grid-cols-3">
              {localCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${cityFullSlug(city)}`}
                  className="group flex items-center gap-3 bg-card/50 hover:bg-card p-4 border border-stroke hover:border-primary/40 rounded-xl transition"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition">
                      {city.name}
                    </p>
                    <p className="text-foreground-muted text-xs">
                      {city.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-foreground-muted text-sm">
              Je travaille également en remote avec des clients au{" "}
              {remoteCountries.map((country, index) => (
                <span key={country}>
                  <strong>{country}</strong>
                  {index < remoteCountries.length - 1 ? ", " : " "}
                </span>
              ))}
              et partout dans le monde.
            </p>
          </section>

          {/* Avantages */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Pourquoi choisir un développeur local ?
            </h2>
            <div className="gap-3 grid md:grid-cols-2">
              {localAdvantages.map((advantage) => (
                <div key={advantage} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-foreground-muted text-sm">{advantage}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-4">
              {beninFaq.map((item) => (
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
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Prêt à lancer votre projet ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Discutons de votre projet digital. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <WhatsAppCta
                label="Discuter de mon projet"
                message="Bonjour Néhémie, j'ai un projet web ou mobile au Bénin et j'aimerais en discuter avec vous."
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
