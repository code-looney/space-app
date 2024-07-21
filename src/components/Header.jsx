import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [hoverUnderlineColor, setHoverUnderlineColor] = useState("transparent");
  const hoverState = ["border-b-4"]

  // function handleNavLinkHover (id) {
  //   if (id === 2) {
  //     setHoverUnderlineColor('white')
  //   }
  // }


  return (
    <div className='w-full h-[88px] lg:h-[96px] flex justify-between items-center font-barlowCondensed  tracking-widest '>
        <div className='h-[40px] w-[187.5px] lg:h-[48px] lg:w-[160px] pl-[1.5em] lg:pl-0 lg:justify-center flex'>
            <img className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] cursor-pointer' src="/assets/shared/logo.svg" alt="" />
        </div>
        <div className=' h-[40px] w-[187.5px] lg:w-[640px] lg:h-[96px] flex justify-end items-center lg:absolute right-0 top-0 lg:backdrop-blur-xl lg:bg-white/5 lg:pr-0 pr-[1.5em] '>
            <Link><img className='h-[21px] w-[24px] lg:hidden' src="/assets/shared/icon-hamburger.svg" alt="" /></Link>
        </div>
            {/* <ul className='h-full w-full flex-row justify-end items-center pr-[3em] hidden gap-[3em] text-[1rem]  lg:flex relative z-50 text-white uppercase'>
                <li className={`flex h-full items-center flex-col  justify-center  border-b-white  relative z-20`}>
                  <Link
                  id='1' 
                  onTouchStart={() => handleNavLinkHover(id)}
                  onTouchEnd={() => setHoverUnderlineColor("transparent")}
                  className={`border-b-${hoverUnderlineColor} border-b-4 pt-[4px] h-full select-none flex items-center`}>Home</Link>
                </li>
                
                <li className='flex gap-[0.5em] h-full items-center relative z-20'>
                  <span className='relative z-40 '>01</span>
                  <Link
                    id='2'
                    onTouchStart={() => handleNavLinkHover(id)}
                    onTouchEnd={() => setHoverUnderlineColor("transparent")} 
                    className={` cursor-pointer border-b-${hoverUnderlineColor} border-b-4 pt-[4px] h-full select-none flex items-center`}>Destination</Link>
                  </li>
                <li className='flex gap-[0.5em] h-full items-center relative z-20'>
                  <span className='relative z-40 '>02</span>
                  <Link
                    id='3'
                    onTouchStart={() => setHoverUnderlineColor("white")}
                    onTouchEnd={() => setHoverUnderlineColor("transparent")} 
                    className=' cursor-pointer'>Crew</Link>
                  </li>
                <li className='flex gap-[0.5em] h-full items-center relative z-20'>
                  <span className='relative z-40 '>03</span>
                  <Link
                    id='4'
                    onTouchStart={() => setHoverUnderlineColor("white")}
                    onTouchEnd={() => setHoverUnderlineColor("transparent")} 
                    className=' cursor-pointer'>Technology</Link>
                  </li>
              </ul> */}
    </div>
  )
}

export default Header