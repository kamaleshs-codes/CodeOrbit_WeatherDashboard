import React from 'react'

export const Card = ({children, heading}) => {
  return (
    <div className='p-3 bg-secondary w-full mt-6 rounded-2xl border shadow-subtle'>
        <h2 className='text-4xl text-text-main mb-3'>{heading}</h2>
        {children}
    </div>
  )
}
