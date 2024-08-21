import Box from "./Box"
import Container from "./Container"
import Header from "./Header"
import MobileMenu from "./MobileMenu"
import BoxContent from "./BoxContent"
import DestinationNavLinks from "./DestinationNavLinks"
import { Outlet } from "react-router-dom"

const Destination = () => {

  return (
    <Container className='flex flex-col bg-fixed items-center absolute bg-destination-mobile md:destination-tablet xl:bg-destination-desktop h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
     <Box>
      <Header />
      <MobileMenu />
      <div className="flex lg:pl-[2.5em] lg:mt-[3em] mt-[1em] lg:justify-start justify-center">
        <h1 className='text-[1rem] lg:text-[1.25rem] flex gap-[1.5em] justify-center items-center text-[#D5E0FF] font-barlowCondensed uppercase tracking-[0.125em] '>
          <span className='font-bold opacity-25'>01</span> Pick your destination
        </h1>
      </div>
      <BoxContent>
        <Outlet />
      </BoxContent>
     </Box>
    </Container>
  )
}

export default Destination