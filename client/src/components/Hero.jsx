import React, { useContext } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../assets/img/fruit-plate.png";
import LeafPng from "../assets/img/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../utilitty/Animation";
import { ShopContext } from "../context/ShopContext";

const Hero = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <section>
      <div className=" grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia text-gray-800 dark:text-gray-100"
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
            >
              Fuel Your
              <br />
              Health Journey
              <span className="text-primary dark:text-secondary">
                {" "}
                Naturally!
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl tracking-wide font-poppins text-gray-700 dark:text-gray-300"
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
            >
              Order Now For Healthy Life
            </motion.p>

            <motion.p
              className="text-gray-400 dark:text-gray-500"
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
            >
              Shop curated supplements, organic foods, and expert wellness
              advice — all in one place.
            </motion.p>

            {/* Button Section */}
            <motion.div
              className="flex justify-center md:justify-start"
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
            >
              <button
                className="primary-btn flex items-center gap-2  text-white dark:bg-secondary dark:text-gray-900"
                onClick={() => navigate("/products")}
              >
                <span>
                  <IoBagHandleOutline />
                </span>
                Shop now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 100, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt=""
            loading="lazy"
            className="w-[350px] md:w-[550px] drop-shadow dark:drop-shadow-[0_4px_6px_rgba(255,255,255,0.1)]"
          />
        </div>

        {/* Decorative Leaf */}
        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, y: 100, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={LeafPng}
            alt=""
            loading="lazy"
            className="w-full max-w-[300px] dark:opacity-60"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
