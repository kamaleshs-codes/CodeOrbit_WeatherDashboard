import { api } from "../api/axios";

export const getWeather = async (lat, lon) => {
  console.log("NEW getWeather:", lat, lon);

  try {
    const response = await api.get("/weather", {
      params: {
        lat,
        lon,
      },
    });
    console.log("REQUEST URL:", response.config.url);
    console.log("REQUEST PARAMS:", response.config.params);
    console.log("WEATHER DATA:", response.data);

    return response.data;
  } catch (error) {
    console.error("Weather API Error:", error);

    console.log("FAILED URL:", error.config?.url);
    console.log("FAILED PARAMS:", error.config?.params);

    throw error;
  }
};
