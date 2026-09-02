import React from "react";
import DashboardSearch from "./DashboardSearch";
import { PageHeader } from "./PageHeader";
import { FiUser } from "react-icons/fi";

const DashboardHeader = ({ onSearch }) => {
  return (
    <div className='flex justify-between'>
      <div className='flex-1'>
        <PageHeader
          title='Hi, Kamalesh! Good Morning,'
          subtitle="Here's your Weather Overview">
          <DashboardSearch onSearch={onSearch} />
        </PageHeader>
      </div>
      <div className='flex items-center gap-2 bg-secondary text-primary cursor-pointer hover:bg-accent hover:text-secondary p-3 border-b-2 border-border-muted border-l-2'>
        <div className='w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center'>
          <FiUser className='text-xl text-secondary' />
        </div>
        <p className='font-semibold'>My Profile</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
