export const getWeatherAlerts = (weatherData) => {
  if (!weatherData?.weather) {
    return [];
  }
  const alerts = [];

  weatherData.weather.forEach((weather) => {
    if (weather.main === "Thunderstorm") {
      alerts.push({
        type: "thunderstorm",
        message: "Thunderstorm conditions are expected.",
      });
    }
    if (weather.main === "Rain") {
      alerts.push({
        type: "rain",
        message: "Rain is expected in the area.",
      });
    }
    if (weather.main === "Snow") {
      alerts.push({
        type: "snow",
        message: "Snow is expected in the area.",
      });
    }
  });

  return alerts;
};
