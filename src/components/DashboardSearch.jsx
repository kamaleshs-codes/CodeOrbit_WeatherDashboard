import React, { useEffect, useState } from "react";
import { searchLocations } from "../services/geocodingApi";

const DashboardSearch = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Search location suggestions
  useEffect(() => {
    if (search.trim().length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const results = await searchLocations(search.trim());

        setSuggestions(results);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Location search error:", error);
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // User presses Enter
  const handleSearch = () => {
    if (suggestions.length === 0) {
      return;
    }

    onSearch(suggestions[0]);

    setSearch("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // User clicks a suggestion
  const handleLocationSelect = (location) => {
    onSearch(location);

    setSearch("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className='relative'>
      <input
        className='border rounded-full w-sm py-3 px-6 bg-card text-secondary font-semibold'
        type='text'
        placeholder='Search Weather, Places...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      {showSuggestions && suggestions.length > 0 && (
        <div className='absolute top-full left-0 right-0 mt-2 border rounded-xl shadow-lg overflow-hidden z-50'>
          {suggestions.map((location, index) => (
            <button
              key={`${location.lat}-${location.lon}-${index}`}
              type='button'
              className={`w-full text-left px-4 py-3 transition-colors ${
                index === 0
                  ? "bg-secondary text-primary hover:bg-secondary"
                  : "bg-primary text-secondary hover:bg-secondary"
              }`}
              onClick={() => handleLocationSelect(location)}>
              <p className='font-semibold'>{location.name}</p>

              <p
                className={`text-sm ${
                  index === 0 ? "text-primary" : "text-secondary"
                }`}>
                {location.state && `${location.state}, `}
                {location.country}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardSearch;
