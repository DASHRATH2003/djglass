import React from "react";
import bgImg from "../../../assets/Spider_Glazing_Work/spider-glass-glazing-workBG.webp";
import profileGlass1 from "../../../assets//Spider_Glazing_Work/1.webp";
import profileGlass2 from "../../../assets//Spider_Glazing_Work/2.webp";
import profileGlass3 from "../../../assets//Spider_Glazing_Work/3.webp";
import { FaAnglesRight } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const SpiderGlazingWork = () => {
  const imageArray = [
    {
      imageID: 1,
      imageURL: profileGlass1,
      altText: "Profile Toughened Glass Partition 1",
    },
    {
      imageID: 2,
      imageURL: profileGlass2,
      altText: "Profile Toughened Glass Partition 2",
    },
    {
      imageID: 3,
      imageURL: profileGlass3,
      altText: "Profile Toughened Glass Partition 3",
    },
  ];



  return (
    <main>
      <section
        className="bg-center bg-cover bg-no-repeat relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center p-4">
          <h1 className="uppercase text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
            Spider Glazing Work
          </h1>
        </div>
      </section>

      {/* Lower Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Mobile Carousal */}
        <div className="lg:hidden flex justify-center lg:justify-end h-[300px] sm:h-[400px] lg:h-full border-b-4">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            className="w-full h-full"
          >
            {imageArray.map((image) => (
              <div key={image.imageID} className="h-full">
                <img
                  src={image.imageURL}
                  alt={image.altText}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-base sm:text-lg">
              At DJ Glass Interiors Solutions, we specialize in providing Spider
              Glazing Work, a modern and sophisticated method for installing
              glass façades in commercial and residential buildings. Our spider
              glazing systems use a high-tech approach to create seamless glass
              structures that are both visually striking and highly durable,
              offering maximum transparency and minimal structural visibility.
            </p>
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold">
                  Key Features of Spider Glazing Work
                </h2>
                <span className="w-20 bg-black h-0.5"></span>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Aesthetic Appeal</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Maximum Transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Durability and Strength</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Design Flexibility</span>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/contact">
                <button className="mt-6 w-full sm:w-auto text-white font-medium bg-[#080F3B] px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#e99015] transition-colors">
                  Book Now
                </button>
              </Link>
            </div>

            {/* 3 Images with 60% height and cover styling */}
            {/* <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {imageArray.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md h-60">
                    <img
                      src={image.imageURL}
                      alt={image.altText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end h-[300px] sm:h-[400px] lg:h-full border-b-4">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              className="w-full h-full"
            >
              {imageArray.map((image) => (
                <div key={image.imageID} className="h-full">
                  <img
                    src={image.imageURL}
                    alt={image.altText}
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
       <div className="mt-12 mb-8">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-[#080F3B] mb-3">
                       Gallery
      
                      </h1>
                      <div className="w-24 h-1 bg-[#e99015] mx-auto mb-4"></div>
                    </div>
            
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="h-[300px] overflow-hidden rounded-lg">
                        <img
                          src={profileGlass1}
                          alt="Profile Toughened Glass Partition 1"
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="h-[300px] overflow-hidden rounded-lg">
                        <img
                          src={profileGlass2}
                          alt="Profile Toughened Glass Partition 2"
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="h-[300px] overflow-hidden rounded-lg">
                        <img
                          src={profileGlass3}
                          alt="Profile Toughened Glass Partition 3"
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
            
                    <div className="flex justify-center mt-8">
                      <Link to="/gallery">
                        <button className="px-8 py-3 bg-[#080F3B] text-white font-medium rounded hover:bg-[#e99015] transition-colors">
                          Gallery
                        </button>
                      </Link>
                    </div>
                  </div>

      {/* Applications Image Section */}
      {/* <section className="container mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
            <img
              src={profileGlass1}
              alt="Spider Glazing Work"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default SpiderGlazingWork;
