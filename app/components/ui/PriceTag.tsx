import type { ReactNode } from "react";

// Bords irréguliers façon sticker / papier déchiré
const CLIP_PATH =
  "polygon(0% 12%, 3% 2%, 12% 6%, 30% 0%, 55% 4%, 78% 1%, 96% 5%, 100% 18%, 98% 45%, 100% 78%, 97% 95%, 80% 100%, 55% 96%, 30% 100%, 8% 97%, 0% 88%)";

interface PriceTagProps {
  children: ReactNode;
  className?: string;
  /** Légère rotation alternée pour un rendu plus organique */
  tilt?: "left" | "right" | "none";
}

export default function PriceTag({
  children,
  className,
  tilt = "left",
}: PriceTagProps) {
  const rotation =
    tilt === "left" ? "-rotate-1" : tilt === "right" ? "rotate-1" : "";

  return (
    <span
      className={`inline-block bg-primary px-4 py-2 font-display font-bold text-primary-foreground ${rotation} ${className ?? ""}`}
      style={{ clipPath: CLIP_PATH }}
    >
      {children}
    </span>
  );
}
