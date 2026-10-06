"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

const NAV_BUTTON =
  "flex justify-center items-center bg-black/60 hover:bg-primary-fill backdrop-blur border border-white/15 rounded-full w-10 h-10 text-white transition-colors";

// Case-study gallery: a browser-framed stage, a thumbnail strip and a
// full-screen viewer built on the native <dialog> (focus trap + Esc for free).
export default function ProjectGallery({
  images,
  name,
}: {
  images: ProjectImage[];
  name: string;
}) {
  const shots = images.filter(
    (image): image is ProjectImage & { src: string } => Boolean(image.src),
  );
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const thumbs = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const count = shots.length;

  // Keep the active thumbnail visible without scrolling the page itself.
  useEffect(() => {
    const strip = thumbs.current;
    const thumb = strip?.children[active] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  if (!count) return null;

  const go = (index: number) => setActive((index + count) % count);
  const current = shots[active];
  const label = current.caption || current.alt;

  const onKey = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") go(active - 1);
    if (event.key === "ArrowRight") go(active + 1);
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 40) go(active + (delta < 0 ? 1 : -1));
    touchX.current = null;
  };
  const open = () => {
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  return (
    <section
      aria-label={`Captures de ${name}`}
      aria-roledescription="galerie"
      onKeyDown={onKey}
      className="gap-4 grid grid-cols-1 w-full min-w-0"
    >
      {/* Stage */}
      <div className="group bg-background-soft shadow-[0_24px_60px_rgba(0,0,0,0.25)] border border-stroke rounded-2xl overflow-hidden">
        <div className="flex items-center gap-3 bg-background-muted px-4 py-2.5 border-stroke border-b">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="bg-[#ff5f57] rounded-full w-2.5 h-2.5" />
            <span className="bg-[#febc2e] rounded-full w-2.5 h-2.5" />
            <span className="bg-[#28c840] rounded-full w-2.5 h-2.5" />
          </span>
          <span className="flex-1 bg-background-soft px-3 py-1 border border-stroke rounded-md text-foreground-muted text-xs text-center truncate">
            {name}
          </span>
          <span className="text-foreground-muted text-xs tabular-nums">
            {active + 1} / {count}
          </span>
        </div>

        <div
          className="relative bg-background-muted aspect-video"
          onTouchStart={(event) => {
            touchX.current = event.touches[0].clientX;
          }}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={open}
            aria-label={`Agrandir : ${label}`}
            className="absolute inset-0 cursor-zoom-in"
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              priority={active === 0}
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover object-top gallery-fade"
            />
          </button>

          <span className="top-3 right-3 absolute flex justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur border border-white/15 rounded-full w-9 h-9 text-white transition-opacity pointer-events-none">
            <Maximize2 className="w-4 h-4" aria-hidden="true" />
          </span>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Capture précédente"
                className={`top-1/2 left-3 absolute -translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100 ${NAV_BUTTON}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Capture suivante"
                className={`top-1/2 right-3 absolute -translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100 ${NAV_BUTTON}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>

      <p aria-live="polite" className="text-foreground-muted text-sm">
        {label}
      </p>

      {/* Thumbnails */}
      {count > 1 && (
        <div
          ref={thumbs}
          className="flex gap-3 pb-2 min-w-0 overflow-x-auto snap-x"
          role="group"
          aria-label="Choisir une capture"
        >
          {shots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => go(index)}
              aria-label={`Capture ${index + 1} : ${shot.alt}`}
              aria-current={index === active ? "true" : undefined}
              className={`relative shrink-0 w-32 sm:w-40 aspect-video rounded-lg overflow-hidden border-2 snap-start transition ${
                index === active
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-55 hover:opacity-100"
              }`}
            >
              <Image
                src={shot.src}
                alt=""
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}

      {/* Full-screen viewer */}
      <dialog
        ref={dialog}
        aria-label={`Captures de ${name}, plein écran`}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        className="bg-transparent m-0 p-4 sm:p-8 w-screen max-w-none h-dvh max-h-none text-white gallery-lightbox"
      >
        <div className="flex flex-col gap-4 mx-auto max-w-7xl h-full">
          <div className="flex justify-between items-center gap-4">
            <p className="text-sm truncate">
              <span className="font-semibold">{name}</span>
              <span className="text-white/60"> · {label}</span>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-white/60 text-sm tabular-nums">
                {active + 1} / {count}
              </span>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                aria-label="Fermer"
                className={NAV_BUTTON}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative flex-1 min-h-0">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain gallery-fade"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  aria-label="Capture précédente"
                  className={`top-1/2 left-0 absolute -translate-y-1/2 ${NAV_BUTTON}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  aria-label="Capture suivante"
                  className={`top-1/2 right-0 absolute -translate-y-1/2 ${NAV_BUTTON}`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
          {count > 1 && (
            <div className="flex justify-center gap-2 overflow-x-auto shrink-0">
              {shots.map((shot, index) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => go(index)}
                  aria-label={`Capture ${index + 1} : ${shot.alt}`}
                  aria-current={index === active ? "true" : undefined}
                  className={`relative shrink-0 w-20 sm:w-24 aspect-video rounded-md overflow-hidden border-2 transition ${
                    index === active
                      ? "border-primary opacity-100"
                      : "border-transparent opacity-45 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
}
