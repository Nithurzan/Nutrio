import express from "express";
import {
  adminLogin,
  regiesterUser,
  loginUser,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/regiester", regiesterUser);
userRoute.post("/login", loginUser);
userRoute.post("/admin", adminLogin);

export default userRoute;
