import React, { useState, useEffect } from "react";
import { cardsData } from "./Card.jsx";

export default function CardSlider() {
  const [cards, setCards] = useState(cardsData);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Infinite loop slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="flex gap-6 transition-transform duration-700">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative w-64 h-40 bg-white shadow-lg rounded-lg flex-shrink-0 overflow-hidden group"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover image */}
              <div
                className={`absolute inset-0 bg-gray-200 transition-all duration-1000 ${
                  hoveredCard === card.id
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
              <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-lg font-bold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
