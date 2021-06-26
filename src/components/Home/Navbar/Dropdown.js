import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-red-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link
        to="/"
        className="p-4 hover:text-red-800 nav-item font-medium text-lg"
      >
        Home
      </Link>
      <Link
        to="/blogs"
        className="p-4 hover:text-red-800 nav-item font-medium text-lg"
      >
        Blogs
      </Link>
      <Link
        to="/create-blog"
        className="p-4 hover:text-red-800 nav-item font-medium text-lg"
      >
        Admin
      </Link>
      <Link
        to="/contact"
        className="p-4 hover:text-red-800 nav-item font-medium text-lg"
      >
        Contact
      </Link>
      <Link to="#" className="pb-4 pt-4">
        <button className="text-white ml-4 bg-red-800 hover:bg-red-700 py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Dropdown;
