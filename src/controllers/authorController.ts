import { Request, Response } from "express";
import Author from "../models/authorModel";
import { showData } from "../modules/showDataModule";
import { deleteData } from "../modules/deleteDataModule";
import { addData } from "../modules/addDataModule";
import { updateData } from "../modules/updateDataModule";

export const getAllAuthor = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const authors = await Author.findAll({
      attributes: ["authorId", "firstName", "lastName"],
    });
    return showData(req, res, authors, "Authors");
  } catch (error) {
    console.error("Error reading authors data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addAuthor = async (req: Request, res: Response): Promise<any> => {
  const fields = ["authorId", "firstName", "lastName"];
  return addData(req, res, Author, fields, "Author");
};

export const deleteAuthor = async (
  req: Request,
  res: Response
): Promise<any> => {
  return deleteData(req, res, Author);
};

export const updateAuthor = async (
  req: Request,
  res: Response
): Promise<any> => {
  const fields = ["firstName", "lastName"];
  return updateData(req, res, Author, fields, "Author");
};
