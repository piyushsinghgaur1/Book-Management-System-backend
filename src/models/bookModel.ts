import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Author from "./authorModel";
import Category from "./categoryModel";

const Book = sequelize.define(
  "Book",
  {
    bookId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    publicationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Author,
        key: "authorId",
      },
    },
    categoryId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Category,
        key: "categoryId",
      },
    },
  },
  {
    tableName: "Books",
    timestamps: true,
  }
);
export default Book;
