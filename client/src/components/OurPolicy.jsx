import React from "react";
import { OurPolicies } from "../assets/ourPolicyData";
import { motion } from "framer-motion";

const OurPolicy = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="container flex flex-col sm:flex-row justify-around gap-10 sm:gap-4 text-center">
        {OurPolicies.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: item.id * 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 px-6 py-8 flex-1 mx-auto max-w-xs transition-all duration-300 hover:shadow-xl"
          >
            {/* Circular Wrapper for Image */}
            <div className="w-20 h-20 m-auto mb-5 bg-primary/10 dark:bg-secondary/30 border-2 border-primary/20 dark:border-secondary/40 rounded-full flex items-center justify-center shadow-[0_0_22px_0_rgba(0,0,0,0.10)] dark:shadow-[0_0_22px_0_#81C784]">
              <img src={item.img} alt={item.Titile} className="w-10 h-10" />
            </div>
            <p className="font-semibold font-poppins text-base sm:text-lg text-gray-800 dark:text-secondary mb-2">
              {item.Titile}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              {item.Subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;
