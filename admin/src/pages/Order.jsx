import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { FiPackage } from "react-icons/fi";

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="px-2 sm:px-4 md:px-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 md:p-8 my-3 md:my-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 text-xs sm:text-sm text-gray-700 dark:text-gray-100 relative"
            key={order._id}
          >
            {/* Order ID */}
            <div className="flex flex-col items-start justify-center">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Order ID</span>
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 tracking-wide break-all">{order.orderId}</span>
            </div>
            {/* Parcel Image */}
            <div className="flex items-center justify-center">
              <FiPackage className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            {/* Items & Address */}
            <div className="space-y-1 border-b border-gray-100 dark:border-gray-800 pb-2 mb-2">
              <div>
                {order.items.map((item, idx) => (
                  <p className="py-0.5" key={idx}>
                    {item.name} X {item.quanity} 
                    {idx !== order.items.length - 1 && <span>,</span>}
                  </p>
                ))}
              </div>
              <p className="mt-3 mb-2 font-medium text-gray-900 dark:text-gray-100">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                </p>
              </div>
              <p className="mt-1 text-gray-700 dark:text-gray-200">{order.address.phone}</p>
            </div>
            {/* Order Info */}
            <div className="flex flex-col gap-2 border-b border-gray-100 dark:border-gray-800 pb-2 mb-2">
              <p className="text-sm sm:text-[15px]">Items: {order.items.length}</p>
              <p className="mt-2">Method: <span className="font-medium">{order.paymentMethod}</span></p>
              <p className="flex items-center gap-2 mt-1">
                Payment:
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${order.payment ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"}`}
                  aria-label={order.payment ? "Payment done" : "Payment pending"}
                >
                  {order.payment ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2" /></svg>
                  )}
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p className="flex items-center gap-1 mt-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                <span className="ml-1">{new Date(order.date).toLocaleDateString()}</span>
              </p>
            </div>
            {/* Amount */}
            <div className="font-semibold flex items-center justify-center">
              <span className="text-lg sm:text-xl px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-inner border border-gray-200 dark:border-gray-700">
                {currency} {order.amount}
              </span>
            </div>
            {/* Status */}
            <div className="flex flex-col items-center gap-2">
              <label htmlFor={`status-${order._id}`} className="sr-only">Order Status</label>
              <div className="relative w-full">
                <select
                  id={`status-${order._id}`}
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="appearance-none w-full p-2 font-semibold rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm pr-8"
                  aria-label="Order status"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </span>
              </div>
            </div>
          </div>
        ))}
        {orders.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10">
            No orders found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;