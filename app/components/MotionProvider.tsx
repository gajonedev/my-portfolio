"use client";

import { LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

// Load the animation feature bundle (domMax — includes drag + layout animations)
// lazily, in its own chunk, AFTER the initial render. Combined with the `m`
// components (which are near-empty on their own), this keeps framer-motion out
// of the critical JS path. `strict` forbids `motion.*` so nothing accidentally
// re-bundles the full feature set.
const loadFeatures = () =>
  import("framer-motion").then((mod) => mod.domMax);

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
