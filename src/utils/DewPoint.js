export const dewPointCalculation = (temperature, humidity) => {
  const a = 17.27;
  const b = 237.7;
  const alpha =
    (a * temperature) / (b + temperature) + Math.log(humidity / 100);
  return (b * alpha) / (a - alpha);
};
