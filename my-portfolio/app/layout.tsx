import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Chloe Lee | Frontend Engineer",
  description:
    "Portfolio of Frontend Engineer building responsive, accessible websites using Next.js, React, and TypeScript.",
  openGraph: {
    title: "FE Engineer Chloe Lee's Portfolio",
    url: "https://portfolio-2025-iota-teal.vercel.app",
    siteName: "Chloe Lee's Portfolio",
    images: ["./logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
