import React, { useEffect, useState } from "react";
import { getWeather } from "../services/weatherapi";
import { getLocalDateTime } from "../utils/DateTimeFormat";
import { Card } from "../components/ui/Card";
import { FiMapPin } from "react-icons/fi";

export const WeatherCard = ({ weather, dateTime }) => {
  const { day, date, time } = dateTime;
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <Card>
      <h2 className='text-2xl font-semibold mb-3'>
        Current Weather
      </h2>
      <section className='bg-inner-card rounded-xl shadow-subtle'>
        <article className='p-4'>
          <p className='flex gap-1 w-max text-center bg-primary hover:bg-accent text-secondary border border-border rounded-full px-4 py-3 mt-2 font-semibold'>
          <FiMapPin className="text-lg"/> <span>{weather.name}</span> 
          </p>
          <div className='flex justify-around mt-3'>
            <div className='flex flex-col gap-2'>
              <div>
                <h3 className='font-semibold text-lg'>{day}</h3>
                <p>{date}</p>
                <p className='text-sm'>{time}</p>
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
    </Card>
  );
};
