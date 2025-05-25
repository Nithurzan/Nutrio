import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/asset";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import ResponsiveMenu from "./ResponsiveMenu";
import NavbarMenu from "../assets/navbarMenuData";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const { setShowSearch, getCartCount, token, navigate, logout } =
    useContext(ShopContext);

  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex justify-between items-center container py-4 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-primary/10 dark:border-secondary/20 my-4 mx-auto
            dark:text-white text-gray-800"
    >
      {/* Logo Section */}
      <div className="flex items-end justify-start text-2xl font-bold hover:scale-105 transition-transform duration-200">
        <Link className="flex items-center gap-2" to="/">
          <img
            className="h-9 w-9 rounded-lg shadow"
            src={assets.logo}
            alt="Nutrio Logo"
          />
          <p className="text-primary font-poppins">
            <span className="text-accent">N</span>utrio
          </p>
        </Link>
      </div>

      {/* NavLink Section */}
      <ul className="hidden sm:flex gap-5 text-gray-700 dark:text-gray-300">
        {NavbarMenu.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className="flex flex-col items-center py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#FFC107] font-semibold font-sans transition-all duration-300 dark:hover:text-primary dark:hover:shadow-[0_3px_0_-1px_#FFC107] rounded-lg hover:bg-primary/10 dark:hover:bg-secondary/10"
          >
            <p>{item.name}</p>
          </NavLink>
        ))}
      </ul>

      {/* Search and Profile Section */}
      <div className="flex items-center gap-3">
        {(location.pathname === "/products" ||
          location.pathname.startsWith("/products/")) && (
          <MdOutlineSearch
            className="text-4xl hover:text-white hover:bg-accent rounded-full p-2 duration-300 cursor-pointer dark:hover:bg-secondary shadow transition-transform hover:scale-110"
            onClick={() => setShowSearch(true)}
          />
        )}

        <div className="group relative">
          <FaRegUser
            onClick={() => (token ? null : navigate("/login"))}
            className="text-4xl hover:text-white hover:bg-accent rounded-full p-2 duration-300 cursor-pointer dark:hover:bg-secondary shadow transition-transform hover:scale-110"
          />
          {/* {dropdown menu} */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20">
              <div className="flex flex-col gap-2 w-40 py-4 px-6 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/10 dark:border-secondary/20">
                <p
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer hover:text-primary dark:hover:text-secondary transition"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-primary dark:hover:text-secondary transition"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-red-500 transition"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <MdOutlineShoppingCart className="text-4xl hover:text-white hover:bg-accent rounded-full p-2 duration-300 cursor-pointer dark:hover:bg-secondary shadow transition-transform hover:scale-110" />
          <span className="absolute right-[2px] bottom-[8px] w-3 h-3 flex items-center justify-center bg-secondary text-white rounded-full text-xs ring-2 ring-white font-bold shadow">
            {getCartCount()}
          </span>
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl p-2 rounded-full text-white bg-accent hover:text-white hover:bg-accent duration-300 cursor-pointer dark:bg-primary dark:hover:bg-secondary shadow transition-transform hover:scale-110"
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>

        {/* Hamburger Menu */}
        <RiMenu3Fill
          onClick={() => setOpen(!open)}
          className="w-5 cursor-pointer sm:hidden text-4xl dark:text-gray-300"
        />
      </div>

      {/* Mobile Screen Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

export default Navbar;
