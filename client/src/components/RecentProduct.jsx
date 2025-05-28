import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { RecentProductSkeleton } from "../utilitty/Skeleton";

const RecentProduct = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    setLatestProducts(products.slice(0, 3));
  }, [products]);

  if (!products.length) return <RecentProductSkeleton/>;

  return (
    <section>
      <div className="mx-auto py-16 px-2 sm:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">
            Recent Products
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Discover our latest arrivals and best picks for you!
          </p>
        </div>
        {/* Rendering products */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {latestProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              productInfo={item.productInfo}

            />
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigator("/products")}
            className="relative flex items-center secondary-btn"
            type="button"
          >
            <span className="tracking-wide">View All Products</span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 shadow-lg">
              <FaChevronRight className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 rounded-xl ring-2 ring-primary/30 dark:ring-secondary/30 opacity-0 group-hover:opacity-100 transition"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentProduct;
