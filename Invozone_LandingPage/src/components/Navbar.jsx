import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import logoSecond from '../assets/logo-second.png';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // keep body from scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // close menu when clicking a link
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header / Nav
          Note: nav z is higher than drawer so the toggle button stays visible */}
      <nav
        className={`fixed top-0 w-full z-[70] px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <img
          src={isScrolled ? logoSecond : logo}
          alt="Logo"
          className="h-8 transition duration-300"
        />

        {/* Hamburger / Close Icon (visible on all sizes) */}
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="relative z-[80] focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-black" />
          ) : (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Slide-in Drawer
          Drawer z is lower than nav so header (and its button) remain on top */}
      <div
        id="drawer-menu"
        className={`fixed top-10 right-0 h-full w-full bg-white z-[60] flex flex-col p-6 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* (Optional close inside drawer if you want) */}
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* <X className="w-7 h-7 text-blac k" /> */}
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-6 space-y-6 text-xl font-semibold text-gray-800">
          {[
            'What We Do',
            'Who We Serve',
            'How We Engage',
            'Hire Dev',
            'Company',
            'Careers',
          ].map((item) => (
            <li
              key={item}
              className="border-b border-gray-200 pb-4 flex justify-between items-center"
            >
              <a href="#" onClick={handleLinkClick} className="block w-full">
                <span>{item}</span>
              </a>
              <span className="text-lg">▾</span>
            </li>
          ))}
        </ul>
      </div>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      
      
      
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </>
  );
};

export default Navbar;
