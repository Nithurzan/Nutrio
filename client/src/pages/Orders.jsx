import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { FiPackage, FiTruck, FiCheckCircle, FiClock } from "react-icons/fi";
import Skeletons from "../utilitty/Skeleton";
import useLoadingTimer from "../utilitty/useLoadingTimer";

const Orders = () => {
  const { loadOrderData, orderData, token, currency } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrderData();
  }, [token]);

  useLoadingTimer(setLoading, 1200);

  if (loading) return <Skeletons type="orders" />;

  return (
    <section>
      <div className="container pt-16">
        <div className="text-2xl mb-6">
          <Title text1={"MY"} text2={"ORDERS"} animate={false} />
        </div>

        <div>
          {orderData.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-20 flex flex-col items-center">
              <FiPackage className="w-16 h-16 mb-4 text-primary/40 dark:text-secondary/40" />
              <p className="text-lg font-medium">No orders found.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {orderData.map((item, index) => (
                <div
                  key={item.orderId || index}
                  className="relative group py-6 px-4 sm:px-8 rounded-2xl shadow-xl bg-white/90 dark:bg-gray-900/90 border border-primary/10 dark:border-secondary/20 flex flex-col sm:flex-row items-center gap-8 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center">
                    {item.status === "Delivered" ? (
                      <FiCheckCircle className="w-10 h-10 text-green-500 mb-2" />
                    ) : item.status === "Pending" ? (
                      <FiClock className="w-10 h-10 text-yellow-400 mb-2" />
                    ) : (
                      <FiPackage className="w-10 h-10 text-primary mb-2" />
                    )}
                    <img
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow object-cover border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                      src={item.image && item.image[0] ? item.image[0] : "/fallback.png"}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start w-full">
                    <p className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">
                      {item.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-base mt-1 text-gray-700 dark:text-gray-300">
                      <span className="font-bold text-primary dark:text-blue-400 text-xl">
                        {currency}
                        {item.amount}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-400">
                        Qty: {item.quanity}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      Date: <span>{new Date(item.date).toDateString()}</span>
                    </p>
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      OrderId: <span className="text-gray-500 font-semibold">{item.orderId}</span>
                    </p>
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      Payment: <span>{item.paymentMethod}</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-3 min-w-[120px] w-full sm:w-auto">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          item.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                    >
                      {item.status === "Delivered" ? (
                        <FiCheckCircle className="w-4 h-4" />
                      ) : item.status === "Pending" ? (
                        <FiClock className="w-4 h-4" />
                      ) : (
                        <FiPackage className="w-4 h-4" />
                      )}
                      {item.status}
                    </span>
                    <button
                      onClick={loadOrderData}
                      aria-label="Track Order"
                      className="border border-primary dark:border-blue-500 px-5 py-2 text-sm font-bold rounded-full bg-primary/90 dark:bg-blue-900 text-white dark:text-white hover:bg-secondary dark:hover:bg-primary transition w-full sm:w-auto flex items-center gap-2 shadow"
                    >
                      <FiTruck className="w-4 h-4" />
                      Track Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Orders;