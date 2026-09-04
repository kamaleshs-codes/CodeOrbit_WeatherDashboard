import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Forecast } from "../pages/Forecast";
import { Settings } from "../pages/Settings";
import { WeatherMap } from "../pages/WeatherMap";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/forecast' element={<Forecast />} />
      <Route path='/weathermap' element={<WeatherMap />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/' element={<Navigate to='/dashboard' replace />} />
    </Routes>
  );
};
