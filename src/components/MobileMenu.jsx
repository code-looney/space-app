import React, {useContext, useState} from 'react'
import { AppContext } from '../AppContext';
import { NavLink, Link } from 'react-router-dom';

const MobileMenu = () => {
   const context = useContext(AppContext);
   console.log(context.toggleMobileMenu)

  return (
    <div className={` flex-col w-[254px] h-screen right-0 top-0 absolute no-scrollbar text-white backdrop-blur-xl z-50 bg-white/5 ${context.toggleMobileMenu}`}>
        <ul className='h-full w-full flex pt-[88px] outline flex-col gap-[2em]'>
        {/* <div className=' h-[88px] lg:h-[96px] flex justify-end items-center pr-[1.5em] '>
            <Link><img className='w-[24px]' src="/assets/shared/icon-close.svg" alt="" /></Link>
        </div> */}
          {context.router && context.router.map(route => {
            return (
              <li key={route.id} className={`pl-[2em] flex uppercase tracking-[0.125em] border-r-4 gap-3 hover:border-opacity-50 ease-in-out duration-700 hover:border-r-white 
               ${context.hoverUnderlineColor === route.id ? 'border-r-white' : 'border-r-transparent'} `}>
                <NavLink onClick={() => context.handleNavLinkHover(route.id)} className="flex gap-3 justify-self-center text-[16px] font-barlowCondensed">
                  <span className='font-bold'>{route.order}</span>
                  {route.page}
                </NavLink>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default MobileMenu