import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

export default function Header({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      className={
        "w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center text-center gap-4"
      }
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.8,
          stiffness: 20,
          bounceDamping: 100,
        }}
      >
        <Image
          src={assets.ey_circle}
          alt={"profile_img"}
          className={"rounded-full w-32"}
        />
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={"flex items-center gap-2 text-xl md:text-2xl mb-3"}
      >
        <Image
          src={assets.hand_icon}
          alt={"hand_icon"}
          className={"w-6 mt-1"}
        />
      </motion.div>
      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={"text-3xl sm:text-6xl lg:text-[40px] font-Ovo"}
      >
        Chloe Lee, Frontend engineer
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={"max-w-2xl mx-auto font-Ovo"}
      >
        Hello World, I'm Chloe having 3 years of frontend engineering
        experience.
        <br />
        I've been using Next.js mostly with TypeScript and sometimes Vue.js.
        <br />
        I'm a developer who approaches UX with empathy, responsibility, and
        depth for users.
      </motion.p>
      <div className={"flex flex-col sm:flex-row gap-4 mt-4"}>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href={"#contact"}
          className={
            "px-10 py-3 flex items-center border border-white bg-black text-white rounded-full gap-2 dark:bg-transparent"
          }
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt={"arrow_white"}
            className={"w-4"}
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href={"/sample_resume.pdf"}
          download
          className={
            "px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 dark:bg-white dark:text-black"
          }
        >
          my resume
          <Image
            src={assets.download_icon}
            alt={"arrow_white"}
            className={"w-4"}
          />
        </motion.a>
      </div>
    </div>
  );
}
