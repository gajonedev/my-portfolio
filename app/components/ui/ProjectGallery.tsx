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
      className="bg-background-soft border border-stroke rounded-2xl overflow-hidden"
    >
      <div
        id={id}
        ref={slides}
        className="flex overflow-x-auto snap-mandatory snap-x"
        onScroll={(event) => {
          const el = event.currentTarget;
          setActive(Math.round(el.scrollLeft / el.clientWidth));
        }}
      >
        {images.map((item, index) => (
          <figure
            key={`${item.alt}-${index}`}
            className="w-full min-w-0 snap-center shrink-0"
            role="group"
            aria-label={`${index + 1} sur ${images.length}`}
          >
            <div className="relative bg-background-muted aspect-[16/10]">
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-bottom object-cover"
                />
              ) : (
                <div className="flex flex-col justify-center items-center gap-3 p-6 h-full text-foreground-muted text-center">
                  <ImageIcon
                    className="w-9 h-9 text-primary"
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
            {/* <figcaption className="px-4 py-3 border-stroke border-t text-foreground-muted text-sm">
              {item.caption || item.alt}
            </figcaption> */}
          </figure>
        ))}
      </div>
      {images.length > 1 && (
        <div className="flex justify-between items-center gap-3 p-3 border-stroke border-t">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Capture précédente"
            aria-controls={id}
            className="p-3 border border-stroke rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <p
            aria-live="polite"
            aria-atomic="true"
            className="text-foreground-muted text-sm"
          >
            {active + 1} / {images.length}
          </p>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Capture suivante"
            aria-controls={id}
            className="p-3 border border-stroke rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
}
