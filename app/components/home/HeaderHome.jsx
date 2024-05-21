import React from "react";
import { FlipWords } from "../ui/flip-words";
import { PinContainer } from "../ui/3d-pin";

const HeaderHome = () => {
  return <div className="grid grid-cols-2 "><div className="bg-gray-300">
  <div className="h-[40rem] flex justify-center items-center px-4">
    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Create{" "}
      <FlipWords
        words={["Awesome", "Cool", "Amazing", "Incredible", "Fantastic"]}
      />{" "}
      <br />
      portfolios with PortfolioMaster
    </div>
  </div>
</div>
<div>
  <div className="h-[45rem] w-full flex items-center justify-center ">
    <PinContainer
      title="/ui.aceternity.com"
      href="https://twitter.com/mannupaaji"
    >
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Aceternity UI
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">
            Customizable Tailwind CSS and Framer Motion Components.
          </span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
      </div>
    </PinContainer>{" "}
  </div>
</div></div>;
};

export default HeaderHome;
