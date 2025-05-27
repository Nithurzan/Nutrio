import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";

function ProductItems({ id, image, name, price, productInfo, featured }) {
  const { currency } = useContext(ShopContext);
  const [hovered, setHovered] = useState(false);

  return (
    <section>
      <motion.div
        whileHover={{
          scale: 1.06,
          boxShadow: "0 16px 40px 0 rgba(0,0,0,0.18)",
        }}
        className="flex flex-col justify-between items-center pb-4 rounded-2xl border border-primary/10 dark:border-secondary/20 bg-white/90 dark:bg-gray-900/90 shadow-lg hover:shadow-2xl transition-all duration-300 w-72"
      >
        <Link
          to={`/product/${id}`}
          className="w-full flex flex-col items-center group"
          tabIndex={-1}
          aria-label={`View details for ${name}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="relative overflow-hidden rounded-t-2xl w-full aspect-square bg-gray-50 dark:bg-gray-800 flex items-center justify-center"
            style={{ minHeight: 180 }}
          >
            <img
              src={hovered && image[1] ? image[1] : image[0]}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="w-full text-left mt-4 space-y-1 px-4">
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
              {name}
            </p>
            <p
              className="text-sm text-gray-500 dark:text-gray-400 truncate"
              dangerouslySetInnerHTML={{ __html: productInfo }}
            />
            <p className="text-xl font-extrabold text-primary dark:text-secondary mt-2">
              {currency}
              {price}
            </p>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default ProductItems;
