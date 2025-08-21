import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { LuMail } from "react-icons/lu";

const Footer = async () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 max-sm:-bottom-24 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-80"
          width={1920}
          height={1080}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à faire la différence pour <span className="text-purple">votre</span> prochain projet ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi dès aujourd&apos;hui et discutons de la manière dont je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Me contacter"
            icon={<LuMail />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col-reverse justify-between items-center max-md:gap-8">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Gajone Dev
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-full border border-black-300"
              href={info.link}
              target="_blank"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
