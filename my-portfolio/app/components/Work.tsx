import { assets, workData } from "@/assets/assets";
import Image from "next/image";

export default function Work({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div id={"work"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
      <h2 className={"text-center text-5xl font-Ovo"}>My works</h2>
      <p
        className={
          "text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo text-gray-600 dark:text-white/80"
        }
      >
        Explore the projects I worked on.
      </p>
      <div className={"flex justify-center"}>
        {workData.map(({ title, description, bgImage }, index) => (
          <div
            key={index}
            className={`w-[80%] rounded-xl bg-white p-10 relative`}
          >
            <div
              className={`aspect-video rounded-xl bg-contain bg-center bg-no-repeat cursor-pointer group w-full`}
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? "hover:bg-darkHover hover:bg-opacity-30" : "hover:bg-gray-600 hover:bg-opacity-30"} group-hover:visible invisible`}
              >
                <div
                  className={`absolute bg-white w-[40%] flex justify-between items-center rounded-md px-5 py-3 group-hover:-translate-y-5 group-hover:duration-500`}
                >
                  <div>
                    <h2 className={"font-semibold dark:text-black"}>
                      go to website
                    </h2>
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
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          "w-max flex justify-center items-center border-[0.5px] border-gray-400 text-sm text-gray-600 gap-2 px-8 py-3 rounded-full mx-auto my-20 hover:bg-lightHover duration-500 cursor-pointer dark:text-white dark:border-white dark:hover:bg-darkHover"
        }
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt={""}
          className={"w-3 mt-[2px]"}
        />
      </div>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.14583333333334%",
          height: 0,
        }}
      >
        <iframe
          src="https://www.loom.com/embed/5c74d03c3aa84883930a1bdb427a704d?sid=10a0ed0e-2486-4834-8b7d-53d9128be059"
          // frameBorder="0"
          // webkitallowfullscreen
          // mozallowfullscreen
          // allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "20%",
            height: "20%",
          }}
        ></iframe>
      </div>
    </div>
  );
}
