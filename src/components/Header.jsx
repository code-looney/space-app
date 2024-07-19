import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-[88px] flex justify-between items-center'>
        <div className='h-[40px] w-[187.5px] lg:h-[48px] lg:w-[160px] outline pl-[1.5em]'>
            <img className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] cursor-pointer' src="/assets/shared/logo.svg" alt="" />
        </div>
        <div className=' h-[40px] w-[187.5px] outline flex justify-end items-center pr-[1.5em lg:hidden'>
            <Link><img className='h-[21px] w-[24px]' src="/assets/shared/icon-hamburger.svg" alt="" /></Link>
        </div>
            <div className='lg:block hidden w-[640px] text-white outline lg:h-[96px] uppercase' >
              <ul className='flex h-full justify-end items-center text-[14px]'>
                <li className='pr-[4em]'>Home</li>
                <li className='pr-[4em]'><span>01</span>Destination</li>
                <li className='pr-[4em]'><span>02</span>Crew</li>
                <li className='pr-[4em]'><span>03</span>Technology</li>
              </ul>
            </div>
    </div>
  )
}

export default Header