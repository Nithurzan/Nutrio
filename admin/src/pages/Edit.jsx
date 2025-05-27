import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const Edit = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [initialValues, setInitialValues] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(backendUrl + "/api/category/")
      .then((res) => setCategories(res.data));
    axios
      .post(backendUrl + "/api/product/single", { productId: id })
      .then((res) => {
        setInitialValues(res.data.product);
      });
  }, [id]);

  const handleEdit = async (data) => {
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
        else if (data.existingImages[idx])
          formData.append(`existingImage${idx + 1}`, data.existingImages[idx]);
      });
      const res = await axios.put(`${backendUrl}/api/product/${id}`, formData, {
        headers: { token },
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/list");
      } else toast.error(res.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Failed to update product");
    }
    setLoading(false);
  };

  if (!initialValues.name) return <div>Loading...</div>;

  return (
    <ProductForm
      initialValues={initialValues}
      categories={categories}
      onSubmit={handleEdit}
      loading={loading}
      submitLabel="Save Changes"
    />
  );
};

export default Edit;
