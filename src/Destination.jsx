import React, {useContext} from 'react'
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import { AppContext } from './AppContext';
import { NavLink } from 'react-router-dom';

const Destination = () => {
  const context = useContext(AppContext);
  console.log(context.destinationNavigation)

  return (
    <div className='flex flex-col bg-fixed items-center absolute bg-moon h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
      <div className='overflow-x-scrol overflow-x-hidden no-scrollbar w-full'>
          <Header /> 
          <MobileMenu />
          <div className='p-[1.5em] lg:pb-[1.5em] lg:pl-[1.5em] lg:pr-[1.5em] lg:pt-[8em] lg:gap-[80px] text-white flex flex-col '>
            <div className='flex outline flex-col gap-[1em] text-center items-center'>
                {/* check for correct tracking dimension (h1) */}
              <h1 className='text-[1rem] lg:text-[1.75rem] flex  gap-[1.5em] justify-center items-center text-lightBlue font-barlowCondensed uppercase tracking-[0.125em] '>
                <span className='font-bold opacity-25'>01</span> Pick your destination
              </h1>
              {/* make sure the break-all is not making the para undreada ble */}
            <div className='w-[327px] outline h-[203px] flex justify-center items-center'>
              <img className='w-[150px] h-[150px]' src="/assets/destination/image-moon.webp" alt="The Moon" />
            </div>
            <div className={`w-[327px] outline h-[32px] flex justify-center items-center right-0 top-0 no-scrollbar md:hidden 
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
              <div>
                <h1 className='text-[5rem] lg:text-[9rem] text-white uppercase break-all font-bellefair'>Moon</h1>
              </div>
              <p className='text-lightBlue font-barlow leading-[180%] text-[0.9375em] lg:text-[1rem] lg:w-[510px]'>
              See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
              regain perspective and come back refreshed. While you’re there, take in some history 
              by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Destination