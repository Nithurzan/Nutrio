import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeLeft } from '../utilitty/Animation'
import { ShopContext } from '../context/ShopContext'
import { FaChevronDown, FaChevronUp, FaTag } from 'react-icons/fa'

const Category = () => {
  const { setCategory, categories, navigate } = useContext(ShopContext)
  const [showAll, setShowAll] = useState(false)


  // Show all or only first 4 categories
  const displayedCategories = showAll ? categories : categories.slice(0, 4)

  // Handle category click: set filter and navigate
  const handleCategoryClick = (catId) => {
    setCategory([catId])
    navigate(`/products/`)
  }

  return (
    <section>
      <div className="pt-12 pb-20">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-2">Shop by Category</h2>
          <p className="text-gray-500 dark:text-gray-400">Find products by your favorite category</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 mt-12">
          {displayedCategories.map((item, id) => (
            <motion.div
              key={id}
              variants={FadeLeft(0.3)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
              className="cursor-pointer"
              onClick={() => handleCategoryClick(item._id)}
            >
              <div
                className="w-full flex flex-col items-center justify-center gap-4 bg-white/90 dark:bg-gray-900/90 border border-primary/10 dark:border-secondary/20 rounded-3xl px-8 py-8 min-h-[140px] shadow-xl hover:shadow-2xl transition hover:border-primary dark:hover:border-secondary hover:bg-primary/10 dark:hover:bg-secondary/10"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Decorative gradient circle */}
                <span className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-60 pointer-events-none"></span>
                <div className="mb-2 flex items-center justify-center">
                  {item.icon ? (
                    <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain drop-shadow-lg" />
                  ) : (
                    <FaTag className="text-primary dark:text-secondary w-10 h-10 drop-shadow-lg" />
                  )}
                </div>
                <h1 className="text-xl font-bold text-gray-700 dark:text-gray-100 font-poppins text-center">{item.name}</h1>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle button for showing/hiding all categories */}
        <div className="flex justify-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="relative flex items-center secondary-btn"
              type="button"
            >
              <span className="tracking-wide">View All Categories</span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 shadow-lg">
                <FaChevronDown className="w-5 h-5" />
              </span>
              <span className="absolute inset-0 rounded-xl ring-2 ring-primary/30 dark:ring-secondary/30 opacity-0 group-hover:opacity-100 transition"></span>
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="relative flex items-center gap-3 px-8 py-3 rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold shadow-xl hover:bg-gray-400 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300 group border-none mt-12"
              type="button"
            >
              <span className="tracking-wide">Hide Categories</span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 text-gray-700 dark:text-gray-100 transition-transform duration-300 group-hover:-translate-x-1 group-hover:scale-110 shadow-lg">
                <FaChevronUp className="w-5 h-5" />
              </span>
              <span className="absolute inset-0 rounded-xl ring-2 ring-primary/20 dark:ring-secondary/20 opacity-0 group-hover:opacity-100 transition"></span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Category