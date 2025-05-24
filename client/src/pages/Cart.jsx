import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/asset";
import CartTotal from "../components/CartTotal";
import { FiTrash2,FiShoppingCart } from "react-icons/fi";
import Skeletons from "../utilitty/Skeleton";

const Cart = () => {
  const { products, currency, cartItems, updateQuanity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          tempData.push({
            _id: itemId,
            quanity: cartItems[itemId],
          });
        }
      }
      setCartData(tempData);
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [cartItems, products]);

  if (loading) return <Skeletons type="cart" />;

  return (
      <section className="min-h-[70vh] py-10 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center text-2xl mb-8">
            <Title text1={"YOUR"} text2={"CART"} animate={false} />
          </div>

          <div>
            {cartData.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-20 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl max-w-md mx-auto flex flex-col items-center">
               <FiShoppingCart className="mx-auto mb-6 w-32 h-32 opacity-80 text-primary dark:text-secondary" />
                <p className="text-lg font-medium mb-2">Your cart is empty.</p>
                <button
                  onClick={() => navigate("/products")}
                  className="secondary-btn flex items-center gap-2"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {cartData.map((item, index) => {
                  const productData = products.find(
                    (product) => product._id === item._id
                  );
                  if (!productData) return null;
                  return (
                    <div
                      key={item._id}
                      className="py-6 px-4 sm:px-8 rounded-2xl shadow-xl bg-white dark:bg-gray-900 flex flex-col sm:flex-row items-center gap-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 shadow">
                        <img
                          src={productData.image[0]}
                          alt={productData.name}
                          className="w-24 h-24 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start">
                        <p className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">
                          {productData.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {typeof productData.category === "object"
                            ? productData.category.name
                            : productData.category}
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-primary dark:text-blue-400 text-xl">
                            {currency}
                            {productData.price}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500">
                            x {item.quanity}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Subtotal: {currency}
                            {(productData.price * item.quanity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2 min-w-[90px]">
                        <div className="flex items-center border rounded-lg bg-gray-50 dark:bg-gray-800 px-2 py-1 shadow">
                          <button
                            className="px-2 text-lg font-bold text-gray-500 hover:text-primary dark:hover:text-blue-400"
                            onClick={() =>
                              updateQuanity(item._id, Math.max(1, item.quanity - 1))
                            }
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <input
                            onChange={(e) =>
                              e.target.value === "" || e.target.value === "0"
                                ? null
                                : updateQuanity(item._id, Number(e.target.value))
                            }
                            className="w-10 text-center bg-transparent outline-none text-gray-900 dark:text-gray-100"
                            type="number"
                            min={1}
                            value={item.quanity}
                          />
                          <button
                            className="px-2 text-lg font-bold text-gray-500 hover:text-primary dark:hover:text-blue-400"
                            onClick={() => updateQuanity(item._id, item.quanity + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                          <button
                            onClick={() => updateQuanity(item._id, 0)}
                            className="ml-3 flex items-center rounded-full p-1 hover:bg-red-100 dark:hover:bg-red-900 transition"
                            title="Remove"
                          >
                            <FiTrash2
                              className="w-5 h-5 text-red-500 transition-transform duration-200 hover:rotate-45 hover:text-red-700"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {cartData.length > 0 && (
            <div className="flex justify-end my-12">
              <div className="w-full sm:w-[450px]">
                <CartTotal />
              </div>
            </div>
          )}
        </div>
      </section>
  );
};

export default Cart;