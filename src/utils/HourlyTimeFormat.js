export const HourlyTimeFormat = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
