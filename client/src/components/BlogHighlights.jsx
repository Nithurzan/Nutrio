import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "10 Healthy Snacks for Busy People",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    date: "May 2025",
    excerpt:
      "Discover quick and nutritious snacks to keep you energized throughout your busy day.",
    link: "#",
  },
  {
    id: 2,
    title: "How to Choose Organic Products",
    image:
      "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80",
    date: "April 2025",
    excerpt:
      "A simple guide to understanding organic labels and making better choices for your family.",
    link: "#",
  },
  {
    id: 3,
    title: "Meal Prep Tips for Beginners",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    date: "March 2025",
    excerpt:
      "Save time and eat healthy with these easy meal prep strategies for every lifestyle.",
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const BlogHighlights = () => (
  <motion.section
    className="my-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">
        Blog Highlights
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Tips, guides, and inspiration from our experts
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogs.map((blog, i) => (
        <motion.div
          key={blog.id}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300"
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="flex-1 flex flex-col p-6">
            <span className="text-xs text-primary dark:text-secondary font-semibold uppercase mb-2">
              {blog.date}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
              {blog.excerpt}
            </p>
            <a
              href={blog.link}
              className="inline-flex items-center gap-2 text-primary dark:text-secondary font-semibold hover:underline mt-auto group"
            >
              Read More
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default BlogHighlights;
