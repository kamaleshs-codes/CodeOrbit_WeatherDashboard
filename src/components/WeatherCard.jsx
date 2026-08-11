import React, { useEffect, useState } from "react";
import { getWeather } from "../services/weatherapi";

export const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("Chennai");
      setWeather(data);
    };
    fetchWeather();
  }, []);
  if (!weather) {
    return <div>Loading</div>;
  }
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <section className='w-full border bg-card rounded-xl shadow-subtle'>
      <article className='p-4'>
        <p className='text-center border rounded-full w-1/3 p-2 mt-2 font-semibold'>
          {weather.name}
        </p>
        <div className='flex justify-around mt-3'>
          <div className='mt-2 flex-col'>
            <div>
              <h3 className='font-semibold text-lg'>Tuesday</h3>
              <p className='text-sm'>11 Aug, 2026</p>
            </div>
            <img src={iconUrl} alt={weather.weather[0].description} />
          </div>
          <div className='flex flex-col justify-around'>
            <p className='text-4xl'>
              {Math.round(weather.main.temp)}
              <span className='text-2xl align-top'>&deg;</span>
              <span className='align-baseline text-3xl'>C</span>
            </p>
            <div>
              <p className='font-semibold'>{weather.weather[0].main}</p>
              <p className='text-sm'>
                Feels like {Math.round(weather.main.feels_like)}
                <span>&deg;</span>
                <span>C</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
