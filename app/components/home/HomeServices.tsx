import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pricingTiers, servicesPreview } from "@/data";
import { contactHref } from "@/lib/acquisition";
import Container from "../Container";
import EditorialHeading from "./EditorialHeading";

const CHART = "M120 196 L162 170 L198 182 L236 140 L272 152 L312 108 L360 92";

// Line drawings, traced on scroll ([data-draw] in HomeAnimations).
function WebVisual() {
  return (
    <svg viewBox="0 0 400 260" fill="none" aria-hidden="true" className="svc-visual">
      <rect data-draw pathLength={1} x="12" y="12" width="376" height="236" rx="16" />
      <path data-draw pathLength={1} d="M12 46 H388" />
      <circle data-draw pathLength={1} cx="34" cy="29" r="5" />
      <circle data-draw pathLength={1} cx="52" cy="29" r="5" />
      <circle data-draw pathLength={1} cx="70" cy="29" r="5" />
      <path data-draw pathLength={1} d="M96 46 V248" />
      <path data-draw pathLength={1} d="M30 72 H76 M30 92 H66 M30 112 H72 M30 132 H60" />
      <rect data-draw pathLength={1} x="118" y="64" width="76" height="22" rx="6" />
      <rect data-draw pathLength={1} x="204" y="64" width="76" height="22" rx="6" />
      <rect data-draw pathLength={1} x="290" y="64" width="76" height="22" rx="6" />
      <path data-draw pathLength={1} d="M118 220 H366" />
      <path data-draw pathLength={1} d={CHART} className="svc-accent" />
      <path pathLength={1} d={CHART} className="svc-pulse" />
    </svg>
  );
}

function MobileVisual() {
  return (
    <svg viewBox="0 0 400 260" fill="none" aria-hidden="true" className="svc-visual">
      <rect data-draw pathLength={1} x="136" y="10" width="128" height="240" rx="26" />
      <path data-draw pathLength={1} d="M182 24 H218" />
      <rect data-draw pathLength={1} x="152" y="46" width="96" height="58" rx="10" className="svc-accent" />
      <path data-draw pathLength={1} d="M152 122 H248 M152 144 H230 M152 166 H240 M152 188 H214" />
      <rect data-draw pathLength={1} x="152" y="206" width="96" height="26" rx="13" />
      <rect data-draw pathLength={1} x="276" y="58" width="104" height="44" rx="12" />
      <path data-draw pathLength={1} d="M290 74 H350 M290 88 H330" />
      <rect data-draw pathLength={1} x="22" y="150" width="96" height="44" rx="12" />
      <path data-draw pathLength={1} d="M36 166 H96 M36 180 H76" />
      <path pathLength={1} d="M276 80 C 262 80 262 76 248 76" className="svc-pulse" />
      <path pathLength={1} d="M118 172 C 136 172 136 160 152 160" className="svc-pulse svc-pulse-late" />
    </svg>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "creation-application-web": WebVisual,
  "creation-application-mobile": MobileVisual,
};

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
            const Visual = VISUALS[service.slug ?? ""] ?? WebVisual;
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
