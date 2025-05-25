import userModel from "../models/userModel.js";

// Add product to wishlist
export const addToWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    await userModel.findByIdAndUpdate(userId, {
      $addToSet: { wishlist: productId },
    });
    res.json({ success: true, message: "Added to wishlist" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Remove product from wishlist
export const removeFromWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    await userModel.findByIdAndUpdate(userId, {
      $pull: { wishlist: productId },
    });
    res.json({ success: true, message: "Removed from wishlist" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// List user's wishlist
export const getWishlist = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId).populate("wishlist");
    res.json({ success: true, wishlist: user.wishlist });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
