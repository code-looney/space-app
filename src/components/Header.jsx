import React, {useContext, useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../AppContext';

const Header = () => {
  const context = useContext(AppContext);

  return (
    <div className='w-full h-[88px] lg:h-[96px] flex justify-between lg:justify-end items-center font-barlowCondensed tracking-widest relative'>
        <div className='xl:w-full relative gap-[64px] items-center lg:absolute public/assets/icon-close.svg lg:left-0 z-40 xl:z-0 lg:h-[48px] lg:min-w-[160px] pl-[1.5em] lg:pl-[2.5em] lg:justify-start flex'>
            <Link><img className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] cursor-pointer' src="/assets/shared/logo.svg" alt="logo" /></Link>
            <hr className='w-full translate-x-32 outline hidden absolute xl:block opacity-25' />
        </div>
        <div className='h-[40px] w-[187.5px] lg:h-[96px] flex justify-end items-center lg:absolute right-0 top-0 lg:pr-0 pr-[1.5em] '>
            <Link onClick={() => context.handleToggleMobileMenu()}><img className='lg:hidden' src="/assets/icon-hamburger.svg" alt="hamburger icon" /></Link>
        </div>
        <ul className='h-full lg:w-[640px] xl:w-[736px] flex-row justify-end lg:backdrop-blur-xl lg:bg-white/5 z-10 xl:z-0 items-center pr-[3em] hidden gap-[3em] text-[1rem] lg:flex relative text-white uppercase'>
        {/* <li className=' w-full mr-24 xl:block relative xl:z-50 '> */}
        <hr className='w-full hidden xl:block mr-20 opacity-25' />
        {/* </li> */}
          {context.router && context.router.map(route => {
            return (
              <li key={route.id} className={`h-full items-center flex-col justify-center relative z-20 xl:z-0 border-b-4 flex gap-3 ${context.hoverUnderlineColor === route.id ? null : "hover:border-opacity-50 "} ease-in-out duration-700 hover:border-b-white 
              ${context.hoverUnderlineColor === route.id ? 'border-b-white' : 'border-b-transparent'}`}>
              <NavLink to={`/`}
                  onClick={() => context.handleNavLinkHover(route.id)}
                  className={`flex gap-3`}>
                  <span className={`${route.order === "00" ? "hidden" : ""} ${route.order === "00" ? "xl:block" : ""}`}>{route.order}</span>
                {route.page}
                  </NavLink>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default Header