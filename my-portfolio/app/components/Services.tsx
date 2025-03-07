import { serviceData } from "@/assets/assets";
import Image from "next/image";

export default function Services() {
  return (
    <div id={"services"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
      <h4 className={"text-center mb-2 text-lg font-Ovo"}>What I offer</h4>
      <h2 className={"text-center text-5xl font-Ovo"}>My Services</h2>
      <p
        className={"text-center max-w-2xl mx-auto text-lg mt-10 mb-10 font-Ovo"}
      >
        Those are my services that I offer.
      </p>
      <div className={"flex justify-center"}>
        <ul className={"grid grid-cols-4 gap-6"}>
          {serviceData.map(({ icon, title, description, link }, index) => (
            <li key={index}>
              <Image src={icon} alt={title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
