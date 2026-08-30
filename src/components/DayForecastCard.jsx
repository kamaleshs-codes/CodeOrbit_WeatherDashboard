import React from "react";
import { Card } from "./ui/Card";
import { InnerCard } from "./ui/InnerCard";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";
import { FiChevronRight } from "react-icons/fi";
import { forecastDayDateFormat } from "../utils/forecastDayDateFormat";

export const DayForecastCard = ({ forecast }) => {
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
          {forecast.map((day) => {
            const formattedDateDay = forecastDayDateFormat(day.date);

            return (
              <InnerCard key={day.date}>
                <div className='flex flex-col gap-2 p-2 items-center'>
                  <p className='font-semibold'>{formattedDateDay.day}</p>

                  <p>{formattedDateDay.date}</p>

                  <img
                    src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                    alt={day.condition}
                    className='w-16 h-16'
                  />

                  <p>{day.condition}</p>

                  <div className='flex gap-3'>
                    <h4>{day.high}&deg;C</h4>
                    <h4>{day.low}&deg;C</h4>
                  </div>

                  <div className='text-sm flex gap-2'>
                    <p className='flex items-center'>
                      <span className='text-cyan-500 text-2xl'>
                        <WiRaindrop />
                      </span>
                      {day.precipitation}%
                    </p>

                    <p className='flex items-center'>
                      <span className='text-xl'>
                        <WiStrongWind />
                      </span>
                      {day.wind} km/h
                    </p>
                  </div>
                </div>
              </InnerCard>
            );
          })}
        </div>
      </Card>
    </section>
  );
};
