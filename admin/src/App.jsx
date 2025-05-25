import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./pages/Edit";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 min-h-screen min-w-full">
      <ToastContainer />
      {token === "" ? (
        <div className="flex items-center justify-center min-h-screen">
          <Login setToken={setToken} />
        </div>
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr className="border-gray-200 dark:border-gray-800" />
          <div className="flex w-full">
            <Sidebar />
            <main className="w-full max-w-5xl mx-auto ml-[max(5vw,25px)] my-8 text-base text-gray-700 dark:text-gray-200 transition-colors duration-300">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/order" element={<Order token={token} />} />
                <Route path="/edit/:id" element={<Edit token={token} />} />
              </Routes>
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
