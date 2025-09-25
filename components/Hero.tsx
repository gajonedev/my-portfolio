import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { ShinyButton } from "./ui/shiny-button";
import { LuMail } from "react-icons/lu";
import Image from "next/image";

const Hero = async () => {
  return (
    <div className="pb-20 pt-8">
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
          className="h-[80vh] w-[120vw] top-10 left-full"
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
          <a href="mailto:gajonedev@gmail.com">
            <ShinyButton className="rounded-full text-sm mb-6">
              <LuMail />
              Me contacter
            </ShinyButton>
          </a>

          <div className="my-4 text-white leading-snug tracking-wide text-center text-[50px] md:text-6xl lg:text-[70px] font-extrabold">
            Je vous construis{" "}
            <span className="text-purple">n&apos;importe quel</span> application
            <span className="text-purple"> web</span> ou{" "}
            <span className="text-purple">mobile</span>{" "}
          </div>

          <ContainerTextFlip
            words={[
              "SAAS",
              "blog",
              "marketplace",
              "landing page",
              "site vitrine",
              "e-commerce",
              "restau",
            ]}
            interval={1200}
          />

          <div className="flex flex-1 flex-col md:flex-row-reverse items-center justify-center mt-10 md:mt-20 gap-10 md:gap-16 w-full">
            <div className="flex items-center justify-center md:w-1/2 mt-10 md:mt-0 rounded-3xl overflow-hidden border-2 border-purple/20 bg-purple/5 p-3 backdrop-blur-lg">
              <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl border-2 border-purple/10">
                <Image
                  src="/gajone.jpg"
                  alt="Gajone"
                  width={500}
                  height={500}
                  // className="object-contain"
                />
              </div>
            </div>
            <div className="flex md:w-1/2 flex-col items-center justify-center max-md:gap-5">
              <p className="text-center text-[20px]  text-slate-400 font-medium">
                Salut! Je suis{" "}
                <a
                  href="https://facebook.com/gajonedev"
                  className="text-purple font-semibold"
                  target="_blank"
                >
                  Néhémie Gandonou
                </a>
                , et je transforme vos idées en applications web modernes et
                performantes
              </p>

              <a href="#realisations">
                <MagicButton
                  title="Voir mes réalisations"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
