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
const placeOrderStrip = async (req, res) => {
  try {
    const orderId = `ORDR-${Date.now()}`;
    const { userId, address, items, amount } = req.body;
    const { origin } = req.headers;

    const currency = "usd"; // Or your desired currency
    const deliveryCharge = 500; // Or get from request or config

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

    // ✅ Build line_items array properly
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

    // ✅ Add delivery as a separate item (no `item` used here)
    line_items.push({
      price_data: {
        currency,
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: deliveryCharge,
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
