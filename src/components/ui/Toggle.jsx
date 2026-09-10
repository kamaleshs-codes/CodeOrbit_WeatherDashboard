import React from "react";

export const Toggle = ({ checked, onChange }) => {
  return (
    <button
      type='button'
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-12 rounded-full transition-colors duration-200 ${
        checked ? "bg-accent-secondary" : "bg-toggle"
      }`}
      aria-pressed={checked}>
      <span
        className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-toggle-thumb transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};
