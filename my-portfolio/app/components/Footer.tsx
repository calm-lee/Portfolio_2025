import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className={"mt-20 text-gray-600"}>
      <div
        className={
          "border-t border-gray-300 mx-[10%] mt-10 mb-20 py-4 flex flex-col items-center sm:flex-row sm:justify-between dark:text-white/90"
        }
      >
        <p className={"text-center"}>ⓒ 2025 Chole Lee. All rights reserved.</p>
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          className={"w-16"}
          alt={"logo"}
        />
      </div>
    </div>
  );
}
