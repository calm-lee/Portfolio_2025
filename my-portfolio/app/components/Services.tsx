import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

export default function Services() {
  return (
    <div id={"services"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
      <h4 className={"text-center mb-2 text-lg font-Ovo"}>What I offer</h4>
      <h2 className={"text-center text-5xl font-Ovo"}>My Services</h2>
      <p className={"text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo"}>
        Those are my services that I offer.
      </p>
      <ul className={"grid grid-cols-auto md:grid-cols-4 gap-6 my-10"}>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <li
            key={index}
            className={
              "border-[0.5px] border-gray-400 rounded-xl px-8 py-12 hover:bg-lightHover hover:shadow-black hover:-translate-y-1 duration-500"
            }
          >
            <Image src={icon} alt={title} className={"w-10"} />
            <h3 className={"my-3 font-semibold text-gray-700"}>{title}</h3>
            <p className={"text-gray-600 text-sm"}>{description}</p>
            <a href={link} className={"flex items-center gap-2 mt-6"}>
              read more{" "}
              <Image
                src={assets.right_arrow}
                alt={"right_arrow"}
                className={"w-3"}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
