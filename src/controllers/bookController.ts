import { Request, Response, NextFunction } from "express";
import Book from "../models/bookModel";
import { showData } from "../modules/showDataModule";
import Author from "../models/authorModel";
import Category from "../models/categoryModel";
import { literal } from "sequelize";
import { addData } from "../modules/addDataModule";
import { updateData } from "../modules/updateDataModule";
import { deleteData } from "../modules/deleteDataModule";

export const getAllBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const books = await Book.findAll({
      attributes: [
        "bookId",
        "title",
        "isbn",
        [
          literal(`"Author"."firstName" || ' ' || "Author"."lastName"`),
          "author",
        ],
        [literal(`"Category"."categoryName"`), "category"],
        "price",
        "discountPrice",
        "publicationDate",
      ],
      include: [
        {
          model: Author,
          attributes: [],
        },
        {
          model: Category,
          attributes: [],
        },
      ],
    });
    return showData(req, res, next, books, "Books");
  } catch (error) {
    console.error("Error reading books data:", error);
    next(error);
  }
};

export const addBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const fields = [
    "bookId",
    "title",
    "price",
    "discountPrice",
    "isbn",
    "publicationDate",
    "authorId",
    "categoryId",
  ];
  return addData(req, res, next, Book, fields, "Book");
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  console.log("deleteBookkjgkj", req.params);
  return deleteData(req, res, next, Book, "Book");
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const fields = [
    "title",
    "isbn",
    "price",
    "discountPrice",
    "publicationDate",
    "authorId",
    "categoryId",
  ];
  return updateData(req, res, next, Book, fields, "Book");
};

export const getLastBookId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const lastBook = await Book.findOne({
      attributes: ["bookId"],
      order: [["bookId", "DESC"]],
    });
    if (lastBook) {
      return res.status(200).json({ bookId: lastBook.dataValues.bookId });
    } else {
      return res.status(404).json({ message: "No books found" });
    }
  } catch (error) {
    console.error("Error fetching last book ID:", error);
    next(error);
  }
};
