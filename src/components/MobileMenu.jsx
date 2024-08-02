import React, {useContext} from 'react'
import { AppContext } from '../AppContext';
import { NavLink, Link } from 'react-router-dom';

const MobileMenu = () => {
   const context = useContext(AppContext);
   console.log(context)
   
  return (
    <div className='flex flex-col w-[254px] h-screen right-0 top-0 absolute no-scrollbar text-white backdrop-blur-xl z-50 bg-white/5 bg-red-600'>
        <ul className='h-full w-full flex flex-col gap-[2em]'>
        <div className=' h-[88px] lg:h-[96px] flex justify-end items-center pr-[1.5em] '>
            <Link><img className='w-[24px] lg:hidden' src="/assets/shared/icon-close.svg" alt="" /></Link>
        </div>
          {context.router && context.router.map(route => {
            return (
              <li key={route.id} className={`pl-[2em] flex uppercase tracking-[0.125em] border-r-4 gap-3 hover:border-opacity-50 ease-in-out duration-700 hover:border-b-white 
               ${context.handleNavLinkHover === route.id ? 'border-b-white' : 'border-b-white'} `}>
                <NavLink onClick={() => context.handleNavLinkHover(route.id)} className="flex gap-3 justify-self-center">
                  <span className='font-bold'>{route.order}</span>
                  <span className='text-[16px] font-barlowCondensed'>{route.page}</span></NavLink>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default MobileMenu