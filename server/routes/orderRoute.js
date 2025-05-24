import express from "express";
import {
  placeOrder,
  placeOrderStrip,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/authUser.js";

const orderRouter = express.Router();

//Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payment Feature
orderRouter.post("/place", userAuth, placeOrder);
orderRouter.post("/strip", userAuth, placeOrderStrip);
orderRouter.post("/razorpay", userAuth, placeOrderRazorpay);

//user feature
orderRouter.post("/userorders", userAuth, userOrders);

export default orderRouter;
