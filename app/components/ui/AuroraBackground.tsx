"use client";

import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  className?: string;
}

/**
 * Animated gradient-mesh aurora for hero sections.
 * Pure CSS radial gradients + slow Framer Motion drift. Respects
 * reduced-motion through the global CSS override.
 */
export default function AuroraBackground({
  className = "",
}: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute -top-1/3 left-1/4 h-[40rem] w-[40rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.20), transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.18), transparent 60%)" }}
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 left-1/3 h-[30rem] w-[30rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.16), transparent 60%)" }}
        animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
