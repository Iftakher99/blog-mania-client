import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ toggle }) => {
  return (
    <div>
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm md:px-20 font-mono">
        <Link to="/home" className="text-2xl font-extrabold nav-title">
          Blog mania
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="md:block hidden">
          <Link
            to="/"
            className="p-4 hover:text-gray-600 nav-item font-medium text-lg"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="p-4 hover:text-gray-600 nav-item font-medium text-lg"
          >
            Blogs
          </Link>
          <Link
            to="/create-blog"
            className="p-4 hover:text-gray-600 nav-item font-medium text-lg"
          >
            Admin
          </Link>
          <Link
            to="/contact"
            className="p-4 hover:text-gray-600 nav-item font-medium text-lg"
          >
            Contact
          </Link>
          <Link to="#">
            <button className="text-white ml-4 bg-red-400 hover:bg-red-400 py-2 px-4 rounded">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
