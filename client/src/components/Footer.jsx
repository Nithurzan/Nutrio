// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
// import { FadeLeft, FadeRight, FadeUp } from '../utilitty/Animation'
// import Skeletons from '../utilitty/Skeleton'
// import useLoadingTimer from '../utilitty/useLoadingTimer'

// const Footer = () => {
//   const [loading, setLoading] = useState(true);
  
//   useLoadingTimer(setLoading,1200)
  
//     if (loading) return <Skeletons type="footer" />;
  
//   return (
//     <footer className="relative bg-gradient-to-t from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-10">
//       {/* Accent bar */}
//       <div className="h-1 w-full bg-primary dark:bg-secondary mb-2" />
//       <div className="container text-gray-700 dark:text-gray-300 py-10">
//         {/* Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-14 gap-y-10 my-10 text-sm sm:text-left text-center">
//           {/* Company Info */}
//           <motion.div
//             variants={FadeRight(0.3)}
//             initial="hidden"
//             whileInView={"visible"}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col items-center md:items-start"
//           >
//             <Link className="flex items-center justify-center md:justify-start text-2xl font-poppins font-bold gap-2 hover:opacity-80 transition" to="/">
//               <img className="h-9 w-9" src="./logo.png" alt="Nutrio Logo" />
//               <p className="text-primary font-poppins">
//                 <span className="text-accent">N</span>utrio
//               </p>
//             </Link>
//             <p className="w-full md:w-2/3 text-gray-600 dark:text-gray-400 mt-4">
//               Your trusted partner for healthy living. Explore our products and services today.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             variants={FadeUp(0.7)}
//             initial="hidden"
//             whileInView={"visible"}
//             className="flex flex-col items-center md:items-start"
//           >
//             <p className="text-base font-bold mb-5 uppercase tracking-wide text-primary dark:text-secondary">Quick Links</p>
//             <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
//               <li><Link to="/" className="hover:text-primary dark:hover:text-secondary transition">Home</Link></li>
//               <li><Link to="/products" className="hover:text-primary dark:hover:text-secondary transition">Shop</Link></li>
//               <li><Link to="/about" className="hover:text-primary dark:hover:text-secondary transition">About Us</Link></li>
//               <li><Link to="/contact" className="hover:text-primary dark:hover:text-secondary transition">Contact</Link></li>
//               <li><Link to="/faq" className="hover:text-primary dark:hover:text-secondary transition">FAQ</Link></li>
//             </ul>
//           </motion.div>

//           {/* Customer Support */}
//           <motion.div
//             variants={FadeUp(1.1)}
//             initial="hidden"
//             whileInView={"visible"}
//             className="flex flex-col items-center md:items-start"
//           >
//             <p className="text-base font-bold mb-5 uppercase tracking-wide text-primary dark:text-secondary">Customer Support</p>
//             <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
//               <li><Link to="/shipping" className="hover:text-primary dark:hover:text-secondary transition">Shipping & Returns</Link></li>
//               <li><Link to="/privacy" className="hover:text-primary dark:hover:text-secondary transition">Privacy Policy</Link></li>
//               <li><Link to="/terms" className="hover:text-primary dark:hover:text-secondary transition">Terms of Service</Link></li>
//               <li><Link to="/orders" className="hover:text-primary dark:hover:text-secondary transition">Track Order</Link></li>
//             </ul>
//           </motion.div>

//           {/* Social Media */}
//           <motion.div
//             variants={FadeLeft(1.4)}
//             initial="hidden"
//             whileInView={"visible"}
//             className="flex flex-col items-center md:items-start"
//           >
//             <p className="text-base font-bold mb-5 uppercase tracking-wide text-primary dark:text-secondary">Follow Us</p>
//             <div className="flex gap-4 justify-center md:justify-start mb-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-secondary transition"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-secondary transition"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Twitter"
//                 className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-secondary transition"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="YouTube"
//                 className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-secondary transition"
//               >
//                 <FaYoutube />
//               </a>
//             </div>
//             {/* Address, Phone, and Email */}
//             <div className="flex flex-col items-center md:items-start gap-1 text-xs">
//               <p className="text-gray-600 dark:text-gray-400">
//                 Address: 123 Nutrio Street, Wellness City
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">Phone: +94 123456789</p>
//               <p className="text-gray-600 dark:text-gray-400">Email: contact@nutrio.com</p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Footer Bottom */}
//         <motion.div
//           variants={FadeUp(1.7)}
//           initial="hidden"
//           whileInView={"visible"}
//         >
//           <hr className="border-gray-300 dark:border-gray-700" />
//           <p className="py-5 text-xs text-center text-gray-600 dark:text-gray-400">
//             © 2025 Nutrio. All rights reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }

