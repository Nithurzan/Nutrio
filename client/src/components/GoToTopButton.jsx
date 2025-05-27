import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    const duration = 3000;
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`fixed z-50 bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 rounded-full shadow-lg transition-all duration-300
        bg-primary text-white dark:bg-secondary dark:text-gray-900 hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-gray-100
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default GoToTopButton;
