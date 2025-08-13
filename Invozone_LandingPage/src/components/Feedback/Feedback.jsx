import React, { useState } from "react";


export default function FeedbackSection({ title, highlight, feedbacks }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
          {title} <span className="text-blue-500">{highlight}</span> Stories
        </h2>

        {/* Arrows */}
        <div className="flex justify-end mb-6 space-x-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            →
          </button>
        </div>

        {/* Feedback Card */}
        <div className="flex flex-col md:flex-row items-center gap-8 transition-all duration-500">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={
                  typeof feedbacks[current].img === "string"
                    ? feedbacks[current].img
                    : feedbacks[current].img.default // for imported images
                }
                alt={feedbacks[current].name}
                className="w-full h-auto object-cover"
              />

              {/* Play button positioned at bottom-left */}
              <button className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-md">
                ▶ Play Video
              </button>
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2">
            <span className="inline-block px-2 py-1 bg-black text-white text-sm rounded">
              {feedbacks[current].company}
            </span>
            <h3 className="mt-4 text-2xl font-bold">
              {feedbacks[current].name.split(" ")[0]}{" "}
              <span className="text-blue-500">
                {feedbacks[current].name.split(" ")[1]}
              </span>
            </h3>
            <p className="text-gray-600 mb-4">{feedbacks[current].title}</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {feedbacks[current].feedback}
            </p>
            <a
              href={feedbacks[current].caseStudyLink}
              className="text-blue-500 font-semibold hover:underline"
            >
              View Case Study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
