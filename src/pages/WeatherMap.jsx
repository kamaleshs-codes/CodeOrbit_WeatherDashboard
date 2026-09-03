import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const WeatherMap = () => {
  const chennaiPosition = [13.0878, 80.2785];

  return (
    <section className='h-full'>
      <header className='border-b-2 border-border-muted p-4'>
        <h2 className='text-xl font-semibold'>Weather Map</h2>
        <p className='text-text-muted'>Explore weather conditions on the map</p>
      </header>

      <main className='p-4 justify-items-center'>
        <div className='h-[400px] w-160 overflow-hidden rounded-xl'>
          <MapContainer
            center={chennaiPosition}
            zoom={8}
            className='h-full w-full'>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={chennaiPosition}>
              <Popup>
                <strong>Chennai</strong>
                <br />
                Tamil Nadu, India
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </section>
  );
};
