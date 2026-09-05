import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LocationProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </LocationProvider>
    </BrowserRouter>
  </StrictMode>,
);
