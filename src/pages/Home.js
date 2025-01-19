import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/1.webp';
import image3 from '../assets/images/3.jpg';
import image16 from '../assets/images/16.jpg';
import image7 from '../assets/images/7.jpg';
import image12 from '../assets/images/12.jpg';
import image10 from '../assets/images/10.jpg';

const Home = () => {
  // Use useMemo to memoize the images array
  const images = useMemo(
    () => [image1, image7, image16, image3, image12, image10],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload all images and set isLoaded to true when done
    preloadImages(images, () => setIsLoaded(true));

    // Slideshow interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  // Preload images function
  const preloadImages = (imageArray, callback) => {
    const promises = imageArray.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(promises).then(callback);
  };

  if (!isLoaded) {
    // Loader or placeholder while images are preloading
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <h1 className="text-white text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Slideshow Section */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center p-8 transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}

      >
        <Link to='/form'>
        <h1>
          Book now ----
        </h1>
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Welcome to New Brindha Studio
        </h1>
      </div>

      {/* Sections */}
      <div>
        {/* Gallery Section */}
        <div
          className="min-h-screen flex items-center bg-cover bg-center p-8 transition-all duration-1000"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <Link to="/photos">
            <h1
              className="absolute text-3xl md:text-6xl font-mono left-5 md:left-10 transform -translate-y-1/2 hover:scale-110"
              style={{ color: '#fdf6e3' }}
            >
              Gallery
            </h1>
          </Link>
        </div>

        {/* Pricing Section */}
        <div
          className="min-h-screen flex items-center bg-cover bg-center p-8 transition-all duration-1000"
          style={{ backgroundImage: `url(${image12})` }}
        >
          <Link to="/pricing">
            <h1 className="absolute text-3xl md:text-6xl text-black left-5 md:left-10 transform -translate-y-1/2 font-mono hover:scale-110">
              Pricing
            </h1>
          </Link>
        </div>

        {/* About Section */}
        <div
          className="min-h-screen flex items-center bg-cover bg-center p-8 transition-all duration-1000"
          style={{ backgroundImage: `url(${image10})` }}
        >
          <Link to="/about">
            <h1 className="absolute text-3xl md:text-6xl text-black left-5 md:left-10 transform -translate-y-1/2 font-mono hover:scale-110">
              About
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
