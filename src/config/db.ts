import { Sequelize } from "sequelize";
import config from "./config";
const {
  DEVELOPMENT: {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
    DB_DIALECT,
  },
} = config;
// Set up Sequelize connection
const sequelize = new Sequelize({
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
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
