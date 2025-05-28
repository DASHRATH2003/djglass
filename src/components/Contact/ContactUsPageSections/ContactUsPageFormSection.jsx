import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsPageFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <section className="bg-[#F3F3F3] py-10 px-5">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* <h2 className="text-2xl font-bold text-[#080F3B] mb-6">
          Get In Touch With Us
        </h2> */}
        <div className="flex flex-wrap -mx-4">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold text-[#080F3B] mb-4">
              Our Services
            </h3>
            <ul className="list-disc pl-5 text-[#080F3B]">
              <li>Profile Toughened Glass Partition Work</li>
              <li>Toughened Glass Partition Work</li>
              <li>LED Touch Sensor Mirror</li>
              <li>UPVC Windows and Doors</li>
              <li>SS Glass Railing Work</li>
              <li>Skylight Glass / Paragola Work</li>
              <li>MS Gate and Fabrication Work</li>
              <li>Spider Glazing Work</li>
              <li>Shower Glass Partition - Sliding Partition</li>
              <li>Shower Glass Partition - Openable</li>
              <li>Walk-In Shower Glass Partition</li>
              <li>Gypsum Partition Work</li>
              <li>Toughened Glass Partition Work</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#080F3B]"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#080F3B]"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#080F3B]"
                  required
                />
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#080F3B]"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <select
                  name="service"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#080F3B]"
                  required
                >
                  <option value="" disabled selected>
                    Select a Service
                  </option>
                  <option value="Profile Toughened Glass Partition Work">
                    Profile Toughened Glass Partition Work
                  </option>
                  <option value="Toughened Glass Partition Work">
                    Toughened Glass Partition Work
                  </option>
                  <option value="LED Touch Sensor Mirror">
                    LED Touch Sensor Mirror
                  </option>
                  <option value="UPVC Windows and Doors">
                    UPVC Windows and Doors
                  </option>
                  <option value="SS Glass Railing Work">
                    SS Glass Railing Work
                  </option>
                  <option value="Skylight Glass / Paragola Work">
                    Skylight Glass / Paragola Work
                  </option>
                  <option value="MS Gate and Fabrication Work">
                    MS Gate and Fabrication Work
                  </option>
                  <option value="Spider Glazing Work">
                    Spider Glazing Work
                  </option>
                  <option value="Shower Glass Partition - Sliding Partition">
                    Shower Glass Partition - Sliding Partition
                  </option>
                  <option value="Shower Glass Partition - Openable">
                    Shower Glass Partition - Openable
                  </option>
                  <option value="Walk-In Shower Glass Partition">
                    Walk-In Shower Glass Partition
                  </option>
                </select>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#080F3B]"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#080F3B]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#080F3B] text-white py-3 rounded hover:bg-[#050B30] focus:outline-none focus:ring-2 focus:ring-[#080F3B]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPageFormSection;
