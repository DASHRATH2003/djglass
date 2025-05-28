import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import slide1 from "../../../assets/Home_Page_Banners/newimage1.jpg";
import slide2 from "../../../assets/Home_Page_Banners/newimage2.avif";
import slide3 from "../../../assets/Home_Page_Banners/newimage3.avif";
import slide4 from "../../../assets/Home_Page_Banners/newimage4.avif";
import slide5 from "../../../assets/Home_Page_Banners/slide5.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Component
const SampleArrow = ({ className, style, onClick, icon: Icon }) => (
  <div
    className={`${className} custom-arrow`}
    style={{
      ...style,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1000, // Ensure it appears above other elements
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <Icon size={30} color="white" />
  </div>
);

SampleArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  icon: PropTypes.elementType.isRequired
};

const HomeBannerSection = () => {
  const images = [
    { slide: slide3, title: "Shaping transparency, crafting durability." },
    { slide: slide1, title: "Where innovation meets clarity." },
    { slide: slide2, title: "Quality glass for every vision." },
    {
      slide: slide4,
      title: "Strength in every pane, brilliance in every design.",
    },
    { slide: slide5, title: "Crafting the future of glass, today." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleArrow icon={FaArrowRight} />,
    prevArrow: <SampleArrow icon={FaArrowLeft} />,
  };

  return (
    <div className="overflow-hidden relative">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-[50vh] md:h-[70vh] object-cover"
              src={item.slide}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold">
                {item.title}
              </h1>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Link to="/contact">
                  <button className="mt-10 hidden md:block md:w-auto text-black font-medium bg-[#fea116] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBannerSection;



