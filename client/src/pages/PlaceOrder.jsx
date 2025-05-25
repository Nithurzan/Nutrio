import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/asset";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FiCheckCircle } from "react-icons/fi";
import Skeletons from "../utilitty/Skeleton";
import useLoadingTimer from "../utilitty/useLoadingTimer";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    cartItems,
    setCartItem,
    token,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        if (cartItems[items] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === items)
          );
          if (itemInfo) {
            itemInfo.quanity = cartItems[items];
            orderItems.push(itemInfo);
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod": {
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItem({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useLoadingTimer(setLoading, 1200);

  if (loading) return <Skeletons type="placeOrder" />;

  return (
    <section>
      <div className="container">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col md:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] dark:bg-gray-900 transition-colors duration-300"
        >
          {/* Left side - Delivery Info Card */}
          <div className="flex flex-col gap-4 w-full md:w-[50%] lg:w-[480px] bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 p-8">
            <div className="text-xl sm:text-2xl my-3">
              <Title text1={"DELIVERY"} text2={"INFORMATION"} animate={false} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                onChange={onChangeHandler}
                name="firstName"
                value={formData.firstName}
                required
                type="text"
                placeholder="First name"
                className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                onChange={onChangeHandler}
                name="lastName"
                value={formData.lastName}
                required
                type="text"
                placeholder="Last name"
                className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              onChange={onChangeHandler}
              name="email"
              value={formData.email}
              required
              type="email"
              placeholder="Email address"
              className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              onChange={onChangeHandler}
              name="street"
              value={formData.street}
              required
              type="text"
              placeholder="Street name"
              className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                onChange={onChangeHandler}
                name="city"
                value={formData.city}
                required
                type="text"
                placeholder="City"
                className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                onChange={onChangeHandler}
                name="state"
                value={formData.state}
                required
                type="text"
                placeholder="State"
                className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                onChange={onChangeHandler}
                name="zipcode"
                value={formData.zipcode}
                required
                type="text"
                placeholder="Zipcode"
                className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                onChange={onChangeHandler}
                name="country"
                value={formData.country}
                required
                type="text"
                placeholder="Country"
                className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              onChange={onChangeHandler}
              name="phone"
              value={formData.phone}
              required
              type="tel"
              placeholder="Phone"
              className="border dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Right side - Cart & Payment Card */}
          <div className="flex-1 flex flex-col items-center mt-8 md:mt-0">
            <div className="w-full max-w-md bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 p-4 mb-8">
              <CartTotal />
            </div>
            <div className="w-full max-w-md bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 p-6">
              <Title text1={"PAYMENT"} text2={"METHOD"} animate={false} />
              {/* Payment method selection */}
              <div className="flex flex-col lg:flex-row gap-3 mt-4">
                {/* Stripe */}
                <div
                  onClick={() => setMethod("stripe")}
                  className={`flex items-center gap-3 border rounded-lg p-2 px-3 cursor-pointer transition relative hover:shadow-lg hover:scale-105 duration-200 ${
                    method === "stripe"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {method === "stripe" && (
                    <FiCheckCircle className="text-green-500 mr-2" />
                  )}
                  <span
                    className={`min-w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      method === "stripe" ? "bg-green-400 border-green-400" : ""
                    }`}
                  ></span>
                  <img
                    className="h-5 mx-4"
                    src={assets.stripe_logo}
                    alt="Stripe"
                  />
                </div>
                {/* Razorpay */}
                <div
                  onClick={() => setMethod("razorpay")}
                  className={`flex items-center gap-3 border rounded-lg p-2 px-3 cursor-pointer transition relative hover:shadow-lg hover:scale-105 duration-200 ${
                    method === "razorpay"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {method === "razorpay" && (
                    <FiCheckCircle className="text-green-500 mr-2" />
                  )}
                  <span
                    className={`min-w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      method === "razorpay"
                        ? "bg-green-400 border-green-400"
                        : ""
                    }`}
                  ></span>
                  <img
                    className="h-5 mx-4"
                    src={assets.razorpay_logo}
                    alt="Razorpay"
                  />
                </div>
                {/* COD */}
                <div
                  onClick={() => setMethod("cod")}
                  className={`flex items-center gap-3 border rounded-lg p-2 px-3 cursor-pointer transition relative hover:shadow-lg hover:scale-105 duration-200 ${
                    method === "cod"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {method === "cod" && (
                    <FiCheckCircle className="text-green-500 mr-2" />
                  )}
                  <span
                    className={`min-w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      method === "cod" ? "bg-green-400 border-green-400" : ""
                    }`}
                  ></span>
                  <span className="text-gray-500 dark:text-gray-300 text-sm font-medium mx-4">
                    CASH ON DELIVERY
                  </span>
                </div>
              </div>
              <div className="w-full text-end mt-8">
                <button type="submit" className="secondary-btn">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PlaceOrder;
