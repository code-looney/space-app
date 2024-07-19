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
            <div className='lg:block hidden w-[640px] text-white outline'>
              <ul className='flex gap'>
                <li>Home</li>
                <li>Destination</li>
                <li>Crew</li>
                <li>Technology</li>
              </ul>
            </div>
    </div>
  )
}

export default Header