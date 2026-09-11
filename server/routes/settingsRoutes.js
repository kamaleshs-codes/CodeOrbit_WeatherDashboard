import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user_settings WHERE id = 1");

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Settings not found",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching settings:", error.message);

    res.status(500).json({
      message: "Failed to fetch settings",
    });
  }
});

router.put("/", async (req, res) => {
  const {
    temperature_unit,
    wind_speed_unit,
    theme,
    weather_alerts,
    daily_summary,
    auto_refresh,
    default_map_layer,
    default_location_name,
    default_location_state,
    default_location_country,
    default_location_lat,
    default_location_lon,
  } = req.body;

  try {
    const result = await pool.query(
      `
      UPDATE user_settings
      SET
        temperature_unit = $1,
        wind_speed_unit = $2,
        theme = $3,
        weather_alerts = $4,
        daily_summary = $5,
        auto_refresh = $6,
        default_map_layer = $7,
        default_location_name = $8,
        default_location_state = $9,
        default_location_country = $10,
        default_location_lat = $11,
        default_location_lon = $12
      WHERE id = 1
      RETURNING *
      `,
      [
        temperature_unit,
        wind_speed_unit,
        theme,
        weather_alerts,
        daily_summary,
        auto_refresh,
        default_map_layer,
        default_location_name,
        default_location_state,
        default_location_country,
        default_location_lat,
        default_location_lon,
      ],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Settings not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating settings:", error.message);

    res.status(500).json({
      message: "Failed to update settings",
    });
  }
});

export default router;