// export default Footer



import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FadeLeft, FadeRight, FadeUp } from '../utilitty/Animation'
import Skeletons from '../utilitty/Skeleton'
import useLoadingTimer from '../utilitty/useLoadingTimer'

const Footer = () => {
  const [loading, setLoading] = useState(true);
  useLoadingTimer(setLoading, 1200)
  if (loading) return <Skeletons type="footer" />;

  return (
    <footer className="relative bg-gradient-to-t from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-10">
      {/* Accent bar */}
      <div className="h-1 w-full bg-primary dark:bg-secondary mb-2" />
      <div className="container flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-7xl backdrop-blur-lg px-6 py-10"
        >
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-14 gap-y-10 my-10 text-sm sm:text-left text-center">
            {/* Company Info */}
            <motion.div
              variants={FadeRight(0.3)}
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <Link className="flex items-center justify-center md:justify-start text-2xl font-poppins font-bold gap-2 hover:opacity-80 transition" to="/">
                <img className="h-9 w-9" src="./logo.png" alt="Nutrio Logo" />
                <p className="text-primary font-poppins">
                  <span className="text-accent">N</span>utrio
                </p>
              </Link>
              <p className="w-full md:w-2/3 text-gray-600 dark:text-gray-400 mt-4">
                Your trusted partner for healthy living. Explore our products and services today.
              </p>
              {/* Tagline/Testimonial */}
              <div className="mt-4 italic text-primary dark:text-secondary text-xs font-semibold">
                “Eat well, live well, be well.”
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-base font-bold mb-5 uppercase tracking-wide text-primary dark:text-secondary">Quick Links</p>
              <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
                <li><Link to="/" className="hover:text-primary dark:hover:text-secondary transition">Home</Link></li>
                <li><Link to="/products" className="hover:text-primary dark:hover:text-secondary transition">Shop</Link></li>
                <li><Link to="/about" className="hover:text-primary dark:hover:text-secondary transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary dark:hover:text-secondary transition">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-primary dark:hover:text-secondary transition">FAQ</Link></li>
              </ul>
            </motion.div>

            {/* Customer Support */}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-base font-bold mb-5 uppercase tracking-wide text-primary dark:text-secondary">Customer Support</p>
              <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
                <li><Link to="/shipping" className="hover:text-primary dark:hover:text-secondary transition">Shipping & Returns</Link></li>
                <li><Link to="/privacy" className="hover:text-primary dark:hover:text-secondary transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary dark:hover:text-secondary transition">Terms of Service</Link></li>
                <li><Link to="/orders" className="hover:text-primary dark:hover:text-secondary transition">Track Order</Link></li>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={FadeLeft(1.4)}
              initial="hidden"
              whileInView={"visible"}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-base font-bold mb-5 uppercase tracking-wide text-primary dark:text-secondary">Follow Us</p>
              <div className="flex gap-4 justify-center md:justify-start mb-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="facebook"
                  aria-label="Facebook"
                  className="p-3 rounded-full bg-gradient-to-tr from-primary/80 to-secondary/80 text-white text-xl shadow hover:scale-110 hover:from-secondary hover:to-primary transition-all duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="instagram"
                  aria-label="Instagram"
                  className="p-3 rounded-full bg-gradient-to-tr from-primary/80 to-secondary/80 text-white text-xl shadow hover:scale-110 hover:from-secondary hover:to-primary transition-all duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="twitter"
                  aria-label="Twitter"
                  className="p-3 rounded-full bg-gradient-to-tr from-primary/80 to-secondary/80 text-white text-xl shadow hover:scale-110 hover:from-secondary hover:to-primary transition-all duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="youtube"
                  aria-label="YouTube"
                  className="p-3 rounded-full bg-gradient-to-tr from-primary/80 to-secondary/80 text-white text-xl shadow hover:scale-110 hover:from-secondary hover:to-primary transition-all duration-300"
                >
                  <FaYoutube />
                </a>
              </div>
              {/* Address, Phone, and Email */}
              <div className="flex flex-col items-center md:items-start gap-1 text-xs">
                <p className="text-gray-600 dark:text-gray-400">
                  Address: 123 Nutrio Street, Wellness City
                </p>
                <p className="text-gray-600 dark:text-gray-400">Phone: +94 123456789</p>
                <p className="text-gray-600 dark:text-gray-400">Email: contact@nutrio.com</p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full flex justify-center">
            <hr className="border-2 border-primary/20 dark:border-secondary/20 rounded-full w-1/2 my-4" />
          </div>
          {/* Footer Bottom */}
          <motion.div
            variants={FadeUp(1.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-xs text-center text-gray-600 dark:text-gray-400">
              © 2025 Nutrio. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer