import React from 'react';
import Analog from '../assets/Analog.png';
import Artefy from '../assets/artefy.png';
import Column from '../assets/Column.png';
import FreshPrep from '../assets/freshprep.png';
import GlobalReader from '../assets/GlobalReader.png';
import Meridio from '../assets/meridio.png';
import Nymcard from '../assets/nymcard.png';
import Shield from '../assets/Shield-Republic.png';
import Stakester from '../assets/Stakester.png';
import Stitch from '../assets/stitch.png';
import { useEffect, useRef } from "react";

export default function PartnersSection() {
  const sliderRef = useRef(null);

  // Auto-scroll effect for < lg screens
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    let scrollDirection = 1; // 1 = right, -1 = left

    const autoScroll = () => {
      if (slider && window.innerWidth < 1024) {
        scrollAmount += scrollDirection * 1.5; // Speed
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollDirection = -1;
        } else if (scrollAmount <= 0) {
          scrollDirection = 1;
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(autoScroll, -20); // smooth speed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
        <div className="h-auto mt-20 w-full bg-white">
          {/* Heading */}
          <div className="flex justify-center mt-10 px-4 text-center">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg">
              <span className="text-blue-500">400+</span> Products Developed for{" "}
              <span className="text-blue-500">300+</span> Customers Across{" "}
              <span className="text-blue-500">120+</span> Countries
            </h3>
          </div>

          {/* Brands Slider */}
          <div
            ref={sliderRef}
            className="mt-15 flex gap-8 px-4 lg:px-0 overflow-x-auto lg:overflow-x-visible hide-scrollbar lg:flex-wrap lg:justify-center lg:w-2/3 lg:mx-auto"
          >
            {/* First Row */}
            <img src={Meridio} alt="Meridio" className="object-contain flex-shrink-0" />
            <img src={Column} alt="Column" className="object-contain flex-shrink-0" />
            <img src={GlobalReader} alt="GlobalReader" className="object-contain flex-shrink-0" />
            <img src={Shield} alt="Shield" className="object-contain flex-shrink-0" />
            <img src={Stakester} alt="Stakester" className="object-contain flex-shrink-0" />

            {/* Second Row */}
            <img src={Analog} alt="Analog" className="object-contain flex-shrink-0" />
            <img src={FreshPrep} alt="FreshPrep" className="object-contain flex-shrink-0" />
            <img src={Nymcard} alt="Nymcard" className="object-contain flex-shrink-0" />
            <img src={Artefy} alt="Artefy" className="object-contain flex-shrink-0" />
            <img src={Stitch} alt="Stitch" className="object-contain flex-shrink-0" />
          </div>

          {/* Divider */}
          <div className="w-[75%] h-[1px] mx-auto mt-20 bg-gray-400"></div>

          {/* Hide Scrollbar Style */}
          <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    </>
  );

}

// export default PartnersSection
