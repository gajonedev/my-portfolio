"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * Wraps a list whose items carry data-preview="<index>": while the mouse is
 * over an item, its visual floats next to the pointer. The previews are
 * rendered on the server (decorative, aria-hidden). Mouse only and without
 * reduced motion; elsewhere the list shows its own inline visuals.
 */
export default function CursorPreview({
  previews,
  children,
}: {
  previews: ReactNode[];
  children: ReactNode;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const list = listRef.current;
    const float = floatRef.current;
    if (!list || !float) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let frame = 0;
    let placed = false;

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.14;
      pos.y += (target.y - pos.y) * 0.14;
      // slight tilt in the direction of the movement
      const tilt = Math.max(-8, Math.min(8, (target.x - pos.x) * 0.04));
      float.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${tilt}deg)`;
      const moving =
        Math.abs(target.x - pos.x) > 0.3 || Math.abs(target.y - pos.y) > 0.3;
      frame = moving ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX + 28;
      target.y = event.clientY - float.offsetHeight / 2;
      if (!placed) {
        pos.x = target.x;
        pos.y = target.y;
        placed = true;
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onOver = (event: PointerEvent) => {
      const item = (event.target as Element).closest<HTMLElement>(
        "[data-preview]",
      );
      setActive(item ? Number(item.dataset.preview) : null);
    };
    const onLeave = () => {
      setActive(null);
      placed = false;
    };

    list.addEventListener("pointermove", onMove);
    list.addEventListener("pointerover", onOver);
    list.addEventListener("pointerleave", onLeave);
    return () => {
      list.removeEventListener("pointermove", onMove);
      list.removeEventListener("pointerover", onOver);
      list.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={listRef} data-previewing={active !== null || undefined}>
        {children}
      </div>
      <div
        ref={floatRef}
        aria-hidden="true"
        className="cursor-preview"
        data-on={active !== null || undefined}
      >
        {previews.map((preview, index) => (
          <div
            key={index}
            className="cursor-preview-item"
            data-active={index === active || undefined}
          >
            {preview}
          </div>
        ))}
      </div>
    </>
  );
}
