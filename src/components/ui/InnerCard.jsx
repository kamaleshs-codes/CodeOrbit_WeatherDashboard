import React from "react";

export const InnerCard = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-inner-card rounded-xl py-2 px-4 shadow-subtle ${className}`}>
      {children}
    </div>
  );
};
