import Container from '../components/Container'
import Heading2 from '../components/Heading2'
import SpaceData from '../data.json'
const { crew } = SpaceData

const Crew = () => {
  console.log(crew)

  return (
    <Container screenClassName="bg-crew-mobile" className="wrapper">
      <Heading2 number={2}>MEET YOUR CREW</Heading2>
      {/* slider */}
      {/* informations */}
    </Container>
  )
}

export default Crew
