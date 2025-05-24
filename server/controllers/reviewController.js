import reviewModel from "../models/reviewModel.js";
import "../models/userModel.js"; 

// Add a review
export const addReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const user = req.body.userId; 
    const review = new reviewModel({ product, user, rating, comment });
    await review.save();
    const populatedReview = await review.populate("user", "name email");
    res.json({ success: true, review: populatedReview });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get reviews for a product
export const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await reviewModel
      .find({ product: productId })
      .populate("user", "name email")
    //   .sort({ date: -1 });
    res.json({ success: true, reviews });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};