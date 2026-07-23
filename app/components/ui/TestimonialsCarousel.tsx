"use client";

import { useState, useEffect, useCallback } from "react";
import { m, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Quote } from "@/lib/icons";
import type { Testimonial } from "@/data";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const len = testimonials.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + len) % len),
    [len],
  );

  // Drag / swipe to navigate (snap on release by distance or velocity)
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = info.offset.x;
    const velocity = info.velocity.x;
    if (swipe < -60 || velocity < -450) go(1);
    else if (swipe > 60 || velocity > 450) go(-1);
  };

  // Autoplay (paused on hover / focus within)
  useEffect(() => {
    if (paused || len <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % len), 6000);
    return () => clearInterval(id);
  }, [paused, len]);

  // Signed distance from the active slide, wrapped to [-len/2, len/2]
  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    return d;
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <m.div
        className="relative mx-auto h-[340px] max-w-3xl cursor-grab overflow-hidden active:cursor-grabbing sm:h-[300px]"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ touchAction: "pan-y" }}
      >
        {testimonials.map((t, i) => {
          const off = offsetOf(i);
          const isActive = off === 0;
          const visible = Math.abs(off) <= 1;
          return (
            <m.div
              key={t.name}
              className="absolute inset-0 flex justify-center px-4"
              initial={false}
              animate={{
                x: `${off * 52}%`,
                scale: isActive ? 1 : 0.8,
                opacity: isActive ? 1 : 0.4,
                filter: isActive ? "blur(0px)" : "blur(2px)",
                zIndex: isActive ? 30 : 10,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              style={{
                visibility: visible ? "visible" : "hidden",
                pointerEvents: isActive ? "auto" : "none",
              }}
              aria-hidden={!isActive}
            >
              <div className="glass flex h-full w-full max-w-xl flex-col justify-center rounded-3xl border border-stroke p-8 md:p-10">
                <Quote className="mb-4 h-7 w-7 text-primary/60" />
                <p className="font-body text-base leading-relaxed text-foreground md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-foreground-subtle">
                    {t.role}
                  </p>
                </div>
              </div>
            </m.div>
          );
        })}

        {/* edge overlays fading the side slides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-28 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-28 bg-gradient-to-l from-background to-transparent" />

        {/* prev / next buttons */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Témoignage précédent"
          className="absolute left-2 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stroke bg-background-soft/80 text-foreground-muted backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Témoignage suivant"
          className="absolute right-2 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stroke bg-background-soft/80 text-foreground-muted backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </m.div>

      {/* dots, the button is a ≥24×24px tap target; the visible pill stays small */}
      <div className="mt-6 flex justify-center gap-1">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Aller au témoignage ${i + 1}`}
            aria-current={i === active}
            className="group flex h-6 min-w-6 items-center justify-center"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-primary"
                  : "w-2 bg-foreground-subtle/40 group-hover:bg-foreground-subtle"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
