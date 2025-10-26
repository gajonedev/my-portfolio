import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { projects } from "@/data";
import { ShineBorder } from "@/components/ui/shine-border";

const RecentProjects = async () => {
  return (
    <section className="py-20" id="realisations">
      <h1 className="heading">
        Quelques uns de mes <span className="text-purple">projets récents</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-5 p-4">
        {projects.map((item) => (
          <div
            className="relative bg-black-100 border rounded-xl max-w-xs lg:max-w-sm overflow-hidden"
            key={item.id}
          >
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <div className="bg-black-100 p-6 rounded-lg">
              {item.img && (
                <div className="mb-4 rounded-md overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <h3 className="mb-2 font-bold text-xl max-sm:line-clamp-1">
                {item.title}
              </h3>
              <p className="mb-4 text-gray-300 text-sm line-clamp-2">
                {item.des}
              </p>

              <div className="flex flex-1 justify-between items-center">
                {item.iconLists && (
                  <div className="flex flex-wrap gap-2">
                    {item.iconLists.map((tech, index) => (
                      <div
                        className="flex justify-center items-center bg-black -mr-3 p-2 border border-neutral-800 rounded-full"
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
                      className="flex items-center bg-[#161A31] hover:bg-[#1c2040] p-2 rounded-full transition-colors"
                    >
                      <FaGithub />
                    </Link>
                  )}
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex items-center bg-purple/20 hover:bg-purple/30 p-2 rounded-full transition-colors"
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
