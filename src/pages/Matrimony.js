import React from 'react';

import categoryImage3 from '../assets/images/18.jpg';
import { Link } from 'react-router-dom';

const Matrimony = () => {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-8 relative"
            style={{
                backgroundImage: `url(${categoryImage3})`,
                backgroundPosition: 'center top',
                marginTop: '4rem', // Adjusts for the navbar height
            }}
        >
            {/* Overlay for opacity */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            
            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-5xl font-extralight text-white mb-12">
                    Welcome to Matrimony
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {/* Upload Profile Card */}
                    <div className="flex flex-col items-center bg-slate-300 shadow-lg rounded-lg p-8 transform transition-transform duration-300 hover:scale-105">
                        <div className="text-4xl mb-4 text-blue-500">📤</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Profile</h2>
                        <p className="text-gray-600 text-center">
                            Share your details and let us help you find your perfect match.
                        </p>
                        <Link to="/register">

                        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600">
                            Upload Now
                        </button>
                        </Link>
                    </div>

                    {/* Browse Profiles Card */}
                    <div className="flex flex-col items-center bg-slate-300 shadow-lg rounded-lg p-8 transform transition-transform duration-300 hover:scale-105">
                        <div className="text-4xl mb-4 text-green-500">🔍</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Browse Profiles</h2>
                        <p className="text-gray-600 text-center">
                            Explore profiles and connect with potential matches.
                        </p>
                        <Link to="/register">
                        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600">
                            Browse Now
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Matrimony;
