export const forecastDayDateFormat = (date) => {
  const dateObj = new Date(date);

  return {
    day: dateObj.toLocaleDateString("en-US", {
      weekday: "short",
    }),

    date: dateObj.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    }),
  };
};
