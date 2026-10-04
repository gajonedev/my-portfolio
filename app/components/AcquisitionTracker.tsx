"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackAcquisition } from "@/lib/analytics";

export default function AcquisitionTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/contact") {
      try {
        sessionStorage.setItem("contact-source", pathname);
      } catch {
        /* Storage is optional. */
      }
    }
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest?.("a");
      if (!link) return;
      const url = new URL(link.href, window.location.origin);
      if (url.hostname === "wa.me")
        trackAcquisition("whatsapp_click", { source: pathname });
      if (
        url.origin === window.location.origin &&
        url.pathname === "/contact"
      ) {
        trackAcquisition("contact_click", {
          source: pathname,
          service: url.searchParams.get("service") || "a-definir",
        });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);
  return null;
}
