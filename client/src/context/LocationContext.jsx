import React, { createContext, useContext, useState } from "react";
import { useSettings } from "./SettingsContext";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const { settings } = useSettings();

  const [location, setLocation] = useState(settings.defaultLocation);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  return useContext(LocationContext);
};
