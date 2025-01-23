import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import PhotosRoutes from './pages/PhotosRoutes';
import Photos from './pages/Photos';
import Matrimony from './pages/Matrimony';
import Register from './pages/Register';
import Login from './pages/Login';
import Form from './pages/Form';
import PhotoDetails from './pages/PhotoDetails';
import './App.css';
import Products from './pages/products';
import Cart from './pages/cart';

function App() {
  const [cart, setCart] = useState([]); // Lifting the state up for cart

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Layout Routes */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
          <Route path="/photos" element={<MainLayout><Photos /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/matrimony" element={<MainLayout><Matrimony /></MainLayout>} />
          <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
          <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
          <Route path="/form" element={<MainLayout><Form /></MainLayout>} />
          <Route path="/photo-details" element={<MainLayout><PhotoDetails /></MainLayout>} />
          
          {/* Products and Cart Routes */}
          <Route
            path="/products"
            element={<MainLayout><Products cart={cart} setCart={setCart} /></MainLayout>}
          />
          <Route
            path="/cart"
            element={<MainLayout><Cart cart={cart} /></MainLayout>}
          />
          
          {/* Photo Category Routes - Open Separately */}
          <Route path="/*" element={<PhotosRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
