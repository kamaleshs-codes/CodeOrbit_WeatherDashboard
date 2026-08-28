import React from "react";
import { Dashboard } from "../pages/Dashboard";
import { AppRoutes } from "../routes/AppRoutes";

const MainContent = () => {
  return (
    <main className='flex-1 bg-main text-text-muted'>
      <AppRoutes />
    </main>
  );
};

export default MainContent;
