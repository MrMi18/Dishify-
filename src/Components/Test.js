import React, { useState } from 'react';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
    // Add your logout or profile handling logic here
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative mt-40">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-white bg-gray-700 rounded-lg px-4 py-2 focus:outline-none"
        >
          <img src="avatar.png" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
          <span>John Doe</span>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
            <button
              onClick={() => handleOptionClick('Micoin')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Micoin
            </button>
            <button
              onClick={() => handleOptionClick('Profile')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Profile
            </button>
            <button
              onClick={() => handleOptionClick('Logout')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
  );
};

export default Test;
