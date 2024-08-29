import React from 'react'

const Title = ({children}) => {
  return (
    <div className="flex lg:pl-[2.5em] lg:mt-[3em] mt-[1em] lg:justify-start justify-center">
    <h1 className='text-[1rem] lg:text-[1.25rem] flex gap-[1em] justify-center items-center text-[#D5E0FF] font-barlowCondensed uppercase tracking-[0.125em] '>
        {children}
    </h1>
  </div>
  )
}

export default Title