import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { color } from "framer-motion";

const CategoriesOverview = () => {
  const { setCategory, categories, navigate } = useContext(ShopContext);
  const [showAll, setShowAll] = useState(false);

  const displayedCategories = showAll ? categories : categories.slice(0, 4);

  const handleCategoryClick = (catId) => {
    setCategory([catId]);
    navigate(`/products/`);
  };

  if (!categories?.length) return null;

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

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {displayedCategories.map((cat) => (
          <div
            key={cat._id}
            className="cursor-pointer"
            onClick={() => handleCategoryClick(cat._id)}
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
        WebkitTextStroke: "1.5px black",
        textShadow: "0 0 3px white, 0 0 6px white",
      }}
    >
      {cat.name}
    </h3>
  </div>
</div>



          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/80 transition"
          >
            View All Categories <FaChevronDown />
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-400 text-white rounded-xl hover:bg-gray-500 transition"
          >
            Hide Categories <FaChevronUp />
          </button>
        )}
      </div>
    </section>
  );
};

export default CategoriesOverview;
