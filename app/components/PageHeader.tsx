import Link from "next/link";
import type { ReactNode } from "react";
import Container from "./Container";
import SplitWords from "./home/SplitWords";
import HorizonPointer from "./ui/HorizonPointer";
import { ChevronRight } from "@/lib/icons";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Short context label above the title (e.g. "Services", "Étude de cas"). */
  kicker?: string;
  /** Trail shown above the kicker; the last item is the current page. */
  breadcrumbs?: Crumb[];
  /** Extra row under the description: meta chips, actions… */
  children?: ReactNode;
}

/*
 * Opening of every inner page: the horizon of the home, in CSS only.
 * The title words rise with a transform (never transparent: it is usually
 * the LCP element) and the light on the line follows the pointer.
 */
export default function PageHeader({
  title,
  description,
  kicker,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  const long = title.length > 48;

  return (
    <div className="page-hero section-dark">
      <div aria-hidden="true" className="page-hero-sky" />

      <Container className="page-hero-inner">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Fil d'ariane" className="page-hero-in" style={{ "--d": "0s" } as React.CSSProperties}>
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[0.7rem] text-foreground-subtle uppercase tracking-[0.12em]">
              {breadcrumbs.map((crumb, index) => {
                const last = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {crumb.href && !last ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        aria-current={last ? "page" : undefined}
                        className={last ? "text-foreground-muted" : undefined}
                      >
                        {crumb.label}
                      </span>
                    )}
                    {!last && (
                      <ChevronRight className="w-3 h-3" aria-hidden="true" />
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {kicker && (
          <p className="ed-kicker page-hero-in" style={{ "--d": "0.05s" } as React.CSSProperties}>
            <span aria-hidden="true" className="ed-kicker-line" />
            {kicker}
          </p>
        )}

        <h1 className={`page-hero-title${long ? " is-long" : ""}`}>
          <SplitWords text={title} />
        </h1>

        {description ? (
          <p
            className="max-w-2xl text-foreground-muted md:text-lg leading-relaxed page-hero-in"
            style={{ "--d": "0.25s" } as React.CSSProperties}
          >
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="mt-1 page-hero-in" style={{ "--d": "0.35s" } as React.CSSProperties}>
            {children}
          </div>
        ) : null}
      </Container>

      <div aria-hidden="true" className="page-hero-horizon">
        <span className="page-hero-beam" />
        <span className="page-hero-flare" />
      </div>
      <HorizonPointer />
    </div>
  );
}
