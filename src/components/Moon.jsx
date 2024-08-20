import React from 'react'
import DestinationNavLinks from './DestinationNavLinks'

const Moon = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full h-screen items-center relative">
    <div className='w-[327px] h-[203px] flex justify-center items-center mb-[2em]'>
      <img className="w-[150px] h-[150px]" src="/assets/destination/image-moon.webp" alt="Moon image" />
      </div>
    <DestinationNavLinks />
    <div className='w-[327px] h-auto flex flex-col justify-center items-center mb-[2em]'>
      <h1 className="text-white text-[3.5rem] font-bellefair break-all xl:text-[9rem] my-[.3em]">MOON</h1>
      <p className="text-[#D5E0FF] leading-[180%] font-barlow text-center xl:text-start text-[0.9375em] lg:text-[1rem] lg:w-[510px] xl:w-[550px] xl:text-[1.125em]">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help
        regain perspective and come back refreshed. While you’re there, take in some history
        by visiting the Luna 2 and Apollo 11 landing sites.
      </p>
    </div>
    <div className='w-full'>
    <hr className='w-full opacity-25' />
    </div>
    <div className='mt-[1.5em] flex flex-col gap-[1.5em] lg:gap-0 lg:flex-row items-center text-center'>
      <div className='flex flex-col lg:w-[245px] lg:h-[61px] lg:px-[0.75 gap-[.5em]'>
        <p className='text-[0.875em] text-lightBlue'>AVG. DISTANCE</p>
        <p className='text-[1.75em] text-white'>384,400 KM</p>
      </div>
      <div className='flex flex-col lg:w-[245px] lg:h-[61px] lg:px-[0.75]  gap-[.5em]'>
        <p className='text-lightBlue text-[0.875em]'>EST. TRAVEL TIME</p>
        <p className='text-white text-[1.75em] '>3 DAYS</p>
      </div>
    </div>
  </div>
  )
}

export default Moon