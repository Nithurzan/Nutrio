import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../assets/img/fruit-plate.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../utilitty/Animation";
import Skeletons from "../utilitty/Skeleton";
import { ShopContext } from "../context/ShopContext";
import useLoadingTimer from "../utilitty/useLoadingTimer";

const About = () => {
  const { navigate } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  useLoadingTimer(setLoading, 1200);

  if (loading) return <Skeletons type="about" />;

  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-20">
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Our Mission */}
        <div className="text-center max-w-3xl mx-auto">
          <Title text1={"Our"} text2={"Mission"} delay={0.3} />
          <motion.p
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
          >
            At <span className="text-primary font-semibold">Nutrio</span>, we
            believe that healthy living starts with honest food. Our mission is
            to make nutrition easy, accessible, and delicious for everyone.
          </motion.p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Hero Image with Accent */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center relative"
          >
            {/* Accent Circle */}
            <div className="absolute -z-10 w-[260px] h-[260px] md:w-[350px] md:h-[350px] bg-primary/10 dark:bg-secondary/20 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src={HeroPng}
              alt="Fruit Plate"
              className="w-[300px] md:w-[450px] lg:w-[550px] drop-shadow-lg dark:drop-shadow-[0_4px_6px_rgba(255,255,255,0.1)] relative z-10"
            />
          </motion.div>

          {/* Brand Info Card */}
          <motion.div
            variants={FadeLeft(1)}
            initial="hidden"
            whileInView="visible"
            className="space-y-6 text-center md:text-left bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8"
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-averia leading-relaxed text-gray-800 dark:text-gray-100">
              Our Story
            </h1>
            <motion.p
              variants={FadeLeft(1.3)}
              initial="hidden"
              whileInView="visible"
              className="font-medium text-gray-500 dark:text-gray-400 leading-relaxed text-lg"
            >
              Founded by health enthusiasts, Nutrio began with a simple goal —
              to connect people with farm-fresh, organic foods they can trust.
              What started as a small local delivery service has grown into a
              trusted online marketplace for wholesome living.
            </motion.p>

            {/* Button Section */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <motion.p
                variants={FadeLeft(1.6)}
                initial="hidden"
                whileInView="visible"
                className="text-lg font-semibold font-poppins text-gray-800 dark:text-gray-200"
              >
                Ready to make healthier choices?
              </motion.p>
              <motion.button
                variants={FadeLeft(1)}
                initial="hidden"
                whileInView="visible"
                onClick={() => navigate("/products")}
                className="primary-btn flex items-center gap-2 px-7 py-3 text-white rounded-lg bg-accent shadow-lg hover:scale-105 hover:bg-secondary dark:bg-secondary dark:hover:bg-primary dark:text-gray-900 transition-all duration-300"
              >
                <span>
                  <IoBagHandleOutline />
                </span>
                Shop now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
