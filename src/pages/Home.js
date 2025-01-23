import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import image1 from '../assets/images/1.webp';
import image3 from '../assets/images/3.jpg';
import image16 from '../assets/images/16.jpg';
import image7 from '../assets/images/7.jpg';
import image12 from '../assets/images/12.jpg';
import image10 from '../assets/images/10.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const images = useMemo(() => [image1, image7, image16, image3, image12, image10], []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    eventType: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const categories = [
    { name: t("categories.babyShower") },
    { name: t("categories.pubertyFunction") },
    { name: t("categories.consecration") },
    { name: t("categories.earPiercingCeremony") },
    { name: t("categories.tonsuringCeremony") },
    { name: t("categories.houseWarmingCeremony") },
    { name: t("categories.wedding") },
    { name: t("categories.firstHolyCommunion") },
    { name: t("categories.birthday") },
    { name: t("categories.baptism") },
    { name: t("categories.kovilKodaiVila") },
    { name: t("categories.nameCeremonyFunction") },
    { name: t("categories.others") }, // Adding "Others" at the end
  ];

  useEffect(() => {
    preloadImages(images, () => setIsLoaded(true));

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const rawData = {
        name: formData.name,
        contact: formData.phone,
        event_date: formData.eventDate,
        event_time: formData.eventTime,
        event_type: formData.eventType,
      };

      const response = await axios.post(
        'http://43.204.113.135:8000/photostudio/eventform',
        JSON.stringify(rawData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        alert(t('slotBookedSuccess')); // Add a new translation key for success
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '', eventDate: '', eventTime: '', eventType: '' });
      } else {
        throw new Error(t('failedToBookSlot')); // Add a new translation key for failure
      }
    } catch (err) {
      setError(err.message || t('error')); // Use error key for dynamic error message
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <h1 className="text-white text-3xl font-bold">{t('loading')}</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Slideshow Section */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center p-8 transition-all duration-1000 relative"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          {t('welcomeText')}
        </h1>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black text-xl font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            {t('bookSlot')}
          </button>
        </div>
      </div>
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
              {t('galleryLinkText')}
            </h1>
          </Link>
        </div>

        {/* Pricing Section */}
        <div
          className="min-h-screen flex items-center bg-cover bg-center p-8 transition-all duration-1000"
          style={{ backgroundImage: `url(${image12})` }}
        >
          <Link to="/product">
            <h1 className="absolute text-3xl md:text-6xl text-black left-5 md:left-10 transform -translate-y-1/2 font-mono hover:scale-110">
              {t('productLinkText')}
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
              {t('aboutLinkText')}
            </h1>
          </Link>
        </div>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-slate-300 rounded-lg p-6 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-black text-lg font-bold float-right mb-4"
            >
              ✖
            </button>
            <form onSubmit={handleFormSubmit}>
              <h2 className="text-2xl font-semibold text-center mb-6">{t('bookSlotFormTitle')}</h2>
              <div className="mb-4">
              <label className="block text-gray-700">
          {t("formLabels.name")} {/* Dynamically translate the 'name' label */}
        </label>                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">{t('formLabels.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">{t('formLabels.eventDate')}</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
  <label className="block text-gray-700">{t('formLabels.eventTime')}</label>
  <input
    type="time"
    name="eventTime"
    value={formData.eventTime}
    onChange={handleInputChange}
    className="w-full px-4 py-2 border rounded-lg shadow-inner"
    required
  />
</div>

              <div className="mb-4">
      <label className="block text-gray-700">{t('formLabels.eventType')}</label>
      <select
        name="eventType"
        value={formData.eventType}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-lg"
        required
      >
        <option value="" disabled>
          {t("formLabels.selectEventType")}
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="flex justify-center items-center">
  <button
    type="submit"
    className={`w-28 py-2 text-black rounded-2xl border-2 t ${
      loading ? 'bg-gray-400' : ' hover:bg-white'
    } border-black shadow-2xl hover:shadow-2xl`}
    disabled={loading}
  >
    {loading ? t('submitting') : t('submitBtn')}
  </button>
</div>


            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
