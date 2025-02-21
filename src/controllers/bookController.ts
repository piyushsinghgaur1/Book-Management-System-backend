import { Request, Response } from "express";
import Book from "../models/bookModel";
import { showData } from "../modules/showDataModule";
import Author from "../models/authorModel";
import Category from "../models/categoryModel";
import { literal } from "sequelize";
import { addData } from "../modules/addDataModule";
import { updateData } from "../modules/updateDataModule";
import { deleteData } from "../modules/deleteDataModule";

export const getAllBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const books = await Book.findAll({
      attributes: [
        "bookId",
        "title",
        [
          literal(`"Author"."firstName" || ' ' || "Author"."lastName"`),
          "author",
        ],
        [literal(`"Category"."categoryName"`), "category"],
        "price",
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
    return showData(req, res, books, "Books");
  } catch (error) {
    console.error("Error reading books data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addBook = async (req: Request, res: Response): Promise<any> => {
  const fields = [
    "bookId",
    "title",
    "price",
    "publicationDate",
    "authorId",
    "categoryId",
  ];
  return addData(req, res, Book, fields, "Book");
};

export const deleteBook = async (req: Request, res: Response): Promise<any> => {
  return deleteData(req, res, Book);
};

export const updateBook = async (req: Request, res: Response): Promise<any> => {
  const fields = [
    "title",
    "price",
    "publicationDate",
    "authorId",
    "categoryId",
  ];
  return updateData(req, res, Book, fields, "Book");
};
