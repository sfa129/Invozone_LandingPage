import React, { useState, useEffect, useRef } from "react";

export default function TabSection({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto p-15 bg-gray-100 rounded-[25px]">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-6 mb-10 border-b">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`pb-2 px-23 font-semibold text-lg transition-all ${activeIndex === index
                                ? "text-blue-500 border-b-2 border-blue-500"
                                : "text-gray-600 hover:text-blue-500"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Left: Description */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">{tabs[activeIndex].heading}</h2>
                        <p className="text-gray-600 mb-6">{tabs[activeIndex].description}</p>

                        <ul className="space-y-3 mb-6">
                            {tabs[activeIndex].points.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold">
                                        ✓
                                    </span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>


                        <a
                            href={tabs[activeIndex].ctaLink}
                            className="inline-flex items-center gap-2 px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                        >
                            {tabs[activeIndex].ctaText}
                            <span>➜</span>
                        </a>
                    </div>

                    {/* Right: Video */}
            
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
                            <video
                                className="w-full h-64 sm:h-80 md:h-[350px] border-none outline-none"
                                src={tabs[activeIndex].videoUrl} 
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
