import React from 'react'
import Container from './Container'
import Box from './Box'
import Header from './Header'
import MobileMenu from './MobileMenu'
import BoxContent from './BoxContent'
import Title from './Title'
import TitleNumber from './TitleNumber'

const Crew = () => {
  return (
    <Container className='flex flex-col bg-fixed items-center absolute bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desk h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
    <Box>
     <Header />
     <Title><TitleNumber>02</TitleNumber>MEET YOUR CREW</Title>
     <MobileMenu />
     <BoxContent>
     </BoxContent>
    </Box>
   </Container>
  )
}

export default Crew