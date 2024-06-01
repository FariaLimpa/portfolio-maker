"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Body1Home = () => {
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [latestPortfolios, setLatestPortfolios] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch(
          "https://portfoliomaker-backend.vercel.app/portfolio"
        );
        const data = await response.json();
        setPortfolioCount(data.data.length);
        if (data.data.length > 0) {
          const latest = data.data.slice(-3).reverse(); // Get the last 3 portfolios and reverse the order
          setLatestPortfolios(latest);
        }
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };
    fetchPortfolioData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    const currentObserver = observer.observe(componentRef.current);
    return () => {
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className="shadow-2xl mt-10 flex flex-col items-center justify-center py-8 md:py-12 bg-gradient-to-tl from-orange-300 to-pink-500 text-white rounded-lg"
      role="region"
      aria-label="Total Portfolios Generated"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
        Total Portfolios Generated
      </h2>
      <div className="text-5xl md:text-7xl font-extrabold mb-6 md:mb-10">
        {isVisible ? <CountUp end={portfolioCount} duration={2.5} /> : 0}
      </div>
      <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 px-4 md:px-8 text-center">
        Join the community of creators who have already built their portfolios
        with PortfolioMaster.
      </p>
      <Link
        href={"/dataform"}
        className="bg-white text-purple-600 font-bold py-2 md:py-3 px-4 md:px-6 rounded-full transition-colors duration-300 hover:bg-purple-600 hover:text-white"
      >
        Get Started
      </Link>
      {latestPortfolios.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4 col-span-full">
            Latest Portfolios
          </h3>
          {latestPortfolios.map((portfolio, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col items-center">
                <p className="text-base md:text-lg font-semibold mb-2">
                  Name:{" "}
                  <span className="font-normal">
                    {portfolio.personalData.name}
                  </span>
                </p>
                <p className="text-base md:text-lg font-semibold">
                  Created At:{" "}
                  <span className="font-normal">
                    {new Date(portfolio.createdAt).toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body1Home;