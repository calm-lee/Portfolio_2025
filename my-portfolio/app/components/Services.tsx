import { serviceData, toolsData, workDetailData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "@/app/components/Modal";

export default function Services({ isDarkMode }: { isDarkMode: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<
    (typeof workDetailData)[0] | null
  >(null);

  const setModalValues = (title: string) => {
    const detail = workDetailData.find((item) => item.title === title);
    if (detail) {
      setModalContent(detail);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        id={"services"}
        className={
          "w-full px-[12%] py-10 scroll-mt-20 flex flex-col items-center"
        }
      >
        <div>
          <h4 className={"text-center mb-2 text-lg font-Ovo"}>What I offer</h4>
          <h2 className={"text-center text-5xl font-Ovo"}>My Services</h2>
          <p className={"text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo"}>
            Those are my services that I offer.
          </p>
        </div>
        <ul
          className={"w-[80%] grid grid-cols-auto md:grid-cols-2 gap-14 my-10"}
        >
          {serviceData.map(
            ({ icon, title, description, link, tools }, index) => (
              <li
                key={index}
                className={`border-[0.5px] border-gray-400 rounded-xl ${isDarkMode ? "hover:bg-darkHover hover:shadow-white" : "hover:bg-lightHover hover:shadow-black"} hover:-translate-y-1 duration-500 cursor-pointer`}
                onClick={() => setModalValues(title)}
              >
                <div className={"relative aspect-video"}>
                  <img
                    src={icon}
                    alt={title}
                    className={
                      "absolute rounded-t-xl object-cover w-full h-full border-b-[0.5px] border-gray-400"
                    }
                  />
                </div>
                <div className={"relative aspect-video pt-1 pb-10 px-5"}>
                  <h1
                    className={
                      "text-2xl my-3 font-semibold text-gray-700 dark:text-white"
                    }
                  >
                    {title}
                  </h1>
                  <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className={
                      "pt-3 text-base text-gray-600 dark:text-white/80"
                    }
                  ></p>
                </div>
                <ul className={"flex flex-row gap-3 sm:gap-5 p-5"}>
                  {tools.map((tool, index) => (
                    <li
                      key={index}
                      className={
                        "flex items-center justify-center w-12 sm:w-14 aspect-square border-[0.5px] border-gray-400 rounded-xl"
                      }
                    >
                      <Image src={tool} alt={"Tool"} className={"w-5 sm:w-7"} />
                    </li>
                  ))}
                </ul>
              </li>
            ),
          )}
        </ul>
      </div>
      {modalContent && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h1>{modalContent.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: modalContent.description }} />
          <button onClick={() => setIsModalOpen(false)}></button>
        </Modal>
      )}
    </>
  );
}
