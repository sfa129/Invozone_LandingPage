import React, { useState, useEffect } from "react";

export default function ContactSection() {
  const boxData = [
    {
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/projects_completed_d436823a8f.svg",
      title: "300+",
      desc1: "Successful Projects",
    },
    {
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/success_rate_5a49ae2e35.svg",
      title: "97%",
      desc1: "Success Rate",
    },
    {
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg",
      title: "500+",
      desc1: "Developers & Engineers",
    },
    {
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/experience_330e93719a.svg",
      title: "10+",
      desc1: "Years of Experience",
    },
  ];
  return (
    <section className="relative ">
      {/* Background half white/gray and half black */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-gray-100"></div>
        <div className="h-1/2 bg-black"></div>
      </div>

      {/* Center container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 py-10 w-[85%] ">
        <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl shadow-lg p-6 lg:p-10 mt-10 border border-2 border-blue-500">

          {/* Left: Form */}
          <div className=" w-[115%] mr-5">
            <h2 className="text-4xl font-bold mb-2">Your Vision, Our Expertise</h2>
            <p className="font-bold text-black my-6">
              Submit your information to drive success forward.
            </p>

            {/* Radio buttons */}
            <div className="flex flex-wrap items-center gap-12 mb-4 text-[12px] text-black">
              {["Staff Augmentation", "Dedicated Teams", "Fixed Gigs"].map((option, idx) => (
                <label key={idx} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="service" className="accent-blue-600" />
                  {option}
                </label>
              ))}
            </div>

            {/* Input fields */}
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

            {/* Checkboxes */}
            <div className="flex justify-between">
              <div className="flex flex-wrap items-center gap-4 my-6 text-[12px] text-gray-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Get NDA
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  I agree with<a href="#" className="text-blue-600">T&Cs</a>
                </label>
              </div>

              {/* Submit Button */}
              <button className="relative flex items-center gap-2 px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 text-black hover:text-blue-600 border border-gray-400">
                <p>Send Message</p>
                <div className="px-3 py-2 -my-[5px] -mr-[18px] ml-3 rounded-full bg-blue-500">
                  <span className="transition-transform group-hover:animate-shake">➜</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Stats & Logos */}
          <div className="w-[90%] ml-17 rounded-[25px] bg-gray-100 pl-8 pt-3">
            <h2 className="text-3xl font-bold mb-8 ">Company's Stats</h2>
            <div className="grid grid-cols-2 gap-6 ">
              {boxData.map((box, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-start text-center w-40 bg-gray-100 rounded-xl"
                >
                  {/* Logo */}
                  <img
                    src={box.logo}
                    alt={box.title}
                    className="h-15 w-15 mb-4 object-contain"
                  />

                  {/* Bold word */}
                  <h3 className="text-4xl font-bold mb-2 text-left">{box.title}</h3>

                  {/* Two description lines */}
                  <p className="text-gray-600 text-[14px] text-left">{box.desc1}</p>
                </div>
              ))}
            </div>

          </div>



        </div>
      </div>
    </section>
  );
}
