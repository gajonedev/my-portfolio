"use client";

import { motion } from "framer-motion";
import { useRef, type ReactNode } from "react";
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

  // Update the spotlight position via CSS vars (no re-render)
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

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
