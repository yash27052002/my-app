import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaShoppingCart } from "react-icons/fa"; // Import Cart icon
import './styles.css';  // Import the global CSS file

import frame1 from '../assets/images/frame1.JPG';
import frame2 from '../assets/images/frame2.JPG';
import frame3 from '../assets/images/frame3.JPG';
import frame4 from '../assets/images/frame4.JPG';
import frame5 from '../assets/images/frame5.JPG';
import frame6 from '../assets/images/frame6.JPG';
import frame7 from '../assets/images/frame7.JPG';
import frame8 from '../assets/images/frame8.JPG';
import frame9 from '../assets/images/frame9.JPG';

// Array of frame images
const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9];

// Array of product details
const products = frames.map((frame, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: `$${20 + index * 10}`, // Prices starting from $20
  image: frame, // Use frame image
}));

const Products = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle product card click to open the modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Handle adding the product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      {/* Cart Button */}


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-20">
      <div className="fixed top-4 right-4 z-50 mt-20">
        <Link to="/cart">
          <button className="text-white bg-slate-400 p-3 rounded-full flex items-center">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="ml-2 text-white font-semibold">{cart.length}</span>
            )}
          </button>
        </Link>
      </div>
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded shadow-lg p-4 flex flex-col items-center cursor-pointer"
            onClick={() => handleProductClick(product)} // Open modal on click
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <button
              className="mt-4 text-black px-4 py-2 rounded button-hover"
              onClick={(e) => {
                e.stopPropagation(); // Prevent opening the modal
                handleAddToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal for displaying product details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{selectedProduct.price}</p>
            <p className="text-sm text-gray-600 mb-4">More details about the product can go here.</p>
            <button
              className="mt-4 w-full text-white bg-blue-500 py-2 rounded button-hover"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
