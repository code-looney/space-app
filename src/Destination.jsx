import React, {useContext} from 'react'
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import DestinationA from './components/DestinationA';

const Destination = () => {

  return (
    <div className='flex flex-col bg-fixed items-center absolute bg-moon h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
      <div className='overflow-x-scrol overflow-x-hidden no-scrollbar w-full'>
          <Header /> 
          <MobileMenu />
          <div className='p-[1.5em] lg:pb-[1.5em] lg:pl-[1.5em] lg:pr-[1.5em] lg:pt-[8em] lg:gap-[5em] text-white flex flex-col '>
            <div className='flex flex-col gap-2 text-center items-center'>
                {/* check for correct tracking dimension (h1) */}
              <h1 className='text-[1rem] lg:text-[1.75rem] flex gap-[.5em] justify-center items-center text-lightBlue font-barlowCondensed uppercase tracking-[0.125em] '>
                <span className='font-bold opacity-25'>01</span> Pick your destination
              </h1>
              {/* make sure the break-all is not making the para undreada ble */}

            {/* destination a starts */}
              <DestinationA />
              {/* destination a ends */}

            </div>
          </div>
        </div>
    </div>
  )
}

export default Destination