import { whatsappUrl, homeTrust } from "@/data";
import Container from "../Container";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import HeroScene from "./HeroScene";
import HeroPause from "./HeroPause";
import IntroController, { introScript } from "./IntroController";
import PillButton from "./PillButton";
import SplitWords from "./SplitWords";

export default function HomeHero() {
  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="home-hero -mt-17 section-dark"
    >
      <script dangerouslySetInnerHTML={{ __html: introScript }} />
      <IntroController />

      <div aria-hidden="true" className="hero-css-sky" />
      <HeroScene />

      {/* ---------- above the horizon ---------- */}
      <div className="hero-top">

        <div data-hero-parallax className="z-10 relative">
        <Container className="z-10 relative flex flex-col items-center pt-32 md:pt-36 pb-10 md:pb-14 text-center">
          <p className="hero-in hero-kicker" style={{ "--d": "0.05s" } as React.CSSProperties}>
            <span aria-hidden="true" className="hero-kicker-dot" />
            Cotonou, Bénin · À distance
          </p>
          <h1
            id="hero-title"
            className="mt-7 max-w-[17ch] font-display font-bold text-[clamp(2.5rem,6.2vw,5.6rem)] text-foreground text-balance leading-[1.02] tracking-[-0.025em] hero-title"
          >
            <SplitWords
              text="Je développe votre plateforme web ou votre application mobile sur mesure."
              accent={["web", "mobile"]}
            />
          </h1>
        </Container>
        </div>

        <div aria-hidden="true" className="intro-curtain intro-curtain-top" />
      </div>

      {/* ---------- the horizon ---------- */}
      <div data-horizon className="hero-horizon">
        <div aria-hidden="true" className="hero-css-floor" />
        <div aria-hidden="true" className="hero-css-beam" />
        <div aria-hidden="true" className="intro-line" />
        <div aria-hidden="true" className="intro-meta">
          <span>Néhémie Gandonou</span>
          <span className="intro-count" />
        </div>
      </div>

      {/* ---------- below the horizon ---------- */}
      <div className="hero-bottom">
        <div data-hero-parallax className="z-10 relative">
        <Container className="z-10 relative flex flex-col items-center gap-9 pt-10 md:pt-12 text-center">
          <p
            className="max-w-2xl text-foreground-muted md:text-lg leading-relaxed hero-in"
            style={{ "--d": "0.35s" } as React.CSSProperties}
          >
            Je suis Néhémie Gandonou, développeur de logiciels à Cotonou. Vous
            voulez gérer votre activité, proposer un service en ligne ou créer
            une application pour vos clients&nbsp;? Je vous accompagne de la première
            discussion jusqu’à la mise en ligne.
          </p>
          <div
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 hero-in"
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
        </Container>
        </div>

        <Container className="z-10 relative mt-auto pt-14 pb-6">
          <div
            className="hero-strip hero-in"
            style={{ "--d": "0.7s" } as React.CSSProperties}
          >
            <ul className="hero-trust">
              {homeTrust.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <HeroPause />
          </div>
        </Container>

        <div aria-hidden="true" className="intro-curtain intro-curtain-bottom" />
      </div>
    </section>
  );
}
