"use client";

import { track } from "@vercel/analytics";

/** Measurement must never interrupt navigation or a successful submission. */
export function trackAcquisition(
  name: string,
  properties: Record<string, string>,
) {
  try {
    track(name, properties);
  } catch {
    // Analytics may be blocked or unavailable.
  }
}
