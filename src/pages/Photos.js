import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import categoryImage1 from '../assets/images/3.jpg';
import categoryImage2 from '../assets/images/2.webp';
import categoryImage3 from '../assets/images/12.jpg';
import image30 from '../assets/images/15.jpg';
import { useTranslation } from 'react-i18next';

const Photos = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Preload images
  useEffect(() => {
    const images = [categoryImage1, categoryImage2, categoryImage3, image30];
    images.forEach((img) => {
      const imgObj = new Image();
      imgObj.src = img;
    });
  }, []);

  // English names for categories
  const englishCategoryNames = {
    babyShower: "BABY SHOWER",
    pubertyFunction: "PUBERTY FUNCTION",
    consecration: "CONSECRATION",
    earPiercingCeremony: "EAR PIERCING CEREMONY",
    tonsuringCeremony: "TONSURING CEREMONY",
    houseWarmingCeremony: "HOUSE WARMING CEREMONY",
    wedding: "WEDDING",
    firstHolyCommunion: "FIRST HOLY COMMUNION",
    birthday: "BIRTHDAY",
    baptism: "BAPTISM",
    kovilKodaiVila: "KOVIL KODAI VILA",
    nameCeremonyFunction: "NAME CEREMONY FUNCTION"
  };
  

  // Handle category selection
  const handleCategoryClick = async (categoryName) => {
    // Translate category name to English using the predefined English names
    const englishCategoryName = Object.keys(englishCategoryNames).find(
      (key) => t(`categories.${key}`) === categoryName
    );

    // If category name is found, use the English name, otherwise fallback to categoryName
    const englishName = englishCategoryName ? englishCategoryNames[englishCategoryName] : categoryName;
    console.log("Category selected:", englishName);

    try {
      const response = await fetch(
        `http://43.204.113.135:8000/photostudio/user/fileupload?category=${englishName}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();

      // Navigate to the category page with data as state
      navigate(`/photo-details`, {
        state: { photos: data, category: englishName },
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const categories = [
    { name: t('categories.babyShower'), image: image30 },
    { name: t('categories.pubertyFunction'), image: categoryImage2 },
    { name: t('categories.consecration'), image: categoryImage3 },
    { name: t('categories.earPiercingCeremony'), image: categoryImage1 },
    { name: t('categories.tonsuringCeremony'), image: categoryImage1 },
    { name: t('categories.houseWarmingCeremony'), image: categoryImage2 },
    { name: t('categories.wedding'), image: categoryImage1 },
    { name: t('categories.firstHolyCommunion'), image: categoryImage3 },
    { name: t('categories.birthday'), image: image30 },
    { name: t('categories.baptism'), image: categoryImage2 },
    { name: t('categories.kovilKodaiVila'), image: categoryImage3 },
    { name: t('categories.nameCeremonyFunction'), image: image30 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-4 sm:p-8">
      <div className="w-full bg-white bg-opacity-80 p-6 sm:p-10 flex flex-col items-center space-y-6 sm:space-y-8 mt-12 sm:mt-16">
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
