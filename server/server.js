import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import settingsRoutes from "./routes/settingsRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/settings", settingsRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Weather Dashboard API is running",
  });
});

app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "PostgreSQL connected successfully",
      databaseTime: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database connection error:", error.message);

    res.status(500).json({
      message: "Database connection failed",
    });
  }
});

const startServer = async () => {
  try {
    await pool.query("SELECT 1");

    console.log("PostgreSQL database connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("PostgreSQL database connection failed:");
    console.error(error.message);

    process.exit(1);
  }
};

startServer();
