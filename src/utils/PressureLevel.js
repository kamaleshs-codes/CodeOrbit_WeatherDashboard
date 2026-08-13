export const getPressureLevel = (pressure) => {
  if (pressure < 1000) return "Low";
  if (pressure <= 1020) return "Normal";
  return "High";
};
