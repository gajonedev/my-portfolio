import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  variant?: "dark" | "light";
  id?: string;
  className?: string;
  /** Render a luminous beam at the top edge (huly.io style transition) */
  beam?: boolean;
}

/**
 * Applies the dark/light contextual tokens (see globals.css) to a full-bleed
 * section. Children using semantic tokens (bg-background, text-foreground,
 * border-stroke, text-primary…) adapt automatically.
 */
export default function SectionWrapper({
  children,
  variant = "dark",
  id,
  className = "",
  beam = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-${variant} relative bg-background text-foreground ${className}`}
    >
      {/* Smooth transition line between sections */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stroke to-transparent"
      />
      {beam ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 blur-[1px]"
        />
      ) : null}
      {children}
    </section>
  );
}
