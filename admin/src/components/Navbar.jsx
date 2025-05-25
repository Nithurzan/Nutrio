import { assets } from "../assets/assets/assets";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const Navbar = ({ setToken }) => {
  return (
    <nav className="flex items-center py-3 px-4 sm:px-10 justify-between bg-[#f6f8fb] dark:bg-gray-900 shadow-[0_2px_12px_#e0e4ea] dark:shadow-[0_2px_12px_#23272f] sticky top-0 z-50 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-10 rounded-lg shadow-sm bg-white p-1"
          src={assets.logo}
          alt="Nutrio Logo"
        />
        <span className="text-2xl font-bold font-poppins text-gray-800 dark:text-gray-100 tracking-tight">
          <span className="text-accent drop-shadow-md">N</span>utrio
        </span>
      </div>
      {/* Divider */}
      <div
        className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-4 hidden sm:block"
        aria-hidden="true"
      ></div>
      {/* Actions */}
      <button
        onClick={() => setToken("")}
        className="flex items-center gap-2 bg-accent hover:bg-accent-dark dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-full text-base font-medium shadow transition focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-blue-400"
        title="Logout"
        tabIndex={0}
      >
        <FiLogOut className="text-lg" />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
