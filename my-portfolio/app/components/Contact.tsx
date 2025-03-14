import { assets } from "@/assets/assets";
import Image from "next/image";
export default function Contact() {
  return (
    <div
      id={"contact"}
      className={
        "mb-28 w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      }
    >
      <h4 className={"text-center mb-2 text-lg font-Ovo"}>Connect with me</h4>
      <h2 className={"text-center text-5xl font-Ovo"}>Get in touch</h2>
      <p
        className={
          "text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo text-gray-600"
        }
      >
        I'd love to hear from you! If you want to contact me, please use the
        form below.
      </p>
      <form className={"w-full flex-col justify-center items-center"}>
        <div className={"flex justify-center gap-6"}>
          <input
            type={"text"}
            placeholder={"please write your name"}
            className={"border border-gray-300 rounded-md w-[348px] px-3 py-3"}
          />
          <input
            type={"email"}
            placeholder={"please write your email"}
            className={"border border-gray-300 rounded-md w-[348px] px-3 py-3"}
          />
        </div>
        <textarea
          rows={6}
          placeholder={"please write your message"}
          className={"border border-gray-300 rounded-md w-full px-3 py-3 my-6"}
        />
        <button
          className={
            "w-max bg-black/75 rounded-full px-8 py-3  mx-auto flex items-center justify-center text-white text-sm gap-2 hover:bg-black duration-500"
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
    </div>
  );
}
