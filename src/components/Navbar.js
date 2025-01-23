// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false); // Close the dropdown after selection

  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-black p-4 shadow-xl z-50 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">New Brindha Studio</h1>

      {/* Language Switcher */}
      


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
          isMenuOpen ? 'flex' : 'hidden'
        } absolute top-16 left-0 right-0 flex-col items-center space-y-4 p-4 shadow-lg md:static md:flex md:flex-row md:space-y-0 md:space-x-8 md:p-0 md:shadow-none ml-52 bg-white`}
      >
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          {t('home')}
        </Link>
        <Link
          to="/photos"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          {t('gallery')}
        </Link>


        <Link
          to="/products"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          {t('products')}
        </Link>
        <div className="relative">
      {/* Globe Icon */}
      <button
        className="text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <FaGlobe />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => changeLanguage('ta')}
          >
            தமிழ்
          </button>

        </div>
      )}
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
