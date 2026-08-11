import { api } from "../api/axios";

export const getWeather = async (city) => {
  try {
    const response = await api.get("/weather", {
      params: {
        q: city,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
