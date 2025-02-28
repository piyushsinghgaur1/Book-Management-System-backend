import { Request, Response, NextFunction } from "express";
import Author from "../models/authorModel";
import { showData } from "../modules/showDataModule";
import { deleteData } from "../modules/deleteDataModule";
import { addData } from "../modules/addDataModule";
import { updateData } from "../modules/updateDataModule";

export const getAllAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const authors = await Author.findAll({
      attributes: ["authorId", "firstName", "lastName"],
    });
    return showData(req, res, next, authors, "Authors");
  } catch (error) {
    console.error("Error reading authors data:", error);
    next(error);
  }
};

export const addAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const fields = ["authorId", "firstName", "lastName"];
  return addData(req, res, next, Author, fields, "Author");
};

export const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  return deleteData(req, res, next, Author, "Author");
};

export const updateAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const fields = ["firstName", "lastName"];
  return updateData(req, res, next, Author, fields, "Author");
};
