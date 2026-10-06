import Link from "next/link";
import type { ReactNode } from "react";
import Container from "./Container";
import DotPattern from "./ui/DotPattern";
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

export default function PageHeader({
  title,
  description,
  kicker,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <div className="relative bg-background pt-12 md:pt-16 pb-14 md:pb-20 overflow-hidden section-dark">
      <DotPattern />
      <div
        aria-hidden="true"
        className="-top-32 left-[10%] absolute bg-primary/20 blur-[110px] rounded-full w-md h-72 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="-right-24 bottom-0 absolute bg-accent-alt/10 blur-[110px] rounded-full w-80 h-64 pointer-events-none"
      />
      {/* coral hairline closing the header */}
      <div
        aria-hidden="true"
        className="bottom-0 absolute inset-x-0 bg-linear-to-r from-transparent via-primary/50 to-transparent h-px"
      />

      <Container className="relative flex flex-col gap-5">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Fil d'ariane">
            <ol className="flex flex-wrap items-center gap-1.5 text-foreground-muted text-xs">
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
                        className={last ? "text-foreground" : undefined}
                      >
                        {crumb.label}
                      </span>
                    )}
                    {!last && (
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {kicker && (
          <span className="flex items-center gap-2.5 bg-primary/10 px-3 py-1 border border-primary/30 rounded-full w-fit font-body text-primary text-xs uppercase tracking-[0.25em]">
            <span className="inline-block bg-primary rounded-full w-1.5 h-1.5 glow-sm" />
            {kicker}
          </span>
        )}

        <h1 className="max-w-4xl font-display font-bold text-foreground text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl font-body text-foreground-muted text-base md:text-lg leading-relaxed">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-2">{children}</div> : null}
      </Container>
    </div>
  );
}
