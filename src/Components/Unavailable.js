import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unavailable = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
                alt="Unavailable"
                className="mt-6 w-[150px]"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-4 my-3">Currently Unavailable</h1>
            <p className="text-lg text-gray-600 mb-6">No available items in your location at the moment.</p>
            <button
                onClick={() => navigate("/about")}
                className="text-sm md:text-base bg-orange-400 text-white md:px-4 md:py-2 px-1 rounded hover:bg-orange-500 whitespace-nowrap"
            >
                Go To About Page
            </button>
        </div>
    );
};

export default Unavailable;
