import React, { createContext, useContext, useEffect, useState } from "react";
import { useSettings } from "./SettingsContext";

const RefreshContext = createContext();

const REFRESH_INTERVAL = 10 * 60 * 1000;

export const RefreshProvider = ({ children }) => {
  const { settings } = useSettings();

  const [refreshKey, setRefreshKey] = useState(0);
  const [lastRefresh, setLastRefresh] = useState(null);
  const [timeLeft, setTimeLeft] = useState(REFRESH_INTERVAL);

  useEffect(() => {
    if (!settings.autoRefresh) {
      setTimeLeft(REFRESH_INTERVAL);
      return;
    }

    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
      setLastRefresh(new Date());
      setTimeLeft(REFRESH_INTERVAL);
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [settings.autoRefresh]);

  useEffect(() => {
    if (!settings.autoRefresh || lastRefresh) return;

    const countdown = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [settings.autoRefresh, lastRefresh]);

  useEffect(() => {
    if (!settings.autoRefresh || !lastRefresh) return;

    const elapsedTimer = setInterval(() => {
      setLastRefresh((prev) => new Date(prev));
    }, 1000);

    return () => clearInterval(elapsedTimer);
  }, [settings.autoRefresh, lastRefresh]);

  const getRefreshStatus = () => {
    if (!settings.autoRefresh) {
      return null;
    }

    if (!lastRefresh) {
      const minutes = Math.ceil(timeLeft / 60000);

      return `Next update in ${minutes} min`;
    }

    const elapsed = Date.now() - lastRefresh.getTime();
    const minutes = Math.floor(elapsed / 60000);

    if (minutes < 1) {
      return "Updated just now";
    }

    return `Updated ${minutes} min ago`;
  };

  return (
    <RefreshContext.Provider
      value={{
        refreshKey,
        lastRefresh,
        refreshStatus: getRefreshStatus(),
      }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => {
  return useContext(RefreshContext);
};
