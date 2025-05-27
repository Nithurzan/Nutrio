import Category from "../models/categoryModel.js";
import { v2 as cloudinary } from "cloudinary";

// Add a new category
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;
    if (!name) return res.status(400).json({ message: "Category name is required" });

    // Check if category already exists
    const exists = await Category.findOne({ name });
    if (exists) return res.status(409).json({ message: "Category already exists" });


    if (!file) return res.status(400).json({ message: "Image is required" });

    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "image",
    });

    const category = new Category({
      name,
      image: result.secure_url,
    });

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// List all categories
export const getAllCategories = async (req, res) => {
   try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};