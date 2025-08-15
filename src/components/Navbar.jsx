import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logoSecond from "../assets/logo-second.png";
import { X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  const navLinks = [
    "What We Do",
    "Who We Serve",
    "How We Engage",
    "Hire Dev",
    "Company",
    "Careers",
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[70] px-6 py-4 flex items-center justify-between lg:justify-around transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <img
          src={isScrolled ? logoSecond : logo}
          alt="Logo"
          className="h-8 transition duration-300"
        />

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`transition-colors duration-200 
                 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-[85%]
                  ${isScrolled
                    ? "text-black hover:text-blue-600"
                    : "text-white hover:text-gray-200"
                  }`}
              >
                {link} <span className="text-lg">▾</span>
              </a>
            </li>
          ))}
          <li>
            <button
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 whitespace-nowrap ${isScrolled
                ? "text-black hover:text-blue-600 border border-gray-400 bg-white"
                : "text-white hover:text-gray-200 border border-blue-200 bg-transparent"
                }`}
            >
              <p className="text-sm sm:text-base">Contact Us</p>
              <div className="px-2 py-1 ml-2 rounded-full bg-blue-500 flex-shrink-0">
                <span className="transition-transform group-hover:animate-shake">➜</span>
              </div>
            </button>

          </li>
        </ul>

        {/* Hamburger Icon (mobile/tablet) */}
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="lg:hidden relative z-[80] focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-black" />
          ) : (
            <svg
              className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"
                }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-[60] flex flex-col p-6 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="mt-16 space-y-6 text-lg font-semibold text-gray-800">
          {navLinks.map((item) => (
            <li
              key={item}
              className="border-b border-gray-200 pb-4 flex justify-between items-center"
            >
              <a
                href="#"
                onClick={handleLinkClick}
                className="block w-full"
              >
                {item}
              </a>
              <span className="text-lg">▾</span>
            </li>
          ))}
          <li>
            <button
              className="relative flex items-center gap-2 px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 text-black hover:text-blue-600 border border-gray-400 bg-white"
            >
              <p className="text-sm sm:text-base">Contact Us</p>
              <div className="px-3 py-2 -my-[5px] -mr-[18px] ml-3 rounded-full bg-blue-500 flex-shrink-0">
                <span className="transition-transform group-hover:animate-shake">➜</span>
              </div>
            </button>
          </li>

        </ul>
      </div>
    </>
  );
};

export default Navbar;
