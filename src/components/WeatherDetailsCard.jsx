import React from "react";
import { Card } from "./ui/Card";
import { InnerCard } from "./ui/InnerCard";
import { getWindDirection } from "../utils/WindDirection";
import { getAirQualityLevel } from "../utils/AQLevelConvert";

export const WeatherDetailsCard = ({ weather, dateTime, airQuality }) => {
  const { sunrise, sunset } = dateTime;
  const windDirection = getWindDirection(weather.wind.deg);
  const visibilityKm = weather.visibility / 1000;
  const aqi = airQuality.list[0].main.aqi;
  const AQLevel = getAirQualityLevel(aqi);
  const minTemp = Math.round(weather.main.temp_min)
  const maxTemp = Math.round(weather.main.temp_max)
  return (
    <Card>
      <h2 className='text-2xl text-text-main font-semibold mb-3'>
        Today's Highlights
      </h2>
      <section className='grid grid-cols-[3fr_3fr_4fr] grid-rows-3 gap-3'>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Wind Status</h3>
          <div className='mt-3'>
            <p>{weather.wind.speed} m/s</p>
            <p>{windDirection}</p>
          </div>
        </InnerCard>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Humidity</h3>
          <p className='mt-5'>{weather.main.humidity} %</p>
        </InnerCard>
        <InnerCard className='row-span-2'>
          <h3 className='text-xl font-semibold'>Sunrise</h3>
          <p>{sunrise}</p>
          <h3 className='text-xl font-semibold mt-12'>Sunset</h3>
          <p>{sunset}</p>
        </InnerCard>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Visibility</h3>
          <p className='mt-3'>{visibilityKm} Km</p>
        </InnerCard>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Air Quality</h3>
          <div className='mt-3'>
            <p>{aqi}</p>
            <p>{AQLevel}</p>
          </div>
        </InnerCard>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Pressure</h3>
          <p className="mt-3">{weather.main.pressure} hPa</p>
        </InnerCard>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Cloudiness</h3>
          <p className="mt-3">{weather.clouds.all} %</p>
        </InnerCard>
        <InnerCard>
          <h3 className='text-xl font-semibold'>Temperature Range</h3>
          <p className="mt-3">{minTemp} <span>&deg;C</span> {" - "} {maxTemp} <span>&deg;C</span></p>
        </InnerCard>
      </section>
    </Card>
  );
};
