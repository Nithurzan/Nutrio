
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productId: { type: String, unique: true },
  name: { type: String, required: true },
  productInfo: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  date: { type: Number, required: true },
});

const productModel = mongoose.Model.product || mongoose.model("product",productSchema);

export default productModel;