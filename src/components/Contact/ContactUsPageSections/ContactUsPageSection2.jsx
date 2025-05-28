import React from "react";
import ContactUsImage from "../../../assets/Contact_Us/contactAboutUs.webp";
import { FaLocationDot, FaEnvelope, FaBlenderPhone } from "react-icons/fa6";

const ContactUsPageSection2 = () => {
  return (
    <section className="py-20 bg-[#f3f3f3] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-red-600 text-xl sm:text-2xl font-bold uppercase mb-2">
                Get In Touch With Us
              </h1>
              <p className="text-sm sm:text-base">
                We are here to assist you with all your glass interior needs.
                Whether it's a question, a quote, or just some advice, feel free
                to reach out to us.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center border border-solid p-3 rounded-lg">
                <FaBlenderPhone className="bg-[#080F3B] text-white text-xl sm:text-2xl p-2 rounded-full mr-4" />
                <span className="w-px bg-gray-300 h-8 mr-4"></span>
                <p className="text-sm sm:text-base">+91 95911 81111</p>
              </div>
              <div className="flex items-center border border-solid p-3 rounded-lg">
                <FaEnvelope className="bg-[#080F3B] text-white text-xl sm:text-2xl p-2 rounded-full mr-4" />
                <span className="w-px bg-gray-300 h-8 mr-4"></span>
                <p className="text-sm sm:text-base">Info@djglass.in</p>
              </div>
              <div className="flex items-center border border-solid p-3 rounded-lg">
                <FaLocationDot className="bg-[#080F3B] text-white text-xl sm:text-2xl p-2 rounded-full mr-4 flex-shrink-0" />
                <span className="w-px bg-gray-300 h-8 mr-4"></span>
                <p className="text-sm sm:text-base">
                  43, Chinmaya Mission Hospital Rd, Stage 2, Hoysala Nagar,
                  Indiranagar, Bengaluru, Karnataka 560038
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={ContactUsImage}
              alt="Contact Us"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPageSection2;
