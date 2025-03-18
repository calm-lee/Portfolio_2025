import { assets, workData } from "@/assets/assets";
import Image from "next/image";

export default function Work({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div id={"work"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
      <h4 className={"text-center mb-2 text-lg font-Ovo"}>My portfolio</h4>
      <h2 className={"text-center text-5xl font-Ovo"}>My latest work</h2>
      <p
        className={
          "text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo text-gray-600"
        }
      >
        Explore the website I worked on.
      </p>
      <div className={"grid grid-cols-auto gap-5 my-10"}>
        {workData.map(({ title, description, bgImage }, index) => (
          <div
            key={index}
            className={
              "aspect-square rounded-xl bg-cover bg-center bg-no-repeat relative cursor-pointer group"
            }
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div
              className={
                "bg-white w-11/12 flex justify-between items-center rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 group-hover:bottom-7 duration-500"
              }
            >
              <div>
                <h2 className={"font-semibold"}>{title}</h2>
                <p className={"text-sm text-gray-600"}>{description}</p>
              </div>
              <div
                className={
                  "border border-black rounded-full w-9 aspect-square flex justify-center items-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                }
              >
                <Image src={assets.send_icon} alt={""} className={"w-5"} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          "w-max flex justify-center items-center border-[0.5px] border-gray-400 text-sm text-gray-600 gap-2 px-8 py-3 rounded-full mx-auto my-20 hover:bg-lightHover duration-500 cursor-pointer"
        }
      >
        Show more
        <Image src={assets.right_arrow} alt={""} className={"w-3 mt-[2px]"} />
      </div>
    </div>
  );
}
