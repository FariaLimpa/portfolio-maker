import React from "react";

const FooterHome = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white mt-10">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} portfolioMaker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterHome;
