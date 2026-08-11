import React from "react";

export const WeatherCard = () => {
  return (
    <section className='w-full border bg-card rounded-xl shadow-subtle'>
      <article className='p-4'>
        <p className='text-center border rounded-full inline p-2 font-semibold'>
          Chennai, TamilNadu
        </p>
        <div className='mt-2 flex justify-between'>
          <div>
            <h3 className='font-semibold text-lg'>Tuesday</h3>
            <p className='text-sm'>11 Aug, 2026</p>
          </div>
          <p className='text-4xl'>
            32<span className='text-2xl align-top'>&deg;</span>
            <span className='align-baseline text-3xl'>C</span>
          </p>
        </div>
        <div className='mt-5 flex justify-between'>
          <p>weather icon</p>
          <div>
            <p className='font-semibold'>Sunny</p>
            <p className='text-sm'>
              feels like 38<span>&deg;</span>
              <span>C</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
