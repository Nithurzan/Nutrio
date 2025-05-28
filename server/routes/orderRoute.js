import express from "express";
import {
  placeOrder,
  placeOrderStrip,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
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

//user feature
orderRouter.post("/userorders", userAuth, userOrders);

//verifr stripe
orderRouter.post("/verifyStripe", userAuth,verifyStripe);

export default orderRouter;
