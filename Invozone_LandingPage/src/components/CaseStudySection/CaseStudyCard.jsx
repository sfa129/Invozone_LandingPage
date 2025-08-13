import React from "react";

const CaseStudyCard = ({ image, tag, heading, description, logo }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">

            {/* Image */}
            <img
                src={image}
                alt={heading}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:blur-sm group-hover:brightness-50"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Tag */}
            <span className="absolute top-3 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                {tag}
            </span>
            {/* Heading */}
            <div className="absolute bottom-25 left-4 right-4 text-blue-300  z-10 transition-all duration-500 group-hover:bottom-38">
                <h3 className="font-bold text-lg">{heading}</h3>
            </div>
            {/* Title */}
            <div className="absolute bottom-4 left-4 right-4 text-white z-10 transition-all duration-500 group-hover:bottom-24">
                <h3 className="font-bold text-lg">{description}</h3>
            </div>

            {/* Hover content */}
            <div className="absolute inset-0 flex flex-col justify-end items-start text-center p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                {/* <p className="text-white text-sm mb-4">{description}</p> */}
                {logo && (
                    <img src={logo} alt="logo" className="h-5 bottom-0 object-contain" />
                )}
            </div>
        </div>
    );
};

export default CaseStudyCard;
