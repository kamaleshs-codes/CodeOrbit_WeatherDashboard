export const getTodaySummary = (ApiData) => {
  if (!ApiData?.list || !ApiData?.city) {
    return [];
  }

  const timezoneOffset = ApiData.city.timezone;
  const currentTime = new Date();
  const localTime = new Date(currentTime.getTime() + timezoneOffset * 1000);
  const today = localTime.toISOString().split("T")[0];

  return ApiData.list.filter((item) => {
    return item.dt_txt.startsWith(today);
  });
};

export const getWeatherCondition = (todaySummary) => {
  if (!todaySummary.length) {
    return null;
  }

  const conditions = todaySummary.map((item) => item.weather[0].main);
  const conditionCount = {};

  conditions.forEach((condition) => {
    conditionCount[condition] = (conditionCount[condition] || 0) + 1;
  });

  return Object.keys(conditionCount).reduce((a, b) =>
    conditionCount[a] > conditionCount[b] ? a : b,
  );
};

export const getTemperatureRange = (todaySummary) => {
  if (!todaySummary.length) {
    return null;
  }

  const temperatures = todaySummary.map((item) => item.main.temp);

  return {
    min: Math.min(...temperatures),
    max: Math.max(...temperatures),
  };
};

export const getRainPossibility = (todaySummary) => {
  if (!todaySummary.length) {
    return false;
  }

  return todaySummary.some((item) => {
    return item.weather.some((weather) => weather.main === "Rain");
  });
};

export const getWindCondition = (todaySummary) => {
  if (!todaySummary.length) {
    return null;
  }
  const averageWind =
    todaySummary.reduce((total, item) => total + item.wind.speed, 0) /
    todaySummary.length;

  if (averageWind < 3) {
    return "calm";
  }
  if (averageWind < 6) {
    return "moderate";
  }

  return "strong";
};

export const getConditionText = (weatherCondition) => {
  const conditionMap = {
    Clear: "clear skies",
    Clouds: "partly cloudy skies",
    Rain: "rainy conditions",
    Drizzle: "light drizzle",
    Thunderstorm: "thunderstorm conditions",
    Snow: "snowy conditions",
    Mist: "misty conditions",
    Smoke: "hazy conditions",
    Haze: "hazy conditions",
    Dust: "dusty conditions",
    Fog: "foggy conditions",
    Sand: "dusty conditions",
    Ash: "hazy conditions",
    Squall: "strong gusty conditions",
    Tornado: "severe weather conditions",
  };

  return conditionMap[weatherCondition] || "mixed weather conditions";
};

export const generateDailySummary = (
  weatherCondition,
  temperatureRange,
  rainPossibility,
  windCondition,
) => {
  if (!weatherCondition || !temperatureRange || !windCondition) {
    return "";
  }

  const conditionText = getConditionText(weatherCondition);

  const temperatureText =
    temperatureRange.max >= 30
      ? "warm"
      : temperatureRange.max >= 25
        ? "pleasant"
        : "cool";

  let summary = `Today will be ${temperatureText} with ${conditionText.toLowerCase()} conditions.`;

  if (rainPossibility) {
    summary += " There is a possibility of rain later in the day.";
  } else {
    summary += " No significant rainfall is expected during the day.";
  }

  if (windCondition === "calm") {
    summary += " Winds are expected to remain relatively calm.";
  } else if (windCondition === "moderate") {
    summary += " Moderate winds are expected throughout the day.";
  } else {
    summary += " Strong winds may be experienced during the day.";
  }

  return summary;
};
