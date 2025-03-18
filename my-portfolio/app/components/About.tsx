import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

export default function About({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div id={"about"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
      <h4 className={"text-center mb-2 text-lg font-Ovo"}>Introduction</h4>
      <h2 className={"text-center text-5xl font-Ovo"}>About me</h2>
      <p className={"text-center max-w-2xl mx-auto mt-10  font-Ovo"}>
        I am an experienced Frontend Engineer.
      </p>
      <div
        className={"flex w-full flex-col lg:flex-col items-center gap-20 my-20"}
      >
        <ul className={"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"}>
          {infoList.map(
            ({ icon, iconDark, title, description }, index: number) => (
              <li
                className={
                  "border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500"
                }
                key={index}
              >
                <Image src={icon} alt={title} />
                <h3 className={"my-3 font-semibold text-gray-700"}>{title}</h3>
                <p className={"text-gray-600 text-sm"}>{description}</p>
              </li>
            ),
          )}
        </ul>
        <ul className={"flex flex-col justify-center items-center"}>
          <h4 className={"my-6 text-gray-700 font-Ovo"}>Tools I use</h4>
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
        </ul>
      </div>
    </div>
  );
}
