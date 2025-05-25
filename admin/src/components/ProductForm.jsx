import React, { useState, useEffect } from "react";
import { FiUploadCloud, FiPlus, FiSave } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const quillModules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ],
};

const ProductForm = ({
  initialValues = {},
  categories: categoriesProp = [],
  setCategories: setCategoriesProp,
  onSubmit,
  loading = false,
  submitLabel = "Add",
}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState(initialValues.name || "");
  const [productInfo, setProductInfo] = useState(
    initialValues.productInfo || ""
  );
  const [description, setDescription] = useState(
    initialValues.description || ""
  );
  const [price, setPrice] = useState(initialValues.price || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [existingImages, setExistingImages] = useState(
    initialValues.image || []
  );

  // For new category
  const [newCategory, setNewCategory] = useState("");
  const [addingCategory, setAddingCategory] = useState(false);

  // Local categories state if not provided by parent
  const [categories, setCategories] = useState(categoriesProp);

  useEffect(() => {
    setCategories(categoriesProp);
  }, [categoriesProp]);

  useEffect(() => {
    if (initialValues.image) setExistingImages(initialValues.image);
    if (initialValues.category) setCategory(initialValues.category);
    if (initialValues.name) setName(initialValues.name);
    if (initialValues.productInfo) setProductInfo(initialValues.productInfo);
    if (initialValues.description) setDescription(initialValues.description);
    if (initialValues.price) setPrice(initialValues.price);
  }, [initialValues]);

  const imageStates = [
    [image1, setImage1, existingImages?.[0]],
    [image2, setImage2, existingImages?.[1]],
    [image3, setImage3, existingImages?.[2]],
    [image4, setImage4, existingImages?.[3]],
  ];

  // Add new category handler
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;
    setAddingCategory(true);
    try {
      const res = await axios.post(backendUrl + "/api/category/add", {
        name: newCategory,
      });
      // Update categories in local state and parent if provided
      setCategories((prev) => [...prev, res.data]);
      if (setCategoriesProp) setCategoriesProp((prev) => [...prev, res.data]);
      setCategory(res.data._id);
      setNewCategory("");
      toast.success("Category added!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add category");
    }
    setAddingCategory(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      productInfo,
      description,
      price,
      category,
      images: [image1, image2, image3, image4],
      existingImages,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full max-w-2xl mx-auto gap-6 bg-white dark:bg-gray-900 rounded-2xl shadow p-6 sm:p-10 mt-6 transition-colors duration-300"
    >
      {/* Image Upload Section */}
      <div className="w-full">
        <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
          Images
        </p>
        <div className="flex gap-3 flex-wrap">
          {imageStates.map(([img, setImg, existing], idx) => (
            <label
              htmlFor={`image${idx + 1}`}
              key={idx}
              className="cursor-pointer flex items-center justify-center w-24 h-24 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition-all duration-200 relative group"
              tabIndex={0}
              aria-label={`Image ${idx + 1}`}
            >
              {img ? (
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Preview ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : existing ? (
                <img
                  src={existing}
                  alt={`Existing ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <FiUploadCloud className="text-3xl text-gray-400 group-hover:text-accent transition" />
              )}
              <input
                onChange={(e) => setImg(e.target.files[0])}
                type="file"
                id={`image${idx + 1}`}
                hidden
                accept="image/*"
              />
            </label>
          ))}
        </div>
      </div>

      <hr className="w-full border-gray-200 dark:border-gray-700 my-2" />

      {/* Product Details Section */}
      <div className="w-full grid grid-cols-1 gap-4">
        <div>
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
            Product Name
          </p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            type="text"
            placeholder="Type here"
            required
          />
        </div>
        <div>
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
            Product Info
          </p>
          <ReactQuill
            value={productInfo}
            onChange={setProductInfo}
            modules={quillModules}
            className="bg-gray-50 dark:bg-gray-800 rounded"
            theme="snow"
            required={true}
          />
        </div>
        <div>
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
            Product Description
          </p>
          <ReactQuill
            value={description}
            onChange={setDescription}
            modules={quillModules}
            className="bg-gray-50 dark:bg-gray-800 rounded"
            theme="snow"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex-1">
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
            Product Category
          </p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
            required
          >
            {categories.length === 0 ? (
              <option value="">No categories found</option>
            ) : (
              categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))
            )}
          </select>
          {/* New Category Input */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Add new category"
              className="flex-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              disabled={addingCategory || !newCategory.trim()}
              className="px-3 py-1 bg-primary text-white rounded text-sm disabled:opacity-50 hover:bg-secondary transition"
            >
              {addingCategory ? "Adding..." : "Add"}
            </button>
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-2 font-semibold text-gray-700 dark:text-gray-200">
            Product Price
          </p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
            type="number"
            placeholder="25"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-44 mt-4 py-3 flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-blue-400"
        disabled={loading}
      >
        {submitLabel === "Add" ? (
          <FiPlus className="text-lg" />
        ) : (
          <FiSave className="text-lg" />
        )}
        {submitLabel}
      </button>
    </form>
  );
};

export default ProductForm;
