import React from 'react'

const BoxContent = ({children}) => {
  return (
    <div className='p-[1.5em] lg:pb-[1.5em] lg:pl-[1.5em] lg:pr-[1.5em] lg:pt-[8em] lg:gap-[5em] flex-col' >
        {children}
    </div>
  )
}

export default BoxContent