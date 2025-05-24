import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Fernando",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Absolutely love the quality and taste! The delivery was quick and the packaging was eco-friendly. Highly recommended!",
  },
  {
    name: "Nimal Perera",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Great service and fresh products. Will definitely order again. The featured products are a must-try!",
  },
  {
    name: "Sajini De Silva",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Customer support was very helpful and the website is easy to use. My family enjoyed everything we ordered.",
  },
];

const Testimonials = () => (
  <section className="my-20">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2 flex items-center justify-center gap-2">
        <FaQuoteLeft className="inline-block text-2xl text-primary dark:text-secondary" />
        What Our Customers Say
      </h2>
      <p className="text-gray-500 dark:text-gray-400">Real feedback from real people</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={t.avatar}
            alt={t.name}
            className="w-20 h-20 rounded-full border-4 border-primary dark:border-secondary mb-4 object-cover shadow"
          />
          <div className="flex gap-1 mb-2">
            {[...Array(t.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-200 italic mb-4">"{t.text}"</p>
          <div className="font-semibold text-primary dark:text-secondary">{t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;