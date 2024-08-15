import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';


const DestinationA = () => {
    const context = useContext(AppContext);
  return (
    <>
    <div className='w-[327px] h-[203px] flex justify-center items-center'>
    <img className='w-[150px] h-[150px]' src="/assets/destination/image-moon.webp" alt="The Moon" /></div>
  <div className={`w-[327px] h-[32px] flex justify-center items-center right-0 top-0 no-scrollbar md:hidden 
    ${context.toggleMobileMenu === false ? `transition transform duration-700 ease-in-out translate-x-0 opacity-100` : "" }
    text-white`}>
    
      <ul className='h-full flex w-full gap-[2em] justify-center items-center'>
          {context.destinationNavigation && context.destinationNavigation.map(route => (
            <li key={route.page} className={` flex uppercase items-center font-normal justify-center tracking-[0.125em] border-b-[0.1875em] gap-3 hover:border-opacity-50 ease-in-out duration-700 hover:border-b-white 
              ${context.hoverUnderlineColor === route.id ? 'border-b-white' : 'border-b-transparent'}`}>
                  <NavLink onClick={() => context.handleNavLinkHover(route.id)} 
                      className="flex gap-3 h-[32px] justify-self-center text-[0.875rem] font-barlowCondensed">
                      {route.page}
                  </NavLink>
              </li>
          ))}
      </ul>
  </div>
  <div className='mt-[1em] flex items-start justify-start outline'>
      <h1 className='text-[3.5rem] lg:text-[9rem] text-white uppercase break-all font-bellefair'>Moon</h1>
    </div>
    <div className='mb-[1.5em]'>
      <p className='text-lightBlue font-barlow leading-[180%] text-[0.9375em] lg:text-[1rem] lg:w-[510px]'>
      See our planet as you’ve never seen it before. A perfect relaxing trip away to help
      regain perspective and come back refreshed. While you’re there, take in some history
      by visiting the Luna 2 and Apollo 11 landing sites.</p>
    </div>
    <div className='w-full'>
    <hr className='w-full opacity-25' />
    </div>
    <div className='mt-[1.5em] flex flex-col gap-[1.5em]'>
      <div className='flex flex-col gap-[0.75em]'>
        <p className='text-[0.875em] text-lightBlue'>AVG. DISTANCE</p>
        <p className='text-[1.75em] text-white'>384,400 KM</p>
      </div>
      <div className='flex flex-col gap-[0.75em]'>
        <p className='text-lightBlue text-[0.875em]'>EST. TRAVEL TIME</p>
        <p className='text-white text-[1.75em]'>3 DAYS</p>
      </div>
    </div>
    </>
  )
}

export default DestinationA