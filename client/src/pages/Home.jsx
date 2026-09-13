import React from "react";
import { Link } from "react-router-dom";
import {
  CloudSun,
  CalendarDays,
  Map,
  Wind,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const Home = () => {
  return (
    <div className='min-h-full bg-main text-text-main'>
      <section className='relative overflow-hidden px-8 py-16 lg:px-16 lg:py-24'>
        <div className='mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:justify-between'>
          {/* Hero Content */}
          <div className='max-w-2xl text-center lg:text-left'>
            {/* Weather Badge */}
            <div className='mb-6 inline-flex items-center gap-2 rounded-xl border border-border-muted bg-secondary px-6 py-3 text-md font-bold text-text-main shadow-subtle'>
              <CloudSun size={25} className='text-yellow-500' />
              <span className='text-accent'>
                Your personal weather companion
              </span>
            </div>
            {/* Hero Weather Panel */}
            <div className='relative overflow-hidden rounded-[2.5rem_1.5rem_3rem_1.5rem] border border-border-muted bg-gradient-to-br from-hero-start via-hero-mid to-hero-end px-7 py-10 shadow-subtle sm:px-10 sm:py-12'>
              {/* Cloud Shape */}
              <div
                className='
        pointer-events-none
        absolute -right-16 -top-20
        h-52 w-72
        rounded-[50%_45%_55%_40%]
        bg-hero-glow/20
        blur-3xl
      '
              />
              {/* Second Cloud Shape */}
              <div
                className='
        pointer-events-none
        absolute -right-5 top-16
        h-32 w-52
        rounded-[60%_40%_50%_45%]
        bg-white/20
        blur-2xl
      '
              />
              {/* Rain Pattern */}
              <div className='pointer-events-none absolute inset-0 opacity-20 dark:opacity-10 [background-image:repeating-linear-gradient(115deg,transparent_0px,transparent_18px,var(--hero-glow)_19px,transparent_21px)]' />
              {/* Soft Glow */}
              <div
                className='
        pointer-events-none
        absolute -bottom-24 -left-20
        h-56 w-56
        rounded-full
        bg-hero-glow/15
        blur-3xl
      '
              />
              {/* Actual Content */}
              <div className='relative z-10'>
                <h1 className='text-4xl font-bold leading-tight text-accent-secondary sm:text-5xl lg:text-6xl'>
                  Weather,
                  <span className='text-accent'>
                    {" "}
                    Simplified.
                  </span>
                </h1>
                <p className='mt-6 max-w-xl text-base leading-7 text-secondary sm:text-lg dark:text-text-muted'>
                  Get real-time weather information, detailed forecasts,
                  air-quality data, and interactive weather maps — all in one
                  simple and responsive dashboard.
                </p>
                <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start'>
                  <Link
                    to='/dashboard'
                    className='
            inline-flex items-center justify-center gap-2
            rounded-lg
            bg-secondary
            px-4 py-3
            font-semibold
            text-text-main
            shadow-subtle
            transition
            hover:scale-[1.02]
            hover:bg-accent
            hover:text-secondary
          '>
                    Explore Dashboard
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to='/forecast'
                    className='
            inline-flex items-center justify-center gap-2
            rounded-lg
            border border-secondary/30
            bg-white/20
            px-6 py-3
            font-semibold
            text-secondary
            backdrop-blur-sm
            transition
            hover:border-accent
            hover:bg-accent
            hover:text-secondary
            dark:border-text-main/30
            dark:bg-black/10
            dark:text-text-main
          '>
                    View Forecast
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className='relative flex h-72 w-full max-w-md items-center justify-center lg:h-96'>
            <div className='absolute h-64 w-64 rounded-full bg-accent opacity-10 blur-3xl' />

            <div className='relative flex h-64 w-64 flex-col items-center justify-center rounded-full border border-border-muted bg-secondary shadow-subtle'>
              <CloudSun size={100} strokeWidth={1.3} className='text-accent' />

              <div className='mt-4 flex items-center gap-2 text-text-light'>
                <MapPin size={16} className='text-accent' />
                <span>Explore your weather</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className='border-y border-border bg-secondary px-8 py-16 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto max-w-2xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-wider text-accent'>
              Features
            </p>

            <h2 className='mt-2 text-3xl font-bold'>
              Everything you need to understand the weather
            </h2>

            <p className='mt-4 text-text-light'>
              Explore weather information through a simple and intuitive
              interface.
            </p>
          </div>

          <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {/* Feature 1 */}
            <div className='rounded-xl border border-border-muted bg-main p-6 shadow-subtle transition hover:-translate-y-1 hover:border-accent'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10'>
                <CloudSun size={26} className='text-accent' />
              </div>

              <h3 className='mt-5 text-lg font-semibold'>Current Weather</h3>

              <p className='mt-3 text-sm leading-6 text-text-light'>
                View temperature, humidity, wind, pressure, visibility, sunrise,
                sunset, and other current conditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='rounded-xl border border-border-muted bg-main p-6 shadow-subtle transition hover:-translate-y-1 hover:border-accent'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10'>
                <CalendarDays size={26} className='text-accent' />
              </div>

              <h3 className='mt-5 text-lg font-semibold'>Weather Forecast</h3>

              <p className='mt-3 text-sm leading-6 text-text-light'>
                Check upcoming weather conditions and plan your day with useful
                forecast information.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='rounded-xl border border-border-muted bg-main p-6 shadow-subtle transition hover:-translate-y-1 hover:border-accent'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10'>
                <Map size={26} className='text-accent' />
              </div>

              <h3 className='mt-5 text-lg font-semibold'>Interactive Map</h3>

              <p className='mt-3 text-sm leading-6 text-text-light'>
                Explore weather conditions geographically using an interactive
                weather map.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='rounded-xl border border-border-muted bg-main p-6 shadow-subtle transition hover:-translate-y-1 hover:border-accent'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10'>
                <Wind size={26} className='text-accent' />
              </div>

              <h3 className='mt-5 text-lg font-semibold'>Air Quality</h3>

              <p className='mt-3 text-sm leading-6 text-text-light'>
                Monitor air-quality information alongside your current weather
                conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Weatherly Section */}
      <section className='px-8 py-16 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-wider text-accent'>
              Why Weatherly?
            </p>

            <h2 className='mt-2 text-3xl font-bold sm:text-4xl'>
              A simple way to stay informed about the weather.
            </h2>

            <p className='mt-5 leading-7 text-text-light'>
              Weatherly brings important weather information together in one
              place, helping you quickly understand current conditions and what
              to expect next.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
            <div className='rounded-xl border border-border-muted bg-secondary p-5 shadow-subtle'>
              <h3 className='font-semibold text-accent'>
                Real-time Information
              </h3>

              <p className='mt-2 text-sm text-text-light'>
                Access weather information retrieved from live weather services.
              </p>
            </div>

            <div className='rounded-xl border border-border-muted bg-secondary p-5 shadow-subtle'>
              <h3 className='font-semibold text-accent'>Location Based</h3>

              <p className='mt-2 text-sm text-text-light'>
                Search for locations and explore weather conditions for your
                selected place.
              </p>
            </div>

            <div className='rounded-xl border border-border-muted bg-secondary p-5 shadow-subtle'>
              <h3 className='font-semibold text-accent'>
                Responsive Experience
              </h3>

              <p className='mt-2 text-sm text-text-light'>
                Designed to provide a consistent experience across different
                screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className='border-y border-border bg-secondary px-8 py-16 lg:px-16'>
        <div className='mx-auto max-w-7xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-wider text-accent'>
            Explore Weatherly
          </p>

          <h2 className='mt-2 text-3xl font-bold'>Start exploring</h2>

          <div className='mt-10 grid gap-5 md:grid-cols-3'>
            <Link
              to='/dashboard'
              className='group rounded-xl border border-border-muted bg-main p-6 text-left shadow-subtle transition hover:border-accent'>
              <CloudSun size={28} className='text-accent' />

              <h3 className='mt-5 text-xl font-semibold'>Dashboard</h3>

              <p className='mt-2 text-sm text-text-light'>
                Check current weather conditions and detailed weather
                information.
              </p>

              <div className='mt-5 flex items-center gap-2 text-sm font-semibold text-accent'>
                Open Dashboard
                <ArrowRight
                  size={16}
                  className='transition-transform group-hover:translate-x-1'
                />
              </div>
            </Link>

            <Link
              to='/forecast'
              className='group rounded-xl border border-border-muted bg-main p-6 text-left shadow-subtle transition hover:border-accent'>
              <CalendarDays size={28} className='text-accent' />

              <h3 className='mt-5 text-xl font-semibold'>Forecast</h3>

              <p className='mt-2 text-sm text-text-light'>
                View upcoming weather conditions and plan ahead.
              </p>

              <div className='mt-5 flex items-center gap-2 text-sm font-semibold text-accent'>
                View Forecast
                <ArrowRight
                  size={16}
                  className='transition-transform group-hover:translate-x-1'
                />
              </div>
            </Link>

            <Link
              to='/weathermap'
              className='group rounded-xl border border-border-muted bg-main p-6 text-left shadow-subtle transition hover:border-accent'>
              <Map size={28} className='text-accent' />

              <h3 className='mt-5 text-xl font-semibold'>Weather Map</h3>

              <p className='mt-2 text-sm text-text-light'>
                Explore weather information through an interactive map.
              </p>

              <div className='mt-5 flex items-center gap-2 text-sm font-semibold text-accent'>
                Open Weather Map
                <ArrowRight
                  size={16}
                  className='transition-transform group-hover:translate-x-1'
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-main px-8 py-10 lg:px-16'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h2 className='text-xl font-bold'>Weatherly</h2>

            <p className='mt-1 text-sm text-text-light'>
              Your simple weather companion.
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-5 text-sm text-text-light'>
            <Link to='/about' className='transition hover:text-accent'>
              About
            </Link>

            <Link to='/contact' className='transition hover:text-accent'>
              Contact
            </Link>

            <Link to='/help' className='transition hover:text-accent'>
              Help
            </Link>
          </div>
        </div>

        <div className='mx-auto mt-8 max-w-7xl border-t border-border pt-5 text-center text-xs text-text-light'>
          © 2026 Weatherly. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
