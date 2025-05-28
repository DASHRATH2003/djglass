import React from "react";
import {
  FaDiamond,
  FaToolbox,
  FaRupeeSign,
  FaClockRotateLeft,
} from "react-icons/fa6";

const AboutUsWhyChooseUsSection = () => {
  const array = [
    {
      icon: <FaToolbox />,
      title: "Exceptional Craftsmanship",
      desc: "Our team is skilled in delivering precise and high-quality glass installations, ensuring a flawless finish every time.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Affordable Pricing",
      desc: "We offer competitive rates without compromising on quality, making our services accessible to a wide range of clients.",
    },
    {
      icon: <FaClockRotateLeft />,
      title: "Timely Execution",
      desc: "We value your time and ensure that every project is completed within the agreed-upon timeframe.",
    },
    {
      icon: <FaDiamond />,
      title: "Premium Materials",
      desc: "We use only top-quality materials to guarantee durability and a sleek, modern aesthetic.",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-16">
      {/* Upper Section */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover what sets us apart and why we're the best choice for your
            glass interior needs.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {array.map((item, index) => (
            <div
              key={index}
              className="bg-[#080F3B] shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition flex flex-col items-center hover:bg-[#fff] group"
            >
              <div className="text-white text-4xl mb-4 group-hover:text-[#080F3B]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#080F3B]">
                {item.title}
              </h3>
              <p className="text-white group-hover:text-[#080F3B]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <button className="mt-5 md:block md:w-auto text-white font-medium bg-[#080F3B] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsWhyChooseUsSection;
