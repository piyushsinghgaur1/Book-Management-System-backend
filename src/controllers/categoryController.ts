import { Request, Response, NextFunction } from "express";
import Category from "../models/categoryModel";
import { showData } from "../modules/showDataModule";
import { addData } from "../modules/addDataModule";
import { deleteData } from "../modules/deleteDataModule";
import { updateData } from "../modules/updateDataModule";

export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const categories = await Category.findAll({
      attributes: ["categoryId", "categoryName"],
    });
    return showData(req, res, next, categories, "categories");
  } catch (error) {
    console.error("Error reading categories data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const fields = ["categoryId", "category"];
  return addData(req, res, next, Category, fields, "Category");
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  return deleteData(req, res, next, Category, "Category");
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const fields = ["categoryName"];
  return updateData(req, res, next, Category, fields, "Category");
};
