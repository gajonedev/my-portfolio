import { Fragment } from "react";
import Image from "next/image";
import Container from "../Container";
import AuroraBackground from "../ui/AuroraBackground";
import DotPattern from "../ui/DotPattern";
import GlowButton from "../ui/GlowButton";
import OutlineButton from "../ui/OutlineButton";
import HoverWord from "../ui/HoverWord";
import { stats } from "@/data";

// Title tokens — accent words ride the hover wave (HoverWord)
const titleTokens: { text: string; accent?: boolean }[] = [
  { text: "Développeur" },
  { text: "Web", accent: true },
  { text: "&" },
  { text: "Mobile", accent: true },
  { text: "—" },
  { text: "de" },
  { text: "l'idée" },
  { text: "au" },
  { text: "produit." },
];

// Word stagger matches the previous framer cadence (delayChildren 0.1, stagger 0.07)
const WORD_BASE_DELAY = 0.1;
const WORD_STAGGER = 0.07;

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <AuroraBackground />
      <DotPattern />

      <Container className="relative items-center gap-12 grid lg:grid-cols-[1.15fr_0.85fr] py-16 md:py-24">
        <div className="flex flex-col gap-8">
          <span className="hero-anim-up flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/40 rounded-full w-fit font-body text-primary text-xs uppercase tracking-[0.25em]">
            <span className="inline-block bg-success rounded-full w-2 h-2" />
            Disponible pour freelance
          </span>

          <h1 className="font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
            {titleTokens.map((token, i) => (
              <Fragment key={`${token.text}-${i}`}>
                <span
                  className="hero-word"
                  style={{
                    animationDelay: `${WORD_BASE_DELAY + i * WORD_STAGGER}s`,
                  }}
                >
                  {token.accent ? <HoverWord text={token.text} /> : token.text}
                </span>
                {/* space sits OUTSIDE the inline-block span so it isn't trimmed */}
                {i < titleTokens.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </h1>

          <p
            className="hero-anim-up max-w-xl font-body text-foreground-muted text-base md:text-lg leading-relaxed"
            style={{ animationDelay: "0.5s" }}
          >
            Je suis Néhémie Gandonou, développeur web &amp; mobile basé à
            Cotonou. Je conçois des applications mobiles Flutter et des
            plateformes web Next.js / Node.js — rapides, élégantes et prêtes à
            convertir.
          </p>

          <div
            className="hero-anim-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.7s" }}
          >
            <GlowButton href="/projects">Voir mes projets</GlowButton>
            <OutlineButton href="/contact">Me contacter</OutlineButton>
          </div>

          <div
            className="hero-anim-up gap-6 grid grid-cols-2 sm:grid-cols-4"
            style={{ animationDelay: "0.9s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display font-bold text-foreground text-2xl">
                  {stat.value}
                </span>
                <span className="font-body text-foreground-subtle text-xs uppercase tracking-[0.18em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hero-anim-pop relative flex justify-center mx-auto"
          style={{ animationDelay: "0.3s" }}
        >
          {/* two glowing traces circulating around the border (Huly style) */}
          <div className="beam-frame">
            {/* glass card kept as-is */}
            <div className="bg-background-soft/60 backdrop-blur-md p-3 border border-stroke rounded-[2rem] glassw">
              <Image
                src="/portrait.png"
                alt="Portrait de Néhémie Gandonou, développeur web et mobile"
                width={360}
                height={440}
                priority
                className="rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
