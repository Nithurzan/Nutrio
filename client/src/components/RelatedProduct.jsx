import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const productsCopy = products.filter(
        (item) => category === item.category
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category]);

  return (
    <section className="py-12 px-2 sm:px-0 bg-gradient-to-br from-primary/5 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl">
      <div className="container mx-auto my-24">
        <div className="flex flex-col items-center">
          <Title text1={"RELATED"} text2={"PRODUCTS"} delay={0.5} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10 mt-10">
          {related.length > 0 ? (
            related.map((item) => (
              <ProductItems
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 dark:text-gray-500 py-12 text-lg font-semibold">
              No related products found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
