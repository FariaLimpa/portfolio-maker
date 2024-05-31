import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import NavbarHome from "../components/home/NavbarHome";
import FooterHome from "../components/home/FooterHome";
import "../globals.css";
import { Bounce, ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-black ">
            <NavbarHome></NavbarHome>
            {children}

            <FooterHome></FooterHome>
          </main>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
  ``;
};

export default layout;
