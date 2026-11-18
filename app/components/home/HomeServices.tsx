import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pricingTiers, servicesPreview } from "@/data";
import { contactHref } from "@/lib/acquisition";
import Container from "../Container";
import EditorialHeading from "./EditorialHeading";
import { serviceVisual } from "./ServiceVisuals";

export default function HomeServices() {
  return (
    <section id="services" className="relative home-divider py-28 md:py-40 section-dark">
      <Container className="gap-14 md:gap-20 grid">
        <EditorialHeading
          index="02"
          kicker="Web et mobile"
          title="Ce que je peux réaliser pour vous"
          subtitle={"Vous avez besoin d’un logiciel pour votre équipe ou d’une application pour vos clients ? Je vous aide à la construire."}
        />

        <div className="gap-6 grid lg:grid-cols-2">
          {servicesPreview.map((service, index) => {
            const Visual = serviceVisual(service.slug);
            const price = pricingTiers.find(
              (tier) => tier.serviceSlug === service.slug,
            )?.priceFrom;
            return (
              <article key={service.slug} className="svc-card" data-anim="card">
                <div className="svc-card-visual" data-draw-group>
                  <Visual />
                </div>
                <div className="flex flex-col gap-4 p-7 md:p-10 pt-0 md:pt-0">
                  <span className="font-mono text-foreground-subtle text-xs">
                    0{index + 1}
                  </span>
                  <h3 className="font-display font-medium text-foreground text-3xl md:text-4xl tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {service.description}
                  </p>
                  {price ? (
                    <p className="text-foreground-muted text-sm">
                      À partir de{" "}
                      <span className="font-medium text-foreground">{price}</span>{" "}
                      · selon les fonctionnalités choisies
                    </p>
                  ) : null}
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-3">
                    <Link
                      href={contactHref(service.slug, "/")}
                      className="btn-secondary"
                    >
                      Parler de ce projet
                    </Link>
                    <Link href={`/services/${service.slug}`} className="pill-ghost">
                      <span className="pill-ghost-label">
                        Découvrir mon accompagnement
                      </span>
                      <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <Link href="/tarifs" className="w-fit pill-ghost" data-anim="fade">
          <span className="pill-ghost-label">
            Voir mes tarifs et les autres services
          </span>
          <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
        </Link>
      </Container>
    </section>
  );
}
