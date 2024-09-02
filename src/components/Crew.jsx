import React from 'react'
import Container from './Container'
import Box from './Box'
import Header from './Header'
import MobileMenu from './MobileMenu'
import BoxContent from './BoxContent'
import Title from './Title'
import TitleNumber from './TitleNumber'
import SubTitle from './SubTitle'
import Span from './Span'

const Crew = () => {
  return (
    <Container className='flex flex-col bg-fixed items-center absolute bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desk h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
    <Box>
     <Header />
     <Title><TitleNumber>02</TitleNumber>MEET YOUR CREW</Title>
     <MobileMenu />
     <BoxContent>
      <Container className="flex flex-col gap-[.5em]">
        <SubTitle>Commander</SubTitle>
        <Span>Douglas Hurley</Span>
        <p className='text-[#D5E0FF] text-center leading-[180%] text-[0.9375rem]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
          He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
      </Container>
     </BoxContent>
    </Box>
   </Container>
  )
}

export default Crew