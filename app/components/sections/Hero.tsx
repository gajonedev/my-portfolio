"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";
import AuroraBackground from "../ui/AuroraBackground";
import DotPattern from "../ui/DotPattern";
import GlowButton from "../ui/GlowButton";
import OutlineButton from "../ui/OutlineButton";
import { wordContainer, wordItem, easeOutExpo } from "@/lib/animations";
import { stats } from "@/data";

const titlePre = "Développeur";
const titleAccent = "Fullstack";
const titlePost = "qui transforme vos idées en produits digitaux";

const words = `${titlePre} ${titleAccent} ${titlePost}`.split(" ");
const accentIndex = 1; // "Fullstack"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <AuroraBackground />
      <DotPattern />

      <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-body text-xs uppercase tracking-[0.25em] text-primary"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-success" />
            Disponible pour freelance
          </motion.span>

          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={wordItem}
                className="inline-block whitespace-nowrap"
              >
                <span className={i === accentIndex ? "text-gradient" : ""}>
                  {word}
                </span>
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOutExpo }}
            className="max-w-xl font-body text-base leading-relaxed text-foreground-muted md:text-lg"
          >
            Je suis Néhémie Gandonou, développeur web, mobile & IoT basé à
            Cotonou. Je conçois des applications Flutter, des plateformes
            Next.js / Node.js et des systèmes embarqués — rapides, élégants et
            prêts à convertir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: easeOutExpo }}
            className="flex flex-wrap gap-4"
          >
            <GlowButton href="/projects" pulse>
              Voir mes projets
            </GlowButton>
            <OutlineButton href="/contact">Me contacter</OutlineButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: easeOutExpo }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="font-body text-xs uppercase tracking-[0.18em] text-foreground-subtle">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
          className="relative mx-auto flex justify-center"
        >
          <div className="absolute -inset-6 rounded-full bg-primary/20 blur-[60px]" />
          <div className="relative rounded-[2rem] border border-stroke bg-background-soft/60 p-3 backdrop-blur-md glass">
            <Image
              src="/portrait.jpeg"
              alt="Portrait de Néhémie Gandonou, développeur fullstack"
              width={360}
              height={440}
              priority
              className="rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
