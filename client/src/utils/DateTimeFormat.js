export const getLocalDateTime = (weather) => {
  const timePeriod = (timestamp) => {
    const formatPeriod = new Date((timestamp + weather.timezone) * 1000);
    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    })
      .format(formatPeriod)
      .toUpperCase();
  };

  const dayDatePeriod = new Date((weather.dt + weather.timezone) * 1000);
  return {
    day: new Intl.DateTimeFormat("en-IN", {
      weekday: "long",
      timeZone: "UTC",
    }).format(dayDatePeriod),

    date: new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(dayDatePeriod),

    time: timePeriod(weather.dt),

    sunrise: timePeriod(weather.sys.sunrise),

    sunset: timePeriod(weather.sys.sunset),
  };
};
