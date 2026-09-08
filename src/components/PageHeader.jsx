import React from "react";

export const PageHeader = ({ title, subtitle, children, refreshStatus }) => {
  return (
    <header className='flex gap-8 items-center px-5 py-3 bg-primary border-b-2 border-border-muted'>
      <div>
        <h1 className='text-lg font-bold'>{title}</h1>
        <p className='text-xl'>{subtitle}</p>
      </div>

      <div className='flex-1'>{children && <div>{children}</div>}</div>

      {refreshStatus && (
        <div className='text-sm text-text-muted self-end whitespace-nowrap'>
          Auto Refresh: {refreshStatus}
        </div>
      )}
    </header>
  );
};
