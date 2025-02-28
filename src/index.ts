import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";
import authorRoutes from "./routes/authorRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import bookRoutes from "./routes/bookRoutes";
import bodyParser from "body-parser";
import { tableAssociations } from "./config/assotiation";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Error Handling
app.use(errorHandler);

// Routes
app.use("/api/v1/author", authorRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/book", bookRoutes);

// Testing Database Connection
app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    res.send(`Database connection successful`);
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).send("Failed to connect to the database");
  }
});

// Sync database and start server
tableAssociations();
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
    app.listen(PORT, () => {
      console.log("Server is running on Port:", PORT);
    });
  })
  .catch((error) => {
    console.error("Unable to synchronize the database:", error);
  });
