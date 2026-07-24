"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "@/lib/icons";

interface SectionCtaProps {
  children: ReactNode;
  /** Id de la section cible (sans le #). Défaut : la section Contact. */
  targetId?: string;
  /** Affiche la flèche. À désactiver pour les CTA inline en milieu de phrase. */
  arrow?: boolean;
  className?: string;
}

/**
 * Lien d'appel à l'action léger, posé au fil des sections de la home.
 * Reste secondaire face au Hero et au bloc Contact : simple lien coloré
 * avec flèche. Scroll doux vers la section cible, sans dépendance globale.
 */
export default function SectionCta({
  children,
  targetId = "contact",
  arrow = true,
  className = "",
}: SectionCtaProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`group inline-flex items-center gap-1 font-body font-medium text-primary text-sm underline-offset-4 hover:underline ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
