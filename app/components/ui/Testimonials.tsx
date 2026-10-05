import Link from "next/link";
import SpotlightCard from "./SpotlightCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const clients = testimonials.filter((item) => item.kind === "client");
  const collaborators = testimonials.filter(
    (item) => item.kind === "collaborator",
  );
  const cards = (items: typeof testimonials) =>
    items.map((item) => {
      const content = (
        <figure className="p-6">
          <blockquote className="text-foreground leading-relaxed">
            « {item.quote} »
          </blockquote>
          <figcaption className="mt-5 text-foreground-muted text-sm">
            <span className="font-semibold text-foreground">{item.name}</span>
            <span className="block mt-1">{item.role}</span>
            {item.projectSlug && (
              <Link
                href={`/projects/${item.projectSlug}`}
                className="inline-block mt-2 text-primary hover:underline"
              >
                Découvrir ce projet →
              </Link>
            )}
          </figcaption>
        </figure>
      );
      return item.kind === "collaborator" ? (
        <div
          key={item.name}
          className="rounded-3xl border border-stroke bg-background-soft"
        >
          {content}
        </div>
      ) : (
        <SpotlightCard key={item.name} corner="none" hover={false} glow={false}>
          {content}
        </SpotlightCard>
      );
    });
  return (
    <div className="gap-6 grid">
      <div className="gap-4 grid">{cards(clients)}</div>
      <SpotlightCard
        corner="bl"
        cornerColor="#3b82f6"
        hover={false}
        glow={false}
      >
        <details className="p-5">
          <summary className="font-medium cursor-pointer">
            Mes collaborateurs en parlent aussi ({collaborators.length})
          </summary>
          <div className="gap-4 grid md:grid-cols-2 mt-5">
            {cards(collaborators)}
          </div>
        </details>
      </SpotlightCard>
    </div>
  );
}
