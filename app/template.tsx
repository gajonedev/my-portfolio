import type { ReactNode } from "react";

// Next.js remounts the template on navigation, restarting the CSS animation.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
