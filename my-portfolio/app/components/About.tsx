import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";

export default function About({ isDarkMode }: { isDarkMode: boolean }) {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);

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
        I am an experienced Frontend Engineer.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={"flex w-full flex-col lg:flex-col items-center gap-20 my-20"}
      >
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl "}
        >
          {infoList.map(
            ({ icon, iconDark, title, description }, index: number) => (
              <motion.li
                ref={(el) => {
                  listRefs.current[index] = el;
                }}
                style={{ pointerEvents: "auto" }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: (index + 1) * 0.4, duration: 0.5 },
                }}
                onHoverStart={(event) => {
                  if (listRefs.current[index] != null) {
                    listRefs.current[index].style.transform =
                      "translateY(-8px)";
                    listRefs.current[index].style.transition = "transform 0.5s";
                  }
                }}
                onHoverEnd={(event) => {
                  if (listRefs.current[index] != null) {
                    listRefs.current[index].style.transform = "translateY(0px)";
                    listRefs.current[index].style.transition = "transform 0.5s";
                  }
                }}
                className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer ${isDarkMode ? "hover:bg-darkHover" : "hover:bg-lightHover"} hover:shadow-black`}
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} />
                <h3
                  className={"my-3 font-semibold text-gray-700 dark:text-white"}
                >
                  {title}
                </h3>
                <p className={"text-gray-600 text-sm dark:text-white/80"}>
                  {description}
                </p>
              </motion.li>
            ),
          )}
        </motion.ul>
        <motion.ul
          className={"flex flex-col justify-center items-center"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h4 className={"mb-6 text-gray-700 font-Ovo dark:text-white/80"}>
            Tools I use
          </h4>
          <ul className={"flex flex-row gap-3 sm:gap-5"}>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className={
                  "flex items-center justify-center w-12 sm:w-14 aspect-square border-[0.5px] border-gray-400 rounded-xl cursor-pointer hover:-translate-y-1 duration-500"
                }
              >
                <Image src={tool} alt={"Tool"} className={"w-5 sm:w-7"} />
              </li>
            ))}
          </ul>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
