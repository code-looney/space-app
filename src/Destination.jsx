import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import DestinationA from './components/DestinationA';

const Destination = () => {

  return (
    <div className='flex flex-col bg-fixed items-center bg-moon h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
      <div className='overflow-x-scrol overflow-x-hidden no-scrollbar w-full'>
          <Header /> 
          <MobileMenu />
          <div className='p-[1.5em] lg:p-[2.5em] text-white flex flex-col'>
            <div className='flex flex-col text-center items-center h-full'>
                {/* check for correct tracking dimension (h1) */}
              <h1 className='text-[1rem] lg:text-[1.75rem] flex gap-[.5em] w-full lg:justify-start justify-center text-lightBlue font-barlowCondensed uppercase tracking-[0.125em]'>
                <span className='font-bold opacity-25'>01</span> Pick your destination
              </h1>
              {/* make sure the break-all is not making the para undreada ble */}

            {/* destination a starts */}
              <DestinationA />
              {/* destination a ends */}

            </div>
          </div>
        </div>
    </div>
  )
}

export default Destination