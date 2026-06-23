"use client";

import { motion, useAnimationControls } from "framer-motion";

interface HoverWordProps {
  text: string;
  className?: string;
}

/**
 * An accent word rendered in the primary color. On hover each letter rides a
 * staggered wave — lift + scale + a coral glow flash — then settles. More than
 * a flat scale/translate: the characters ripple from left to right.
 */
export default function HoverWord({ text, className = "" }: HoverWordProps) {
  const controls = useAnimationControls();
  const chars = Array.from(text);

  const trigger = () =>
    controls.start((i: number) => ({
      y: [0, -14, 0],
      scale: [1, 1.18, 1],
      color: ["var(--primary)", "#ffffff", "var(--primary)"],
      textShadow: [
        "0 0 0px rgba(255,77,61,0)",
        "0 0 22px rgba(255,77,61,0.75)",
        "0 0 0px rgba(255,77,61,0)",
      ],
      transition: { duration: 0.5, delay: i * 0.045, ease: [0.16, 1, 0.3, 1] },
    }));

  return (
    <span
      className={`inline-flex text-primary ${className}`}
      onMouseEnter={trigger}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          animate={controls}
          className="inline-block"
          style={{ whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
