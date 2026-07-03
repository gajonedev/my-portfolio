"use client";

import { m, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Transition d'entrée des pages (hors accueil) : fade-in depuis flou + opacité 0.
// Le template racine n'est remonté par Next que lorsque le segment de premier
// niveau change — pas entre /services et /services/[slug]. La `key={pathname}`
// force le remontage du wrapper à chaque navigation pour rejouer l'animation.
export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (pathname === "/" || reduceMotion) return <>{children}</>;

  return (
    <m.div
      key={pathname}
      initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
