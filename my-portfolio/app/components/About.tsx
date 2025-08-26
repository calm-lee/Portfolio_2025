import { careerData, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { isMobile, isTablet } from "react-device-detect";

export default function About() {
  return (
    <motion.div
      id={"about"}
      className={"w-full px-[12%] py-10 scroll-mt-20"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className={"text-center mb-2 text-lg font-Ovo"}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={"text-center text-5xl font-Ovo"}
      >
        About me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={"text-center max-w-2xl mx-auto mt-10  font-Ovo"}
      >
        Check out my journey and stack below.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={
          "w-full flex flex-col gap-10 my-10 justify-center items-center"
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`${isMobile && !isTablet ? "w-full" : "w-4/5"} border-[0.5px] border-gray-400 rounded-xl font-Ovo p-5`}
        >
          <h1 className={"text-gray-500 dark:text-white/80 uppercase"}>
            My Career
          </h1>
          <div className={"my-5"}>
            <div className={"grid xl:grid-cols-8 sm:gap-8 md:gap-4"}>
              <header
                className={
                  "xl:col-span-1 text-xl tracking-wide text-gray-400 pt-1"
                }
                aria-label={"career duration"}
              >
                2021.12
                <br />— 2025.2
              </header>
              <div
                className={"mt-6 xl:mt-3 xl:col-span-7"}
                aria-label={"career description"}
              >
                <h3
                  className={"font-semibold text-gray-700 dark:text-white"}
                  aria-label={careerData.position}
                >
                  {careerData.position}
                </h3>
                <h4 className={"text-sm"} aria-label={careerData.company}>
                  {careerData.company}
                </h4>
                <h4
                  className={"text-xs  text-gray-500 dark:text-white/60"}
                  aria-label={`${careerData.company_description}(${careerData.location})`}
                >
                  {careerData.company_description} ({careerData.location})
                </h4>
                <p
                  className={
                    "mt-6 xl:mt-3 text-sm leading-loose text-gray-700 dark:text-white"
                  }
                  dangerouslySetInnerHTML={{ __html: careerData.description }}
                  aria-label={"work description"}
                ></p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`${isMobile && !isTablet ? "w-full" : "w-4/5"} border-[0.5px] border-gray-400 rounded-xl p-5 pb-8`}
        >
          <h4 className={"mb-5 text-gray-500 dark:text-white/80 uppercase"}>
            Tools I use
          </h4>
          <ul
            className={
              "w-full grid grid-cols-6 xl:grid-cols-12 gap-5 justify-items-center"
            }
          >
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className={"flex items-center justify-center w-8 md:w-10"}
              >
                <Image
                  src={tool.src}
                  alt={tool.title}
                  className={"w-5 md:w-8"}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
