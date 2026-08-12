import React from "react";

const Navbar = () => {
  return (
    <header className='flex justify-between px-8 py-3 h-16 items-center font-mooli bg-secondary text-text-main font-semibold text-lg border-b-2 border-border shadow-subtle'>
      <h1>Weatherly</h1>
      <nav>
        <ul className='flex gap-8'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
