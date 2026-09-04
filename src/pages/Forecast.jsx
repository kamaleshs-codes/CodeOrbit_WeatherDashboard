import { DayForecastCard } from "../components/DayForecastCard";
import { FiMapPin } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { getForecast } from "../services/forecastApi";
import { processForecastData } from "../utils/processForecastData";
import { PageHeader } from "../components/PageHeader";
import { HourlyForecast } from "../components/HourlyForecast";
import { processHourlyForecastData } from "../utils/processHourlyForecastData";
import { useLocation } from "../context/LocationContext";

export const Forecast = () => {
  const [forecast, setForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const { location } = useLocation();
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getForecast(location.lat, location.lon);
        const processedData = processForecastData(data);
        setForecast(processedData);
        const processedHourlyData = processHourlyForecastData(data);
        setHourlyForecast(processedHourlyData);
        console.log("Processed Forecast:", processedData);
        console.log("Processed Hourly Forecast:", processedHourlyData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForecast();
  }, [location]);
  return (
    <section>
      <PageHeader
        title='Forecast'
        subtitle={`Know Weather Forecast for ${location.name}`}
      />
      <main className='p-4'>
        <div className='flex justify-between items-center bg-card-theme px-5 py-3 rounded-lg'>
          <div className='flex items-center gap-2'>
            <span className='text-xl'>
              <FiMapPin />
            </span>
            <div>
              <p className='font-semibold'>
                {location.name}, {location.state}, {location.country}
              </p>
              <p>
                Lat {location.lat.toFixed(2)} N, Lon {location.lon.toFixed(2)} E
              </p>
            </div>
          </div>
          <div>
            <p>Udpated - 28 Aug 2026, 12:20 PM</p>
          </div>
        </div>
        <DayForecastCard forecast={forecast} />
        <HourlyForecast hourlyForecast={hourlyForecast} />
      </main>
    </section>
  );
};
