import { projects } from "@/data";
import React from "react";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const RecentProjects = async () => {
  return (
    <section className="py-20" id="realisations">
      <h1 className="heading">
        Quelques uns de mes <span className="text-purple">projets récents</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 mt-5">
        {projects.map((item) => (
          <div
            className="relative overflow-hidden rounded-xl bg-black-100 max-w-xs lg:max-w-sm border"
            key={item.id}
          >
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <div className="p-6 bg-black-100 rounded-lg">
              {item.img && (
                <div className="mb-4 overflow-hidden rounded-md">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 max-sm:line-clamp-1">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                {item.des}
              </p>

              <div className="flex flex-1 items-center justify-between">
                {item.iconLists && (
                  <div className="flex flex-wrap gap-2">
                    {item.iconLists.map((tech, index) => (
                      <div
                        className="-mr-3 p-2 bg-black rounded-full border border-neutral-800 flex justify-center items-center"
                        key={index}
                      >
                        <Image
                          src={tech}
                          alt={`Icon ${index + 1}`}
                          width={14}
                          height={14}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-1">
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex items-center p-2 bg-[#161A31] rounded-full hover:bg-[#1c2040] transition-colors"
                    >
                      <FaGithub />
                    </Link>
                  )}
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex items-center p-2 bg-purple/20 rounded-full hover:bg-purple/30 transition-colors"
                    >
                      <FiExternalLink />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
