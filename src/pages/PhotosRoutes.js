// src/pages/PhotosRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Wedding from './Wedding';
import Decor from './Decor';
import Potrait from './Potrait';

const PhotosRoutes = () => {
  return (
    <Routes>
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/decor" element={<Decor />} />
      <Route path="/potrait" element={<Potrait />} />
    </Routes>
  );
};

export default PhotosRoutes;
