import Box from "./Box"
import Container from "./Container"
import ExploreButton from "./ExploreButton"
import Header from "./Header"
import MobileMenu from "./MobileMenu"
import BoxContent from "./BoxContent"

const Home = () => {

  return (
    <Container className='flex flex-col bg-fixed items-center absolute bg-space-mobile md:space-tablet xl:bg-space-desk h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
     <Box>
      <Header />
      <MobileMenu />
      <BoxContent>
        <div className="flex flex-col xl:flex-row w-full h-screen items-center gap-[5em] relative ">
          <div className="gap-[1.5em] flex flex-col w-full  md:items-center xl:items-start xl:pl-[8em] xl:w-[1110px] xl:h-[632px] xl:justify-center">
            <h1
            className="flex flex-col uppercase text-center xl:text-start text-[1rem] xl:text-[1.75rem] font-barlowCondensed text-[#D5E0FF] tracking-[0.125em]
            ">
              So, you want to travel to
              <span
              className="text-white text-[5rem] font-bellefair break-all xl:text-[9erm]">
              Space</span>  
            </h1>
            <p className="text-[#D5E0FF]  leading-[180%] font-barlow text-center xl:text-start text-[0.9375em] lg:text-[1rem] lg:w-[510px] xl:w-[550px] xl:text-[1.125em]">
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
        <ExploreButton />
        </div>
      </BoxContent>
     </Box>
    </Container>
  )
}

export default Home