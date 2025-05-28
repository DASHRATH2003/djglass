import React, { useState } from "react";
import aboutUs from "../../../assets/Home_Page_About_Us/djglasss_bengaluru.webp";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePageAboutUsSection = () => {
  const [count, setCount] = useState(5);

  return (
    <section className="container mx-auto px-4">
      {/* Upper Section */}
      <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-center">
          About Us
        </h1>
        <span className="bg-[#080F3B] w-1/4 md:w-1/12 h-[2px]"></span>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 md: gap-8 md:gap-12">
        <div className="flex md:hidden items-center justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={aboutUs}
            alt="DJ Glass Interiors"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl md:text-4xl uppercase">
              Dj Glass Interiors Solutions
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-2 md:gap-5">
              <p className="text-[#656868] text-base md:text-lg uppercase">
                Glass industry in Bengaluru, Karnataka
              </p>
              <div className="flex gap-2">
                {Array(count)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="fill-[#FEA116]" />
                  ))}
              </div>
            </div>
            <span className="w-full h-[2px] bg-[#080F3B] mt-2"></span>
          </div>
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <p className="text-justify text-sm md:text-base ">
              DJ Glass Interiors, led by the dedicated Mr. Umesh, has
              consistently delivered exceptional service for office partitions
              and glass replacement projects. Their commitment to quality,
              reasonable pricing, and timely execution ensures a seamless
              experience. From design to execution, their professionalism and
              attention to detail make them a trusted partner for all your glass
              interior needs.
            </p>
            <p className="text-justify text-sm md:text-base">
              Customers are highly impressed with DJ Glass Interiors for their
              excellent craftsmanship, prompt responses, and reliable
              post-installation support. With premium quality materials and a
              client-focused approach, they provide tailored solutions within
              your budget. Their dedication to delivering on promises makes them
              the ideal choice for residential and office projects alike.
            </p>
            <Link to="/contact">
              <button className=" mt-5 w-full md:w-auto text-white font-medium bg-[#080F3B] px-6 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors text-sm md:text-base">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={aboutUs}
            alt="DJ Glass Interiors"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageAboutUsSection;
