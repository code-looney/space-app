import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div className='flex flex-col bg-fixed items-center bg-parallax h-screen bg-no-repeat bg-cover overflow-hidden w-full break-all'>
        <div className='overflow-scroll no-scrollbar w-full'>
          <Header />
          <div className='p-[1.5em] outline text-white flex flex-col gap-[3em]'>
            <div className='flex flex-col gap-[1em] text-center'>
                {/* check for correct tracking dimension (h1) */}
              <h1 className='text-[1rem] flex flex-col justify-center items-center text-lightBlue font-barlowCondensed uppercase tracking-[0.125em]'>So, you want to travel to <br />
                <span className='text-[5rem] text-white uppercase font-normal font-bellefair'>space</span>
              </h1>
              {/* make sure the break-all is not making the para undreadable */}
              <p className='text-lightBlue font-barlow leading-[180%] outline'>Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className='h-[382px] w-full flex justify-center items-center'>
                <div><button>Explore</button></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home