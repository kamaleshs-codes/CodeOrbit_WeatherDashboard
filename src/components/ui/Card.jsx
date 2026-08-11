import React from 'react'

export const Card = ({children}) => {
  return (
    <div className='p-3 bg-secondary w-1/3 mt-12 rounded-2xl border shadow-subtle'>
        <h2 className='text-4xl text-primary mb-3'>Current Weather</h2>
        {children}
    </div>
  )
}
