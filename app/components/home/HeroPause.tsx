"use client";

import { useState } from "react";

// Lets visitors stop every looping animation of the hero (WCAG 2.2.2).
export default function HeroPause() {
  const [paused, setPaused] = useState(false);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = !paused;
    setPaused(next);
    const host = event.currentTarget.closest<HTMLElement>("[data-hero]");
    if (!host) return;
    host.dataset.paused = String(next);
    host.dispatchEvent(new CustomEvent("hero:pause", { detail: next }));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={paused}
      aria-label={paused ? "Reprendre l’animation" : "Mettre l’animation en pause"}
      className="hero-pause"
    >
      <span aria-hidden="true" className="hero-pause-icon" data-paused={paused} />
      {paused ? "Lecture" : "Pause"}
    </button>
  );
}
