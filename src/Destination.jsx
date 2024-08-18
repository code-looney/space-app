import Box from "./components/Box"
import Container from "./components/Container"
import Header from "./components/Header"
import MobileMenu from "./components/MobileMenu"
import BoxContent from "./components/BoxContent"

const Home = () => {

  return (
    <Container className='flex flex-col bg-fixed items-center absolute bg-space h-screen bg-no-repeat bg-cover overflow-hidden w-full'>
     <Box>
      <Header />
      <MobileMenu />
      <BoxContent>

      </BoxContent>
     </Box>
    </Container>
  )
}

export default Home