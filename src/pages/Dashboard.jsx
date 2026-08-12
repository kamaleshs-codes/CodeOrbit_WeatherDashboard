import React from "react";
import { WeatherCard } from "../components/WeatherCard";
import { Card } from "../components/ui/Card";
import { WeatherDetailsCard } from "../components/WeatherDetailsCard";

export const Dashboard = () => {
  return (
    <div>
      <section
        id='dashboard-header'
        className='flex justify-between p-3 items-center bg-primary border-b-2 border-border-muted '>
        <div>
          <h1 className='text-sm font-medium'>Hi, Kamalesh! Good Morning</h1>
          <p className='text-xl'>Here's your Weather Overview</p>
        </div>
        <input
          className=' border rounded-full w-1/3 p-4 bg-card text-secondary font-semibold'
          type='text'
          placeholder='Search Weather, Places..'
        />
        <div>
          <p className='font-medium'>My Profile</p>
        </div>
      </section>
      <section className='p-4 flex gap-7'>
        <div className="w-1/3">
          <Card heading={"Current Weather"}>
            <WeatherCard />
          </Card>
        </div>
        <div className='flex-1'>
          <Card heading={"Today's Highlights"}>
            <WeatherDetailsCard />
          </Card>
        </div>
      </section>
    </div>
  );
};
