import Image from "next/image";
import Container from "../Container";
import AuroraBackground from "../ui/AuroraBackground";
import DotPattern from "../ui/DotPattern";
import GlowButton from "../ui/GlowButton";
import OutlineButton from "../ui/OutlineButton";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import HoverWord from "../ui/HoverWord";
import { CheckCircle } from "@/lib/icons";
import { whatsappUrl, homeTrust } from "@/data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <AuroraBackground />
      <DotPattern />

      <Container className="relative items-center gap-12 grid lg:grid-cols-[1.15fr_0.85fr] py-16 md:py-24">
        <div className="flex flex-col gap-8">
          <p className="flex items-center gap-3 bg-primary/10 px-3 py-1 border border-primary/40 rounded-full w-fit font-body text-primary text-xs uppercase tracking-[0.25em] hero-anim-up">
            <span className="inline-block bg-success rounded-full w-2 h-2 shrink-0" />
            Cotonou, Bénin · À distance
          </p>

          <h1 className="font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
            Votre activité, une plateforme <HoverWord text="web" /> ou une
            application <HoverWord text="mobile" /> sur mesure.
          </h1>

          <p
            className="max-w-xl font-body text-foreground-muted text-base md:text-lg leading-relaxed hero-anim-up"
            style={{ animationDelay: "0.5s" }}
          >
            Je suis Néhémie Gandonou, développeur à Cotonou. Je conçois des
            applications mobiles et des sites web qui donnent une image
            professionnelle à votre activité et facilitent la prise de contact.
            Le périmètre et le calendrier sont définis avec vous avant le
            démarrage.
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
                sizes="(max-width: 640px) 240px, 360px"
                className="rounded-[1.5rem] w-60 sm:w-[360px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
