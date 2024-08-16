import React from 'react'

const Box = ({children}) => {
  return (
    <div className='overflow-x-scrol overflow-x-hidden no-scrollbar w-full h-full'>
        {children}
    </div>
  )
}

export default Box