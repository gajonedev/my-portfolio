"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { springSoft } from "@/lib/animations";

type Corner = "tl" | "tr" | "bl" | "br" | "none";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Position of the static corner light bleed */
  corner?: Corner;
  /** CSS color for the corner bleed (defaults to primary) */
  cornerColor?: string;
  /** Lift on hover */
  hover?: boolean;
}

export default function SpotlightCard({
  children,
  className = "",
  corner = "br",
  cornerColor,
  hover = true,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Cursor target + two eased layers tracked at different speeds.
  // The gap between them creates the parallax: the small core (fast) stays
  // near the cursor while the big halo (slow) drifts behind with latency.
  const target = useRef({ x: 0, y: 0 });
  const core = useRef({ x: 0, y: 0 }); // fast layer  → --mx / --my
  const halo = useRef({ x: 0, y: 0 }); // slow layer  → --mx2 / --my2
  const raf = useRef<number | null>(null);

  // Ease the painted positions toward the cursor with a rAF lerp.
  // Doing the easing in JS (instead of transitioning a registered @property)
  // avoids a Firefox repaint bug where the gradient blanks once the CSS
  // custom-property transition settles.
  const tick = () => {
    const el = ref.current;
    if (!el) {
      raf.current = null;
      return;
    }
    const t = target.current;
    const c = core.current;
    const h = halo.current;

    c.x += (t.x - c.x) * 0.22; // core: snappier
    c.y += (t.y - c.y) * 0.22;
    h.x += (t.x - h.x) * 0.07; // halo: heavy latency (parallax)
    h.y += (t.y - h.y) * 0.07;

    el.style.setProperty("--mx", `${c.x}px`);
    el.style.setProperty("--my", `${c.y}px`);
    el.style.setProperty("--mx2", `${h.x}px`);
    el.style.setProperty("--my2", `${h.y}px`);

    const settled =
      Math.abs(t.x - c.x) < 0.5 &&
      Math.abs(t.y - c.y) < 0.5 &&
      Math.abs(t.x - h.x) < 0.5 &&
      Math.abs(t.y - h.y) < 0.5;

    if (settled) {
      // Snap both layers to final and stop the loop (no idle spinning).
      c.x = h.x = t.x;
      c.y = h.y = t.y;
      el.style.setProperty("--mx", `${t.x}px`);
      el.style.setProperty("--my", `${t.y}px`);
      el.style.setProperty("--mx2", `${t.x}px`);
      el.style.setProperty("--my2", `${t.y}px`);
      raf.current = null;
    } else {
      raf.current = requestAnimationFrame(tick);
    }
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    target.current.x = e.clientX - rect.left;
    target.current.y = e.clientY - rect.top;
    if (raf.current == null) raf.current = requestAnimationFrame(tick);
  };

  useEffect(
    () => () => {
      if (raf.current != null) cancelAnimationFrame(raf.current);
    },
    [],
  );

  const cornerClass = corner === "none" ? "" : `corner-${corner}`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={hover ? { y: -6 } : undefined}
      transition={springSoft}
      className={`spotlight-card ${cornerClass} ${className}`}
      style={
        cornerColor
          ? ({ "--corner": cornerColor } as React.CSSProperties)
          : undefined
      }
    >
      <span className="spotlight-glow" aria-hidden="true" />
      <div className="spotlight-content">{children}</div>
    </motion.div>
  );
}
