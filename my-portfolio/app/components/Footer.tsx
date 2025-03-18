import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className={"mt-20 text-gray-600"}>
      <div className={"text-center"}>
        <Image src={assets.logo} className={"w-36 mx-auto mb-2"} alt={"logo"} />
        <div className={"flex items-center justify-center gap-2"}>
          <Image src={assets.mail_icon} alt={""} className={"w-6"} />
          sn920647@gmail.com
        </div>
      </div>
      <div
        className={
          "border-t border-gray-300 mx-[10%] mt-10 mb-20 py-4 flex flex-col sm:flex-row sm:justify-between"
        }
      >
        <p className={"text-center"}>ⓒ 2025 Chole Lee. All rights reserved.</p>
        <ul className={"flex justify-center gap-10 mt-2"}>
          <li>
            <a
              target={"_blank"}
              href={"https://github.com/calm-lee"}
              className={"flex justify-center items-center gap-1"}
            >
              <Image
                src={assets.github_logo}
                alt={"github"}
                className={"w-5"}
              />
              GitHub
            </a>
          </li>
          <li>
            <a
              className={"flex justify-center items-center gap-1"}
              target={"_blank"}
              href={"https://www.linkedin.com/in/chloe-lee-21a819229/"}
            >
              <Image
                src={assets.linkedIn_logo}
                alt={"linkedIn"}
                className={"w-5"}
              />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              href={"https://calm-lee.tistory.com/"}
              className={"flex justify-center items-center gap-1"}
            >
              <Image src={assets.blog_logo} alt={"blog"} className={"w-5"} />
              Blog (Kor)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
