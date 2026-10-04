import type { ReactNode } from "react";

// Page content stays visible immediately, including with JavaScript disabled.
export default function Template({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
