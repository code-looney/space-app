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
import SmallDots from './SmallDots'
import Astronaut from './Astronaut'

const Crew = () => {

  function handleAstronautNav () {
    return console.log("test")
  }

  return (
    <Container className='flex flex-col bg-fixed items-center absolute bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desk h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
    <Box>
     <Header />
     <Title><TitleNumber>02</TitleNumber>MEET YOUR CREW</Title>
     <MobileMenu />
     <BoxContent>
      <Container className="flex flex-col gap-[.5em] h-[300px] justify-between">
        <Container className="flex flex-col gap-7">
          <Container className="flex flex-col gap-1">
            <SubTitle>Commander</SubTitle>
            <Span>Douglas Hurley</Span>
          </Container>
          <p className='text-[#D5E0FF] text-center leading-[180%] text-[0.9375rem]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.
            He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </Container>
        <SmallDots />
      </Container>
      <Astronaut path="public/assets/crew/image-douglas-hurley.png" />
     </BoxContent>
    </Box>
   </Container>
  )
}

export default Crew