import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Header({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      className={
        "w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center text-center gap-4"
      }
    >
      <div>
        <Image
          src={assets.profile_img}
          alt={"profile_img"}
          className={"rounded-full w-32"}
        />
      </div>
      <h3 className={"flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"}>
        Chloe Lee
        <Image src={assets.hand_icon} alt={"hand_icon"} className={"w-6"} />
      </h3>
      <h1 className={"text-3xl sm:text-6xl lg:text-[66px] font-Ovo"}>
        frontend engineer
      </h1>
      <p className={"max-w-2xl mx-auto font-Ovo"}>Hello World</p>
      <div className={"flex flex-col sm:flex-row gap-4 mt-4"}>
        <a
          href={"#contact"}
          className={
            "px-20 py-3 flex items-center border border-white bg-black text-white rounded-full gap-2"
          }
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt={"arrow_white"}
            className={"w-4"}
          />
        </a>
        <a
          href={"/sample_resume.pdf"}
          download
          className={
            "px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
          }
        >
          download resume
          <Image
            src={assets.download_icon}
            alt={"arrow_white"}
            className={"w-4"}
          />
        </a>
      </div>
    </div>
  );
}
