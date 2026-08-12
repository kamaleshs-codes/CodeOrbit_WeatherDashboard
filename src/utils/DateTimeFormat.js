export const getLocalDateTime = (weather) => {
  const formatPeriod = new Date((weather.dt + weather.timezone) * 1000);
  return {
    day: new Intl.DateTimeFormat("en-IN", {
      weekday: "long",
      timeZone: "UTC",
    }).format(formatPeriod),

    date: new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(formatPeriod),

    time: new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    }).format(formatPeriod),
  };
};
