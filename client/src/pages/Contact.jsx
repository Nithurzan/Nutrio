import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { FadeLeft, FadeRight, FadeUp } from "../utilitty/Animation";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Skeletons from "../utilitty/Skeleton";
import useLoadingTimer from "../utilitty/useLoadingTimer";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useLoadingTimer(setLoading, 1200);

  if (loading) return <Skeletons type="contact" />;

  return (
    <section>
      <div className="container mx-auto px-4 py-16 mt-20 space-y-16">
        {/* Title */}
        <div className="text-center">
          <Title text1={"Contact"} text2={"Us"} delay={0.3} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={FadeRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8"
          >
            <p className="flex items-center gap-3 text-lg">
              <FiMail className="text-primary dark:text-secondary" />
              <span>
                <strong>Email:</strong> support@nutrio.com
              </span>
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FiPhone className="text-primary dark:text-secondary" />
              <span>
                <strong>Phone:</strong> +1 (555) 123-4567
              </span>
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FiMapPin className="text-primary dark:text-secondary" />
              <span>
                <strong>Address:</strong> 123 Healthy St, Green City, Earth
              </span>
            </p>
            <p className="text-lg leading-relaxed">
              We’d love to hear from you. Whether you have a question about
              products, pricing, or anything else—our team is ready to answer
              all your questions.
            </p>
          </motion.div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
            <motion.input
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary shadow"
              required
            />
            <motion.input
              variants={FadeLeft(0.8)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary shadow"
              required
            />
            <motion.textarea
              variants={FadeLeft(1.1)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary shadow"
              required
            ></motion.textarea>
            <motion.button
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="primary-btn w-full bg-accent text-white px-6 py-3 rounded-lg dark:bg-secondary dark:hover:bg-primary dark:text-gray-900 flex items-center justify-center gap-2"
            >
              <FiSend className="text-lg" />
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Google Map */}
        <motion.div
          variants={FadeUp(1.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-gray-100 dark:border-gray-700"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468165!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e2c5b1%3A0x4a0b8f1b5f5b8b9!2s123%20Healthy%20St%2C%20Green%20City%2C%20Earth!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg w-full min-h-[250px] sm:min-h-[400px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
