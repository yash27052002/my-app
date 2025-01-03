// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-black p-4 shadow-xl z-50 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">PHOTOSTUDIO</h1>

      {/* Hamburger Menu for Mobile */}
      <button
        className="block md:hidden text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-16 left-0 right-0 bg-white flex-col items-center space-y-4 p-4 shadow-lg md:static md:flex md:flex-row md:space-y-0 md:space-x-8 md:p-0 md:shadow-none`}
      >
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/photos"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/matrimony"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Matrimony
        </Link>
        <Link
          to="/pricing"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
