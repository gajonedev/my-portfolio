import Link from "next/link";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

// One highlighted testimonial, picked by name so each page can show a
// different voice instead of repeating the same quote.
export default function TestimonialQuote({
  name,
}: {
  name: string;
  /** Ignored: the quote follows the coral of the site. */
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
    <figure className="h-full svc-card" data-anim="card">
      <div className="z-10 relative flex flex-col gap-6 p-8 md:p-10 h-full">
        <Quote className="w-9 h-9 text-primary" aria-hidden="true" />
        <blockquote className="font-display text-foreground text-xl md:text-2xl leading-snug tracking-[-0.01em]">
          {item.quote}
        </blockquote>
        <figcaption className="flex items-center gap-3 mt-auto pt-5 border-white/[0.07] border-t">
          <span aria-hidden="true" className="w-10! h-10! text-sm! quote-avatar shrink-0">
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
              className="z-10 relative ml-auto text-sm pill-ghost shrink-0"
            >
              <span className="pill-ghost-label">Voir le projet</span>
            </Link>
          )}
        </figcaption>
      </div>
    </figure>
  );
}
