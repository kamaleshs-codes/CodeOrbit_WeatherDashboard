import React from "react";
import { Card } from "../components/ui/Card";

export const Forecast = () => {
  return (
    <section>
      <header className='border-b-2'>
        <h3>Forcast</h3>
        <p>Know Weather Forecast for Chennai</p>
      </header>
      <main className='p-4'>
        {/* location card  */}
        <div className='flex justify-between items-center bg-card-theme px-5 py-3 rounded-lg'>
          <div className='flex'>
            <span>Location Icon</span>
            <div>
              <p>Chennai, TamilNadu, IN</p>
              <p>Lat 13.09 N, Lon 80.27 E</p>
            </div>
          </div>
          <div>
            <p>Udpated - 28 Aug 2026, 12:20 PM</p>
          </div>
        </div>

        {/* 5 day forecast */}
        <div className='mt-3'>
          <Card>
            <div className='flex justify-between p-3 font-semibold'>
              <h3>5 - Day Forecast</h3>
              <p>View more</p>
            </div>
          </Card>
        </div>
      </main>
    </section>
  );
};
