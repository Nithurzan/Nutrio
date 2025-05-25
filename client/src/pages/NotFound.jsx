import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
    <div className="flex flex-col items-center text-center px-4">
      <div className="relative">
        <h1 className="text-[7rem] sm:text-[10rem] font-extrabold text-primary dark:text-secondary drop-shadow-lg select-none">
          404
        </h1>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl text-gray-200 dark:text-gray-700 opacity-30 pointer-events-none select-none">
          !
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
        <br />
        Let’s get you back to a healthy place!
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 rounded-full bg-primary text-white dark:bg-secondary dark:text-gray-900 font-semibold shadow hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-gray-100 transition-all duration-300"
      >
        Go to Home
      </Link>
    </div>
  </section>
);

export default NotFound;
