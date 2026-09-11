export const daylightSeconds = (sunrise, sunset) => {
  const daylightSecs = sunset - sunrise;

  const daylightHours = Math.floor(daylightSecs / 3600);
  const daylightMinutes = Math.floor((daylightSecs % 3600) / 60);

  return {
    daylightDuration: `${daylightHours}h ${daylightMinutes}m`,
  };
};
