import React, {useState} from 'react'
import Header from './Header'

const Home = () => {
  const [hover, setHover] = useState("");
  const colors = ["bg-white"]
  

  return (
    <div className='flex flex-col bg-fixed items-center bg-parallax h-screen bg-no-repeat bg-cover overflow-hidden w-full break-all'>
        <div className='overflow-scroll no-scrollbar w-full'>
          <Header />
          <div className='p-[1.5em] text-white flex flex-col'>
            <div className='flex flex-col gap-[1em] text-center'>
                {/* check for correct tracking dimension (h1) */}
              <h1 className='text-[1rem] flex flex-col justify-center items-center text-lightBlue font-barlowCondensed uppercase tracking-[0.125em]'>So, you want to travel to <br />
                <span className='text-[5rem] text-white uppercase font-normal font-bellefair'>space</span>
              </h1>
              {/* make sure the break-all is not making the para undreadable */}
              <p className='text-lightBlue font-barlow leading-[180%]'>Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className=' h-[382px] w-full flex justify-center items-center relative z-30'>
                <button 
                // onClick={() => handleHoverOver()}
                onMouseEnter={() => setHover("white")} 
                onMouseLeave={() => setHover("")}
                onTouchStart={() => setHover("white")} 
                onTouchEnd={() =>  setHover("")} 

                className='z-50 font-bellefair relative cursor-pointer uppercase text-[1.125rem] text-veryDarkNavy w-[144px] min-h-[144px] rounded-full flex justify-center items-center bg-white select-none'>Explore</button>
                {/* look for the right dimensions */}
                <div className={`w-[320px] h-[320px] flex justify-center items-center rounded-full bg-${hover} opacity-[10%] absolute ease-in-out duration-700 z-40`}></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home