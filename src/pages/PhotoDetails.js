import React from 'react';
import { useParams } from 'react-router-dom';

const PhotoDetails = () => {
  const { category, photoId } = useParams();

  return (
    <div id="photo-details">
      <h2>Photo Details</h2>
      <p>Category: {category}</p>
      <p>Photo ID: {photoId}</p>
      <img
        src={`/assets/images/${category}/${photoId}.jpg`}
        alt={`Details for ${photoId}`}
      />
    </div>
  );
};

export default PhotoDetails;
