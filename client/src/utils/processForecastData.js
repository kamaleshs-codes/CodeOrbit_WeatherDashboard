export const processForecastData = (forecastData) => {
  const dailyForecast = {};

  forecastData.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!dailyForecast[date]) {
      dailyForecast[date] = [];
    }

    dailyForecast[date].push(item);
  });

  return Object.entries(dailyForecast)
    .slice(0, 5)
    .map(([date, items]) => {
      const temperatures = items.map((item) => item.main.temp);
      const hottest = Math.max(...temperatures);
      const coldest = Math.min(...temperatures);
      const middleItem = items[Math.floor(items.length / 2)];

      return {
        date,
        high: Math.round(hottest),
        low: Math.round(coldest),
        condition: middleItem.weather[0].description,
        icon: middleItem.weather[0].icon,
        precipitation: Math.round(middleItem.pop * 100),
        wind: Math.round(middleItem.wind.speed * 3.6),
      };
    });
};
