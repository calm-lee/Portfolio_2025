"use client";
import NavBar from "@/app/components/NavBar";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Work />
    </>
  );
}
