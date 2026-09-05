import { Children, createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    temperatureUnit: "celsius",
    windSpeedUnit: "kmh",
    theme: "light",
    weatherAlerts: true,
    dailySummary: true,
    autoRefresh: true,
    defaultMapLayer: "temperature",
  });

  const updateSettings = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
