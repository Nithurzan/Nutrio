// Example: server/routes/userRoutes.js
import express from "express";
import { addToWishlist, removeFromWishlist, getWishlist } from "../controllers/wishlistController.js";
import authUser from "../middleware/authUser.js";



const wishlistRouter = express.Router();

wishlistRouter.post("/add",authUser , addToWishlist);
wishlistRouter.post("/remove",authUser, removeFromWishlist);
wishlistRouter.post("/list",authUser, getWishlist);

export default wishlistRouter;