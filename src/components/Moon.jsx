import React from 'react';
import DestinationNavLinks from './DestinationNavLinks';

const Moon = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center relative xl:flex-row">
      <div className="flex justify-center items-center mb-12 lg:mb-24 w-[327px] h-[203px] lg:w-[688px] lg:h-[384px] xl:w-full">
        <img
          className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]"
          src="/assets/destination/image-moon.webp"
          alt="Moon image"
        />
      </div>
      <div className="flex flex-col justify-center items-center mb-2 lg:w-[514px] lg:h-[361px] h-auto xl:h-auto xl:w-full" >
        <div className="xl:w-full">
          <div className="flex flex-col xl:flex-col items-center xl:items-start">
            <DestinationNavLinks />
            <h1 className="text-white text-[3.5rem] lg:text-[5rem] font-bellefair xl:text-[9rem] my-1">
              MOON
            </h1>
          </div>
          <p className="text-[#D5E0FF] leading-[180%] font-barlow text-center xl:text-start text-[0.9375em] lg:text-[1rem] lg:w-[510px] xl:w-[550px] xl:text-[1.125em] h-[150px]">
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help
            regain perspective and come back refreshed. While you’re there, take in some history
            by visiting the Luna 2 and Apollo 11 landing sites.
          </p>
          <hr className="w-full opacity-25 my-4 xl:w-[550px]" />
          <div className="mt-6 flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-center xl:justify-start xl:text-left text-center">
            <div className="flex flex-col lg:w-[245px] lg:h-[61px] xl:px-0 gap-2">
              <p className="text-lightBlue text-[0.875em]  font-barlowCondensed tracking-widest">AVG. DISTANCE</p>
              <p className="text-white text-[1.75em] font-bellefair">384,400 KM</p>
            </div>
            <div className="flex flex-col lg:w-[245px] lg:h-[61px] xl:px-0 gap-2">
              <p className="text-lightBlue text-[0.875em]  font-barlowCondensed tracking-widest">EST. TRAVEL TIME</p>
              <p className="text-white text-[1.75em] font-bellefair">3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moon;
