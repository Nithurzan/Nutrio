import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//Placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const orderId = `ORDR-${Date.now()}`;
    const { userId, address, items, amount } = req.body;

    const orderData = {
      orderId,
      user: userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Placing orders using Strip method
const placeOrderStrip = async (req, res) => {};

//Placing orders using razorpay method
const placeOrderRazorpay = async (req, res) => {};

//All orders data for Adminpanel
const allOrders = async (req, res) => {
  try {
    let orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//User orders data for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel
      .find({ user: userId })
      .populate("user", "name email");
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Update order status from adminpanel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Upadated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStrip,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
