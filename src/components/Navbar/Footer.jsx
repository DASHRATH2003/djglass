import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router

const Footer = () => {
  return (
    <footer className="bg-[#080F3B] text-white py-10 mt-20">
      {/* Boxed Container */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1st Column - About */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">About</h3>
          <p className="mb-2">
            DJ Glass Interiors, led by Mr. Umesh, specializes in quality office
            partitions and glass replacement. With years of experience in the industry,
            we provide premium solutions for all your interior glass and partition needs.
          </p>
          
        </div>

        {/* 2nd Column - Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="list-disc">
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="list-disc">
              <Link to="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            {/* <li className="list-disc">
              <Link to="/services" className="text-white hover:text-gray-400">
                Services
              </Link>
            </li> */}
            <li className="list-disc">
              <Link to="/gallery" className="text-white hover:text-gray-400">
                Gallery
              </Link>
            </li>
            <li className="list-disc">
              <Link to="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd Column - Contact */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 95911 81111</span>
              
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Info@djglass.in</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bengaluru, Karnataka</span>
            </li>
          </ul>
        </div>

        {/* 4th Column - Location */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Location</h3>
          <div className="rounded-md overflow-hidden shadow-lg">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12293.072665448249!2d77.6410911640136!3d12.976573573247906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15af6ef2b6b7%3A0x4e0e59974a3d0984!2sChinmaya%20Mission%20Hospital%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1648983421007!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        <p>&copy; 2024 DJ Glass Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
