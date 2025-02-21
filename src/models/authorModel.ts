import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Author = sequelize.define(
  "Author",
  {
    authorId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Authors",
    timestamps: true,
  }
);


export default Author;
