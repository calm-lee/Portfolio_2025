import { serviceData, workDetailData } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Modal from "@/app/components/Modal";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
  const swiperRef = useRef<SwiperRef>(null);

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
        <ul className={"w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-14 my-10"}>
          {serviceData.map(
            ({ icon, title, title2, description, link, tools }, index) => (
              <li
                key={index}
                className={`relative flex-row sm:aspect-[3/4] border-[0.5px] border-gray-400 rounded-xl ${isDarkMode ? "hover:bg-darkHover hover:shadow-white" : "hover:bg-lightHover hover:shadow-black"} hover:-translate-y-1 duration-500 cursor-pointer`}
                onClick={() => setModalValues(title)}
              >
                <div
                  className={
                    "relative w-full sm:h-[40%] aspect-video border-b-[0.5px] border-gray-400"
                  }
                >
                  <img
                    src={icon}
                    alt={title}
                    className={
                      "w-full h-full rounded-t-xl border-b-[0.5px] object-cover"
                    }
                  />
                </div>
                <div className={"sm:h-[45%] p-5 overflow-auto"}>
                  <h1
                    className={
                      "text-2xl font-semibold text-gray-700 dark:text-white"
                    }
                  >
                    {title}
                  </h1>
                  <h3 className={"text-[14px] text-gray-400"}>{title2}</h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className={
                      "pt-3 text-sm lg:text-[16px] text-gray-600 dark:text-white/80"
                    }
                  ></p>
                </div>
                <div className={"sm:h-[15%]"}>
                  <ul className={"relative flex flex-row gap-3 m-5"}>
                    {tools.map((tool, index) => (
                      <li
                        key={index}
                        className={
                          "flex items-center justify-center w-10 sm:w-12 aspect-square border-[0.5px] border-gray-400 rounded-xl"
                        }
                      >
                        <Image
                          src={tool}
                          alt={"Tool"}
                          className={"w-4 sm:w-7"}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
      {modalContent && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className={"flex flex-col text-base p-3 h-full"}>
            <section className={"shrink-0 p-5 flex flex-row justify-between"}>
              <h1 className={"text-xl font-semibold"}>{modalContent.title}</h1>
              <button onClick={() => setIsModalOpen(false)}>X</button>
            </section>
            <section
              className={
                "custom-scroll flex-1 p-5 flex flex-col gap-5 overflow-y-scroll"
              }
            >
              <section className="grid grid-cols-3">
                <div>
                  <h6 className={"font-bold"}>Type</h6>
                  <div>
                    <p>PC</p>
                    <p>Mobile</p>
                    <p>Responsive</p>
                  </div>
                </div>
                <div>
                  <h6 className={"font-bold"}>FrameWork</h6>
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: modalContent.framework,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h6 className={"font-bold"}>Library</h6>
                  <div>
                    <p></p>
                  </div>
                </div>
              </section>
              <section>
                <p
                  dangerouslySetInnerHTML={{ __html: modalContent.description }}
                />
              </section>
              <section className="screenshot">
                <h6 className={"font-bold"}>Screenshots</h6>
                <div className={"relative mt-5"}>
                  <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                      nextEl: ".main-banner-next",
                      prevEl: ".main-banner-prev",
                    }}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className={
                      "border-[0.5px] border-gray-200 shadow-lg shadow-gray-300 rounded-lg"
                    }
                  >
                    {modalContent.screenShots.map((screenshot, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={screenshot}
                          alt={screenshot}
                          className={"bg-gray-200"}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-custom w-full absolute inset-0">
                    <div className="swiper-button main-banner-next"></div>
                    <div className="swiper-button main-banner-prev"></div>
                  </div>
                </div>
              </section>
            </section>
            <section className={"shrink-0 p-5"}>
              <span
                className={"w-full flex items-center justify-center font-bold"}
              >
                <a href={modalContent.link} target={"_blank"}>
                  Go to Website
                </a>
              </span>
            </section>
          </div>
        </Modal>
      )}
    </>
  );
}
