"use client";

import { useEffect, useRef } from "react";

/*
 * Moves the light of the closest horizon (--hx on the parent) toward the
 * pointer, with a little latency. Mouse only, and nothing with reduced
 * motion: the light then simply stays in the middle.
 */
export default function HorizonPointer() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let target = 50;
    let current = 50;
    let frame = 0;
    const tick = () => {
      current += (target - current) * 0.08;
      host.style.setProperty("--hx", `${current.toFixed(2)}%`);
      frame = Math.abs(target - current) > 0.05 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      // stay away from the edges, where the line fades out
      target = Math.min(85, Math.max(15, ((event.clientX - rect.left) / rect.width) * 100));
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      target = 50;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={ref} hidden />;
}
