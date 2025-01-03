// src/layouts/MainLayout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import Photos from './Photos';
import About from './About';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="scroll-container">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
