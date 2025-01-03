// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white  text-black p-4 shadow-xl z-50 flex justify-between items-center">
      <h1 className="text-2xl font-bold ">PHOTOSTUDIO</h1>

      <div className="flex space-x-8">
        {/* Home Link */}


        {/* Photo Categories Dropdown */}
        <div className="group relative">

          
        </div>

        {/* Pricing Link */}
        <Link to="/" className="hover:text-blue-500 transition-colors duration-300">
          Home
        </Link>
        <Link to="/photos" className="hover:text-blue-500 transition-colors duration-300">
          Gallery
        </Link>
        <Link to="/matrimony" className="hover:text-blue-500 transition-colors duration-300">
          Matrimony
        </Link>
        <Link to="/pricing" className="hover:text-blue-500 transition-colors duration-300">
          Pricing
        </Link>

        {/* About Link */}
        <Link to="/about" className="hover:text-blue-500 transition-colors duration-300">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
