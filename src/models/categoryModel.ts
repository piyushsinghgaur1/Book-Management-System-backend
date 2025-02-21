import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Book from "./bookModel";

const Category = sequelize.define(
  "Category",
  {
    categoryId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Categories",
    timestamps: true,
  }
);

// Define the relationship
// Category.hasMany(Book, { foreignKey: "categoryId" });
export default Category;
