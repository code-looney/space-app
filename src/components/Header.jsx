import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-[88px] flex justify-between items-center font-barlowCondensed  tracking-widest '>
        <div className='h-[40px] w-[187.5px] lg:h-[48px] lg:w-[160px] outline pl-[1.5em]'>
            <img className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] cursor-pointer' src="/assets/shared/logo.svg" alt="" />
        </div>
        <div className=' h-[40px] w-[187.5px] lg:w-[640px] lg:h-[96px]  flex justify-end items-center  pr-[1.5em lg:absolute right-0 top-0 backdrop-blur-xl bg-white/5'>
            <Link><img className='h-[21px] w-[24px] lg:hidden' src="/assets/shared/icon-hamburger.svg" alt="" /></Link>
        </div>
            <ul className='h-full w-full flex-row justify-end items-center pr-[3em] gap-[3em] text-[1rem] hidden lg:flex relative z-50 text-white uppercase'>
                <li className=''>Home</li>
                <li className='flex gap-[0.5em]'><span>01</span>Destination</li>
                <li className='flex gap-[0.5em]'><span>02</span>Crew</li>
                <li className='flex gap-[0.5em]'><span>03</span>Technology</li>
              </ul>
    </div>
  )
}

export default Header