import React from "react";

const HomeOurProcess = () => {
  const Process = [
    { id: 1, step: "Reach Us" },
    { id: 2, step: "Discussion about requirement" },
    { id: 3, step: "Give us rough measurement" },
    { id: 4, step: "Presenting Design & Ideas" },
    { id: 5, step: "Sharing Quote" },
    { id: 6, step: "Contract and Payment" },
    { id: 7, step: "On Site Visit for Final Measurement" },
    { id: 8, step: "Start Working on Project" },
    { id: 9, step: "Finish of Work" },
  ];

  return (
    <section className="bg-[#F9FAFB]  px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#080F3B] mb-8 sm:mb-12">
          Our Process
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start md:items-center">
          {/* Left Section: Content/Description */}
          <div className="text-[#080F3B] space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold">How We Work</h3>
            <p className="text-base sm:text-lg">
              We follow a well-structured process to ensure your satisfaction.
              From the first contact to the final finish, we guide you through
              every step.
            </p>
            <p className="text-base sm:text-lg">
              Our approach is designed to provide transparency, efficiency, and
              top-notch results tailored to your unique requirements.
            </p>
          </div>

          {/* Right Section: Steps in a Timeline */}
          <div className="relative mt-8 md:mt-0">
            <div className="border-l-2 sm:border-l-4 border-[#080F3B] pl-4 sm:pl-6">
              {Process.map((item) => (
                <div key={item.id} className="relative mb-6 sm:mb-8">
                  {/* Step Number */}
                  <div className="absolute -left-6 sm:-left-8 w-8 h-8 sm:w-10 sm:h-10 bg-[#080F3B] text-white flex items-center justify-center rounded-full text-sm sm:text-base">
                    {item.id}
                  </div>
                  {/* Step Description */}
                  <div className="ml-4 sm:ml-6">
                    <h4 className="text-base sm:text-lg font-semibold">
                      {item.step}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOurProcess;
