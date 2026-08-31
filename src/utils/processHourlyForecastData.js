export const processHourlyForecastData = (data) => {
  return data.list.map((item) => {
    return {
      time: item.dt_txt,
      temperature: Math.round(item.main.temp),
      icon: item.weather[0].icon,
      condition: item.weather[0].main,
      precipitation: Math.round(item.pop * 100),
      wind: Math.round(item.wind.speed * 3.6),
    };
  });
};
