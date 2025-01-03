// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import PhotosRoutes from './pages/PhotosRoutes'; // Import category routes
import './App.css';
import Photos from './pages/Photos';
import Matrimony from './pages/Matrimony';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout Routes */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <MainLayout>
              <Pricing />
            </MainLayout>
          }
        />
        <Route
          path="/photos"
          element={
            <MainLayout>
              <Photos />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
         <Route
          path="/matrimony"
          element={
            <MainLayout>
              <Matrimony />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />
                <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />

        {/* Photo Category Routes - Open Separately */}
        <Route path="/*" element={<PhotosRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
