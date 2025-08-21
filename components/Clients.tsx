import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { Fragment } from "react";
import Image from "next/image";

const Clients = async () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Témoignages de quelques{" "}
        <span className="text-purple"> clients satisfaits</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-6">
          {companies.map((company) => (
            <Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                  width={company.id === 4 || company.id === 5 ? 50 : 30}
                  height={company.id === 4 || company.id === 5 ? 50 : 30}
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 50 : 30}
                  className="md:w-24 w-20"
                />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
