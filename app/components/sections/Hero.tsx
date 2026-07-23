import { Fragment } from "react";
import Image from "next/image";
import Container from "../Container";
import AuroraBackground from "../ui/AuroraBackground";
import DotPattern from "../ui/DotPattern";
import GlowButton from "../ui/GlowButton";
import OutlineButton from "../ui/OutlineButton";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import HoverWord from "../ui/HoverWord";
import { CheckCircle } from "@/lib/icons";
import { stats, whatsappUrl, homeTrust } from "@/data";

// Title tokens — accent words ride the hover wave (HoverWord)
const titleTokens: { text: string; accent?: boolean }[] = [
  { text: "Une" },
  { text: "application" },
  { text: "ou" },
  { text: "un" },
  { text: "site" },
  { text: "qui" },
  { text: "vous" },
  { text: "fait" },
  { text: "gagner", accent: true },
  { text: "des" },
  { text: "clients.", accent: true },
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
          <span className="flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/40 rounded-full w-fit font-body text-primary text-xs uppercase tracking-[0.25em] hero-anim-up">
            <span className="inline-block bg-success rounded-full w-2 h-2" />
            On démarre ?
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
            className="max-w-xl font-body text-foreground-muted text-base md:text-lg leading-relaxed hero-anim-up"
            style={{ animationDelay: "0.5s" }}
          >
            Je suis Néhémie Gandonou, développeur à Cotonou. Je conçois des
            applications mobiles et des sites web qui donnent une image
            professionnelle à votre activité et vous amènent plus de clients,
            livrés en 2 à 8 semaines, prêts à l&apos;emploi.
          </p>

          <div
            className="flex flex-wrap gap-4 hero-anim-up"
            style={{ animationDelay: "0.7s" }}
          >
            <GlowButton href={whatsappUrl()} external>
              <WhatsAppIcon className="w-4 h-4" />
              Parler de mon projet
            </GlowButton>
            <OutlineButton href="/projects">
              Voir mes réalisations
            </OutlineButton>
          </div>

          <ul
            className="flex flex-wrap gap-x-5 gap-y-2 font-body text-foreground-subtle text-sm hero-anim-up"
            style={{ animationDelay: "0.8s" }}
          >
            {homeTrust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div
            className="gap-6 grid grid-cols-2 sm:grid-cols-4 hero-anim-up"
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
          className="relative flex justify-center mx-auto hero-anim-pop"
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
