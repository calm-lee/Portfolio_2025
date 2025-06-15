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
        Chloe Lee
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={"max-w-2xl mx-auto font-Ovo"}
      >
        Hello, world. I'm Chloe — a frontend engineer with 3 years of
        experience.
        <br />I approach UX with empathy, responsibility, and depth.
      </motion.p>
      <div className={"flex flex-col sm:flex-row gap-4 mt-4"}>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          href={"/sample_resume.pdf"}
          download
          className={
            "px-10 py-3 flex items-center border border-white bg-black text-white rounded-full gap-2 dark:bg-transparent"
          }
        >
          my resume
          <Image
            src={assets.download_icon_white}
            alt={"arrow_white"}
            className={"w-4"}
          />
        </motion.a>
      </div>
    </div>
  );
}
