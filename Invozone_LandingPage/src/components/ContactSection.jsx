import React, { useState, useEffect } from "react";

export default function ContactSection() {
  const boxData = [
    {
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/projects_completed_d436823a8f.svg",
      title: "300+",
      desc1: "Successful Projects",
      sliderLogo:
        "https://invozone.com/static/top_developers_2021-dd23c99461906b1c45b32e53a654c846.svg",
    },
    {
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/success_rate_5a49ae2e35.svg",
      title: "97%",
      desc1: "Success Rate",
      sliderLogo:
        "https://invozone.com/static/design_rush_best_ar_vr_agency-9dafbc7d12a5020f1e21c448e6dc75fe.svg",
    },
    {
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg",
      title: "500+",
      desc1: "Developers & Engineers",
      sliderLogo:
        "https://invozone.com/static/fastest_growing_app_development_company_2021-988b8e06a4ca171178eb147dc7aa5a67.svg",
    },
    {
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/experience_330e93719a.svg",
      title: "10+",
      desc1: "Years of Experience",
      sliderLogo:
        "https://invozone.com/static/superb_company_in_2023-46c0b277a82d8f2079ec135b287577c7.svg",
    },
  ];

  const sliderLogos = boxData.map((item) => item.sliderLogo);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (sliderLogos.length > 3) {
      const interval = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % sliderLogos.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [sliderLogos.length]);

  const visibleLogos = [
    sliderLogos[startIndex],
    sliderLogos[(startIndex + 1) % sliderLogos.length],
    sliderLogos[(startIndex + 2) % sliderLogos.length],
  ];

  return (
    <section className="relative">
      {/* Half white/gray and half black background */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-gray-100"></div>
        <div className="h-1/2 bg-[#0D1326]"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl shadow-lg p-6 lg:p-10 border-2 border-blue-500">

          {/* Left: Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Your Vision, Our Expertise</h2>
            <p className="font-semibold text-black my-6">
              Submit your information to drive success forward.
            </p>

            {/* Radio buttons */}
            <div className="flex flex-wrap gap-6 mb-4 text-sm text-black">
              {["Staff Augmentation", "Dedicated Teams", "Fixed Gigs"].map((option, idx) => (
                <label key={idx} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="service" className="accent-blue-600" />
                  {option}
                </label>
              ))}
            </div>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full name*"
                className="border border-gray-400 rounded-lg px-3 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="border border-gray-400 rounded-lg px-3 py-2 w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email*"
              className="border border-gray-400 rounded-lg px-3 py-2 w-full mb-4"
            />
            <input
              type="text"
              placeholder="Enter your preferred tech stack..."
              className="border border-gray-400 rounded-lg px-3 py-2 w-full mb-4"
            />
            <textarea
              placeholder="Tell us how we can help.*"
              rows="4"
              className="border border-gray-400 rounded-lg px-3 py-2 w-full mb-4"
            ></textarea>

            {/* Checkboxes & Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Get NDA
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  I agree with
                  <a href="#" className="text-blue-600">T&Cs</a>
                </label>
              </div>

              <button className="flex items-center gap-2 px-5 py-2 w-[190px] rounded-full font-medium transition-colors duration-200 text-black hover:text-blue-600 border border-gray-400">
                <p>Send Message</p>
                <div className="px-3 py-2 -my-[5px] -mr-[18px] ml-3 rounded-full bg-blue-500">
                  <span className="transition-transform group-hover:translate-x-1">➜</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Stats & Logos */}
          <div className="bg-gray-100 rounded-[25px] p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Company's Stats</h2>
            <div className="grid grid-cols-2 gap-6">
              {boxData.map((box, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start" 
                >
                  <img
                    src={box.logo}
                    alt={box.title}
                    className="h-12 mb-4 object-contain"
                  />
                  <h3 className="text-3xl sm:text-4xl font-bold mb-1">{box.title}</h3>
                  <p className="text-gray-600 text-sm">{box.desc1}</p>
                </div>
              ))}

            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-400 my-8"></div>

            {/* Slider */}
            <div className="flex justify-center items-center gap-12 lg:gap-4  overflow-hidden">
              {visibleLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center bg-white rounded-full p-4 shadow-lg w-20 h-20 sm:w-24 sm:h-24"
                >
                  <img
                    src={logo}
                    alt={`slider logo ${idx}`}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
