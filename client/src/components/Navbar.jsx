import React from "react";
import { FiHome, FiInfo, FiLogIn, FiMail } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className='flex justify-between px-8 py-3 h-16 items-center font-mooli bg-secondary text-text-main font-semibold text-lg border-b-2 border-border shadow-subtle'>
      <h1>Weatherly</h1>
      <nav>
        <ul className='flex gap-8'>
          <li>
            <div className="flex items-center gap-1 hover:text-accent">
              <span><FiHome/></span>
              <a href='#'>Home</a>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-1 hover:text-accent">
              <span><FiInfo/></span>
              <a href='#'>About</a>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-1 hover:text-accent">
              <span><FiMail/></span>
            <a href='#'>Contact</a>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-1 hover:text-accent">
              <span><FiLogIn/></span>
              <a href='#'>Login</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
