import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { getIcon } from "@/lib/icons";
import { servicesDetailed } from "@/data";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Des solutions complètes pour développer votre présence digitale et accélérer votre croissance."
      />
      <main className="py-16">
        <Container className="gap-6 grid md:grid-cols-2">
          {servicesDetailed.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.title}
                className="bg-card p-6 border border-stroke hover:border-primary/50 rounded-3xl transition"
              >
                <div className="flex justify-center items-center bg-primary/20 rounded-2xl w-12 h-12 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground text-lg">
                  {service.title}
                </h3>
                <p className="mt-3 text-foreground-muted text-sm">
                  {service.details}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="bg-background px-3 py-1 border border-stroke rounded-full text-foreground-muted text-xs"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </main>
    </>
  );
}
