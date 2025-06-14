import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const NavBar = ({
  isDarkMode,
  setDarkMode,
}: {
  isDarkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isScroll, setIsScroll] = useState(false);
  const slideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (slideMenuRef.current) {
      slideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (slideMenuRef != null) {
      if (slideMenuRef.current) {
        slideMenuRef.current.style.transform = "translateX(16rem)";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={
          "fixed top-0 right-0 w-[90%] -z-10 translate-y-[-80%] dark:hidden"
        }
      >
        <Image src={assets.header_bg_color} alt="header-bg-color" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex item-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer ml-24 mt-2"
            alt="logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:bg-transparent dark:border dark:border-white/50"}`}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className={"flex items-center gap-4"}>
          <button onClick={() => setDarkMode((prev: boolean) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={"theme_logo"}
              className={"w-6"}
            />
          </button>
          {/*<a*/}
          {/*  href={"#contact"}*/}
          {/*  className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-200 rounded-full ml-4 dark:border-white/50"*/}
          {/*>*/}
          {/*  Contact{" "}*/}
          {/*  <Image*/}
          {/*    src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}*/}
          {/*    alt={"contact_icon"}*/}
          {/*    className="w-3"*/}
          {/*  />*/}
          {/*</a>*/}
          <button className={"block md:hidden ml-3"} onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt={"menu"}
              className={"md:hidden w-6"}
            />
          </button>
        </div>

        {/*-- mobile menu --*/}

        <ul
          ref={slideMenuRef}
          className={`md:hidden flex flex-col fixed top-0 bottom-0 gap-4 w-64 -right-64 px-10 py-20 h-screen bg-gray-300 bg-opacity-90 transition duration-500 dark:bg-darkHover dark:text-white`}
        >
          <div className={"absolute right-6 top-6"} onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              className={"w-3 cursor-pointer"}
              alt={"close_icon"}
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu} className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu} className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu} className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
