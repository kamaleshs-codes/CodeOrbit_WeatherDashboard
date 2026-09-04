import React, { useState, useEffect } from "react";
import { getWeather } from "../services/weatherapi";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherDetailsCard } from "../components/WeatherDetailsCard";
import { getLocalDateTime } from "../utils/DateTimeFormat";
import DashboardHeader from "../components/DashboardHeader";
import { getAirQuality } from "../services/airQualityApi";
import { useLocation } from "../context/LocationContext";

export const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const { location, setLocation } = useLocation();

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeather(location.lat, location.lon);
      setWeather(weatherData);
      const aqData = await getAirQuality(
        weatherData.coord.lat,
        weatherData.coord.lon,
      );
      setAirQuality(aqData);
    };
    fetchWeather();
  }, [location]);

  if (!weather || !airQuality) {
    return (
      <div>
        <DashboardHeader onSearch={setLocation} />
        <p className='text-center mt-3'>Loading...</p>
      </div>
    );
  }

  const dateTime = getLocalDateTime(weather);

  return (
    <div>
      <DashboardHeader onSearch={setLocation} />
      <section className='p-4 flex gap-7'>
        <div className='w-1/3'>
          <WeatherCard weather={weather} dateTime={dateTime} />
        </div>

        <div className='flex-1'>
          <WeatherDetailsCard
            weather={weather}
            dateTime={dateTime}
            airQuality={airQuality}
          />
        </div>
      </section>
    </div>
  );
};
