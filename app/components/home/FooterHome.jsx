import Link from "next/link";
import React from "react";

const FooterHome = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white mt-10">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} portfolioMaker. All rights reserved.
        </p>
        <p className="mt-2">
          Made by{" "}
          <Link
            className="text-blue-400 hover:underline"
            href="https://example.com/kolin"
          >
            Kolin
          </Link>{" "}
          &{" "}
          <Link
            className="text-blue-400 hover:underline"
            href="https://example.com/limpa"
          >
            Limpa
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterHome;
