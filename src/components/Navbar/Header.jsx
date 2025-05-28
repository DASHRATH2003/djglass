import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import {
  FaTwitterSquare,
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaEnvelope,
  FaMobileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const services = [
    {
      title: "Profile Toughened Glass Partition Work",
      path: "/services/profile-toughened-glass-partition-work",
    },
    {
      title: "Toughened Glass Partition Work",
      path: "/services/toughened-glass-partition-work",
    },
    {
      title: "LED Touch sensor Mirror",
      path: "/services/led-touch-sensor-mirror",
    },
    {
      title: "UPVC Windows and Doors",
      path: "/services/upvc-windows-and-doors",
    },
    { title: "SS Glass Railing Work", path: "/services/ss-glass-railing-work" },
    {
      title: "Skylight Glass / Paragola Work",
      path: "/services/skylight-glass-paragola-work",
    },
    {
      title: "MS Gate and Fabrication Work",
      path: "/services/ms-gate-and-fabrication-work",
    },
    { title: "Spider Glazing Work", path: "/services/spider-glazing-work" },
    {
      title: "Shower Glass Partition - Sliding",
      path: "/services/shower-glass-partition-sliding",
    },
    {
      title: "Shower Glass Partition - Openable",
      path: "/services/shower-glass-partition-openable",
    },
    {
      title: "Walk-In Shower Glass Partition",
      path: "/services/walk-in-shower-glass-partition",
    },
    {
      title: "Gypsum Partition Work",
      path: "/services/gypsum-partition-work",
    },
    {
      title:"Office Workstation",
      path:"/services/officeworkstation",
    },
   

  ];

  return (
    <main className="bg-[#292929]">
      <section className="py-4 container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Contact Info */}
        <div className="text-white flex flex-col md:flex-row gap-5 items-center">
          <div className="flex items-center gap-2 md:gap-5">
            <FaEnvelope />
            <h1 className="text-sm md:text-base">Info@djglass.in</h1>
          </div>
          {/* Divider */}
          <span className="hidden md:block w-[1px] h-6 bg-yellow-400"></span>
          <div className="flex items-center gap-2 md:gap-5">
            <FaMobileAlt />
            <h1 className="text-sm md:text-base">Call Us: +91 95911 81111 </h1>
          </div>
           <div className="flex items-center gap-2 md:gap-5">
            <FaMobileAlt />
            <h1 className="text-sm md:text-base">Call Us: +91 8523094900  </h1>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <FaFacebook className="fill-white w-6 h-6" />
          <FaInstagramSquare className="fill-white w-6 h-6" />
          <FaWhatsappSquare className="fill-white w-6 h-6" />
          <FaTwitterSquare className="fill-white w-6 h-6" />
        </div>
      </section>

      <header className="bg-[#080F3B] w-full  h-36">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 h-36">
            {/* Logo */}
            <figure>
              <img src={logo} alt="DJ Glasses Logo" className="h-12 md:h-28" />
            </figure>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center  space-x-8">
              <Link
                to="/"
                className="text-white hover:text-[#fea116]"
                onClick={() => setServicesOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-[#fea116]"
                onClick={() => setServicesOpen(false)}
              >
                About
              </Link>
              <div className="relative group">
                <button
                  className="text-white hover:text-[#fea116] flex items-center"
                  onClick={toggleServices}
                >
                  Services
                  <FaAngleDown
                    className={`ml-1 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/gallery"
                className="text-white hover:text-[#fea116]"
                onClick={() => setServicesOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-[#fea116]"
                onClick={() => setServicesOpen(false)}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="lg:hidden pb-4">
              <Link
                to="/"
                className="block py-2 text-white"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 text-white"
                onClick={toggleMenu}
              >
                About
              </Link>
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-white"
                  onClick={toggleServices}
                >
                  Services
                  <FaAngleDown
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block py-2 text-sm text-gray-300 hover:text-white"
                        onClick={() => {
                          setServicesOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/gallery"
                className="block py-2 text-white"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-white"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Contact Button */}
      {/* <div className="bg-[#080F3B] py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <button className="w-full md:w-auto text-black font-medium bg-[#fea116] px-8 py-3 hover:bg-[#e99015] transition-colors rounded">
            Contact
          </button>
        </div>
      </div> */}
    </main>
  );
};

export default Header;
