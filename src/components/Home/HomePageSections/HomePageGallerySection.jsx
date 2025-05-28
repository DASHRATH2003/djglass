import React, { useState } from "react";
import img1 from "../../../assets/Gallery/galleryImages/1.webp";
import img2 from "../../../assets/Gallery/galleryImages/2.webp";
import img3 from "../../../assets/Gallery/galleryImages/3.webp";
import img4 from "../../../assets/Gallery/galleryImages/4.webp";
import { Link } from "react-router-dom";

const HomePageGallerySection = () => {
  const gallery = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center">
          Gallery
        </h1>
        <span className="bg-[#080F3B] w-20 sm:w-24 md:w-32 h-[2px]"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg aspect-w-4 aspect-h-3"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <span className="text-white text-4xl">+</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-12">
        <Link to="/gallery">
          <button className="text-white font-medium bg-[#080F3B] px-6 sm:px-8 md:px-14 py-2 sm:py-3 md:py-4 hover:bg-[#e99015] transition-colors rounded-md text-sm sm:text-base">
            Explore More
          </button>
        </Link>
      </div>
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <img
              src={gallery[currentIndex]}
              alt="Selected"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomePageGallerySection;
