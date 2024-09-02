import React from 'react'

const SubTitle = ({children}) => {
  return (
    <div className="flex lg:pl-[2.5em] lg:mt-[3em] mt-[1em] lg:justify-start justify-center">
    <h1 className='text-[1rem] lg:text-[1.25rem] flex gap-[1em] justify-center items-center text-white font-bellefair uppercase tracking-[0.125em] opacity-50 '>
        {children}
    </h1>
  </div>
  )
}

export default SubTitle;