import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(backendUrl + "/api/category/").then(res => setCategories(res.data));
  }, []);

  const handleAdd = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("productInfo", data.productInfo);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("price", data.price);
      data.images.forEach((img, idx) => {
        if (img) formData.append(`image${idx + 1}`, img);
      });
      const res = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });
      if (res.data.success) toast.success(res.data.message);
      else toast.error(res.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Failed to add product");
    }
    setLoading(false);
  };

  return (
    <ProductForm
      categories={categories}
      onSubmit={handleAdd}
      loading={loading}
      submitLabel="Add"
    />
  );
};

export default Add;