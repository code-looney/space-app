import React, {useState, useContext} from 'react'
import Header from './Header'
import MobileMenu from './MobileMenu';
import { AppContext } from '../AppContext';

const Home = () => {
  const context = useContext(AppContext);
  const colors = ["bg-white"]

  return (
    <div className='flex flex-col bg-fixed items-center absolute bg-parallax h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
      <div className='overflow-x-scrol overflow-x-hidden no-scrollbar w-full'>
          <Header /> 
          <MobileMenu />
          <div className='p-[1.5em] lg:pb-[1.5em] lg:pl-[1.5em] lg:pr-[1.5em] lg:pt-[8em] lg:gap-[80px] text-white flex flex-col '>
            <div className='flex flex-col gap-[1em] text-center items-center'>
                {/* check for correct tracking dimension (h1) */}
              <h1 className='text-[1rem] lg:text-[1.75rem] flex flex-col justify-center items-center text-lightBlue font-barlowCondensed uppercase tracking-[0.125em] '>So, you want to travel to</h1>
              <h1 className='text-[5rem] lg:text-[9rem] text-white uppercase break-all font-bellefair'>space</h1>
              {/* make sure the break-all is not making the para undreada ble */}
              <p className='text-lightBlue font-barlow leading-[180%] text-[0.9375em] lg:text-[1rem] lg:w-[510px]'>Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className=' h-[382px] lg:h-[272px] w-full flex justify-center items-center relative z-30'>
                <button 
                // onClick={() => handleHoverOver()}

                onMouseEnter={() => context.setHover("white")} 
                onMouseLeave={() => context.setHover("")}
                onTouchStart={() => context.setHover("white")} 
                onTouchEnd={() =>  context.setHover("")} 

                className='z-50 font-bellefair relative cursor-pointer uppercase text-[1.125rem] lg:text-[2rem] 
                text-veryDarkNavy w-[144px] lg:w-[272px] lg:min-h-[272px] min-h-[144px] rounded-full 
                flex justify-center items-center bg-white select-none'>{context.mainButtonText}</button>
                {/* look for the right dimensions */}
                <div className={`lg:w-[480px] lg:h-[480px] w-[280px] h-[280px]  flex justify-center items-center rounded-full bg-${context.hover} opacity-[10%] absolute ease-in-out duration-700 z-40`}></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home