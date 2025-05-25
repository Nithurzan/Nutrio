import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavbarMenu from "../assets/navbarMenuData";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen z-40 flex items-start"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            tabIndex={0}
          />
          {/* Menu Card */}
          <div className="relative z-10 w-full">
            <div className="mx-4 mt-24 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-primary/20 dark:border-secondary/30 p-8">
              <ul className="flex flex-col items-center gap-8">
                {NavbarMenu.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-bold font-poppins uppercase tracking-wide text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary px-4 py-2 rounded"
                    role="menuitem"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
