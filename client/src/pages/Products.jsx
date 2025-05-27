import React, { useContext, useEffect, useState } from "react";
import { FiPackage } from "react-icons/fi";
import Title from "../components/Title";
import { FiChevronDown, FiFilter } from "react-icons/fi";
import ProductItems from "../components/ProductItems";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../utilitty/Animation";
import Skeletons from "../utilitty/Skeleton";

const Products = () => {
  const { categories, search, showSearch, products, category, setCategory } =
    useContext(ShopContext);
  const [sortType, setSortType] = useState("relevent");
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const sortProduct = () => {
    let fbCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fbCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fbCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
  productsCopy = productsCopy.filter((item) => {
    if (!item.category) return false; // 🚫 Ignore null categories
    const catId = typeof item.category === "object"
      ? item.category._id
      : String(item.category);
    return category.includes(catId);
  });
}

     
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [category, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  if (loading) return <Skeletons type="product" />;

  return (
    <section>
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Title */}
        <div className="text-center">
          <Title text1={"ALL"} text2={"PRODUCTS"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Filters */}
          <motion.div
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border border-primary/20 dark:border-secondary/20 md:sticky md:top-28 h-fit transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <FiFilter className="w-6 h-6 text-primary dark:text-secondary" />
              <h3 className="text-xl font-bold text-primary dark:text-secondary tracking-wide">
                Filters
              </h3>
            </div>
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  Categories
                </h4>
                <div className="flex flex-col gap-3">
                  {categories.map((categoryItem) => (
                    <label
                      key={categoryItem._id}
                      className={`flex items-center gap-2 text-sm px-2 py-2 rounded-lg cursor-pointer transition 
                        ${
                          category.includes(categoryItem._id)
                            ? "bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary font-semibold shadow"
                            : "text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-secondary/10"
                        }`}
                    >
                      <input
                        type="checkbox"
                        value={categoryItem._id}
                        onChange={toggleCategory}
                        checked={category.includes(categoryItem._id)}
                        className="w-4 h-4 accent-primary"
                      />
                      {categoryItem.name}
                    </label>
                  ))}
                </div>
              </div>
              <hr className="border-t border-gray-200 dark:border-gray-700 my-2" />
              {/* Clear Filters Button */}
              <button
                onClick={() => setCategory([])}
                className="w-full text-xs px-4 py-2 rounded-lg bg-primary text-white dark:bg-secondary dark:text-gray-900 font-semibold shadow hover:bg-primary/90 dark:hover:bg-secondary/90 transition disabled:opacity-50"
                type="button"
                disabled={category.length === 0}
              >
                Clear Filters
              </button>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            className="col-span-3"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md  px-6 py-2 transition-all">
              <p className="text-base font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
                Showing{" "}
                <span className="text-primary dark:text-secondary">
                  {filterProducts.length}
                </span>{" "}
                products
              </p>
              {/* sort section */}
              <div className="flex items-center gap-3">
                <label
                  htmlFor="sort"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Sort by:
                </label>
                <div className="relative">
                  <select
                    id="sort"
                    onChange={(e) => setSortType(e.target.value)}
                    className="border border-gray-300 dark:border-gray-600 text-sm px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-primary appearance-none pr-10 font-medium transition"
                    value={sortType}
                  >
                    <option value="relevent">Relevant</option>
                    <option value="low-high">Low to High</option>
                    <option value="high-low">High to Low</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary dark:text-secondary text-lg">
                    <FiChevronDown />
                  </span>
                </div>
              </div>
            </div>

            {filterProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-400 dark:text-gray-500">
                <FiPackage className="mx-auto mb-6 w-16 h-16 text-primary/40 dark:text-secondary/40" />
                <p className="text-lg font-medium">No products found.</p>
                <p className="text-sm mt-2">
                  Try adjusting your filters or search terms.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 px-2 sm:px-0">
                {filterProducts.map((item, index) => (
                  <div
                    
                    className="h-full transition-all duration-300 "
                  >
                    <ProductItems
                      id={item._id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      productInfo={item.productInfo}
                      featured={item.featured}
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
