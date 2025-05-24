import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { assets } from '../assets/asset'
import RelatedProducts from '../components/RelatedProduct'
import { ShopContext } from '../context/ShopContext'
import Describtion from '../components/Describtion'
import { motion } from 'framer-motion'
import { FadeLeft, FadeRight, FadeUp } from '../utilitty/Animation'
import { FiShoppingCart, FiHeart , FiStar} from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import Skeletons from '../utilitty/Skeleton'

const ProductDetails = () => {
  const { productId } = useParams()
  const { products, currency, addToCart, backendUrl, token, wishlist, removeFromWishlist ,addWishList } = useContext(ShopContext)
  const [image, setImage] = useState('')
  const [productData, setProductData] = useState(null)
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [loading, setLoading] = useState(true)
 

  // Add to wishlist handler (toggle)
  const handleAddToWishlist = (product) => {
  if (!token) return;
  if (wishlist.some(item => item.id === product._id)) {
    removeFromWishlist(product);
  } else {
    addWishList(product);
  }
};

  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((item) => String(item._id) === String(productId))
      if (product) {
        setProductData(product)
        setImage(product.image?.[0] || '')
      }
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [productId, products])

  useEffect(() => {
    if (productData?._id) {
      axios.get(backendUrl+`/api/review/${productData._id}`).then(res => {
        if (res.data.success) {
          setReviews(res.data.reviews);
          // Calculate average
          if (res.data.reviews.length > 0) {
            const avg = res.data.reviews.reduce((sum, r) => sum + r.rating, 0) / res.data.reviews.length;
            setAverageRating(avg);
          } else {
            setAverageRating(0);
          }
        }
      });
    }
  }, [productData]);

  if (loading) return <Skeletons type="productDetails" />;

  if (!productData) {
    return <div className="p-10 text-center text-red-500 dark:text-red-400">Product not found.</div>
  }

  return (
    <section>
      <div className="container mt-8 px-4 py-10 md:py-16">
        {/* Product Data */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Product Gallery */}
          <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
            {/* Thumbnails */}
            <div
              className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[20%] w-full custom-scrollbar gap-2"
              style={{ maxHeight: '400px' }}
            >
              {productData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  loading='lazy'
                  className={`w-24 h-24 sm:w-[132px] sm:h-[132px] object-cover rounded-xl border-2 cursor-pointer transition
                    ${image === item
                      ? 'border-primary ring-2 ring-primary scale-105 shadow-lg'
                      : 'border-gray-200 hover:border-primary/60 hover:scale-105'}
                    bg-white dark:bg-gray-800`}
                  onClick={() => setImage(item)}
                />
              ))}
            </div>
            {/* Main Image */}
            <div className="w-full sm:w-[80%] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-primary/10 dark:border-secondary/20 p-0 h-[400px] transition-transform hover:scale-105">
              <img
                src={image}
                alt=""
                loading='lazy'
                className="h-full w-full object-contain rounded-2xl"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </div>

          {/* Product Info Card */}
          <div className="flex-1 flex flex-col justify-center p-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-2xl shadow-2xl border border-primary/20 dark:border-secondary/20">
            <motion.h1
              variants={FadeLeft(0.6)}
              initial="hidden"
              whileInView="visible"
              className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-gray-100 mb-2"
            >
              {productData.name}
            </motion.h1>

            {/* Rating */}
            <motion.div
              variants={FadeLeft(0.1)}
              initial="hidden"
              whileInView="visible"
              className="flex items-center gap-1 mt-2"
            >
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}`}
                  aria-label={i < Math.round(averageRating) ? "Filled star" : "Empty star"}
                />
              ))}
              <span className="ml-2 text-xs text-gray-500">
                {averageRating > 0 ? averageRating.toFixed(1) : "No"} / 5 ({reviews.length} reviews)
              </span>
            </motion.div>

            {/* Price & Info */}
            <motion.div
              variants={FadeRight(0.3)}
              initial="hidden"
              whileInView="visible"
            >
              <p className="mt-5 text-3xl font-semibold text-primary dark:text-primary">{currency}{productData.price}</p>
              <hr className="my-4 w-24 border-primary/30 dark:border-secondary/30" />
              <p className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: productData.productInfo }}
              ></p>
            </motion.div>
            {/* AddToCart & Wishlist Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
              <motion.button
                variants={FadeUp(0.4)}
                initial="hidden"
                whileInView="visible"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg hover:from-secondary hover:to-primary hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto"
                onClick={() => addToCart(productData._id)}
              >
                <FiShoppingCart className="w-5 h-5" />
                ADD TO CART
              </motion.button>
              <motion.button
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                className={`rounded-full p-3 border-2 transition
                  ${wishlist.some(item => item.id === productData._id)
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-white text-pink-500 border-pink-500 hover:bg-pink-50"}
                `}
                style={{ minWidth: "48px", minHeight: "48px" }}
                onClick={() => handleAddToWishlist(productData)}
                aria-label="Add to wishlist"
              >
                {wishlist.some(item => item.id === productData._id)
                  ? <FaHeart className="w-6 h-6" />
                  : <FiHeart className="w-6 h-6" />}
              </motion.button>
            </div>

            <hr className="mt-8 sm:w-4/5 border-gray-200 dark:border-gray-700" />
            <motion.div
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-sm text-gray-500 dark:text-gray-400 mt-5 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <img src={assets.verified_icon} alt="" className="w-4 h-4" />
                <span>100% Original product</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.cod_icon} alt="" className="w-4 h-4" />
                <span>Cash on delivery is available on this product</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.return_icon} alt="" className="w-4 h-4" />
                <span>Easy return and exchange policy within 7 days</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonial/Review Card */}
        <div className="w-full max-w-lg mx-auto mt-12 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-primary/10 dark:border-secondary/20 p-6 text-center">
          <p className="text-primary dark:text-secondary font-semibold text-base">
            “This product exceeded my expectations! Highly recommend Nutrio for quality and service.”
          </p>
          <span className="text-gray-500 dark:text-gray-400 text-xs">— Verified Buyer</span>
        </div>


        {/* Description Section */}
        <motion.div
          className="mt-12 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-6"
          variants={FadeUp(0.5)}
          initial="hidden"
          animate="visible"
        >
          <Describtion productDescribtion={productData.description} productId={productData._id} />
        </motion.div>
        {/* Related Products */}
        <div className="mt-16">
          <RelatedProducts category={productData.category} />
        </div>
      </div>
    </section>
  )
}

export default ProductDetails