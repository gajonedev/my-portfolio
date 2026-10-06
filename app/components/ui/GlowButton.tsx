"use client";

import Link from "next/link";
import {
  Children,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
}

// Each letter rolls up on hover, a copy rising from below (text-shadow trick,
// see .btn-roll). Screen readers get the plain label.
function RollText({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="btn-roll">
        {Array.from(text).map((char, index) => (
          <span
            key={index}
            className="btn-roll-char"
            style={{ "--i": index } as React.CSSProperties}
          >
            <span>{char}</span>
          </span>
        ))}
      </span>
    </>
  );
}

/**
 * Signature primary action:
 * - a light trace orbits the border (.btn-primary, pure CSS)
 * - magnetic pull + inner spotlight following the cursor
 * - letter roll on hover, ripple burst on press
 */
export default function GlowButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  external = false,
  ariaLabel,
  disabled = false,
}: GlowButtonProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );
  const nextRipple = useRef(0);

  const move = (event: MouseEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.setProperty("--tx", `${(x - rect.width / 2) * 0.18}px`);
    el.style.setProperty("--ty", `${(y - rect.height / 2) * 0.3}px`);
  };
  const leave = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tx", "0px");
    event.currentTarget.style.setProperty("--ty", "0px");
  };
  const press = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const id = nextRipple.current++;
    setRipples((list) => [
      ...list,
      { id, x: event.clientX - rect.left, y: event.clientY - rect.top },
    ]);
  };

  const content = (
    <>
      <span className="btn-spot" aria-hidden="true" />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="btn-ripple"
          aria-hidden="true"
          style={{ left: ripple.x, top: ripple.y }}
          onAnimationEnd={() =>
            setRipples((list) => list.filter((item) => item.id !== ripple.id))
          }
        />
      ))}
      <span className="btn-label">
        {Children.map(children, (child) =>
          typeof child === "string" ? <RollText text={child} /> : child,
        )}
      </span>
    </>
  );

  const fx = {
    onMouseMove: move,
    onMouseLeave: leave,
    onPointerDown: press,
    "aria-label": ariaLabel,
    className: `btn-primary btn-signature ${className}`,
  };

  if (href) {
    const linkProps = external
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { href };
    return (
      <Link {...linkProps} {...fx} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} {...fx}>
      {content}
    </button>
  );
}
