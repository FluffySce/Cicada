import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from './Search/SearchBar'; // Correct import path
import { FiMessageSquare } from 'react-icons/fi';
import MessageComponent from './MessageComponent'; // Correct import path

const HamburgerMenu = ({ onClose }) => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="text-2xl cursor-pointer absolute top-4 right-4"
        onClick={onClose} // Handle close of the hamburger menu
      >
        <FaTimes />
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50">
        <div className="p-4">
          {/* Search Bar */}
          <SearchBar />

          {/* Sign In and Sign Out Buttons */}
          <div className="mt-4">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mb-2">
              Sign In
            </button>
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded">
              Sign Out
            </button>
          </div>

          {/* Messages Toggle */}
          <div className="mt-4">
            <button
              className="w-full bg-gray-500 text-white px-4 py-2 rounded flex items-center"
              onClick={() => setIsMessageOpen(!isMessageOpen)} // Toggle message panel
            >
              <FiMessageSquare className="mr-2" />
              Messages
            </button>
          </div>

          {/* Message Component */}
          {isMessageOpen && (
            <div className="mt-4">
              <MessageComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
