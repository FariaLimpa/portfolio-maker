import React from "react";
import { FlipWords } from "../ui/flip-words";
import { PinContainer } from "../ui/3d-pin";
import Link from "next/link";

const HeaderHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen md:h-full">
      <div className="mt-32 md:mt-0 md:h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-white dark:text-neutral-400 text-center sm:text-left">
          Create{" "}
          <FlipWords
            className={"text-[#0e1f30] font-bold"}
            interval={2000}
            words={["Awesome", "Cool", "Amazing", "Incredible", "Fantastic"]}
          />{" "}
          <br />
          portfolios with PortfolioMaster
          <br />
          <Link
            className="inline-block py-2 px-4 mt-4 text-xl text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
            href="/dataform"
          >
            Make a portfolio now
          </Link>
        </div>
      </div>
      <div className="my-10 mb-20 md:mt-0 md:h-[45rem] w-full flex items-center justify-center">
        <PinContainer title="portfoliomakerv1.vercel.app" href="https://portfoliomakerv1.vercel.app">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:w-[20rem] sm:h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              Portfolio Master
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
                Customizable portfolios with codes.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>{" "}
      </div>
    </div>
  );
};

export default HeaderHome;
