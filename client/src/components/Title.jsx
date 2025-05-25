import React from "react";
import { motion } from "framer-motion";

const Title = ({ text1, text2, delay = 0, animate = true }) => {
  const content = (
    <>
      <span className="">{text1}</span>
      <span className="text-primary dark:text-secondary font-bold">
        {text2}
      </span>
    </>
  );

  return (
    <div className="inline-flex flex-col items-center mb-10">
      {animate ? (
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay }}
          className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold font-poppins tracking-wider text-gray-700 dark:text-gray-200 text-center"
        >
          {content}
        </motion.h2>
      ) : (
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold font-poppins tracking-wider text-gray-700 dark:text-gray-200 text-center">
          {content}
        </h2>
      )}
      {/* Accent Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="h-1 w-16 mt-2 rounded-full bg-primary dark:bg-secondary origin-left"
      />
    </div>
  );
};

export default Title;
