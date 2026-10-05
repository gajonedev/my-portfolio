import Link from "next/link";
import { Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";

const ACCENTS = ["#3b82f6", "#f59e0b", "#ff4d3d"];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

function TestimonialCard({
  item,
  accent,
  featured = false,
}: {
  item: Testimonial;
  accent: string;
  featured?: boolean;
}) {
  return (
    <figure
      className={`spotlight-card ${featured ? "corner-tr" : "corner-bl"} h-full`}
      style={{ "--corner": accent } as React.CSSProperties}
    >
      <div
        className={`spotlight-content flex flex-col gap-6 ${featured ? "p-8 md:p-10" : "p-6"}`}
      >
        <div className="flex justify-between items-start gap-4">
          <Quote
            className={`text-primary ${featured ? "w-9 h-9" : "w-6 h-6"}`}
            aria-hidden="true"
          />
          <span className="bg-background-muted px-2.5 py-1 border border-stroke rounded-full text-foreground-muted text-xs">
            {item.kind === "client" ? "Client" : "Collaborateur"}
          </span>
        </div>
        <blockquote
          className={`text-foreground leading-relaxed ${featured ? "text-lg md:text-xl" : "text-sm"}`}
        >
          {item.quote}
        </blockquote>
        <figcaption className="flex items-center gap-3 mt-auto pt-5 border-stroke border-t">
          <span
            aria-hidden="true"
            className="flex justify-center items-center rounded-full w-10 h-10 font-display font-semibold text-white text-sm shrink-0"
            style={{ background: accent }}
          >
            {initials(item.name)}
          </span>
          <span className="flex flex-col min-w-0">
            <span className="font-semibold text-foreground text-sm">
              {item.name}
            </span>
            <span className="text-foreground-muted text-xs">{item.role}</span>
          </span>
          {item.projectSlug && (
            <Link
              href={`/projects/${item.projectSlug}`}
              className="ml-auto text-primary text-sm hover:underline shrink-0"
            >
              Voir le projet →
            </Link>
          )}
        </figcaption>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  const clients = testimonials.filter((item) => item.kind === "client");
  const collaborators = testimonials.filter(
    (item) => item.kind === "collaborator",
  );
  return (
    <div className="gap-6 grid">
      {clients.map((item) => (
        <TestimonialCard key={item.name} item={item} accent="#ff4d3d" featured />
      ))}
      <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
        {collaborators.map((item, index) => (
          <TestimonialCard
            key={item.name}
            item={item}
            accent={ACCENTS[index % ACCENTS.length]}
          />
        ))}
      </div>
    </div>
  );
}
