import React from "react";
import DashboardSearch from "./DashboardSearch";
import { PageHeader } from "./PageHeader";

const DashboardHeader = ({ onSearch }) => {
  return (
      <PageHeader
        title='Hi, Kamalesh! Good Morning,'
        subtitle="Here's your Weather Overview">
          <div className="flex justify-between items-center">
              <DashboardSearch onSearch={onSearch} />
              <h3>My Profile</h3>
          </div>
      </PageHeader>
  );
};

export default DashboardHeader;
