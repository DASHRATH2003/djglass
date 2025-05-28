import React, { useState, useEffect, useCallback } from "react";
import bgImg from "../../../assets/Toughned-Glass-Partition/toughened_glass_parttionBG.webp";
import profileGlass1 from "../../../assets/Toughned-Glass-Partition/toughned_glass_partition1.webp";
import profileGlass2 from "../../../assets/Toughned-Glass-Partition/toughned_glass_partition2.webp";
import profileGlass3 from "../../../assets/Toughned-Glass-Partition/toughned_glass_partition3.webp";
import { FaAnglesRight } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Officeworkstation = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const imageArray = [
    {
      imageID: 1,
      imageURL: profileGlass1,
      altText: "Office cabin glass partition with aluminum frame",
    },
    {
      imageID: 2,
      imageURL: profileGlass2,
      altText: "Retail space toughened glass divider with clean lines",
    },
    {
      imageID: 3,
      imageURL: profileGlass3,
      altText: "Residential kitchen glass partition modern design",
    },
  ];

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
    if (!isGalleryOpen) {
      setTimeout(() => {
        const gallerySection = document.getElementById("gallery-section");
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const openGalleryModal = useCallback((index) => {
    setSelectedGalleryImage(index);
  }, []);

  const closeGalleryModal = useCallback(() => {
    setSelectedGalleryImage(null);
  }, []);

  const nextGalleryImage = useCallback(() => {
    setSelectedGalleryImage((prev) =>
      prev < imageArray.length - 1 ? prev + 1 : 0
    );
  }, [imageArray.length]);

  const prevGalleryImage = useCallback(() => {
    setSelectedGalleryImage((prev) =>
      prev > 0 ? prev - 1 : imageArray.length - 1
    );
  }, [imageArray.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedGalleryImage === null) return;
      if (e.key === "ArrowRight") nextGalleryImage();
      if (e.key === "ArrowLeft") prevGalleryImage();
      if (e.key === "Escape") closeGalleryModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGalleryImage, nextGalleryImage, prevGalleryImage, closeGalleryModal]);

  return (
    <main>
      <section
        className="bg-center bg-cover bg-no-repeat relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center p-4">
          <h1 className="uppercase text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
            Toughened Glass Partition Work
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Mobile Carousel */}
        <div className="lg:hidden flex justify-center h-[300px] sm:h-[400px] border-b-4">
          <Carousel
            showArrows
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className="w-full h-full"
          >
            {imageArray.map((image) => (
              <div key={image.imageID} className="h-full">
                <img
                  loading="lazy"
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
              Toughened glass partitions are the perfect blend of elegance,
              functionality, and durability, making them a popular choice for
              modern interiors in both residential and commercial spaces. At
              <strong> GlassPro Interiors</strong>, we specialize in crafting
              high-quality toughened glass partitions tailored to suit your
              specific needs and preferences.
            </p>
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold">What We Offer</h2>
                <span className="w-20 bg-black h-0.5"></span>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Strength and Durability</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Aesthetic Appeal</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Customizable Solutions</span>
                </li>
              </ul>
            </div>
            <Link to="/contact">
              <button className="mt-6 w-full sm:w-auto text-white font-medium bg-[#080F3B] px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#e99015] transition-colors">
                Book Now
              </button>
            </Link>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden lg:flex justify-end h-[400px] border-b-4">
            <Carousel
              showArrows
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              className="w-full h-full"
            >
              {imageArray.map((image) => (
                <div key={image.imageID} className="h-full">
                  <img
                    loading="lazy"
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

      {isGalleryOpen && (
        <section id="gallery-section" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-bold">Gallery</h2>
              <button onClick={toggleGallery} className="text-[#080F3B] hover:text-[#e99015]">
                <FaTimes size={24} />
              </button>
            </div>
            <span className="w-20 bg-black h-0.5"></span>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {imageArray.map((image, index) => (
                <div
                  key={image.imageID}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => openGalleryModal(index)}
                >
                  <img
                    loading="lazy"
                    src={image.imageURL}
                    alt={image.altText}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="mt-12 mb-8">
        <div className="mb-8 ml-6">
          <h1 className="text-3xl font-bold text-[#080F3B] mb-3 text-left">
            Project Gallery
          </h1>
          <div className="w-24 h-1 bg-[#e99015] mb-4"></div>
          <p>Take a look at some of our completed glass partition projects.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageArray.map((image) => (
            <div key={image.imageID} className="h-[300px] overflow-hidden rounded-lg">
              <img
                loading="lazy"
                src={image.imageURL}
                alt={image.altText}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/gallery">
            <button className="px-8 py-3 bg-[#080F3B] text-white font-medium rounded hover:bg-[#e99015] transition-colors">
              Gallery
            </button>
          </Link>
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedGalleryImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeGalleryModal}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageArray[selectedGalleryImage].imageURL}
              alt={imageArray[selectedGalleryImage].altText}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                prevGalleryImage();
              }}
            >
              &lt;
            </button>

            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                nextGalleryImage();
              }}
            >
              &gt;
            </button>

            <button
              className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeGalleryModal}
            >
              <FaTimes size={20} />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {selectedGalleryImage + 1} / {imageArray.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Officeworkstation;
