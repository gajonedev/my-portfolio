"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { hasHardwareWebGL, webglForced } from "../gpu";
import type { ParticlesRenderer, ShapeIndex } from "./particlesRenderer";

const LABELS = ["Votre idée", "Plateforme web", "Application mobile"] as const;

/*
 * Particles of the hero v2 plus their small control bar. Three.js loads when
 * the browser is idle; until then (or without a GPU) the dotted drawing of
 * the CSS fallback stays in place. Hovering "web" or "mobile" in the title,
 * or pressing a button, shows that shape.
 */
export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<ParticlesRenderer | null>(null);
  const [shape, setShape] = useState<ShapeIndex>(0);
  const [ready, setReady] = useState(false);
  // The canvas covers the whole section; the buttons sit in the stage column.
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.closest<HTMLElement>("[data-hero]");
    if (!canvas || !host) return;
    setSlot(host.querySelector<HTMLElement>("[data-hud-slot]"));
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean };
      }
    ).connection;
    if (connection?.saveData) return;

    let cancelled = false;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const quick = document.documentElement.classList.contains("intro-skip");

    const start = async () => {
      if (!hasHardwareWebGL() && !webglForced()) return;
      const { createParticlesRenderer } = await import("./particlesRenderer");
      if (cancelled) return;
      try {
        rendererRef.current = createParticlesRenderer(canvas, host, {
          reduced,
          quick,
          onShape: setShape,
        });
      } catch {
        return;
      }
      rendererRef.current.setPaused(host.dataset.paused === "true");
      setReady(true);
      requestAnimationFrame(() => {
        host.dataset.webgl = "ready";
      });
    };
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => void start(), { timeout: 1200 })
      : window.setTimeout(() => void start(), 600);

    // "web" and "mobile" in the title drive the object
    const onOver = (event: PointerEvent) => {
      const word = (event.target as Element).closest<HTMLElement>(
        "[data-shape]",
      );
      if (word)
        rendererRef.current?.show(Number(word.dataset.shape) as ShapeIndex);
    };
    const onPause = (event: Event) =>
      rendererRef.current?.setPaused((event as CustomEvent<boolean>).detail);
    host.addEventListener("pointerover", onOver);
    host.addEventListener("hero:pause", onPause);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      host.removeEventListener("pointerover", onOver);
      host.removeEventListener("hero:pause", onPause);
      delete host.dataset.webgl;
      rendererRef.current?.dispose();
      rendererRef.current = null;
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="v2-canvas" />
      {ready && slot
        ? createPortal(
            <div
              className="v2-hud"
              role="group"
              aria-label="Forme de l’animation"
            >
              {LABELS.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={shape === index}
                  onClick={() => rendererRef.current?.show(index as ShapeIndex)}
                  className="v2-hud-btn"
                >
                  <span className="font-mono">0{index}</span>
                  <span className="v2-hud-label">{label}</span>
                </button>
              ))}
            </div>,
            slot,
          )
        : null}
    </>
  );
}
