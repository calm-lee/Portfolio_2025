import { assets, serviceData, workDetailData } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Modal from "@/app/components/Modal";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function Services({ isDarkMode }: { isDarkMode: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<
    (typeof workDetailData)[0] | null
  >(null);
  const [tinySwiperPcIdx, setTinySwiperPcIdx] = useState(0);
  const [tinySwiperMoIdx, setTinySwiperMoIdx] = useState(0);

  const setModalValues = (title: string) => {
    const detail = workDetailData.find((item) => item.title === title);
    if (detail) {
      setModalContent(detail);
      setIsModalOpen(true);
    }
  };
  const bigSwiperPcRef = useRef<SwiperRef>(null);
  const bigSwiperMoRef = useRef<SwiperRef>(null);

  const changeBigSwiperIdx = (index: number, type: string) => {
    if (type === "pc" && bigSwiperPcRef.current) {
      bigSwiperPcRef.current.swiper.slideTo(index);
    }
    if (type === "mo" && bigSwiperMoRef.current) {
      bigSwiperMoRef.current.swiper.slideTo(index);
    }
  };

  const closeModal = () => {
    setTinySwiperPcIdx(0);
    setTinySwiperMoIdx(0);
    setIsModalOpen(false);
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
          <h4 className={"text-center mb-2 text-lg font-Ovo"}>What I built</h4>
          <h2 className={"text-center text-5xl font-Ovo"}>My Works</h2>
          <p className={"text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo"}>
            Explore the services I worked on.
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
                        className={`flex items-center justify-center w-10 sm:w-12 aspect-square rounded-xl ${isDarkMode ? "border-[0.5px] border-white bg-white bg-opacity-40" : "border-[0.5px] border-gray-400"}`}
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
        <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
          <div className={"flex flex-col text-base pt-3 px-3 h-[90%]"}>
            <section className={"shrink-0 p-5 flex flex-row justify-between"}>
              <h1 className={"text-2xl font-semibold"}>{modalContent.title}</h1>
              <button onClick={() => closeModal()} className={"mb-2"}>
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  className={"w-3 cursor-pointer"}
                  alt={"close_icon"}
                />
              </button>
            </section>
            <section
              className={
                "flex-1 custom-scroll p-5 flex flex-col gap-5 overflow-y-scroll"
              }
            >
              <section className="grid grid-cols-3">
                <div>
                  <h6 className={"font-bold"}>Type</h6>
                  <div>
                    <p>PC, Mobile</p>
                  </div>
                </div>
                <div>
                  <h6 className={"font-bold"}>Tech Stack</h6>
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: modalContent.techStack,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h6 className={"font-bold"}>Collaboration Tools</h6>
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: modalContent.collaboTools,
                      }}
                    ></p>
                  </div>
                </div>
              </section>
              <section>
                <p
                  dangerouslySetInnerHTML={{ __html: modalContent.description }}
                  className={"leading-loose"}
                />
              </section>
              <section className="screenshot">
                <h6 className={"font-bold"}>Screenshots</h6>
                <p className={"mt-3 ml-1 font-semibold text-gray-600 text-sm"}>
                  PC
                </p>
                <div className={"relative mt-3"}>
                  <Swiper
                    ref={bigSwiperPcRef}
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: ".main-banner-next",
                      prevEl: ".main-banner-prev",
                    }}
                    slidesPerView={1}
                    className={`border-[0.5px] border-gray-200 rounded-lg ${isDarkMode ? "" : "shadow-lg shadow-gray-300"}`}
                    onSlideChange={() =>
                      setTinySwiperPcIdx(
                        bigSwiperPcRef.current?.swiper.activeIndex ?? 0,
                      )
                    }
                    loop={false}
                  >
                    {modalContent.screenshots_pc.map((screenshot, index) => (
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
                  <div className={"p-2 w-full"}>
                    <Swiper
                      slidesPerView={modalContent.screenshots_pc.length}
                      spaceBetween={10}
                      className={""}
                      loop={false}
                    >
                      {modalContent.screenshots_pc.map((screenshot, index) => (
                        <SwiperSlide key={index}>
                          <img
                            onClick={() => changeBigSwiperIdx(index, "pc")}
                            src={screenshot}
                            alt={screenshot}
                            className={`bg-gray-200 ${tinySwiperPcIdx === index ? "border-[2px] border-amber-300" : ""}`}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <p className={"mt-7 ml-1  font-semibold text-gray-600 text-sm"}>
                  MO
                </p>
                <div className={"relative mt-3"}>
                  <Swiper
                    ref={bigSwiperMoRef}
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: ".main-banner-next",
                      prevEl: ".main-banner-prev",
                    }}
                    slidesPerView={1}
                    className={`border-[0.5px] border-gray-200 rounded-lg ${isDarkMode ? "" : "shadow-lg shadow-gray-300"}`}
                    onSlideChange={() =>
                      setTinySwiperMoIdx(
                        bigSwiperMoRef.current?.swiper.activeIndex ?? 0,
                      )
                    }
                    loop={false}
                  >
                    {modalContent.screenshots_mo.map((screenshot, index) => (
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
                  <div className={"p-2  w-full"}>
                    <Swiper
                      slidesPerView={modalContent.screenshots_mo.length}
                      className={""}
                      loop={false}
                    >
                      {modalContent.screenshots_mo.map((screenshot, index) => (
                        <SwiperSlide key={index}>
                          <img
                            onClick={() => changeBigSwiperIdx(index, "mo")}
                            src={screenshot}
                            alt={screenshot}
                            className={`bg-transparent ${tinySwiperMoIdx === index ? "border-[2px] border-amber-300" : ""}`}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div className={"w-full h-[10%]"}>
            <span
              className={
                "h-full flex items-center justify-center rounded-b-md bg-slate-700 text-white text-base cursor-pointer"
              }
              onClick={() => {
                window.open(modalContent.link, "_blank");
              }}
            >
              Go to Website
            </span>
          </div>
        </Modal>
      )}
    </>
  );
}
