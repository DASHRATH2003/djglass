import React from "react";
import AboutUsImage from "../../../assets/About_Us/djglass_about_us.webp";
import { FaSquareXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutUsPageSection2 = () => {
  return (
    <section className="bg-[#f3f3f3] py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Upper section */}
        <section className="mb-8 md:mb-16">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Uncomment if needed */}
            {/* <h1 className="text-3xl md:text-4xl font-bold uppercase text-center">About Us</h1> */}
            {/* <span className="bg-[#080F3B] w-1/4 md:w-1/12 h-[2px]"></span> */}
          </div>
        </section>

        {/* Lower Section */}

        <div className="lg:hidden flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={AboutUsImage}
            alt="DJ Glass Interiors team at work"
            className="rounded-md border border-solid border-[#080F3B] p-2 md:p-4 max-w-full h-auto"
          />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mt-10 lg:mt-0">
          {/* 1st column */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold">OUR STORY</h2>
              <span className="bg-[#080F3B] w-full h-[2px]"></span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base text-justify">
                Under the leadership of Mr. Umesh, DJ Glass Interiors has earned
                a reputation for delivering top-notch services in office
                partitions and glass replacement. Their unwavering focus on
                quality, competitive pricing, and timely completion guarantees a
                smooth and hassle-free process. With a keen eye for detail and
                professionalism from start to finish, they have become a trusted
                name for all glass interior solutions.
              </p>
              <p className="text-sm md:text-base text-justify">
                DJ Glass Interiors has won the trust of clients with its
                exceptional craftsmanship, swift responses, and dependable
                after-installation service. Using high-quality materials and a
                customer-centric approach, they offer customized solutions that
                fit within your budget. Their commitment to fulfilling every
                promise has established them as the preferred choice for both
                residential and commercial projects.
              </p>
            </div>

            <div>
              <Link to="/contact">
                <button className="w-full md:w-auto text-white font-medium bg-[#080F3B] px-6 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
                  BOOK US
                </button>
              </Link>
            </div>
            <div className="flex gap-5 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#080F3B] hover:text-[#e99015] transition-colors"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#080F3B] hover:text-[#e99015] transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#080F3B] hover:text-[#e99015] transition-colors"
              >
                <FaSquareXTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* 2nd column */}
          <div className="hidden lg:flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={AboutUsImage}
              alt="DJ Glass Interiors team at work"
              className="rounded-md border border-solid border-[#080F3B] p-2 md:p-4 max-w-full h-auto"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUsPageSection2;
