import dotenv from "dotenv";
dotenv.config();
const config = {
  PAGE_CONFIG: {
    ITEMS_PER_PAGE: 10,
  },
  DEVELOPMENT: {
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: Number(process.env.DB_PORT),
    DB_DIALECT: "postgres",
  },
};
export default config;
