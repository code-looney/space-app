import React from 'react'

const Container = ({children}) => { 
    return (
    <div className='flex flex-col bg-fixed items-center absolute bg-space h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
        {children}
    </div>
    )
}

export default Container