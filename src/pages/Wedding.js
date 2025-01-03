import React from 'react';

// Import images
import wedding1 from '../assets/images/1.webp';
import wedding2 from '../assets/images/13.jpg';
import wedding3 from '../assets/images/3.jpg';
import wedding4 from '../assets/images/4.jpg';
import wedding5 from '../assets/images/7.jpg';

const Wedding = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-5xl font-extrabold mb-8 text-pink-600">Wedding Gallery</h1>
      <p className="text-lg mb-12 text-center text-gray-700">
        A collection of timeless moments, celebrating love and elegance.
      </p>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="relative group">
          <img
            src={wedding1}
            alt="Wedding 1"
            className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="relative group">
          <img
            src={wedding2}
            alt="Wedding 2"
            className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="relative group">
          <img
            src={wedding3}
            alt="Wedding 3"
            className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="relative group">
          <img
            src={wedding4}
            alt="Wedding 4"
            className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="relative group">
          <img
            src={wedding5}
            alt="Wedding 5"
            className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Wedding;
