import express from "express";
import { addCategory, getAllCategories } from "../controllers/categoryController.js";
import upload from "../middleware/multer.js";

const categoryRouter = express.Router();

// Correct middleware order: first multer, then controller
categoryRouter.post("/add", upload.single("image"), addCategory);

// Get all categories
categoryRouter.get("/", getAllCategories);

export default categoryRouter;
