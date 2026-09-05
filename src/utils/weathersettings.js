export const convertTemperature = (celcius, unit) => {
  if (unit === "fahrenheit") {
    return (celcius * 9) / 5 + 32;
  }
  return celcius;
};

export const temperatureSymbol = (unit) => {
  return unit === "fahrenheit" ? "°F" : "°C";
};
