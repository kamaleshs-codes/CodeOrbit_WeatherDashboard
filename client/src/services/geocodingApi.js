import axios from "axios";

export const searchLocations = async (query) => {
  const normalizedQuery = query.trim().toLowerCase();

  const response = await axios.get(
    "https://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: normalizedQuery,
        limit: 5,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
      },
    },
  );

  return response.data;
};
