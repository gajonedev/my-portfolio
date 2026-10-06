import Link from "next/link";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

// One highlighted testimonial, picked by name so each page can show a
// different voice instead of repeating the same quote.
export default function TestimonialQuote({
  name,
  accent = "#ff4d3d",
}: {
  name: string;
  accent?: string;
}) {
  const item = testimonials.find((testimonial) => testimonial.name === name);
  if (!item) return null;
  const initials = item.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <figure
      className="h-full spotlight-card corner-tr"
      style={{ "--corner": accent } as React.CSSProperties}
    >
      <div className="flex flex-col gap-6 p-8 md:p-10 h-full spotlight-content">
        <Quote className="w-9 h-9 text-primary" aria-hidden="true" />
        <blockquote className="text-foreground text-lg md:text-xl leading-relaxed">
          {item.quote}
        </blockquote>
        <figcaption className="flex items-center gap-3 mt-auto pt-5 border-stroke border-t">
          <span
            aria-hidden="true"
            className="flex justify-center items-center rounded-full w-10 h-10 font-display font-semibold text-white text-sm shrink-0"
            style={{ background: accent }}
          >
            {initials}
          </span>
          <span className="flex flex-col">
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
