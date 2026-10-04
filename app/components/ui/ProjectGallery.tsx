"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

export default function ProjectGallery({
  images,
  name,
}: {
  images: ProjectImage[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const slides = useRef<HTMLDivElement>(null);
  if (!images.length) return null;
  const go = (index: number) => {
    const next = (index + images.length) % images.length;
    const container = slides.current;
    if (container)
      container.scrollTo({
        left: next * container.clientWidth,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  };
  return (
    <section
      aria-label={`Captures de ${name}`}
      aria-roledescription={images.length > 1 ? "carrousel" : undefined}
      className="overflow-hidden rounded-2xl border border-stroke bg-background-soft"
    >
      <div
        id={id}
        ref={slides}
        className="flex snap-x snap-mandatory overflow-x-auto"
        onScroll={(event) => {
          const el = event.currentTarget;
          setActive(Math.round(el.scrollLeft / el.clientWidth));
        }}
      >
        {images.map((item, index) => (
          <figure
            key={`${item.alt}-${index}`}
            className="min-w-0 w-full shrink-0 snap-center"
            role="group"
            aria-label={`${index + 1} sur ${images.length}`}
          >
            <div className="relative aspect-[16/10] bg-background-muted">
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain p-3"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-foreground-muted">
                  <ImageIcon
                    className="h-9 w-9 text-primary"
                    aria-hidden="true"
                  />
                  <p className="font-display font-medium text-foreground">
                    {name}
                  </p>
                  <p className="text-sm">{item.alt}</p>
                  <span className="text-xs">Capture à venir</span>
                </div>
              )}
            </div>
            <figcaption className="border-t border-stroke px-4 py-3 text-sm text-foreground-muted">
              {item.caption || item.alt}
            </figcaption>
          </figure>
        ))}
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-between gap-3 border-t border-stroke p-3">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Capture précédente"
            aria-controls={id}
            className="rounded-full border border-stroke p-3"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <p
            aria-live="polite"
            aria-atomic="true"
            className="text-sm text-foreground-muted"
          >
            {active + 1} / {images.length}
          </p>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Capture suivante"
            aria-controls={id}
            className="rounded-full border border-stroke p-3"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}
