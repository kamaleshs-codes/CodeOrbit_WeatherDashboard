import { createContext, useContext, useEffect, useState } from "react";
import { backendApi } from "../api/backendAxios";

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
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);
  const [savedSettings, setSavedSettings] = useState(null);

  const updateSettings = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveSettings = async () => {
    if (JSON.stringify(settings) === JSON.stringify(savedSettings)) {
      setToast({
        type: "info",
        message: "No changes made.",
      });
      return;
    }

    const previousSettings = savedSettings;
    setSaving(true);
    setToast(null);

    try {
      const response = await backendApi.put("/settings", {
        temperature_unit: settings.temperatureUnit,
        wind_speed_unit: settings.windSpeedUnit,
        theme: settings.theme,
        weather_alerts: settings.weatherAlerts,
        daily_summary: settings.dailySummary,
        auto_refresh: settings.autoRefresh,
        default_map_layer: settings.defaultMapLayer,
        default_location_name: settings.defaultLocation.name,
        default_location_state: settings.defaultLocation.state,
        default_location_country: settings.defaultLocation.country,
        default_location_lat: settings.defaultLocation.lat,
        default_location_lon: settings.defaultLocation.lon,
      });
      const data = response.data;
      const loadedSettings = {
        temperatureUnit: data.temperature_unit,
        windSpeedUnit: data.wind_speed_unit,
        theme: data.theme,
        weatherAlerts: data.weather_alerts,
        dailySummary: data.daily_summary,
        autoRefresh: data.auto_refresh,
        defaultMapLayer: data.default_map_layer,
        defaultLocation: {
          name: data.default_location_name,
          state: data.default_location_state,
          country: data.default_location_country,
          lat: Number(data.default_location_lat),
          lon: Number(data.default_location_lon),
        },
      };
      setSettings(loadedSettings);
      setSavedSettings(loadedSettings);
      setToast({
        type: "success",
        message: "Settings updated successfully.",
      });
    } catch (error) {
      console.error("Failed to save settings:", error);
      setSettings(previousSettings);
      setToast({
        type: "error",
        message: "Failed to update settings. Please try again after some time.",
      });
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      settings.theme === "dark",
    );
  }, [settings.theme]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await backendApi.get("/settings");
        const data = response.data;
        const savedData = {
          temperatureUnit: data.temperature_unit,
          windSpeedUnit: data.wind_speed_unit,
          theme: data.theme,
          weatherAlerts: data.weather_alerts,
          dailySummary: data.daily_summary,
          autoRefresh: data.auto_refresh,
          defaultMapLayer: data.default_map_layer,
          defaultLocation: {
            name: data.default_location_name,
            state: data.default_location_state,
            country: data.default_location_country,
            lat: Number(data.default_location_lat),
            lon: Number(data.default_location_lon),
          },
        };
        setSettings(savedData);
        setSavedSettings(savedData);
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        saveSettings,
        loading,
        saving,
        toast,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
