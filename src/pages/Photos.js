import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import categoryImage1 from '../assets/images/3.jpg';
import categoryImage2 from '../assets/images/2.webp';
import categoryImage3 from '../assets/images/12.jpg';
import image30 from '../assets/images/15.jpg';

const Photos = () => {
  const navigate = useNavigate();

  // Preload images
  useEffect(() => {
    const images = [categoryImage1, categoryImage2, categoryImage3, image30];
    images.forEach((img) => {
      const imgObj = new Image();
      imgObj.src = img;
    });
  }, []);

  // Handle category selection
  const handleCategoryClick = async (categoryName) => {
    try {
      const response = await fetch(
        `http://43.204.113.135:8000/photostudio/fileupload?id=1`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();

      // Navigate to the category page with data as state
      navigate(`/photo-details`, {
        state: { photos: data, category: categoryName },
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const categories = [
    { name: 'Baby Shower', image: categoryImage1 },
    { name: 'Puberty Function', image: categoryImage2 },
    { name: 'Consecration', image: categoryImage3 },
    { name: 'Ear Piercing Ceremony', image: image30 },
    { name: 'Tonsuring Ceremony', image: categoryImage1 },
    { name: 'House Warming Ceremony', image: categoryImage2 },
    { name: 'Wedding', image: categoryImage1 },
    { name: 'First Holy Communion', image: categoryImage3 },
    { name: 'Birthday', image: image30 },
    { name: 'Baptism', image: categoryImage2 },
    { name: 'Kovil Kodai Vila', image: categoryImage3 },
    { name: 'Name Ceremony Function', image: image30 },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-4 sm:p-8"
      
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
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg sm:text-2xl font-bold mb-2">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
