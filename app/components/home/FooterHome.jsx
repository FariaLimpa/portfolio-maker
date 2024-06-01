import Link from "next/link";
import React from "react";

const FooterHome = () => {
  return (
    <footer className="bg-gray-800 py-10 text-center text-white mt-10">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} portfolioMaker. All rights reserved.
        </p>
        <p className="mt-2">
          Made by{" "}
          <Link
            className="text-blue-400 hover:underline"
            href="https://github.com/kolinabir"
            target="_blank"
          >
            Kolin
          </Link>{" "}
          &{" "}
          <Link
            className="text-blue-400 hover:underline"
            href="https://github.com/FariaLimpa"
            target="_blank"
          >
            Limpa
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterHome;
