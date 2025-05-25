import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import Counter from "../models/counterModel.js";

// Add Product
const addProduct = async (req, res) => {
  try {
    const { name, productInfo, description, price, category } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Get next product number
    let counter = await Counter.findOneAndUpdate(
      { name: "product" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    const productNumber = String(counter.seq).padStart(3, "0");
    const productId = `PROD-${productNumber}`;

    const productData = {
      productId,
      name,
      productInfo,
      description,
      price: Number(price),
      category,
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// List Products (with category info)
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({}).populate("category", "name");
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Remove Product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Single Product (with category info)
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel
      .findById(productId)
      .populate("category", "name");
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Edit Product
const editProduct = async (req, res) => {
  try {
    const { name, description, price, category, productInfo } = req.body;
    const id = req.params.id;
    // Handle images: combine new uploads and existing URLs
    let imagesUrl = [];
    // If new images uploaded, upload to cloudinary
    if (req.files && Object.keys(req.files).length > 0) {
      for (let i = 1; i <= 4; i++) {
        const file = req.files[`image${i}`]?.[0];
        if (file) {
          const result = await cloudinary.uploader.upload(file.path, {
            resource_type: "image",
          });
          imagesUrl.push(result.secure_url);
        } else if (req.body[`existingImage${i}`]) {
          imagesUrl.push(req.body[`existingImage${i}`]);
        }
      }
    } else {
      // No new uploads, just use existing
      for (let i = 1; i <= 4; i++) {
        if (req.body[`existingImage${i}`]) {
          imagesUrl.push(req.body[`existingImage${i}`]);
        }
      }
    }
    const updateData = {
      name,
      description,
      price,
      category,
      productInfo,
      image: imagesUrl,
    };
    const updated = await productModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .populate("category", "name");
    if (!updated) {
      return res.json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product updated!", product: updated });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct, editProduct };
