import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import reviewRouter from "./routes/reviewRoute.js";
import wishlistRouter from "./routes/wishlistRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*", // your frontend origin
    credentials: true,
  })
);

// api endpoints

app.use("/api/user", userRoute);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/category", categoryRouter);
app.use("/api/review", reviewRouter);
app.use("/api/wishlist", wishlistRouter);

app.get("/", (req, res) => {
  res.send("API Endpoint working");
});

app.listen(port, () => console.log("Server started on Port : " + port));
