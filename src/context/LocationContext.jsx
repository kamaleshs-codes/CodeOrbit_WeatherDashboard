import React, { createContext, useContext } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    name: "Chennai",
    lat: 13.0878,
    lon: 80.2785,
    state: "Tamil Nadu",
    country: "IN",
  });
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  return useContext(LocationContext);
};
