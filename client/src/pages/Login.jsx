import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/asset";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FaUserCircle, FaLeaf } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { setToken, navigate, token, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (currentState === "Signup" && !name) {
      toast.error("Please enter your name.");
      return;
    }
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      if (currentState === "Signup") {
        const response = await axios.post(backendUrl + "/api/user/regiester", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Signup successful! ");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful!");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-300 to-purple-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="flex w-full max-w-4xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl overflow-hidden border border-primary/20 dark:border-secondary/20">
        {/* Left Side - Illustration & Welcome */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-primary/80 to-secondary/80 text-white p-10 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex flex-col items-center"
          >
            <img
              src={assets.logo}
              alt="Nutrio Logo"
              className="w-20 h-20 mb-6 drop-shadow-lg filter invert brightness-0"
              style={{ filter: "invert(1) brightness(2)" }} 
            />
            <h2 className="text-4xl font-extrabold mb-2 tracking-wide drop-shadow-lg">
              Welcome to Nutrio
            </h2>
            <p className="text-lg font-medium text-white/90 mb-8 text-center">
              {currentState === "Login"
                ? "Sign in to access your personalized nutrition journey."
                : "Create your account and start your healthy lifestyle today!"}
            </p>
            <div className="w-40 h-40 rounded-full bg-white/20 blur-2xl absolute -bottom-10 -right-10"></div>
          </motion.div>
        </div>
        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.form
              key={currentState}
              onSubmit={onSubmitHandler}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full gap-6"
            >
              <FaUserCircle className="w-16 h-16 text-primary dark:text-secondary mb-2" />
              <div className="text-center mb-2">
                <p className="text-3xl font-extrabold mb-1 text-primary dark:text-secondary tracking-wide">
                  {currentState}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base">
                  {currentState === "Login"
                    ? "Welcome back! Please sign in to your account."
                    : "Create your account to get started."}
                </p>
              </div>
              {currentState === "Signup" && (
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                  placeholder="Name"
                  required
                />
              )}
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                placeholder="Email"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                placeholder="Password"
                required
              />
              <button
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-3 mt-2 rounded-full shadow-lg hover:from-secondary hover:to-primary hover:scale-105 transition-all text-lg"
                type="submit"
              >
                {currentState === "Login" ? "Sign In" : "Sign Up"}
              </button>
              <button
                type="button"
                className="text-sm text-primary underline hover:text-primary/80 transition"
                onClick={() => toast.info("Password reset not implemented.")}
              >
                Forgot your password?
              </button>
              <div className="text-sm mt-2">
                {currentState === "Login" ? (
                  <span>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="text-primary underline hover:text-primary/80 transition"
                      onClick={() => setCurrentState("Signup")}
                    >
                      Create account
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-primary underline hover:text-primary/80 transition"
                      onClick={() => setCurrentState("Login")}
                    >
                      Login Here
                    </button>
                  </span>
                )}
              </div>
            </motion.form>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Login;
