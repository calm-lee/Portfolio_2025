import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import ToastBar from "@/app/components/ToastBar";
export default function Contact({ isDarkMode }: { isDarkMode: boolean }) {
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setShowToast(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "36985106-9e13-48a2-bd92-5359a2538b83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks for your message.");
      event.target.reset();
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    } else {
      console.log("Error", data);
      setResult("Sorry, please try it again.");
    }
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  return (
    <div
      id={"contact"}
      className={
        "w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:40%_auto] dark:bg-none"
      }
    >
      <h4 className={"text-center mb-2 text-lg font-Ovo"}>Connect with me</h4>
      <h2 className={"text-center text-5xl font-Ovo"}>Get in touch</h2>
      <ul className={"flex justify-center gap-10 my-8"}>
        <li className={""}>
          <a
            target={"_blank"}
            href={"https://github.com/calm-lee"}
            className={"flex justify-center items-center gap-1"}
          >
            <Image
              src={isDarkMode ? assets.github_logo_white : assets.github_logo}
              alt={"github"}
              className={"w-7"}
            />
          </a>
        </li>
        <li>
          <a
            className={"flex justify-center items-center gap-1"}
            target={"_blank"}
            href={"https://www.linkedin.com/in/chloe-lee-21a819229/"}
          >
            <Image
              src={assets.linkedIn_logo}
              alt={"linkedIn"}
              className={"w-7"}
            />
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            href={"https://calm-lee.tistory.com/"}
            className={"flex justify-center items-center gap-1"}
          >
            <Image
              src={isDarkMode ? assets.blog_logo_white : assets.blog_logo}
              alt={"blog"}
              className={"w-7"}
            />
          </a>
        </li>
      </ul>

      <p
        className={
          "text-center max-w-2xl mx-auto mt-10 mb-5 font-Ovo text-gray-600 dark:text-white/90"
        }
      >
        I'm always happy to connect and explore new opportunities — feel free to
        reach out!
      </p>
      <p className={"text-gray-500 dark:text-white/90 font-semibold text-sm"}>
        <a
          href={"mailto:sn920647@gmail.com"}
          className={"flex items-center justify-center gap-1 "}
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt={"email"}
            className={"w-5"}
          />
          <span>sn920647@gmail.com</span>
        </a>
      </p>

      {/*<form className={"max-w-2xl mx-auto"} onSubmit={onSubmit}>*/}
      {/*  <div className={"grid grid-cols-auto gap-6"}>*/}
      {/*    <input*/}
      {/*      type={"text"}*/}
      {/*      placeholder={"name"}*/}
      {/*      className={*/}
      {/*        "border-[0.5px] outline-none border-gray-400 rounded-md p-3 dark:bg-darkHover/30 dark:border-white/90"*/}
      {/*      }*/}
      {/*      name={"name"}*/}
      {/*    />*/}
      {/*    <input*/}
      {/*      type={"email"}*/}
      {/*      placeholder={"email"}*/}
      {/*      className={*/}
      {/*        "border-[0.5px] outline-none border-gray-400 rounded-md p-3 dark:bg-darkHover/30 dark:border-white/90"*/}
      {/*      }*/}
      {/*      name={"email"}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <textarea*/}
      {/*    rows={6}*/}
      {/*    placeholder={"message"}*/}
      {/*    className={*/}
      {/*      "border-[0.5px] outline-none border-gray-400 rounded-md w-full px-3 py-3 my-6 dark:bg-darkHover/30 dark:border-white/90"*/}
      {/*    }*/}
      {/*    name={"message"}*/}
      {/*  />*/}
      {/*  <button*/}
      {/*    className={*/}
      {/*      "w-max bg-black/75 rounded-full px-8 py-3  mx-auto flex items-center justify-center text-white text-sm gap-2 dark:bg-transparent hover:bg-black duration-500 dark:hover:bg-darkHover dark:border-[0.5px] dark:border-white/90"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    Submit now*/}
      {/*    <Image*/}
      {/*      src={assets.right_arrow_white}*/}
      {/*      alt={""}*/}
      {/*      className={"w-3 mt-[2px]"}*/}
      {/*    />*/}
      {/*  </button>*/}
      {/*</form>*/}
      {/*<ToastBar isOpen={showToast} message={result}></ToastBar>*/}
    </div>
  );
}
