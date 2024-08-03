import React, {useContext, useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../AppContext';

const Header = () => {
  const context = useContext(AppContext);

  return (
    <div className='w-full h-[88px] lg:h-[96px] flex justify-between lg:justify-end items-center font-barlowCondensed tracking-widest relative'>
        <div className='xl:w-[560p] gap-[64px] items-center lg:absolute lg:left-0 z-40 lg:h-[48px] lg:min-w-[160px] pl-[1.5em] lg:pl-[2.5em] lg:justify-start flex'>
            <Link><img className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] cursor-pointer' src="/assets/shared/logo.svg" alt="" /></Link>
            <hr className='w-[700px] hidden xl:block bg-black' />
        </div>
        <div className=' h-[40px] w-[187.5px] lg:h-[96px] flex justify-end items-center lg:absolute right-0 top-0 lg:pr-0 pr-[1.5em] '>
            <Link onClick={() => context.handleToggleMobileMenu()}><img className='lg:hidden' src="/assets/shared/icon-hamburger.svg" alt="hamburger icon " /></Link>
        </div>
        <ul className='h-full lg:w-[640px] flex-row lg:backdrop-blur-xl lg:bg-white/5 justify-end items-center pr-[3em] hidden gap-[3em] text-[1rem] lg:flex relative z-10 text-white uppercase'>
          {context.router && context.router.map(route => {
            return (
              <li key={route.id} className={`h-full items-center flex-col justify-center relative z-20 border-b-4 flex gap-3 hover:border-opacity-50 ease-in-out duration-700 hover:border-b-white 
              ${context.hoverUnderlineColor === route.id ? 'border-b-white' : 'border-b-transparent'}`}>
              <NavLink to={`/`}
                  onClick={() => context.handleNavLinkHover(route.id)}
                  className={`flex gap-3`}>
                  {/* <span className={`font-bold`}></span>  */}
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