import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
export default function Contact({ isDarkMode }: { isDarkMode: boolean }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "36985106-9e13-48a2-bd92-5359a2538b83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id={"contact"}
      className={
        "mb-28 w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
      }
    >
      <h4 className={"text-center mb-2 text-lg font-Ovo"}>Connect with me</h4>
      <h2 className={"text-center text-5xl font-Ovo"}>Get in touch</h2>
      <p
        className={
          "text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo text-gray-600 dark:text-white/90"
        }
      >
        I'd love to hear from you! If you want to contact me, please use the
        form below.
      </p>
      <form onSubmit={onSubmit} className={"max-w-2xl mx-auto"}>
        <div className={"grid grid-cols-auto gap-6"}>
          <input
            type={"text"}
            placeholder={"please write your name"}
            className={
              "border-[0.5px] outline-none border-gray-400 rounded-md p-3 dark:bg-darkHover/30 dark:border-white/90"
            }
            name={"name"}
          />
          <input
            type={"email"}
            placeholder={"please write your email"}
            className={
              "border-[0.5px] outline-none border-gray-400 rounded-md p-3 dark:bg-darkHover/30 dark:border-white/90"
            }
            name={"email"}
          />
        </div>
        <textarea
          rows={6}
          placeholder={"please write your message"}
          className={
            "border-[0.5px] outline-none border-gray-400 rounded-md w-full px-3 py-3 my-6 dark:bg-darkHover/30 dark:border-white/90"
          }
          name={"message"}
        />
        <button
          className={
            "w-max bg-black/75 rounded-full px-8 py-3  mx-auto flex items-center justify-center text-white text-sm gap-2 dark:bg-transparent hover:bg-black duration-500 dark:hover:bg-darkHover dark:border-[0.5px] dark:border-white/90"
          }
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt={""}
            className={"w-3 mt-[2px]"}
          />
        </button>
      </form>
      <p className={"mt-4"}>{result}</p>
    </div>
  );
}
