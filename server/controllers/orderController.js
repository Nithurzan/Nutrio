import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

//global variables
const currency = "INR";
const deliveryCharge = 10;

//gatway initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//Placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { address, items, amount } = req.body;
    const userId = req.body.userId;

    console.log("REQ BODY:", req.body);

    if (!userId || !Array.isArray(items) || items.length === 0 || !amount) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid order data" });
    }
    const orderId = `ORDR-${Date.now()}`;

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
const placeOrderStrip = async (req, res) => {
  try {
    const { address, items, amount } = req.body;
    const { origin } = req.headers;

    const userId = req.body.userId;

    if (!userId || !Array.isArray(items) || items.length === 0 || !amount) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid order data" });
    }
    const orderId = `ORDR-${Date.now()}`;

    const orderData = {
      orderId,
      user: userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((product) => ({
      price_data: {
        currency,
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    line_items.push({
      price_data: {
        currency,
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: deliveryCharge * 10,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Stripe Error: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// verify stripe
const verifyStripe = async (req, res) => {
  const { orderId, success } = req.body;
  const userId = req.body.userId;

  try {
    if (success === true) {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true, message: "Payment Successful" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment Failed" });
    }
  } catch (error) {
    console.error("Verification Error: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

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
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
};
