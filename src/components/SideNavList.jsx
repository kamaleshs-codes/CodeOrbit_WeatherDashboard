import React from "react";
import { NavLink } from "react-router-dom";

export const SideNavList = ({ children, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block py-4 border-b border-border-muted ${
            isActive
              ? "bg-secondary text-text-main"
              : "bg-primary text-text-muted"
          }`
        }>
        {children}
      </NavLink>
    </li>
  );
};
