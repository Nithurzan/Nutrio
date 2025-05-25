import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail } from "react-icons/fi";
import Skeletons from "../utilitty/Skeleton";
import useLoadingTimer from "../utilitty/useLoadingTimer";

const NewsLetter = () => {
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useLoadingTimer(setLoading, 1200);

  if (loading) return <Skeletons type="newsletter" />;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <div className="container flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center py-12 mt-10 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-2xl border border-primary/20 dark:border-secondary/20 flex flex-col items-center"
      >
        <FiMail className="w-14 h-14 text-primary dark:text-secondary mb-4" />
        <p className="text-3xl font-bold font-averia text-gray-800 dark:text-gray-100">
          Subscribe now & get{" "}
          <span className="text-primary font-bold">20% off</span>
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-3">
          Stay updated with our latest offers and products. Join our newsletter
          today!
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 text-green-600 dark:text-green-400 font-semibold text-lg flex items-center gap-2"
          >
            <FiSend className="text-xl" />
            Thank you for subscribing!
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={onSubmitHandler}
            className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 mx-auto my-8 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 bg-white dark:bg-gray-800 shadow"
          >
            <div className="relative w-full flex-1">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg pointer-events-none" />
              <input
                className="w-full pl-10 pr-2 py-3 outline-none bg-transparent text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition"
                type="email"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white text-sm px-6 py-3 rounded-lg font-semibold shadow hover:from-secondary hover:to-primary transition-all duration-300 dark:bg-secondary dark:hover:bg-primary dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-secondary"
            >
              <FiSend className="text-lg" />
              SUBSCRIBE
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default NewsLetter;
