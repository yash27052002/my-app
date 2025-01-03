import React from 'react';
import { Link } from 'react-router-dom';
import categoryImage1 from '../assets/images/3.jpg';
import categoryImage2 from '../assets/images/2.webp';
import categoryImage3 from '../assets/images/12.jpg';
import image30 from '../assets/images/15.jpg'

const Photos = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-8 "
      style={{ backgroundImage: `url(${categoryImage3})` }}
    >
      <div className="w-full bg-white bg-opacity-80 p-10 flex flex-col items-center space-y-8 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
        <p className="text-xl text-center mb-4">
          Explore our stunning photo gallery showcasing our best work. Select a category to begin!
        </p>

        {/* Card Container */}
        <div className="flex space-x-8 justify-center w-full">
          {/* Card 1 */}
          <Link to="/wedding">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 h-96 hover:scale-110 transform transition-transform duration-300 ease-in-out">
              <img
                src={categoryImage1}
                alt="Category 1"
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Wedding</h2>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/decor">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 h-96 hover:scale-110 transform transition-transform duration-300 ease-in-out">
              <img
                src={categoryImage2}
                alt="Category 2"
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Decor</h2>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/potrait">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 h-96 hover:scale-110 transform transition-transform duration-300 ease-in-out">
              <img
                src={image30}
                alt="Category 3"
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Potraits</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Photos;
