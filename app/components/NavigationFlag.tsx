"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Marks <html data-navigated> after the first client-side navigation so the
// page-transition blur (globals.css) never runs on the initial visit.
export default function NavigationFlag() {
  const pathname = usePathname();
  const initial = useRef(pathname);

  useEffect(() => {
    if (pathname !== initial.current) {
      document.documentElement.dataset.navigated = "";
    }
  }, [pathname]);

  return null;
}
