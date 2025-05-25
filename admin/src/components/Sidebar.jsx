import React from "react";
import { NavLink } from "react-router-dom";
import { FiPlusSquare, FiList, FiShoppingBag } from "react-icons/fi";

const navItems = [
  {
    to: "/add",
    icon: <FiPlusSquare className="w-6 h-6" />,
    label: "Add Items",
  },
  { to: "/list", icon: <FiList className="w-6 h-6" />, label: "List Items" },
  {
    to: "/order",
    icon: <FiShoppingBag className="w-6 h-6" />,
    label: "Orders",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-20 md:w-[18%] min-h-screen border-r-2 border-gray-200 dark:border-gray-800 bg-[#f6f8fb] dark:bg-gray-900 shadow-[4px_0_16px_#e0e4ea] dark:shadow-[4px_0_16px_#23272f] transition-colors duration-300 flex flex-col">
      <nav className="flex flex-col gap-2 pt-8 items-center md:items-start text-[15px]">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-4 py-3 rounded-l-xl w-full relative transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary
              hover:bg-gray-100 dark:hover:bg-gray-800
              ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-800 font-semibold shadow-inner"
                  : ""
              }`
            }
            aria-label={label}
          >
            {/* Left accent bar for active */}
            <span
              className={`absolute left-0 top-2 bottom-2 w-1 rounded bg-accent transition-all duration-200 ${
                window.location.pathname === to
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-40"
              }`}
              aria-hidden="true"
            />
            <span className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-200">
              {icon}
            </span>
            <span className="hidden md:block ml-2">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
