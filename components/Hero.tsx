import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ContainerTextFlip } from "./ui/container-text-flip";
import Link from "next/link";
import { ShinyButton } from "./ui/shiny-button";

const Hero = () => {
  return (
    <div className="pb-20 pt-14">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <ShinyButton className="rounded-full text-sm">
            Me contacter
          </ShinyButton>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Je vous construis n'importe quel application ou site web"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <ContainerTextFlip
            words={[
              "SAAS",
              "blog",
              "marketplace",
              "landing page",
              "site vitrine",
              "e-commerce",
            ]}
            interval={1500}
          />

          <p className="text-center md:tracking-wider mb-4 text-md md:text-md lg:text-xl mt-12 md:mt-16 text-slate-400 font-light lg:max-w-[60%]">
            Salut! Je suis Néhémie Gandonou, et je transforme vos idées en applications web modernes et performantes
          </p>

          <a href="#about" className="mt-4">
            <MagicButton
              title="Voir mes réalisations"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
