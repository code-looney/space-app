import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const ExploreButton = () => {
    const context = useContext(AppContext)

  return (
    <div className='h-[382px] lg:h-[272px] w-full flex justify-center items-center relative z-30 break-all'>
                <button 
                // onClick={() => handleHoverOver()}

                onMouseEnter={() => context.setHover("white")} 
                onMouseLeave={() => context.setHover("")}
                onTouchStart={() => context.setHover("white")} 
                onTouchEnd={() =>  context.setHover("")} 

                className='z-50 font-bellefair relative cursor-pointer uppercase text-[1.125rem] lg:text-[2rem] 
                text-veryDarkNavy w-[144px] lg:w-[272px] lg:min-h-[272px] min-h-[144px] rounded-full 
                flex justify-center items-center bg-white select-none'>{context.mainButton.text}</button>
                {/* look for the right dimensions */}
                <div className={`lg:w-[480px] lg:h-[480px] w-[280px] h-[280px]  flex justify-center items-center rounded-full bg-${context.hover} opacity-[10%] absolute ease-in-out duration-700 z-40`}></div>
            </div>
  )
}

export default ExploreButton