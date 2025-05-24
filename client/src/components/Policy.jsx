import React from "react";
import { FaShippingFast, FaLeaf, FaShieldAlt, FaHeadset } from "react-icons/fa";

const policies = [
  {
    icon: <FaShippingFast className="text-primary dark:text-secondary w-8 h-8" />,
    title: "Fast Delivery",
    desc: "Get your order delivered quickly and on time, every time.",
  },
  {
    icon: <FaLeaf className="text-primary dark:text-secondary w-8 h-8" />,
    title: "Fresh & Organic",
    desc: "We guarantee fresh, organic, and high-quality products.",
  },
  {
    icon: <FaShieldAlt className="text-primary dark:text-secondary w-8 h-8" />,
    title: "Secure Payment",
    desc: "Your payment information is processed securely.",
  },
  {
    icon: <FaHeadset className="text-primary dark:text-secondary w-8 h-8" />,
    title: "24/7 Support",
    desc: "Our support team is here to help you anytime.",
  },
];

const Policy = () => (
  <section className="my-20">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">Our Policy</h2>
      <p className="text-gray-500 dark:text-gray-400">Why shop with us?</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {policies.map((policy, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
        >
          <div className="mb-4">{policy.icon}</div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">{policy.title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{policy.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Policy;