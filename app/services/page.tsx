import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/ui/SpotlightCard";
import TechBadge from "../components/ui/TechBadge";
import WhatsAppCta from "../components/ui/WhatsAppCta";
import { getIcon, ArrowRight, CheckCircle, Quote } from "@/lib/icons";
import {
  servicesDetailed,
  aboutGuarantees,
  testimonials,
  siteConfig,
} from "@/data";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

const url = `${siteConfig.url}/services`;

export const metadata: Metadata = {
  title: "Création de Sites Web & Apps Mobiles au Bénin",
  description:
    "Sites web, applications mobiles, e-commerce et logiciels métier au Bénin. Un périmètre précis et un devis gratuit sous 24h. Parlons de votre projet.",
  alternates: { canonical: url },
  openGraph: {
    title: "Services — Création de sites web et d'applications au Bénin",
    description:
      "Sites web, apps mobiles, e-commerce et logiciels métier. Périmètre précis, devis gratuit sous 24h.",
    url,
    type: "website",
    locale: "fr_BJ",
  },
};

export default async function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Chacun de mes services règle un problème concret de votre activité : vendre plus, gagner du temps, être trouvé sur Google. Vous obtenez d'abord un périmètre précis et un devis sous 24h."
      />
      <main className="py-16">
        <Container className="gap-6 grid md:grid-cols-2">
          {servicesDetailed.map((service, i) => {
            const Icon = getIcon(service.iconName);
            return (
              <SpotlightCard
                key={service.title}
                corner={CORNERS[i % CORNERS.length]}
                cornerColor={ACCENTS[i % ACCENTS.length]}
                glow={false}
              >
                <div className="p-6">
                  <div className="flex justify-center items-center bg-primary/15 rounded-2xl w-12 h-12 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-foreground text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-foreground-muted text-sm">
                    {service.details}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.features.map((f) => (
                      <TechBadge key={f}>{f}</TechBadge>
                    ))}
                  </div>
                  {service.slug && (
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 mt-5 font-medium text-primary text-sm hover:underline"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </Container>

        {/* Rassurance — compris dans chaque projet */}
        <Container className="mt-16">
          <div className="bg-card px-6 py-8 border border-stroke rounded-3xl">
            <h2 className="mb-6 font-display font-semibold text-foreground text-lg text-center">
              Compris dans chaque projet
            </h2>
            <div className="gap-3 grid sm:grid-cols-2 mx-auto max-w-3xl">
              {aboutGuarantees.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-foreground-muted text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Preuve client */}
        <Container className="mt-12">
          <SpotlightCard
            corner="tr"
            cornerColor="#ff4d3d"
            hover={false}
            glow={false}
          >
            <figure className="flex flex-col gap-4 p-8 md:p-10">
              <Quote className="w-8 h-8 text-primary" />
              <blockquote className="max-w-3xl font-body text-foreground text-lg leading-relaxed">
                {testimonials[0].quote}
              </blockquote>
              <figcaption className="font-body text-foreground-muted text-sm">
                <span className="font-medium text-foreground">
                  {testimonials[0].name}
                </span>{" "}
                · {testimonials[0].role}
              </figcaption>
            </figure>
          </SpotlightCard>
        </Container>

        <Container className="mt-16">
          <div className="flex flex-col items-center gap-6 bg-card px-6 py-12 border border-stroke rounded-3xl text-center">
            <div className="flex flex-col gap-3">
              <h2 className="font-display font-semibold text-foreground text-2xl">
                Pas sûr du service qu&apos;il vous faut ?
              </h2>
              <p className="mx-auto max-w-xl font-body text-foreground-muted">
                Décrivez-moi votre besoin en deux lignes : je vous oriente vers
                la bonne solution et un devis détaillé, sous 24h.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <WhatsAppCta label="Discuter de mon projet" />
              <Link href="/tarifs" className="btn-secondary">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
