"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Body1Home = () => {
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const fetchPortfolioCount = async () => {
      try {
        const response = await fetch(
          "https://portfoliomaker-backend.vercel.app/portfolio"
        );
        const data = await response.json();
        setPortfolioCount(data.data.length);
      } catch (error) {
        console.error("Error fetching portfolio count:", error);
      }
    };
    fetchPortfolioCount();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Adjust the threshold value as needed
    );

    const currentObserver = observer.observe(componentRef.current);

    return () => {
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className="shadow-2xl flex flex-col items-center justify-center py-12 bg-gradient-to-tl from-orange-300 to-pink-500 text-white rounded-lg "
    >
      <h2 className="text-4xl font-bold mb-6">Total Portfolios Generated</h2>
      <div className="text-7xl font-extrabold mb-10">
        {isVisible ? <CountUp end={portfolioCount} duration={2.5} /> : 0}
      </div>
      <p className="text-lg text-gray-200 mb-8 px-8 text-center">
        Join the community of creators who have already built their portfolios
        with PortfolioMaster.
      </p>
      <Link
        href={"/dataform"}
        className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-purple-600 hover:text-white"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Body1Home;
