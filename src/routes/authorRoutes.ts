import express from "express";
import {
  addAuthor,
  deleteAuthor,
  getAllAuthor,
  updateAuthor,
} from "../controllers/authorController";
import { logging } from "../middleware/logging";

// Routes
const router = express.Router();
router.use(logging);
router.get("/page/:pageNumber", getAllAuthor);
router.post("/addauthor", addAuthor);
router.delete("/deleteauthor/:authorId", deleteAuthor);
router.patch("/updateauthor/:authorId", updateAuthor);

export default router;
