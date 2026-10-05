import type { Metadata } from "next";
import Link from "next/link";
import Container from "./components/Container";
import DotPattern from "./components/ui/DotPattern";
import BottomGlow from "./components/ui/BottomGlow";
import GlowButton from "./components/ui/GlowButton";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

const shortcuts = [
  { href: "/projects", label: "Mes projets" },
  { href: "/services", label: "Mes services" },
  { href: "/tarifs", label: "Les tarifs" },
  { href: "/blog", label: "Le blog" },
];

export default function NotFound() {
  return (
    <div className="relative bg-background overflow-hidden section-dark">
      <DotPattern />
      <BottomGlow />
      <Container className="relative flex flex-col items-center gap-8 py-24 md:py-32 text-center">
        <p
          aria-hidden="true"
          className="font-display font-bold text-[9rem] md:text-[13rem] leading-none tracking-tighter select-none"
          style={{
            WebkitTextStroke: "1.5px var(--stroke-hover)",
            color: "transparent",
          }}
        >
          4<span className="text-primary [-webkit-text-stroke:0]">0</span>4
        </p>
        <div className="flex flex-col gap-4 max-w-xl">
          <h1 className="font-display font-bold text-foreground text-3xl md:text-4xl tracking-tight">
            Cette page n’existe pas ou a changé d’adresse
          </h1>
          <p className="text-foreground-muted leading-relaxed">
            Le lien est peut-être ancien. Je vous propose de repartir de
            l’accueil ou d’aller directement à ce qui vous intéresse.
          </p>
        </div>
        <GlowButton href="/">Revenir à l’accueil</GlowButton>
        <ul className="flex flex-wrap justify-center gap-2">
          {shortcuts.map((shortcut) => (
            <li key={shortcut.href}>
              <Link
                href={shortcut.href}
                className="inline-flex px-4 py-2 text-foreground-muted hover:text-foreground text-sm card-interactive"
              >
                {shortcut.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
