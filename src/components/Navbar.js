import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userType }) => {
  console.log(userType)
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center md:hidden px-4">
        <div className="text-lg font-semibold">Book Recommendation System</div>
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar for slightly smaller screens */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-gray-900 text-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <div className="absolute top-0 right-0 p-4">
          <button
            className="text-white focus:outline-none"
            onClick={closeSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="py-8 px-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/home"
                className="block py-2 px-4 rounded hover:bg-indigo-600"
                onClick={closeSidebar}
              >
                Home
              </Link>
            </li>
            {userType === "admin" && (
              <li>
                <Link
                  to="/add-book"
                  className="block py-2 px-4 rounded hover:bg-indigo-600"
                  onClick={closeSidebar}
                >
                  Add Book
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/profile"
                className="block py-2 px-4 rounded hover:bg-indigo-600"
                onClick={closeSidebar}
              >
                Profile
              </Link>
            </li>
            <li>
            <Link
              to="/"
              className="block py-2 px-4 rounded hover:bg-indigo-600"
            >
              Logout
            </Link>
          </li>
          </ul>
        </div>
      </aside>

      {/* Modern Navbar for larger screens */}
      <div className="hidden md:flex md:justify-between md:items-center md:container mx-auto px-4">
        <div className="text-lg font-semibold">Book Recommendation System</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/home"
              className="hover:text-gray-300 hover:bg-indigo-600 transition duration-300 ease-in-out py-2 px-2 rounded"
            >
              Home
            </Link>
          </li> 
          {userType === "admin" && (
            <li>
              <Link
                to="/add-book"
                className="hover:text-gray-300 hover:bg-indigo-600 transition duration-300 ease-in-out py-2 px-2 rounded"
                onClick={closeSidebar}
              >
                Add Book
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/profile"
              className="hover:text-gray-300 hover:bg-indigo-600 transition duration-300 ease-in-out py-2 px-2 rounded"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 hover:bg-indigo-600 transition duration-300 ease-in-out py-2 px-2 rounded"
            >
              Logout
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
