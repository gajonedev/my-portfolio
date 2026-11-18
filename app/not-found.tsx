import type { Metadata } from "next";
import Container from "./components/Container";
import PillButton from "./components/home/PillButton";
import HorizonPointer from "./components/ui/HorizonPointer";

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

// The horizon of the site at sunset: the 0 of 404 is a sun sinking below
// the line. Decorative only, the message is in the h1 below.
export default function NotFound() {
  return (
    <section className="nf section-dark">
      <div aria-hidden="true" className="nf-sky" />

      <div aria-hidden="true" className="nf-stage">
        <span className="nf-digit">4</span>
        <span className="nf-sun" />
        <span className="nf-digit">4</span>
      </div>

      <div aria-hidden="true" className="nf-horizon">
        <span className="page-hero-beam" />
        <span className="page-hero-flare" />
      </div>

      <div className="nf-ground">
        <div aria-hidden="true" className="nf-floor" />
        <Container className="z-10 relative flex flex-col items-center gap-7 text-center">
          <h1 className="max-w-[20ch] font-display font-bold text-[clamp(1.9rem,4vw,3rem)] text-foreground text-balance leading-[1.08] tracking-[-0.025em]">
            Cette page n’existe pas ou a changé d’adresse
          </h1>
          <p className="max-w-xl text-foreground-muted md:text-lg leading-relaxed">
            Le lien est peut-être ancien. Je vous propose de repartir de
            l’accueil ou d’aller directement à ce qui vous intéresse.
          </p>
          <PillButton href="/" className="mt-2">
            Revenir à l’accueil
          </PillButton>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-2">
            {shortcuts.map((shortcut) => (
              <li key={shortcut.href}>
                <PillButton href={shortcut.href} variant="ghost">
                  {shortcut.label}
                </PillButton>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <HorizonPointer />
    </section>
  );
}
