import React from "react";

export const InnerCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-inner-card rounded-xl p-3 shadow-subtle ${className}`}>
      {children}
    </div>
  );
};
