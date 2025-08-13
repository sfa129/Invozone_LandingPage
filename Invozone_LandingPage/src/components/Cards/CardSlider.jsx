import React, { useState, useEffect } from "react";
import { cardsData } from "./Card.jsx";

export default function CardSlider({ tabs }) {
  const [cards, setCards] = useState(cardsData);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);


  const prevSlide = () => {
    setCards((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  const nextSlide = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  // Auto sliding with pause on hover
  useEffect(() => {
    if (paused) return; // Skip if paused
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <>
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
      <section className="w-full bg-gray-100 ">
        <div className="max-w-7xl mx-auto overflow-hidden ">
          <div className="flex gap-1 transition-transform duration-700">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative pt-50 w-74 h-135 bg-white shadow-lg rounded-lg flex-shrink-0 overflow-hidden group"
                onMouseEnter={() => {
                  setHoveredCard(card.id);
                  setPaused(true);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setPaused(false);
                }}
              >
                {/* Hover image */}
                <div
                  className={`absolute inset-0 bg-gray-200 transition-all duration-1000 ${hoveredCard === card.id
                    ? "opacity-100 blur-0"
                    : "opacity-0 blur-sm"
                    }`}
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Card Title */}

                <div
                  className={`relative z-10 ml-5 mt-5 transition-colors duration-500 ${hoveredCard === card.id ? "text-white" : "text-black"
                    }`}
                >
                  <h3 className="text-3xl font-bold mb-6">{card.title}</h3>

                  {/* Points List */}
                  <ul className="space-y-3">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span
                          className={`flex items-center justify-center w-6 h-6 rounded-full font-bold transition-colors duration-500 ${hoveredCard === card.id ? "bg-white text-blue-500" : "bg-blue-500 text-white"
                            }`}
                        >
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`relative flex items-center gap-2 px-4 mt-10 ml-5 sm:px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 border ${hoveredCard === card.id
                    ? "text-white border-white hover:text-blue-200"
                    : "text-blue-500 border-blue-500 bg-white hover:text-blue-700"
                    }`}
                >
                  <p className="text-sm sm:text-base">Explore More</p>
                  <div
                    className={`px-2 sm:px-3 py-1 sm:py-2 -my-[3px] sm:-my-[5px] -mr-[12px] sm:-mr-[18px] ml-2 sm:ml-3 rounded-full transition-colors duration-200 ${hoveredCard === card.id ? "bg-blue-500" : "bg-blue-500"
                      }`}
                  >
                    <span className="transition-transform group-hover:animate-shake">➜</span>
                  </div>
                </button>


              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
