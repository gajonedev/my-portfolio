import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  /**
   * Kept for compatibility: every section is now dark, like the home page.
   * The sections are told apart by the lit divider at their top edge.
   */
  variant?: "dark" | "light";
  id?: string;
  className?: string;
  /** Older option, the divider now always has its lit center. */
  beam?: boolean;
}

/**
 * Full-bleed section of the "horizon" design: dark tokens (see globals.css)
 * and the thin lit divider of the home page (.home-divider).
 */
export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-dark home-divider relative bg-background text-foreground ${className}`}
    >
      {children}
    </section>
  );
}
