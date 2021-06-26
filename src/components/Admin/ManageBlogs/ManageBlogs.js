import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ManageBlogs = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div>
        <h1 className="ml-5 pt-8 text-2xl font-semibold">Manage Blogs</h1>
        <div className="mt-12">
          <table
            className="border-collapse border border-red-800 block mx-auto"
            style={{ width: '80%' }}
          >
            <thead>
              <tr>
                <th className="border border-red-600 px-4 py-2 ...">Title</th>
                <th className="border border-red-600 px-4 py-2 ...">
                  Description
                </th>
                <th className="border border-red-600 px-4 py-2 ...">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-red-600 px-4 py-2 ..."></td>
                <td className="border border-red-600 px-4 py-2 ..."></td>
                <td className="px-4 py-2 flex mt-6">
                  <Link to="#">
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xl font-bold leading-none text-red-100 bg-red-700 hover:bg-red-800 rounded cursor-pointer">
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xl font-bold leading-none text-red-100 bg-red-700 hover:bg-red-800 rounded ml-2 cursor-pointer">
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
