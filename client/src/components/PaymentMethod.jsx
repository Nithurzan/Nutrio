import React, { useState } from "react";
import Title from "./Title";
import { FaStripeS, FaMoneyBillWave } from "react-icons/fa";


const PaymentMethod = ({method, setMethod}) => {

  // List format for payment methods
  const paymentOptions = [
    {
      key: "stripe",
      label: "Stripe",
      icon: <FaStripeS className="h-6 w-6 text-blue-600 mx-4" />,
    },
  
    {
      key: "cod",
      label: "CASH ON DELIVERY",
      icon: <FaMoneyBillWave className="h-6 w-6 text-green-600 mx-4" />,
    },
  ];

  return (
    <div className="mt-12 w-full max-w-md mx-auto bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20 p-6 sm:p-8">
      <Title text1={"PAYMENT"} text2={"METHOD"} />
      {/* Payment method selection as a vertical list */}
      <ul className="flex flex-col gap-4 mt-6">
        {paymentOptions.map((option) => (
          <li key={option.key} className="flex flex-col">
            <div
              onClick={() => setMethod(option.key)}
              className={`flex flex-col sm:flex-row items-center gap-3 border rounded-lg p-3 cursor-pointer transition-all
                ${
                  method === option.key
                    ? "border-primary bg-primary/10 dark:bg-blue-900 ring-2 ring-primary"
                    : "border-gray-200 dark:border-gray-700 hover:border-primary/60 hover:bg-primary/5 dark:hover:bg-blue-900/30"
                }
              `}
            >
              <span
                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200
                  ${
                    method === option.key
                      ? "border-green-500 bg-green-400"
                      : "border-gray-300 dark:border-gray-600"
                  }
                `}
              >
                {method === option.key && (
                  <span className="w-2.5 h-2.5 bg-white rounded-full block"></span>
                )}
              </span>
              <div className="flex flex-col sm:flex-row items-center gap-2 flex-1">
                
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  {option.label}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full text-end mt-10">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white px-10 py-3 text-base rounded-full font-bold shadow-lg hover:from-secondary hover:to-primary hover:scale-105 transition-all duration-300"
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
