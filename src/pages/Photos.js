import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import categoryImage1 from '../assets/images/3.jpg';
import categoryImage2 from '../assets/images/2.webp';
import categoryImage3 from '../assets/images/12.jpg';
import image30 from '../assets/images/15.jpg';

const Photos = () => {
  // Preload images
  useEffect(() => {
    const images = [categoryImage1, categoryImage2, categoryImage3, image30];
    images.forEach((img) => {
      const imgObj = new Image();
      imgObj.src = img;
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-4 sm:p-8"
      style={{ backgroundImage: `url(${categoryImage3})` }}
    >
      <div className="w-full bg-white bg-opacity-80 p-6 sm:p-10 flex flex-col items-center space-y-6 sm:space-y-8 mt-12 sm:mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">
          Photo Gallery
        </h1>
        <p className="text-base sm:text-xl text-center mb-2 sm:mb-4">
          Explore our stunning photo gallery showcasing our best work. Select a category to begin!
        </p>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {/* Card 1 */}
          <Link to="/wedding">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <img
                src={categoryImage1}
                alt="Category 1"
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg sm:text-2xl font-bold mb-2">Wedding</h2>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/decor">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <img
                src={categoryImage2}
                alt="Category 2"
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg sm:text-2xl font-bold mb-2">Decor</h2>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/potrait">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <img
                src={image30}
                alt="Category 3"
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg sm:text-2xl font-bold mb-2">Portraits</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Photos;
