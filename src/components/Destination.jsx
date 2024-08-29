import Box from "./Box"
import Container from "./Container"
import Header from "./Header"
import MobileMenu from "./MobileMenu"
import BoxContent from "./BoxContent"
import DestinationNavLinks from "./DestinationNavLinks"
import { Outlet } from "react-router-dom"
import Title from "./Title"
import TitleNumber from "./TitleNumber"

const Destination = () => {

  return (
    <Container className='flex flex-col bg-fixed items-center absolute bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desk h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
     <Box>
      <Header />
      <MobileMenu />
      <Title><TitleNumber>01</TitleNumber>Pick your destination</Title>
      <BoxContent>
        <Outlet />
      </BoxContent>
     </Box>
    </Container>
  )
}

export default Destination