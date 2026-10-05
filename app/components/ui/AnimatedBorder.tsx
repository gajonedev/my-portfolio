import type { ReactNode } from "react";

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps content with an animated conic-gradient border (see .animated-border
 * in globals.css). The inner padding controls the border thickness.
 */
export default function AnimatedBorder({
  children,
  className = "",
}: AnimatedBorderProps) {
  return (
    <div className={`animated-border rounded-3xl p-[1px] ${className}`}>
      <div className="rounded-[calc(1.5rem-1px)] bg-card h-full">{children}</div>
    </div>
  );
}
