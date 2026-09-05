import React from "react";
import { useSettings } from "../context/SettingsContext";
import { PageHeader } from "../components/PageHeader";

export const Settings = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <section className='h-full'>
      <PageHeader title='Settings' subtitle='Manage your weather preferences' />
      <main className='p-6 w-220 mx-auto'>
        <div className='rounded-xl border border-border-muted bg-primary px-8 py-6'>
          <div className='mb-4'>
            <h3 className='text-xl font-semibold'>General Settings</h3>
            <p className='text-sm text-accent mt-1 font-semibold'>
              Customize how weather information is displayed.
            </p>
          </div>
          <div className='bg-secondary text-primary rounded-lg px-6'>
            <div className='flex items-center justify-between border-b border-border-muted py-4'>
              <div>
                <h4 className='font-medium'>Temperature Unit</h4>
                <p className='text-sm text-text-light'>
                  Choose how temperature values are displayed.
                </p>
              </div>
              <select
                value={settings.temperatureUnit}
                onChange={(e) =>
                  updateSettings("temperatureUnit", e.target.value)
                }
                className='rounded-lg border border-border-muted text-text-muted bg-main px-3 py-2 outline-none'>
                <option value='celsius'>Celsius (°C)</option>
                <option value='fahrenheit'>Fahrenheit (°F)</option>
              </select>
            </div>
            <div className='flex items-center justify-between py-4'>
              <div>
                <h4 className='font-medium'>Wind Speed Unit</h4>
                <p className='text-sm text-text-light'>
                  Choose how wind speed is displayed.
                </p>
              </div>
              <select
                value={settings.windSpeedUnit}
                onChange={(e) =>
                  updateSettings("windSpeedUnit", e.target.value)
                }
                className='rounded-lg border border-border-muted text-text-muted bg-main px-3 py-2 outline-none'>
                <option value='kmh'>km/h</option>
                <option value='mph'>mph</option>
              </select>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
