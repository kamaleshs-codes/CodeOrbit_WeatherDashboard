import React, { useEffect, useState } from "react";
import { getWeather } from "../services/weatherapi";
import { getLocalDateTime } from "../utils/DateTimeFormat";

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
    return <div className='text-text-main text-center'>Loading</div>;
  }
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const { day, date, time } = getLocalDateTime(weather);
  return (
    <section className='border bg-inner-card rounded-xl shadow-subtle'>
      <article className='p-4'>
        <p className='text-center border border-border rounded-full w-1/3 p-2 mt-2 font-semibold'>
          {weather.name}
        </p>
        <div className='flex justify-around mt-3'>
          <div className='flex flex-col gap-2'>
            <div>
              <h3 className='font-semibold text-lg'>{day}</h3>
              <p>{date}</p>
              <p className="text-sm">{time}</p>
            </div>
            {/* <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-700"> */}
                <img src={iconUrl} alt={weather.weather[0].description} />
            {/* </div> */}
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
