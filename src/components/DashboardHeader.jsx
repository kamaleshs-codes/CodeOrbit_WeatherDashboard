import React, { useState } from "react";

const DashboardHeader = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      return;
    }

    onSearch(trimmedSearch);
    setSearch("");
  };

  return (
    <section
      id='dashboard-header'
      className='flex justify-between items-center p-3 bg-primary border-b-2 border-border-muted'>
      <div>
        <h1 className='text-sm font-medium'>Hi, Kamalesh! Good Morning</h1>

        <p className='text-xl'>Here's your Weather Overview</p>
      </div>

      <input
        className='border rounded-full w-1/3 p-4 bg-card text-secondary font-semibold'
        type='text'
        placeholder='Search Weather, Places...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <div>
        <p className='font-semibold'>My Profile</p>
      </div>
    </section>
  );
};

export default DashboardHeader;
