import type { NextPage } from 'next'
import Container from '../components/Container'

const Home: NextPage = () => {
  return (
    <Container className="wrapper mt-12 flex flex-col items-center">
      <div className="text-center">
        <h2 className="font-barlow-condensed uppercase tracking-[2.7px] text-blue-100">
          so, you want to travel to
        </h2>
        <h1 className="font-bellefair text-[80px] text-white">SPACE</h1>
        <p className="text-[15px] leading-[25px] text-blue-100">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="mt-[81px] flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white font-bellefair text-xl tracking-[1.25px] text-blue-800">
        EXPLORE
      </button>
    </Container>
  )
}

export default Home
