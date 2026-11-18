import { siteConfig } from "@/data";

// Monogram: initials in NeverMind Bold on a dark tile, underlined by a small
// lit horizon (the motif of the home page). Decorative: the link around it
// carries the accessible name.
export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`logo-mark ${className}`}>
      {siteConfig.shortName}
    </span>
  );
}
