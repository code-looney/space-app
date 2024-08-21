import React from 'react'

const BoxContent = ({children}) => {
  return (
    <div className='p-[1.5em] lg:pb-[1.5em] lg:pl-[1.5em] lg:pr-[1.5em] lg:pt-[em]' >
        {children}
    </div>
  )
}

export default BoxContent