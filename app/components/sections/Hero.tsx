"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";
import AuroraBackground from "../ui/AuroraBackground";
import DotPattern from "../ui/DotPattern";
import GlowButton from "../ui/GlowButton";
import OutlineButton from "../ui/OutlineButton";
import HoverWord from "../ui/HoverWord";
import { wordContainer, wordItem, easeOutExpo } from "@/lib/animations";
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

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <AuroraBackground />
      <DotPattern />

      <Container className="relative items-center gap-12 grid lg:grid-cols-[1.15fr_0.85fr] py-16 md:py-24">
        <div className="flex flex-col gap-8">
          <motion.span
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/40 rounded-full w-fit font-body text-primary text-xs uppercase tracking-[0.25em]"
          >
            <span className="inline-block bg-success rounded-full w-2 h-2" />
            Disponible pour freelance
          </motion.span>

          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            className="font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
          >
            {titleTokens.map((token, i) => (
              <motion.span
                key={`${token.text}-${i}`}
                variants={wordItem}
                className="inline-block"
              >
                {token.accent ? <HoverWord text={token.text} /> : token.text}
                {i < titleTokens.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOutExpo }}
            className="max-w-xl font-body text-foreground-muted text-base md:text-lg leading-relaxed"
          >
            Je suis Néhémie Gandonou, développeur web &amp; mobile basé à
            Cotonou. Je conçois des applications mobiles Flutter et des
            plateformes web Next.js / Node.js — rapides, élégantes et prêtes à
            convertir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.7, ease: easeOutExpo }}
            className="flex flex-wrap gap-4"
          >
            <GlowButton href="/projects">Voir mes projets</GlowButton>
            <OutlineButton href="/contact">Me contacter</OutlineButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.9, ease: easeOutExpo }}
            className="gap-6 grid grid-cols-2 sm:grid-cols-4"
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
          className="relative flex justify-center mx-auto"
        >
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
        </motion.div>
      </Container>
    </div>
  );
}
