import React from 'react'

const DashboardHeader = () => {
  return (
        <section
        id='dashboard-header'
        className='flex justify-between items-center p-3 bg-primary border-b-2 border-border-muted'>
        <div>
          <h1 className='text-sm font-medium'>Hi, Kamalesh! Good Morning</h1>

          <p className='text-xl'>Here's your Weather Overview</p>
        </div>

        <input
          className='w-1/3 p-4 border rounded-full bg-card text-secondary font-semibold'
          type='text'
          placeholder='Search Weather, Places..'
        />
        <div>
          <p className='font-semibold'>My Profile</p>
        </div>
      </section>
  )
}

export default DashboardHeader