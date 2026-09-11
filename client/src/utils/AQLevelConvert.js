export const getAirQualityLevel = (aqi) => {
  const levels = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };
  return levels[aqi] ?? "Unknown";
};
