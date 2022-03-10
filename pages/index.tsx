import type { NextPage } from 'next'
import Container from '../components/Container'
import Link from '../components/Link'

const Home: NextPage = () => {
  return (
    <Container
      screenClassName="bg-home-mobile tablet:bg-home-tablet desktop:bg-home-desktop"
      className="wrapper mt-12 flex flex-col items-center pb-12 tablet:mt-[106px] tablet:px-16 tablet:pb-[90px] desktop:mt-[251px] desktop:flex-row desktop:items-end desktop:justify-between desktop:px-0"
    >
      <div className="text-center desktop:max-w-[30vw] desktop:text-left">
        <h2 className="font-barlow-condensed uppercase tracking-[2.7px] text-blue-100 tablet:text-xl desktop:text-[28px]">
          so, you want to travel to
        </h2>
        <h1 className="mt-4 font-bellefair text-[80px] leading-[100px] text-white tablet:mt-6 tablet:text-[150px] tablet:leading-[150px]">
          SPACE
        </h1>
        <p className="mt-4 text-[15px] leading-[25px] text-blue-100 tablet:mt-6 desktop:text-lg desktop:leading-[32px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link href="/destination" className="explore-btn">
        EXPLORE
      </Link>
    </Container>
  )
}

export default Home
