import { Fragment } from "react";
import { homeTrust, whatsappUrl } from "@/data";
import Container from "../../Container";
import WhatsAppIcon from "../../ui/WhatsAppIcon";
import HeroPause from "../HeroPause";
import IntroController, { introScript } from "../IntroController";
import PillButton from "../PillButton";
import HeroParticles from "./HeroParticles";

const TITLE =
  "Je développe votre plateforme web ou votre application mobile sur mesure.";
// Hovering these words shows the matching shape (see HeroParticles).
const SHAPE_WORDS: Record<string, number> = { web: 1, mobile: 2 };

// Dotted browser, shown until the particles take over (or without a GPU).
function DottedFallback() {
  return (
    <svg viewBox="0 0 400 270" fill="none" aria-hidden="true" className="v2-fallback">
      <rect x="10" y="20" width="380" height="250" rx="18" />
      <path d="M10 64 H390 M118 64 V258 M34 96 H86 M34 120 H76 M34 144 H82" />
      <rect x="140" y="84" width="66" height="32" rx="7" />
      <rect x="220" y="84" width="66" height="32" rx="7" />
      <rect x="300" y="84" width="66" height="32" rx="7" />
      <path
        className="v2-fallback-accent"
        d="M140 232 L176 196 L206 212 L242 160 L276 178 L312 138 L364 128"
      />
    </svg>
  );
}

export default function HeroV2() {
  const words = TITLE.split(" ");
  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="v2-hero -mt-17 section-dark"
    >
      <script dangerouslySetInnerHTML={{ __html: introScript }} />
      <IntroController />

      <div aria-hidden="true" className="v2-glow" />
      <HeroParticles />

      <Container className="z-10 relative v2-grid">
        <div className="v2-copy" data-hero-parallax>
          <p className="hero-in hero-kicker" style={{ "--d": "0.05s" } as React.CSSProperties}>
            <span aria-hidden="true" className="hero-kicker-dot" />
            Cotonou, Bénin · À distance
          </p>
          <h1 id="hero-title" className="v2-title">
            {words.map((word, index) => {
              const bare = word.replace(/[.,]/g, "");
              const shape = SHAPE_WORDS[bare];
              return (
                <Fragment key={index}>
                  <span className="sw" style={{ "--i": index } as React.CSSProperties}>
                    <span
                      className={`sw-i${shape ? " v2-word text-primary" : ""}`}
                      data-shape={shape}
                    >
                      {word}
                    </span>
                  </span>
                  {index < words.length - 1 ? " " : null}
                </Fragment>
              );
            })}
          </h1>
          <p
            className="max-w-xl text-foreground-muted md:text-lg leading-relaxed hero-in"
            style={{ "--d": "0.35s" } as React.CSSProperties}
          >
            Je suis Néhémie Gandonou, développeur de logiciels à Cotonou. Vous
            voulez gérer votre activité, proposer un service en ligne ou créer
            une application pour vos clients&nbsp;? Je vous accompagne de la
            première discussion jusqu’à la mise en ligne.
          </p>
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-4 hero-in"
            style={{ "--d": "0.5s" } as React.CSSProperties}
          >
            <PillButton
              href={whatsappUrl()}
              external
              icon={<WhatsAppIcon className="w-4 h-4" />}
            >
              Parler de mon projet
            </PillButton>
            <PillButton href="#projects" variant="ghost">
              Voir mes réalisations
            </PillButton>
          </div>
        </div>

        <div className="v2-stage">
          <div data-object-anchor className="v2-anchor">
            <DottedFallback />
          </div>
          <div data-hud-slot />
        </div>
      </Container>

      <Container className="z-10 relative pb-6">
        <div className="hero-strip hero-in" style={{ "--d": "0.7s" } as React.CSSProperties}>
          <ul className="hero-trust">
            {homeTrust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <HeroPause />
        </div>
      </Container>

      {/* intro: a counter, then the screen closes on its middle line */}
      <div aria-hidden="true" className="v2-intro">
        <span className="v2-intro-count" />
        <span className="v2-intro-bar" />
        <span className="v2-intro-name">Néhémie Gandonou · Développeur web et mobile</span>
      </div>
    </section>
  );
}
