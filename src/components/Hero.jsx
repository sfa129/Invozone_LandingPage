// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import videoSrc from "../assets/video.mp4"; // adjust path

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-16 text-white"
      >
        {/* Tag */}
        <span className="inline-block border border-white px-3 py-1 rounded-full text-sm mb-4">
          Software Development Consulting
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight max-w-3xl mb-4">
          Future–Driven Innovations.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
          Fostering Growth For Startups, Enterprises, And Innovators.
        </p>

        {/* Simple Button */}
        <a
          href="#next-section"
          className="flex items-center gap-2 px-5 py-3 bg-white text-blue-600 font-medium rounded-full shadow hover:bg-blue-50 transition-transform hover:-translate-y-1 duration-300"
        >
          <img
            src="https://invozone-backend.s3.us-east-1.amazonaws.com/claendly_8606ad6fd7.svg"
            alt="Calendly"
            className="h-6 w-6"
          />
          Book a 15 min Call
        </a>
      </motion.div>
    </section>
  );
}
