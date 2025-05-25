import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount, navigate } =
    useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 p-7 sm:p-10 flex flex-col items-center">
      <div className="flex flex-col items-center mb-6">
        <FaShoppingCart className="w-10 h-10 text-primary dark:text-secondary mb-2" />
        <Title text1={"CART"} text2={"TOTALS"} animate={false} />
      </div>
      <div className="flex flex-col gap-4 text-base w-full max-w-md">
        <div className="flex justify-between items-center py-1">
          <span className="text-gray-700 dark:text-gray-200">Subtotal</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {currency}
            {subtotal}.00
          </span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
            <FaShippingFast className="text-primary dark:text-secondary" />
            Shipping Fee
          </span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {currency}
            {delivery_fee}.00
          </span>
        </div>
        <hr className="border-2 border-primary/30 dark:border-secondary/30 my-2 rounded" />
        <div className="flex justify-between items-center py-2">
          <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
            Total
          </span>
          <span className="font-bold text-xl text-primary dark:text-secondary">
            {currency}
            {total}.00
          </span>
        </div>
      </div>
      {location.pathname !== "/place-order" && (
        <button
          className="mt-8 px-8 py-3 rounded-full bg-primary text-white dark:bg-secondary dark:text-gray-900 font-bold shadow-lg hover:bg-secondary dark:hover:bg-primary hover:text-white transition-all text-lg flex items-center gap-2"
          disabled={subtotal === 0}
          type="button"
          onClick={() => navigate("/place-order")}
        >
          Proceed to Checkout
          <FaShoppingCart className="ml-2" />
        </button>
      )}
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        {subtotal >= 100
          ? "🎉 You qualify for free shipping!"
          : "Add more items to your cart for free shipping."}
      </div>
    </div>
  );
};

export default CartTotal;
