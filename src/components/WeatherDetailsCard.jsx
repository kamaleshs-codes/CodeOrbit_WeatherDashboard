import React from "react";
import { Card } from "./ui/Card";
import { InnerCard } from "./ui/InnerCard";

export const WeatherDetailsCard = ({ weather, dateTime }) => {
  const {sunrise, sunset}= dateTime
  return (
    <Card>
      <h2 className='text-2xl text-text-main font-semibold mb-3'>
        Today's Highlights
      </h2>
      <section className='grid grid-cols-[3fr_3fr_4fr] gap-3'>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Wind Status</h3>
          <div className='mt-3'>
            <p>{weather.wind.speed} m/s</p>
            <p>{weather.wind.deg}</p>
          </div>
        </InnerCard>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Humidity</h3>
          <p className='mt-5'>{weather.main.humidity} %</p>
        </InnerCard>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Sunrise & Sunset</h3>
          <div className="mt-3">
            <p>{sunrise}</p>
            <p>{sunset}</p>
          </div>
        </InnerCard>
      </section>
    </Card>
  );
};
