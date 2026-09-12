import React from "react";
import NavbarHeader from "../components/NavbarHeader";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const AppLayout = ({ location, setLocation }) => {
  return (
    <div className='cursor-default font-mooli'>
      <NavbarHeader />
      <div className='flex'>
        <Sidebar />
        <MainContent
          location={location}
          setLocation={setLocation}></MainContent>
      </div>
    </div>
  );
};

export default AppLayout;
