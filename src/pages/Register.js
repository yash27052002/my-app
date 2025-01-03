import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import categoryImage3 from '../assets/images/16.jpg';


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        password: '',
        confirmPassword: '',
        images: [],
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration Data:", formData);
        navigate("/login");
      };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
          ...formData,
          images: files,
        });
      };
 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8" style={{
            backgroundImage: `url(${categoryImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mt-11">
                <h1 className="text-4xl font-thin text-center text-orange-300 mb-6">
                    Matrimony Registration
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>


                    <div>
            <label className="block text-gray-700 font-semibold mb-2">Upload Images</label>
            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Image Preview */}
          {formData.images.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {formData.images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`preview-${index}`}
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Register
            </button>
          </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
