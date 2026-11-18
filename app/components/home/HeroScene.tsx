"use client";

import { useEffect, useRef } from "react";
import type { HeroRenderer } from "./heroRenderer";

// Probe the GPU on a throwaway context before downloading Three.js: with a
// software rasterizer every frame would run on the CPU.
function hasHardwareWebGL() {
  try {
    const gl = document.createElement("canvas").getContext("webgl2");
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const name = String(
      gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER),
    );
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|softpipe|software|basic render/i.test(name);
  } catch {
    return false;
  }
}

// Decorative WebGL layer of the hero. Three.js is fetched once the browser is
// idle, so it never competes with the text (LCP) or the intro. Without a GPU,
// with Save-Data or before it loads, the CSS horizon underneath stays visible.
export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.closest<HTMLElement>("[data-hero]");
    if (!canvas || !host) return;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection;
    if (connection?.saveData) return;

    let renderer: HeroRenderer | undefined;
    let cancelled = false;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const start = async () => {
      if (!hasHardwareWebGL()) return; // keep the CSS horizon, skip 500 KB
      const { createHeroRenderer } = await import("./heroRenderer");
      if (cancelled) return;
      try {
        renderer = createHeroRenderer(canvas, host, { reduced });
      } catch {
        return; // no WebGL: the CSS horizon stays
      }
      renderer.setPaused(host.dataset.paused === "true");
      requestAnimationFrame(() => {
        host.dataset.webgl = "ready";
      });
    };

    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => void start(), { timeout: 1500 })
      : window.setTimeout(() => void start(), 700);

    const onPause = (event: Event) =>
      renderer?.setPaused((event as CustomEvent<boolean>).detail);
    host.addEventListener("hero:pause", onPause);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      host.removeEventListener("hero:pause", onPause);
      delete host.dataset.webgl;
      renderer?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="hero-canvas" />;
}
