import React from "react";
import { Card } from "../components/ui/Card";
import { InnerCard } from "../components/ui/InnerCard";
import { DayForecast } from "../components/DayForecast";
import { FiMapPin } from "react-icons/fi";

export const Forecast = () => {
  return (
    <section>
      <header className='border-b-2'>
        <h3>Forecast</h3>
        <p>Know Weather Forecast for Chennai</p>
      </header>
      <main className='p-4'>
        {/* location card  */}
        <div className='flex justify-between items-center bg-card-theme px-5 py-3 rounded-lg'>
          <div className='flex items-center gap-2'>
            <span className="text-xl"><FiMapPin/></span>
            <div>
              <p className="font-semibold">Chennai, TamilNadu, IN</p>
              <p>Lat 13.09 N, Lon 80.27 E</p>
            </div>
          </div>
          <div>
            <p>Udpated - 28 Aug 2026, 12:20 PM</p>
          </div>
        </div>
        <DayForecast/>
      </main>
    </section>
  );
};
