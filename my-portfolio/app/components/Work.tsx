import { assets, workData } from "@/assets/assets";
import Image from "next/image";

export default function Work() {
  return (
    <div id={"work"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
      <h4 className={"text-center mb-2 text-lg font-Ovo"}>My portfolio</h4>
      <h2 className={"text-center text-5xl font-Ovo"}>My latest work</h2>
      <p className={"text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo"}>
        Explore the website I worked on.
      </p>
      <div className={"flex justify-center"}>
        <div className={"grid grid-cols-auto md:grid-cols-4 gap-6 my-10"}>
          {workData.map(({ title, description, bgImage }, index) => (
            <div
              key={index}
              className={
                "aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              }
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            >
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div>
                <Image src={assets.send_icon} alt={"send_icon"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
