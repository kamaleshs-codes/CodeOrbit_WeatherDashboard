import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { RefreshProvider } from "./context/RefreshContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LocationProvider>
        <SettingsProvider>
          <RefreshProvider>
            <App />
          </RefreshProvider>
        </SettingsProvider>
      </LocationProvider>
    </BrowserRouter>
  </StrictMode>,
);
