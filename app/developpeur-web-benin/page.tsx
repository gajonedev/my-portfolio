import type { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import { getIcon, MapPin, CheckCircle, ArrowRight } from "@/lib/icons";
import {
  cities,
  localServices,
  localAdvantages,
  remoteCountries,
  seoKeywords,
  siteConfig,
} from "@/data";

export const metadata: Metadata = {
  title: "Développeur Web & Mobile au Bénin — Cotonou, Porto-Novo, Lokossa",
  description:
    "Recherchez un développeur web & mobile freelance au Bénin ? Applications web fullstack, apps mobiles, plateformes SaaS et e-commerce, backends solides — à Cotonou, Porto-Novo, Lokossa, Parakou. Devis sous 24h.",
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

export default async function DeveloppeurWebBeninPage() {
  return (
    <>
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

          {/* Villes couvertes */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Villes où j&apos;interviens
            </h2>
            <div className="gap-3 grid grid-cols-2 md:grid-cols-3">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center gap-3 bg-card/50 p-4 border border-stroke rounded-xl"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{city.name}</p>
                    <p className="text-foreground-muted text-xs">
                      {city.description}
                    </p>
                  </div>
                </div>
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

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Prêt à lancer votre projet ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Discutons de votre projet digital. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="/contact" className="btn-primary">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Voir tous les services
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
