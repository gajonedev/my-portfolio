"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];

// Clients first, then collaborators.
const ordered = [
  ...testimonials.filter((item) => item.kind === "client"),
  ...testimonials.filter((item) => item.kind === "collaborator"),
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

function TestimonialCard({
  item,
  accent,
}: {
  item: Testimonial;
  accent: string;
}) {
  return (
    <figure
      className="h-full spotlight-card corner-tr"
      style={{ "--corner": accent } as React.CSSProperties}
    >
      <div className="flex flex-col gap-6 p-7 h-full spotlight-content">
        <div className="flex justify-between items-start gap-4">
          <Quote className="w-7 h-7 text-primary" aria-hidden="true" />
          <span className="bg-background-muted px-2.5 py-1 border border-stroke rounded-full text-foreground-muted text-xs">
            {item.kind === "client" ? "Client" : "Collaborateur"}
          </span>
        </div>
        <blockquote className="text-foreground leading-relaxed">
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

const ARROW =
  "flex justify-center items-center border border-stroke enabled:hover:border-primary rounded-full w-11 h-11 text-foreground enabled:hover:text-primary transition-colors disabled:opacity-35 disabled:cursor-not-allowed";

/**
 * Horizontal swipe carousel: native scroll-snap does the touch work, arrows
 * and dots drive it with the mouse. Controls hide when every card fits.
 */
export default function Testimonials() {
  const track = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({
    active: 0,
    pages: 1,
    start: true,
    end: false,
  });

  // Distance between two snap points: card width + gap.
  const step = useCallback(() => {
    const el = track.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return 0;
    return first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
  }, []);

  const sync = useCallback(() => {
    const el = track.current;
    const s = step();
    if (!el || !s) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      active: Math.round(el.scrollLeft / s),
      // Snap positions reachable (the last page may show several cards).
      pages: max > 4 ? Math.round(max / s) + 1 : 1,
      start: el.scrollLeft < 4,
      end: el.scrollLeft > max - 4,
    });
  }, [step]);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollTo = (index: number) => {
    track.current?.scrollTo({
      left: index * step(),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  const { active, pages, start, end } = state;

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Témoignages"
      className="flex flex-col gap-6 min-w-0"
    >
      <ul
        ref={track}
        onScroll={sync}
        tabIndex={0}
        aria-label="Faites défiler les témoignages"
        className="flex gap-6 -mx-1 px-1 pb-2 overflow-x-auto snap-mandatory snap-x [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        {ordered.map((item, index) => (
          <li
            key={item.name}
            aria-roledescription="témoignage"
            aria-label={`${index + 1} sur ${ordered.length}`}
            className="basis-[85%] md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] snap-start shrink-0"
          >
            <TestimonialCard item={item} accent={ACCENTS[index % ACCENTS.length]} />
          </li>
        ))}
      </ul>

      {pages > 1 && (
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-primary"
                    : "w-2 bg-stroke-hover hover:bg-foreground-muted"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollTo(active - 1)}
              disabled={start}
              aria-label="Témoignage précédent"
              className={ARROW}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo(active + 1)}
              disabled={end}
              aria-label="Témoignage suivant"
              className={ARROW}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
