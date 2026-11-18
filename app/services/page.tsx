import { createElement } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import { serviceVisual } from "../components/home/ServiceVisuals";
import { contactHref } from "@/lib/acquisition";
import { ArrowUpRight } from "lucide-react";
import TestimonialQuote from "../components/ui/TestimonialQuote";
import FinalCta from "../components/ui/FinalCta";
import { getIcon, CheckCircle } from "@/lib/icons";
import {
  servicesDetailed,
  servicesPreview,
  aboutGuarantees,
  pricingTiers,
  siteConfig,
} from "@/data";

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
      <SectionWrapper className="py-20 md:py-28">
        <Container className="gap-6 grid lg:grid-cols-2">
          {mainServices.map((service, i) => {
            const Visual = serviceVisual(service.slug);
            const price = pricingTiers.find(
              (tier) => tier.serviceSlug === service.slug,
            )?.priceFrom;
            return (
              <article key={service.slug} className="svc-card" data-anim="card">
                <div className="svc-card-visual" data-draw-group>
                  <Visual />
                </div>
                <div className="flex flex-col flex-1 gap-5 p-7 md:p-10 pt-0 md:pt-0">
                  <span className="font-mono text-foreground-subtle text-xs">
                    0{i + 1}
                  </span>
                  <h2 className="font-display font-medium text-foreground text-3xl md:text-4xl tracking-[-0.02em]">
                    {service.title}
                  </h2>
                  <p className="text-foreground-muted leading-relaxed">
                    {service.details}
                  </p>
                  <ul className="gap-x-6 gap-y-2.5 grid sm:grid-cols-2">
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
                  {price ? (
                    <p className="pt-5 border-white/[0.07] border-t text-foreground-muted text-sm">
                      À partir de{" "}
                      <span className="font-display font-semibold text-foreground text-xl">
                        {price}
                      </span>
                    </p>
                  ) : null}
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-auto pt-2">
                    <Link
                      href={contactHref(service.slug, "/services")}
                      className="btn-secondary"
                    >
                      Parler de ce projet
                    </Link>
                    <Link href={`/services/${service.slug}`} className="pill-ghost">
                      <span className="pill-ghost-label">Découvrir ce service</span>
                      <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </SectionWrapper>

      {/* Prestations complémentaires */}
      <SectionWrapper className="py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            index="02"
            kicker="Aussi"
            title="Prestations complémentaires"
            subtitle="SaaS, e-commerce, sites vitrines et optimisation : les autres projets que je réalise."
          />
          <ul className="line-list">
            {otherServices.map((service, index) => (
              <li key={service.slug} className="line-item" data-anim="fade">
                <span aria-hidden="true" className="line-item-num">
                  0{index + 1}
                </span>
                <span aria-hidden="true" className="line-item-icon">
                  {createElement(getIcon(service.iconName), {
                    className: "w-5 h-5",
                  })}
                </span>
                <div className="flex flex-col gap-2 min-w-0">
                  <h3 className="line-item-title">
                    <Link href={`/services/${service.slug}`} className="line-item-link">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="max-w-2xl text-foreground-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <span aria-hidden="true" className="line-item-arrow">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </SectionWrapper>

      {/* Engagements + preuve */}
      <SectionWrapper className="py-20 md:py-28">
        <Container className="items-stretch gap-6 grid lg:grid-cols-2">
          <div className="flex flex-col gap-8 p-8 md:p-10 svc-card" data-anim="card">
            <SectionHeading index="03" kicker="Inclus" title="Compris dans chaque projet" />
            <ul className="flex flex-col">
              {aboutGuarantees.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-4 border-white/[0.07] border-t"
                >
                  <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground-muted leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <TestimonialQuote name="Nassamou Rachad" />
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
