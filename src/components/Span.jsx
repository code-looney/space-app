import React from 'react'

const Span = ({children}) => {
  return (
    <div className="flex lg:justify-start justify-center">
    <h1 className='text-[1.5rem] lg:text-[1.25rem] flex gap-[1em] justify-center items-center text-white font-bellefair uppercase tracking-[0.125em]'>
        {children}
    </h1>
  </div>
  )
}

export default Span;