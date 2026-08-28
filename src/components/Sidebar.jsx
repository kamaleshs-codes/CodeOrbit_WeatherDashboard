import React from "react";
import { NavList } from "./ui/NavList";

const Sidebar = () => {
  return (
    <aside className='sticky top-0 h-screen w-1/7 flex flex-col items-center bg-secondary text-text-main border-r-2 border-border'>
      <p className='basis-15 py-3 w-full text-text-muted text-center font-semibold border-b border-border-muted bg-main text-xl'>
        Know Weather <br /> @ Your Place!
      </p>
      <nav className='w-full text-center bg-secondary'>
        <ul className='flex flex-col bg-primary text-text-muted text-xl font-semibold'>
          <NavList>Dashboard</NavList>
          <NavList>Forecast</NavList>
          <NavList>Places</NavList>
          <NavList>Settings</NavList>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
