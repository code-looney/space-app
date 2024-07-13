import React from 'react'

const Header = () => {
  return (
    <div className='outline w-full h-[88px] flex justify-between items-center'>
        <div className='outline w-[187.5px] h-[40px] pl-[1.5em]'>
            <img className='w-[40px] h-[40px]' src="starter-code/assets/shared/logo.svg" alt="" />
        </div>
        <div className='outline w-[187.5px] h-[40px] pr-[1.5em] flex justify-end items-center'>
            <img className='w-[24px] h-[21px]' src="starter-code/assets/shared/icon-hamburger.svg" alt="" />
        </div>
    </div>
  )
}

export default Header