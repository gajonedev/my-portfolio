import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const clients = testimonials.filter((item) => item.kind === "client");
  const collaborators = testimonials.filter(
    (item) => item.kind === "collaborator",
  );
  const cards = (items: typeof testimonials) =>
    items.map((item) => (
      <figure
        key={item.name}
        className="rounded-2xl border border-stroke bg-background-soft card-glow p-6"
      >
        <blockquote className="text-foreground leading-relaxed">
          « {item.quote} »
        </blockquote>
        <figcaption className="mt-5 text-sm text-foreground-muted">
          <span className="font-semibold text-foreground">{item.name}</span>
          <span className="mt-1 block">{item.role}</span>
          {item.projectSlug && (
            <Link
              href={`/projects/${item.projectSlug}`}
              className="mt-2 inline-block text-primary hover:underline"
            >
              Voir le projet associé →
            </Link>
          )}
        </figcaption>
      </figure>
    ));
  return (
    <div className="grid gap-6">
      <div className="grid gap-4">{cards(clients)}</div>
      <details className="rounded-2xl border border-stroke p-5">
        <summary className="cursor-pointer font-medium">
          Les retours de mes collaborateurs ({collaborators.length})
        </summary>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {cards(collaborators)}
        </div>
      </details>
    </div>
  );
}
