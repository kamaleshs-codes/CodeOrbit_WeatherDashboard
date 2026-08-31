import { DayForecastCard } from "../components/DayForecastCard";
import { FiMapPin } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { getForecast } from "../services/forecastApi";
import { processForecastData } from "../utils/processForecastData";
import { PageHeader } from "../components/PageHeader";

export const Forecast = () => {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getForecast(13.0878, 80.2785);
        const processedData = processForecastData(data);
        setForecast(processedData);
        console.log("Processed Forecast:", processedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForecast();
  }, []);
  return (
    <section>
      <PageHeader
        title='Forecast'
        subtitle='Know Weather Forecast for Chennai'
      />
      <main className='p-4'>
        {/* location card  */}
        <div className='flex justify-between items-center bg-card-theme px-5 py-3 rounded-lg'>
          <div className='flex items-center gap-2'>
            <span className='text-xl'>
              <FiMapPin />
            </span>
            <div>
              <p className='font-semibold'>Chennai, TamilNadu, IN</p>
              <p>Lat 13.09 N, Lon 80.27 E</p>
            </div>
          </div>
          <div>
            <p>Udpated - 28 Aug 2026, 12:20 PM</p>
          </div>
        </div>
        <DayForecastCard forecast={forecast} />
      </main>
    </section>
  );
};
