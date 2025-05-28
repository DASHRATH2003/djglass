import React from "react";
import VisionMission from "../../../assets/About_Us/vision_and_mission.webp";
import { FaEye, FaHandHoldingHand } from "react-icons/fa6";

const AboutUsMissionVision = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="flex justify-center items-center">
            <img
              src={VisionMission}
              alt="Vision and Mission"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-[#080F3B] rounded-2xl text-white px-6 py-8 md:px-10 md:py-10 flex flex-col gap-3 shadow-2xl">
            <FaEye className="text-[32px] md:text-[40px]" />
            <h2 className="text-2xl md:text-3xl font-bold uppercase">
              Our Vision
            </h2>
            <p className="text-base md:text-lg">
              To redefine spaces with innovative glass solutions, combining
              quality craftsmanship and modern design to create functional and
              aesthetic environments.
            </p>
          </div>
          <div className="bg-[#080F3B] text-white rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col gap-3 shadow-2xl">
            <FaHandHoldingHand className="text-[32px] md:text-[40px]" />
            <h2 className="text-2xl md:text-3xl font-bold uppercase">
              Our Mission
            </h2>
            <p className="text-base md:text-lg">
              To deliver exceptional glass interior solutions with a commitment
              to quality, affordability, and customer satisfaction, transforming
              spaces with precision and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMissionVision;
