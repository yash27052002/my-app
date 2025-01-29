import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import image1 from '../assets/images/1.webp';
import image3 from '../assets/images/3.jpg';
import image16 from '../assets/images/16.jpg';
import image7 from '../assets/images/7.jpg';
import image12 from '../assets/images/12.jpg';
import image10 from '../assets/images/10.jpg';

// Import frame images
import frame1 from '../assets/images/frame1.JPG';
import frame2 from '../assets/images/frame2.JPG';
import frame3 from '../assets/images/frame3.JPG';
import frame4 from '../assets/images/frame4.JPG';
import frame5 from '../assets/images/frame5.JPG';
import frame6 from '../assets/images/frame6.JPG';
import frame7 from '../assets/images/frame7.JPG';
import frame8 from '../assets/images/frame8.JPG';
import frame9 from '../assets/images/frame9.JPG';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const images = useMemo(() => [image1, image7, image16, image3, image12, image10], []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFrameModalOpen, setIsFrameModalOpen] = useState(false); // State for frame modal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    eventType: '',
  });
  const [frameFormData, setFrameFormData] = useState({
    frameSize: '',
    photos: [],
    selectedFrame: null,
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
    { name: t("categories.others") },
  ];
  const [uploadedImages, setUploadedImages] = useState([]);


  const frameSizes = ['Small', 'Medium', 'Large']; // Available frame sizes
  const frameOptions = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9]; // Use imported frame images

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

  const handleFrameInputChange = (e) => {
    const { name, value } = e.target;
    setFrameFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const removeImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };
  

  const handleFrameSelection = (frame) => {
    setFrameFormData((prevData) => ({ ...prevData, selectedFrame: frame }));
  };

  const handlePhotoUpload = (e) => {
  const files = Array.from(e.target.files);
  const imageUrls = files.map((file) => URL.createObjectURL(file));
  setUploadedImages(imageUrls);
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
        alert(t('slotBookedSuccess'));
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '', eventDate: '', eventTime: '', eventType: '' });
      } else {
        throw new Error(t('failedToBookSlot'));
      }
    } catch (err) {
      setError(err.message || t('error'));
    } finally {
      setLoading(false);
    }
  };

  const handleFrameFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate form submission (replace with actual API call)
      console.log('Frame Form Data:', frameFormData);
      alert(t('frameSelectionSuccess')); // Add a translation key for success
      setIsFrameModalOpen(false);
      setFrameFormData({ frameSize: '', photos: [], selectedFrame: null });
    } catch (err) {
      setError(err.message || t('error'));
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
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black text-xl font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            {t('bookSlot')}
          </button>
          <button
            onClick={() => setIsFrameModalOpen(true)}
            className="bg-white text-black text-xl font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            {t('photoFrames')}
          </button>
          <Link to='/photos'>
          <button className="bg-white text-black text-xl font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Gallery
          </button>
          </Link>
        </div>
      </div>


      {/* Book Slot Modal */}
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
                <label className="block text-gray-700">{t('formLabels.name')}</label>
                <input
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
                    {t('formLabels.selectEventType')}
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
                  className={`w-28 py-2 text-black rounded-2xl border-2 ${
                    loading ? 'bg-gray-400' : 'hover:bg-white'
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

      {/* Photo Frames Modal */}
      {isFrameModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={() => setIsFrameModalOpen(false)}
  >
    <div
      className="bg-slate-300 rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setIsFrameModalOpen(false)}
        className="text-black text-lg font-bold float-right mb-4"
      >
        ✖
      </button>
      <form onSubmit={handleFrameFormSubmit}>
        <h2 className="text-2xl font-semibold text-center mb-6">{t('photoFramesFormTitle')}</h2>
        <div className="mb-4">
          <label className="block text-gray-700">{t('formLabels.frameSize')}</label>
          <select
            name="frameSize"
            value={frameFormData.frameSize}
            onChange={handleFrameInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="" disabled>
              {t('selectFrameSize')}
            </option>
            {frameSizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">{t('formLabels.uploadPhotos')}</label>
          <input
            type="file"
            name="photos"
            onChange={handlePhotoUpload}
            className="w-full px-4 py-2 border rounded-lg"
            multiple
            accept="image/*"
            required
          />
        </div>
        {/* Image Preview Section */}
        {uploadedImages.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('formLabels.previewPhotos')}</label>
            <div className="grid grid-cols-3 gap-4">
              {uploadedImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-xs"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">{t('formLabels.selectFrame')}</label>
          <div className="grid grid-cols-3 gap-4">
            {frameOptions.map((frame, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 ${
                  frameFormData.selectedFrame === frame ? 'border-blue-500' : 'border-gray-300'
                } rounded-lg p-2`}
                onClick={() => handleFrameSelection(frame)}
              >
                <img
                  src={frame}
                  alt={`Frame ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={`w-28 py-2 text-black rounded-2xl border-2 ${
              loading ? 'bg-gray-400' : 'hover:bg-white'
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