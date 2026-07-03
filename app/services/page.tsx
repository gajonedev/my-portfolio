import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/ui/SpotlightCard";
import TechBadge from "../components/ui/TechBadge";
import { getIcon, ArrowRight } from "@/lib/icons";
import { servicesDetailed } from "@/data";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

export default async function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Des solutions complètes pour développer votre présence digitale et accélérer votre croissance."
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
      </main>
    </>
  );
}
