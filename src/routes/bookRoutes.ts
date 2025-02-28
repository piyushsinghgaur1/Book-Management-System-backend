import express from "express";
import {
  addBook,
  deleteBook,
  getAllBook,
  getLastBookId,
  updateBook,
} from "../controllers/bookController";
import { logging } from "../middleware/logging";
const router = express.Router();

// Routes
router.use(logging);
router.get("/page/:pageNumber", getAllBook);
router.get("/lastbookid", getLastBookId);
router.post("/addbook", addBook);
router.delete("/deletebook/:bookId", deleteBook);
router.patch("/updatebook/:bookId", updateBook);

export default router;
