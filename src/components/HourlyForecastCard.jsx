import React from "react";
import { InnerCard } from "./ui/InnerCard";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";

export const HourlyForecastCard = () => {
  return (
    <InnerCard>
      <div className='flex flex-col items-center gap-2 p-3'>
        <p className='font-semibold'>12 PM</p>
        <p className='text-sm'>Today</p>
        <div className='text-4xl'>☀️</div>
        <p className='text-xl font-semibold'>31°C</p>
        <p className='text-sm'>Sunny</p>
        <div className="flex gap-2">
          <p className='flex items-center text-sm'>
            <span className='text-cyan-500 text-lg'>
              <WiRaindrop />
            </span>
            10%
          </p>
          <p className='flex items-center text-sm'>
            <span className="text-lg">
              <WiStrongWind />
            </span>
            16 km/hr
          </p>
        </div>
      </div>
    </InnerCard>
  );
};
