import React from "react";
import {
  FaUsers,
  FaHandBackFist,
  FaHandHoldingHand,
  FaAward,
} from "react-icons/fa6";
import CountUp from "react-countup";
import bgImg from "../../../assets/Home_Page_Countup/dj_glasses_acheivements_banner_image.webp";

const HomePageCountSection = () => {
  const countArray = [
    {
      number: 100,
      title: "Happy Customers",
      icon: (
        <FaUsers className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      number: 500,
      title: "Projects Completed",
      icon: (
        <FaHandBackFist className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      number: 200,
      title: "Projects Ongoing",
      icon: (
        <FaHandHoldingHand className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      number: 50,
      title: "Awards Won",
      icon: (
        <FaAward className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
  ];

  return (
    <section className="px-4">
      {/* Upper Section */}
      <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center">
          achievements
        </h1>
        <span className="bg-[#080F3B] w-1/4 sm:w-1/6 md:w-1/12 h-[2px]"></span>
      </div>

      <div
        className="bg-black bg-opacity-50 py-8 md:py-12 lg:py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container mx-auto text-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {countArray.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#080F3B] bg-opacity-50 border border-white p-4 sm:p-6 shadow-md rounded-md"
              >
                <div className="mb-3 md:mb-4">{item.icon}</div>
                <CountUp
                  start={0}
                  end={item.number}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyDelay={500}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                />
                <p className="text-sm sm:text-base md:text-lg mt-2 font-medium text-white uppercase">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageCountSection;
