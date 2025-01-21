import React from "react";
import { useLocation } from "react-router-dom";

const PhotoDetails = () => {
  const location = useLocation();
  const { photos, category } = location.state || {};

  if (!photos || photos.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">
          No photos available. Please go back and select a category.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-14">
      <h1 className="text-3xl font-bold text-center mb-6">{category} Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={`data:image/png;base64,${photo.file_base64}`} // Convert base64 to image
              alt={photo.filename}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-center font-medium text-gray-700">
                {photo.filename}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoDetails;
