"use client";

import { useEffect } from "react";

// Inline, runs before the hero paints on a full page load: the intro plays
// once per browser session and never for reduced-motion users.
export const introScript = `try{var d=document.documentElement;if(sessionStorage.getItem("ng-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("intro-skip")}else{sessionStorage.setItem("ng-intro","1")}}catch(e){document.documentElement.classList.add("intro-skip")}`;

// Client-side navigations don't run inline scripts: once the visitor leaves
// the home page, coming back to it skips the intro.
export default function IntroController() {
  useEffect(() => {
    try {
      sessionStorage.setItem("ng-intro", "1");
    } catch {}
    return () => document.documentElement.classList.add("intro-skip");
  }, []);
  return null;
}
