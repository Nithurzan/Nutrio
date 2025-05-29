import React, { useContext, useState, useRef, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CategorySkeleton } from "../utilitty/Skeleton";
import { motion } from "framer-motion";
import { FadeUp } from "../utilitty/Animation";

// Animation variant
// const FadeUp = (delay = 0) => ({
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { delay, duration: 0.5, ease: "easeOut" },
//   },
// });

const CategoriesOverview = () => {
  const { setCategory, categories, navigate } = useContext(ShopContext);
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const [height, setHeight] = useState("auto");

  const handleCategoryClick = (catId) => {
    setCategory([catId]);
    navigate(`/products/`);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    if (showAll) {
      const fullHeight = containerRef.current.scrollHeight;
      setHeight(fullHeight + "px");
    } else {
      const collapsedHeight = containerRef.current.firstChild?.offsetHeight ?? 0;
      setHeight(`${collapsedHeight}px`);
    }
  }, [showAll, categories]);

  if (!categories?.length) return <CategorySkeleton />;

  return (
    <section className="my-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">
          Shop by Category
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Explore our main product categories
        </p>
      </div>

      {/* Animated container */}
      <motion.div
        ref={containerRef}
        style={{ maxHeight: height, overflow: "hidden" }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {categories.map((cat, index) => {
            if (!showAll && index > 3) return null;
            return (
              <motion.div
                key={cat._id}
                className="cursor-pointer"
                onClick={() => handleCategoryClick(cat._id)}
                variants={FadeUp(0.1 + index * 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className="w-full h-40 rounded-xl bg-cover bg-center relative overflow-hidden group shadow-md hover:shadow-2xl transition-all"
                  style={{ backgroundImage: `url(${cat.image})` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-center"
                      style={{
                        color: "transparent",
                        backgroundImage: `url(${cat.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextStroke: "2px black",
                      }}
                    >
                      {cat.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div className="flex justify-center mt-10">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="relative flex items-center secondary-btn transition"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="tracking-wide">
            {showAll ? "Hide Categories" : "View All Categories"}
          </span>
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 text-white transition-transform duration-300 shadow-lg ml-2">
            {showAll ? (
              <FaChevronUp className="w-5 h-5" />
            ) : (
              <FaChevronDown className="w-5 h-5" />
            )}
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default CategoriesOverview;
