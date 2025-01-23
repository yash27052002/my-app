import React, { useState } from 'react';
import './styles.css'; // Make sure you have your styles for a checkout layout
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons from Font Awesome

const Cart = ({ cart }) => {
  const [uploadedImage, setUploadedImage] = useState(null); // State for image upload
  const [cartItems, setCartItems] = useState(cart); // State to track cart items

  // Handle image file selection
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file)); // Set the preview of the uploaded image
    }
  };

  // Handle adding or removing a product
  const updateCart = (productId, action) => {
    setCartItems((prevCartItems) => {
      if (action === 'increase') {
        // Add the product to the cart
        const productToAdd = cart.find((product) => product.id === productId);
        return [...prevCartItems, productToAdd];
      } else if (action === 'decrease') {
        // Remove the last instance of the product from the cart
        const lastIndex = prevCartItems.map((item) => item.id).lastIndexOf(productId);
        if (lastIndex !== -1) {
          return prevCartItems.filter((_, index) => index !== lastIndex);
        }
      }
      return prevCartItems;
    });
  };

  return (
    <div className="cart-container p-6">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <div className="product-list mb-6">
            {/* Group items by product ID and count their quantities */}
            {Array.from(new Set(cartItems.map((item) => item.id))).map((productId) => {
              const product = cartItems.find((item) => item.id === productId);
              const quantity = cartItems.filter((item) => item.id === productId).length;

              return (
                <div key={productId} className="product-item border p-4 rounded shadow-lg mb-4 flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover mb-4"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                    <div className="quantity mt-2 flex items-center">
                      <button
                        className="text-lg font-semibold p-2 hover:bg-gray-200 rounded"
                        onClick={() => updateCart(product.id, 'decrease')}
                      >
                        <FaMinus /> {/* Minus icon */}
                      </button>
                      <span className="mx-2">{quantity}</span>
                      <button
                        className="text-lg font-semibold p-2 hover:bg-gray-200 rounded"
                        onClick={() => updateCart(product.id, 'increase')}
                      >
                        <FaPlus /> {/* Plus icon */}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Upload Section */}
          <div className="image-upload-section mb-6">
            <h3 className="text-xl font-semibold mb-2">Upload Image</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border p-2 rounded"
            />
            {uploadedImage && (
              <div className="mt-4">
                <h4 className="font-semibold">Uploaded Image:</h4>
                <img
                  src={uploadedImage}
                  alt="Uploaded Preview"
                  className="mt-2 w-40 h-40 object-cover"
                />
              </div>
            )}
          </div>

          {/* Checkout Summary */}
          <div className="checkout-summary bg-gray-100 p-4 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total Price:</span>
              <span>
                ${cartItems.reduce((total, product) => total + parseFloat(product.price.slice(1)), 0).toFixed(2)}
              </span>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full">
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;