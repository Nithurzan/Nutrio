import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  // Fetch all products
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // Remove a product
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Edit a product
  const editProduct = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
        List All Products
      </p>
      <div className="flex flex-col gap-2">
        {/* Table Header */}
        <div
          className="hidden md:grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 rounded-t-lg shadow-sm"
          role="row"
        >
          <b>Product ID</b>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr_1fr] items-center gap-2 text-sm py-2 px-3 border-b bg-white dark:bg-gray-900 transition-colors duration-200 rounded-lg md:rounded-none shadow hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus-within:ring-2 focus-within:ring-accent"
            key={item._id}
            tabIndex={0}
            aria-label={`Product: ${item.name}, Price: ${currency}${item.price}`}
            role="row"
          >
            {/* Product ID */}
            <p className="font-mono text-xs text-blue-700 dark:text-blue-300 break-all">
              {item.productId}
            </p>

            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                className="w-14 h-14 object-cover rounded border border-gray-200 dark:border-gray-700"
                src={item.image[0]}
                alt={item.name}
                loading="lazy"
              />
            </div>

            {/* Name */}
            <p className="font-medium text-gray-800 dark:text-gray-100 truncate max-w-xs">
              {item.name}
            </p>
            {/* Category */}
            <p className="text-gray-600 dark:text-gray-300">
              {item.category?.name}
            </p>
            {/* Price */}
            <p className="text-gray-800 dark:text-gray-100">
              {currency}
              {item.price}
            </p>
            {/* Edit & Delete Actions - Centered */}
            <div className="flex items-center justify-center gap-2 w-full">
              <button
                onClick={() => editProduct(item._id)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-600 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-sm border border-transparent hover:border-blue-400"
                title="Edit"
                aria-label={`Edit ${item.name}`}
                tabIndex={0}
                type="button"
              >
                <FiEdit2 aria-hidden="true" size={18} />
              </button>
              <span
                className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1"
                aria-hidden="true"
              ></span>
              <button
                onClick={() => removeProduct(item._id)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-red-600 hover:text-white hover:bg-red-600 dark:hover:bg-red-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 shadow-sm border border-transparent hover:border-red-400"
                title="Delete"
                aria-label={`Delete ${item.name}`}
                tabIndex={0}
                type="button"
              >
                <FiTrash2 aria-hidden="true" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
