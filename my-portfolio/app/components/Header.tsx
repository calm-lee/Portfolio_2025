import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

export default function Header() {
  const waveAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 15, -10, 15, -10, 5, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

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
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={"flex items-center mb-3"}
        variants={waveAnimation}
        animate="animate"
        style={{ display: "inline-block", transformOrigin: "70% 70%" }}
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
        Hello, World!
        <br />
        I'm Chloe — a frontend engineer with 3 years of experience.
        <br />I approach UX with empathy, responsibility, and depth.
      </motion.p>
      <div className={"mt-4"} aria-label={"download resume button"}>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          href={"/chloe_lee_cv.pdf"}
          download
          className={
            "px-10 py-3 flex items-center border border-white bg-black text-white rounded-full gap-2 dark:bg-transparent"
          }
        >
          CV is here
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
