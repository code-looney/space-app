import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[88px] flex justify-between items-center'>
        <div className='h-[40px] w-full pl-[1.5em]'>
            <img className='h-[40px]' src="../public/assets/shared/logo.svg" alt="" />
        </div>
        <div className=' h-[40px] w-full flex justify-end items-center pr-[1.5em]'>
            <img className='h-[21px]' src="../public/assets/shared/icon-hamburger.svg" alt="" />
        </div>
    </div>
  )
}

export default Header