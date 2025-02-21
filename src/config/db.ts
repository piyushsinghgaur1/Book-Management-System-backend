import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Set up Sequelize connection
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  dialect: "postgres",
});

// Test the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
