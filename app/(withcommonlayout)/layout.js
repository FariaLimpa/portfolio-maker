import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import NavbarHome from "../components/home/NavbarHome";
import FooterHome from "../components/home/FooterHome";
import "../css/globals.scss";
import "../css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <NavbarHome></NavbarHome>
          {children}
          <FooterHome></FooterHome>
        </main>
      </body>
    </html>
  );
  ``;
};

export default layout;
