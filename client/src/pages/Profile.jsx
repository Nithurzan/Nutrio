import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FiEdit, FiLogOut, FiPlus, FiTrash2, FiHeart } from "react-icons/fi";
import useLoadingTimer from "../utilitty/useLoadingTimer";
import Skeletons from "../utilitty/Skeleton";

const Profile = () => {
  const {
    navigate,
    loadOrderData,
    orderData,
    token,
    currency,
    user,
    logout,
    wishlist,
    fetchWishlist,
  } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrderData();
    fetchWishlist();
  }, [token]);

  useLoadingTimer(setLoading, 1200);
  if (loading) return <Skeletons type="profile" />;

  const orderDatas = orderData.slice(0, 4);

  // Dummy data for demonstration
  const addresses = [
    { id: 1, label: "Home", address: "123 Main St, City, Country" },
    { id: 2, label: "Work", address: "456 Office Rd, City, Country" },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-10 p-4 bg-gradient-to-br from-white via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Profile & Address */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* User Info */}
          <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 flex flex-col items-center relative">
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-blue-200 dark:from-primary/30 dark:to-gray-700 flex items-center justify-center text-4xl font-extrabold text-primary mb-3 shadow-lg">
              {user?.name?.[0]?.toUpperCase() || "U"}
              <button
                className="absolute bottom-2 right-2 bg-primary text-white rounded-full p-2 hover:bg-secondary shadow transition-all duration-200"
                title="Change photo"
              >
                <FiEdit size={18} />
              </button>
            </div>
            <h2 className="text-xl font-bold mb-1">
              {user?.name || "User Name"}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
              {user?.email || "user@email.com"}
            </p>
            <button
              className="flex items-center gap-1 text-primary hover:underline text-xs"
              onClick={() => navigate("/edit-profile")}
            >
              <FiEdit /> Edit Profile
            </button>
          </div>
          {/* Addresses */}
          <div className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-base">Addresses</h3>
              <button className="flex items-center gap-1 text-primary hover:underline text-xs">
                <FiPlus /> Add
              </button>
            </div>
            <ul className="space-y-1">
              {addresses.length === 0 ? (
                <li className="text-gray-400 text-xs">No addresses saved.</li>
              ) : (
                addresses.map((addr) => (
                  <li
                    key={addr.id}
                    className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
                  >
                    <span>
                      <span className="font-medium">{addr.label}:</span>{" "}
                      {addr.address}
                    </span>
                    <div className="flex gap-2">
                      <button className="text-xs text-primary hover:underline flex items-center gap-1">
                        <FiEdit />
                      </button>
                      <button className="text-xs text-red-500 hover:underline flex items-center gap-1">
                        <FiTrash2 />
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
          {/* Account Actions */}
          <div className="flex justify-between items-center mt-2">
            <button
              className="flex items-center gap-2 text-red-500 hover:underline text-xs"
              onClick={logout}
            >
              <FiLogOut /> Logout
            </button>
            <button className="text-xs border border-red-400 text-red-400 px-2 py-1 rounded hover:bg-red-50 hover:text-red-600 transition">
              Delete Account
            </button>
          </div>
        </div>

        {/* Right Side: Orders & Wishlist */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          {/* Orders Section */}
          <div className="bg-white/90 dark:bg-gray-900/90 p-6 rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-900 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-xl flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Recent Orders
              </h3>
              <button
                className="text-sm text-primary hover:underline"
                onClick={() => navigate("/orders")}
              >
                View All Orders
              </button>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orderDatas.length === 0 ? (
                <li className="text-gray-400 text-sm text-center py-8 col-span-2">
                  No orders yet.
                </li>
              ) : (
                orderDatas.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-2 bg-white/80 dark:bg-gray-900/80 p-4 rounded-xl shadow border border-blue-100 dark:border-blue-900 hover:shadow-lg transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-mono text-xs px-3 py-1 rounded-lg shadow">
                        {item.orderId}
                      </span>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full shadow
                          ${
                            item.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : item.status === "Processing"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                      >
                        {item.status}
                      </span>
                      <span className="font-bold text-primary dark:text-blue-400">
                        {currency}
                        {item.amount}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Payment: {item.paymentMethod}
                      </span>
                      <button className="text-xs text-primary hover:underline px-2 py-1 rounded transition hover:bg-blue-50 dark:hover:bg-blue-900">
                        View Details
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Wishlist Section */}
          <div className="bg-white/90 dark:bg-gray-900/90 p-6 rounded-2xl shadow-2xl border border-pink-100 dark:border-pink-900 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-xl flex items-center gap-2 text-pink-600 dark:text-pink-400">
                <FiHeart className="text-pink-500" /> Wishlist
              </h3>
              <button
                className="text-sm text-primary hover:underline"
                onClick={() => navigate("/wishlist")}
              >
                View All
              </button>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wishlist.length === 0 ? (
                <li className="text-gray-400 text-sm text-center py-8 col-span-2">
                  No items in wishlist.
                </li>
              ) : (
                wishlist.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-3 bg-white/80 dark:bg-gray-900/80 p-4 rounded-xl shadow border border-pink-100 dark:border-pink-900 hover:shadow-lg transition"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {item.name}
                    </span>
                    <span className="text-pink-600 dark:text-pink-400 font-semibold">
                      {currency}
                      {item.price}
                    </span>
                    {/* <button className="text-xs text-red-500 hover:underline flex items-center gap-1 px-2 py-1 rounded transition hover:bg-pink-50 dark:hover:bg-pink-900">
                        <FiTrash2 onClick={() => handleRemove(item)} /> Remove
                      </button> */}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
