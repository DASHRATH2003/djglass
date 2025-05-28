import React, { useState, useEffect } from "react";
import partition from "../../../assets/Home_Page_Services/partition.webp";
import LED_Touch_sensor_Mirror from "../../../assets/Home_Page_Services/LED.webp";
import MS_Gate_and_Fabrication_Work from "../../../assets/Home_Page_Services/MS.webp";
import Shower_Glass_Partition_Openable from "../../../assets/Home_Page_Services/Shower.webp";
import Shower_Glass_Partition_Sliding_Partition from "../../../assets/Home_Page_Services/ShowerGlassPartition.webp";
import Skylight_Glass_Paragola_Work from "../../../assets/Home_Page_Services/SkylightGlass.webp";
import Spider_Glazing_Work from "../../../assets/Home_Page_Services/SpiderGlazingWork.webp";
import SS_Glass_Railing_Work from "../../../assets/Home_Page_Services/SSGlassRailingWork.webp";
import Toughened_Glass_Partition_Work from "../../../assets/Home_Page_Services/ToughenedGlassPartitionWork.webp";
import UPVC_Windows_and_Doors from "../../../assets/Home_Page_Services/UPVCWindowsAndDoors.webp";
import Walk_In_Shower_Glass_Partition from "../../../assets/Home_Page_Services/WalkInShowerGlassPartition.webp";
import Gypsum_Partition_Work from "../../../assets/Home_Page_Services/ToughenedGlassPartitionWork.webp"; // Temporarily using the same image
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const HomePageServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Add keyboard event listener to close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedService) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent body scrolling when modal is open
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedService]);

  const services = [
    {
      serviceID: 1,
      serviceName: "Walk-In Shower Glass Partition",
      serciceDesc:
        "A sleek and modern walk-in shower glass partition that enhances privacy while maintaining an open, spacious feel in your bathroom.",
      serviceImg: Walk_In_Shower_Glass_Partition,
      path: "/services/walk-in-shower-glass-partition",
    },
    {
      serviceID: 2,
      serviceName: "Toughened Glass Partition Work",
      serciceDesc:
        "Toughened Glass Partition Work provides durable, stylish, and safe glass dividers for modern spaces.",
      serviceImg: Toughened_Glass_Partition_Work,
      path: "/services/toughened-glass-partition-work",
    },
    {
      serviceID: 3,
      serviceName: "LED Touch sensor Mirror",
      serciceDesc:
        "LED Touch Sensor Mirrors offer convenient lighting control and a sleek, modern design for any space.",
      serviceImg: LED_Touch_sensor_Mirror,
      path: "/services/led-touch-sensor-mirror",
    },
    {
      serviceID: 4,
      serviceName: "UPVC Windows and Doors",
      serciceDesc:
        "UPVC Windows and Doors provide energy efficiency, durability, and low maintenance with a modern aesthetic.",
      serviceImg: UPVC_Windows_and_Doors,
      path: "/services/upvc-windows-and-doors",
    },
    {
      serviceID: 5,
      serviceName: "SS Glass Railing Work",
      serciceDesc:
        "SS Glass Railing work involves installing stainless steel-framed glass railings for a sleek, modern look and enhanced safety.",
      serviceImg: SS_Glass_Railing_Work,
      path: "/services/ss-glass-railing-work",
    },
    {
      serviceID: 6,
      serviceName: "Skylight Glass / Paragola Work",
      serciceDesc:
        "Skylight Glass/Paragola work involves installing glass panels in roofs to enhance light and open space.",
      serviceImg: Skylight_Glass_Paragola_Work,
      path: "/services/skylight-glass-paragola-work",
    },
    {
      serviceID: 7,
      serviceName: "Shower Glass Partition - Openable",
      serciceDesc:
        "An openable shower glass partition that combines convenience and style, allowing easy access while maintaining a sleek, modern look.",
      serviceImg: Shower_Glass_Partition_Openable,
      path: "/services/shower-glass-partition-openable",
    },
    {
      serviceID: 8,
      serviceName: "Profile Toughened Glass Partition Work",
      serciceDesc:
        "Profile Toughened Glass Partition Work offers sleek, durable glass partitions with a robust framing system for stylish and secure spaces.",
      serviceImg: partition,
      path: "/services/profile-toughened-glass-partition-work",
    },
    {
      serviceID: 9,
      serviceName: "Shower Glass Partition - Sliding Partition",
      serciceDesc:
        "A sliding shower glass partition that offers space-saving functionality and a modern aesthetic, providing smooth access while keeping the shower area enclosed.",
      serviceImg: Shower_Glass_Partition_Sliding_Partition,
      path: "/services/shower-glass-partition-sliding",
    },
    {
      serviceID: 10,
      serviceName: "MS Gate and Fabrication Work",
      serciceDesc:
        "MS Gate and Fabrication work involves designing and constructing custom gates and metal structures using mild steel, ensuring durability, security, and aesthetic appeal.",
      serviceImg: MS_Gate_and_Fabrication_Work,
      path: "/services/ms-gate-and-fabrication-work",
    },
    {
      serviceID: 11,
      serviceName: "Spider Glazing Work",
      serciceDesc:
        "Spider glazing work involves using minimal, discreet fittings to secure large glass panels, creating a sleek, modern, and unobstructed look for facades or partitions.",
      serviceImg: Spider_Glazing_Work,
      path: "/services/spider-glazing-work",
    },
    {
      serviceID: 12,
      serviceName: "Gypsum Partition Work",
      serciceDesc:
        "Gypsum partition walls are versatile, cost-effective solutions for dividing interior spaces in both residential and commercial buildings, offering quick installation and sound insulation.",
      serviceImg: Gypsum_Partition_Work,
      path: "/services/gypsum-partition-work",
    },
    {
      serviceID: 13,
      serviceName: "Office Workstation",
      serciceDesc:
        "Modern office workstations designed for productivity and comfort, featuring ergonomic layouts and premium materials to create functional and stylish work environments.",
      serviceImg: Toughened_Glass_Partition_Work, // Temporarily using the same image
      path: "/services/officeworkstation",
    },
  ];

  return (
    <section className="px-4">
      {/* Upper Section */}
      <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center">
          Our services
        </h1>
        <span className="bg-[#080F3B] w-1/4 sm:w-1/6 md:w-1/12 h-[2px]"></span>
      </div>

      {/* Lower Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.serviceID}
              className="group flex flex-col justify-start h-full border border-solid rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:shadow-2xl"
            >
              <div className="relative">
                {/* Image with Hover Animation */}
                <img
                  className="w-full h-48 object-cover rounded-t-xl transform transition duration-300 group-hover:-translate-y-2"
                  src={service.serviceImg}
                  alt={service.serviceName}
                />
                {/* Title Background */}
                <div className="flex w-full h-16 items-center justify-center bg-[#080F3B] px-2">
                  <h2 className="font-bold text-sm sm:text-base md:text-lg uppercase text-center text-white">
                    {service.serviceName}
                  </h2>
                </div>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-4 items-center mt-4 justify-center p-4">
                <span className="bg-[#080F3B] w-1/2 h-[2px]"></span>
                <div className="flex w-full">
                  <p className="text-center text-sm sm:text-base">
                    {service.serciceDesc}
                  </p>
                </div>
                {/* View More Button */}
                {service.path ? (
                  <Link to={service.path}>
                    <button
                      className="mt-4 w-full sm:w-auto text-white font-medium bg-[#080F3B] px-6 sm:px-8 py-2 sm:py-3 hover:bg-[#e99015] transition-colors rounded"
                    >
                      View More
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => openModal(service)}
                    className="mt-4 w-full sm:w-auto text-white font-medium bg-[#080F3B] px-6 sm:px-8 py-2 sm:py-3 hover:bg-[#e99015] transition-colors rounded"
                  >
                    View More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-black bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 z-10"
              onClick={closeModal}
            >
              <FaTimes size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image */}
              <div className="mb-6">
                <img
                  src={selectedService.serviceImg}
                  alt={selectedService.serviceName}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Title */}
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#080F3B]">
                  {selectedService.serviceName}
                </h2>
                <span className="block w-20 bg-[#080F3B] h-0.5 mt-2"></span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-base sm:text-lg">
                  {selectedService.serciceDesc}
                </p>
              </div>


            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomePageServices;
