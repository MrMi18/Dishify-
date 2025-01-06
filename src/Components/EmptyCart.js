import React from 'react';
import { Link } from 'react-router-dom';
// import emptyCartImage from '../assets/empty_cart.png'; // Replace with your own image path

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mt-20">
          
            <img
                 src= "data:image/jpeg;base64,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"
                alt="Empty Cart"
                className="w-48 h-48 mb-6"
            />
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Your Cart is Empty!
            </h2>
            <p className="text-gray-500 mb-6">
                Looks like you haven’t added anything to your cart yet.
            </p>
            <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                See Restaurant Near You 
            </Link>
        </div>
    );
};

export default EmptyCart;
