import express from "express";
import { addCategory, getAllCategories } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

// Add a new category
categoryRouter.post("/add", addCategory);

// Get all categories
categoryRouter.get("/", getAllCategories);

export default categoryRouter;