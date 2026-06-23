import Image from "next/image";
import Container from "../Container";
import AuroraBackground from "../ui/AuroraBackground";
import DotPattern from "../ui/DotPattern";
import GlowButton from "../ui/GlowButton";
import OutlineButton from "../ui/OutlineButton";
import { stats } from "@/data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <AuroraBackground />
      <DotPattern />

      <Container className="relative items-center gap-12 grid lg:grid-cols-[1.15fr_0.85fr] py-16 md:py-24">
        <div className="flex flex-col gap-8">
          <span className="flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/40 rounded-full w-fit font-body text-primary text-xs uppercase tracking-[0.25em]">
            <span className="inline-block bg-success rounded-full w-2 h-2" />
            Disponible pour freelance
          </span>

          <h1 className="font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
            Développeur <span className="text-primary">Web</span> &amp;{" "}
            <span className="text-primary">Mobile</span> — de l&apos;idée au
            produit.
          </h1>

          <p className="max-w-xl font-body text-foreground-muted text-base md:text-lg leading-relaxed">
            Je suis Néhémie Gandonou, développeur web &amp; mobile basé à
            Cotonou. Je conçois des applications mobiles Flutter et des
            plateformes web Next.js / Node.js — rapides, élégantes et prêtes à
            convertir.
          </p>

          <div className="flex flex-wrap gap-4">
            <GlowButton href="/projects">Voir mes projets</GlowButton>
            <OutlineButton href="/contact">Me contacter</OutlineButton>
          </div>

          <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
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

        <div className="relative flex justify-center mx-auto">
          {/* two glowing traces circulating around the border (Huly style) */}
          <div className="beam-frame">
            {/* glass card kept as-is */}
            <div className="bg-background-soft/60 backdrop-blur-md p-3 border border-stroke rounded-4xl glassw">
              <Image
                src="/portrait.png"
                alt="Portrait de Néhémie Gandonou, développeur web et mobile"
                width={360}
                height={440}
                priority
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
