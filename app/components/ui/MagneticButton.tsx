"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

const MotionLink = m.create(Link);

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  strength?: number;
  ariaLabel?: string;
}

/**
 * A button/link that subtly follows the cursor while hovered.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  external = false,
  strength = 0.35,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: springX, y: springY },
    className,
    "aria-label": ariaLabel,
  };

  if (href) {
    const linkProps = external
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { href };
    return (
      <MotionLink {...sharedProps} {...linkProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <m.button type="button" onClick={onClick} {...sharedProps}>
      {children}
    </m.button>
  );
}
