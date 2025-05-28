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

const OfficePartitionWork = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const imageArray = [
    { imageID: 1, imageURL: profileGlass1, altText: "Office Partition Work 1" },
    { imageID: 2, imageURL: profileGlass2, altText: "Office Partition Work 2" },
    { imageID: 3, imageURL: profileGlass3, altText: "Office Partition Work 3" },
  ];

  const application = [
    {
      appID: 1,
      appName: "Corporate Offices",
      appDesc: "Executive cabins and conference rooms",
      appImage: profileGlass1,
    },
    {
      appID: 2,
      appName: "Co-working Spaces",
      appDesc: "Modern collaborative workspaces",
      appImage: profileGlass2,
    },
    {
      appID: 3,
      appName: "Reception Areas",
      appDesc: "Professional front office and reception spaces",
      appImage: profileGlass3,
    },
    {
      appID: 4,
      appName: "Meeting Rooms",
      appDesc: "Private meeting rooms and discussion areas",
      appImage: profileGlass1,
    },
  ];

  const toggleAppSelection = (appID) => {
    setSelectedApp(appID === selectedApp ? null : appID);
    setTimeout(() => {
      const section = document.getElementById("app-image-section");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

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
            Office Partition Work
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="lg:hidden h-[300px] sm:h-[400px] border-b-4">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
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
              Modern office partitions create functional, stylish workspaces that enhance productivity and aesthetics...
            </p>

            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold">What We Offer</h2>
                <span className="w-20 bg-black h-0.5"></span>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1" />
                  <span>Professional Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1" />
                  <span>Acoustic Privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1" />
                  <span>Modular Solutions</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="mt-6 w-full sm:w-auto text-white font-medium bg-[#080F3B] px-6 py-3 hover:bg-[#e99015] transition-colors">
                  Book Now
                </button>
              </Link>
              <button onClick={toggleGallery} className="mt-6 w-full sm:w-auto border border-[#080F3B] px-6 py-3 hover:bg-[#e99015]">
                Toggle Gallery
              </button>
            </div>
          </div>

          <div className="hidden lg:flex h-[300px] sm:h-[400px] border-b-4">
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
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

      {/* Selected Application Section */}
      {selectedApp && (
        <section id="app-image-section" className="mt-10 container mx-auto px-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-2xl font-semibold">{application[selectedApp - 1].appName}</h3>
            <p className="mt-2">{application[selectedApp - 1].appDesc}</p>
            <img
              loading="lazy"
              src={application[selectedApp - 1].appImage}
              alt={application[selectedApp - 1].appName}
              className="mt-4 rounded-lg object-cover h-64 w-full"
            />
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {isGalleryOpen && (
        <section id="gallery-section" className="container mx-auto px-4 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Gallery</h2>
            <button onClick={toggleGallery} className="text-[#080F3B] hover:text-[#e99015]">
              <FaTimes size={24} />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {imageArray.map((image, index) => (
              <div
                key={image.imageID}
                className="cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg"
                onClick={() => openGalleryModal(index)}
              >
                <img
                  loading="lazy"
                  src={image.imageURL}
                  alt={image.altText}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Project Gallery Static */}
      <section className="container mx-auto px-4 mt-12 mb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#080F3B] mb-3">Project Gallery</h1>
          <div className="w-24 h-1 bg-[#e99015] mb-4"></div>
          <p>Take a look at some of our completed office partition projects.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageArray.map((img) => (
            <div key={img.imageID} className="h-[300px] overflow-hidden rounded-lg">
              <img
                loading="lazy"
                src={img.imageURL}
                alt={img.altText}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/gallery">
            <button className="px-8 py-3 bg-[#080F3B] text-white font-medium rounded hover:bg-[#e99015]">
              View Full Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* Modal */}
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
            <button onClick={(e) => { e.stopPropagation(); prevGalleryImage(); }} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center">
              &lt;
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextGalleryImage(); }} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center">
              &gt;
            </button>
            <button onClick={closeGalleryModal} className="absolute top-4 right-4 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center">
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

export default OfficePartitionWork;
