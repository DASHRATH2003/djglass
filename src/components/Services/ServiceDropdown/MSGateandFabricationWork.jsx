import React, { useState, useEffect, useCallback } from "react";
import bgImg from "../../../assets/MS_Gate_&_Fabrication_Works/msGate.webp";
import profileGlass1 from "../../../assets/MS_Gate_&_Fabrication_Works/1.webp";
import profileGlass2 from "../../../assets/MS_Gate_&_Fabrication_Works/2.webp";
import profileGlass3 from "../../../assets/MS_Gate_&_Fabrication_Works/3.webp";
import { FaAnglesRight } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const MSGateandFabricationWork = () => {
  // State to track if gallery is open
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  // State to track which gallery image is selected for the modal
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

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

  // Function to open gallery
  const toggleGallery = () => {
    // First set the gallery to open
    setIsGalleryOpen(true);

    // Immediately scroll to the gallery section in the next render cycle
    requestAnimationFrame(() => {
      const gallerySection = document.getElementById("gallery-section");
      if (gallerySection) {
        // Use 'auto' instead of 'smooth' for immediate scrolling
        gallerySection.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });
  };

  // Function to close gallery
  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  // Functions for gallery modal
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

  // Add keyboard event listener for gallery navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedGalleryImage === null) return;

      if (e.key === "ArrowRight") nextGalleryImage();
      if (e.key === "ArrowLeft") prevGalleryImage();
      if (e.key === "Escape") closeGalleryModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedGalleryImage,
    nextGalleryImage,
    prevGalleryImage,
    closeGalleryModal,
  ]);

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
            MS Gate and Fabrication Work
          </h1>
        </div>
      </section>

      {/* Lower Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex lg:hidden justify-center lg:justify-end h-[300px] sm:h-[400px] lg:h-full border-b-4">
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
              At DJ Glass Interiors Solutions, we offer premium Mild Steel (MS)
              Gate and Fabrication Work tailored to meet the highest standards
              of durability, functionality, and design. Whether you need a
              stylish gate for your residential property or a robust gate for a
              commercial space, we provide customized solutions to suit your
              needs.
            </p>
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold">
                  Key Features of LED Touch Sensor Mirrors
                </h2>
                <span className="w-20 bg-black h-0.5"></span>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Superior Strength and Durability</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Custom Designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Versatility in Use</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Low Maintenance</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="mt-6 w-full sm:w-auto text-white font-medium bg-[#080F3B] px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#e99015] transition-colors">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Content-based Images */}
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

      {/* Gallery Section */}
      {isGalleryOpen && (
        <section
          id="gallery-section"
          className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12"
        >
          <div className="flex flex-col gap-6 bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#080F3B]">
                Product Gallery
              </h2>
              <button
                onClick={closeGallery}
                className="text-[#080F3B] hover:text-[#e99015] transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {imageArray.map((image, index) => (
                <div
                  key={image.imageID}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                  onClick={() => openGalleryModal(index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.imageURL}
                      alt={image.altText}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm text-gray-600">
                      Click to view larger
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className="mt-12 mb-8">
        <div className="mb-8 ml-6">
          <h1 className="text-3xl font-bold text-[#080F3B] mb-3 text-left">
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-[#e99015] mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-2">
            Explore our MS Gate and Fabrication projects.
          </p>
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

            {/* Navigation Controls */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prevGalleryImage();
              }}
            >
              &lt;
            </button>

            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextGalleryImage();
              }}
            >
              &gt;
            </button>

            <button
              className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
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

export default MSGateandFabricationWork;
