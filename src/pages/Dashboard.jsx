import React from "react";
import { useState, useEffect } from "react";
import { getWeather } from "../services/weatherapi";
import { WeatherCard } from "../components/WeatherCard";
import { Card } from "../components/ui/Card";
import { WeatherDetailsCard } from "../components/WeatherDetailsCard";
import { getLocalDateTime } from "../utils/DateTimeFormat";
import DashboardHeader from "../components/DashboardHeader";
import { getAirQuality } from "../services/airQualityApi";

export const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("Chennai");
      setWeather(data);
      const aqData = await getAirQuality(data.coord.lat, data.coord.lon);
      setAirQuality(aqData);
    };
    fetchWeather();
  }, []);
  if (!weather || !airQuality) {
    return (
      <div className=''>
        <DashboardHeader />
        <p className='text-center mt-3'>Loading...</p>
      </div>
    );
  }
  const dateTime = getLocalDateTime(weather);
  return (
    <div>
      <DashboardHeader />
      <section className='p-4 flex gap-7'>
        <div className='w-1/3'>
          <WeatherCard weather={weather} dateTime={dateTime} />
        </div>

        <div className='flex-1'>
          <WeatherDetailsCard weather={weather} dateTime={dateTime} airQuality={airQuality} />
        </div>
      </section>
    </div>
  );
};
