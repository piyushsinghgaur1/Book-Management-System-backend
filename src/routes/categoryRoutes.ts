import express from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controllers/categoryController";
import { logging } from "../middleware/logging";
const router = express.Router();

// Routes
router.use(logging);
router.get("/page/:pageNumber", getAllCategories);
router.post("/addcategory", addCategory);
router.delete("/deletecategory/:categoryId", deleteCategory);
router.patch("/updatecategory/:categoryId", updateCategory);

export default router;
