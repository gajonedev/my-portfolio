"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeSmooth, viewportOnce } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directionMap = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, delay, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  );
}
