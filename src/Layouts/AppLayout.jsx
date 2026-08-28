import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { AppRoutes } from "../routes/AppRoutes";

const AppLayout = () => {
  return (
    <div className='cursor-default font-mooli'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <MainContent>
        
        </MainContent>
      </div>
    </div>
  );
};

export default AppLayout;
