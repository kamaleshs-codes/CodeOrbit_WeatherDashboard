import { api } from "../api/axios";

export const getDailySummary = async (lat, lon) => {
  try {
    const response = await api.get("/forecast", {
      params: {
        lat,
        lon,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Daily Summary API Error:", error);
    throw error;
  }
};
