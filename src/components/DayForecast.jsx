import React from "react";
import { Card } from "./ui/Card";
import { InnerCard } from "./ui/InnerCard";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";
import { FiChevronRight } from "react-icons/fi";

export const DayForecast = () => {
  const forecastDays = [
    {
      day: "Fri",
      date: "28 Aug",
      condition: "Partly Cloudy",
      icon: "🌤️",
      high: 36,
      low: 27,
      precipitation: 27,
      wind: 16,
    },
    {
      day: "Sat",
      date: "29 Aug",
      condition: "Sunny",
      icon: "☀️",
      high: 35,
      low: 26,
      precipitation: 10,
      wind: 14,
    },
    {
      day: "Sun",
      date: "30 Aug",
      condition: "Cloudy",
      icon: "☁️",
      high: 33,
      low: 26,
      precipitation: 35,
      wind: 18,
    },
    {
      day: "Mon",
      date: "31 Aug",
      condition: "Light Rain",
      icon: "🌦️",
      high: 31,
      low: 25,
      precipitation: 60,
      wind: 20,
    },
    {
      day: "Tue",
      date: "01 Sep",
      condition: "Partly Cloudy",
      icon: "⛅",
      high: 34,
      low: 26,
      precipitation: 25,
      wind: 15,
    },
  ];

  return (
    <section className='mt-3'>
      <Card>
        <div className='flex justify-between p-3 font-semibold'>
          <h3>5-Day Forecast</h3>
          <p className='flex gap-1 items-center cursor-pointer hover:text-text-accent transition'>
            View more{" "}
            <span>
              <FiChevronRight />
            </span>
          </p>
        </div>

        <div className='grid grid-cols-5 gap-3'>
          {forecastDays.map((day) => (
            <InnerCard key={day.date}>
              <div className='flex flex-col gap-2 p-2 items-center'>
                <p className='font-semibold'>{day.day}</p>

                <p>{day.date}</p>

                <p className='text-4xl text-center my-2'>{day.icon}</p>

                <p>{day.condition}</p>

                <div className='flex gap-3'>
                  <h4>{day.high}&deg;C</h4>
                  <h4>{day.low}&deg;C</h4>
                </div>

                <div className='text-sm flex gap-2'>
                  <p className='flex'>
                    <span className='text-cyan-500 text-2xl'>
                      <WiRaindrop />
                    </span>
                    {day.precipitation}%
                  </p>
                  <p className='flex'>
                    <span className='text-xl'>
                      <WiStrongWind />
                    </span>
                    {day.wind} km/h
                  </p>
                </div>
              </div>
            </InnerCard>
          ))}
        </div>
      </Card>
    </section>
  );
};
