import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/ui/SpotlightCard";
import TechBadge from "../components/ui/TechBadge";
import { getIcon } from "@/lib/icons";
import { servicesDetailed } from "@/data";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Des solutions complètes pour développer votre présence digitale et accélérer votre croissance."
      />
      <main className="py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {servicesDetailed.map((service, i) => {
            const Icon = getIcon(service.iconName);
            return (
              <SpotlightCard
                key={service.title}
                corner={CORNERS[i % CORNERS.length]}
                cornerColor={ACCENTS[i % ACCENTS.length]}
              >
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-foreground-muted">
                    {service.details}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <TechBadge key={f}>{f}</TechBadge>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </Container>
      </main>
    </>
  );
}
