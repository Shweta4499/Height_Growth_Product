import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Height Growth Formula</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#hero" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#benefits" className="hover:text-yellow-400 transition">Benefits</a></li>
          <li><a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a></li>
          <li><a href="#pricing" className="hover:text-yellow-400 transition">Pricing</a></li>
          <li><a href="#faq" className="hover:text-yellow-400 transition">FAQ</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 text-white px-6 pb-4 space-y-2 font-medium">
          <li><a href="#hero" onClick={toggleMenu} className="block hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="block hover:text-yellow-400 transition">About</a></li>
          <li><a href="#benefits" onClick={toggleMenu} className="block hover:text-yellow-400 transition">Benefits</a></li>
          <li><a href="#testimonials" onClick={toggleMenu} className="block hover:text-yellow-400 transition">Testimonials</a></li>
          <li><a href="#pricing" onClick={toggleMenu} className="block hover:text-yellow-400 transition">Pricing</a></li>
          <li><a href="#faq" onClick={toggleMenu} className="block hover:text-yellow-400 transition">FAQ</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
