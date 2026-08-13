import React from "react";
import { useState, useEffect } from "react";
import { getWeather } from "../services/weatherapi";
import { WeatherCard } from "../components/WeatherCard";
import { Card } from "../components/ui/Card";
import { WeatherDetailsCard } from "../components/WeatherDetailsCard";
import { getLocalDateTime } from "../utils/DateTimeFormat";
import DashboardHeader from "../components/DashboardHeader";

export const Dashboard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("Chennai");
      setWeather(data);
    };

    fetchWeather();
  }, []);
  if (!weather) {
    return (
      <div className="">
        <DashboardHeader />
        <p className="text-center mt-3">Loading...</p>
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
          <WeatherDetailsCard weather={weather} dateTime={dateTime} />
        </div>
      </section>
    </div>
  );
};
