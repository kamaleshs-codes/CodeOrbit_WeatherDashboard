import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Forecast } from "../pages/Forecast";
import { Settings } from "../pages/Settings";
import { WeatherMap } from "../pages/WeatherMap";

export const AppRoutes = ({ location, setLocation }) => {
  return (
    <Routes>
      <Route
        path='/dashboard'
        element={<Dashboard location={location} setLocation={setLocation} />}
      />
      <Route path='/forecast' element={<Forecast location={location} />} />
      <Route path='/weathermap' element={<WeatherMap />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/' element={<Navigate to='/dashboard' replace />} />
    </Routes>
  );
};
