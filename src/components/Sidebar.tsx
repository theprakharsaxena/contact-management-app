import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden flex items-center p-4 text-gray-800 fixed">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <HiOutlineX className="h-6 w-6" />
          ) : (
            <HiOutlineMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div className="relative w-64 h-screen hidden lg:flex">
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col fixed">
          <div className="p-4 text-2xl font-bold">Dashboard</div>
          <nav className="flex-grow">
            <ul>
              <li>
                <Link to="/" className="block p-4 hover:bg-gray-600">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="block p-4 hover:bg-gray-600">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50"
            onClick={toggleSidebar}
          ></div>
          <div className="relative w-64 h-full bg-gray-800 text-white">
            <div className="p-4 text-2xl font-bold">Dashboard</div>
            <nav className="flex-grow">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={toggleSidebar}
                    className="block p-4 hover:bg-gray-600"
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    onClick={toggleSidebar}
                    className="block p-4 hover:bg-gray-600"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
