import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    temperatureUnit: "celsius",
    windSpeedUnit: "kmh",
    theme: "light",
    weatherAlerts: true,
    dailySummary: true,
    autoRefresh: true,
    defaultMapLayer: "none",
    defaultLocation: {
      name: "Chennai",
      lat: 13.0878,
      lon: 80.2785,
      state: "Tamil Nadu",
      country: "IN",
    },
  });

  const updateSettings = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      settings.theme === "dark",
    );
  }, [settings.theme]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
