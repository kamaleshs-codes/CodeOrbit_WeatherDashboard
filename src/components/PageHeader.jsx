import React from "react";

export const PageHeader = ({ title, subtitle, children }) => {
  return (
    <header className='flex gap-10 items-center p-3 bg-primary border-b-2 border-border-muted'>
      <div>
        <h1 className='text-md font-bold'>{title}</h1>
        <p className='text-xl'>{subtitle}</p>
      </div>
      <div className="flex-1">
          {children && <div>{children}</div>}
      </div>
    </header>
  );
};
