import React from "react";
import { WeatherCard } from "../components/WeatherCard";
import { Card } from "../components/ui/Card";

export const Dashboard = () => {
  return (
    <div>
      <section
        id='dashboard-header'
        className='flex justify-between items-center '>
        <div>
          <h1 className='text-sm font-medium'>Hi, Kamalesh! Good Morning</h1>
          <p className='text-xl'>Here's your Weather Overview</p>
        </div>
        <input
          className=' border rounded-full p-4 bg-card text-secondary font-semibold'
          type='text'
          placeholder='Search Weather, Places..'
        />
        <div>
          <p className='font-medium'>My Profile</p>
        </div>
      </section>
      <Card>
        <WeatherCard/>
      </Card>
    </div>
  );
};
