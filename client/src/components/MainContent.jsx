import React from "react";
import { AppRoutes } from "../routes/AppRoutes";

const MainContent = ({location, setLocation}) => {
  return (
    <main className='flex-1 bg-main text-text-muted'>
      <AppRoutes location={location} setLocation={setLocation} />
    </main>
  );
};

export default MainContent;
