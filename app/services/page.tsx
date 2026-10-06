import { createElement } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import SpotlightCard from "../components/ui/SpotlightCard";
import TestimonialQuote from "../components/ui/TestimonialQuote";
import FinalCta from "../components/ui/FinalCta";
import { getIcon, ArrowRight, CheckCircle } from "@/lib/icons";
import {
  servicesDetailed,
  servicesPreview,
  aboutGuarantees,
  pricingTiers,
  siteConfig,
} from "@/data";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

const url = `${siteConfig.url}/services`;

export const metadata: Metadata = {
  title: "Plateformes Web & Applications Mobiles au Bénin",
  description:
    "Plateformes web, logiciels métier et applications mobiles au Bénin. Un accompagnement du cadrage au lancement.",
  alternates: { canonical: url },
  openGraph: {
    title: "Services | Plateformes web et applications mobiles",
    description:
      "Logiciels métier, plateformes web et applications mobiles sur mesure.",
    url,
    type: "website",
    locale: "fr_BJ",
  },
};

export default async function ServicesPage() {
  const mainServices = servicesPreview.map(
    (preview) =>
      servicesDetailed.find((service) => service.slug === preview.slug)!,
  );
  const otherServices = servicesDetailed.filter(
    (service) => !servicesPreview.some((main) => main.slug === service.slug),
  );

  return (
    <>
      <PageHeader
        kicker="Services"
        title="Ce que je peux réaliser pour vous"
        description="Je développe des plateformes web et des applications mobiles pour votre équipe ou vos clients. Nous choisissons ensemble les fonctionnalités dont vous avez besoin."
      />

      {/* Services principaux */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-6 grid md:grid-cols-2">
          {mainServices.map((service, i) => {
            const price = pricingTiers.find(
              (tier) => tier.serviceSlug === service.slug,
            )?.priceFrom;
            return (
              <SpotlightCard
                key={service.slug}
                corner={CORNERS[i % CORNERS.length]}
                cornerColor={ACCENTS[i % ACCENTS.length]}
                hover={false}
                className="h-full [&>.spotlight-content]:h-full"
              >
                <article className="flex flex-col gap-5 p-7 md:p-9 h-full">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex justify-center items-center bg-primary/15 rounded-2xl w-12 h-12 text-primary">
                      {createElement(getIcon(service.iconName), {
                        className: "w-6 h-6",
                      })}
                    </div>
                    {price && (
                      <p className="text-right">
                        <span className="block text-foreground-muted text-xs">
                          À partir de
                        </span>
                        <span className="font-display font-bold text-foreground text-xl">
                          {price}
                        </span>
                      </p>
                    )}
                  </div>
                  <h2 className="font-display font-semibold text-foreground text-2xl">
                    {service.title}
                  </h2>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {service.details}
                  </p>
                  <ul className="gap-2.5 grid sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-foreground-muted text-sm"
                      >
                        <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto pt-2 w-fit btn-secondary"
                  >
                    Découvrir ce service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              </SpotlightCard>
            );
          })}
        </Container>
      </SectionWrapper>

      {/* Prestations complémentaires */}
      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="gap-10 grid">
          <SectionHeading
            kicker="Aussi"
            title="Prestations complémentaires"
            subtitle="SaaS, e-commerce, sites vitrines et optimisation : les autres projets que je réalise."
          />
          <div className="gap-4 grid sm:grid-cols-2">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex gap-4 p-6 card-interactive"
              >
                <div className="flex justify-center items-center bg-primary/15 rounded-xl w-10 h-10 text-primary shrink-0">
                  {createElement(getIcon(service.iconName), {
                    className: "w-5 h-5",
                  })}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Engagements + preuve */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="items-stretch gap-6 grid lg:grid-cols-2">
          <div className="flex flex-col gap-6 p-8 md:p-10 card">
            <SectionHeading
              kicker="Inclus"
              title="Compris dans chaque projet"
            />
            <ul className="flex flex-col gap-4">
              {aboutGuarantees.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground-muted text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <TestimonialQuote name="Nassamou Rachad" accent="#3b82f6" />
        </Container>
      </SectionWrapper>

      <FinalCta
        title="Pas sûr du service qu’il vous faut ?"
        text="Expliquez-moi ce que vous voulez faire. Je vous aide à choisir par où commencer."
        secondary={{ href: "/tarifs", label: "Voir les tarifs" }}
      />
    </>
  );
}
