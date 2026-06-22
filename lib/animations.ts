// Shared Framer Motion variants & easings
import type { Variants, Transition } from "framer-motion";

// Custom easing curves
export const easeOutExpo: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];
export const easeSmooth: [number, number, number, number] = [
  0.25, 0.46, 0.45, 0.94,
];

export const springSoft: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

// Fade + slide up (single element)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Stagger child item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSmooth },
  },
};

// Word-by-word reveal (hero title)
export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

export const wordItem: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

// Shared viewport config for whileInView
export const viewportOnce = { once: true, margin: "-100px" } as const;
