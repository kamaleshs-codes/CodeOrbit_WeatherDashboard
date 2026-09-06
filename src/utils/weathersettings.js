export const convertTemperature = (celcius, unit) => {
  if (unit === "fahrenheit") {
    return (celcius * 9) / 5 + 32;
  }
  return celcius;
};

export const temperatureSymbol = (unit) => {
  return unit === "fahrenheit" ? "°F" : "°C";
};

export const mpsToKmh = (mps) => {
  return mps * 3.6;
};

export const convertWindSpeed = (kmh, unit) => {
  if (unit === "mph") {
    return kmh * 0.621371;
  }
  return kmh;
};

export const windSpeedSymbol = (unit) => {
  return unit === "mph" ? "mph" : "km/h";
};
