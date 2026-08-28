import { api } from "../api/axios";

export const getForecast = async (lat, lon) => {
  try {
    const response = await api.get("/forecast", {
      params: {
        lat,
        lon,
      },
    });
    console.log("Forecast:", response.data);
    return response.data;
  } catch (error) {
    console.error("Forecast API Error:", error);
    throw error;
  }
};
