import React from "react";
import { InnerCard } from "./ui/InnerCard";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";
import { HourlyTimeFormat } from "../utils/HourlyTimeFormat";

export const HourlyForecastCard = ({ hour }) => {
  const formattedTime = HourlyTimeFormat(hour.time);

  return (
    <InnerCard>
      <div className='flex flex-col items-center gap-2 p-3'>
        <p className='font-semibold'>{formattedTime}</p>

        <img
          src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`}
          alt={hour.condition}
          className='w-16 h-16'
        />

        <p className='text-xl font-semibold'>{hour.temperature}°C</p>

        <p className='text-sm'>{hour.condition}</p>

        <div className='flex gap-3 text-sm'>
          <p className='flex items-center'>
            <span className='text-cyan-500 text-xl'>
              <WiRaindrop />
            </span>
            {hour.precipitation}%
          </p>

          <p className='flex items-center'>
            <span className='text-xl'>
              <WiStrongWind />
            </span>
            {hour.wind} km/h
          </p>
        </div>
      </div>
    </InnerCard>
  );
};
