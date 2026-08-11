import React from 'react'
import { NavList } from './ui/NavList'

const Sidebar = () => {
  return (
    <aside className='h-[calc(100vh-4rem)] w-1/7  flex flex-col items-center gap-10 py-8 bg-sidebar border'>
        <p className='basis-15 justify-center text-xl'>Know Weather <br /> @ Your Place!</p>
        <nav className='w-full text-center bg-secondary'>
            <ul className='flex flex-col text-xl text-sidebar font-semibold'>
                <NavList>Dashboard</NavList>
                <NavList>Forecast</NavList>
                <NavList>Places</NavList>
                <NavList>Settings</NavList>
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar