import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [hoverUnderlineColor, setHoverUnderlineColor] = useState("");
  const hoverState = ["border-b-4"]

  function handleNavLinkHover () {
    if (hoverUnderlineColor === "") {
      setHoverUnderlineColor("border-b-4")
    }
  }


  return (
    <div className='w-full h-[88px] lg:h-[96px] flex justify-between items-center font-barlowCondensed  tracking-widest '>
        <div className='h-[40px] w-[187.5px] lg:h-[48px] lg:w-[160px] pl-[1.5em] lg:pl-0 lg:justify-center flex'>
            <img className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] cursor-pointer' src="/assets/shared/logo.svg" alt="" />
        </div>
        <div className=' h-[40px] w-[187.5px] lg:w-[640px] lg:h-[96px] flex justify-end items-center  pr-[1.5em lg:absolute right-0 top-0backdrop-blur-xlbg-white/5 lg:pr-0 pr-[1.5em] '>
            <Link><img className='h-[21px] w-[24px] lg:hidden' src="/assets/shared/icon-hamburger.svg" alt="" /></Link>
        </div>
            <ul className='h-full w-full flex-row justify-end items-center pr-[3em] gap-[3em] text-[1rem] hidden lg:flex relative z-50 text-white uppercase'>
                <li className={`flex h-full items-center ${hoverUnderlineColor} border-b-white  relative z-20`}>
                  <span className='relative z-40'></span>
                  <Link onTouchStart={handleNavLinkHover} className=' cursor-pointer'>Home</Link>
                </li>
                <li className='flex gap-[0.5em] h-full items-center border-b-4 border-b-white  relative z-20'>
                  <span className='relative z-40 '>01</span>
                  <Link className=' cursor-pointer'>Destination</Link>
                  </li>
                <li className='flex gap-[0.5em] h-full items-center border-b-4 border-b-white  relative z-20'>
                  <span className='relative z-40 '>02</span>
                  <Link className=' cursor-pointer'>Crew</Link>
                  </li>
                <li className='flex gap-[0.5em] h-full items-center border-b-4 border-b-white  relative z-20'>
                  <span className='relative z-40 '>03</span>
                  <Link className=' cursor-pointer'>Technology</Link>
                  </li>
              </ul>
    </div>
  )
}

export default Header