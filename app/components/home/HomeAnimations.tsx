"use client";

import { useEffect } from "react";

/*
 * Every scroll animation of the home page, driven by data attributes on
 * server-rendered markup. GSAP is imported after hydration so it stays out of
 * the critical path; states are only applied from JS, so without JS (or with
 * reduced motion) the content is simply visible and static.
 */
export default function HomeAnimations() {
  useEffect(() => {
    let cancelled = false;
    let revert: (() => void) | undefined;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const root = document.querySelector<HTMLElement>("[data-home]");
      if (!root) return;
      const q = <T extends Element = HTMLElement>(selector: string) =>
        Array.from(root.querySelectorAll<T & Element>(selector)) as T[];

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 1024px)",
        },
        (context) => {
          const { motion, desktop } = context.conditions as {
            motion: boolean;
            desktop: boolean;
          };
          if (!motion) return;

          // ---- headings: words rise out of their mask
          q('[data-anim="words"]').forEach((el) => {
            gsap.from(el.querySelectorAll(".sw-i"), {
              yPercent: 115,
              rotate: 5,
              duration: 1.15,
              ease: "expo.out",
              stagger: 0.05,
              scrollTrigger: { trigger: el, start: "top 86%" },
            });
          });

          q('[data-anim="fade"]').forEach((el) => {
            gsap.from(el, {
              y: 26,
              opacity: 0,
              duration: 1,
              ease: "expo.out",
              delay: 0.15,
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: el, start: "top 90%" },
            });
          });

          q('[data-anim="card"]').forEach((el) => {
            gsap.from(el, {
              y: 70,
              opacity: 0,
              duration: 1.3,
              ease: "expo.out",
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: el, start: "top 88%" },
            });
          });

          // ---- service drawings trace themselves
          q("[data-draw-group]").forEach((group) => {
            gsap.from(group.querySelectorAll("[data-draw]"), {
              strokeDashoffset: 1,
              duration: 1.8,
              ease: "power2.inOut",
              stagger: 0.07,
              scrollTrigger: { trigger: group, start: "top 80%" },
            });
          });

          // ---- hero: content drifts up slightly as the page scrolls (no
          // fade: the call to action must keep its full contrast)
          const hero = root.querySelector("[data-hero]");
          if (hero) {
            gsap.to(q("[data-hero-parallax]"), {
              yPercent: -10,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          // ---- process: the line fills, each step lights up when reached
          const process = root.querySelector<HTMLElement>("[data-process]");
          if (process) {
            const steps = q("[data-step]");
            gsap.fromTo(
              process,
              { "--p": 0 },
              {
                "--p": 1,
                ease: "none",
                scrollTrigger: {
                  trigger: process,
                  start: "top 72%",
                  end: "bottom 55%",
                  scrub: 0.6,
                  onUpdate: (self) =>
                    steps.forEach((step, index) =>
                      step.classList.toggle(
                        "is-on",
                        self.progress >= index / steps.length + 0.02,
                      ),
                    ),
                },
              },
            );
          }

          // ---- finale: the horizon opens from the center
          const beam = root.querySelector("[data-finale-beam]");
          if (beam) {
            gsap.from(beam, {
              scaleX: 0,
              opacity: 0,
              duration: 2,
              ease: "expo.inOut",
              scrollTrigger: { trigger: beam, start: "top 85%" },
            });
          }

          // ---- projects
          const pin = root.querySelector<HTMLElement>("[data-pin]");
          const track = root.querySelector<HTMLElement>("[data-track]");
          if (!pin || !track) return;

          if (!desktop) {
            q("[data-panel]").forEach((panel) => {
              gsap.from(panel, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "expo.out",
                clearProps: "transform,opacity",
                scrollTrigger: { trigger: panel, start: "top 88%" },
              });
            });
            return;
          }

          const section = pin.closest<HTMLElement>("[data-projects]");
          if (section) section.dataset.hscroll = "";

          const distance = () =>
            Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
          const end = () => `+=${distance()}`;

          const scroll = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: pin,
              start: "top top",
              end,
              pin: true,
              scrub: 0.7,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          gsap.fromTo(
            q("[data-progress]"),
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: { trigger: pin, start: "top top", end, scrub: true },
            },
          );

          q("[data-panel]").forEach((panel) => {
            const inner = panel.querySelector("[data-media-inner]");
            if (inner) {
              gsap.fromTo(
                inner,
                { xPercent: -7 },
                {
                  xPercent: 7,
                  ease: "none",
                  scrollTrigger: {
                    trigger: panel,
                    containerAnimation: scroll,
                    start: "left right",
                    end: "right left",
                    scrub: true,
                  },
                },
              );
            }
            gsap.fromTo(
              panel.querySelector("[data-media]"),
              { clipPath: "inset(12% 18% 12% 0% round 32px)" },
              {
              clipPath: "inset(0% 0% 0% 0% round 28px)",
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scroll,
                start: "left 98%",
                end: "left 45%",
                scrub: true,
              },
            });
          });

          return () => {
            if (section) delete section.dataset.hscroll;
          };
        },
      );

      revert = () => mm.revert();
      // images and fonts change the layout after the first measure
      window.addEventListener("load", () => ScrollTrigger.refresh(), {
        once: true,
      });
      document.fonts?.ready.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });
    };

    // Everything animated here sits below the fold: start on the first sign
    // of intent, or once the page is idle, never during the initial load.
    const events = ["scroll", "wheel", "touchstart", "pointerdown", "keydown"];
    let started = false;
    let idle = 0;
    const kick = () => {
      if (started) return;
      started = true;
      events.forEach((name) => window.removeEventListener(name, kick));
      if (idle) window.clearTimeout(idle);
      void init();
    };
    events.forEach((name) =>
      window.addEventListener(name, kick, { passive: true, once: true }),
    );
    idle = window.setTimeout(() => {
      if (window.requestIdleCallback) window.requestIdleCallback(kick);
      else kick();
    }, 6000);
    if (window.scrollY > 0) kick();

    return () => {
      cancelled = true;
      events.forEach((name) => window.removeEventListener(name, kick));
      window.clearTimeout(idle);
      revert?.();
    };
  }, []);

  return null;
}
