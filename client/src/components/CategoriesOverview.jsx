import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaAppleAlt, FaCarrot, FaFish, FaLeaf } from "react-icons/fa";

const categoryIcons = {
  Fruits: <FaAppleAlt className="w-8 h-8 text-primary dark:text-secondary" />,
  Vegetables: <FaCarrot className="w-8 h-8 text-primary dark:text-secondary" />,
  Seafood: <FaFish className="w-8 h-8 text-primary dark:text-secondary" />,
  Organic: <FaLeaf className="w-8 h-8 text-primary dark:text-secondary" />,
};

const CategoriesOverview = () => {
  const { categories } = useContext(ShopContext);

  if (!categories?.length) return null;

  return (
    <section className="my-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">Shop by Category</h2>
        <p className="text-gray-500 dark:text-gray-400">Explore our main product categories</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {categories.slice(0, 4).map((cat) => (
          <div
            key={cat._id}
            className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div className="mb-4">
              {categoryIcons[cat.name] || (
                <span className="w-8 h-8 rounded-full bg-primary/10 dark:bg-secondary/10 flex items-center justify-center text-primary dark:text-secondary font-bold text-xl">
                  {cat.name[0]}
                </span>
              )}
            </div>
            <div className="font-semibold text-lg text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-secondary">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesOverview;